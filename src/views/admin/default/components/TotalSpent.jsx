import React from "react";
import {
  MdArrowDropUp,
  MdOutlineCalendarToday,
  MdBarChart,
} from "react-icons/md";
import Card from "components/card";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";
import LineChart from "components/charts/LineChart";

const TotalSpent = () => {
  return (
    <Card extra="!p-[20px] text-center">
      <div className="flex justify-between">
        <div className="flex flex-col">
        <span className="font-semibold">Guest Activity</span>
        <span><div className="w-3 h-3 rounded-sm bg-orange-400 top-4 relative"></div></span>
        <div className="relative bottom-[10px] left-5 top-[-2px]">
        <span className="text-sm font-medium text-gray-600">Check In</span><span className="font-medium relative left-4">457 Guest</span>
        </div>
       
        </div>

        <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
          <MdOutlineCalendarToday />
          <span className="text-sm font-medium text-gray-600">This month</span>
        </button>

      </div>
      <span><div className="w-3 h-3 rounded-sm bg-red-500 top-3.5 relative"></div></span>
        <div className="relative bottom-[10px] flex left-5 top-[-2px]">
        <span className="text-sm font-medium text-gray-600">Check Out</span><span className="font-medium relative left-4">182 Guest</span>
        </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex flex-col">

          <div className="flex flex-col items-start">
            <div className="">
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="mt-3 text-gray-500 font-medium">Increment</span>
              <MdArrowDropUp className="font-medium text-green-500" />
              <p className="text-sm font-bold text-green-500"> +2.45% </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <LineChart
            options={lineChartOptionsTotalSpent}
            series={lineChartDataTotalSpent}
          />
        </div>
      </div>
    </Card>
  );
};

export default TotalSpent;
