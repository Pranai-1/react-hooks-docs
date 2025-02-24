import { useState } from "react";

export default function State(){
    const [count, setCount] = useState(0);
  
    if (count === 0) {
      setCount(1);
    }
    console.log("rendered",new Date())
  
    return <h1>Count: {count}</h1>;
  }
  