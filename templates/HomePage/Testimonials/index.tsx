import Link from "next/link";
import Image from "@/components/Image";

type ServicesProps = {};

import { testimonials  } from "@/mocks/testimonials";

const Services = ({}: ServicesProps) => (
  <div className="py-20 bg-secondary-500 md:pb-18">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-4">
        {testimonials.map((testimonial) => (
          <div className="group block flex-1 text-n-700">
            <div className="h-[24rem] mb-8 overflow-hidden xl:h-[24rem] md:h-[24rem]">
              <Image
                className="w-full h-full object-cover"
                src={testimonial.image}
                width={340}
                height={426}
                alt=""
              />
            </div>
            <div className="mb-4 text-h5 text-font-header">{testimonial.title}</div>
            <div className="text-font-header text-justify">{`"${testimonial.content}"`}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
