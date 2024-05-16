import Link from "next/link";
import Image from "@/components/Image";

type LandingProps = {};

const Landing = ({}: LandingProps) => (
  <div className="lg:py-32 2xl:py-24 py-20 md:pb-1">
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
      <h1 className="text-h2 font-bold my-4">A Scout is Prepared!</h1>
        <p className="text-16r mb-4">Please make sure you bring your printed Merit Badge Worksheet(s) with you to camp! These are a tool for your success.</p>
        <p className="text-16r mb-4">You are encouraged to use merit badge worksheets available at <a href="http://usscouts.org" className="text-primary-500 hover:underline">usscouts.org</a>. As explained in the worksheets, these are tools that help you jot down ideas after you read through the merit badge pamphlets to remind you to ask your merit badge counselor for more information during your time working on the badge. It is highly recommended that you print out the worksheets for each merit badge you plan to work on and bring them along with you to camp.</p>
        <h2 className="text-h4 font-bold my-4">Special Requirements</h2>
          <p className="text-16r mb-4">Many Merit Badges require that the scsout have permission slips, special clothes or shoes, extra clothes, etc. </p>
          <p className="text-black font-black">Please check the details of every Merit Badge and make sure that your scouts are prepared to work on that badge.</p>
        <div className="mt-8 flex flex-col lg:flex-row gap-x-4 gap-y-4">
        <Link
            className="px-16 py-3 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white border border-orange-500 hover:border-transparent"
            href="http://registration.advancecamp.com"
          >
            Register
        </Link>
        <Link
            className="px-16 py-3 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white border border-orange-500 hover:border-transparent"
            href="http://usscouts.org"
          >
            Get Worksheets
        </Link>
        <Link
            className="px-16 py-3 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white border border-orange-500 hover:border-transparent"
            href="/requirements"
          >
            Check Requirements
        </Link>
        </div>
        </div>
      </div>
    </div>
);

export default Landing;
