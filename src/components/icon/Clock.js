import React from "react";

export default function Clock({ time }) {
  return (
    <div className="flex-col justify-center w-1/3">
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="">
        <p className="text-xl">{time} min</p>
      </div>
    </div>
  );
}
