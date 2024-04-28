import Link from "next/link";
import Image from "@/components/Image";
import Language from "@/components/Language";
import Dropdown from "./Dropdown";

type HeaderProps = {
  onClick: () => void;
};

const Header = ({ onClick }: HeaderProps) => {
  return (
    <div className="z-10 flex-row items-center bg-neutral-700">
      <div className="flex items-center py-4 px-4">
        <Link className="" href="/">
          <Image
            className="opacity-100"
            src="/images/content/advcamplogo.png"
            width={100}
            height={25}
            alt=""
          />
        </Link>
      </div>
      <div className="lg:hidden">
        <div className="">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;
