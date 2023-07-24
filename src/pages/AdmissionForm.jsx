import { useState } from "react";
import useAxios from "../customHooks/useAxios";

const AdmissionForm = () => {
  const [instance] = useAxios();
  const [candidate, setCandidate] = useState({
    name: "",
    subject: "",
    email: "",
    phoneNumber: "",
    address: "",
    dateOfBirth: "",
    image: "", // Store the image file object
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    // Handle regular input fields
    if (type !== "file") {
      setCandidate((prevCandidate) => ({
        ...prevCandidate,
        [name]: value,
      }));
    } else {
      // Handle image input field
      const imageFile = event.target.files[0];
      setCandidate((prevCandidate) => ({
        ...prevCandidate,
        image: imageFile,
      }));
    }
  };
const user = 'mustaqim@gmail.com'
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can handle the form submission and data, including the image file (candidate.image)
    console.log("Candidate Data:", candidate);
    instance.post(`/candidate-admission/${user}`, candidate)
    .then(res=>{
        console.log(res.data)
    })
    .catch(e=>console.log(e))
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl text-center font-semibold mb-4">
        Candidate Information
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Candidate Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={candidate.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            name="subject"
            value={candidate.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Candidate Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={candidate.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Candidate Phone Number
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            value={candidate.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            name="address"
            value={candidate.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dateOfBirth"
          >
            Date of Birth
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dateOfBirth"
            type="date"
            name="dateOfBirth"
            value={candidate.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Photo
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div> */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="url"
            name="image"
            value={candidate.image}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#2A2F44] hover:bg-[#1c2031] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
