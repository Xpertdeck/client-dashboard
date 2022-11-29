import Image from 'next/image'
import React from 'react'

const PaymentPartners = (props) => {
  return (
    <>
        <div className={`bg-[#FFFFFF] flex flex-col ${props.style}`}>
            <h2 className={props.headingStyle}>{props.heading}</h2>

            <div className={`flex flex-row ${props.paymentCardStyle}`}>
                <div className={`${props.paymentStyle}`}>
                    <Image src={props.imgSrc1} width = {props.imgWidth1} height = {props.imgHeight1} alt = {props.imgAlt1}/>
                </div>
                <div className={`${props.paymentStyle}`}>
                    <Image src={props.imgSrc2} width = {props.imgWidth2} height = {props.imgHeight2} alt = {props.imgAlt2}/>
                </div>
                <div className={`${props.paymentStyle}`}>
                    <Image src={props.imgSrc3} width = {props.imgWidth3} height = {props.imgHeight3} alt = {props.imgAlt3}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default PaymentPartners