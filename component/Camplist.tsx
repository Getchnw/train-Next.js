import { fetchCamp } from "@/utils/actions";

const Camplist = async() => {
    const listcamp = await fetchCamp();
    console.log(listcamp)
  return (
    <div>
        {
        listcamp.map((item,index) => {
            return(
                <div key={index}>
                   title : {item.title} , Location : {item.location}  
                </div>
            )
        })
        }
    </div>
  )
}
export default Camplist
