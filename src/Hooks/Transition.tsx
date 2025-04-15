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
//Difference between transition and deferred value is that transition provides isPending flag and also deferred value can only
//be used for text while useTransition can also be used for navigating the pages

// import React, { useState, useTransition } from 'react';

// function SearchComponent() {
//   const [input, setInput] = useState('');
//   const [results, setResults] = useState<string[]>([]);
//   const [isPending, startTransition] = useTransition();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setInput(value);

//     // Mark the following state update as non-urgent.
//     startTransition(() => {
//       // Simulate an expensive operation by filtering a large dataset.
//       // For demonstration, we use a timeout to mimic delay.
//       const simulatedResults = simulateExpensiveSearch(value);
//       setResults(simulatedResults);
//     });
//   };

//   return (
//     <div>
//       <input 
//         type="text" 
//         placeholder="Search..." 
//         value={input} 
//         onChange={handleChange} 
//       />
//       {isPending ? <p>Loading results...</p> : <ResultList results={results} />}
//     </div>
//   );
// }

// function ResultList({ results }: { results: string[] }) {
//     if(results.length==0) return <p>No matches found...</p>
//   return (
//     <ul>
//       {results.map((result, index) => (
//         <li key={index}>{result}</li>
//       ))}
//     </ul>
//   );
// }

// // A helper function to simulate an expensive search operation.
// function simulateExpensiveSearch(query: string): string[] {
//   // In a real app, this might be a filter over a huge dataset.
//   // Here we simply return an array after a delay.
//   console.log("Inside expensive search")
//   const data = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
//   return data.filter(item => item.includes(query));
// }

// export default SearchComponent;


import { useState, useTransition } from 'react';

export default function TabContainer() {
  const [tab, setTab] = useState('fast');
  const [isPending, startTransition] = useTransition();

  function selectTab(nextTab: string) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <TabButton
          active={tab === 'fast'}
          onClick={() => selectTab('fast')}
        >
          Fast Content
        </TabButton>
        
        <TabButton
          active={tab === 'slow'}
          onClick={() => selectTab('slow')}
        >
          Network Request
        </TabButton>
        
        <TabButton
          active={tab === 'expensive'}
          onClick={() => selectTab('expensive')}
        >
          Expensive Operation
        </TabButton>
      </div>

      {isPending && <div style={{ color: '#666' }}>Loading content...</div>}
      
      {tab === 'fast' && <FastContent />}
      {tab === 'slow' && <SlowContent />}
      {tab === 'expensive' && <ExpensiveOperation />}
    </div>
  );
}

function TabButton({ children, active, onClick }:any) {
  return (
    <button
      style={{
        padding: '10px 20px',
        border: 'none',
        background: active ? '#2196F3' : '#e0e0e0',
        color: active ? 'white' : 'black',
        cursor: 'pointer',
        borderRadius: '4px'
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function FastContent() {
  return <div>This content loads instantly</div>;
}

function SlowContent() {
  // Simulate network request
  const start = Date.now();
  while (Date.now() - start < 500) {} // Block for 500ms
  return <div>Network response received</div>;
}

function ExpensiveOperation() {
  // Simulate heavy computation
  const start = Date.now();
  while (Date.now() - start < 1500) {} // Block for 1500ms
  return <div>Expensive calculation complete</div>;
}