"use client";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Landing from "./Landing";
import ImportantInfo from "./ImportantInfo";


const MeritBadgePage = () => {
    return (
        <Layout>
            <Landing />
            <ImportantInfo/>
        </Layout>
    );
};

export default MeritBadgePage;
