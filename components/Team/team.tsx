import Image from "@/components/Image";


type TeamMember = {
    id: string;
    name: string;
    title: string;
    email: string;
    notables: string[];
    awards: string[];
    children: string[];
    description: string;
    image: string;
};

type MemberProps = {
    member: TeamMember;
};


// 'hover-hover': {'raw': '(hover: hover)'},
// "3xl": { max: "1719px" },
// "2xl": { max: "1419px" },
// xl: { max: "1179px" },
// lg: { max: "1023px" },
// md: { max: "767px" },
// sm: { max: "480px" },


const Member = ({ member }: MemberProps) => {
    return (
        <div className="container-lg">
              <div className="flex flex-row sm:flex-col justify-center items-start">
                <figure className="flex flex-col items-center space-y-2  w-[500px] sm:max-w-[250px] md:min-w-[250px] md:max-w-[500px]" >
                    <figcaption className="text-lg font-semibold">{member.title}</figcaption>
                  <img src={member.image} alt={`Image of ${member.name}`} className="w-32 h-32 rounded-full object-cover" />
                  <h3 className="text-sm text-gray-600">{member.name}</h3>
                  <div>
                    <h4 className="text-sm text-gray-600">{member.email}</h4>
                  </div>
                </figure>
                <div className="flex-1 space-y-2 w-[700px] sm:hidden md:hidden block">
                {
                member.notables && member.notables.length > 0 && 
                (<div className="sm:hidden block">
                <strong>Notables:</strong>
                <ul className="list-disc list-inside">
                    {member.notables.map((note, index) => (
                    <li key={index}>{note}</li>
                    ))}
                </ul>
                </div>)
                }
                { member.awards && member.awards.length > 0 && 
                 ( <div className="sm:hidden block">
                    <strong>Awards:</strong>
                    <ul className="list-disc list-inside">
                      {member.awards.map((award, index) => (
                        <li key={index}>{award}</li>
                      ))}
                    </ul>
                  </div>)
                }
                {
                    member.children && member.children.length > 0 &&
                    (<div className="sm:hidden block">
                    <strong>Children:</strong>
                    <ul className="list-disc list-inside">
                    {member.children.map((child, index) => (
                        <li key={index}>{child}</li>
                    ))}
                    </ul>
                    </div>)
                }
                { member.description && <p className="sm:hidden block"><strong>Description:</strong> {member.description}</p> } 
                </div>
              </div>
            </div>
            );
          };

const Team = ({ team }: { team: TeamMember[] }) => (
    <div className="flex flex-col space-y-8 w-full">
    {team.map(member => (
        <Member key={member.id} member={member} />
      ))}
    </div>
  );
  
export default Team;


// <img src={member.image} alt={`Image of ${member.name}`} />
