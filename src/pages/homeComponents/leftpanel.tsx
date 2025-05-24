function LeftPanel() {
    return(
        <>
            {/* Container */}
            <div className="container md:flex text-white md:gap-4 w-full h-full items-center justify-center md:flex-col">

                {/* Picture Display */}
                <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 rounded-xl bg-neutral-800 flex-shrink-0"></div>

                {/* Name Display */}
                <div className="font-bold text-xl">Ranielle Adriane Tuazon</div>

                {/* Title Display */}
                <div className="px-4 py-2 bg-neutral-800 rounded-xl">Web Developer</div>

            </div>
        </>
    );
}

export default LeftPanel;