import React from "react";
import "./SideNav.css";
import headerImg from "../Assets/instagram-img.png";
import { HiMiniHome } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { BiMessageSquareDots } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { BsThreadsFill } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";

function SideNav() {
  return (
    <div className="sidenav">
      <img className="sidenav__logo" src={headerImg} alt="logo" />
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HiMiniHome className="iconstyle" />
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <FiSearch className="iconstyle" />
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <MdOutlineExplore className="iconstyle" />
          <span>Explore</span>
        </button>
        <button className="sidenav__button">
          <BsCameraReels className="iconstyle" />
          <span>Reels</span>
        </button>
        <button className="sidenav__button">
          <BiMessageSquareDots className="iconstyle" />
          <span>Messages</span>
        </button>
        <button className="sidenav__button">
          <IoMdHeartEmpty className="iconstyle" />
          <span>Notifications</span>
        </button>
        <button className="sidenav__button">
          <FaRegPlusSquare className="iconstyle" />
          <span>Create</span>
        </button>
        <button className="sidenav__button">
          <FaRegCircle className="iconstyle" />
          <span>Profile</span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <BsThreadsFill className="iconstyle" />
          <span>Threads</span>
        </button>
        <button className="sidenav__button">
          <CgDetailsMore className="iconstyle" />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default SideNav;
