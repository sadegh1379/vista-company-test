import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from '@heroicons/react/solid';
const Navbar = () => {
  return (
    <nav
      className="w-full flex justify-between items-center mt-2 p-3 shadow-md
          lg:rounded-full"
    >
      <div className="flex gap-3 lg:gap-5">
        <button className="rounded-full text-xs md:text-sm bg-red text-white px-3 py-2">
          ورود / ثبت نام
        </button>
        <span className="cursor-pointer">
          <Image
            alt="Mountains"
            width={40}
            height={40}
            src={"/images/shopping-cart-2.png"}
            className="h-[40px] w-[40px]"
          />
        </span>
        <div className="flex bg-gray-1 rounded-full items-center pr-5 ">
          <Image
            alt="Mountains"
            width={5}
            height={5}
            src={"/images/search.png"}
            className="w-4 h-4 cursor-pointer mx-3"
          />
          <input
            className="text-right bg-transparent flex-1 outline-none text-sm"
            placeholder="...جستجوی محصولات"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ul className="flex gap-3 items-center flex-row-reverse">
          <li className="flex items-center gap-1 cursor-pointer">
            <ChevronDownIcon className="w-5 h-5"/>
            <span className="text-sm">دسته بندی ها</span>
            <span>
              <Image
                alt="Mountains"
                width={4}
                height={4}
                src={"/images/category.png"}
                className="w-4 h-4"
              />
            </span>
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <span className="text-sm">پرفروش ترین ها</span>
            <span>
              <Image
                alt="Mountains"
                width={4}
                height={4}
                src={"/images/fire.png"}
                className="w-4 h-4"
              />
            </span>
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <span className="text-sm">تخفیف دار ها</span>
            <span>
              <Image
                alt="Mountains"
                width={4}
                height={4}
                src={"/images/ticket-discount.png"}
                className="w-4 h-4"
              />
            </span>
          </li>
        </ul>
        <Image
          alt="Mountains"
          width={5}
          height={5}
          src={"/images/big-logo.png"}
          className="w-5 h-5 lg:w-5 lg:h-5 mx-2"
        />
      </div>
    </nav>
  );
};

export default Navbar;
