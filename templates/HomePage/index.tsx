"use client";

import Layout from "@/components/Layout";
import Main from "./Main";
import AboutUs from "./AboutUs";
import Offer from "./Offer";
import Details from "./Details";
import Services from "./Services";
import Discover from "./Discover";
import Pricing from "./Pricing";

const HomePage = () => {
  return (
    <Layout>
      <AboutUs />
      <Pricing />
      <Services />
    </Layout>
  );
};

export default HomePage;
