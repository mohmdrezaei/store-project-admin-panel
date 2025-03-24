"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@mui/material";
import { RxDashboard } from "react-icons/rx";
import { FaRegImage } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiProductHuntLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";

function Sidebar({ children }) {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const isOpenSubMenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };
  return (
    <div>
      <div className="fixed top-0 right-0 bg-[#fff] w-[18%] h-full border-l border-[rgba(0,0,0,0.1)] py-2 px-2">
        <div className="py-2 w-full">
          <Link href="/">
            <img
              src="https://ecme-react.themenate.net/img/logo/logo-light-full.png"
              alt=""
            />
          </Link>
        </div>

        <ul className="mt-4 ">
          <li>
            <Button
              className="w-full !font-[600] !py-3  !justify-start gap-3 text-[14px]
             hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.8)]"
            >
              <RxDashboard className="text-[20px]" /> <span>پیشخوان</span>
            </Button>
          </li>
          <li>
            <Button
              className="w-full !font-[500] !py-3 !justify-start gap-3 text-[14px]
             hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.8)]"
              onClick={() => isOpenSubMenu(1)}
            >
              <FaRegImage className="text-[20px]" /> <span>اسلایدر</span>
              <span className="mr-auto w-[30px] h-[30px] flex items-center justify-center">
              <FaAngleDown className={`transition-all ${subMenuIndex ===1 ? "rotate-180" : ""}`} />
              </span>
            </Button>

            <Collapse isOpened={subMenuIndex === 1 ? true : false}>
              <ul className="w-full">
                <li className="w-full">
                  <Button
                    className="!text-[rgba(0,0,0,0.6)] !justify-start !w-full 
                  !text-[13px] !font-[600] !pr-9 gap-3"
                  >
                    <span className="block w-[6px] h-[6px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>{" "}
                    لیست اسلاید ها
                  </Button>
                </li>
                <li className="w-full">
                  <Button
                    className="!text-[rgba(0,0,0,0.6)] !justify-start
                   !text-[13px] !font-[600] !w-full !pr-9 gap-3"
                  >
                    <span className="block w-[6px] h-[6px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>{" "}
                    افزودن اسلاید صفحه اصلی
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Button
              className="w-full !font-[500] !py-3 !justify-start gap-3 text-[14px]
             hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.8)]"
            >
              <FiUsers className="text-[20px]" /> <span>مدیریت کاربران</span>
            </Button>
          </li>
          <li>
            <Button
              className="w-full !font-[500] !py-3 !justify-start gap-3 text-[14px]
             hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.8)]"
              onClick={() => isOpenSubMenu(3)}
            >
              <RiProductHuntLine className="text-[20px]" /> <span>مدیریت محصولات</span>
              <span className="mr-auto w-[30px] h-[30px] flex items-center justify-center">
              <FaAngleDown className={`transition-all ${subMenuIndex ===3 ? "rotate-180" : ""}`} />
              </span>
            </Button>

            <Collapse isOpened={subMenuIndex === 3 ? true : false}>
              <ul className="w-full">
                <li className="w-full">
                  <Button
                    className="!text-[rgba(0,0,0,0.6)] !justify-start !w-full 
                  !text-[13px] !font-[600] !pr-9 gap-3"
                  >
                    <span className="block w-[6px] h-[6px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>{" "}
                    لیست محصولات
                  </Button>
                </li>
                <li className="w-full">
                  <Button
                    className="!text-[rgba(0,0,0,0.6)] !justify-start
                   !text-[13px] !font-[600] !w-full !pr-9 gap-3"
                  >
                    <span className="block w-[6px] h-[6px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>{" "}
                  افزودن محصول جدید
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Button
              className="w-full !font-[500] !py-3 !justify-start gap-3 text-[14px]
             hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.8)]"
              onClick={() => isOpenSubMenu(4)}
            >
              <TbCategory className="text-[20px]" /> <span>مدیریت دسته بندی ها</span>
              <span className="mr-auto w-[30px] h-[30px] flex items-center justify-center">
              <FaAngleDown className={`transition-all ${subMenuIndex ===4 ? "rotate-180" : ""}`} />
              </span>
            </Button>

            <Collapse isOpened={subMenuIndex === 4 ? true : false}>
              <ul className="w-full">
                <li className="w-full">
                  <Button
                    className="!text-[rgba(0,0,0,0.6)] !justify-start !w-full 
                  !text-[13px] !font-[600] !pr-9 gap-3"
                  >
                    <span className="block w-[6px] h-[6px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>{" "}
                    لیست دسته بندی ها
                  </Button>
                </li>
                <li className="w-full">
                  <Button
                    className="!text-[rgba(0,0,0,0.6)] !justify-start
                   !text-[13px] !font-[600] !w-full !pr-9 gap-3"
                  >
                    <span className="block w-[6px] h-[6px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>{" "}
                    افزودن دسته بندی جدید
                  </Button>
                </li>
                <li className="w-full">
                  <Button
                    className="!text-[rgba(0,0,0,0.6)] !justify-start
                   !text-[13px] !font-[600] !w-full !pr-9 gap-3"
                  >
                    <span className="block w-[6px] h-[6px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>{" "}
                    لیست زیر دسته ها
                  </Button>
                </li>
                <li className="w-full">
                  <Button
                    className="!text-[rgba(0,0,0,0.6)] !justify-start
                   !text-[13px] !font-[600] !w-full !pr-9 gap-3"
                  >
                    <span className="block w-[6px] h-[6px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>{" "}
                    افزودن زیر دسته جدید
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Button
              className="w-full !font-[500] !py-3 !justify-start gap-3 text-[14px] 
            hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.8)]"
            >
              <IoBagCheckOutline className="text-[20px]" />{" "}
              <span>مدیریت سقارشات</span>
            </Button>
          </li>
          <li className="">
            <Button
              className="w-full !font-[500] !py-3  !justify-start gap-3 text-[14px] 
            hover:!bg-[#f1f1f1] !text-[rgba(0,0,0,0.8)] hover:!text-red-600"
            >
              <IoMdLogOut className="text-[20px]" />{" "}
              <span>خروج از حساب کاربری</span>
            </Button>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
}

export default Sidebar;
