import Image from "@/components/Image";
import Link from "next/link";

type StationsProps = {};

const Stations = ({}: StationsProps) => (
    <div className="content text-justify text-black container-lg mb-16 w-full">
        <div className="w-full flex flex-col flex-row flex-wrap">  
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 items-center justify-items-center">
            <figure className="stations">
            <Image
            className="icon-white"
            src="images/icons/lashings.png"
            width={150}
            height={150}
            alt="advance camp photo"
            />
            <figcaption className="text-xl font-semibold text-white">Knots and Lashings</figcaption>
        </figure>
        <figure className="stations">
            <Image
            className="icon-white"
            src="images/icons/first-aid.png"
            width={150}
            height={150}
            alt="advance camp photo"
            />
            <figcaption className="text-xl font-semibold text-white">First Aid</figcaption>
        </figure>
        <figure className="stations">
            <Image
            className="icon-white"
            src="images/icons/flags.png"
            width={150}
            height={150}
            alt="advance camp photo"
            />
            <figcaption className="text-xl font-semibold text-white">Flag Folding/Raising</figcaption>
        </figure>
        <figure className="stations mb-10">
            <Image
            className="icon-white"
            src="images/icons/knives.png"
            width={150}
            height={150}
            alt="advance camp photo"
            />
            <figcaption className="text-xl font-semibold text-white">Knives and Axes</figcaption>
        </figure>  
    </div>
    </div>
    </div>
);

export default Stations;
