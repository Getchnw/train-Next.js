"use client";
import { useState } from 'react';

function Counter() {
  const [count,setcount] = useState(0);
  return (
    <div>
        
        <div className='flex justify-center text-2xl gap-6 mt-6'>
            <button onClick={() => setcount(count-1)}>-</button>
            {count}
            <button onClick={() => setcount(count+1)}>+</button>
        </div>
    </div>
    
    
  )
}
export default Counter
