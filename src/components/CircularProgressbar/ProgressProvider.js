import React from 'react';

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = React.useState(valueStart);
  //
  // const requestRef = React.useRef();
  // const previousTimeRef = React.useRef();
  //
  // const animate = (time) => {
  //   if (previousTimeRef.current != undefined) {
  //     const deltaTime = time - previousTimeRef.current;
  //
  //     setValue((value) => (value + deltaTime * 0.01) % 100);
  //   }
  //
  //   previousTimeRef.current = time;
  //   requestRef.current = requestAnimationFrame(animate);
  // };
  //
  // React.useEffect(() => {
  //   requestRef.current = requestAnimationFrame(animate);
  //   return () => cancelAnimationFrame(requestRef.current);
  // }, []);
  //
  // if (Math.round(value) === valueEnd) {
  //   cancelAnimationFrame(requestRef.current);
  // }

  return children(Math.round(valueEnd));
};

export default ProgressProvider;
