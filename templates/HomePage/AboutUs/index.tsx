import Link from "next/link";
import Image from "@/components/Image";

type AboutUsProps = {};

const AboutUs = ({}: AboutUsProps) => (
  <div className="py-32 2xl:py-24 lg:py-20 md:pb-10">
    <div className="container flex items-center max-w-[76.875rem] md:block">
      <div className="">
        <Image
          className="w-full"
          src="/images/content/advcamplogo.png"
          width={425}
          height={425}
          alt=""
        />
      </div>
      <div className="grow pl-[10.625rem] 2xl:pl-20 xl:pl-12 lg:pl-0">
        <div className="mb-8 text-h2 text-black">
          Get Ready for an Exciting New Chapter in Scouting!
        </div>
        <div className="flex-col gap-2 text-1xl text-black">
          <div className="mb-8">
            The Golden Gate Area Council (GGAC) and AdvanceCamp, Inc. are
            thrilled to announce their merger, following unanimous votes by both
            boards. This strategic alliance will see AdvanceCamp forming a new
            committee within our GGAC Program committees, ensuring the annual
            AdvanceCamp event continues to thrive and grow.
          </div>
          <div className="mb-8 font-bold">
            Mark your calendars for the 24th AdvanceCamp, taking place on
            September 27-28, 2024 at the Solano County Fairgrounds.
          </div>
          <div className="mb-8">
            The event attracts Scouts from across California and Nevada, and
            this merger promises to expand our reach even further.
          </div>
        </div>
        <Link
          className="px-6 py-3 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white border border-orange-500 hover:border-transparent"
          href=""
        >
          Sign up
        </Link>
      </div>
    </div>
  </div>
);

export default AboutUs;
