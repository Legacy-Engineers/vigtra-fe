import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'default' | 'ocean' | 'forest' | 'sunset' | 'purple' | 'rose';
export type ColorMode = 'light' | 'dark';

export interface ThemeConfig {
	theme: Theme;
	colorMode: ColorMode;
}

// Default theme configuration
const defaultTheme: ThemeConfig = {
	theme: 'default',
	colorMode: 'light'
};

// Create the theme store
function createThemeStore() {
	// Initialize from localStorage if in browser
	const initialTheme = browser 
		? JSON.parse(localStorage.getItem('themeConfig') || JSON.stringify(defaultTheme))
		: defaultTheme;

	const { subscribe, set, update } = writable<ThemeConfig>(initialTheme);

	return {
		subscribe,
		setTheme: (theme: Theme) => {
			update(config => {
				const newConfig = { ...config, theme };
				if (browser) {
					localStorage.setItem('themeConfig', JSON.stringify(newConfig));
					applyThemeToDocument(newConfig);
				}
				return newConfig;
			});
		},
		setColorMode: (colorMode: ColorMode) => {
			update(config => {
				const newConfig = { ...config, colorMode };
				if (browser) {
					localStorage.setItem('themeConfig', JSON.stringify(newConfig));
					applyThemeToDocument(newConfig);
				}
				return newConfig;
			});
		},
		toggleColorMode: () => {
			update(config => {
				const newColorMode: ColorMode = config.colorMode === 'light' ? 'dark' : 'light';
				const newConfig: ThemeConfig = { ...config, colorMode: newColorMode };
				if (browser) {
					localStorage.setItem('themeConfig', JSON.stringify(newConfig));
					applyThemeToDocument(newConfig);
				}
				return newConfig;
			});
		},
		init: () => {
			if (browser) {
				const stored = localStorage.getItem('themeConfig');
				if (stored) {
					const config = JSON.parse(stored);
					set(config);
					applyThemeToDocument(config);
				} else {
					applyThemeToDocument(defaultTheme);
				}
			}
		}
	};
}

// Apply theme to document
function applyThemeToDocument(config: ThemeConfig) {
	if (!browser) return;
	
	const html = document.documentElement;
	
	// Remove existing theme classes
	html.classList.remove('theme-default', 'theme-ocean', 'theme-forest', 'theme-sunset', 'theme-purple', 'theme-rose');
	html.classList.remove('light', 'dark');
	
	// Apply new theme classes
	html.classList.add(`theme-${config.theme}`);
	html.classList.add(config.colorMode);
}

export const themeStore = createThemeStore();

// Theme color definitions
export const themes: Record<Theme, { name: string; colors: { primary: string; secondary: string; accent: string } }> = {
	default: {
		name: 'Default',
		colors: { primary: '#3b82f6', secondary: '#64748b', accent: '#8b5cf6' }
	},
	ocean: {
		name: 'Ocean Blue',
		colors: { primary: '#0ea5e9', secondary: '#0284c7', accent: '#06b6d4' }
	},
	forest: {
		name: 'Forest Green',
		colors: { primary: '#10b981', secondary: '#059669', accent: '#34d399' }
	},
	sunset: {
		name: 'Sunset Orange',
		colors: { primary: '#f97316', secondary: '#ea580c', accent: '#fb923c' }
	},
	purple: {
		name: 'Purple Dream',
		colors: { primary: '#8b5cf6', secondary: '#7c3aed', accent: '#a855f7' }
	},
	rose: {
		name: 'Rose Gold',
		colors: { primary: '#e11d48', secondary: '#be185d', accent: '#f43f5e' }
	}
};