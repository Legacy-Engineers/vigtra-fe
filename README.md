# 🎨 Modern SvelteKit App with Themes & i18n

A beautiful, modern SvelteKit application featuring comprehensive theming system and full internationalization support using Paraglide.

## ✨ Features

- **🎨 Multiple Beautiful Themes**: Choose from 6 carefully crafted color schemes
  - Default (Blue)
  - Ocean Blue
  - Forest Green
  - Sunset Orange
  - Purple Dream
  - Rose Gold
- **🌙 Dark/Light Mode**: Seamless dark and light mode switching
- **🌍 Full Internationalization**: Support for multiple languages using Paraglide
  - English (en)
  - Spanish (es)
  - French (fr)
- **📱 Responsive Design**: Works perfectly on all devices and screen sizes
- **⚡ Modern Tech Stack**: Built with SvelteKit, TailwindCSS, TypeScript, and Paraglide
- **🎯 Type-Safe i18n**: Compile-time type safety for translations
- **💾 Persistent Settings**: Theme and language preferences saved to localStorage

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   cd <project-name>
   ```

2. **Install dependencies**
   ```sh
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```sh
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Development

### Available Scripts

```sh
# Development
pnpm dev              # Start development server
pnpm dev -- --open    # Start dev server and open browser

# Building
pnpm build           # Build for production
pnpm preview         # Preview production build

# Code Quality
pnpm lint            # Lint code
pnpm format          # Format code with Prettier
pnpm check           # Type check
pnpm check:watch     # Type check in watch mode

# Testing
pnpm test            # Run all tests
pnpm test:unit       # Run unit tests
pnpm test:e2e        # Run end-to-end tests
```

### Adding New Languages

1. **Add locale to Paraglide config**
   ```json
   // project.inlang/settings.json
   {
     "locales": ["en", "es", "fr", "de"] // Add your locale
   }
   ```

2. **Create message file**
   ```sh
   # Create messages/de.json with translations
   cp messages/en.json messages/de.json
   ```

3. **Update translations**
   Edit the new message file with appropriate translations

4. **Compile Paraglide**
   ```sh
   npx @inlang/paraglide-js compile --project ./project.inlang --outdir ./src/lib/paraglide
   ```

### Adding New Themes

1. **Define theme in CSS**
   ```css
   /* src/app.css */
   .theme-mytheme {
     --primary: #your-color;
     --secondary: #your-color;
     --accent: #your-color;
   }
   ```

2. **Add to theme store**
   ```typescript
   // src/lib/stores/theme.ts
   export const themes = {
     // ... existing themes
     mytheme: {
       name: 'My Theme',
       colors: { primary: '#...', secondary: '#...', accent: '#...' }
     }
   };
   ```

3. **Add translations**
   Add `"theme_mytheme": "My Theme"` to all message files

## 🏗️ Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable UI components
│   │   ├── ThemeSelector.svelte
│   │   ├── ColorModeToggle.svelte
│   │   └── LanguageSelector.svelte
│   ├── stores/             # Svelte stores
│   │   └── theme.ts        # Theme management
│   ├── paraglide/          # Generated i18n files
│   └── assets/             # Static assets
├── routes/                 # SvelteKit routes
│   ├── +layout.svelte      # Main layout
│   ├── +page.svelte        # Home page
│   └── demo/               # Demo pages
├── app.css                 # Global styles and theme variables
└── app.html                # HTML template
```

## 🎨 Theme System

The application features a comprehensive theme system with:

- **CSS Custom Properties**: Dynamic theming using CSS variables
- **Persistent Storage**: Theme preferences saved to localStorage
- **Smooth Transitions**: Animated theme changes
- **Type-Safe**: TypeScript interfaces for theme configuration

### Theme Structure

Each theme defines three main colors:
- **Primary**: Main brand color
- **Secondary**: Supporting color
- **Accent**: Highlight color

Both light and dark variants are supported for each theme.

## 🌍 Internationalization

Powered by [Paraglide](https://inlang.com/m/gerre34r/library-inlang-paraglideJs), providing:

- **Type-Safe Translations**: Compile-time type checking
- **Tree-Shaking**: Only bundle used translations
- **Hot Reloading**: Instant updates during development
- **Message Interpolation**: Dynamic content in translations

### Message Format

```json
{
  "welcome_title": "Welcome to {appName}!",
  "user_greeting": "Hello, {name}!"
}
```

## 🚀 Deployment

### Building for Production

```sh
pnpm build
```

### Deployment Options

This project uses `@sveltejs/adapter-node` by default. For other deployment targets:

- **Vercel**: `@sveltejs/adapter-vercel`
- **Netlify**: `@sveltejs/adapter-netlify`
- **Static**: `@sveltejs/adapter-static`

Update `svelte.config.js` with your preferred adapter.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [SvelteKit Documentation](https://svelte.dev/docs/kit)
- [Paraglide Documentation](https://inlang.com/m/gerre34r/library-inlang-paraglideJs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
