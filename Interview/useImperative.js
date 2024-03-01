import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Child component
const ChildComponent = forwardRef((props, ref) => {
  const localRef = useRef();

  // Expose certain properties or methods to the parent component
  useImperativeHandle(ref, () => ({
    focus: () => {
      localRef.current.focus();
    },
    // You can expose other properties or methods here

  }));

  return <input ref={localRef} />;
});

// Parent component
const ParentComponent = () => {
  const childRef = useRef();

  const handleClick = () => {
    // Access the exposed method from the child component
    childRef.current.focus();
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Focus on Child</button>
    </div>
  );
};
