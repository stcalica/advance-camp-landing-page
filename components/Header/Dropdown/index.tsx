import Link from "next/link";
import { Menu } from "@headlessui/react";
import Icon from "@/components/Icon";

import { navigation } from "@/constants/navigation";

type DropdownProps = {};

const Dropdown = ({}: DropdownProps) => (
  <nav className="flex justify-center space-x-10 border-b border-n-100">
    {navigation.map((link) => ( 
        <Link
          className="relative flex items-center h-11 px-4 pb-1 text-2xl before:absolute before:left-0 before:right-0 before:-bottom-0.25 before:h-0.25 before:bg-n-400 before:opacity-0 before:transition-opacity hover:before:opacity-100"
          href={link.url}
          key={link.id}
        >
          {link.title}
        </Link>
      )
    )}
  </nav>
);

export default Dropdown;
