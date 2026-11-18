export type ProjectCategory = "web" | "panel" | "mobil";

export type Project = {
  id: string;
  name: string;
  category: ProjectCategory;
  liveUrl: string;
  short: string;
};

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  web: "Web Uygulaması",
  panel: "Panel–Dashboard",
  mobil: "Mobil",
};

export const projectFilterCategories = [
  projectCategoryLabels.web,
  projectCategoryLabels.panel,
  projectCategoryLabels.mobil,
] as const;

export const projects: readonly Project[] = [
  {
    id: "emrebil",
    name: "Emrebil Okul Yazılımı",
    category: "web",
    liveUrl: "https://fagc26.org",
    short:
      "Okul yönetimi: ders programı üretimi, veri yönetimi ve raporlama.",
  },
  {
    id: "ravenmun",
    name: "RavenMUN — konferans panelleri",
    category: "panel",
    // TODO: canlı URL kullanıcı onayı
    liveUrl: "",
    short:
      "Model BM konferansları için başvuru, ödeme ve komite yönetim panelleri.",
  },
  {
    id: "aloyz",
    name: "Aloyz",
    category: "mobil",
    // TODO: canlı URL kullanıcı onayı
    liveUrl: "",
    short: "Kuaför ve işletmeler için dijital menü uygulaması.",
  },
];
