import * as React from 'react';
import Layout from '../components/constant/layout/layout';
import { useEffect } from 'react';
import BannerSection from '../components/pages/jobsPage/bannerSection';
import AllJobs from '../components/pages/jobsPage/allJobs';

export default function Jobs () {

    useEffect(() => {
        document.title = "Jobs | TimeKazi - Connecting Persons To Work";
      }, [] );

    return(
        <div>
            <Layout>
                {/* Banner  Section */}
                <BannerSection/>

                {/* Job Listing */}
                <AllJobs/>
            </Layout>
        </div>
    )
}