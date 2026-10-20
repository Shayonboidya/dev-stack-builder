
import logo from "../../assets/logo-text.png";
import { socialMediaLinks } from "../../SocialMediaLinks";

const FooterLogoText = () => {
    return (
        <section className="col-span-1 min-w-0 p-4 sm:p-5 md:col-span-1 lg:col-span-2">

            {/* Logo */}
            <div className="flex flex-col items-center gap-4 lg:items-start">
                <img
                    src={logo}
                    alt="Technology logo"
                    className="h-auto w-36 object-contain sm:w-40"
                />

                {/* Description */}
                <p className="max-w-sm text-center text-sm leading-6 text-gray-500 sm:text-base lg:text-left">
                    Curated tools, technologies, and resources for developers building
                    modern software.
                </p>
            </div>

            {/* Social Media Links */}
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
                {socialMediaLinks.map((socialMedia) => (
                    <li
                        key={socialMedia.name}
                    >
                        <a
                            href={socialMedia.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex rounded-lg px-2 py-2 text-sm font-semibold text-gray-600 transition-colors duration-200 hover:bg-purple-50 hover:text-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 sm:text-base"
                        >
                            {socialMedia.name}
                        </a>
                    </li>
                ))}
            </ul>

        </section>
    );
};

export default FooterLogoText;
