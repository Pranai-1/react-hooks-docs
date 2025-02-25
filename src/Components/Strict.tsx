export default function Strict(){
    const items=[{id:"1",title:"First one"},
        {id:"2",title:"Second title"},
        {id:"3",title:"Third title!"}
    ]
    console.log(items)
    return(
        <>
        <Child items={items}/>
        </>
    )
}

function Child({items}:{items:any}){
  const arr=items //This is wrong approach we are directly modifying the items array,in development this runs twice so push 
  // functionalities happens twice and there will be two items with same id which throws error

  const helperArr=[...items] //or items.slice() does the same thing
 // arr.push({id:"4",title:"Hello world!"})
  arr.push({id:"4",title:"Hello world!"})
  console.log(arr,items,helperArr)//helper arr has 4 items becaise of strict mode as we are directly modifying the items array using
  //above functionality
  return(
    <>
    {helperArr.map((item:any)=><li key={item.id}>{item.title}</li>)}
    </>
  )
}