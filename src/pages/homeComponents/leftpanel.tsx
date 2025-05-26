import { Mail, Smartphone, Cake} from 'lucide-react';

function LeftPanel() {
    return(
        <>
            {/* Container */}
            <div className="container md:flex md:flex-col justify-center items-center gap-4">
                {/* Upper container */}
                <div className="text-white md:gap-4 md:flex items-center justify-center md:flex-col w-full border-b border-neutral-700 pb-4">
                    {/* Picture Display */}
                    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 rounded-xl bg-neutral-800 flex-shrink-0"></div>

                    {/* Name Display */}
                    <div className="font-bold text-xl">Ranielle Adriane Tuazon</div>

                    {/* Title Display */}
                    <div className="px-4 py-2 bg-neutral-800 rounded-xl text-based text-neutral-400">Web Developer</div>
                </div>

                {/* Lower Container */}
                <div className="text-white w-full md:gap-4 md:flex items-center justify-center md:flex-col">
                    {/* Card 1 */}
                    <div className="h-16 w-full flex flex-row justify-start items-center gap-8 px-4">

                        {/* Icon Display */}
                        <div className="px-4 py-2 bg-neutral-800 rounded-md text-amber-400"><Mail size={30} /></div>

                        {/* Card Display */}
                        <div className="flex flex-col">
                            <div className="text-based text-neutral-400">Email</div>
                            <div className="text-based">adrianetuazon18@gmail.com</div>
                        </div>

                    </div>

                    {/* Card 2 */}
                    <div className="h-16 w-full flex flex-row justify-start items-center gap-8 px-4">

                        {/* Icon Display */}
                        <div className="px-4 py-2 bg-neutral-800 rounded-md text-amber-400"><Smartphone size={30} /></div>

                        {/* Card Display */}
                        <div className="flex flex-col">
                            <div className="text-based text-neutral-400">Contact</div>
                            <div className="text-based">+63 908 677 4925</div>
                        </div>

                    </div>

                    {/* Card 3 */}
                    <div className="h-16 w-full flex flex-row justify-start items-center gap-8 px-4">

                        {/* Icon Display */}
                        <div className="px-4 py-2 bg-neutral-800 rounded-md text-amber-400"><Cake size={30}/></div>

                        {/* Card Display */}
                        <div className="flex flex-col">
                            <div className="text-based text-neutral-400">Birthday</div>
                            <div className="text-based">September 19, 2002</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftPanel;