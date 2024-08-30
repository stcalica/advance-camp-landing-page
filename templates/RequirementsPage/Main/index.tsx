import Image from "@/components/Image";
import {requirements} from '@/constants/badgerequirements';

type MainProps = {};

interface Requirement {
    badge: string | null;
    age: string | null;
    grade: string | null;
    rank: string | null;
    cost: string | null;
    prerequisites: string | null;
  }
  
  const RequirementsTable: React.FC = () => {
    return (
      <div></div>
    );
  };
  

const Main = ({}: MainProps) => (
    <div className="py-20 lg:px-10 xlg:px-10 2xlg:px-20 text-black overflow-x-scroll xs:overflow-x-scroll md:overflow-x-scroll">
        <h2 className="text-h4 font-bold my-4 text-center">Merit Badge Requirements are in PDF </h2>
    </div>
);

export default Main;
