import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../customHooks/useAxios";

const CollegeDetails = () => {
  const { id } = useParams();
  const [instance] = useAxios();
  const [college, setCollege] = useState([]);

  useEffect(() => {
    instance
      .get(`/college/${id}`)
      .then((res) => {
        setCollege(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [instance, id]);

  const {
    _id,
    college_name,
    college_image,
    admission_dates,
    admission_process,
    research_history,
    research_count,
    research_works,
    events,
    sports,
  } = college;
 
  return (
    <>
      {college ? (
        <div className="border shadow-lg shadow-slate-100 rounded-md mb-10  relative">
          <div className="h-[400px]">
            <img
              className="object-cover w-full h-full rounded-md"
              src={college_image}
              alt=""
            />
          </div>
          <div className="px-4 space-y-5 mt-5">
            <h1 className="text-3xl font-bold text-center">{college_name}</h1>
            <div></div>
            <p className="flex gap-5 items-center font-bold">
              <span className="text-lg  text-black">Admission</span>{" "}
              <span className="text-[#39bb12] ">{admission_dates}</span>
            </p>
            <div>
              <h3 className="text-lg font-bold">Admission Process</h3>
              <p>{admission_process}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Research History</h3>
              <p>{research_history}</p>
            </div>
            <p><span className="text-lg font-bold">Number of the research :</span> {research_count}</p>
            <div>
            
              <h3 className="text-2xl font-bold mb-3">Popular Research Works</h3>
              <div className="space-y-3">
                {research_works?.map((project, index) => {
                  return (
                    <div key={index}>
                      <h4 className="font-bold">Project Name : {project.project_name}</h4>
                      <p>Description : {project.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center mb-4">Events</h3>
              <div className="grid grid-cols-3 justify-between gap-5">
                {events?.map((event, index) => {
                  return (
                    <div key={index}>
                      <h4><span className="font-bold">Name :</span> {event.event_name}</h4>
                      <p><span className="font-bold">Date : </span>{event.date}</p>
                      <p><span className="font-bold">Description : </span>{event.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-center mb-4">Sports</h3>
              <div className="grid grid-cols-3 justify-between">
                {sports?.map((sport, index) => {
                  return (
                    <div key={index}>
                      <p className="font-bold"> {sport.category}</p>
                      <ul>
                        {sport.sports_list.map((sportName, index) => {
                          return <li key={index}>{sportName}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-3xl my-20">Loading...</h1>
      )}
    </>
  );
};

export default CollegeDetails;
