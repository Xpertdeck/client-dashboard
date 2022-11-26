import Image from "next/image";
import React from "react";
import CommonButton from "../Button";

const WalletCard = (props) => {
  return (
    <div className="xl:w-[580px] w-[500px] gradientBG flex flex-col rounded-[12px] h-[320px]">
      <div className="px-[16px] pt-[26px] flex justify-between">
        <div className="flex flex-row border broder-[#EAF3F9] rounded-[5px]">
          <div className="bg-[#EAF3F9] text-[#2D9CDB] rounded-[5px] font-normal text-lg px-[13px] py-[8px]">
            <p>My wallet</p>
          </div>
          <div className="text-[#EAF3F9] text-[30px] font-semibold flex items-center justify-center py-[3px] px-[18px]">
            <p>USD {props.amount}</p>
          </div>
        </div>

        <Image
          src="/Images/Common/more.svg"
          width={4}
          height={18}
          alt="More options"
        />
      </div>
      <div className="flex flex-col px-[16px] mt-[44px]">
        <h2 className="text-[42px] text-[#EAF3F9] font-normal leading-[63px]">Add <span className="font-semibold">Less.</span> Get <span className="font-medium">More</span></h2>
        <div className="flex">
            <p className="text-[#ffffff] text-lg leading-[22px] mr-[6px]">i.e. you add AUD 300 or more and get 10% extra</p>
            <Image src="/Images/Common/info.svg" width = {13} height = {12} alt = "info"/>
        </div>
      </div>
      <div className="flex flex-row mt-[47px] px-[16px]">
        <CommonButton buttonLink = "/" buttonStyle = "bg-[#EAF3F9] opacity-[0.5] rounded-[5px]" buttonFontStyle = "text-[18px] text-[#2D9CDB] py-[8px] px-[26px]" buttonText ="YOU ADD"/>
        <CommonButton buttonLink = "/" buttonStyle = "bg-[#EAF3F9] opacity-[0.5] rounded-[5px] ml-[13px]" buttonFontStyle = "text-[18px] text-[#2D9CDB] py-[8px] px-[26px]" buttonText ="YOU GET"/>
        <CommonButton buttonLink = "/" buttonStyle = "bg-[#EAF3F9] rounded-[5px] ml-[13px]" buttonFontStyle = "text-[18px] text-[#2D9CDB] py-[8px] px-[26px]" buttonText ="ADD MONEY"/>
      </div>
    </div>
  );
};

export default WalletCard;
