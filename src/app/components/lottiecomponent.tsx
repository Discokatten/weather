"use client";
import animationData from "@/app/lib/lottie/partly-cloudy-day.json";
import { useLottie } from "lottie-react";

//using lottie to render weather-animations 
const LottieComponent = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };
  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div className="w-75">{View}</div>
    </>
  );
};

export default LottieComponent;
