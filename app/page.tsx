/*
แบบ rafce
const page = () => {
  return (
    <div>page</div>
  )
}
export default page
 */
/*
แบบ rfce
function page() {
  return (
    <div>page</div>
  )
}
export default page
*/

import Link from "next/link"

async function page() {
  await new Promise((resolve) => setInterval(resolve,1000))
  return (
    <div>
      
        <div>
         Home Page
        </div>
    </div>
    
  )
}
export default page