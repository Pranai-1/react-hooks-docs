// import { useState, useTransition } from "react"

// export default function Transition(){
//     const[tab,setTab]=useState("about")
  

//     function selectTab(nextTab:string){   
//         setTab(nextTab)
       
//     }
//     return(
//         <div>
//             <div style={{
//                 display:"flex",
//                 justifyContent:"center",
//                 alignItems:"center",
//                 gap:"20px"
//             }}>
//                 <button style={{
//                     backgroundColor:tab=="about" ? "orange" :"blue",
//                     padding:"10px 20px",
//                     borderRadius:"0.5rem",
//                     cursor:"pointer"
//                 }}
//                 onClick={()=>selectTab("about")}
//                >About</button>
//              <PostsButton onClick={selectTab} tab={tab}/>
//                 <button style={{
//                     backgroundColor:tab=="contact" ? "orange" :"blue",
//                     padding:"10px 20px",
//                     borderRadius:"0.5rem",
//                     cursor:"pointer"
//                 }}
//                 onClick={()=>selectTab("contact")}>Contact</button>
//             </div>
//             {tab=="about" && <About/>}
//             {tab=="contact" && <Contact/>}
//             {tab=="posts" && <Posts/>}
//         </div>
//     )
// }

// function PostsButton({onClick,tab}:{onClick:(nextTab:string)=>void,tab:string}){
//     const[isPending,startTransition]=useTransition()
//     function handleClick(){
//         startTransition(()=>{
//             onClick("posts")
//         })
//     }
//     if(isPending)
//         return <p>Loading...</p>
//     return(
//         <button style={{
//             backgroundColor: tab=="posts" ? "orange" :"blue",
//             padding:"10px 20px",
//             borderRadius:"0.5rem",
//             cursor:"pointer"
//         }} 
//         onClick={()=>handleClick()}
//         >Posts</button>
//     )
// }

// function About(){
//     return(
//         <h1>I am Pranai</h1>
//     )
// }

// function Contact(){
//     return(
//         <h1>conatct me :-reddypranai2017@gmail.com</h1>
//     )
// }

// function Posts(){
    
 
//     let startTime=Date.now()
//     let endtime=Date.now()
//     while(endtime-startTime<=1000){
//         endtime=Date.now()
//     }
//     return(
//         <h1>Displaying posts here</h1>
//     )
// }

//Notes:-usTransition() hook is used to prioritze the render of the components,generally if there is a component that takes a 
//bit of time to render then if we click on the time taking component and then the normal component,we will only see
//the normal component after th waiting time,this is because it will first render the expensive component and after that
//normal component will get rendered due to the onClick.
//To avoid this we need to use useTransition() hook
//Deference between transition and suspense is that transition works at state level while suspense works at component level
//we mark the state update as a non priority by putting that particular state update inside a startTransition function

import React, { useState, useTransition } from 'react';

function SearchComponent() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    // Mark the following state update as non-urgent.
    startTransition(() => {
      // Simulate an expensive operation by filtering a large dataset.
      // For demonstration, we use a timeout to mimic delay.
      const simulatedResults = simulateExpensiveSearch(value);
      setResults(simulatedResults);
    });
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        value={input} 
        onChange={handleChange} 
      />
      {isPending ? <p>Loading results...</p> : <ResultList results={results} />}
    </div>
  );
}

function ResultList({ results }: { results: string[] }) {
    if(results.length==0) return <p>No matches found...</p>
  return (
    <ul>
      {results.map((result, index) => (
        <li key={index}>{result}</li>
      ))}
    </ul>
  );
}

// A helper function to simulate an expensive search operation.
function simulateExpensiveSearch(query: string): string[] {
  // In a real app, this might be a filter over a huge dataset.
  // Here we simply return an array after a delay.
  console.log("Inside expensive search")
  const data = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
  return data.filter(item => item.includes(query));
}

export default SearchComponent;
