import Link from "next/link";
import Icon from "@/components/Icon";
import Subscribe from "@/components/Subscribe";
import Image from "@/components/Image";
import Language from "@/components/Language";
import Group from "./Group";

import { socials } from "@/constants/socials";
import { menu } from "@/constants/navigation";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <footer className="bg-white">
      <div className="py-8 border-b border-n-100">
        <div className="container flex justify-between items-center md:block">
          <div className="flex md:justify-center md:mb-6">
            {socials.map((social) => (
              <a
                className="group"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={social.id}
              >
                <Icon
                  className="w-10 h-10 fill-n-700 transition-colors group-hover:fill-primary-500"
                  name={social.icon}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="py-8 border-b border-n-100">
        <div className="container flex justify-between lg:flex-wrap md:block md:space-y-6">
          <div className="lg:w-full lg:mt-12">
            <div className="mb-4 text-16m text-black">Contact Us</div>
            <div className="mb-14 md:mb-8 text-black">
              <p>ADVANCECAMP, INC.</p>
              <p>1169 Sentinel Court, Merced, CA 95340-0677</p>
              <p>phone: 925-303-9689</p>
              <p>email: executivedirector@advancecamp.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
