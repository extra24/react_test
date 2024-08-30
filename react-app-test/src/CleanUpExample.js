import { useState, useEffect } from 'react';

function Hello() {
  //   function byeFn() {
  //     console.log('bye');
  //   }
  //   function hiFn() {
  //     console.log('created');
  //     //cleanup function
  //     return byeFn;
  //   }
  useEffect(() => {
    console.log('hi');
    return () => console.log('bye');
  }, []);
  //   useEffect(hiFn, []);
  //   useEffect(() => {
  //     console.log('created!');
  //     //cleanup function -> component가 사라졌을 때 보내는 함수
  //     return () => console.log('destroyed..');
  //   }, []);
  return <h1>Hello</h1>;
}

function CleanUpExample() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default CleanUpExample;
