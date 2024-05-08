import Image from "@/components/Image";
import Explore from "@/components/Explore";

type tierType = {
    id: string;
    price: number;
    title: string;
};

const PricingTier = ({tier}: {tier: tierType}) => (
    <figure className="flex flex-col items-center justify-center p-4 bg-tertiary-500 rounded-lg shadow-lg transition-all hover:shadow-xl
    w-full xl:min-w-[400px] h-[250px] text-white">
            <h1 className="text-8xl font-extrabold text-sans leading-none mb-2 text-white">${tier.price}</h1>
        <figcaption className="text-xl font-semibold text-white">{tier.title}</figcaption>
    </figure>
);
export default PricingTier;
