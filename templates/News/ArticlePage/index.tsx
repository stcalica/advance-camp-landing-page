"use client";

import Layout from "@/components/Layout";
import Main from "./Main";

const ArticlePage = ({ id }: any) => {
    return (
        <Layout>
            <Main id={id} />
        </Layout>
    );
};

export default ArticlePage;
