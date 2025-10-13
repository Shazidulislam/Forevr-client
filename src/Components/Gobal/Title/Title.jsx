export default function Title ({text1 , text2}){
    return(
        <div className="flex  justify-center items-center gap-2">
            <p className="text-gray-500 text-2xl sm:text-4xl flex sm:gap-4"><span>{text1}</span><span className="text-gray-700">{text2}</span> </p>
            <p className="w-8 sm:w-12 bg-[#414141] h-[1px] sm:h-[2px]" ></p>
        </div>
    )
}