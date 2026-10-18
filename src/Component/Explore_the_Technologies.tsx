import Technologies from "./Technologies";
import TechnologyStack from "./TechnologyStack";

const Explore_the_Technologies = () => {
    return (
        <section>
            <div className="container mx-auto">

                <div className="lg:px-5 py-3">
                    <h2 className="font-bold mb-2 text-3xl lg:text-4xl text-black">Explore the <span className="bg-linear-to-r from-red-700 to-purple-600 bg-clip-text text-transparent ">Technologies</span></h2>
                    <p className="font-medium text-gray-500 lg:text-2xl text-base">Pick one technology per category to build your ideal stack.</p>
                </div>

                <div className="grid grid-cols-4 mt-5 lg:mt-10">
                    <div className="col-span-3">
                        <Technologies></Technologies>
                    </div>
                    <div>
                        <TechnologyStack></TechnologyStack>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Explore_the_Technologies;