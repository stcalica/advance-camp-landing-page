import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { navigation } from "@/constants/navigation";

type SidebarProps = {
  className: string;
  onClick: () => void;
};

const Sidebar = ({ className, onClick }: SidebarProps) => (
  <div
    className={`fixed top-0 left-0 bottom-0 z-30 w-[34.7rem] p-14 overflow-auto scrollbar-none 2xl:w-[28rem] 2xl:p-10 lg:p-8 lg:pt-7 md:flex md:flex-col md:w-full bg-neutral-700 ${
      className || ""
    }`}
  >
    <div className="flex items-start justify-between mb-9 lg:items-center">
      <Link className="" href="/">
        <Image
          className="opacity-100"
          src="/images/content/advcamplogo.png"
          width={100}
          height={20}
          alt=""
        />
      </Link>
      <button className="group" onClick={onClick}>
        <Icon
          className="w-8 h-8 fill-n-600 transition-colors group-hover:fill-orange-500 lg:w-6 lg:h-6"
          name="close"
        />
      </button>
    </div>
    <div className="flex flex-col items-start space-y-6">
      {navigation.map((link) =>
        link.dropdown ? (
          <div className="" key={link.id}>
            <div className="py-1 text-h4-libre text-orange-500">
              {link.title}
            </div>
            <div className="flex flex-col items-start pt-4 pl-4 space-y-6">
              {link.dropdown.map((item) => (
                <Link
                  className="text-h6 text-orange-500 transition-colors hover:text-white"
                  href={item.url}
                  key={item.id}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link
            className="py-1 text-h4-libre text-orange-500 transition-colors hover:text-white"
            href={link.url}
            key={link.id}
          >
            {link.title}
          </Link>
        )
      )}
    </div>
  </div>
);

export default Sidebar;