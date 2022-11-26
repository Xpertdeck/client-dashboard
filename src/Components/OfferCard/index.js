import Image from "next/image";
import React from "react";
import CommonButton from "../Button";

const OfferCard = (props) => {
  return (
    <div className="xl:w-[580px] w-[500px] boxShadow flex flex-col rounded-[12px] h-[320px] bg-[#FFFFFF]">
      <div className="px-[16px] pt-[26px] flex justify-between">
        <div className="flex flex-row  ">
          <CommonButton
            buttonLink="/"
            buttonStyle="gradientBG rounded-[5px]"
            buttonFontStyle="text-[18px] text-[#FFFFFF] py-[8px] px-[22px]"
            buttonText="Offers"
          />
          <CommonButton
            buttonLink="/"
            buttonStyle="gradientBG rounded-[5px] ml-[13px]"
            buttonFontStyle="text-[18px] text-[#FFFFFF] py-[8px] px-[22px]"
            buttonText="View all "
          />
        </div>

        <Image
          src="/Images/Common/more2.svg"
          width={4}
          height={18}
          alt="More options"
        />
      </div>
      <div className="flex flex-col px-[16px] mt-[33px]">
        <h2 className="text-[42px] text-[#2D9CDB] font-normal leading-[63px]">
          <span className="font-semibold">10% </span> +
          <span className="font-medium"> 15%</span> OFF
        </h2>
        <div className="flex">
          <p className="text-[#565D5C] text-lg leading-[22px] mr-[6px]">
            Book 3 assignments within 7 days and get <b>10% OFF</b> on 2nd and <b>15% OFF</b> 
            on 3rd assignment
          </p>
          <Image
            src="/Images/Common/info.svg"
            width={13}
            height={12}
            alt="info"
          />
        </div>
      </div>
      <div className="flex flex-row mt-[33px] px-[16px]">
        <CommonButton
            buttonLink="/"
            buttonStyle="gradientBG rounded-[5px]"
            buttonFontStyle="text-[18px] text-[#FFFFFF] py-[8px] px-[22px]"
            buttonText="ORDER NOW"
        />
      </div>
    </div>
  );
};

export default OfferCard;
