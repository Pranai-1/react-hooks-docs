import { useFormStatus } from 'react-dom';


import {useRef} from 'react';

export default function App() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form ref={ref} action={async (formData) => {
        console.log(formData)
      await new Promise((res)=>{
        setTimeout(()=>{res(10)},1000)
      });
      if(ref.current!==null)
      ref.current.reset();
    }}>
         <h3>Request a Username: </h3>
      <input type="text" name="username" />
      <br />
       <h3>Request a Password: </h3>
       <input type="text" name="password"/>
     
      <br />
      <UsernameForm />
    </form>
  );
}




 function UsernameForm() {
  const {pending, data} = useFormStatus();
console.log(data?.get("password"))//It received complete form data
  return (
    <div>
    <button type="submit" disabled={pending}>
        Submit
      </button>
      <p>{data ? `Requesting ${data?.get("password")}...`: ''}</p>
    </div>
  );
}
