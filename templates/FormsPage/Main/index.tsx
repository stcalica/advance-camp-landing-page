import Image from "@/components/Image";
import Team from "@/components/Team/team";
import { team } from "@/mocks/team";

type MainProps = {};

const Main = ({ }: MainProps) => (
    <div className="py-20">

        <div className="text-center text-h1 mb-16">Important Information</div>
        <a href="/forms/Pre-Reqs PDF.pdf" target="_" className="text-center text-h4 mb-16"><h3>Merit Badge Prerequisites</h3></a>
        <a href="/forms/2024 Event Schedule.docx" target="_" className="text-center text-h4 mb-16"><h3>2024 Event Schedule</h3></a>
        <a href="/forms/AMvPM.pdf" target="_" className="text-center text-h4 mb-16"><h3>AMvPM</h3></a>
        <a href="/forms/AdvanceCamp 2024 Leaders' Guide 7.23.24.docx" target="_" className="text-center text-h4 mb-16"><h3>AdvanceCamp 2024 Leaders' Guide</h3></a>
        <a href="/forms/BSA Guide to Advancement.pdf" target="_" className="text-center text-h4 mb-16"><h3>BSA Guide to Advancement</h3></a>
        <br />
        <div className="text-center text-h1 mb-16">Worksheets</div>
        <a href="/forms/Troop Scout Worksheet 2024.docx" target="_" className="text-center text-h4 mb-16"><h3>Scout Worksheet</h3></a>
        <a href="/forms/Activity Verification Form 2023.docx" target="_" className="text-center text-h4 mb-16"><h3>Activity Verification Form</h3></a>
        <br />
        <div className="text-center text-h1 mb-16">Permission Forms</div>
        <a href="/forms/19-673.pdf" target="_" className="text-center text-h4 mb-16"><h3>Aviation Permissions Form</h3></a>
        <a href="/forms/WeldingPermissionSlip2022.docx" target="_" className="text-center text-h4 mb-16"><h3>Welding Permissions Form</h3></a>
        <a href="/forms/Fly Fishing Permission Slip 2024.docx" target="_" className="text-center text-h4 mb-16"><h3>Fly Fishing Permissions Form</h3></a>
        <a href="/forms/Art Permission Slip 2024.docx" target="_" className="text-center text-h4 mb-16"><h3>Art Permissions Form</h3></a>
        <a href="/forms/Swimming or Lifesaving MB Permission Slip 2024.docx" target="_" className="text-center text-h4 mb-16"><h3>Swimming or Lifesaving MB Permission Slip 2024</h3></a>

    </div>
);

export default Main;
