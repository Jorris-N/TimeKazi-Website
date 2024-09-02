import * as React from 'react';
import { useEffect } from 'react';
import Layout from '../components/constant/layout/layout';
import BannerSection from '../components/pages/categoriesPage/bannerSection';
import CategorySection from '../components/pages/categoriesPage/categorySection';


export default function Categories () {

    useEffect(() => {
        document.title = "Categories | TimeKazi - Connecting Persons To Work";
      }, [] );

    return (
        <div>
            <Layout>
                {/* Banner Section */}
                <BannerSection/>
                
                {/* Category Section */}
                <CategorySection/>
            </Layout>
        </div>
    )
}