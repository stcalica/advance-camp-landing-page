import Image from "@/components/Image";
import Team from "@/components/Team/team";
import { team } from "@/mocks/team";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="py-20">
        <div className="text-center text-h1 mb-16">Important Forms</div>
        <a href="/forms/19-673.pdf" target="_" className="text-center text-h4 mb-16"><h3>Aviation Permissions Form</h3></a>
        <a href="/forms/WeldingPermissionSlip2022.docx" target="_" className="text-center text-h4 mb-16"><h3>Welding Permissions Form</h3></a>
        <a href="/forms/Fly Fishing Permission Slip 2024.docx" target="_" className="text-center text-h4 mb-16"><h3>Fly Fishing Permissions Form</h3></a>
        <a href="/forms/Art Permission Slip 2024.docx" target="_" className="text-center text-h4 mb-16"><h3>Art Permissions Form</h3></a>
        <a href="/forms/BSA Guide to Advancement.pdf" target="_" className="text-center text-h4 mb-16"><h3>BSA Guide to Advancement</h3></a>
        <a href="/forms/Troop Scout Worksheet 2024.docx" target="_" className="text-center text-h4 mb-16"><h3>Scout Worksheet</h3></a>
        <a href="/forms/Activity Verification Form 2023.docx" target="_" className="text-center text-h4 mb-16"><h3>Activity Verification Form</h3></a>
    </div>
);

export default Main;
