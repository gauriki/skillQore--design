import { BiSearch } from "react-icons/bi";

export function ImageCard() {
  return (
    <div className="relative">
      <div className="relative bg-gradient-to-r from-[#A386F9] [#B691F9] to-[#E1BFFA] h-[28rem] -z-[3] container mx-auto mt-2">
        <img
          src="images/banner-shapes.png"
          alt=""
          className="fixed -z-[1] w-full"
        />
      </div>
      <div className="flex flex-col absolute top-[50%] -translate-y-[50%] h-auto w-full md:pl-8">
        <h1 className="text-4xl text-center md:text-left text-white font-semibold md:text-[3.2rem] mb-[1.4rem] pl-2">
          Enabling Lifelong Learning
        </h1>
        <div className="hidden md:flex justify-between items-center bg-white rounded-[3rem] w-[30rem] md:w-[49rem] h-[3.2rem] ml-[0.2rem] relative px-2">
          <div className="hidden md:flex items-center gap-2 flex-1">
            <BiSearch className="text-[#77778D] text-lg" />
            <input
              className="border-none bg-white text-[#1d1c1c] text-lg w-full flex-1"
              type="text"
              placeholder="Enter topic or skills you want to learn"
            />
          </div>
          <div className="hidden md:flex bg-gradient-to-r from-[#FF6900] to-[#F49000] rounded-full w-10 h-7  items-center justify-center">
            <BiSearch className="text-lg text-white" />
          </div>
        </div>

        <h2 className=" text-center md:flex text-white font-bold ml-[0.9rem] mt-[0.8rem]  text-lg md:text-[1.2rem]">
          Choose from thousands of Online Courses, Videos, Articles, Books and
          Podcasts.
        </h2>
        <div className="flex flex-col items-center mt-2 gap-2">
          <div className="flex justify-between md:hidden px-4 items-center bg-white rounded-[3rem] max-w-[80vw] min-w-[80vw] h-[3.2rem] ml-[0.2rem] relative">
            <input
              type="text"
              placeholder="Search classes"
              className="flex-1"
            />
            <BiSearch className="text-[#77778D] text-lg" />
          </div>
          <div className="md:hidden flex bg-gradient-to-r from-[#FF6900] to-[#F49000] rounded-full  max-w-[80vw] min-w-[80vw] py-3 mt-2 text-white  font-semibold  items-center justify-center">
            SEARCH
          </div>
        </div>
      </div>
    </div>
  );
}
