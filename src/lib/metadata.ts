import type { Metadata } from "next";

import { site } from "@/content/site";

export type ConstructMetadataInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function constructMetadata({
  title,
  description,
  path,
  noIndex = false,
}: ConstructMetadataInput): Metadata {
  const pathname = path.startsWith("/") ? path : `/${path}`;
  const canonical = new URL(pathname, site.url).toString();

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: canonical,
      siteName: site.name,
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
