<!-- TopNavBar.svelte -->
<script>
	// @ts-nocheck

	import { page } from '$app/state';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		DropdownHeader,
		DropdownDivider,
		Avatar,
		Badge,
		Button,
		Input,
		Indicator
	} from 'flowbite-svelte';
	import {
		SearchOutline,
		BellSolid,
		ChevronDownOutline,
		UserSettingsOutline,
		QuestionCircleOutline,
		GridSolid,
		ShieldOutline,
		FileZipOutline,
		CreditCardOutline,
		UsersGroupOutline,
		HeartOutline
	} from 'flowbite-svelte-icons';

	// Props
	let { user, showSearch = true, showNotifications = true } = $props();

	// State
	let searchQuery = $state('');
	let notifications = $state([
		{
			id: 1,
			message: 'New policy renewal available',
			type: 'info',
			unread: true,
			time: '2 hours ago'
		},
		{
			id: 2,
			message: 'Payment reminder: Due in 3 days',
			type: 'warning',
			unread: true,
			time: '4 hours ago'
		},
		{
			id: 3,
			message: 'Your claim has been approved',
			type: 'success',
			unread: false,
			time: '1 day ago'
		},
		{
			id: 4,
			message: 'Health screening appointment scheduled',
			type: 'info',
			unread: false,
			time: '2 days ago'
		}
	]);
	let hidden;

	// Navigation items
	const navItems = [
		{ name: 'Dashboard', href: '/dashboard', icon: GridSolid },
		{ name: 'Policies', href: '/policies', icon: ShieldOutline },
		{ name: 'Claims', href: '/claims', icon: FileZipOutline },
		{ name: 'Contributions', href: '/contributions', icon: CreditCardOutline },
		{ name: 'Family', href: '/family', icon: UsersGroupOutline },
		{ name: 'Health Records', href: '/health', icon: HeartOutline }
	];

	function handleSearch() {
		if (searchQuery.trim()) {
			// Handle search functionality
			console.log('Searching for:', searchQuery);
		}
	}

	/**
	 * @param {{ key: string; }} event
	 */
	function handleKeyPress(event) {
		if (event.key === 'Enter') {
			handleSearch();
		}
	}

	function markAllNotificationsRead() {
		notifications = notifications.map((n) => ({ ...n, unread: false }));
	}

	function handleSignOut() {
		// Handle sign out
		console.log('Signing out...');
	}

	let unreadCount = $derived(notifications.filter((n) => n.unread).length);
	let currentPath = $derived(page.url.pathname);
</script>

<Navbar
	class="gradient-healthcare-primary border-primary-400/20 glass sticky top-0 z-50 border-b shadow-lg"
	fluid={false}
	color="none"
