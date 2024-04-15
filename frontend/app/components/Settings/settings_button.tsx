'use client'

import React from 'react';
import { FaStar } from "react-icons/fa";

interface SettingsButtonProps {
  Icon: typeof FaStar;
  iconSize: number;
  title: string;
  currentSetting: string;
  setSetting: (page: "Customization" | "Chat" | "") => void;
  setSettingString: "Customization" | "Chat" | "";
}

const SettingsButton: React.FC<SettingsButtonProps> = ({ Icon, iconSize, title, currentSetting, setSetting, setSettingString }) => {

  return (
    <button className={`btn lg:btn-lg flex items-center justify-center border-none ${currentSetting === setSettingString ? ("bg-primary-verba hover:bg-white") : "bg-verba-bg text-text-alt-verba"}`} onClick={(e) => { setSetting(setSettingString) }}>
      <Icon size={iconSize} />
      <p className="sm:hidden md:flex md:text-base lg:text-lg">{title}</p>
    </button>
  );
};

export default SettingsButton;