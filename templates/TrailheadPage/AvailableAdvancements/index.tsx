import Image from "@/components/Image";
import Link from "next/link";

type TrailheadProps = {};

const AvailableAdvancements = ({}: TrailheadProps) => (
    <div className="content text-justify text-black container-lg mb-16 w-full bg-white bg-opacity-75 p-10">
        <h3 className="text-h3 text-center">Available Advancements</h3>
        <p className="text-justify">Make progress on your scouting journey! The following requirements can be met during the Trailhead event:</p>
        <table className="table-auto w-full">
            <tr>
                <th className="px-4 py-2">Rank</th>
                <th className="px-4 py-2">Requirements</th>
            </tr>
            <tr>
                <td className="px-4 py-2">Scout</td>
                <td className="px-4 py-2">1a, 1b, 1c, 1d, 1e, 1f, 4a, 4b, 5 , 6</td>
            </tr>
            <tr>
                <td className="px-4 py-2">Tenderfoot</td>
                <td className="px-4 py-2"> 3a, 3b, 3c, 3d, 4a, 4b, 7a, 8</td>
            </tr>
            <tr>
                <td className="px-4 py-2">Second Class</td>
                <td className="px-4 py-2">2a, 2b, 2c, 2d, 2f, 2g, 3a 2,5 , 3d, 4 6 , 5b 7 , 5c 7 , 6a, 6b, 6c, 6d, 6e, 8b</td>
            </tr>
            <tr>
                <td className="px-4 py-2">First Class</td>
                <td className="px-4 py-2">3a, 3b, 3c, 4a 2,3,5 , 4b, 5a 6 , 6a 7 , 6e 7 , 7a, 7b, 7c, 9a</td>
            </tr>
        </table>
        <br />
        <h3 className="text-h3 text-center">What Scouts Need</h3>
        <ul>
                <li>1 – Scouts (and their leaders) should look over the requirements they need before</li>
                <li>2 – Navigation (Map & Compass and Orienteering) 2 ND Class 3a - Each Scout should bring a compass. If you don’t have a compass, we cannot sign off your card.</li>
                <li>3 – Navigation (Orienteering) 2 nd Class 3a is a pre-requisite for 1 st Class 4a.</li>
                <li>4 – Navigation (GPS) 2 nd Class 3a is a pre-requisite for 1 st Class 4b.</li>
                <li>5 – Navigation (Map & Compass, Orienteering and GPS) are 1 ½ hour sessions.</li>
                <li>6 – Scouts need to bring a notebook, pencil and a camera or a phone that has a camera in it to record notes and images of the specimens per the requirements.</li>
                <li>7 – Swimming (2 nd Class 5b, 5c, 1 st Class 6a, 6e) is offered in the afternoon only (1-4PM). These are not swimming lessons. Scouts should know how to swim. Scouts
                    going to swimming must be at the bus stop by 12:45 PM. An adult leader must
                    accompany their scout(s) going to and from swimming. Scouts cannot just be
                    dropped off at the bus stop. </li>
        </ul>

    <div>
        <h2 className="text-h3 text-center">The most heavily attended stations are:</h2>
        <ul className="text-center text-h5 my-4">
            <li>KNOTS and LASHINGS</li>
            <li>KNIFE, AXE & FIRE</li>
            <li>FIRST AID</li>
        </ul>

        <h3 className="text-h3 text-center">KNOTS and LASHINGS Station</h3>
        <p>This station will cover the Scout, Tenderfoot, 2nd and 1st Class knot and lashing requirements. Scouts will receive pieces of rope for whipping and fusing. They will keep these as proof of completing the requirements.</p>

        <h3 className="text-h3 text-center">KNIFE, AXE and FIRE Station</h3>
        <p>This station will cover the Scout, Tenderfoot, and 2nd Class tools requirements.</p>

        <h3 className="text-h3 text-center">FIRST AID Station</h3>
        <p>This station will cover the Tenderfoot, 2nd, and 1st Class first aid requirements. There will be Heimlich Maneuver and CPR Dummies for practicing those skills along with bandages and splints.</p>

        <h3 className="text-h3 text-center">FLAG ETIQUETTE Station</h3>
        <p>This station will cover the Tenderfoot and 2nd Class requirements for the U.S. Flag and the 1st Class requirement for meeting with a community leader.</p>

        <h3 className="text-h3 text-center">NAVIGATION Station</h3>
        <p>This station will cover Map and Compass, Finding your way without a compass, Orienteering, and GPS requirements. Scouts must bring their own compass.</p>

        <h3 className="text-h3 text-center">RULES and SLOGANS Station</h3>
        <p>This station will cover the Scout requirements for the Scout Oath, Law, and more.</p>

        <h3 className="text-h3 text-center">ENVIRONMENT Station</h3>
        <p>This station will cover the Tenderfoot requirement for identifying poisonous plants, 2nd Class requirement for identifying animals, birds, mammals, and more, and 1st Class requirement for identifying native plants. Scouts need to have a notebook, pencil, and camera or a device to record information about the specimens.</p>
    </div>
        <br />
        <div className="w-full">
            <p>
            Trailhead Volunteers will teach the skills and provide a scorecard of the taught skills
            related to requirements. Troop leadership is responsible for verifying and signing
            off the accomplishment in the Scout's handbook.
            Scoutmasters are requested to be available for Scoutmaster conferences for their
            Scouts, either during the camp or as soon as possible after camp.
            </p>
        </div>





    </div>
);

export default AvailableAdvancements;