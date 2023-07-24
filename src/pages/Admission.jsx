import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAxios from "../customHooks/useAxios";
import StarRatings from "react-star-ratings";

const Admission = () => {
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
    <div>
      {colleges.map((college, index) => {
        if (index % 2 == 0) {
          return <Card key={index} college={college} />;
        }
      })}
    </div>
  );
};

const Card = ({ college }) => {
  const {
    _id,
    college_image,
    college_name,
    college_rating,
    admission_dates,
    research_count,
  } = college;

  return (
    <div className="flex gap-5 border shadow-lg shadow-slate-100 rounded-md mb-10  relative">
      <div className="h-[200px] w-[350px]">
        <img
          className="object-cover w-full h-full rounded-md"
          src={college_image}
          alt=""
        />
      </div>
      <div className="px-4 space-y-4 my-5">
        <h1 className="text-2xl font-bold hover:text-blue-500">
          <Link to={`/admission/${_id}`}>{college_name}</Link>
        </h1>

        <div className="flex items-center gap-4">
          <StarRatings
            rating={college_rating}
            starRatedColor="gold"
            numberOfStars={5}
            name="rating"
            starDimension="25px"
            starSpacing="1px"
          />
          <span>{college_rating}</span>
        </div>
        <p className="flex gap-5 items-center font-bold">
          <span className="text-lg  text-black">Admission Date : </span>{" "}
          <span className="text-[#39bb12] ">{admission_dates}</span>
        </p>
        <p>Number of the research : {research_count}</p>
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
export default Admission;
