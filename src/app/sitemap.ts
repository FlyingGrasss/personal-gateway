import type { MetadataRoute } from "next";

import { site } from "@/content/site";

const paths = [
  "/",
  "/hizmetler",
  "/hizmetler/kurumsal-web-sitesi",
  "/hizmetler/e-ticaret-sitesi",
  "/hizmetler/tanitim-sitesi",
  "/paketler",
  "/calismalar",
  "/hakkimda",
  "/iletisim",
  "/sektorler",
  "/sektorler/restoran-ve-kafe",
  "/sektorler/dis-klinigi",
  "/sektorler/guzellik-merkezi",
  "/sektorler/avukat",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.contentUpdatedAt);

  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified,
  }));
}
