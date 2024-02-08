

const Container = ({children})=>{
    return(
        <>
            <div className="w-full h-full flex place-content-center place-items-center">
                <div className="content-bg w-[93%] h-[85%] overflow-auto rounded-[2rem] px-5 py-3">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Container