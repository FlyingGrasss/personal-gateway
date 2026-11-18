export type JsonLdObject = Record<string, unknown>;

const SCHEMA_CONTEXT = "https://schema.org";

export type ProfessionalServiceInput = {
  name: string;
  description: string;
  url: string;
  id?: string;
  image?: string | string[];
  telephone?: string;
  email?: string;
  areaServed?: string | string[];
  priceRange?: string;
  sameAs?: string[];
  services?: Array<{
    name: string;
    description?: string;
    url?: string;
  }>;
};

export function professionalServiceSchema(
  input: ProfessionalServiceInput,
): JsonLdObject {
  const services = input.services?.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
      ...(service.description ? { description: service.description } : {}),
      ...(service.url ? { url: service.url } : {}),
    },
  }));

  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "ProfessionalService",
    ...(input.id ? { "@id": input.id } : {}),
    name: input.name,
    description: input.description,
    url: input.url,
    ...(input.image ? { image: input.image } : {}),
    ...(input.telephone ? { telephone: input.telephone } : {}),
    ...(input.email ? { email: input.email } : {}),
    ...(input.areaServed ? { areaServed: input.areaServed } : {}),
    ...(input.priceRange ? { priceRange: input.priceRange } : {}),
    ...(input.sameAs?.length ? { sameAs: input.sameAs } : {}),
    ...(services?.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: input.name,
            itemListElement: services,
          },
        }
      : {}),
  };
}

export type FaqEntry = {
  question: string;
  answer: string;
};

export type FaqPageInput = {
  items: readonly FaqEntry[];
};

export function faqPageSchema(input: FaqPageInput): JsonLdObject {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "FAQPage",
    mainEntity: input.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export type BreadcrumbEntry = {
  name: string;
  url: string;
};

export type BreadcrumbSchemaInput = {
  items: readonly BreadcrumbEntry[];
};

export function breadcrumbSchema(
  input: BreadcrumbSchemaInput,
): JsonLdObject {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export type PersonInput = {
  name: string;
  url: string;
  id?: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  email?: string;
  sameAs?: string[];
  knowsAbout?: string[];
  worksFor?: {
    name: string;
    url?: string;
  };
};

export function personSchema(input: PersonInput): JsonLdObject {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "Person",
    ...(input.id ? { "@id": input.id } : {}),
    name: input.name,
    url: input.url,
    ...(input.jobTitle ? { jobTitle: input.jobTitle } : {}),
    ...(input.description ? { description: input.description } : {}),
    ...(input.image ? { image: input.image } : {}),
    ...(input.email ? { email: input.email } : {}),
    ...(input.sameAs?.length ? { sameAs: input.sameAs } : {}),
    ...(input.knowsAbout?.length ? { knowsAbout: input.knowsAbout } : {}),
    ...(input.worksFor
      ? {
          worksFor: {
            "@type": "Organization",
            name: input.worksFor.name,
            ...(input.worksFor.url ? { url: input.worksFor.url } : {}),
          },
        }
      : {}),
  };
}
