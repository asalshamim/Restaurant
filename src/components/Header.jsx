import React from 'react';

import Logo from '../img/Restaurang & bar.png';

const Header = () => {
    return (
        <header className='fixed z-50 w-screen p-6 px-16 bg-lime-100'>
            {/* desktop & tablet*/}
            
            <div className='hidden md:flex w-full h-full'>
                <div className='flex items-center gap-2'>
                    <img src={Logo} className='w-11 object-cover bg-transparent' alt='logo' />
                    <p className='text-headingColor text-x1 font-bold'> Restaurang perla </p>
                </div>

                <ul className='flex items-center gap-8 ml-auto'>
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">HEM</li>
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">MENY</li>
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">LUNCH</li>
                    <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">KONTAKT</li>
                </ul>
            </div>


            {/* mobile*/}
            <div className='block md:hidden w-full h-full'>

            <ul className="flex flex-col ">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  
                >
                  Home
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  
                >
                  Menu
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  
                >
                  Service
                </li>
              </ul>
            </div>


        </header>
    );
};

export default Header;
