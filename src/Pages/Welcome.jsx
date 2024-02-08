import {Link} from "react-router-dom";


const Welcome = () => {
    return (
        <>
            <div className="mx-auto my-auto text-center text-7xl text-green-800 mt-28">
                You`re Welcome <br/>
                <p className="text-6xl mt-3"><code>Data Analysis Carts</code></p>
                <div className="flex gap-5 place-content-center mt-16 text-4xl">
                    <Link to="/product-advice" className="text-white p-10 px-16 bg-green-800/50 rounded-xl w-1/3 hover:scale-95 transition-all duration-500">
                        Ürün Önerileri
                    </Link>
                    <Link to="/sales-report" className="text-white p-10 px-16 bg-green-800/50 rounded-xl w-1/3 hover:scale-95 transition-all duration-500">
                        Satış Raporu
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Welcome