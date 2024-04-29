import Image from "@/components/Image";
import Team from "@/components/Team/team";
import { team } from "@/mocks/team";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="py-20">
        <div className="container-lg">
            <div className="mb-10 text-center text-h2 md:text-left">
                Advance Camp
            </div>
            <div className="content">
                <p>The mission of the AdvanceCamp is to support educational opportunities for youth and to provide an effective program that: develops personal/mental/emotional fitness, gives opportunities to develop self-reliance, develops a keen respect for the basic rights of others and prepares scouts for participating and giving leadership within their community and world.</p>

                <p>AdvanceCamp began in 1998 when a scout talked to Steve Hoagland because he had a number of partials of unusual merit badges from summer camps he had attended.  He wanted to finish them but could not find a merit badge counselor for them.  The first camp was held at Contra Costa Fairgrounds in Antioch, then Contra Loma Park in Antioch, then Ambrose Park in Bay Point before returning to the Contra Costa Fairgrounds. In our first year there were about 300 scouts and only about 15 merit badges.  AdvanceCamp moved to the Solano County Fairgrounds in 2019.</p>

                <p>Since our inception, AdvanceCamp has served over 30,000 scouts. We have over 200 counselors, offering 60 merit badges trailhead advancement.  We also offer adult leader trainings.</p>

                <p>AdvanceCamp is run by registered volunteer Scouters who serve without compensation.  100% of all funds collected goes towards the program.</p> 
        </div>
    </div>
    <Team team={team} />
</div>
);

export default Main;
