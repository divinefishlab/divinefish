import React from 'react'
import logo from '/images/logo.png';
import dexLogo from '/images/DexLogo.png';
import teleLogo from '/images/teleLogo.png';
import xLogo from '/images/xLogo.png';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 px-2">
    <div className=" mx-auto text-center flex flex-row justify-between items-center">
    <div>
         <img className='h-10 w-10' src={logo} alt="Logo" />
      </div>
      <p className="text-xs py-2">
        Contract Address-coming soon..
      </p>

     

      <div className="mt-2">
                     <div className="social-icon-footer ">
                       <a href="https://x.com/chronialsgame"><img src={dexLogo} alt="xChronialsgame" /></a>
                       <a href="https://t.me/chronials"><img src={xLogo} alt="tchronialsgame" /></a>
                       <a href="https://pump.fun/coin/FTyT45YzDFMpZyvPQdmeMGyuNvWVCP3mT8gLZRDapump"><img src={teleLogo} alt="" /></a>
                     </div>
      </div>
      {/* <p className="text-sm py-2">
        &copy; {new Date().getFullYear()} Fred The Fish. All Rights Reserved.
      </p> */}
    </div>
  </footer>
  )
}

export default Footer