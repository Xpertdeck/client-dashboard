import Image from "next/image";
import Link from "next/link";
import React from "react";
import CommonButton from "../Button";

const Header = () => {
  return (
    <>
      <div className="flex flex-row bg-[#151515] h-[56px] items-center justify-between">
        <Link href="/">
          <div className="ml-[50px]">
            <Image
              src="/Images/Common/logo.svg"
              width={133}
              height={32}
              alt="Logo"
            />
          </div>
        </Link>
        <div className="w-[67%] flex items-center justify-between">
          <div className="flex w-[42%] h-[30px] items-center bg-[white] rounded-[5px] py-[11px] px-[18px]">
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
              buttonStyle="px-[16px] h-[34px] gradientBG rounded-lg"
              buttonText="New Assignment"
              buttonFontStyle="text-xs font-semibold text-[#EAF3F9] text-center"
            />
            <div className="ml-[24px] cursor-pointer">
              <Image
                src="/Images/Common/Notification.svg"
                width={24}
                height={22}
                alt="notification"
              />
            </div>
            <Link href='/dashboard-wallet'>
              <div className="flex flex-col items-center ml-[24px] cursor-pointer">
                <Image
                  src="/Images/Common/Wallet.svg"
                  width={23}
                  height={20}
                  alt="wallet"
                />
                {/* <p className="gradientBG text-[8px] font-medium text-[#FFFFFF] px-[8px] rounded-[12px]">$15.00</p> */}
              </div>
            </Link>
            <div className="ml-[24px] cursor-pointer">
              <Image
                src="/Images/Common/Avtar.svg"
                width={36}
                height={36}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
