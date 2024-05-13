"use client";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Landing from "./Landing";
import Stations from "./Stations";
import Volunteers from "./Volunteers";
import AvailableAdvancements from "./AvailableAdvancements";

//import MeritBadges from "./MeritBadges";

const TrailheadPage = () => {
    return (
        <Layout>
            <Landing />
            <Stations/>
            <AvailableAdvancements />
            <Volunteers/>
        </Layout>
    );
};

export default TrailheadPage;
