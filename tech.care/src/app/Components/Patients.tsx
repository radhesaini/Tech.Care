"use client";
import React, { useEffect, useState } from "react";
import "./Patients.css";
import getPatients from "../api/patient-list";
import { setItem } from "../utills/patientState";
import { useAppDispatch } from "../../store/store";

type Props = {};

export default function Patients({}: Props) {
  const [patients, setPatients] = useState([]);
  const [selected, setSelected] = useState(0);
  const dispatch = useAppDispatch();

  const onSelect = (index: number, item: any) => {
    setSelected(index);
    dispatch(setItem(item));
    console.log("=>", item);
  };

  useEffect(() => {
    getPatients()
      .then((res: any) => {
        setPatients(res);
        console.log(res);
        onSelect(0, res[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="patient-List">
      <div className="top-Container">
        <h1 className="heading">Patients</h1>
        <div className="heading-right">
          <img src="/search.svg" alt="search" />
        </div>
      </div>
      {patients.map((item: any, index: number) => (
        <div
          key={index}
          className={`patient${index === selected ? " bg-[#d8fcf7]" : ""}`}
          onClick={() => onSelect(index, item)}
        >
          <img
            className="w-10 h-10 rounded-full"
            src={item.profile_picture}
            alt="Rounded avatar"
          />
          <div className="patient-Intro">
            <h5 className="patient-name">{item.name}</h5>
            <p className="gender-Age">
              {item.gender}, <span className="age">{item.age}</span>
            </p>
          </div>
          <div className="text-lg font-medium text-gray-900 dark:text-white right-Ellipse">
            ...
          </div>
        </div>
      ))}
    </div>
  );
}
