

const Container = ({children})=>{
    return(
        <>
            <div className="w-full h-full flex place-content-center place-items-center">
                <div className="content-bg w-[90%] h-[80%] rounded-[2rem] p-5">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Container