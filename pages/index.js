import * as React from 'react';
import { useEffect } from 'react';
import Layout from '../components/constant/layout/layout';
import BannerSection from '../components/pages/homePage/bannerSection';
import CategorySection from '../components/pages/homePage/categorySection';
import JobsSection from '../components/pages/homePage/jobsSection';


export default function Home () {

  useEffect(() => {
    document.title = "Welcome | TimeKazi - Connecting Persons To Work";
  }, [] );
  
  return (
    <div>
      <Layout>
          {/* Banner Section */}
          <BannerSection/>

          {/* Job Section */}
          <JobsSection/>

          {/* Job Category Section */}
          <CategorySection/>
      </Layout>
    </div>
  )
}