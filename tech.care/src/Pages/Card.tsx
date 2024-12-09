import Image from "next/image";
import React from "react";
import "./Card.css";

type Props = {
  src: string;
  cardLabel: string;
  value: string | number;
  result: string;
};

const Card = (props: Props) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 main-Div">
      <div className="flex flex-col pb-10 ">
        <Image
          className="mb-3 rounded-full shadow-lg cardImg"
          src={props.src}
          alt={props.cardLabel}
          width={96}
          height={96}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white card-label">
          {props.cardLabel}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 value">
          {props.value}
        </span>
        <div className="flex mt-4 md:mt-6 result">{props.result}</div>
      </div>
    </div>
  );
};

export default Card;
