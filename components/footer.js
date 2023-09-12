import { Button } from "@nextui-org/react";
import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoPinterestAlt,
} from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";

export function Footer() {
  return (
    <div className="bg-white px-8 py-4">
      <img src="images/logo.png" alt="" className="h-16 w-26" />
      <div className="grid grid-cols-3 gap-10 pt-4 pb-4">
        <div className="space-y-[2px]">
          <h1 className="text-[#363537] text-base font-bold py-2">Learning</h1>
          <p className="text-[#363537] text-base">My Account</p>
          <p className="text-[#363537] text-base">Blog</p>
          <p className="text-[#363537] text-base">Featured Courses</p>
          <p className="text-[#363537] text-base">Recommended</p>
        </div>
        <div className="space-y-[2px]">
          <h1 className="text-[#363537] text-base font-bold py-2">Skillqore</h1>
          <p className="text-[#363537] text-base">Universities</p>
          <p className="text-[#363537] text-base">Institutes</p>
          <p className="text-[#363537] text-base">Frequently Asked Questions</p>
          <p className="text-[#363537] text-base">About Us</p>
          <p className="text-[#363537] text-base">Contact Us</p>
        </div>
        <div>
          <p className="text-[#363537] text-base font-bold">
            Skillqore Newsletter
          </p>
          <p className="text-[#9a9a9a] text-base py-2">
            Keep me up to date with content, updates, and offers from Skillqore
          </p>
          <div className=" hidden md:flex justify-between border border-[#CDCDCD] rounded-3xl pl-4 w-[30rem] ">
            <input
              className="border-none bg-transparent text-[#4f4f6f]  flex-1"
              type="text"
              placeholder="Your Email"
            />

            <Button className="shadow-lg bg-gradient-to-r from-[#FF6900] to-[#F49000] rounded-r-full font-semibold text-base text-white ">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
      <div className=" flex-col  flex md:flex-row gap-4 justify-between pt-4 border-t border-t-slate-300">
        <div>
          <div className="flex gap-8">
            <p className="text-[#363537] text-base ">Privacy</p>
            <p className="text-[#363537] text-base ">Terms of Use</p>
            <p className="text-[#363537] text-base ">Cookies</p>
          </div>
          <p className="text-[#9a9a9a] text-sm pt-5">
            © 2020 Skillqore, Inc. All Rights Reserved.
          </p>
        </div>
        <div className="flex gap-8">
          <div className="bg-[#ECF5F6] p-3 flex justify-center items-center h-10 w-10">
            <TiSocialFacebook className="text-[#534BF9] text-2xl " />
          </div>
          <div className="bg-[#ECF5F6] p-3 flex justify-center items-center h-10 w-10">
            <FaTwitter className="text-[#534BF9] text-2xl " />
          </div>
          <div className="bg-[#ECF5F6] p-3 flex justify-center items-center h-10 w-10">
            <BiLogoLinkedin className="text-[#534BF9] text-2xl " />
          </div>
          <div className="bg-[#ECF5F6] p-3 flex justify-center items-center h-10 w-10">
            <BiLogoInstagram className="text-[#534BF9] text-2xl " />
          </div>
          <div className="bg-[#ECF5F6] p-3 flex justify-center items-center h-10 w-10">
            <BiLogoPinterestAlt className="text-[#534BF9] text-2xl  " />
          </div>
        </div>
      </div>
    </div>
  );
}
