export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceSlug =
  | "kurumsal-web-sitesi"
  | "e-ticaret-sitesi"
  | "tanitim-sitesi";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortIntro: string;
  fullIntro: string;
  scope: readonly string[];
  faqs: readonly ServiceFaq[];
  metaTitle: string;
  metaDescription: string;
};

export const services = [
  {
    slug: "kurumsal-web-sitesi",
    title: "Kurumsal Web Sitesi Tasarımı ve Geliştirme",
    shortIntro:
      "Şirketinizi ve hizmetlerinizi sade bir dille anlatan, telefonda hızlı açılan kurumsal bir site.",
    fullIntro:
      "Kurumsal sitenin ilk işi, gelen ziyaretçiye ne yaptığınızı birkaç saniyede anlatmak. Hizmetlerinizi, çalışma biçiminizi ve iletişim bilgilerinizi tek bir yapıda topluyorum. Tasarımı markanızın renklerine ve tonuna göre kuruyor; gereksiz animasyon ve süs yerine okunabilir bir düzen tercih ediyorum.",
    scope: [
      "İhtiyaca göre planlanan sayfa yapısı",
      "Markaya uygun özel tasarım",
      "Hizmetler, hakkımızda ve iletişim bölümleri",
      "Mobil ve masaüstünde okunabilir düzen",
      "Temel SEO ayarları",
      "Hafif sayfa yapısı",
      "Teslim öncesi kontrol ve yayına alma desteği",
    ],
    faqs: [
      {
        question: "Kurumsal site kaç sayfa olur?",
        answer:
          "Sayfa sayısı işinize göre değişiyor; teklifte hangi sayfaların kurulacağını tek tek yazıyorum. Az sayfayla başlayıp sonradan sayfa eklemek de mümkün.",
      },
      {
        question: "Alan adımı ve mevcut hostingimi kullanabilir miyim?",
        answer:
          "Alan adınızı kullanabiliriz. Mevcut hostinginiz uygunsa orada da yayına alabiliriz; değilse seçenekleri konuşuruz. Hosting ve alan adı yenileme giderleri teklifin dışında, ayrıca değerlendirilir.",
      },
      {
        question: "Siteyi kendim güncelleyebilir miyim?",
        answer:
          "İçerik güncellemesi için yönetim paneli isteyip istemediğinizi baştan konuşuyoruz. Panel kapsama girerse teklifte ayrıca yer alır; girmezse metin ve görsel değişiklikleri için bana yazabilirsiniz.",
      },
      {
        question: "Kod ve içerik kime ait?",
        answer:
          "Kod ve içerik size ait. Teslimde dosyaları ve erişimleri size devrediyorum; siteyi başka bir geliştiriciyle sürdürmenize engel olmam.",
      },
    ],
    metaTitle: "Kurumsal Web Sitesi Tasarımı ve Geliştirme — Emre Bozkurt",
    metaDescription:
      "Kurumsal web sitesi tasarımı ve geliştirme: hizmetlerinizi anlatan, mobil uyumlu ve temel SEO ayarları yapılmış sade bir site. Proje bazlı yazılı teklif.",
  },
  {
    slug: "e-ticaret-sitesi",
    title: "E-Ticaret Sitesi Kurulumu",
    shortIntro:
      "Ürünlerinizi düzenli bir katalogda gösteren, sepet ve ödeme adımını ihtiyacınıza göre kurgulayan e-ticaret sitesi.",
    fullIntro:
      "E-ticaret sitesinde önce ürünün bulunması, sonra satın alma adımının tıkanmaması gerekir. Ürünleri kategorilere ayırıyor; fotoğraf, fiyat ve açıklamaları okunabilir bir düzende yerleştiriyorum. Ödeme altyapısı ve sanal POS seçimini teklif aşamasında netleştiriyoruz.",
    scope: [
      "Ürün kataloğu ve ürün detay sayfaları",
      "Kategori ve arama yapısı",
      "Sepet akışı",
      "Ödeme adımı kurulumu (sağlayıcı seçimi teklifte netleşir)",
      "Mobil uyumlu tasarım",
      "Temel SEO ayarları",
      "Teslim öncesi test ve yayına alma desteği",
      // [KULLANICI ONAYI] kargo ve muhasebe entegrasyonları
    ],
    faqs: [
      {
        question: "Ödeme altyapısı nasıl seçiliyor?",
        answer:
          "Hangi altyapının işinize uyduğunu birlikte değerlendiriyoruz; komisyon ve masraflar sağlayıcıya göre değişiyor. Seçim ve kurulum teklifte netleşiyor.",
      },
      {
        question: "Ürünleri kim ekliyor?",
        answer:
          "Ürün listesini hazırlarsanız yerleştirmesini ben yapıyorum. Ürün sayısı ve varyasyon yapısı teklifin kapsamını belirliyor; çok büyük kataloglarda ayrıca planlıyoruz.",
      },
      {
        question: "Kargo takibi olacak mı?",
        answer:
          "Kargo entegrasyonu ihtiyaca göre değişiyor; hangi firmayla çalıştığınıza ve sipariş hacmine göre teklifte konuşuyoruz. Otomatik kargo takibi başlangıç kapsamına dahil değil.",
      },
      {
        question: "Mevcut ürünlerimi taşıyabilir miyim?",
        answer:
          "Ürünlerinizi Excel veya benzeri bir dosyayla paylaşırsanız aktarımı planlayabiliriz. Veri düzeni uygun değilse tek tek giriş gerekebilir; bunu teklifte açıkça yazıyorum.",
      },
    ],
    metaTitle: "E-Ticaret Sitesi Kurulumu — Emre Bozkurt",
    metaDescription:
      "E-ticaret sitesi kurulumu: ürün kataloğu, sepet ve ödeme adımı. Ödeme altyapısı ve kapsam teklifte netleşir; proje bazlı yazılı teklif.",
  },
  {
    slug: "tanitim-sitesi",
    title: "Uygun Fiyatlı Tanıtım Sitesi",
    shortIntro:
      "Yeni bir işletme veya tek sayfalık tanıtım için sade, mobil uyumlu ve hızlı bir site.",
    fullIntro:
      "İşletmenizin ne yaptığını, nerede olduğunu ve nasıl ulaşılacağını tek bir sayfada anlatmak çoğu zaman yeterli. Tanıtım sitesini kısa tutuyor, ilk ekranda hizmeti ve iletişim yolunu netleştiriyorum. Sayfa sayısı arttıkça kapsamı birlikte büyütüyoruz; gereksiz bölüm eklemiyorum.",
    scope: [
      "Tek sayfa veya az sayfalı tanıtım yapısı",
      "Özel tasarım",
      "Hizmet ve iletişim bölümleri",
      "WhatsApp ve telefon bağlantıları",
      "Konum bilgisi ve harita bağlantısı",
      "Temel SEO ayarları",
      "Mobil uyum",
      "Teslim",
    ],
    faqs: [
      {
        question: "Tek sayfa yeterli mi?",
        answer:
          "İşletmenizin hizmeti tek bir konuysa genellikle yeterli. Birden fazla hizmet, ekip veya şube varsa ayrı sayfalar daha okunabilir olur; kararı kapsamı konuşurken veriyoruz.",
      },
      {
        question: "Alan adı ve hosting dahil mi?",
        answer:
          "Alan adı ve hosting paket kapsamına dahil değil; ikisini de birlikte planlıyoruz ve giderleri ayrıca konuşuyoruz. Alan adının sizin hesabınızda olmasını öneriyorum.",
      },
      {
        question: "Sonradan sayfa eklenebilir mi?",
        answer:
          "Evet, site yapısını sonradan büyütmek mümkün. Yeni sayfalar için ayrı bir teklif çıkarıyorum; baştan planlarsak daha ekonomik olur.",
      },
      {
        question: "Fotoğrafları kim sağlıyor?",
        answer:
          "Fotoğrafları siz sağlarsanız en doğrusu; işletmenizi en iyi siz biliyorsunuz. Elinizde profesyonel fotoğraf yoksa mevcut görsellerle sade bir düzen kuruyoruz.",
      },
    ],
    metaTitle: "Uygun Fiyatlı Tanıtım Sitesi — Emre Bozkurt",
    metaDescription:
      "Uygun fiyatlı tanıtım sitesi: tek sayfa veya az sayfalı, mobil uyumlu ve temel SEO ayarları yapılmış sade bir site. Proje bazlı yazılı teklif.",
  },
] as const satisfies readonly Service[];

export function getService(slug: ServiceSlug): Service {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    throw new Error(`Bilinmeyen hizmet: ${slug}`);
  }

  return service;
}
