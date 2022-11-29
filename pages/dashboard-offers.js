import React from "react";
import Orders from "../src/Components/Orders";
import SidePanel from "../src/Components/SidePanel";

const DashboardOffers = () => {
  return <>
    <div className="flex">
        <SidePanel/>
        <div className="flex w-[100%]">
            <Orders/>
            <div className="">

            </div>
        </div>
    </div>
  </>;
};

export default DashboardOffers;
