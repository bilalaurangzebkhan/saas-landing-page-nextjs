import productImage from "@/assets/product-image.png"
import tubeImage from "@/assets/tube.png"
import pyramidImage from "@/assets/pyramid.png"
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24  overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto ">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5  md:text-[54px] md:leading-[68px] ">A more effective way to track progress</h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, nisi labore explicabo sit, impedit voluptatibus quia eos quasi </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10"/>  
          <Image src={pyramidImage} alt="Pyramid Image" height={262} width={262} className="hidden md:block absolute -right-36 -top-32"/>  
          <Image src={tubeImage} alt="Tube Image" height={262} width={262} className="hidden md:block absolute -left-36 bottom-24"/>
        </div>
      </div>
    </section>
  );
};
