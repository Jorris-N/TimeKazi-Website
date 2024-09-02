import * as React from 'react';
import { useEffect } from 'react';
import Layout from '../components/constant/layout/layout';
import BannerSection from '../components/pages/employersPage/bannerSection';
import EmployerSection from '../components/pages/employersPage/employerSection';


export default function Employers () {

    useEffect(() => {
        document.title = "Employers | TimeKazi - Connecting Persons To Work";
      }, [] );

    return(
        <div>
            <Layout>
                {/* Banner Section */}
                <BannerSection/>

                {/* Employer Section */}
                <EmployerSection/>
            </Layout>
        </div>
    )
}