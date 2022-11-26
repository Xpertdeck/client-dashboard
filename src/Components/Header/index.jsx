import Image from "next/image";
import Link from "next/link";
import React from "react";
import CommonButton from "../Button";

const Header = () => {
  return (
    <>
      <div className="flex flex-row bg-[#151515] h-[78px] items-center justify-between">
        <Link href= "/">
          <div className="ml-[120px]">
            <Image
              src="/Images/Common/logo.svg"
              width={135}
              height={32}
              alt="Logo"
            />
          </div>
        </Link>
        <div className="w-[70%] flex items-center">
          <div className="flex w-[45%] items-center bg-[white] rounded-[5px] py-[11px] px-[18px]">
            <div>
              <Image
                src="/Images/Common/Search.svg"
                width={15}
                height={15}
                alt="search"
              />
            </div>
            <input
              type="seach"
              className="w-[92%] ml-[13px] focus:outline-none text-xs font-normal text-[#000000] opacity-[0.7]"
              placeholder="Search"
            />
          </div>
          <div className="flex ml-[73px] w-[40%] items-center">
            <CommonButton
              buttonLink="/new-assignment"
              buttonStyle="px-[16px] py-[8px] gradientBG rounded-lg"
              buttonText="New Assignment"
              buttonFontStyle="text-xs font-semibold text-[#EAF3F9] text-center"
            />
            <div className="ml-[35px] cursor-pointer">
              <Image
                src="/Images/Common/Notification.svg"
                width={25}
                height={25}
                alt="notification"
              />
            </div>
            <div className="flex flex-col items-center ml-[35px] cursor-pointer">
              <Image
                src="/Images/Common/Wallet.svg"
                width={25}
                height={25}
                alt="notification"
              />
              {/* <p className="gradientBG text-[8px] font-medium text-[#FFFFFF] px-[8px] rounded-[12px]">$15.00</p> */}
            </div>
            <div className="ml-[35px] cursor-pointer">
              <Image
                src="/Images/Common/Avtar.svg"
                width={41}
                height={41}
                alt="notification"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
