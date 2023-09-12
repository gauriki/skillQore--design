import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

export function Header() {
  return (
    <header className=" px-8 py-1 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <img
          src="images/logo.png"
          alt=""
          className=" w-24 h-12 md:w-26 md:h-16"
        />
        <div className="hidden md:block">
          <Dropdown>
            <DropdownTrigger>
              <Button className="capitalize">EXPLORE CATEGORIES</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dropdown Variants">
              <DropdownItem key="new">Business & Management</DropdownItem>
              <DropdownItem key="copy">Science</DropdownItem>
              <DropdownItem key="edit">Personal Development</DropdownItem>
              <DropdownItem key="edit">Art & Design</DropdownItem>
              <DropdownItem key="edit">Programming</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className="hidden md:flex justify-between items-center bg-white rounded-[3rem] w-[30rem]  py-1  px-2 border border-gray-600">
          <div className="hidden md:flex items-center gap-2 flex-1">
            <BiSearch className="text-[#77778D] text-lg" />
            <input
              className="border-none bg-white text-[#363537] text-lg flex-1"
              type="text"
              placeholder="Search for anything"
            />
          </div>

          <Button className="shadow-lg bg-gradient-to-r from-[#FF6900] to-[#F49000] rounded-full text-white ">
            <BiSearch className="text-lg text-white" />
          </Button>
        </div>
      </div>
      <button className="hidden md:block rounded-3xl text-[#544CF9] text-sm border-2 border-[#544CF9] font-bold px-8 py-2">
        LOG IN
      </button>
      <button className="md:hidden">
        <AiOutlineMenu />
      </button>
    </header>
  );
}
