"use client";

import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import VisibilitySensor from "react-visibility-sensor";
const ScrollCounter = ({ end }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [shouldCount, setShouldCount] = useState(false);

  React.useEffect(() => {
    if (inView) {
      setShouldCount(true);
    } else {
      setShouldCount(false); 
    }
  }, [inView]);

  return (
    <div ref={ref} className="text-4xl">
      {shouldCount ? (
        <CountUp key={Math.random()} end={end} duration={2} />
      ) : (
        <span>0</span>
      )}
    </div>
  );
};

const Count = () => (
  <div className="flex flex-col items-center gap-20 mt-[800px]">
    <ScrollCounter end={55} />
    <ScrollCounter end={13} />
    <ScrollCounter end={10} />
  </div>
);

export default Count;
