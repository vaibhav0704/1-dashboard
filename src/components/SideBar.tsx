'use client'

import Image from "next/image";
import React, { useState } from "react";
import { SideBarBox } from "./SideBarBox";

interface Props {

}

enum Options {
  Cart= 'Cart',
  Market= 'Market',
  Settings= 'Settings',
  Logout= 'Logout'
}

const Sidebar: React.FC<Props> = () => {
  const [option, setOption] = useState<Options>(Options.Market);

  return (
    <div className="w-[320px] gap-[5px] justify-start flex flex-col ">
      <div className="w-full bg-skin-background-box h-[200px] flex justify-center items-center">
        <Image 
          src="/rooba-logo.png"
          width={63}
          height={40.95}
          content="fit"
          alt="rooba logo"
        />
      </div>
      {
        Object.values(Options).map(section => (
          <div key={section} onClick={() => setOption(Options[section])}>
            <SideBarBox 
              text={section.toString()} 
              focus={(option.toString() === section)}
            />

          </div>
        ))
      }
    </div>
  )
};

export default Sidebar
