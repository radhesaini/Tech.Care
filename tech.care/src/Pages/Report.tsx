import React from "react";
import "./report.css";
type Props = {
  key: number;
  name: string;
  src: string;
};

const Report = (props: Props) => {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center">
        <div className="flex-1 min-w-0 ms-4">{props.name}</div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          <a href={props.src} download>
            <img src="/download.svg" alt="Download Icon" />{" "}
          </a>
        </div>
      </div>
    </li>
  );
};

export default Report;
