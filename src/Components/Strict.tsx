import { lazy, Suspense, useState } from "react"

const Child=lazy(()=>import("./ChildForStrict"))



export default function Strict(){
    const [checked,setChecked]=useState(false)
    const items=[{id:"1",title:"First one"},
        {id:"2",title:"Second title"},
        {id:"3",title:"Third title!"}
    ]
    console.log(items)
    return(
        <>
        <h1>Strict page</h1>
         <input type="checkbox" checked={checked} onChange={()=>setChecked((prev)=>!prev)}/>
         {checked && //only lazy load for first render
           <Suspense fallback={<div>Loading....</div>}>
           <Child items={items}/>
           </Suspense>
         }
       
        </>
       
    )
}

