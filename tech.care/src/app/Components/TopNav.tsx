import React from "react";
import "./TopNav.css";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const TopNav = (props: Props) => {
  return (
    <div>
      <nav className="bg-transparent">
        <div className="flex items-center justify-between">
          <a
            href="https://Tech.Care.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              className="dark:invert"
              src="/TestLogo.svg"
              alt="Tech.Care logo"
              width={180}
              height={38}
              priority
            />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse rightBox items-center">
            <div className="profile">
              <img
                className="w-10 h-10 rounded-full"
                src="/Avtar.png"
                alt="Rounded avatar"
              />
              <div className="profile-Intro">
                <h5 className="profile-name">Dr. Jose Simmons</h5>
                <p className="role">General Practitioner</p>
              </div>
              <div className="text-lg font-medium text-gray-900 dark:text-white right-Ellipse">
                <img src="/settings.svg" />
              </div>
              <div className="text-lg font-medium text-gray-900 dark:text-white right-Ellipse">
                <img src="/more_vert.svg" />
              </div>
            </div>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="home"
                  className="flex gap-1 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  <Image
                    className="dark:invert flex gap-1 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    src="/home.svg"
                    alt="Overview logo"
                    width={16}
                    height={17}
                    priority
                  />
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="patient"
                  className="flex gap-1 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <Image
                    className="dark:invert block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    src="/group.svg"
                    alt="Patient logo"
                    width={16}
                    height={17}
                    priority
                  />
                  Patient
                </Link>
              </li>
              <li>
                <Link
                  href="schedule"
                  className="flex gap-1 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <Image
                    className="dark:invert block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    src="/calendar_today.svg"
                    alt="Patient logo"
                    width={16}
                    height={17}
                    priority
                  />
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="message"
                  className="flex gap-1 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <Image
                    className="dark:invert block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    src="/chat_bubble.svg"
                    alt="Patient logo"
                    width={16}
                    height={17}
                    priority
                  />
                  Message
                </Link>
              </li>
              <li>
                <Link
                  href="transactions"
                  className="flex gap-1 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <Image
                    className="dark:invert block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    src="/credit_card.svg"
                    alt="Patient logo"
                    width={16}
                    height={17}
                    priority
                  />
                  Transactions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
