

const Card = ({children, className})=>{
    return(
        <>
            <div className={`rounded-2xl bg-white/60 p-3 ${className}`}>
                {children}
            </div>
        </>
    )
}

export default Card