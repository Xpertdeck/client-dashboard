import React from 'react'

const ReferralCard = (props) => {
  return (
    <>
        <div className={`flex flex-col items-center ${props.referralCardStyle}`} style = {{background: "url(/Images/Referral/bg.png)" , backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
            <h2 className={props.ReferralCardHeadingStyle}>Refer A Friend!</h2>
            <p className={props.ReferralCardTextStyle}>Refer a friend and save  on every order.</p>
            <div className='relative flex border h-[42px] mt-[21px] border-dashed rounded-[11px] border-[#FFFFFF]'>
                <div className='flex flex-col items-center justify-center bg-[#EAF3F9] p-[3px] rounded-[11px] px-[30px]'>
                    <p className={props.codeStyle}>{props.code}</p>
                </div>
            </div>
            <p className='mt-[17px] font-light text-xs text-center text-[#EAF3F9] opacity-60'>Tap to Copy</p>
        </div>
    </>
  )
}

export default ReferralCard