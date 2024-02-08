// SATIS RAPORU

export const SalesReportInfo = async (setData) => {
    await new Promise(function (myResolve, myReject) {
        setTimeout(function () {
            setData({
                "rapor_tarihi": "2024-02-05",
                "toplam_siparis_sayisi": 10000,
                "urunler": [
                    {
                        "urun_id": "U001",
                        "urun_adi": "Akıllı Telefon",
                        "satıs_sayisi": 500,
                        "iade_sayisi": 25,
                        "favorilere_eklenme_sayisi": 750,
                        "sepete_eklenme_sayisi": 1250,
                        "ziyaret_sayisi": 5000
                    },
                    {
                        "urun_id": "U002",
                        "urun_adi": "Kablosuz Kulaklık",
                        "satıs_sayisi": 300,
                        "iade_sayisi": 15,
                        "favorilere_eklenme_sayisi": 600,
                        "sepete_eklenme_sayisi": 900,
                        "ziyaret_sayisi": 3500
                    },
                    {
                        "urun_id": "U003",
                        "urun_adi": "Akıllı Saat",
                        "satıs_sayisi": 200,
                        "iade_sayisi": 10,
                        "favorilere_eklenme_sayisi": 450,
                        "sepete_eklenme_sayisi": 700,
                        "ziyaret_sayisi": 2500
                    }
                ],
                "toplam_iade_sayisi": 50,
                "toplam_favorilere_eklenme_sayisi": 1800,
                "toplam_sepete_eklenme_sayisi": 2850,
                "toplam_ziyaret_sayisi": 11000
            });
            myResolve("");
        }, 300);
    });
}