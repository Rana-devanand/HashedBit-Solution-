import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

function Footer() {
  const fb = { color: "0360F0", fontSize: "1.8rem " };
  const tw = { color: "black", fontSize: "1.8rem" };
  const ins = { color: "pink", fontSize: "1.8rem" };
  const you = { color: "red", fontSize: "1.8rem" };
  const pin = { color: "hotpink", fontSize: "1.8rem" };
  const lin = { color: "0D30CA", fontSize: "1.8rem" };
  const share = { color: "green", fontSize: "1.8rem" };

  return (
    <div className="w-full h-52 bg-zinc-800 pt-10">
      <div className="flex justify-center items-center gap-4">
        <FaFacebook style={fb} />
        <FaSquareXTwitter style={tw} />
        <FaInstagram style={ins} />
        <FaYoutube style={you} />
        <FaPinterest style={pin} />
        <FaLinkedin style={lin} />
        <FaShareAlt style={share} />
      </div>
      <div className="flex justify-center items-start text-white pt-3 text-sm">
        <b>Copyright 2024 XYZ Entertainment Pvt. Ltd. All Rights Reserved.</b>
      </div>
      <p className="pt-1 font-sans text-white text-sm">
        The content and images used on this site are copyright protected and
        copyrights vests with the respective owners. The usage of the content
        and images on this website is intended to promote the works and no
        endorsement of the artist shall be implied. Unauthorized use is
        prohibited and punishable by law.
      </p>
    </div>
  );
}

export default Footer;
