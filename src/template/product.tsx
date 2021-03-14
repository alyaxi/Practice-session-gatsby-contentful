import React from 'react';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../component/layout";


export default function Product({pageContext}) {
    console.log(pageContext);
    const {itemDetails} = pageContext
    return (
        <Layout>
            <h1>{itemDetails.title}</h1>
            <p>{renderRichText(itemDetails.desc)}</p>
        </Layout>
    )
}
