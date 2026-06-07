import fs from "fs/promises";
import path from "path";
import type {
  PartnersData,
  PortfolioData,
  PortfolioItem,
  PartnerSchool,
  SiteConfig,
} from "@/types";

const DATA_DIR = path.join(process.cwd(), "data");

async function readJson<T>(filename: string): Promise<T> {
  const filePath = path.join(DATA_DIR, filename);
  const content = await fs.readFile(filePath, "utf-8");
  return JSON.parse(content) as T;
}

async function writeJson<T>(filename: string, data: T): Promise<void> {
  const filePath = path.join(DATA_DIR, filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

export async function getSiteConfig(): Promise<SiteConfig> {
  return readJson<SiteConfig>("site.json");
}

export async function getPortfolio(): Promise<PortfolioData> {
  const data = await readJson<PortfolioData>("portfolio.json");
  data.items = data.items.map((item) => ({
    ...item,
    mediaType: item.mediaType ?? "photo",
    video: item.video ?? "",
  }));
  return data;
}

export async function getPartners(): Promise<PartnersData> {
  return readJson<PartnersData>("partners.json");
}

export async function savePortfolio(data: PortfolioData): Promise<void> {
  await writeJson("portfolio.json", data);
}

export async function savePartners(data: PartnersData): Promise<void> {
  await writeJson("partners.json", data);
}

export async function addPortfolioItem(
  item: Omit<PortfolioItem, "id" | "createdAt">
): Promise<PortfolioItem> {
  const data = await getPortfolio();
  const newItem: PortfolioItem = {
    ...item,
    id: `work-${Date.now()}`,
    createdAt: new Date().toISOString().split("T")[0],
  };
  data.items.unshift(newItem);
  await savePortfolio(data);
  return newItem;
}

export async function updatePortfolioItem(
  id: string,
  updates: Partial<PortfolioItem>
): Promise<PortfolioItem | null> {
  const data = await getPortfolio();
  const index = data.items.findIndex((item) => item.id === id);
  if (index === -1) return null;
  data.items[index] = { ...data.items[index], ...updates };
  await savePortfolio(data);
  return data.items[index];
}

export async function deletePortfolioItem(id: string): Promise<boolean> {
  const data = await getPortfolio();
  const initialLength = data.items.length;
  data.items = data.items.filter((item) => item.id !== id);
  if (data.items.length === initialLength) return false;
  await savePortfolio(data);
  return true;
}

export async function addPartner(
  school: Omit<PartnerSchool, "id">
): Promise<PartnerSchool> {
  const data = await getPartners();
  const newSchool: PartnerSchool = {
    ...school,
    id: `partner-${Date.now()}`,
  };
  data.schools.push(newSchool);
  await savePartners(data);
  return newSchool;
}

export async function deletePartner(id: string): Promise<boolean> {
  const data = await getPartners();
  const initialLength = data.schools.length;
  data.schools = data.schools.filter((s) => s.id !== id);
  if (data.schools.length === initialLength) return false;
  await savePartners(data);
  return true;
}
