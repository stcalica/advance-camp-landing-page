import Link from "next/link";
import Image from "@/components/Image";
import Language from "@/components/Language";
import Dropdown from "./Dropdown";

type HeaderProps = {
  onClick: () => void;
};

const Header = ({ onClick }: HeaderProps) => {
  return (
    <header className="relative z-10  bg-tertiary-500">
      <div className="py-4">
        <div className="container relative flex items-center h-[4.8125rem] lg:flex-row-reverse lg:hidden xl:hidden 2xl:hidden ">
          <button
            className="flex flex-col justify-center items-center w-12 h-12 before:w-8 before:h-0.5 before:bg-n-400 before:rounded before:transition-colors after:w-4 after:h-0.5 after:bg-n-400 after:rounded after:transition-colors hover:before:bg-orange-500 hover:after:bg-orange-500"
            onClick={onClick}
          >
            <span className="w-6 h-0.5 my-1.5 rounded bg-n-400 transition-colors group-hover:bg-orange-500"></span>
          </button>
          <Link
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:mr-auto lg:translate-x-0 lg:translate-y-0"
            href="/"
          >
            <Image
              className="opacity-100"
              src="images/content/advcamplogo.png"
              width={75}
              height={15}
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="hidden pt-0.25 lg:block">
        <div className="container">
          <Dropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
