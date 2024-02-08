import {useEffect, useState} from "react";
import {SalesReportInfo} from "../../Api/SalesReportApi.js";
import Card from "../../Component/Card.jsx";

const SalesReport = () => {

    const [info, setInfo] = useState("");

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        await SalesReportInfo(setInfo)
    }

    return info && (
        <div className="flex flex-col gap-2">
            <p className="text-center mb-1 text-green-800">
                - {info?.rapor_tarihi} -
            </p>
            <h3 className="text-3xl text-green-800 w-full text-center mb-5 font-bold">
                Satis Raporu Analizi
            </h3>
            <div className="w-full flex flex-row justify-between gap-5  text-center">
                <Card>
                    <p className="font-bold text-xl underline underline-offset-4 uppercase">
                        siparis sayisi
                    </p>
                    <p className="text-5xl text-center my-3 text-green-700">
                        {info?.toplam_siparis_sayisi}
                    </p>
                </Card>
                <Card>
                    <p className="font-bold text-xl underline underline-offset-4 uppercase ">
                        iade sayisi
                    </p>
                    <p className="text-5xl text-center my-3 text-green-700">
                        {info?.toplam_iade_sayisi}
                    </p>
                </Card>
                <Card>
                    <p className="font-bold text-xl underline underline-offset-4 uppercase">
                        favorilere ekleme sayisi
                    </p>
                    <p className="text-5xl text-center my-3 text-green-700">
                        {info?.toplam_favorilere_eklenme_sayisi}
                    </p>
                </Card>
                <Card>
                    <p className="font-bold text-xl underline underline-offset-4 uppercase  ">
                        sepete ekleme sayisi
                    </p>
                    <p className="text-5xl text-center my-3 text-green-700">
                        {info?.toplam_sepete_eklenme_sayisi}
                    </p>
                </Card>
                <Card>
                    <p className="font-bold text-xl underline underline-offset-4 uppercase ">
                        ziyaretci sayisi
                    </p>
                    <p className="text-5xl text-center my-3 text-green-700">
                        {info?.toplam_ziyaret_sayisi}
                    </p>
                </Card>
            </div>

            <div className="w-full mt-4 flex flex-row gap-5">
                {info?.urunler.map((urun, index) => (
                    <div key={index} className="w-full border-t-2 border-t-green-800 rounded-xl">
                        <div className="mx-5 py-3">
                            <div className="flex gap-3 text-md font-semibold text-green-800">
                                <p className=""> Urun Id : </p>
                                <p> {urun.urun_id} </p>
                            </div>
                            <div className="flex gap-3 text-xl font-semibold ">
                                <p className=""> Urun Adi : </p>
                                <p> {urun.urun_adi} </p>
                            </div>
                            <div className="w-full flex flex-col justify-between gap-3 mt-4 text-center">
                                <Card>
                                    <p className="text-sm underline underline-offset-2 capitalize">
                                        siparis sayisi
                                    </p>
                                    <p className=" text-center my-1 text-green-700 font-bold ">
                                        {urun?.satıs_sayisi}
                                    </p>
                                </Card>
                                <Card>
                                    <p className="text-sm underline underline-offset-2 capitalize">
                                        iade sayisi
                                    </p>
                                    <p className=" text-center my-1 text-green-700 font-bold ">
                                        {info?.toplam_iade_sayisi}
                                    </p>
                                </Card>
                                <Card>
                                    <p className="text-sm underline underline-offset-2 capitalize">
                                        favorilere ekleme sayisi
                                    </p>
                                    <p className=" text-center my-1 text-green-700 font-bold ">
                                        {info?.toplam_favorilere_eklenme_sayisi}
                                    </p>
                                </Card>
                                <Card>
                                    <p className="text-sm underline underline-offset-2  capitalize ">
                                        sepete ekleme sayisi
                                    </p>
                                    <p className=" text-center my-1 text-green-700 font-bold ">
                                        {info?.toplam_sepete_eklenme_sayisi}
                                    </p>
                                </Card>
                                <Card>
                                    <p className="text-sm underline underline-offset-2 capitalize">
                                        ziyaretci sayisi
                                    </p>
                                    <p className=" text-center my-1 text-green-700 font-bold ">
                                        {info?.toplam_ziyaret_sayisi}
                                    </p>
                                </Card>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default SalesReport