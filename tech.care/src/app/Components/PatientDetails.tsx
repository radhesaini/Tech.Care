import React from "react";
import "./PatientDetails.css";
import { PatientsList } from "./PatientsList";
import Report from "@/Pages/Report";
type Props = {};

function PatientDetails({}: Props) {
  const lab_results = [
    "Complete Blood Count (CBC)",
    "Echocardiogram",
    "Liver Function Tests",
    "Mammography",
    "Urinalysis",
    "Ultrasound",
    "Prostate-Specific Antigen (PSA)",
    "Hemoglobin A1C",
    "Lipid Panel",
    "Radiology Report",
  ];
  return (
    <div className="patient-details-container">
      <div className="patient-details-container-right">
        <div className="avatar-name">
          <img
            className="profile-Image"
            src="/LayerAvatar.png"
            alt="Profile Picture"
          />
          <h3 className="name">Jessica Taylor</h3>
        </div>
        <div className="patient-details">
          <div className="row">
            <img src="/BirthIcon.svg" alt="BirthIcon-icon" className="icon" />
            <div className="rows">
              <label htmlFor="">Date of Birth</label>
              <h5 className="font-bold"> August 23, 1996</h5>
            </div>
          </div>
          <div className="row">
            <img src="/FemaleIcon.svg" alt="FemaleIcon-icon" className="icon" />
            <div className="rows">
              <label htmlFor="">Gender</label>
              <h5 className="font-bold">Female</h5>
            </div>
          </div>
          <div className="row">
            <img src="/PhoneIcon.svg" alt="PhoneIcon-icon" className="icon" />
            <div className="rows">
              <label htmlFor="">Contact Info.</label>
              <h5 className="font-bold">(415) 555-1234</h5>
            </div>
          </div>
          <div className="row">
            <img src="/PhoneIcon.svg" alt="PhoneIcon-icon" className="icon" />
            <div className="rows">
              <label htmlFor="">Emergency Contacts</label>
              <h5 className="font-bold">(415) 555-5678</h5>
            </div>
          </div>
          <div className="row">
            <img
              src="/InsuranceIcon.svg"
              alt="InsuranceIcon-icon"
              className="icon"
            />
            <div className="rows">
              <label htmlFor="">Insurance Provider</label>
              <h5 className="font-bold">Sunrise Health Assurance</h5>
            </div>
          </div>
          <button
            type="button"
            className="text-white bg-[#01F0D0] hover:bg-[#01F0D0]-800 focus:ring-4 focus:ring-[#01F0D0]-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#01F0D0]-600 dark:hover:bg-[#01F0D0]-700 focus:outline-none dark:focus:ring-[#01F0D0]-800 bottom-Btn"
          >
            Show All Information
          </button>
        </div>
      </div>
      <div className="lab-reports">
        <h1 className="heading">Lab Results</h1>
        <div className="reports">
          <div className="flow-root">
            <ul role="list">
              {lab_results.map((item, index) => (
                <Report key={index} name={item} src="#" />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;
