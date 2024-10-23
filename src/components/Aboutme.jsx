import React from 'react'
import { instaImg, johnImg, linkedinImg, mailImg } from '../utils';




const Aboutme = () => {

  const insta = () => {
      window.location.href = "https://www.instagram.com/_john_moses_?igsh=dzE3bGZwZng3aTRo";
  };
  const mail = () => {
    window.location.href = "https://www.johnmoses80195@gmail.com";
  };
  const linkedin = () => {
    window.location.href = "https://www.linkedin.com/in/johnmosesch";
  };
  return (
    <section className="w-screen overflow-hidden h-full bg-zinc normal-padding">
        <div className="screen-max-width">
            <div className="mb-12 w-full">
                <h2 id="title" className="normal-heading">Designed by</h2>
            </div>
            <div className="hiw-text-container">
               <div className="flex gap-7">
                   <p className="hiw-text g_fadeIn">
                       <img src={johnImg} width={180} height={180}/>    
                    </p>
                    <p className="hiw-bigtext  g_fadeIn"><br/>John Moses</p>
                 </div>
                 
   
                 <div className="flex-1 flex justify-center flex-col g_fadeIn">
                   <p on onClick={insta} className="hiw-text flex cursor-pointer text-gray hover:text-white transition-all gap-2"><img src={instaImg} alt="right" className="ml-2" width={27} height={2}/> Instagram : _john_moses_</p>
                   <br/>
                   <p on onClick={linkedin} className="hiw-text flex cursor-pointer text-gray hover:text-white transition-all gap-2"><img src={linkedinImg} alt="right" className="ml-2" width={27} height={2}/> Linkedin : johnmosesch</p>
                   <br/>
                   <p on onClick={mail} className="hiw-text flex cursor-pointer text-gray hover:text-white transition-all gap-2"><img src={mailImg} alt="right" className="ml-2" width={27} height={2}/> Mail : johnmoses80195@gmail.com</p>
                   <br/>
                   <p className="hiw-text"></p>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutme