<script lang="ts">
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarDropdownWrapper,
		SidebarButton,
		uiHelpers
	} from 'flowbite-svelte';
	import { m } from '$lib/paraglide/messages';
	import { page } from '$app/state';
	import Icon from '@iconify/svelte';
	let activeUrl = $state(page.url.pathname);
	const demoSidebarUi = uiHelpers();

	let isNavOpen = $state(false);
	const closeDemoSidebar = demoSidebarUi.close;

	$effect(() => {
		isNavOpen = demoSidebarUi.isOpen;
		activeUrl = page.url.pathname;
	});

	let navItems = [
		{
			title: m['nav.insurees_and_family'](),
			icon: 'fluent:people-28-filled',
			items: [
				{
					title: m['nav.insurees'](),
					icon: 'ic:baseline-people',
					href: '/insurees-and-family/insurees'
				},
				{
					title: m['nav.families'](),
					icon: 'fa7-solid:people-line',
					href: '/insurees-and-family/families'
				}
			]
		}
	];
</script>

<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />
<Sidebar
	{activeUrl}
	backdrop={false}
	isOpen={isNavOpen}
	closeSidebar={closeDemoSidebar}
	params={{ x: -50, duration: 50 }}
	position="absolute"
	classes={{ nonactive: 'p-2', active: 'p-2' }}
	class="z-50 h-screen"
>
	<SidebarGroup>
		<div>
			<SidebarItem label="" href="">
				{#snippet icon()}
					<img src="/logo.png" alt="vigtra logo" />
				{/snippet}
			</SidebarItem>
		</div>
		{#each navItems as item}
			{#if item.items && item.items.length > 0}
				<SidebarDropdownWrapper label={item.title} btnClass="p-2">
					{#snippet icon()}
						<Icon icon={item.icon} class="w-7 h-auto" />
					{/snippet}
					{#each item.items as subItem}
						<SidebarItem label={subItem.title} href={subItem.href}>
							{#snippet icon()}
								<Icon icon={subItem.icon} class="w-7 h-auto" />
							{/snippet}
						</SidebarItem>
					{/each}
				</SidebarDropdownWrapper>
			{:else}
				<SidebarItem label={item.title} href="">
					{#snippet icon()}
						<Icon icon={item.icon} class="w-7 h-auto" />
					{/snippet}
				</SidebarItem>
			{/if}
		{/each}
	</SidebarGroup>
</Sidebar>
