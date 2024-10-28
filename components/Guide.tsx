import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/pill.png" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
          Experience seamless access to your medications and health information, even without internet connectivity.
           Our innovative we provides offline resources and support, ensuring you have the 
           guidance you need wherever you are. Invite your family and friends to explore wellness together, 
          and let us help you reach your health goals with confidence!
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full h-50%">
        <Image 
          src="/pharm.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">We ensure you never feel lost on your health journey</p>
                <p className="bold-16 text-green-50"></p>
              </div>
              <p className="bold-20 mt-2">Your Ultimate Destination for Health and Wellness!</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20"></p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Good Services</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide