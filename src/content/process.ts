export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps = [
  {
    title: "WhatsApp'tan anlat",
    description:
      "İşinizi, hedef kitlenizi ve aklınızdaki siteyi birkaç cümleyle yazın. Uzun bir form doldurmanız gerekmiyor.",
  },
  {
    title: "Birlikte planlayalım",
    description:
      "Hangi sayfaların gerektiğini, içeriğin kimde olduğunu ve öncelikleri konuşuyoruz. Gereksiz işleri baştan eliyoruz.",
  },
  {
    title: "Net teklif",
    description:
      "Kapsamı, teslim tarihini ve fiyatı yazılı olarak paylaşıyorum. Onaylamadan hiçbir iş başlamıyor.",
  },
  {
    title: "Geliştirme",
    description:
      "Tasarımı ve sayfaları hazırlıyorum; ilerledikçe bağlantıyı paylaşıp geri bildirim alıyorum. İçerik değişikliklerini birlikte yerleştiriyoruz.",
  },
  {
    title: "Teslim ve destek",
    description:
      "Siteyi yayına alıyor, temel ayarları kontrol ediyorum. Teslim sonrası sorularınız için WhatsApp'tan ulaşabilirsiniz; destek süresi ve kapsamı teklifte yazılı olur.",
  },
] as const satisfies readonly ProcessStep[];
