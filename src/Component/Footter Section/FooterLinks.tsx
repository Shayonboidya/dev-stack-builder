import { Products } from "./ProductLinks";

const FooterLinks = () => {
    return (
        <div className="p-2 lg:5">
            <div>
                <h2 className="text-1xl font-bold ">Product</h2>
                {
                    Products.map((product: string) => (
                        <li 
                        className="list-none text-base text-gray-500 "
                        key={product}><a href="#">{product}</a></li>
                    ))
                }
            </div>
        </div>
    );
};

export default FooterLinks;