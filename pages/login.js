import Image from "next/image";
import Link from "next/link";
import React from "react";
import CommonButton from "../src/Components/Button";

const login = () => {
  return (
    <>
      <div className="flex -my-[20px] h-[100vh]">
        <div
          className="w-[50%] flex flex-col items-center justify-center"
          style={{
            background: "url(/Images/Login/hero.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="flex flex-col items-center w-[72%]">
            <Image src="/Images/Login/Logo.png" width = {403} height = {97}/> 
            <p className="text-[#EAF3F9] text-sm font-light text-justify px-[55px] mt-[42px] tracking-wider">
              Our goal is to provide specialized and tailored service to our
              students who struggle with university assignments.We offer a range
              of services in the three main categories, which are Assignment
              Assistance, Assignment Writing, and Assignment Editing.
            </p>
          </div>
        </div>
        <div className="w-[50%] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <h2 className="text-[36px] text-[#151515] font-semibold text-center capitalize">
              Welcome
            </h2>
            <h3 className="text-[14px] text-[#565D5C] font-light text-center tracking-wider w-[80%] mt-[16px] leaing-[136%]">
              To keep connected, please login using your email and password
            </h3>

            <div className="w-[100%] flex items-center pl-[12px] bg-[#F7FAFF] h-[40px] rounded-lg border border-[#2D9CDB]">
              <Image
                src="/images/Login/person.svg"
                width={22}
                height={22}
                alt="User name"
              />
              <input
                type="text"
                placeholder="User Name"
                className="w-[90%] focus:outline-none bg-[transparent] text-[16px] font-light tracking-wider text-[#ACACAC] ml-[18px]"
              />
            </div>
            <div className="w-[100%] flex items-center mt-[20px] pl-[12px] bg-[#F7FAFF] h-[40px] rounded-lg border border-[#2D9CDB]">
              <Image
                src="/images/Login/person.svg"
                width={22}
                height={22}
                alt="User name"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-[90%] focus:outline-none bg-[transparent] text-[16px] font-light tracking-wider text-[#ACACAC] ml-[18px]"
              />
            </div>
            <div className="w-full mt-[46px]">
              <CommonButton
                buttonLink="/"
                buttonStyle="gradientBG w-full rounded-lg"
                buttonText="Login"
                buttonFontStyle="text-[#F5FFFA] text-[18px] font-semibold py-[8px]"
              />
            </div>
            <p className="text-sm font-light text-[#000000] tracking-wider text-center mt-[25px]">
              Not a member yet! Fill our form <Link href = "/quote" className = "text-[#2D9CDB] underline">Today</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
