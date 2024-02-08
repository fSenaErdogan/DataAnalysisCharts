import {useEffect, useState} from "react";
import {ProductAdviceInfo} from "../../Api/ProductAdviceApi.js";
import DiagramBestSeller from "./DiagramBestSeller.jsx";
import DiagramSpecialCustomer from "./DiagramSpecialCustomer.jsx";
import DiagramSpecialBehavior from "./DiagramSpecialBehavior.jsx";
import DiagramKeywords from "./DiagramKeywords.jsx";
import {FaRegStar} from "react-icons/fa";
import {AiOutlineLike} from "react-icons/ai";

const ProductAdvice = () => {

    const [info, setInfo] = useState("");

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        await ProductAdviceInfo(setInfo)
    }

    const cokSatanUrunler = info?.oneriler?.find(item => item.type === 1);
    const musteriyeOzelUrunler = info?.oneriler?.find(item => item.type === 2);
    const caprazSatisUrunler = info?.oneriler?.find(item => item.type === 3);
    const yenidenTesvikUrunler = info?.oneriler?.find(item => item.type === 4);
    const davranisaOzelUrunler = info?.oneriler?.find(item => item.type === 5);

    return info && (
        <div className="flex flex-col gap-2">
            <p className="text-center mb-1 text-green-800">
                - {info?.rapor_tarihi} -
            </p>
            <h3 className="text-3xl text-green-800 w-full text-center mb-5 font-bold">
                Ürün Önerileri Analizi
            </h3>

            {/*      CAPRAZ SATIS ONERILERI   &   YENIDEN SATIN ALMAYA TESVIK   */}
            <div className="w-full flex justify-between gap-5 h-1/5 mb-5">
                <div className="w-full">
                    <h3 className="text-xl text-green-800 w-full text-center mb-5 font-bold">
                        {info?.oneriler?.find(item => item.type === 3)?.oneri_turu || "Bir Başlık Tanımlanmamış"}
                    </h3>
                    {caprazSatisUrunler &&
                        <div className="w-full flex justify-between gap-5 h-full pb-12">
                            {caprazSatisUrunler?.urunler.map((urun, index) => (
                                <div key={index} className="w-full flex">
                                    <div className="w-1/4 bg-green-800/20 grid place-content-center rounded-xl">
                                        {urun.ana_urun}
                                    </div>
                                    <div className="w-3/4 ms-5">
                                        <p className="font-semibold">
                                            Birlikte Onerilen Urunler
                                        </p>

                                        {urun.onerilen_urunler.join(", ")}
                                    </div>
                                    {
                                        caprazSatisUrunler?.urunler.length !== index + 1 && (
                                            <div className={`w-[1px] bg-green-800`}/>
                                        )
                                    }
                                </div>
                            ))}
                        </div>
                    }
                </div>
                <div className=" w-[1px] bg-green-800 "/>
                <div className="w-full ">
                    <h3 className="text-xl text-green-800 w-full text-center mb-5 font-bold">
                        {info?.oneriler?.find(item => item.type === 4)?.oneri_turu || "Bir Başlık Tanımlanmamış"}
                    </h3>
                    {yenidenTesvikUrunler &&
                        <div className="w-full flex justify-between gap-5 h-full pb-12">
                            {yenidenTesvikUrunler?.urunler.map((urun, index) => (
                                <div key={index} className="w-full flex">
                                    <div className="w-1/4 bg-green-800/20 grid place-content-center rounded-xl">
                                        {urun.month}
                                    </div>
                                    <div className="w-3/4 ms-5">
                                        <p className="font-semibold">
                                            Satin Alinmaya Tesvik Edilen Urunler
                                        </p>
                                        {urun.product.join(", ")}
                                    </div>
                                    {
                                        yenidenTesvikUrunler?.urunler.length !== index + 1 && (
                                            <div className={`w-[1px] bg-green-800`}/>
                                        )
                                    }
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>

            {/*   cokSatanUrunler & musteriyeOzelUrunler & davranisaOzelUrunler & anahtar_kelimeler   */}
            <div className="flex border-y border-green-800 my-auto w-full">
                <div className="w-1/4 mt-4">
                    {
                        cokSatanUrunler?.urunler &&
                        <div>
                            <DiagramBestSeller
                                header={info?.oneriler?.find(item => item.type === 1)?.oneri_turu || "Bir Başlık Tanımlanmamış"}
                                products={cokSatanUrunler?.urunler}/>
                        </div>
                    }
                </div>
                <div className="w-1/4 mt-4">
                    {
                        musteriyeOzelUrunler?.urunler &&
                        <div>
                            <DiagramSpecialCustomer
                                header={info?.oneriler?.find(item => item.type === 2)?.oneri_turu || "Bir Başlık Tanımlanmamış"}
                                products={musteriyeOzelUrunler?.urunler}/>
                        </div>
                    }
                </div>
                <div className="w-1/4 mt-4">
                    {
                        davranisaOzelUrunler?.urunler &&
                        <div>
                            <DiagramSpecialBehavior
                                header={info?.oneriler?.find(item => item.type === 5)?.oneri_turu || "Bir Başlık Tanımlanmamış"}
                                products={davranisaOzelUrunler?.urunler}/>
                        </div>
                    }
                </div>
                <div className="w-1/4 mt-4">
                    {
                        info &&
                        <div>
                            <DiagramKeywords
                                header={info?.genel_oneriler?.anahtar_kelimeler?.content}
                                keywords={info?.genel_oneriler?.anahtar_kelimeler?.keywords}/>
                        </div>
                    }
                </div>
            </div>

            {/*kullanici_yorumlari & sosyal_medya_entegrasyonu*/}
            <div className="w-full flex justify-between gap-5 h-full mt-5">
                <div className="w-full">
                    <h3 className="text-xl text-green-800 w-full text-center mb-5 font-bold">
                        {info?.genel_oneriler?.kullanici_yorumlari?.content}
                    </h3>
                    <div className="w-full flex flex-col justify-between gap-5">
                        {info?.genel_oneriler?.kullanici_yorumlari.comments.map((comment, index) => (
                            <div key={index} className="w-full flex items-center pe-16">
                                <div
                                    className="w-16 h-[59px] rounded-full bg-green-800/60 text-center text-3xl grid place-content-center text-white font-semibold">
                                    {comment.name ? comment.name.charAt(0) : ''}
                                </div>
                                <div className="w-full h-full ps-3 my-1 flex flex-col font-semibold text-md  ">
                                    <p>
                                        {comment.text}
                                    </p>
                                    <div className="flex gap-2 text-green-800 font-normal text-sm">
                                        <p className="">
                                            {comment.name}
                                        </p>
                                        <span className="flex items-center">
                                        {comment.star} <AiOutlineLike size={18} className="mx-1"/>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div className=" w-[1px] h-full bg-green-800 "/>
                <div className="w-full ">
                    <h3 className="text-xl text-green-800 w-full text-center mb-5 font-bold">
                        {info?.genel_oneriler?.sosyal_medya_entegrasyonu.content}
                    </h3>
                    <div className="w-full flex justify-between gap-5">
                        <div className="flex flex-wrap w-full gap-8">
                            {info?.genel_oneriler?.sosyal_medya_entegrasyonu?.socials.map((social, index) => (
                                <div key={index} className="w-[48%] h-[155px] bg-green-800/5 rounded-xl px-5 py-3 relative ">
                                    <p className="text-green-800 font-semibold "> {social.platform} </p>
                                    <div className="absolute -top-2 right-3 flex text-green-700">
                                        {
                                            Array.from({length: social.star}, (_, i) => (
                                                <FaRegStar key={i} size={19}/>
                                            ))

                                        }
                                    </div>
                                    <p className=" w-full h-24 overflow-auto text-[15px]">
                                        {
                                            social.analysis
                                        }
                                    </p>
                                    <div className="absolute bottom-2 right-3 flex text-green-700 font-semibold bg-green-100 rounded-sm px-2">
                                        {social.visitor} ziyaretci
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductAdvice