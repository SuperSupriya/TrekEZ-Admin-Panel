import Banner from "./components/Banner";
import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
import NFt3 from "assets/img/nfts/Nft3.png";
import NFt5 from "assets/img/nfts/Nft5.png";
import NFt6 from "assets/img/nfts/Nft6.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";

import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";
import HistoryCard from "./components/HistoryCard";
import TopCreatorTable from "./components/TableTopCreators";
import NftCard from "components/card/NftCard";

const Marketplace = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}
        <Banner />

        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Trending Rooms
          </h4>
          <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            <li>
              <span
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white cursor-pointer"
              >
                Single
              </span>
            </li>
            <li>
              <span
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white cursor-pointer"
              >
                Double
              </span>
            </li>
            <li>
              <span
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white cursor-pointer"
              >
                Standard
              </span>
            </li>
            <li>
              <span
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white cursor-pointer"
              >
              Luxurious
              </span>
            </li>
          </ul>
        </div>

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="404 Brrom Str, F12"
            author="Single Bed"
            price="245 reviews"
            image="https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Homenick Cove"
            author="Single Bed"
            price="245 reviews"
            image="https://images.pexels.com/photos/1638341/pexels-photo-1638341.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Weimann Junctions"
            author="Double Bed"
            price="245 reviews"
            image="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>

        {/* Recenlty Added setion */}
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Recently Added
          </h4>
          <h1 className="text-blue-400 cursor-pointer hover:underline">View more</h1>
        </div>

        {/* Recently Add NFTs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Louisa Course"
            author="Standard Bed"
            price="245 reviews"
            image="https://images.pexels.com/photos/2291624/pexels-photo-2291624.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Darby Place"
            author="Single Bed"
            price="245 reviews"
            image="https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Misael Groves"
            author="Double Bed"
            price="245 reviews"
            image="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>

      {/* right side section */}

      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <TopCreatorTable
          extra="mb-5"
          tableData={tableDataTopCreators}
          columnsData={tableColumnsTopCreators}
        />
        <HistoryCard />
      </div>
    </div>
  );
};

export default Marketplace;