>
	<!-- Brand Section -->
	<NavBrand href="/" class="ml-0">
		<div class="flex items-center gap-3">
			<div
				class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/15 backdrop-blur-sm"
			>
				<HeartOutline class="h-6 w-6 text-white" />
			</div>
			<span class="self-center text-xl font-bold tracking-tight text-white">Vigtra</span>
		</div>
	</NavBrand>

	<!-- Desktop Navigation -->
	<div class="flex items-center space-x-3 md:order-2">
		<!-- Search -->
		{#if showSearch}
			<div class="relative hidden md:block">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<SearchOutline class="h-4 w-4 text-white/60" />
				</div>
				<Input
					bind:value={searchQuery}
					onkeypress={handleKeyPress}
					placeholder="Search policies, claims, members..."
					class="w-80 border-white/20 bg-white/10 pl-10 text-white placeholder-white/60 focus:border-white/40 focus:ring-white/20"
					size="sm"
				/>
			</div>
		{/if}

		<!-- Notifications -->
		{#if showNotifications}
			<div class="relative">
				<Button
					size="sm"
					class="relative border-white/20 bg-white/10 !p-2.5 text-white hover:bg-white/20"
					id="notifications-button"
				>
					<BellSolid class="h-5 w-5" />
					{#if unreadCount > 0}
						<Indicator color="red" border size="xl" placement="top-right">
							<span class="text-xs font-bold">{unreadCount}</span>
						</Indicator>
					{/if}
				</Button>

				<Dropdown triggeredBy="#notifications-button" class="z-20 w-80">
					<DropdownHeader class="flex items-center justify-between">
						<span class="text-sm font-semibold text-gray-900">Notifications</span>
						<Button
							size="xs"
							color="primary"
							outline
							onclick={markAllNotificationsRead}
							class="text-xs"
						>
							Mark all read
						</Button>
					</DropdownHeader>

					<div class="max-h-64 overflow-y-auto">
						{#each notifications as notification}
							<DropdownItem class="flex items-start space-x-3 p-3 hover:bg-gray-50">
								<div class="flex-shrink-0">
									<div
										class="mt-2 h-2 w-2 rounded-full {notification.type === 'success'
											? 'bg-green-500'
											: notification.type === 'warning'
												? 'bg-yellow-500'
												: notification.type === 'error'
													? 'bg-red-500'
													: 'bg-blue-500'}"
									></div>
								</div>
								<div class="min-w-0 flex-1">
									<p class="mb-1 text-sm text-gray-900">{notification.message}</p>
									<p class="text-xs text-gray-500">{notification.time}</p>
								</div>
								{#if notification.unread}
									<div class="flex-shrink-0">
										<div class="bg-primary-500 h-2 w-2 rounded-full"></div>
									</div>
								{/if}
							</DropdownItem>
						{/each}
					</div>

					<DropdownDivider />
					<DropdownItem
						href="/notifications"
						class="text-primary-600 hover:text-primary-700 text-center"
					>
						View all notifications
					</DropdownItem>
				</Dropdown>
			</div>
		{/if}

		<!-- User Menu -->
		<div class="flex items-center">
			<Button
				class="flex items-center space-x-2 border-white/20 bg-white/10 text-white hover:bg-white/20"
				id="user-menu-button"
				size="sm"
			>
				<Avatar src={user?.avatar} alt={user?.name || 'User'} size="xs" class="bg-white/20">
					{user?.name?.charAt(0) || 'U'}
				</Avatar>
				<div class="hidden text-left md:block">
					<div class="text-sm font-semibold">{user?.name || 'User'}</div>
					<div class="text-xs opacity-80">{user?.role || 'Member'}</div>
				</div>
				<ChevronDownOutline class="h-4 w-4" />
			</Button>

			<Dropdown triggeredBy="#user-menu-button" class="z-20 w-64">
				<DropdownHeader>
					<div class="flex items-center space-x-3">
						<Avatar src={user?.avatar} alt={user?.name || 'User'} size="md" class="bg-primary-100">
							{user?.name?.charAt(0) || 'U'}
						</Avatar>
						<div>
							<div class="font-semibold text-gray-900">{user?.name || 'User Name'}</div>
							<div class="text-sm text-gray-500">{user?.email || 'user@example.com'}</div>
							<Badge color="green" class="mt-1 text-xs">
								{user?.role || 'Member'}
							</Badge>
						</div>
					</div>
				</DropdownHeader>

				<DropdownItem href="/profile" class="flex items-center space-x-2">
					<UserSettingsOutline class="h-4 w-4" />
					<span>Profile & Settings</span>
				</DropdownItem>

				<DropdownItem href="/preferences" class="flex items-center space-x-2">
					<UserSettingsOutline class="h-4 w-4" />
					<span>Preferences</span>
				</DropdownItem>

				<DropdownItem href="/help" class="flex items-center space-x-2">
					<QuestionCircleOutline class="h-4 w-4" />
					<span>Help & Support</span>
				</DropdownItem>

				<DropdownDivider />

				<DropdownItem
					on:click={handleSignOut}
					class="flex items-center space-x-2 text-red-600 hover:bg-red-50 hover:text-red-700"
				>
					<SignOutAltOutline class="h-4 w-4" />
					<span>Sign Out</span>
				</DropdownItem>
			</Dropdown>
		</div>

		<!-- Mobile menu button -->
		<NavHamburger class="text-white hover:bg-white/10 md:hidden" on:click={toggle} />
	</div>

	<!-- Desktop Navigation Links -->
	<NavUl {hidden} class="order-1 hidden md:mt-0 md:flex md:space-x-1">
		{#each navItems as item}
			<NavLi
				href={item.href}
				class="hover:text-white/ flex items-center space-x-2 rounded-lg px-3 py-2 text-slate-300 transition-all duration-200 hover:bg-slate-900 {currentPath.startsWith(
					item.href
				)
					? 'bg-slate-900 font-semibold text-white'
					: ''}"
			>
				<!-- svelte-ignore svelte_component_deprecated -->
				<svelte:component this={item.icon} class="h-4 w-4" />
				<span class="text-sm font-medium">{item.name}</span>
			</NavLi>
		{/each}
	</NavUl>

	<!-- Mobile Navigation -->
	<NavUl {hidden} class="mt-4 space-y-2 md:hidden">
		<!-- Mobile Search -->
		{#if showSearch}
			<div class="border-b border-white/20 px-3 pb-3">
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<SearchOutline class="h-4 w-4 text-white/60" />
					</div>
					<Input
						bind:value={searchQuery}
						on:keypress={handleKeyPress}
						placeholder="Search..."
						class="w-full border-white/20 bg-white/10 pl-10 text-white placeholder-white/60"
						size="sm"
					/>
				</div>
			</div>
		{/if}

		<!-- Mobile Navigation Items -->
		{#each navItems as item}
			<NavLi
				href={item.href}
				class="flex items-center space-x-3 rounded-lg px-3 py-3 text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white {currentPath.startsWith(
					item.href
				)
					? 'bg-white/15 font-semibold text-white'
					: ''}"
				on:click={toggle}
			>
				<!-- svelte-ignore svelte_component_deprecated -->
				<svelte:component this={item.icon} class="h-5 w-5" />
				<span class="font-medium">{item.name}</span>
			</NavLi>
		{/each}
	</NavUl>
</Navbar>
