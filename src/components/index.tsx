import { useState, useEffect } from "react";
import { usePrevious } from "@/hooks/usePrevious";

export default () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  console.log("Current count:", count);
  console.log("Previous count:", prevCount);

  // todo prevCount is undefined
  if(prevCount === undefined) {
    console.log('prevCount is undefined');
    debugger
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount + 1)}>Increment</button>
    </div>
  );
};
