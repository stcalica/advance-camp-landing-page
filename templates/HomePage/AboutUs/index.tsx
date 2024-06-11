import Link from "next/link";
import Image from "@/components/Image";

type AboutUsProps = {};

const AboutUs = ({}: AboutUsProps) => (
  <div className="lg:pb-32 2xl:pb-24 pb-20 md:pb-10">
          <div className="w-full">
        <Image
                  className="w-full sm:6rem xs:6rem md:6rem lg:12rem xl:12rem 2xl:12rem"
                  src="images/banners/advancecampbanner.png"
                  width={1500}
                  height={220}
                  layout="responsive"
                  alt="advance camp banner"
        />
      </div>
    <div className="container flex flex-column items-center max-w-[76.875rem] lg:flex-row">

      <div className="hidden lg:block">
        <Image
          className="w-full"
          src="images/content/advcamplogo.png"
          width={425}
          height={425}
          alt="advance camp photo"
        />
      </div>    

      <div className="grow md:pl-[10.625rem] 2xl:pl-20 xl:pl-12 lg:pl-0">
        <div className="text-h2 text-font-header">
            Advance Camp
        </div>
        <div className="mb-8 font-bold text-font-header">
          <h3>September 27-28, 2024 | Solano County Fairgrounds</h3>
        </div>
        <div className="flex-col gap-2 text-1xl text-black">
          <div className="mb-8 text-justify">
          AdvanceCamp provides scouts with the opportunity to complete advancement begun at another scout event, to start and complete advancement with the completion of all requirements during the camp, or to begin work on and make a contact with a counselor to complete a merit badge at a later time.
          </div>
          <div className="mb-8 text-justify">
          Since its inception in 1998, AdvanceCamp has served over 30,000
            Scouts, providing a platform for them to complete partials for
            unusual merit badges. From 300 Scouts and 15 merit badges to a major annual gathering, thanks to the tireless
            efforts of Steve Hoagland, the Executive Director of AdvanceCamp.
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
          <Link
              className="mx-8 px-16 py-3 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white border border-orange-500 hover:border-transparent"
              href="/requirements"
            >
              Merit Badges
          </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
