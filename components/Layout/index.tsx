import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  enablePageScroll,
  disablePageScroll,
  clearQueueScrollLocks,
} from "scroll-lock";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  const onOpenSidebar = () => {
    setVisible(true);
    disablePageScroll();
  };

  const onCloseSidebar = () => {
    setVisible(false);
    enablePageScroll();
  };

  const pathname = usePathname();

  useEffect(() => {
    clearQueueScrollLocks();
    enablePageScroll();
  }, [pathname]);

  return (
    <>
      <div className="flex flex-col min-h-screen lg:overflow-hidden">
        <Header onClick={onOpenSidebar} />
        <div className="grow">{children}</div>
      </div>
    </>
  );
};

export default Layout;
