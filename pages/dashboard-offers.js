import React from "react";
import Orders from "../src/Components/Orders";
import SidePanel from "../src/Components/SidePanel";
import ReferralCard from "../src/Components/Referral";

const DashboardOffers = () => {
  return (
    <>
      <div className="flex">
        <SidePanel />
        <div className="flex w-[100%] ml-[48px]">
          <Orders />
          <div className="flex flex-col w-[75%] mt-[36px] ml-[36px] bg-[#ffff] rounded-[11px] h-[700px]">
            <div className="flex flex-row justify-between mx-[22px] mt-[22px]">
              <div className="border border-[#2D9CDB] rounded-[12px] w-[30%] h-[260px] flex flex-col items-center">
                <h2 className="text-lg font-semibold text-[#2D9C DB] text-center mt-[32px]">
                  Get Up To 50% Off
                </h2>
                <div className="flex flex-row justify-between w-[55%] h-[1px] bg-[#2D9CDB] opacity-50 mt-[12px]">
                  <div className="h-[4px] w-[4px] rounded-[50%] -translate-y-[30%] -translate-x-[50%] bg-[#2D9CDB]"></div>
                  <div className="h-[4px] w-[4px] rounded-[50%] -translate-y-[30%] translate-x-[50%] bg-[#2D9CDB]"></div>
                </div>

                <div className="flex items-center justify-center w-[70%] rounded-lg border border-[#2495D6] border-dashed h-[42px] mt-[40px]">
                  <h2 className="text-[#2784B9] text-[18px] font-semibold w-[98%] h-[36px] text-center rounded-lg bg-[#EAF3F9] tracking-[0.2em]">
                    FIRST50
                  </h2>
                </div>

                <button className="text-[16px] gradientBG rounded-[4px] mt-[40px] text-[#F6F5F8] font-medium h-[40px] w-[60%]">
                  Click To Copy
                </button>
              </div>
              <div className="gradientBG rounded-[12px] w-[30%] h-[273px] mt-[27px] flex flex-col items-center">
                <h2 className="text-lg font-semibold text-[#FFFFFF] text-center mt-[32px]">
                  10% +15% Off
                </h2>
                <div className="flex flex-row justify-between w-[55%] h-[1px] bg-[#2D9CDB] opacity-50 mt-[12px]">
                  <div className="h-[4px] w-[4px] rounded-[50%] -translate-y-[30%] -translate-x-[50%] bg-[#2D9CDB]"></div>
                  <div className="h-[4px] w-[4px] rounded-[50%] -translate-y-[30%] translate-x-[50%] bg-[#2D9CDB]"></div>
                </div>

                <p className="px-[12px] text-[#FFFFFF] text-xs text-center mt-[36px]">
                  Book 3 assignments within 7 days and get 10% OFF on 2nd and
                  15% OFF on 3rd assignment
                </p>

                <button className="text-[16px] bg-[#FFFFFF] rounded-[4px] mt-[42px] text-[#1E91D3] font-medium h-[40px] w-[60%]">
                  Add Money
                </button>
              </div>
              <div className="border border-[#2D9CDB] rounded-[12px] w-[30%] h-[260px] flex flex-col items-center">
                <h2 className="text-lg font-semibold text-[#2D9CDB] text-center mt-[32px]">
                  Add Less. Get More
                </h2>
                <div className="flex flex-row justify-between w-[55%] h-[1px] bg-[#2D9CDB] opacity-50 mt-[12px]">
                  <div className="h-[4px] w-[4px] rounded-[50%] -translate-y-[30%] -translate-x-[50%] bg-[#2D9CDB]"></div>
                  <div className="h-[4px] w-[4px] rounded-[50%] -translate-y-[30%] translate-x-[50%] bg-[#2D9CDB]"></div>
                </div>

                <p className="px-[12px] text-[#2D9CDB] text-xs text-center mt-[36px]">
                  i.e. add AUD 300 or more and get 10% etxra
                </p>

                <button className="text-[16px] gradientBG rounded-[4px] mt-[42px] text-[#F6F5F8] font-medium h-[40px] w-[60%]">
                  Add Money
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center mt-[22px]">
              <span className="w-[38px] h-[38px] rounded-[50%] text-center text-[#ffffff] text-[26px] bg-[#565D5C]">
                &lt;
              </span>
              <span className="w-[38px] h-[38px] rounded-[50%] text-center text-[#ffffff] text-[26px] bg-[#565D5C] ml-[23px]">
                &gt;
              </span>
            </div>

            <div className="w-full flex items-center justify-center">
              <ReferralCard
                referralCardStyle="w-[90%] h-[220px] mt-[32px] gradientBG"
                ReferralCardHeadingStyle="mt-[24px] text-[#FFFFFF] text-[36px] font-[700] tracking-wider"
                ReferralCardTextStyle="mt-[14px] text-[#FFFFFF] text-[14px] font-normal text-center tracking-wider"
                code="MOSJ220R"
                codeStyle="text-[#2784B9] text-center text-[18px] font-[600] tracking-[0.2em]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOffers;
