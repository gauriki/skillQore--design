/* eslint-disable @next/next/no-html-link-for-pages */
import { Button } from "@nextui-org/react";
import React from "react";
import { CategoriesCard } from "./categoriesCard";
import { ExploreCard } from "./exploreCard";
import { PostCard } from "./postCard";
import { SkillQoreCard } from "./skillQoreCard";

export function Section() {
  return (
    <section>
      <div className="flex flex-col items-center py-14 bg-white">
        <div className=" hidden md:flex justify-between border border-[#CDCDCD] rounded-3xl pl-4 pr-1 py-[3px] w-[40rem] ">
          <input
            className="border-none bg-transparent text-[#77778D] w-full flex-1"
            type="text"
            placeholder="Enter your email ID"
          />

          <Button className="shadow-lg bg-gradient-to-r from-[#FF6900] to-[#F49000] rounded-full text-white w-[14rem]">
            JOIN US TODAY
          </Button>
        </div>
        <p className="mt-3">
          We take your privacy seriously.{" "}
          <a href="/#" className="pointer text-[#2c21f5] font-medium text-base">
            Click here
          </a>{" "}
          to learn more.
        </p>
      </div>
      <div className="bg-[#F5F5F5] px-4 py-6">
        <p className="text-3xl text-center font-bold text-[#4F4F7D]">
          Top Categories
        </p>

        <div className="grid grid-cols-2 md:grid md:grid-cols-6 gap-6 pt-3">
          <CategoriesCard
            logo="images/business.svg"
            category="Business & Management"
          />
          <CategoriesCard
            logo="images/office.svg"
            category="Office Productivity"
          />
          <CategoriesCard logo="images/Science.svg" category="Science" />
          <CategoriesCard logo="images/Lifestyle.svg" category="Lifestyle" />
          <CategoriesCard
            logo="images/Personalgrowth.svg"
            category="PersonalDevelopment"
          />
          <CategoriesCard
            logo="images/art&design.svg"
            category="Art & Design"
          />
          <CategoriesCard
            logo="images/Developmentprogramming.svg"
            category="Programming"
          />
          <CategoriesCard
            logo="images/Computerscience.svg"
            category="Computer Science"
          />
          <CategoriesCard
            logo="images/mathematics.svg"
            category="Mathematics"
          />

          <CategoriesCard
            logo="images/Finance&accounting.svg"
            category="Finance & Accounting"
          />
          <CategoriesCard
            logo="images/Socialscience.svg"
            category="Social Sciences"
          />

          <CategoriesCard
            logo="images/Health&medicine.svg"
            category="Health & Medicine"
          />
        </div>
      </div>
      <div className="pt-4 bg-white">
        <p className="text-3xl font-bold text-center text-[#4F4F6F]">
          Recent Posts
        </p>
        <div className="flex gap-2 overflow-x-auto md:gap-8 md:px-6 px-2 pt-8">
          <PostCard
            image="images/Onlinecourse.jpg"
            title="A guide on How do Online Courses Work"
            description="How do Online Courses Work: Everything you Should Know"
          />
          <PostCard
            image="images/people.jpg"
            title="Why Continuous Learning is Important"
            description="Education can provide you knowledge. But education and knowledge gaining are life-long processes."
          />
        </div>
        <div className="flex py-6 justify-center">
          <Button className=" shadow-lg bg-gradient-to-r from-[#FF6900] to-[#F49000] text-lg rounded-full text-white">
            EXPLORE MORE
          </Button>
        </div>
      </div>
      <div className="bg-[#F5F5F5] py-6 px-20">
        <h1 className="text-center text-[#4f4f6f] text-3xl font-bold">
          Explore Skillqore
        </h1>
        <div className="grid-cols-2 gap-80  grid md:grid-cols-3  py-8">
          <ExploreCard
            title="Online Course Providers"
            name1="LinkedIn Learning"
            name2="Coursera"
            name3="edX"
            name4="swayam"
            name5="FUNMOOC"
            name6="Miriadax"
            name7="CanvasNetwork"
            name8="Datacamp"
            name9="ThaiMooc"
            name10="OpenSAP"
          />
          <ExploreCard
            title="Languages"
            name1="English"
            name2="Deutsch"
            name3="Français"
            name4="Español"
            name5="Japanese"
            name6="Portuguese"
            name7="Italiano"
            name8="Русский"
            name9="Thai"
            name10="اللغة العربية"
          />
          <ExploreCard
            title="Categories"
            name1="Business & Management"
            name2="Office Productivity"
            name3="Science"
            name4="Lifestyle"
            name5="Personal Development"
            name6="Art & Design"
            name7="Programming"
            name8="Computer Science"
            name9="Mathematics"
            name10="Finance & Accounting"
          />
        </div>
      </div>
      <SkillQoreCard />
    </section>
  );
}
