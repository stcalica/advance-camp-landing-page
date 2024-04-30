import Link from "next/link";
import Image from "@/components/Image";
import PricingTier from "@/components/PricingTiers";
import { tiers } from "@/constants/tiers";

type PropTypes = {};

const Pricing = ({}: PropTypes) => (
    <div className="w-full flex flex-col items-center justify-center">  
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 items-center justify-items-center">
    {
            tiers.map(tier => 
                <PricingTier tier={tier} key={tier.id} /> // Assuming 'id' is unique
            )
        }
        </div>
    </div>
);

export default Pricing;
