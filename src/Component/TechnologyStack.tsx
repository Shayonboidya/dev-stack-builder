// import React from 'react';

import { useState } from "react";
import type { ItechnologyStack } from "../Type";

const TechnologyStack = ({ stack,setStack }: ItechnologyStack) => {

    const [isClickRemovedAll, setIsClickRemovedAll] = useState(false);
    // const handelIsClickRemovedAll = () =>{
    //     setIsClickRemovedAll(true);
    //     // isClickRemovedAll && stack.splice(0,stack.length);
    // }
    return (
        <div className="border border-gray-200 rounded-2xl p-4">

            <h2 className="font-bold text-2xl my-2">Your Stack</h2>
            {
                (stack.length === 0) ? (
                    <>
                        <p className="text-gray-500 text-base my-2">No technologies selected yet</p>
                        <div className="border border-dashed border-gray-400 rounded-2xl px-4 py-10 text-center">
                            <p className="text-gray-500 text-base">your stack is empty</p>
                        </div>
                    </>

                ) : (
                    <>
                        <p className="text-gray-500 text-base my-2">{stack.length} technologies selected</p>
                        
                        <button 
                        onClick={handelIsClickRemovedAll}
                        className="text-2xl text-red-600 btn px-5 py-2 text-center border border-red-500">Removed All</button>

                    </>
                )
            }
        </div>
    );
};

export default TechnologyStack;