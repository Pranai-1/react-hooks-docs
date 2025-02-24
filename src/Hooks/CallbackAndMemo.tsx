import { useCallback, useMemo, useState } from "react";

export default function CallBack() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [target, setTarget] = useState(0);
  const [primeCount, setPrimeCount] = useState(0);

  // Memoized checkPrime function
  const checkPrime = useCallback((num: number) => {
    if (num === 0 || num === 1) return false;
    let i = 2;
    while (i * i <= num) {
      if (num % i === 0) return false;
      i++;
    }
    return true;
  }, []);


 
  const expensiveCalculation = useCallback(() => {
    let arr=[]
    console.log("entered");
    let count = 0;
    let start = 2;
    while (start < target) {
      if (checkPrime(start)) {
        count++;
        arr.push(start)
      }
      start++;
    }
    
    setPrimeCount(count)
    return arr
  },[target])

  const primeNumbers=useMemo(()=>{return expensiveCalculation()},[expensiveCalculation])

  const children = useMemo(() => <List numbers={primeNumbers} />, [primeNumbers]);
  return (
    <div>
      <p>Welcome to callback</p>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div style={{ display: "grid" }}>
          <h2>Count: {count1}</h2>
          <button onClick={() => setCount1((prev) => prev + 1)}>Increase</button>
        </div>

        <div style={{ display: "grid" }}>
          <h2>Count: {count2}</h2>
          <button onClick={() => setCount2((prev) => prev + 1)}>Increase</button>
        </div>
      </div>
      <input
        name="prime"
        type="number"
        min={2}
        max={100}
        onChange={(e) => setTarget(Number(e.target.value))}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
          fontFamily: "sans-serif",
        }}
      >
        <button
          style={{
            backgroundColor: "blue",
            padding: "4px 12px",
            borderRadius: "0.5rem",
            marginLeft: "10px",
            cursor: "pointer",
          }}
          onClick={()=>expensiveCalculation()}
        >
          Get Prime Numbers
        </button>
        <h2>{primeCount}</h2>
      </div>
      {children}
      
    </div>
  );
}

function List({numbers}:{numbers:number[]}){
    console.log("re-rendered")
    return(
        <>
        {numbers.map((num)=><p key={num} style={{margin:"10px"}}>{num}</p>)}
        </>
    )
}

