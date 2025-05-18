import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";
import { FaUsers } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdTimeline } from "react-icons/md";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";

import Slider from 'react-slick'; // Import the slider component
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Dashboard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed of autoplay
    draggable: true ,
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<GiTakeMyMoney className="h-6 w-6" />}
          title={"Profit"}
          subtitle={"$642.39"}
        />
        <Widget
          icon={<MdTimeline className="h-7 w-7" />}
          title={"Booking"}
          subtitle={"1875"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Pending Request"}
          subtitle={"264"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Rooms"}
          subtitle={"145"}
        />
        <Widget
          icon={<FaUsers className="h-6 w-6" />}
          title={"New Guest"}
          subtitle={"875"}
        />
      </div>

      {/* Poupular Rooms  */}
      <div className="!z-5 relative mt-5 flex flex-col rounded-[15px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !p-[20px] text-center">

        <h2 className="text-xl font-bold mb-4">Popular Rooms</h2>
        <Slider className="mb-5" {...settings}>
          {/* Slide 1 */}
          <div>
            <img src="https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_640.jpg" alt="Room 1" className="w-full h-auto rounded-lg" />
          </div>
          {/* Slide 2 */}
          <div>
            <img src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Room 2" className="w-full h-auto rounded-lg" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Room 2" className="w-full h-auto rounded-lg" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Room 2" className="w-full h-auto rounded-lg" />
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_640.jpg" alt="Room 2" className="w-full h-auto rounded-lg" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Room 2" className="w-full h-auto rounded-lg" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Room 2" className="w-full h-auto rounded-lg" />
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>


      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
