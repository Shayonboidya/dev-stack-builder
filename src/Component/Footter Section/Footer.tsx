// import React from 'react';

import FooterLinks from "./FooterLinks";
import FooterLogoText from "./FooterLogoText";

const Footer = () => {
    return (
        <div className="container mx-auto p-4 mt-5 lg:mt-15 justify-center">
            <section className="grid grid-cols-5 gap-2">
                <FooterLogoText></FooterLogoText>
                <FooterLinks></FooterLinks>

            </section>
        </div>
    );
};

export default Footer;