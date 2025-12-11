
        
export interface NavigationLinkModel {
  title: string;
  url: string;
  iconName?: string;
}

export interface CTAButtonModel extends NavigationLinkModel {
  isPrimary: boolean;
}

export const MAIN_NAVIGATION_LINKS: NavigationLinkModel[] = [
  { title: "Home", url: "/", iconName: "Home" },
  { title: "About Us", url: "/about-us", iconName: "Info" },
  { title: "Core Committee", url: "/core-committee", iconName: "Users" },
  { title: "Contact", url: "/contact-us", iconName: "Mail" },
];

export const GLOBAL_CTAS: CTAButtonModel[] = [
  { 
    title: "Register Now", 
    url: "/registration-form", 
    iconName: "UserPlus",
    isPrimary: true,
  },
];

export const FOOTER_LINKS_COLUMN_1: NavigationLinkModel[] = [
  { title: "Club Bylaws", url: "/bylaws" },
  { title: "Mission & Vision", url: "/about-us" },
  { title: "Contact Us", url: "/contact-us" },
];

export const FOOTER_LINKS_COLUMN_2: NavigationLinkModel[] = [
  { title: "Registration", url: "/registration-form" },
  { title: "Events & Activities", url: "/projects-events" }, // Placeholder for future page
];
        
      