import Image from "@/components/Image";
import {requirements} from '@/constants/badgerequirements';

type MainProps = {};

interface Requirement {
    badge: string;
    age: string;
    grade: string;
    rank: string;
    cost: string;
    prerequisites: string;
  }
  
  const RequirementsTable: React.FC = () => {
    return (
      <div>
        <table className="table-auto w-full border-collapse border border-n-300d">
          <thead>
            <tr>
              <th title="Field #1">Merit Badge</th>
              <th title="Field #2">Min. Age:</th>
              <th title="Field #3">Min. Grade</th>
              <th title="Field #4">Min. Rank:</th>
              <th title="Field #6">Prerequisites</th>
            </tr>
          </thead>
          <tbody>
            {requirements.map((r: Requirement, index: number) => (
              <tr key={index}>
                <td className="border border-n-300 px-4 py-2 text-left">{r.badge}</td>
                <td className="border border-n-300 px-4 py-2 text-left">{r.age}</td>
                <td className="border border-n-300 px-4 py-2 text-left">{r.grade}</td>
                <td className="border border-n-300 px-4 py-2 text-left">{r.rank}</td>
                <td className="border border-n-300 px-4 py-2 text-left">{r.prerequisites}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

const Main = ({}: MainProps) => (
    <div className="py-20 lg:px-10 xlg:px-10 2xlg:px-20 text-black overflow-x-scroll xs:overflow-x-scroll md:overflow-x-scroll">
        <h2 className="text-h4 font-bold my-4 text-center">Merit Badge Requirements</h2>
        <RequirementsTable />
    </div>
);

export default Main;
