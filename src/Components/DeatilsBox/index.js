import Image from "next/image";
import React, { useState } from "react";

const DetailsBox = (props) => {
  const [open, setOpen] = useState(false);

  const dropDown = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <div
        className="flex w-[193px] h-[40px] bg-[#2D9CDB] items-center rounded-[4px] flex-row justify-between px-[16px] cursor-pointer"
        onClick={dropDown}
      >
        <span className=" text-[16px] text-[#F6F5F8] font-medium">
          {props.cardTitle}
        </span>
        <span
          className={`rotate-90 text-[24px] text-[#F6F5F8] font-normal ${
            open ? "rotate-90" : "rotate-0"
          }`}
        >
          &gt;
        </span>
      </div>
      <div
        className={`flex flex-col w-[193px] bg-[#FFFFFF] overflow-hidden ease-in-out transition-[height] duration-300 pt-[4px] ${
          open ? "h-[140px] w-[193px]" : "h-[0px] w-[0px]"
        }`}
      >
        {props.cardDetails.map((ele, key) => {
          return (
            <p
              className="text-xs font-light text-[#151515] mt-[12px] ml-[16px]"
              key={key}
            >
              {ele}
            </p>
          );
        })}
        <div className="flex justify-end mt-[24px] mr-[16px]">
          <div
            className={
              props.button
                ? "flex w-[95px] h-[34px] items-center justify-center gradientBG boxShadow rounded-[4px]"
                : "hidden"
            }
          >
            <Image
              src="/Images/Common/attach.svg"
              width={13}
              height={13}
              alt="attach"
            />
            <p className="text-[#ffffff] text-xs ml-[6px]">Add File</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsBox;
