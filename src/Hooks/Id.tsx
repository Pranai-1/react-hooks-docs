import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}

export default function Id() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </>
  );
}

//Notes:-UseId() generates a unique id in sequence everytime it gets called
// useId does not take any parameters.
//useId returns a unique ID string associated with this particular useId call in this particular component.
//useId should not be used to generate keys in a list. Keys should be generated from your data.


// hardcoding IDs  is not a good practice in React. A component may be rendered more than once on the page—but
//  IDs have to be unique! Instead of hardcoding an ID, generate a unique ID with useId

//With server rendering, useId requires an identical component tree on the server and the client. 
// If the trees you render on the server and the client don’t match exactly, the generated IDs won’t match.


//You might be wondering why useId is better than incrementing a global variable like nextId++.
// The primary benefit of useId is that React ensures that it works with server rendering. 
// During server rendering, your components generate HTML output. Later, on the client, 
// hydration attaches your event handlers to the generated HTML. For hydration to work, the client output must match the server HTML.
// This is very difficult to guarantee with an incrementing counter because the order in 
// which the Client Components are hydrated may not match the order in which the server HTML was emitted. 
// By calling useId, you ensure that hydration will work, and the output will match between the server and the client.

// Inside React, useId is generated from the “parent path” of the calling component. This is why, 
// if the client and the server tree are the same, the “parent path” will match up regardless of rendering order.

//The useId hook generates IDs based on the component tree’s order. When you render on the server (SSR), 
// React creates IDs in a specific order, then sends that HTML to the client. On hydration, React runs your components 
// again to "attach" event handlers and state. If the component tree is exactly identical (same components, same order, same conditions),
//   the client will generate the same IDs as the server, and everything works smoothly.