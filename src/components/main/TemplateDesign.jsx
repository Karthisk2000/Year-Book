import React from 'react'
import LoGoImage from './logo.png'


export default function TemplateDesign() {
    console.log('\n -------------------------- template design --------------------')

    return (
        <>
        {
            [1, 2, 3].map((d,i)=><div className='group w-full rounded-md overflow-hidden bg
            -[#ffffff12] cursor-pointer'>
                <img className='w-full h-full rounded-md overflow-hidden' src={LoGoImage} alt='' />
            </div>)
        }
        </>
    )

}