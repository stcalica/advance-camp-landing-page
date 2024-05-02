"use client";

import Layout from "@/components/Layout";
import Main from "./Main";

const DetailsPage = ({ id }: any) => {
    return (
        <Layout>
            <Main id={id} />
        </Layout>
    );
};

export default DetailsPage;
