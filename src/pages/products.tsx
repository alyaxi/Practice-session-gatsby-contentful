import React from 'react'
import {Router} from "@reach/router";
import ProductOne from '../component/product1';
import Layout from "../component/layout";
import Main from '../component/main'
import { Link } from 'gatsby';
export default function products() {
    return (
        <Layout>
            <h1>See Products</h1>
            <div>
                <Link to="/products/page1">Product 1</Link>
            </div>
            <Router basepath="/products">
            <ProductOne path= "/page1"/>
            <Main path= "/"/>
            </Router>
        </Layout>
    )
}
