export type PortfolioCategory = "primary" | "middle" | "high";
export type PortfolioType = "activity" | "promo" | "album" | "film";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  type: PortfolioType;
  school: string;
  description: string;
  image: string;
  featured: boolean;
  createdAt: string;
}

export interface PartnerSchool {
  id: string;
  name: string;
  level: PortfolioCategory;
}

export interface SiteConfig {
  contact: {
    phone: string;
    email: string;
    wechat: string;
    address: string;
  };
  stats: {
    schools: string;
    events: string;
    albums: string;
    films: string;
    students: string;
    satisfaction: string;
  };
}

export interface PortfolioData {
  items: PortfolioItem[];
}

export interface PartnersData {
  schools: PartnerSchool[];
}
