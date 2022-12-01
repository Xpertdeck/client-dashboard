import Image from "next/image";
import React from "react";
import CommonButton from "../Button";

const OfferCard = () => {
  return (
    <div className="w-[536px] boxShadow flex flex-col rounded-[12px] h-[310px] bg-[#FFFFFF]">
      <div className="px-[23px] mt-[22px] flex justify-between">
        <div className="flex flex-row  ">
          <CommonButton
            buttonLink="/"
            buttonStyle="gradientBG h-[40px] rounded-[5px]"
            buttonFontStyle="text-[16px] text-[#FFFFFF] px-[16px]"
            buttonText="Offers"
          />
          <CommonButton
            buttonLink="/"
            buttonStyle="gradientBG h-[40px] rounded-[5px] ml-[13px]"
            buttonFontStyle="text-[16px] text-[#FFFFFF] px-[16px]"
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
      <div className="flex flex-col pl-[23px] mt-[27px]">
        <h2 className="text-[28px] text-[#2D9CDB] font-normal leading-[63px]">
          <span className="font-semibold">10% </span> +
          <span className="font-medium"> 15%</span> OFF
        </h2>
        <div className="flex mt-[26px]">
          <p className="text-[#565D5C] text-sm leading-[22px]">
            Book 3 assignments within 7 days and get <b>10% OFF</b> on 2nd and <b>15% OFF </b> 
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
      <div className="flex flex-row mt-[27px] px-[23px]">
        <CommonButton
            buttonLink="/"
            buttonStyle="gradientBG h-[40px] rounded-[5px]"
            buttonFontStyle="text-[16px] text-[#FFFFFF] px-[16px]"
            buttonText="ORDER NOW"
        />
      </div>
    </div>
  );
};

export default OfferCard;
