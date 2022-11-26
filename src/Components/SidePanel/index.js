import Image from "next/image";
import Link from "next/link";
import React from "react";

const SidePanel = () => {
  return (
    <>
      <div className="flex flex-col items-center h-[798px] bg-[#2D9CDB] ml-[36px] px-[36px] py-[42px] sticky rounded-[12px]">
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col items-center h-[55%] justify-between">
            <Link href="/">
              <div className="select">
                <Image
                  src="/Images/SidePanel/home.svg"
                  width={24}
                  height={24}
                  alt="home"
                />
              </div>
            </Link>
            <Link href="/dashboard-all-orders">
              <div>
                <Image
                  src="/Images/SidePanel/line.svg"
                  width={26}
                  height={26}
                  alt="home"
                />
              </div>
            </Link>
            <Link href="/">
              <div>
                <Image
                  src="/Images/SidePanel/pc.svg"
                  width={24}
                  height={24}
                  alt="home"
                />
              </div>
            </Link>
            <Link href="/offers">
              <div>
                <Image
                  src="/Images/SidePanel/tag.svg"
                  width={26}
                  height={26}
                  alt="home"
                />
              </div>
            </Link>
            <Link href="/">
              <div>
                <Image
                  src="/Images/SidePanel/people.svg"
                  width={27}
                  height={27}
                  alt="home"
                />
              </div>
            </Link>
          </div>
          <Link href="/login">
            <div> 
              <Image
                src="/Images/SidePanel/exit.svg"
                width={27}
                height={27}
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
