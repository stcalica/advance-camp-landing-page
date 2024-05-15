import Image from "@/components/Image";
import Team from "@/components/Team/team";
import { team } from "@/mocks/team";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="py-20">
        <div className="text-center text-h1 mb-16">Important Forms</div>
        <a href="/forms/19-673.pdf" target="_" className="text-center text-h4 mb-16"><h3>Activity Permissions Form</h3></a>
    </div>
);

export default Main;
