import Image from "next/image"
function Loading() {
  return (
    <div className="relative z-10 flex flex-col w-full h-screen items-center justify-center gap-10">

        <Image src={"/loading2.gif"} className="w-[250px] h-[250px] object-contain" alt="loading" width={250} height={250}/>
        <h3 className="text-yellow-400 text-2xl ">Loading...</h3>

    </div>
  )
}

export default Loading