"use client"
import ArrowRight  from "@/assets/arrow-right.svg"
import springImage  from "@/assets/spring.png"
import starImage  from "@/assets/star.png"
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="contaimer">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free</h2>
          <p className="section-description mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia explicabo nam, dolores vitae beatae odio tenetur maxime architecto facere autem rem, quos amet velit iure! Nam quae obcaecati sunt commodi.</p>
          <motion.img src={starImage.src} 
          alt="Star Image" width={360} 
          className="absolute -left-[350px] -top-[132px]" 
          style={{
            translateY,
          }} 
          />
          <motion.img src={springImage.src} 
          alt="Spring Image" width={360} 
          className="absolute -right-[331px] -top-[91px]" 
          style={{
            translateY,
          }} 
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button  className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5"/>
          </button>
        </div>
      </div>
    </section>
  );
};
