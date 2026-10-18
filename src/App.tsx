import { Suspense, useState } from "react";
import Banner from "./Component/Banner"
import Explore_the_Technologies from "./Component/Explore_the_Technologies"
import Nav from "./Component/Nav"


const tecnologiesFetch = async () => {
    const res = await fetch('/data.json');
    const data = await res.json();
    return data;
}
function App() {

    const [technologiesPromice] = useState(() => tecnologiesFetch());
    // const technologiesPromice = TecnologiesFetch();
    console.log(technologiesPromice);
    return (
        <>
            <Nav></Nav>
            <Banner></Banner>
            <Suspense fallback={<p>loading...</p>}>
                <Explore_the_Technologies technologiesPromice={technologiesPromice} ></Explore_the_Technologies>
            </Suspense>
        </>
    )
}

export default App
