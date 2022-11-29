import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const SidePanel = () => {
  useEffect(() => {
    let path = window.location.pathname;
    console.log(path);
  }, []);
  return (
    <>
      <div className="flex flex-col h-[860px] w-[18%] bg-[#2D9CDB] sticky">
        <div className="h-full flex flex-col items-center justify-between">
          <div className="flex flex-col  h-[55%] mt-[70px]">
            <Link href="/">
              <div className="select flex py-[16px]">
                <Image
                  src="/Images/SidePanel/home.svg"
                  width={20}
                  height={20}
                  alt="home"
                />
                <p className="font-medium text-base text-[#FFFFFF] tracking-wider ml-[13px]">
                  Dashboard
                </p>
              </div>
            </Link>
            <Link href="/dashboard-all-orders">
              <div className="flex py-[16px] mt-[41px]">
                <Image
                  src="/Images/SidePanel/line.svg"
                  width={24}
                  height={24}
                  alt="home"
                />
                <p className="font-medium text-base text-[#FFFFFF] tracking-wider ml-[13px]">
                  All Orders
                </p>
              </div>
            </Link>
            <Link href="/offers">
              <div className="flex py-[16px] mt-[41px]">
                <Image
                  src="/Images/SidePanel/tag.svg"
                  width={24}
                  height={24}
                  alt="home"
                />
                <p className="font-medium text-base text-[#FFFFFF] tracking-wider ml-[13px]">
                  Offers
                </p>
              </div>
            </Link>
          </div>
          <Link href="/login">
            <div>
              <Image
                src="/Images/SidePanel/exit.svg"
                width={24}
                height={24}
                alt="home"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
