import Link from "next/link";
import Image from "@/components/Image";

type ServicesProps = {};

import { testimonials  } from "@/mocks/testimonials";

const Services = ({}: ServicesProps) => (
  <div className="py-20 bg-white md:pb-18">
    <div className="container">
      <div className="mb-12 text-center text-h2 text-black">Testimonials</div>
      <div className="flex space-x-14 md:space-x-8 flex-col lg:flex-row lg:space-x-0 lg:space-y-12 xl:space-y-8">
        {testimonials.map((service) => (
          <div className="group block flex-1 text-n-700">
            <div className="h-[24rem] mb-8 overflow-hidden xl:h-[24rem] md:h-[24rem]">
              <Image
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src={service.image}
                width={340}
                height={426}
                alt=""
              />
            </div>
            <div className="mb-4 text-h5 text-black">{service.title}</div>
            <div className="text-black">{`"${service.content}"`}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
