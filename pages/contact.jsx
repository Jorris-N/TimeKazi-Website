import * as React from 'react';
import { useEffect } from 'react';
import Layout from '../components/constant/layout/layout';
import BannerSection from '../components/pages/contactPage/bannerSection';
import ContactSection from '../components/pages/contactPage/contactSection';


export default function Contact () {

    useEffect(() => {
        document.title = "Contact Us | TimeKazi - Connecting Persons To Work";
      }, [] );

    return(
        <div>
            <Layout>
                {/* Banner Section */}
                <BannerSection/>

                {/* Contact Section */}
                <ContactSection/>
            </Layout>
        </div>
    )
}