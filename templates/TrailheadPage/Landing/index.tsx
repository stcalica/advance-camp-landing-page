import Link from "next/link";
import Image from "@/components/Image";

type LandingProps = {};

const Landing = ({}: LandingProps) => (
  <div className="lg:py-32 2xl:py-24 py-20 md:pb-10">
    <div className="container flex flex-column items-center max-w-[76.875rem] lg:flex-row">
      <div className="hidden lg:block">
        <Image
          className="w-full rounded-full object-cover"
          src="/images/content/young-scout.png"
          width={425}
          height={425}
          alt="advance camp photo"
        />
      </div>    

      <div className="grow md:pl-[10.625rem] 2xl:pl-20 xl:pl-12 lg:pl-0">
        <div className="text-h2 text-font-header">
            Trailhead
        </div>
        <div className="mb-8 font-bold text-font-header">
          <h3>Register Early!</h3>
        </div>
        <div className="flex-col gap-2 text-1xl text-black">
          <div className="mb-8 text-justify">
          Advance registration helps us prepare by arranging sufficient staff, planning events, and ensuring we have all the necessary supplies. Register early to reserve your sessions and contribute to a smoother camp experience for everyone.
          </div>
          <div className="mb-8 font-bold text-justify text-font-header">
            Contact Trailhead Director with any questions. Richard Byle at gryphon97@gmail.com. 
          </div>
          <div className="mb-8 font-bold text-justify text-font-header">
            Mark your calendars for the 24th AdvanceCamp, taking place on
            September 27-28, 2024 at the Solano County Fairgrounds.  
            <h2 className="text-black font-bold">Registration opens June 1st.</h2>
          </div>
          <div>
            <Link
              className="px-16 py-3 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white border border-orange-500 hover:border-transparent"
              href="https://registration.advancecamp.com"
            >
              Register
          </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
