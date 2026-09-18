export type MenuCategory = "all" | "signature" | "espresso" | "manual-brew" | "non-coffee" | "food";

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  isSignature?: boolean;
  isPopular?: boolean;
  tags?: string[];
  image?: string;
  tastingNotes?: string[];
  ingredients?: string[];
  pairing?: string;
}

export interface OperatingSchedule {
  days: string;
  hours: string;
  note?: string;
}

export interface CafeFacility {
  id: string;
  name: string;
  description: string;
  iconName: "Wifi" | "Zap" | "Coffee" | "Armchair" | "Clock" | "HeartHandshake" | "Sun" | "ShieldCheck";
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: "ambience" | "coffee" | "community";
  imageUrl: string;
}
