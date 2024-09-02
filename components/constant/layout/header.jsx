import React, { Component } from 'react';
import AnnouncementBanner from '../navigation/announcementBanner';
import MobileNav from '../navigation/mobilenav';
import WebNav from '../navigation/webnav';

class Header extends Component {
    render() {
        return (
            <header>
                {/* Announcement Banner */}
                <AnnouncementBanner/>

                {/* Web Navigation */}
                <WebNav/>

                {/* Mobile Navigation */}
                <MobileNav/>
            </header>
        );
    }
}

export default Header;
