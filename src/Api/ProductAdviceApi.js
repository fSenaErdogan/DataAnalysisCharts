// URUN ONERISI

export const ProductAdviceInfo = async (setData) => {
    await new Promise(function (myResolve, myReject) {
        setTimeout(function () {
            setData(
                {
                    "rapor_tarihi": "2024-02-05",
                    "oneriler": [
                        {
                            "oneri_turu": "Cok Satan Urunler",
                            type: 1,
                            "urunler": [
                                {
                                    id: "U001",
                                    name: "urun",
                                    amount: "300"
                                },
                                {
                                    id: "U002",
                                    name: "urun 2",
                                    amount: "450"
                                },
                                {
                                    id: "U004",
                                    name: "urun 4",
                                    amount: "100"
                                },
                                {
                                    id: "U006",
                                    name: "urun 6",
                                    amount: "280"
                                },
                                {
                                    id: "U010",
                                    name: "urun 7",
                                    amount: "20"
                                },
                            ]
                        },
                        {
                            "oneri_turu": "Musteriye Ozel Indirim",
                            type: 2,
                            "urunler": [
                                {
                                    "urun_id": "U003",
                                    "indirim_orani": "20"
                                },
                                {
                                    "urun_id": "U004",
                                    "indirim_orani": "15"
                                },
                                {
                                    "urun_id": "U007",
                                    "indirim_orani": "30"
                                },
                                {
                                    "urun_id": "U008",
                                    "indirim_orani": "10"
                                },
                                {
                                    "urun_id": "U009",
                                    "indirim_orani": "5"
                                }
                            ]
                        },
                        {
                            "oneri_turu": "Capraz Satis Onerileri",
                            type: 3,
                            "urunler": [
                                {
                                    "ana_urun": "U001",
                                    "onerilen_urunler": ["U002", "U006", "U010"]
                                },
                                {
                                    "ana_urun": "U005",
                                    "onerilen_urunler": ["U007", "U008"]
                                }
                            ]
                        },
                        {
                            "oneri_turu": "Yeniden Satin Almaya Tesvik",
                            type: 4,
                            "urunler": [
                                {
                                    month: "january",
                                    product: ["U009", "U010", "U005", "U006", "U002"]
                                },
                                {
                                    month: "february",
                                    product: ["U007", "U003", "U004", "U001"]
                                },
                            ],
                        },
                        {
                            "oneri_turu": "Kullanici Davranisina Ozel Indirim",
                            type: 5,
                            "urunler": [
                                {
                                    "id": "U009",
                                    "hedef_kitle": "Yeni Kullanıcılar",
                                    "teklif": "İlk alışverişinize özel tüm ürünlerde ekstra %10 indirim!",
                                    "discount": "10"
                                },
                                {
                                    "id": "U008",
                                    "hedef_kitle": "Sadık Müşteriler",
                                    "teklif": "Sadakatiniz için teşekkür ederiz! Size özel seçili ürünlerde %20 indirim.",
                                    "discount": "20"
                                },
                                {
                                    "id": "U005",
                                    "hedef_kitle": "Fanatikler",
                                    "teklif": "Uzun suredir sepetinde olan bu urun icin Size özel %30 indirim.",
                                    "discount": "30"
                                },
                                {
                                    "id": "U010",
                                    "hedef_kitle": "Özel Üyeler",
                                    "teklif": "Size özel ürünlerde ekstra %15 indirim!",
                                    "discount": "15"
                                },
                                {
                                    "id": "U001",
                                    "hedef_kitle": "Sosyal Medya Takipçileri",
                                    "teklif": "Bizi sosyal medyada takip ettiğiniz için teşekkür ederiz! Size özel indirimlerle dolu bir alışveriş sunuyoruz.",
                                    "discount": "45"
                                }
                            ]
                        }
                    ],
                    "genel_oneriler": {
                        "anahtar_kelimeler": {
                            content: "Anahtar kelimeler ve filtreler",
                            keywords: [
                                {
                                    text: "araba",
                                    star: 5
                                },
                                {
                                    text: "muz",
                                    star: 2
                                },
                                {
                                    text: "hali",
                                    star: 4
                                },
                                {
                                    text: "armut",
                                    star: 1
                                },
                                {
                                    text: "avokado",
                                    star: 5
                                },

                            ]
                        },
                        "kullanici_yorumlari": {
                            content: "Ürün sayfalarında müşteri yorumlarını ve puanlamalarını öne çıkarın.",
                            comments: [

                                {
                                    "text": "Harika bir site! Kullanıcı dostu arayüzü ve içerikleriyle beni etkiledi. Her ziyaretimde yeni bir şeyler öğreniyorum. Kesinlikle tavsiye ederim!",
                                    "name": "Zeynep",
                                    "star": 5
                                },
                                {
                                    "text": "Siteyi kullanmaya başlamak oldukça kolay! Menülerin düzenli yapısı ve basit navigasyonu ile hızlıca istediğim bilgilere ulaşabiliyorum.",
                                    "name": "Ayse",
                                    "star": 12
                                },
                                {
                                    "text": "Bu site mükemmel! Her türlü ihtiyacıma yönelik bilgileri bulabiliyorum. İçeriklerin kalitesi gerçekten etkileyici. Teşekkürler!",
                                    "name": "Fatma",
                                    "star": 45
                                },
                                {
                                    "text": "Kullanışlı bir site ancak bazı bölümlerde iyileştirmeler yapılabilir. Özellikle arama motoru daha etkili olabilir.",
                                    "name": "Zeliha",
                                    "star": 10
                                },
                                {
                                    "text": "Ürünlerin tazeliği konusunda endişelerim vardı ama bu siteyi kullanarak bu konuda rahatladım. Teşekkürler!",
                                    "name": "Odin",
                                    "star": 3
                                },
                                {
                                    "text": "Ne harika bir site! İçeriğin çeşitliliği ve kalitesi beni şaşırttı. Herkese tavsiye ederim.",
                                    "name": "Hayri",
                                    "star": 6
                                }
                            ]
                        },
                        "sosyal_medya_entegrasyonu": {
                            content: "Ürünlerinizi sosyal medyadaki ragbetini izleyin",
                            "socials": [
                                {
                                    "platform": "Instagram",
                                    "visitor": 250,
                                    "star": 5,
                                    "analysis": "Instagram'da ziyaretçi sayısı oldukça düşük, bu nedenle içeriğinizi daha geniş bir kitleye ulaştırmak için etkileşimi artırıcı stratejiler geliştirmelisiniz. Ancak beğenilme oranı yüksek, bu da mevcut ziyaretçilerinizin içeriğinizi beğendiğini gösteriyor."
                                },
                                {
                                    "platform": "Facebook",
                                    "visitor": 200,
                                    "star": 2,
                                    "analysis": "Facebook'ta ziyaretçi sayısı ortalama seviyede olsa da beğenilme oranı düşük. Bu durum, içeriğinizin hedef kitleye çekici gelmediğini veya etkileşimi artırmak için daha fazla çaba harcamanız gerektiğini gösterebilir."
                                },
                                {
                                    "platform": "LinkedIn",
                                    "visitor": 168,
                                    "star": 4,
                                    "analysis": "LinkedIn'deki ziyaretçi sayısı ve beğenilme oranı oldukça iyi. Profesyonel bir platformda bulunmanız, iş içeriklerinizin ilgi gördüğünü ve etkileşimi artırmak için doğru stratejiler izlediğinizi gösteriyor."
                                },
                                {
                                    "platform": "Twitter",
                                    "visitor": 147,
                                    "star": 1,
                                    "analysis": "Twitter'da ziyaretçi sayısı düşük ve beğenilme oranı da düşük. Bu platformda daha etkili bir şekilde etkileşim sağlamak için içerik stratejinizi gözden geçirmeniz gerekebilir."
                                },
                                {
                                    "platform": "Snapchat",
                                    "visitor": 439,
                                    "star": 5,
                                    "analysis": "Snapchat'teki ziyaretçi sayısı oldukça yüksek ve beğenilme oranı da mükemmel. Bu platformda içerik stratejinizin oldukça etkili olduğunu söyleyebiliriz."
                                },
                                {
                                    "platform": "TikTok",
                                    "visitor": 98,
                                    "star": 3,
                                    "analysis": "TikTok'ta ziyaretçi sayısı düşük ve beğenilme oranı orta seviyede. Bu platformda daha çekici ve ilgi çekici içerikler oluşturarak etkileşimi artırabilirsiniz."
                                }
                            ]


                        }
                    }
                }
            );
            myResolve("");
        }, 300);
    });
}