import Image from "next/image";
import React from "react";
import CommonButton from "../Button";

const WalletCard = (props) => {
  return (
    <div className={`rounded-[12px] gradientBG ${props.mainStyle}`}>
      <div className="flex flex-col">
        <div className="px-[22px] pt-[26px] flex  justify-between">
          <div className="flex flex-row border broder-[#EAF3F9] rounded-[5px]">
            <div className="bg-[#EAF3F9] text-[#2D9CDB] w-[111px] rounded-[5px] font-normal text-[16px] px-[13px] py-[8px]">
              <p>My wallet</p>
            </div>
            <div className="text-[#EAF3F9] text-[16px] w-[111px] font-semibold flex items-center justify-center py-[8px] px-[16px]">
              <p>USD {props.amount}</p>
            </div>
          </div>

          <Image
            src="/Images/Common/more.svg"
            width={4}
            height={16}
            alt="More options"
          />
        </div>
        <div className="flex flex-col px-[22px] mt-[40px]">
          <h2 className="text-[28px] text-[#EAF3F9] font-normal leading-[42px]">
            Add <span className="font-semibold">Less.</span> Get{" "}
            <span className="font-semibold">More</span>
          </h2>
          <div className="flex mt-[21px]">
            <p className="text-[#ffffff] text-sm leading-[17px] mr-[6px]">
              i.e. you add AUD 300 or more and get 10% extra
            </p>
            <Image
              src="/Images/Common/info.svg"
              width={12}
              height={12}
              alt="info"
            />
          </div>
        </div>
      </div>
      <div className={`flex ${props.buttonAlignment}`}>
        <CommonButton
          buttonLink="/"
          buttonStyle={`border border-[#FFFFFF] rounded-[5px] h-[40px] ${props.buttonStyle}`}
          buttonFontStyle="text-[16px] text-[#FFFFFF]  px-[16px] font-medium"
          buttonText="YOU ADD"
        />
        <CommonButton
          buttonLink="/"
          buttonStyle={`border border-[] rounded-[5px] ml-[13px] h-[40px] ${props.buttonStyle}`}
          buttonFontStyle="text-[16px] text-[#FFFFFF]  px-[16px] font-medium"
          buttonText="YOU GET"
        />
        <CommonButton
          buttonLink="/"
          buttonStyle={`bg-[#EAF3F9] rounded-[5px] ml-[13px] h-[40px] ${props.buttonStyle}`}
          buttonFontStyle="text-[16px] text-[#2D9CDB]  px-[16px] font-medium"
          buttonText="ADD MONEY"
        />
      </div>
    </div>
  );
};

export default WalletCard;
