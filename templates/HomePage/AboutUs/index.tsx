import Link from "next/link";
import Image from "@/components/Image";

type AboutUsProps = {};

const AboutUs = ({}: AboutUsProps) => (
  <div className="lg:py-32 2xl:py-24 py-20 md:pb-10">
    <div className="container flex flex-column items-center max-w-[76.875rem] lg:flex-row">
      <div className="hidden lg:block">
        <Image
          className="w-full"
          src="/images/content/advcamplogo.png"
          width={425}
          height={425}
          alt="advance camp photo"
        />
      </div>    

      <div className="grow md:pl-[10.625rem] 2xl:pl-20 xl:pl-12 lg:pl-0">
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
          <div className="mb-8">
             Since its inception in 1998, AdvanceCamp has served over 30,000
            Scouts, providing a platform for them to complete partials for
            unusual merit badges. The event has grown from 300 Scouts and 15
            merit badges to a major annual gathering, thanks to the tireless
            efforts of Steve Hoagland, the Executive Director of AdvanceCamp.
          </div>
          <div>
            As we continue to regain momentum post-COVID, we're excited to see
            the growing partnership between GGAC and AdvanceCamp, with more
            volunteers than ever before. Registration for AdvanceCamp opens in
            early June, with more details about this year’s event coming soon. 
             If you're interested in volunteering, click the button below to
            learn more! 
          </div>
          <div className="mb-8 font-bold">We can’t wait to see you there!</div>
        </div>
        <Link
          className="px-16 py-3 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white border border-orange-500 hover:border-transparent"
          href=""
        >
          Sign up
        </Link>
      </div>
    </div>
  </div>
);

export default AboutUs;
