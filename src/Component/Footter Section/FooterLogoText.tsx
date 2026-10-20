// import React from 'react';
import logo from '../../assets/logo-text.png'
import { socialMediaLinks } from '../../SocialMediaLinks';

console.log(socialMediaLinks);
const FooterLogoText = () => {
    return (
        <section className='col-span-2 p-5'>
            <div>
                <img src={logo} alt="" />
                <p
                    className='text-base text-center lg:text-left text-gray-500'
                >
                    Curated tools, technologies, and resources for developers building
                    modern software.
                </p>
            </div>
            <div className='flex gap-3'>
                {socialMediaLinks.map((socialMedia,idx) => (
                    <li key={idx}
                    className='list-none text-base text-gray-600 font-bold'
                    >
                        <a href={`#${socialMedia.link}`}>{socialMedia.name}</a>
                    </li>
                ))}
            </div>
        </section>
    );
};

export default FooterLogoText;