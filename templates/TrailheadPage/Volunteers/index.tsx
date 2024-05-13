import Image from "@/components/Image";
import Link from "next/link";

type TrailheadProps = {};

const Trailhead = ({}: TrailheadProps) => (
    <div className="content text-justify text-black container-lg mb-16 w-full">
            <div className="bg-secondary-500">           
            <h4 className="text-h4">Trailhead Volunteers and Troop Leaders</h4>
                <p>Trailhead Volunteers will teach the necessary skills and provide a spreadsheet of the skills related to the requirements. However, troop leadership is responsible for signing off the accomplishments in each Scout's handbook.</p>
                <p>Scoutmasters, please be available for Scoutmaster conferences for your Scouts, either during the camp or as soon as possible afterward.</p>
            </div>
        </div>
);

export default Trailhead;