



import { memo, useEffect } from 'react';
import { useState, useDeferredValue } from 'react';


export default function DeferredValue() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  useEffect(()=>{
    console.log("text  ",text)
    console.log("deferredText  ",deferredText)
  },[text,deferredText])
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  );
}

const SlowList = memo(({ text }:{text:string})=> {
  // Log once. The actual slowdown is inside SlowItem.
//   console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />');

  let items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return (
    <ul className="items">
      {items}
    </ul>
  );
});

function SlowItem({ text }:{text:string}) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li className="item">
      Text: {text}
    </li>
  )
}


