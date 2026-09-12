export interface NavItem {
  label: string;
  href: string;
}

/**
 * The home page is a single scrolling page, so its links are anchors.
 * They are written absolutely (`/#id`) so the same list works on the
 * sermons and events pages too.
 */
export const primaryNav: NavItem[] = [
  { label: "What's on", href: "/#whats-on" },
  { label: "Sundays", href: "/#sundays" },
  { label: "Our story", href: "/#our-story" },
  { label: "Sermons", href: "/sermons" },
  { label: "Calendar", href: "/events" },
];

export const ctaNav: NavItem = { label: "Plan a visit", href: "/#visit" };
