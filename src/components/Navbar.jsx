import { bagImg, logoImg } from '../utils';
import React from 'react';
//import { Navigate,useNavigate } from "react-router-dom";



const Navbar = () => {

  const phone1 = () => {
    window.location.href = "https://in.nothing.tech/pages/phone-1";
  };
  const phone2 = () => {
    window.location.href = "https://in.nothing.tech/pages/phone-2";
  };
  const store = () => {
    window.location.href = "https://in.nothing.tech/pages/store";
  };
  const community = () => {
    window.location.href = "https://nothing.community/";
  };
  const support = () => {
    window.location.href = "https://in.nothing.tech/pages/support-centre";
  };

  
  return (
    <header className="w-full py-2 sm:px-10 px-5 flex justify-between items-center z-index-2">
      <nav className="flex w-full screen-max-width py-2">
        <img src={logoImg} alt="Nothing(R)" width={90} height={10} />

        <div className="flex flex-1 justify-center max-sm:hidden">

            <div  className="flex items-baseline gap-7 text-sm px-5 ">
              <button onClick={phone1} className="cursor-pointer text-gray hover:text-white transition-all" >Phone(1)</button>
              <button onClick={phone2} className="cursor-pointer text-gray hover:text-white transition-all">Phone(2)</button>
              <button onClick={community} className="cursor-pointer text-gray hover:text-white transition-all">Community</button>
              <button onClick={support} className="cursor-pointer text-gray hover:text-white transition-all">Support</button>
            </div>
        
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <button onClick={store}><img src={bagImg} alt="bag" width={18} height={18} /></button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar