import { Link } from "react-router-dom";

const Navbar = () => {
  const onSearch = (text) => {
    console.log(text);
  };

  return (
    <div>
      <nav className="bg-[#2A2F44]">
        <ul className="text-white text-lg font-medium grid grid-cols-8 justify-between items-center text-center h-20 mx-5">
          <li className="col-span-2 flex justify-start">
            <Link>Logo</Link>
          </li>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to="/all-colleges">Colleges</Link>
          </li>
          <li>
            <Link>Admission</Link>
          </li>
          <li>
            <Link>My college</Link>
          </li>
          <li className="col-span-2 flex justify-end">
            <span><img className="h-10 w-10 rounded-full" src="https://th.bing.com/th/id/OIP.eXWcaYbEtO2uuexHM8sAwwHaHa?pid=ImgDet&rs=1" alt="" /></span>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-5 max-w-md border rounded-md my-5 mx-auto">
        <input
          type="text"
          className="px-4 py-[6px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A2F44] flex-grow"
          placeholder="Search college"
          onChange={(e) => onSearch(e.target.value)}
        />
        <button className="px-4 py-2 bg-[#2A2F44] text-white rounded-md hover:bg-[#2A2F44] focus:outline-none focus:ring-2 focus:bg-[#1f2438]">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
