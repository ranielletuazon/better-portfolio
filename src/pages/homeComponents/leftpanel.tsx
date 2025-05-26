import { Mail, Smartphone, Cake } from 'lucide-react';

const profile = {
    name: 'Ranielle Adriane Tuazon',
    title: 'Web Developer',
    email: 'adrianetuazon18@gmail.com',
    contact: '+63 908 677 4925',
    birthday: 'September 19, 2002',
};

const infoCards = [
    {
        icon: <Mail size={24} />,
        label: 'Email',
        value: profile.email,
    },
    {
        icon: <Smartphone size={24} />,
        label: 'Contact',
        value: profile.contact,
    },
    {
        icon: <Cake size={24} />,
        label: 'Birthday',
        value: profile.birthday,
    },
];

function LeftPanel() {
    return (
        <div className="w-full max-w-sm mx-auto md:max-w-xs lg:max-w-sm flex flex-col gap-8 p-6 bg-neutral-900 rounded-2xl">
            {/* Upper container */}
            <div className="flex flex-col items-center gap-4 border-b border-neutral-700 pb-8">
                {/* Picture Display */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-neutral-800 flex items-center justify-center shadow-md" />
                {/* Name Display */}
                <div className="font-bold text-2xl text-white text-center">{profile.name}</div>
                {/* Title Display */}
                <div className="px-4 py-1 bg-neutral-800 rounded-full text-sm text-neutral-400 font-medium text-center">
                    {profile.title}
                </div>
            </div>

            {/* Lower Container */}
            <div className="flex flex-col gap-4">
                {infoCards.map(({ icon, label, value }) => (
                    <div
                        key={label}
                        className="flex items-center gap-4 bg-neutral-800 rounded-xl px-4 py-3 hover:bg-neutral-700 transition-colors"
                    >
                        <div className="flex items-center justify-center w-10 h-10 bg-amber-400/10 rounded-full text-amber-400">
                            {icon}
                        </div>
                        <div className="flex flex-col">
                            <div className="text-xs text-neutral-400">{label}</div>
                            <div className="text-sm text-white break-all">{value}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LeftPanel;
