import * as React from 'react';
import CtaSection from '../../pages/homePage/ctasection';
import FooterNav from '../navigation/footernav';
import Header from './header';


export default function Layout ({children}) {
    return (
        <div>
            <Header/>

            {/* Body Section */}
            <main>
                {children}
            </main>

            {/* Cta Section */}
            <CtaSection/>
            
            {/* Footer */}
            <footer>
                <FooterNav/>
            </footer>
        </div>
    )
}