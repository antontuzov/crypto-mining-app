import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../animations/animation.json'; // Replace with your JSON animation file

const Animation: React.FC = () => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => anim.destroy(); // Cleanup on unmount
    }
  }, []);

  return <div ref={animationContainer} className="w-64 h-64"></div>;
};

export default Animation;