"use client";
import React, { useState } from "react";
import "./PatientAnalytics.css";
import Card from "@/Pages/Card";
import Table from "@/Pages/Table";

type Props = {};

const PatientAnalytics = (props: Props) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      cardLabel: "Respiratory Rate",
      value: "20bpm",
      result: "Normal",
      src: "/respiratory rate.svg",
    },
    {
      id: 2,
      cardLabel: "Temperature",
      value: "98.6°F",
      result: "Normal",
      src: "/temperature.svg",
    },
    {
      id: 3,
      cardLabel: "Heart Rate",
      value: "78 bpm",
      result: "Lower than Average",
      src: "/heartBPM.svg",
    },
  ]);

  const [tableData, setTableData] = useState([
    {
      name: "Type 2 Diabetes",
      description:
        "A chronic condition that affects the way the body processes blood sugar (glucose).",
      status: "Actively being treated",
    },
    {
      name: "Type 2 Diabetes",
      description:
        "A chronic condition that affects the way the body processes blood sugar (glucose).",
      status: "Untreated",
    },
    {
      name: "Hypertension",
      description:
        "A condition in which the force of the blood against the artery walls is too high.",
      status: "Under observation",
    },
  ]);

  return (
    <div className="diagnosis-Container">
      <div className="diagnosis-history">
        <h1 className="">Diagnosis History</h1>
        <div className="chart">
          <img src="/myChart.jpg" alt="Blood Pressure" />
        </div>
        <div className="health-card">
          {cards?.map((item, index) => {
            return (
              <Card
                key={index}
                cardLabel={item.cardLabel}
                value={item.value}
                src={item.src}
                result={item.result}
              />
            );
          })}
        </div>
      </div>
      <div className="diagnostic-list">
        <h1 className="">Diagnostic List</h1>
        <div className="table">
          <Table tableData={tableData} />
        </div>
      </div>
    </div>
  );
};

export default PatientAnalytics;
