import React, { useState } from 'react';
const Scroll = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
      };
  return (
    <button onClick={scrollToTop} className="scroll-to-top-button">
    &uarr; 
  </button>
  )
}

export default Scroll