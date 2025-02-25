//This hook lets the parent access child component functions

import { useImperativeHandle, useRef } from "react"

export default function Imperative(){
   const parentRef=useRef<any>(null)
 function handleClick(){
    console.log(parentRef.current)
    if(parentRef.current!==null){
        parentRef.current.focus()  //we are accessing the methods from the child in the parent
        parentRef.current.changeColor()
    }
       
 }
    return(
        <>
        <Input ref={parentRef} placeholder="Enter name..."/>
        <button style={{
            padding:"6px 20px",
            borderRadius:"0.5rem",
            backgroundColor:"orange"
        }}
        onClick={handleClick}>Reset</button>
        </>
    )
}

function Input({ref,placeholder}:{ref:any,placeholder:string}){
    const inputRef=useRef<HTMLInputElement>(null)

    useImperativeHandle( ref,()=>{
        return{
         focus:()=>{
                if(inputRef.current!==null)
                inputRef.current.focus()
            },
            changeColor:()=>{
                if(inputRef.current!==null)
                inputRef.current.style.color="red"
            }
        }
       
    })
    return(
        <input type="text" placeholder={placeholder} ref={inputRef}/>
    )
}