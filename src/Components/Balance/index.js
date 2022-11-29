import React from "react";
import CommonButton from "../Button";

const Balance = (props) => {
  return (
    <>
      <div className={props.style}>
        <h2 className={props.headingClass}>{props.heading}</h2>
        <div className={props.moneySectionStyle}>
          <select className="bg-[#FFFFFF] rounded-lg w-[89px] h-[40px] border border-[#2D9CDB] text-[#2D9CDB] text-[16px] font-normal px-[16px] focus:outline-none">
            <option value="Recent Orders" className="rounded-none">
              AED
            </option>
            <option value="Recent Orders" className="rounded-none">
              AUD
            </option>
            <option value="Recent Orders" className="rounded-none">
              GBP
            </option>
            <option value="Recent Orders" className="rounded-none">
              USD
            </option>
            <option value="Recent Orders" className="rounded-none">
              CAD
            </option>
          </select>
          <span className={`${props.amountStyle}`}>{props.amount}</span>
        </div>
        <div className="flex flex-col w-[100%] mt-[36px]">
          <CommonButton
            buttonLink="/"
            buttonStyle="mx-[32px] rounded gradientBG h-[40px]"
            buttonText="Recent Order"
            buttonFontStyle="text-[16px] text-[#FFFFFF] font-medium text-center"
          />
        </div>
      </div>
    </>
  );
};

export default Balance;
