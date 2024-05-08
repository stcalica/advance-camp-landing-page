import Link from "next/link";
import Image from "@/components/Image";

type AnnouncementsProps = {};

import { announcements  } from "@/mocks/announcements";

const Announcements = ({}: AnnouncementsProps) => (
  <div className="py-20 bg-white md:pb-18 bg-opacity-75 my-30">
        <div className="text-h2 text-black text-center mb-8">Announcements</div>
    <div className="container">
      <div className="flex space-x-14 md:space-x-8 flex-col lg:flex-row lg:space-x-0 lg:space-y-12 xl:space-y-8">
        {announcements.map((announcement) => (
          <div className="group block flex-1 text-n-700">
            <div className="mb-4 text-h5 text-font-header">{announcement.title}</div>
            <div className="text-black text-justify">{`"${announcement.content}"`}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Announcements;
