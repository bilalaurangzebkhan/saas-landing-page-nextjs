"use client"

import productImage from "@/assets/product-image.png"
import tubeImage from "@/assets/tube.png"
import pyramidImage from "@/assets/pyramid.png"
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24  overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5 ">A more effective way to track progress</h2>
          <p className="section-description mt-5 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, nisi labore explicabo sit, impedit voluptatibus quia eos quasi </p>
        </div>
        <div className="relative">
          <Image  src={productImage} alt="Product Image" className="mt-10"/>  
          <motion.img  src={pyramidImage.src} alt="Pyramid Image" 
            height={262} width={262} 
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />  
          <motion.img  src={tubeImage.src} alt="Tube Image" 
            height={248} width={248} 
            className="hidden md:block absolute -left-36 bottom-24"
            style={{
              translateY,
            }} 
          />
        </div>
      </div>
    </section>
  );
};
