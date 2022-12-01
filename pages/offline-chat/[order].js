import React from "react";
import SidePanel from "../../src/Components/SidePanel";
import { useRouter } from "next/router";
import DetailsBox from "../../src/Components/DeatilsBox";
import ChatScreen from "../../src/Components/ChatScreen/ChatScreen";
import ReferralCard from "../../src/Components/Referral";
import Image from "next/image";
const Order = () => {
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

  const router = useRouter();
  let order = String(router.query.order);
  order = order.replace("%20", " ");
  let currentTarget = -1;

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == order.toString()) {
      currentTarget = i;
      break;
    }
  }

  // console.log(currentTarget)

  return (
    <>
      <div className="flex">
        <SidePanel />
        <div className="mt-[36px] mx-[48px] flex justify-between">
          <div className="">
            <h2 className="text-base text-[#151515] font-normal tracking-wider">
              Order ID: {order}
            </h2>
            <div className="mt-[24px]">
              <DetailsBox
                cardTitle="Order Details"
                cardDetails={[
                  `Subject - ${data[currentTarget].subject}`,
                  `Word Count - 10000`,
                  `Deadline - ${data[currentTarget].date}`,
                  "Referencing style",
                ]}
                button={false}
              />
            </div>
            <div className="mt-[16px]">
              <DetailsBox
                cardTitle="Supporting Files"
                cardDetails={[`Marksheet.pdf`, `Passport_Photo.pdf`]}
                button={true}
              />
            </div>
            <div className="mt-[16px]">
              <DetailsBox
                cardTitle="Pending Details"
                cardDetails={[
                  `Country - Australia`,
                  `Course - B.tech`,
                  `Level of Education`,
                ]}
                button={false}
              />
            </div>
          </div>

          <ChatScreen />

          <div className="flex flex-col w-[328px] ml-[36px]">
            <div className="flex flex-col bg-[#FFFFFF] px-[22px] pt-[22px] rounded-lg h-[152px] w-[328px]">
              <h2 className="text-base text-[#151515] font-normal leading-[24px]">
                Amount Status
              </h2>
              <div className="flex flex-row items-center justify-between mt-[20px]">
                <div className="flex items-center">
                  <div
                    className={
                      data[currentTarget].status === "Success"
                        ? "bg-[#2D9CDB] rounded-[50%] p-1"
                        : "bg-[#151515] opacity-20 rounded-[50%] p-1"
                    }
                  >
                    <Image
                      src="/Images/Common/tick.svg"
                      width={18}
                      height={18}
                    />
                  </div>
                  <p className="text-[#151515] text-sm font-light leading-[21px] ml-[8px]">
                    Wohoo! Full Paid
                  </p>
                </div>
                <div className="flex items-center">
                  <div
                    className={
                      data[currentTarget].status !== "Success"
                        ? "bg-[#2D9CDB] rounded-[50%] p-1"
                        : "bg-[#151515] opacity-20 rounded-[50%] p-1"
                    }
                  >
                    <Image
                      src="/Images/Common/tick.svg"
                      width={18}
                      height={18}
                    />
                  </div>
                  <p className="text-[#151515] text-sm font-light leading-[21px] ml-[8px]">
                    Partially Paid
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mt-[16px]">
                <p
                  className={`py-[3px] px-[8px] text-[14px] rounded-[4px] font-normal text-[#EAF3F9] leading-[21px] ${
                    data[currentTarget].status === "Success"
                      ? "bg-[#2D9CDB] p-1"
                      : "bg-[#151515] p-1"
                  }`}
                >
                  Paid - $100.00
                </p>
                <p
                  className={`py-[3px] px-[8px] text-[14px] rounded-[4px] font-normal text-[#EAF3F9] leading-[21px] ${
                    data[currentTarget].status !== "Success"
                      ? "bg-[#2D9CDB] p-1"
                      : "bg-[#151515] p-1"
                  }`}
                >
                  Pay - $100.00
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-[#FFFFFF] px-[22px] pt-[22px] rounded-lg h-[220px] w-[328px] mt-[22px]">
              <h2 className="text-base text-[#151515] font-normal leading-[24px]">
                Order Status
              </h2>
              <div className="w-[100%] h-[7px] mt-[13px] bg-[#D9D9D9] rounded-[5.5px]">
                <div
                  className={`h-[7px] bg-[#2D9CDB] rounded-[5.5px] w-[70%]`}
                ></div>
              </div>
              <div className="flex flex-col mt-[20px]">
                <div className="flex items-start">
                  <div
                    className={
                      data[currentTarget].status !== "Success"
                        ? "bg-[#2D9CDB] rounded-[50%] p-1"
                        : "bg-[#151515] opacity-20 rounded-[50%] p-1"
                    }
                  >
                    <Image
                      src="/Images/Common/tick.svg"
                      width={18}
                      height={18}
                    />
                  </div>
                  <p className="text-[#151515] text-sm font-light leading-[21px] ml-[8px]">
                    Order Initiated
                  </p>
                </div>
                <div className="flex items-start mt-[13px]">
                  <div
                    className={
                      data[currentTarget].status !== "Success"
                        ? "bg-[#2D9CDB] rounded-[50%] p-1"
                        : "bg-[#151515] opacity-20 rounded-[50%] p-1"
                    }
                  >
                    <Image
                      src="/Images/Common/tick.svg"
                      width={18}
                      height={18}
                    />
                  </div>
                  <p className="text-[#151515] text-sm font-light leading-[21px] ml-[8px]">
                    Order Processed
                  </p>
                </div>
                <div className="flex items-start mt-[13px]">
                  <div
                    className={
                      data[currentTarget].status === "Success"
                        ? "bg-[#2D9CDB] rounded-[50%] p-1"
                        : "bg-[#151515] opacity-20 rounded-[50%] p-1"
                    }
                  >
                    <Image
                      src="/Images/Common/tick.svg"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div className="flex flex-col ml-[8px]">
                    <p className="text-[#151515] text-sm font-light leading-[21px]">
                      Order Delivery
                    </p>
                    <span className="text-[10px] text-[#151515] font-light">
                      Expected date - 01/01/2000
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-[#FFFFFF] px-[22px] pt-[22px] rounded-lg h-[103px] w-[328px] mt-[22px]">
              <h2 className="text-base text-[#151515] font-normal leading-[24px]">
                Writer Category
              </h2>
              <div className="flex flex-row items-center justify-between mt-[20px]">
                <div className="flex items-center">
                  <div
                    className={
                      data[currentTarget].status === "Success"
                        ? "bg-[#2D9CDB] rounded-[50%] p-1"
                        : "bg-[#151515] opacity-20 rounded-[50%] p-1"
                    }
                  >
                    <Image
                      src="/Images/Common/tick.svg"
                      width={18}
                      height={18}
                    />
                  </div>
                  <p className="text-[#151515] text-sm font-light leading-[21px] ml-[8px]">
                    Standard
                  </p>
                </div>
                <div className="flex items-center">
                  <div
                    className={
                      data[currentTarget].status !== "Success"
                        ? "bg-[#2D9CDB] rounded-[50%] p-1"
                        : "bg-[#151515] opacity-20 rounded-[50%] p-1"
                    }
                  >
                    <Image
                      src="/Images/Common/tick.svg"
                      width={18}
                      height={18}
                    />
                  </div>
                  <p className="text-[#151515] text-sm font-light leading-[21px] ml-[8px]">
                    Premium
                  </p>
                </div>
                <div className="flex items-center">
                  <div
                    className={
                      data[currentTarget].status !== "Success"
                        ? "bg-[#2D9CDB] rounded-[50%] p-1"
                        : "bg-[#151515] opacity-20 rounded-[50%] p-1"
                    }
                  >
                    <Image
                      src="/Images/Common/tick.svg"
                      width={18}
                      height={18}
                    />
                  </div>
                  <p className="text-[#151515] text-sm font-light leading-[21px] ml-[8px]">
                    Elite
                  </p>
                </div>
              </div>
            </div>
            <ReferralCard
              referralCardStyle="w-[100%] h-[184px] mt-[32px] gradientBG"
              ReferralCardHeadingStyle="mt-[24px] text-[#FFFFFF] text-[27px] font-[700] tracking-wider"
              ReferralCardTextStyle="mt-[2px] text-[#FFFFFF] text-[10px] px-[86px] font-normal text-center tracking-wider leading-[1em]"
              code="MOSJ220R"
              codeStyle="text-[#2784B9] text-center text-[13px] font-[600] tracking-[0.2em]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
