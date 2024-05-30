import SettingsProfileSection from "@/pages/settings/ProfileSection";
import SettingsInfoSection from "@/pages/settings/InfoSection";
import SettingsSeatsSection from "@/pages/settings/SeatsSection";
import SettingsContactSection from "@/pages/settings/ContactSection";
import SettingsIntegrationsSection from "@/pages/settings/IntegrationsSection";
import { PersonIcon, MixerHorizontalIcon, EnterIcon, ExitIcon } from "@radix-ui/react-icons";

export interface MenuConfig {
  id: number;
  name: string;
  path: string;
  icon?: any;
}

export interface SettingTab {
  id: number;
  name: string;
  value: string;
  section: () => React.JSX.Element;
}

export interface SelectConfig {
  id: number;
  value: string;
}

export const navbarConfig: MenuConfig[] = [
  {
    id: 1,
    name: "Dashbaord",
    path: "/"
  },
  {
    id: 2,
    name: "Messages",
    path: "/"
  },
  {
    id: 3,
    name: "Campaigns",
    path: "/"
  },
  {
    id: 4,
    name: "Studio",
    path: "/"
  },
];

export const userMenuConfig: MenuConfig[] = [
  {
    id: 1,
    name: "Profile",
    path: "/",
    icon: PersonIcon
  },
  {
    id: 2,
    name: "Settings",
    path: "/",
    icon: MixerHorizontalIcon
  },
  {
    id: 3,
    name: "Login with another user",
    path: "/",
    icon: EnterIcon
  },
  {
    id: 4,
    name: "Log Out",
    path: "/",
    icon: ExitIcon
  },
];

export const settingTabs: SettingTab[] = [
  {
    id: 1,
    name: "Your Profile",
    value: "profile",
    section: SettingsProfileSection
  },
  {
    id: 2,
    name: "Company Info",
    value: "company",
    section: SettingsInfoSection
  },
  {
    id: 3,
    name: "Manage Seats",
    value: "seats",
    section: SettingsSeatsSection
  },
  {
    id: 4,
    name: "Do not Contact",
    value: "contact",
    section: SettingsContactSection
  },
  {
    id: 5,
    name: "Integrations",
    value: "integrations",
    section: SettingsIntegrationsSection
  },
];

export const companySize: SelectConfig[] = [
  {
    id: 1,
    value: "1-10"
  },
  {
    id: 2,
    value: "10-100"
  },
  {
    id: 3,
    value: "100-500"
  },
  {
    id: 4,
    value: "1000+"
  },
];

export const fundingRoundConfig: SelectConfig[] = [
  {
    id: 1,
    value: "Seed Round"
  },
  {
    id: 2,
    value: "Serious A"
  },
  {
    id: 3,
    value: "Serious B"
  },
  {
    id: 4,
    value: "Serious C"
  },
];

export const footerConfig: MenuConfig[] = [
  {
    id: 1,
    name: "Contact Support",
    path: "/"
  },
  {
    id: 2,
    name: "About Us",
    path: "/"
  },
  {
    id: 3,
    name: "Terms",
    path: "/"
  },
  {
    id: 4,
    name: "Privacy",
    path: "/"
  },
  {
    id: 5,
    name: "LinkedIn",
    path: "/"
  },
  {
    id: 6,
    name: "X",
    path: "/"
  },
];