// import React from 'react';


import FooterLinksProduct from "./FooterLinksProduct";
import FooterLogoText from "./FooterLogoText";

const Footer = () => {
    return (
        <div className="container mx-auto p-4 mt-5 lg:mt-15 justify-center">
            <section className="grid  lg:grid-cols-5 gap-2">
                <FooterLogoText></FooterLogoText>
                <FooterLinksProduct></FooterLinksProduct>

            </section>
        </div>
    );
};

export default Footer;