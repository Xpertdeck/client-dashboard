import Link from 'next/link'
import React from 'react'

const CommonButton = (props) => {
  return (
    <>
        <Link href={props.buttonLink}>
            <div className={`flex items-center justify-center ${props.buttonStyle}`}>
                <p className={props.buttonFontStyle}>{props.buttonText}</p>
            </div>
        </Link>
    </>
  )
}

export default CommonButton