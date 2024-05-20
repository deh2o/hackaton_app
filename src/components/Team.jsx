import { teams } from "../constants";

const Team = () => {
  return (
    <div className="px-4 max-w-screen-2xl mx-auto my-12" id="team">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-secondary font-semibold mb-4">
          Meet Our Team
        </h2>
        <p className="text-sm text-secondary mb-8 md:w-3/4 mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 sm-grid-cols-3 grid-cols-2 gap-8 items-center justify-between">
        {teams.map((team) => (
          <div key={team.id} className="mx-auto relative mb-12 cursor-pointer">
            <img src={team.image} alt="" />
            <div className="text-center text-GreyBlue px-4 py-8 bg-primary shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3>{team.name}</h3>
              <p className="text-xs">{team.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
