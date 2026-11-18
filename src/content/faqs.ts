export type Faq = {
  question: string;
  answer: string;
};

export const homeFaqs = [
  {
    question: "Web sitesi fiyatları ne kadar?",
    answer:
      "Fiyat proje bazlı, görüşmeden sonra yazılı net teklif veriyorum. Sayfa sayısı, e-ticaret olup olmadığı ve içeriğin hazır olma durumu teklifi belirliyor. Sitede sabit bir rakam yazmıyorum, çünkü her işin kapsamı aynı değil.",
  },
  {
    question: "Teslim süresi ne kadar?",
    answer:
      "Süre, projenin kapsamına ve içeriğin hazır olup olmamasına bağlı. İçerik ve görseller hazırsa iş hızlı ilerliyor; takvimi teklifte birlikte netleştiriyoruz. [KULLANICI ONAYI: süre]",
  },
  {
    question: "Fiyata neler dahil?",
    answer:
      "Tasarım, sayfa kurulumu, içerik yerleştirme, mobil uyum, temel SEO ayarları ve teslim teklife dahil. Alan adı, hosting, yedekleme ve teslim sonrası bakım ayrıca konuşulur; teklifte her kalemi tek tek yazıyorum.",
  },
  {
    question: "Teslimden sonra bakım yapıyor musunuz?",
    answer:
      "Teslim sonrası bakım ve güncellemeler ayrı bir kapsam. Zorunlu bir bakım aboneliği yok; isterseniz bakım koşullarını ayrıca konuşuruz. [KULLANICI ONAYI: bakım koşulları]",
  },
  {
    question: "Revizyon hakkım var mı?",
    answer:
      "Tasarım aşamasında geri bildirimlerinizi topluyorum. Kaç revizyon turunun dahil olduğu teklifte yazılı olur; kapsamı aşan büyük değişiklikler için ayrı fiyat çıkarırım. [KULLANICI ONAYI: revizyon sayısı]",
  },
  {
    question: "Site Türkçe mi, İngilizce mi olacak?",
    answer:
      "Site Türkçe hazırlanıyor. İngilizce bir sürüm gerekiyorsa bunu ayrı bir kapsam olarak değerlendiriyoruz; çeviri ve ikinci dil yapısı teklifte netleşir. [KULLANICI ONAYI: İngilizce site desteği]",
  },
  {
    question: "Kod ve içerik kime ait?",
    answer:
      "Kod ve içerik size ait. Teslimde dosyaları ve erişimleri size devrediyorum; siteyi başka bir geliştiriciyle sürdürmenize engel olmam.",
  },
  {
    question: "Başlamak için ne hazırlamam gerekiyor?",
    answer:
      "İşinizi anlatan birkaç cümle, varsa logo ve fotoğraflar, hizmet listeniz ve iletişim bilgileriniz yeterli. Eksikleri birlikte tamamlıyoruz; her şey hazır olmadan da ilk adımı atabiliriz.",
  },
] as const satisfies readonly Faq[];

export const packageFaqs = [
  {
    question: "Neden sabit fiyat yok?",
    answer:
      "Her projenin sayfa sayısı, içerik durumu ve ihtiyaçları farklı. Sabit bir rakam yazmak yerine kapsamı dinliyor, proje bazlı, görüşmeden sonra yazılı net teklif veriyorum. Böylece kullanmayacağınız bir kapsamın parasını ödemiyorsunuz.",
  },
  {
    question: "Paketlere neler dahil?",
    answer:
      "Özel tasarım, sayfa kurulumu, içerik yerleştirme, mobil uyum, temel SEO ve teslim her pakette var. Paketler arasındaki fark sayfa yapısı, bölüm çeşitliliği ve tasarımın derinliği. Hosting, yedekleme ve destek süresi paket kapsamına dahil değil; ayrıca konuşulur.",
  },
  {
    question: "Pakette olmayan bir bölüm istersem?",
    answer:
      "Eklemek istediğiniz bölümü konuşuruz. İşinize yarıyorsa kapsama ekleyip teklifi güncelliyorum; gerekmiyorsa eklemiyorum. Sonradan çıkan işler için ayrı teklif vermem gerekebilir.",
  },
  {
    question: "Kod ve içerik kime ait?",
    answer:
      "Kod ve içerik size ait. Teslimden sonra dosyalar ve erişimler sizde kalır.",
  },
  {
    question: "Tek sayfalık site istiyorum, hangi paket?",
    answer:
      "Başlangıç paketi tek sayfalık veya az sayfalı tanıtım ihtiyacı için düşünüldü. İçerik fazlaysa ve birden çok hizmet sayfası gerekiyorsa Profesyonel daha doğru olur; kararı birlikte veriyoruz.",
  },
] as const satisfies readonly Faq[];
