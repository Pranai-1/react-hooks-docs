import { useRef } from "react"

export default function Ref(){
    const inputRef=useRef<HTMLInputElement>(null)
    const childRef=useRef(null)
    const textRef=useRef<HTMLParagraphElement>(null)
    console.log(inputRef)

    function changeColor(){
       
       if(textRef.current!=null){
        console.log(textRef.current.textContent)
        textRef.current.style.color = "red";
        textRef.current.style.backgroundColor = "blue";
       }
    }
    return(
        <>
        <p ref={textRef}>Inside Ref</p>
        <button style={{
            backgroundColor:"blue",
            padding:"10px 4px",
            borderRadius:"0.5rem"
        }}
        onClick={()=>{changeColor()}}>Change Color</button>
        <input type="text" placeholder="ref holds" ref={inputRef}/>
        <button onClick={()=>{
            if(inputRef.current!==null){
           
                inputRef.current.style.border = "2px solid red";
                 inputRef.current.style.color="green"
              //  inputRef.current.focus()
                console.log(inputRef.current.value)
            }
          
        }}>get input</button>
        </>
    )
}