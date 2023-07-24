import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import CollegeDetails from "../pages/CollegeDetails";
import AllColleges from "../pages/AllColleges";
import Admission from "../pages/Admission";
import AdmissionForm from "../pages/AdmissionForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "all-colleges",
        element: <AllColleges />,
      },
      {
        path: "college/:id",
        element: <CollegeDetails />,
      },
      {
        path: "admission",
        element: <Admission />,
      },
      {
        path: "admission/:id",
        element: <AdmissionForm />,
      },
    ],
  },
]);
export default router;
