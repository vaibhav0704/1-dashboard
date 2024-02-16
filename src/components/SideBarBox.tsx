import React from "react";

interface Props {
  text: string,
  focus: boolean
}

export const SideBarBox: React.FC<Props> = ({ text, focus }) => {
  return (
    <div className={`w-full bg-skin-background-box h-[142.5px] flex justify-center items-center text-center`}>
      <p className={`${focus ? "sidebar-text-focus" : "sidebar-text"}`}>{text}</p>
    </div>
  )
}