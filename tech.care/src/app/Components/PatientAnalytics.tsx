"use client";
import React, { useEffect, useState } from "react";
import "./PatientAnalytics.css";
import Card from "@/Pages/Card";
import Table from "@/Pages/Table";
import { useAppSelector } from "../../store/store";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

type Props = {};

const PatientAnalytics = (props: Props) => {
  let stateItem = useAppSelector((state) => state.item.item);

  const chartData = stateItem.diagnosis_history || [];
  console.log("chartDaya", chartData);
  const cards = [
    {
      id: 1,
      cardLabel: "Respiratory Rate",
      value: chartData?.[0]?.respiratory_rate.value,
      result: chartData?.[0]?.respiratory_rate.levels,
      src: "/respiratory rate.svg",
    },
    {
      id: 2,
      cardLabel: "Temperature",
      value: chartData?.[0]?.temperature.value,
      result: chartData?.[0]?.temperature.levels,
      src: "/temperature.svg",
    },
    {
      id: 3,
      cardLabel: "Heart Rate",
      value: chartData?.[0]?.heart_rate.value,
      result: chartData?.[0]?.heart_rate.levels,
      src: "/heartBPM.svg",
    },
  ];

  const tableData = stateItem.diagnostic_list || [];

  let bloodPressureDataDiastolic: any[] = [];
  let bloodPressureDatasystolic: any[] = [];
  let temperatureData: any[] = [];
  let respiratoryRateDataDiastolic: any[] = [];
  let heartRateDataDiastolic: any[] = [];

  const labels = chartData.map((item: any) => {
    bloodPressureDataDiastolic.push(item.blood_pressure.diastolic.value);
    bloodPressureDatasystolic.push(item.blood_pressure.systolic.value);
    temperatureData.push(item.temperature.value);
    respiratoryRateDataDiastolic.push(item.respiratory_rate.value);
    heartRateDataDiastolic.push(item.heart_rate.value);
    return item.month.slice(0, 3) + "," + item.year;
  });

  const data = {
    labels: labels,
    fill: false,
    datasets: [
      {
        label: "Blood Pressure Diastolic",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: bloodPressureDataDiastolic,
      },
      {
        label: "Blood Pressure Systolic",
        backgroundColor: "brown",
        borderColor: "brown",
        data: bloodPressureDatasystolic,
      },
      {
        label: "Respiratory Rate Diastolic",
        backgroundColor: "violet",
        borderColor: "violet",
        data: respiratoryRateDataDiastolic,
      },
      {
        label: "Heart Rate Diastolic",
        backgroundColor: "pink",
        borderColor: "pink",
        data: heartRateDataDiastolic,
      },
      {
        label: "Temperature",
        backgroundColor: "yellow",
        borderColor: "yellow",
        data: temperatureData,
      },
    ],
  };

  // useEffect(() => {
  //   cards[0].value = ;
  //   cards[1].value = stateItem?.diagnosis_history?.[0].temperature.value;
  //   cards[2].value = stateItem?.diagnosis_history?.[0].heart_rate.value;
  //   setCards(cards);
  // }, []);

  Chart.register(CategoryScale);
  return (
    <div className="diagnosis-Container">
      <div className="diagnosis-history">
        <h1 className="">Diagnosis History</h1>
        <div className="chart">
          <Line data={data} />
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
