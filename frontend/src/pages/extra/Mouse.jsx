import React, { useEffect, useState } from 'react';


const MouseCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div
        className="mouse-cursor cursor-outer"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      ></div>
      <div
        className="mouse-cursor cursor-inner"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      ></div>
    </>
  );
};

export default MouseCursor;
