import Link from "next/link";
import Image from "@/components/Image";

type LandingProps = {};

const ImportantInfo = ({}: LandingProps) => (
  <div className="container lg:py-4 2xl:py-24 py-8 md:pb-10 text-black text-justify">
       <h2 className="text-h4 font-bold my-4">Merit Badge List</h2>
          <p className="text-16r mb-4">List of merit badge courses are on the requirements page found <strong><a href="/requirements">here</a></strong> if any courses are missing then we are still looking for counselors for said courses.</p>
        <div className="container py-4 text-black text-justify">
          <Link
            className="mx-auto px-16 py-3 bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white border border-orange-500 hover:border-transparent"
            href="/requirements"
          >
            See Merit Badges
        </Link>
        </div>
       <h2 className="text-h4 font-bold my-4">Additional Fees</h2>
          <p className="text-16r mb-4">Archery, Basketry, Climbing, Indian Lore, Lifesaving, Plumbing, Programming, Search and Rescue, Robotics, Swimming, and Welding will carry an additional $30 fee. Partial Archery is $15.00</p>
          <p className="text-16r mb-4"><strong>AVIATION MERIT BADGE</strong> has a different fee of $75 because scouts will be flying as a part of the badge work that day.</p>
          <table className="table-auto w-full border-collapse border border-n-300">
            <thead>
              <tr className="bg-n-100">
                <th className="border border-n-300 px-4 py-2 text-left">Courses</th>
                <th className="border border-n-300 px-4 py-2 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-n-300 px-4 py-2 text-left whitespace-normal text-justify">
                  Archery, Basketry, Climbing, Indian Lore, Lifesaving, Plumbing, Programming, Search and Rescue, Robotics, Swimming, and Welding
                </td>
                <td className="border border-n-300 px-4 py-2 text-left">$30</td>
              </tr>
              <tr>
                <td className="border border-n-300 px-4 py-2 text-left">
                  Aviation 
                </td>
                <td className="border border-n-300 px-4 py-2 text-left">$75</td>
              </tr>
              <tr>
                <td className="border border-n-300 px-4 py-2 text-left">
                  Partial Archery 
                </td>
                <td className="border border-n-300 px-4 py-2 text-left">$15</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-h4 font-bold my-4">Swimming</h2>
          <p className="text-16r mb-4"><strong>NOTE: THIS IS NOT AN INSTRUCTIONAL SWIMMING COURSE.</strong> </p>
          <p>This class will not teach you how to swim, but verify your swimming skills and knowledge of the merit badge skills. Be sure to bring a change of clothes for some of the requirements. Register only if you are taking the Merit Badge for Swimming or Lifesaving. Trailhead swim is NOT offered.</p>
                    
          <h2 className="text-h4 font-bold my-4">NOVA Award</h2>
          <p className="text-16r mb-4">Go for the <strong>NOVA Award</strong>! The Boy Scouts of America's NOVA Awards program incorporates learning with cool activities and exposure to science, technology, engineering, and mathematics. AdvanceCamp offers many merit badges required for the NOVA Award. <a href="#link-to-nova-award-info" className="text-primary-500 hover:underline">Click here for more information</a></p>
                    
          <p className="text-16r mb-4">Please be aware that we may <strong>CANCEL or ADD</strong> Merit Badges based on volunteer Merit Badge Counselor availability.</p>
          
          <h2 className="text-h4 font-bold my-4">Partial Merit Badge Booth</h2>
          <p className="text-16r mb-4">We will also be offering a Partial Merit Badge Booth from 8:30am until 4:30pm for items that you have completed and just need to be verified and checked off. No appointment necessary. The longest wait times will be 11:30am-1:00pm and 2:30pm-4:30pm. This is a drop-in, first come first served opportunity on the Expo Lawn West. Please be prepared with the following items: Partial Blue Card, Merit Badge worksheet completed, Merit Badge booklet and any other completed work needed to demonstrate a requirement. If an activity is needed, please complete the Activity Verification Form.</p>
        </div>
);

export default ImportantInfo;


{/* <p className="text-16r mb-4">If you are interested in being a <strong>Merit Badge Counselor</strong> at AdvanceCamp, <a href="#link-to-merit-badge-counselor-info" className="text-primary-500 hover:underline">Click Here</a>.</p> */}
