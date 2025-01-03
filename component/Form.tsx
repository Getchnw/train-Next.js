"use client"
import { useFormStatus } from 'react-dom'
import {createCamps} from '../utils/actions'
import { useActionState } from 'react'

const Submitbutton = () => {
    const {pending} = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            {pending ? 'loading...' : 'submit'} 
        </button>
    );
};



const Form = () => {
    const [message,formaction] = useActionState(createCamps,null)

  return (
    <>
        {message && <h1>{message}</h1>}
        <form 
            action={formaction} 
            className='flex flex-col gap-2 items-start'>
                <div>form</div>
                <input placeholder="Camping name" name="title" className="border" defaultValue="chonburi camp" />
                <input placeholder="Location" name="Location" className="te border" defaultValue="Chonburi pattapa" />
                <Submitbutton />
        </form>
    </>
    
  )
}
export default Form