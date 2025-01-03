import Link from 'next/link'

const url = "https://jsonplaceholder.typicode.com/todos";
const fetchData = async () => {
  await new Promise((resolve) => setInterval(resolve,1000))
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

type data = {
  userid : string;
  id : string;
  title : string;
  completed : string;

}

async function AboutPage() {

  const data:data[] = await fetchData();
  console.log(data);
  return (
    <div>
        
        <div>
            <h1>About Page</h1>
            <p>This is the about page</p>
            
            {
              data.map ((Item,index) => {
                return (
                  <div className='flex gap-4' key={index}>
                    
                    <p className='inline'>{Item.title}</p>
                  </div>
                )
              })
            }
            
        </div>
    </div>
  )
}
export default AboutPage