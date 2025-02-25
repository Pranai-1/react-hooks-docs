import { Fragment, useState } from 'react';

const posts = [
  { id: 1, title: 'An update', body: "It's been a while since I posted..." },
  { id: 2, title: 'My new blog', body: 'I am starting a new blog!' }
];

export default function Blog() {
//   return posts.map(post =>
    
//     <Fragment key={post.id}>
//       <PostTitle title={post.title} />
//       <PostBody body={post.body} />
//     </Fragment>
//   );
return <>
<>
<CheckState/>
</>

</>
}

function PostTitle({ title }:{title:string}) {
  return <h1>{title}</h1>
}

function PostBody({ body }:{body:string}) {
  return (
    <article>
      <p>{body}</p>
    </article>
  );
}


function CheckState(){
    const[state,setState]=useState(0)

    return(
    <>
    <p style={{
        color:"red",
        fontWeight:"500",
        fontSize:"large"
    }}>{state}</p>
    <button onClick={()=>setState((prev)=>prev+1)}>Increase</button>
    </>)
}

//React does not reset state when you go from rendering <><Child /></> to [<Child />] or back, or when you go
//  from rendering <><Child /></> to <Child /> and back.
// This only works a single level deep: for example, going from <><><Child /></></> to <Child /> resets the state. 