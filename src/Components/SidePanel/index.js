import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const SidePanel = () => {
  const menu = [
    {
      id: 1,
      title: "Dashboard",
      icon: "/Images/SidePanel/home.svg",
      link: "/",
    },
    {
      id: 2,
      title: "All Orders",
      icon: "/Images/SidePanel/line.svg",
      link: "/dashboard-all-orders",
    },
    {
      id: 3,
      title: "Offers",
      icon: "/Images/SidePanel/tag.svg",
      link: "/dashboard-offers",
    },
  ];
  function removeTrailingSlash(str) {
    return str.replace(/\//, "");
  }
  const router = useRouter();
  let route = -1;
  menu.map((o) => {
    if (o.title.toLowerCase() == removeTrailingSlash(router.pathname)) {
      route = o.id - 1;
      console.log(route);
      return;
    }
  });
  const [clicked, setClicked] = useState(route);
  return (
    <>
      <div className="w-[15%] h-[130vh] pt-[70px] flex flex-col items-center bg-[#2D9CDB]">
        <div className="flex flex-col">
          {menu.map((ele, key) => {
            return (
              <Link href={ele.link} key={key}>
                <div
                  className={`relative flex flex-row gap-[14.4px] px-5 my-3 py-3 hover:bg-[#086EA8]/[0.5] duration-[0.4s] hover:rounded-[4px] hover:cursor-pointer ${
                    route === key ? "bg-[#086EA8]" : "bg-[#2D9CDB]"
                  }`}
                  onClick={() => {
                    clicked === key ? setClicked(key) : setClicked(key);
                  }}
                >
                  <Image src={ele.icon} width={20} height={20} />
                  <p className="text-[#FFFFFF] text-base font-medium tracking-wider">
                    {ele.title}
                  </p>
                </div>
              </Link>
            );
          })}

          <div className="flex">
            <Image
              src="/Images/SidePanel/logout.svg"
              width={20}
              height={20}
              alt="icon"
            />
            <p className="text-[#FFFFFF] text-base font-medium tracking-wider">
              Log Out
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SidePanel;
