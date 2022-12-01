import Image from "next/image";
import React from "react";

const Orders = () => {
  const data = [
    {
      id: 1,
      status: "Completed",
      next: true,
      complete: true,
      completePer: 100,
      reward: null
    },
    {
      id: 2,
      status: "Completed",
      next: true,
      complete: true,
      completePer: 100,
      reward: null
    },
    {
      id: 3,
      status: "Completed",
      next: true,
      complete: true,
      completePer: 50,
      reward: null
    },
    {
      id: 4,
      status: "Pending",
      next: true,
      complete: false,
      completePer: 0,
      reward: null
    },
    {
      id: 5,
      status: "Pending",
      next: true,
      complete: false,
      completePer: 0,
      reward: "Offer Locked"
    },
    {
      id: 6,
      status: "Pending",
      next: true,
      complete: false,
      completePer: 0,
      reward: null
    },
    {
      id: 7,
      status: "Pending",
      next: true,
      complete: false,
      completePer: 0,
      reward: null
    },
    {
      id: 8,
      status: "Pending",
      next: false,
      complete: false,
      completePer: 0,
      reward: null
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center h-[713px] mt-[36px] rounded-[12px] overflow-y-scroll w-[18%] bg-[#FFFFFF]">
        <div className="py-[22px]">
          {data.map((ele, key) => {
            return (
              <>
                <div className="flex flex-col" key={key}>
                  <div className="flex">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex w-[42px] h-[42px] items-center justify-center rounded-[50%] ${
                          ele.complete ? "bg-[#4490C9]" : "bg-[#448fc946]"
                        }`}
                      >
                        <Image
                          src="/Images/Common/tick.svg"
                          width={26}
                          height={26}
                        />
                      </div>
                      <div
                        className={`flex flex-col h-[70px] rounded-lg w-[4px] my-[3px] bg-[#448fc946] ${
                          ele.next ? "flex" : "hidden"
                        }`}
                      >
                        <div
                          className={`w-full bg-[#4490C9] rounded-lg h-[${ele.completePer}%]`}
                        ></div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-[11px]">
                      <div className="flex">
                        <span className="text-base font-medium text-justify text-[#000000]">
                          Order {ele.id}
                        </span>
                        <div className={`ml-[17px] ${ele.reward ? "flex" : "hidden"}`}> 
                        <Image src='/Images/Common/star.svg' width={16} height = {15}/>
                        </div>
                      </div>
                      <span className="text-sm font-light text-justify opacity-50 text-[#000000]">
                        {ele.status}
                      </span>
                      <span className={`text-[#000000] mt-[6px] opacity-50 text-sm font-semibold ${ele.reward ? "block" : "hidden"}`}> {ele.reward}</span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Orders;
