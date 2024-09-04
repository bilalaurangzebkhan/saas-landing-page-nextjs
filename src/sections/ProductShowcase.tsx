import productImage from "@/assets/product-image.png"
import tubeImage from "@/assets/tube.png"
import pyramidImage from "@/assets/pyramid.png"
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24  overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5 ">A more effective way to track progress</h2>
          <p className="section-description mt-5 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, nisi labore explicabo sit, impedit voluptatibus quia eos quasi </p>
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
