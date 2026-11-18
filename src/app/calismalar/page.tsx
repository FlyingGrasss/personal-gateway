import { ArrowUpRight } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { ProjectFilter } from "@/components/project-filter";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import {
  projectCategoryLabels,
  projectFilterCategories,
  projects,
  type Project,
} from "@/content/projects";
import { site } from "@/content/site";
import { constructMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Örnek Çalışmalar — Emre Bozkurt",
  description:
    "Gerçek ve çalışır durumda projeler: Emrebil okul yazılımı, RavenMUN konferans panelleri ve Aloyz dijital menü uygulaması.",
  path: "/calismalar",
});

const breadcrumb = breadcrumbSchema({
  items: [
    { name: "Ana Sayfa", url: new URL("/", site.url).toString() },
    {
      name: "Çalışmalar",
      url: new URL("/calismalar", site.url).toString(),
    },
  ],
});

export default function CalismalarPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <JsonLd data={breadcrumb} />

      <SectionHeading
        as="h1"
        eyebrow="Çalışmalar"
        title="Örnek Çalışmalar"
        description="Bu sayfada uydurma referans listesi yok; gerçek ve çalışır durumda projeler var: okul yönetimi için Emrebil, konferans panelleri RavenMUN, dijital menü uygulaması Aloyz."
      />

      <ProjectFilter
        className="mt-10"
        categories={projectFilterCategories}
        items={projects.map((project) => ({
          id: project.id,
          category: projectCategoryLabels[project.category],
          content: <ProjectCard project={project} />,
        }))}
      />

      <section className="mt-16 border-t border-border pt-10">
        <h2 className="text-2xl font-semibold tracking-tight">
          Benzer bir proje mi düşünüyorsunuz?
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
          Kapsamı ve elinizdeki malzemeyi konuşarak netleştirelim. İlk adım için
          kısa bir mesaj yeterli.
        </p>
        <WhatsAppCta
          className="mt-6"
          label="Benzer Bir Proje İçin Yazın"
          message="Merhaba, benzer bir proje için teklif almak istiyorum."
        />
      </section>
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-background p-6">
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {projectCategoryLabels[project.category]}
      </p>
      <h2 className="mt-4 text-lg font-medium tracking-tight">{project.name}</h2>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
        {project.short}
      </p>

      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-1 rounded-sm text-sm font-medium underline-offset-4 transition-colors hover:text-muted-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
        >
          Canlı siteyi gör
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          <span className="sr-only"> (yeni sekmede açılır)</span>
        </a>
      ) : null}
    </article>
  );
}
