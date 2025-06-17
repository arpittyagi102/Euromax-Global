"use client";
import React, { useEffect, useRef } from "react";
import "./explore.css";

const ExploreScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 15; // Adjust speed (lower = faster)

  useEffect(() => {
    const scrollContent = scrollRef.current;
    if (scrollContent) {
      const duplicateContent = scrollContent.innerHTML;
      scrollContent.innerHTML += duplicateContent; // Duplicate images for seamless scrolling

      // Apply CSS animation
      scrollContent.style.setProperty('--scroll-speed', `${scrollSpeed}s`);
    }
  }, [scrollSpeed]);

  const handleMouseEnter = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'running';
    }
  };

//   const handleImageClick = (categoryName: string) => {
//     console.log(`${categoryName} clicked`);
//     // Use router.push to navigate to a new route
//     router.push(`/category/${categoryName}`);
//   };

  return (
    <section className="explore mb-10" id="menu">
      <div className="container">

        {/* Infinite Scroll Container */}
        <div
          className="scroll-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="scroll-content flex gap-[15%]" ref={scrollRef}>
            {Array(6).fill(true).map((item, i) => (
                <img
                    key={i}
                    src='/globe.svg'
                    alt="alt"
                    className="w-[48%] sm:w-[31%] md:w-[15%] cursor-pointer"
                />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExploreScroll;
