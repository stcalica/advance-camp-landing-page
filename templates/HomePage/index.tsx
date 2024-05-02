"use client";

import Layout from "@/components/Layout";
import Main from "./Main";
import AboutUs from "./AboutUs";
import Offer from "./Offer";
import Details from "./Details";
import Testimonials from "./Testimonials";
import Discover from "./Discover";
import Pricing from "./Pricing";
import Announcements from "./Announcements";

const HomePage = () => {
  return (
    <Layout>
      <AboutUs />
      <Pricing />
      <Announcements />
      <Testimonials />
    </Layout>
  );
};

export default HomePage;
