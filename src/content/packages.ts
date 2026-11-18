export type PackageComparison = {
  design: string;
  pages: string;
  sections: string;
  content: string;
  seo: string;
  mobile: string;
  handover: string;
};

export type Package = {
  slug: string;
  name: string;
  audience: string;
  description: string;
  price: string;
  scope: readonly string[];
  comparison: PackageComparison;
};

// Fiyatlar kullanıcı onayı gelene kadar boş bırakıldı.
// Arayüzde boş fiyat yerine "Fiyat için yazın" bağlantısı gösterilir.

export const packageRenewalNote = "Yenileme ve bakım ayrıca konuşulur.";

export const packages = [
  {
    slug: "baslangic",
    name: "Başlangıç",
    audience: "Kurumsal tanıtım",
    description:
      "Yeni kurulan veya tek sayfada kendini anlatmak isteyen işletmeler için sade bir başlangıç.",
    // TODO: kullanıcı onayı — gerçek fiyat
    price: "",
    scope: [
      "Özel tasarım",
      "Sayfa kurulumu (tek sayfa veya az sayfa)",
      "İçerik yerleştirme",
      "Temel SEO ayarları",
      "Mobil uyum",
      "Teslim",
      // [KULLANICI ONAYI] hosting kurulumu
      // [KULLANICI ONAYI] yedekleme
      // [KULLANICI ONAYI] teslim sonrası destek süresi
    ],
    comparison: {
      design: "Sade, özel tasarım",
      pages: "Tek sayfa veya az sayfa",
      sections: "Temel tanıtım bölümleri",
      content: "Dahil",
      seo: "Dahil",
      mobile: "Dahil",
      handover: "Dahil",
    },
  },
  {
    slug: "profesyonel",
    name: "Profesyonel",
    audience: "Randevu veya ürün tanıtan işletmeler",
    description:
      "Randevu talebi alan, ürünlerini tanıtan veya birden fazla hizmeti olan işletmeler için genişletilmiş bir site.",
    // TODO: kullanıcı onayı — gerçek fiyat
    price: "",
    scope: [
      "Özel tasarım",
      "Sayfa kurulumu (çok sayfalı yapı)",
      "Randevu veya ürün tanıtım bölümleri",
      "İçerik yerleştirme",
      "Temel SEO ayarları",
      "Mobil uyum",
      "Teslim",
      // [KULLANICI ONAYI] hosting kurulumu
      // [KULLANICI ONAYI] yedekleme
      // [KULLANICI ONAYI] teslim sonrası destek süresi
    ],
    comparison: {
      design: "Markaya uygun özel tasarım",
      pages: "Birden fazla hizmet sayfası",
      sections: "Randevu veya ürün tanıtım bölümleri",
      content: "Dahil",
      seo: "Dahil",
      mobile: "Dahil",
      handover: "Dahil",
    },
  },
  {
    slug: "kurumsal",
    name: "Kurumsal",
    audience: "Markaya özel tasarım ve gelişmiş ihtiyaçlar",
    description:
      "Markasını ayrıştırmak, daha geniş bir sayfa yapısı kurmak veya özel bölümler eklemek isteyenler için.",
    // TODO: kullanıcı onayı — gerçek fiyat
    price: "",
    scope: [
      "Markaya özel tasarım",
      "Sayfa kurulumu (geniş sayfa yapısı)",
      "İhtiyaca göre özel bölümler",
      "İçerik yerleştirme",
      "Temel SEO ayarları",
      "Mobil uyum",
      "Teslim",
      // [KULLANICI ONAYI] hosting kurulumu
      // [KULLANICI ONAYI] yedekleme
      // [KULLANICI ONAYI] teslim sonrası destek süresi
    ],
    comparison: {
      design: "Markaya özel, detaylı tasarım",
      pages: "Geniş sayfa yapısı",
      sections: "İhtiyaca göre özel bölümler",
      content: "Dahil",
      seo: "Dahil",
      mobile: "Dahil",
      handover: "Dahil",
    },
  },
] as const satisfies readonly Package[];

export const packageComparisonRows = [
  { key: "design", label: "Tasarım" },
  { key: "pages", label: "Sayfa yapısı" },
  { key: "sections", label: "Bölümler" },
  { key: "content", label: "İçerik yerleştirme" },
  { key: "seo", label: "Temel SEO" },
  { key: "mobile", label: "Mobil uyum" },
  { key: "handover", label: "Teslim" },
] as const satisfies readonly { key: keyof PackageComparison; label: string }[];
