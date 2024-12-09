import React from "react";

type Props = {};

export const PatientsList = (props: Props) => {
  return (
    <div className="flow-root">
      <ul role="list">
        <li className="py-3 sm:py-4">
          <div className="flex items-center">
            <div className="flex-1 min-w-0 ms-4">Neil Sims</div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $320
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center ">
            <div className="flex-1 min-w-0 ms-4">Bonnie Green</div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $3467
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center">
            <div className="flex-1 min-w-0 ms-4">Michael Gough</div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $67
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center ">
            <div className="flex-1 min-w-0 ms-4">Lana Byrd</div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $367
            </div>
          </div>
        </li>
        <li className="pt-3 pb-0 sm:pt-4">
          <div className="flex items-center ">
            <div className="flex-1 min-w-0 ms-4">Thomes Lean</div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $2367
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
