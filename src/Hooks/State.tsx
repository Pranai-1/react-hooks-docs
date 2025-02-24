import { memo, useState } from "react";

export default function State(){
    // const[state1,setstate1]=useState(xyz()) This is recreating state after every render avoid this
    // const[state1,setstate1]=useState(xyz) This works fine without recreating state after every render
    const [count, setCount] = useState(0);
  
    if (count === 0) {
      setCount(1);
    }
    console.log("rendered",new Date())
  
    return (
    <>
   <h1>Count: {count}</h1>;
   <button onClick={()=>setCount((prev)=>prev+1)}>Increase</button>
   <ChildComponent/>
    </>
    )
    
  }
  
//   Notes:-Calling setState inside the render function is problematic because it causes an infinite loop.
// React discards the previous render result when re-rendering a component.
// Only the latest render result is used before rendering children, preventing unnecessary child renders.
// Children don’t render twice unnecessarily, but the component itself does re-run when state changes.

//The above code will only give three console logs beacuse of the above statement


const ChildComponent=memo(()=>{  //If we dont use memo compoennt will get re-rendered with every state change
    console.log("child component re-rendered")
    return(
        <>
        <h1>I am a child component</h1>
        </>
    )
})