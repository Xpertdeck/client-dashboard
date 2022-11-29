import React from "react";
import Balance from "../src/Components/Balance";
import PaymentPartners from "../src/Components/Payment";
import ReferralCard from "../src/Components/Referral";
import SidePanel from "../src/Components/SidePanel";
import WalletCard from "../src/Components/WalletCard";

const Wallet = () => {
  return (
    <>
      <div className="flex">
        <SidePanel />
        <div className="flex flex-col w-[100%] ml-[31px] mr-[45px] mt-[36px]">
          <div className="flex w-[100%]">
            <div className="flex flex-col w-[55%]"> 
              <Balance
                style="bg-[#FFFFFF] h-[210px] w-full rounded-[12px]"
                heading="Total Balance"
                headingClass="text-[16px] font-semibold text-justify text-[#2D9CDB] mt-[22px] ml-[16px]"
                moneySectionStyle="flex flex-row items-center justify-center mt-[20px]"
                amount="187.00"
                amountStyle="ml-[16px] !font-semibold text-[28px] text-[#565D5C] text-justify"
              />
              <WalletCard
                amount="15.00"
                mainStyle="mt-[24px] h-[310px] flex flex-col"
                buttonAlignment="flex-row ml-[22px] !mt-[48px]"
              />
            </div>
            <PaymentPartners
              style="w-[40%] boxShadow rounded-lg bg-[##FFFFFF] h-[376px] ml-[36px]"
              heading="Payment Partners"
              headingStyle="text-[16px] font-semibold text-[#2D9CDB] mt-[22px] ml-[22px]"
              paymentCardStyle="flex flex-col items-center mt-[20px]"
              paymentStyle="w-[70%] h-[70px] flex items-center justify-center boxShadow2 mt-[16px]"
              imgSrc1="/Images/Payment/stripe.png"
              imgSrc2="/Images/Payment/paypal.png"
              imgSrc3="/Images/Payment/razorpay.png"
              imgWidth1="75"
              imgWidth2="100"
              imgWidth3="145"
              imgHeight1="36"
              imgHeight2="48"
              imgHeight3="31"
              imgAlt1="stripe"
              imgAlt2="paypal"
              imgAlt3="razorpay"
            />
          </div>
          <ReferralCard referralCardStyle = "w-[100%] h-[220px] mt-[25px] gradientBG" ReferralCardHeadingStyle = "mt-[24px] text-[#FFFFFF] text-[36px] font-[700] tracking-wider" ReferralCardTextStyle = "mt-[14px] text-[#FFFFFF] text-[14px] font-normal text-center tracking-wider" code= "MOSJ220R" codeStyle = "text-[#2784B9] text-center text-[18px] font-[600] tracking-[0.2em]"/>
        </div>
      </div>
    </>
  );
};

export default Wallet;
