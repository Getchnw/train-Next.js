import Counter from "@/component/Counter"
import Image from "next/image";

const url = "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU";


function infoPage() {
  
  return (
    <div className="flex flex-col items-center gap-1">
        <Counter />
        <hr />
        <Image 
          src={url}
          alt="Image"
          width={500}
          height={500}
          priority
        />

        
        
    </div>
    
    
  )
}
export default infoPage
