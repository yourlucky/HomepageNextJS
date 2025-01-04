import React from "react";


const VisitTracker = () => {

    // TODO: create a global state so that this component can be shared in multiple pages
    const [counter, setCounter] = React.useState(0);

    const handleClick = () => {
        setCounter((prevCounter) => {
            return prevCounter + 1;
        });
    };

    return (
        <button
            className='border w-40 h-10 bg-[#111111] text-[#ffffff] px-2 py-1 flex items-center justify-center'
            onClick={handleClick}
        >
            Clicked {counter} times
        </button>
    );
};

export default VisitTracker;
