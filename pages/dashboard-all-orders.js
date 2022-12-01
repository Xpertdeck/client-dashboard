import React from "react";
import OrderHeader from "../src/Components/OrderHead";
import SidePanel from "../src/Components/SidePanel";

const AllOrders = () => {
  const data = [
    {
      id: 2051934,
      subject: "IT",
      date: "15 July 2022",
      time: "11:00 PM",
      currPrice: "AUD 445.00",
      prevPrice: "AUD 556.00",
      off: "20% off",
      status: "Success",
    },
    {
      id: 2051935,
      subject: "CS",
      date: "17 July 2022",
      time: "11:00 PM",
      currPrice: "AUD 445.00",
      prevPrice: "AUD 556.00",
      off: "20% off",
      status: "Pending",
    },
    {
      id: 2051936,
      subject: "IT",
      date: "15 July 2022",
      time: "11:00 PM",
      currPrice: "AUD 445.00",
      prevPrice: "AUD 556.00",
      off: "20% off",
      status: "Success",
    },
    {
      id: 2051937,
      subject: "CS",
      date: "17 July 2022",
      time: "11:00 PM",
      currPrice: "AUD 445.00",
      prevPrice: "AUD 556.00",
      off: "20% off",
      status: "Success",
    },
    {
      id: 2051938,
      subject: "IT",
      date: "15 July 2022",
      time: "11:00 PM",
      currPrice: "AUD 445.00",
      prevPrice: "AUD 556.00",
      off: "20% off",
      status: "Success",
    },
    {
      id: 2051939,
      subject: "CS",
      date: "17 July 2022",
      time: "11:00 PM",
      currPrice: "AUD 445.00",
      prevPrice: "AUD 556.00",
      off: "20% off",
      status: "Success",
    },
    {
      id: 2051940,
      subject: "IT",
      date: "15 July 2022",
      time: "11:00 PM",
      currPrice: "AUD 445.00",
      prevPrice: "AUD 556.00",
      off: "20% off",
      status: "Success",
    },
    {
      id: 2051941,
      subject: "CS",
      date: "17 July 2022",
      time: "11:00 PM",
      currPrice: "AUD 445.00",
      prevPrice: "AUD 556.00",
      off: "20% off",
      status: "Success",
    },
    {
      id: 2051942,
      subject: "IT",
      date: "15 July 2022",
      time: "11:00 PM",
      currPrice: "AUD 445.00",
      prevPrice: "AUD 556.00",
      off: "20% off",
      status: "Success",
    },
    {
      id: 2051943,
      subject: "CS",
      date: "17 July 2022",
      time: "11:00 PM",
      currPrice: "AUD 445.00",
      prevPrice: "AUD 556.00",
      off: "20% off",
      status: "Success",
    },
  ];
  return (
    <>
      <div className="flex">
        <SidePanel />
        <div className="w-[85%] ml-[31px]">
          <OrderHeader data={data} />
        </div>
      </div>
    </>
  );
};

export default AllOrders;
