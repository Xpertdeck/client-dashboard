import Image from "next/image";
import React, { useRef, useState } from "react";

const ChatScreen = () => {
  const [file, setFile] = useState(null);
  const hiddenFileInput = useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleUpload = (event) => {
    const fileUploaded = event.target.files[0];
    setFile(fileUploaded);
  };
  return (
    <>
      <div className="w-[60%] h-[705px] xl:h-[675px] bg-[#FFFFFF] boxShadow3 ml-[36px]">
        <div className="bg-[#2D9CDB] flex items-center justify-center h-[50px] chatHead">
          <p className="text-[#FFFFFF] text-base font-semibold leading-[24px]">
            Leave us a Message
          </p>
        </div>

        <div className="flex mt-[36px] ml-[22px] items-end">
          <Image
            src="/Images/Common/Avtar.svg"
            width={40}
            height={40}
            alt="sender"
          />
          <div className="flex flex-row items-center p-[16px] sender w-[68%] ml-[16px]">
            <p className="text-[#565D5C] text-[10px] font-normal leading-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex mt-[22px] mr-[22px] items-end justify-end">
          <div className="flex flex-row items-center p-[16px] receiver w-[68%] mr-[16px]">
            <p className="text-[#FFFFFF] text-[10px] font-normal leading-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <Image
            src="/Images/Common/Avtar.svg"
            width={40}
            height={40}
            alt="sender"
          />
        </div>
        <div className="flex mt-[22px] ml-[22px] items-end">
          <Image
            src="/Images/Common/Avtar.svg"
            width={40}
            height={40}
            alt="sender"
          />
          <div className="flex flex-row items-center p-[16px] sender w-[68%] ml-[16px]">
            <p className="text-[#565D5C] text-[10px] font-normal leading-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua tempor
              incididunt ut labore et dolore magna aliqua magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex mt-[22px] mr-[22px] items-end justify-end">
          <div className="flex flex-row items-center p-[16px] receiver w-[68%] mr-[16px]">
            <p className="text-[#FFFFFF] text-[10px] font-normal leading-[15px]">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <Image
            src="/Images/Common/Avtar.svg"
            width={40}
            height={40}
            alt="sender"
          />
        </div>

        <div className="flex items-center justify-center relative mt-[22px]">
          <div className="border-t h-[0px] w-[90%] border-[#000000] opacity-20"></div>
          <p className="text-[9px] font-normal text-[#565D5C] absolute bg-[#ffffff] px-[4px]">
            <span className="opacity-50">Today</span>
          </p>
        </div>

        <div className="flex mt-[22px] mr-[22px] items-end justify-end">
          <div className="flex flex-row items-center p-[16px] receiver w-[68%] mr-[16px]">
            <p className="text-[#FFFFFF] text-[10px] font-normal leading-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <Image
            src="/Images/Common/Avtar.svg"
            width={40}
            height={40}
            alt="sender"
          />
        </div>

        <div className="flex mt-[36px] ml-[22px] items-end">
          <Image
            src="/Images/Common/Avtar.svg"
            width={40}
            height={40}
            alt="sender"
          />
          <div className="flex flex-row items-center p-[16px] sender w-[68%] ml-[16px]">
            <div class="typing">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center bg-[#2D9CDB] justify-center rounded-b-[12px] mt-[40px] w-full h-[45px]">
          <div className="bg-[#ffffff] w-[95%] h-[38px] rounded-[4px] flex items-center px-[22px]">
            <div className="cursor-pointer" onClick={handleClick}>
              <Image
                src="/Images/Common/attach2.svg"
                width={24}
                height={24}
                alt="attach"
              />
            </div>
            <input
              type="file"
              ref={hiddenFileInput}
              onChange={handleUpload}
              className="hidden"
            />
            <input
              type="text"
              className=" text-[12px] focus:outline-none ml-[22px] text-[#151515] opacity-[0.32] w-[80%]"
              placeholder="Tye your message..."
            />
            <div className="cursor-pointer ml-[22px]" onClick={handleClick}>
              <Image
                src="/Images/Common/send.svg"
                width={28}
                height={28}
                alt="attach"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatScreen;
