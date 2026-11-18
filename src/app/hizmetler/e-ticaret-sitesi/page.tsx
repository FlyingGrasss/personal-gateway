import { getService } from "@/content/services";
import { constructMetadata } from "@/lib/metadata";

import { ServiceDetail } from "../_components/service-detail";

const service = getService("e-ticaret-sitesi");

export const metadata = constructMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/hizmetler/${service.slug}`,
});

export default function ETicaretSitesiPage() {
  return <ServiceDetail service={service} />;
}
