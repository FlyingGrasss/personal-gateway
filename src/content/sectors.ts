export type SectorFaqItem = {
  question: string;
  answer: string;
};

export type Sector = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  bullets: readonly string[];
  faqs: readonly SectorFaqItem[];
};

export const sectors: readonly Sector[] = [
  {
    slug: "restoran-ve-kafe",
    title: "Restoran ve Kafe İçin Web Sitesi",
    description:
      "Restoran ve kafeler için menü, fotoğraf galerisi, Google görünürlüğü ve WhatsApp'tan rezervasyon odaklı sade web sitesi.",
    intro:
      "Müşterileriniz mekânınızı Google'da arıyor, menüye telefonda bakıyor. Menünüz, fotoğraflarınız ve rezervasyon yolunuz tek bir sade sayfada buluştuğunda doğru bilgiye kolayca ulaşıyorlar.",
    bullets: [
      "Güncel menünüzü gösteren, telefonda rahat okunan bir menü sayfası.",
      "Mekânınızı ve tabaklarınızı öne çıkaran, hızlı açılan fotoğraf galerisi.",
      "Google'da bulunmayı kolaylaştıran sayfa yapısı ve WhatsApp'tan rezervasyon bağlantısı.",
    ],
    faqs: [
      {
        question: "Menümü kendim güncelleyebilir miyim?",
        answer:
          "Siteyi teslim ederken menü ve fiyat bilgilerini nasıl güncelleyeceğinizi birlikte netleştiriyoruz. İhtiyacınıza göre size basit bir güncelleme alanı bırakabilir veya değişiklikleri benim yapmamı tercih edebilirsiniz.",
      },
      {
        question: "Rezervasyon için ayrı bir sistem gerekli mi?",
        answer:
          "Şart değil. Çoğu işletme için WhatsApp'a yönlendiren bir rezervasyon bağlantısı yeterli oluyor. Daha kapsamlı bir akış isterseniz masa ve saat seçimini ayrıca planlayabiliriz.",
      },
      {
        question: "Fotoğraflarım yoksa site nasıl görünecek?",
        answer:
          "Elinizdeki mevcut fotoğraflarla başlayabiliriz. Daha iyi bir sonuç için profesyonel çekim önerebilirim; çekim kararı ve bütçesi size ait olur.",
      },
    ],
  },
  {
    slug: "dis-klinigi",
    title: "Diş Kliniği İçin Web Sitesi",
    description:
      "Diş klinikleri için hizmet sayfaları, randevu talebi ve güven veren sade tasarım.",
    intro:
      "Bir diş kliniği için web sitesi çoğu zaman hastanın ilk izlenimidir. Hizmetlerinizi açıkça anlatan, randevu talebini kolaylaştıran ve gereksiz süslemeden uzak, güven veren bir sayfa hazırlıyorum.",
    bullets: [
      "Her tedavi için ayrı, anlaşılır ve sade hizmet sayfaları.",
      "Telefon veya WhatsApp üzerinden hızlı randevu talebi.",
      "Klinik, ekip ve çalışma saatlerini net gösteren güven veren tasarım.",
    ],
    faqs: [
      {
        question: "Hastalar için hangi bilgileri paylaşmalıyım?",
        answer:
          "Hizmet listeniz, çalışma saatleriniz, adresiniz ve randevu yolunuz temel ihtiyaçlar. Tıbbi tavsiye yerine hastayı doğru soruyu sormaya yönlendiren sade bilgiler kullanmayı tercih ediyorum.",
      },
      {
        question: "Randevu talepleri nasıl işliyor?",
        answer:
          "Form veya WhatsApp üzerinden gelen talepler kliniğinize ulaşır; randevunun onayı ve planlaması sizde kalır. Yalnızca WhatsApp bağlantısıyla da başlayabiliriz.",
      },
      {
        question: "Tasarım neye göre şekilleniyor?",
        answer:
          "Klinik adınız, hizmet listeniz ve elinizdeki fotoğraflar üzerinden ilerliyoruz. Amaç gösteriş değil; hastanın aradığı bilgiyi hızlı bulması ve size güvenmesi.",
      },
    ],
  },
  {
    slug: "guzellik-merkezi",
    title: "Güzellik Merkezi İçin Web Sitesi",
    description:
      "Güzellik merkezleri için fiyat listesi, portfolyo galerisi ve randevu odaklı web sitesi.",
    intro:
      "Güzellik merkezlerinde karar çoğu zaman görselle başlar. Hizmetlerinizi ve çalışmalarınızı gösteren, fiyat listenizi düzenli sunan ve randevu talebini kolaylaştıran bir site hazırlıyorum.",
    bullets: [
      "Hizmetlerinizi ve güncel fiyat listenizi düzenli gösteren sayfalar.",
      "Yaptığınız işleri sergileyen sade bir portfolyo galerisi.",
      "Instagram veya WhatsApp'a bağlanan kolay randevu talebi.",
    ],
    faqs: [
      {
        question: "Fiyat listemi sitede göstermek zorunda mıyım?",
        answer:
          "Hayır. Fiyatları yayınlamak istemezseniz \"fiyat için iletişime geçin\" yazabiliriz. Yayınlamayı seçerseniz listenin güncel kalması için birlikte basit bir güncelleme yöntemi belirleriz.",
      },
      {
        question: "Galeride hangi fotoğraflar yer alacak?",
        answer:
          "Fotoğrafları siz seçersiniz; ben siteye uygun boyut ve sırayla yerleştiririm. Müşterilerinizin yer aldığı görseller için gerekli izinleri almanızı öneririm.",
      },
      {
        question: "Randevu sistemi kurulacak mı?",
        answer:
          "İhtiyacınıza göre değişir. Basit bir WhatsApp yönlendirmesi çoğu zaman yeterli olur; yoğun çalışan bir işletmeyseniz takvimli bir randevu akışını ayrıca değerlendirebiliriz.",
      },
    ],
  },
  {
    slug: "avukat",
    title: "Avukat İçin Web Sitesi",
    description:
      "Avukatlar için çalışma alanları sayfaları, sade ve güvenilir bir görünüm ve doğrudan iletişim.",
    intro:
      "Hukuk hizmetinde güven, ilk temastan önce başlar. Çalışma alanlarınızı açıkça anlatan, mesleki ciddiyeti koruyan sade bir site; potansiyel müvekkilin size ulaşmasını kolaylaştırır.",
    bullets: [
      "Her çalışma alanı için ayrı, sade ve bilgilendirici sayfalar.",
      "Abartılı iddialardan uzak, mesleki ciddiyete uygun bir görünüm.",
      "Telefon, e-posta ve WhatsApp ile doğrudan iletişim.",
    ],
    faqs: [
      {
        question: "Sitede müvekkil yorumlarına yer verilecek mi?",
        answer:
          "Avukatlık mesleğinin reklam kuralları dikkate alındığında referans veya yorum yayınlamak uygun olmayabilir. Bu nedenle siteyi bilgilendirici içerik ve iletişim kanalları üzerine kurmayı öneriyorum.",
      },
      {
        question: "Hangi içerikleri eklemeliyim?",
        answer:
          "Çalışma alanlarınız, mesleki bilgileriniz, ofis adresiniz ve iletişim bilgileriniz iyi bir başlangıç. Uzmanlık iddiası taşıyan ifadelerde mevzuata uygunluğu birlikte kontrol ederiz.",
      },
      {
        question: "Site üzerinden gelen talepler nereye düşer?",
        answer:
          "E-posta veya WhatsApp üzerinden size ulaşır. Site hukuki danışmanlık hizmeti sunmaz; yalnızca potansiyel müvekkilin size ulaşmasını sağlayan bir iletişim kapısı olur.",
      },
    ],
  },
];

export function getSector(slug: string): Sector | undefined {
  return sectors.find((sector) => sector.slug === slug);
}
