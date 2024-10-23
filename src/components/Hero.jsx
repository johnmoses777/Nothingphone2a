import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }
  const flipkart = () =>
  {
    window.location.href = "https://www.flipkart.com/nothing-phone-2a-5g-black-128-gb/p/itm85c6bca5edadc?pid=MOBGVMQSZWSCFFWT";
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('reisze', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className="screen-max-width">
      {/* <div className="h-full w-full flex-center common-padding flex-col screen-max-width"> */}
        <video className="Hero-video" autoPlay loop muted playsInline={true} key={videoSrc}>
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="content">
            <p color="white" id="hero" className="hero-title text-5xl lg:text-5xl font-semibold">Nothing Phone 2(a)</p>
        </div>
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <a onClick={flipkart} href="#highlights" className="btn">Buy</a>
        </div>
        
      {/* </div> */}

      
    </section>
  )
}

export default Hero