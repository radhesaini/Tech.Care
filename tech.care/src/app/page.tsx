"use client";
import Image from "next/image";
import TopNav from "./Components/TopNav";
import Patients from "./Components/Patients";
import PatientAnalytics from "./Components/PatientAnalytics";
import PatientDetails from "./Components/PatientDetails";
import ReduxProvider from "@/store/redux-provider";

export default function Home() {
  return (
    <ReduxProvider>
      <div className="Container">
        <main>
          <nav className="nav-Container">
            <TopNav />
          </nav>

          <div className="md:flex details-Container">
            <div className="bg-white p-2 flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 patients-Container">
              <Patients />
              {/* <PatientsList /> */}
            </div>
            <div className="bg-transparent text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full patientDiagnosis-Container">
              <PatientAnalytics />
            </div>
            <div className="bg-transparent flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-4 mb-4 md:mb-0 p-2 patientsDetails-Container">
              <PatientDetails />
            </div>
          </div>
        </main>
      </div>
    </ReduxProvider>
  );
}
