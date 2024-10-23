import React, { useRef } from 'react'
import { chipImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            All New OS.
            <br /> Powered by Android 14.
          </h2>

          <p className="hiw-subtitle">
          Nothing OS 2.0 allows interactions with your smartphone to be more intentional and mindful. Powerfully efficient. Refreshingly simple.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="relative h-[50vh] w-full flex items-center">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p>
          </div>

          <div className="hiw-text-container">
              <div className="flex flex-1 justify-center flex-col">
                <p className="hiw-text g_fadeIn">
                  Nothing OS delivers the  {' '}
                  <span className="text-white">
                  best of Android
                  </span>
                  with a fast and smooth experience rooted in utility and functional customisation.We’ve reimagined home and lock screen utility so you can shortcut to apps without getting distracted. Customise everything from app labels and grid design to widget size and colour themes. Now with new folder layouts and illustrated covers.
                </p>
              </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="hiw-text">New Nothng OS 2.O</p>
                <p className="hiw-bigtext">Nothing More, Nothing Less</p>
                <p className="hiw-text"></p>
              </div>
              </div>
          </div>
    </section>
  )
}

export default HowItWorks