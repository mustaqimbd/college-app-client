import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAxios from "../customHooks/useAxios";

const CollegeCards = () => {
  const [colleges, setColleges] = useState([]);
  const [instance] = useAxios();
  useEffect(() => {
    instance
      .get("/colleges")
      .then((res) => {
        setColleges(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [instance]);
  return (
    <div className="grid grid-cols-3 gap-5">
      {colleges.slice(0, 3).map((college, index) => {
        return <Card key={index} college={college} />;
      })}
    </div>
  );
};

const Card = ({ college }) => {
  const {
    _id,
    college_name,
    admission_dates,
    college_image,
    events,
    research_history,
    sports,
  } = college;

  return (
    <div className="border shadow-lg shadow-slate-100 rounded-md mb-10  relative">
      <div className="h-[211px]">
        <img
          className="object-cover w-full h-full rounded-md"
          src={college_image}
          alt=""
        />
      </div>
      <div className="px-4 space-y-5">
        <h1 className="text-2xl font-bold text-center">{college_name}</h1>
        <div></div>
        <p className="flex gap-5 items-center font-bold">
          <span className="text-lg  text-black">Admission</span>{" "}
          <span className="text-[#39bb12] ">{admission_dates}</span>
        </p>
        <div>
          <h3 className="font-bold">Research History</h3>
          <p className="text-justify">{research_history.slice(0, 150)}.....</p>
        </div>
        <div>
          <h3 className="font-bold">Events</h3>
          <ul>
            {events?.map((event, index) => {
              return <li key={index}>{event.event_name}</li>;
            })}
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Sports</h3>
          {sports?.map((sport, index) => {
            return (
              <ul key={index}>
                {sport.sports_list.slice(0, 1).map((sportName, index) => {
                  return <li key={index}>{sportName}</li>;
                })}
              </ul>
            );
          })}
        </div>
        <Link
          to={`/college/${_id}`}
          className="bg-[#2A2F44] text-white font-bold flex items-center gap-1 py-2 px-4 rounded-md absolute bottom-4 right-4"
        >
          <span>View Details </span>
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};
export default CollegeCards;
