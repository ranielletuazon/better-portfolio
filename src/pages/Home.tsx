import LeftPanel from "./homeComponents/leftpanel";
import RightPanel from "./homeComponents/rightpanel";

function Home() {
    return (
        <>
            {/* Main Container */}
            <div className="border w-full h-screen flex p-5 md:gap-3 md:flex bg-black">

                {/* Left side */}
                <div className="p-4 md:m-2 w-[25%] rounded-sm md:flex bg-neutral-900">
                    <LeftPanel/>
                </div>

                {/* Right side */}
                <div className="p-4 w-[75%] rounded-sm md:flex bg-neutral-900 overflow-auto">
                    <RightPanel/>
                </div>

            </div>
        </>
    );
}

export default Home;
