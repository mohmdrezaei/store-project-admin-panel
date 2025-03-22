"use client";
import { useState } from "react";
import { Button, Divider, Menu } from "@mui/material";
import { RiMenu3Fill } from "react-icons/ri";
import { FaRegBell, FaRegUser } from "react-icons/fa";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import { IoMdLogOut } from "react-icons/io";

function Header() {
  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const openMyAcc = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };
  return (
    <header className="w-full h-auto py-2 pr-52 pl-7 bg-[#fff] border-b border-[rgba(0,0,0,0.1)] flex items-center justify-between">
      <div className="part1">
        <Button className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px]  !text-[rgba(0,0,0,0.8)]">
          <RiMenu3Fill className="text-[18px] text-[rgba(0,0,0,0.8)]" />
        </Button>
      </div>

      <div className="part2 w-[40%] flex justify-end items-center gap-5">
      <Button className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px]  !text-[rgba(0,0,0,0.8)]">
          
        <Box sx={{ color: "action.active" }}>
          <Badge color="error" variant="dot">
            <FaRegBell className="text-[20px]" />
          </Badge>
        </Box>
        </Button>

        <div className="relative">
          <div
            className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer"
            onClick={handleClickMyAcc}
          >
            <img
              className="w-full"
              src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg"
              alt="avatar"
            />
          </div>
          <Menu
            anchorMyAcc={anchorMyAcc}
            id="account-menu"
            open={openMyAcc}
            onClose={handleCloseMyAcc}
            onClick={handleCloseMyAcc}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 40,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: "left", vertical: "top" }}
            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          >
            <MenuItem onClick={handleCloseMyAcc} className="!bg-white">
              <div className="flex items-center gap-3">
                <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer">
                  <img
                    className="w-full"
                    src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg"
                    alt="avatar"
                  />
                </div>
                <div className="info">
                  <h3 className="text-[16px] font-[500]  leading-6">
                    محمد رضایی
                  </h3>
                  <p className="text-[12px] font-[400] opacity-70">
                    mhwmdrz9@gmail.com
                  </p>
                </div>
              </div>
            </MenuItem>
            <Divider className="!mx-2" />
            <MenuItem
              onClick={handleCloseMyAcc}
              className="flex items-center gap-3"
            >
              <FaRegUser className="text-[16px]" />{" "}
              <span className="text-[14px]">حساب کاربری</span>
            </MenuItem>
            <MenuItem
              onClick={handleCloseMyAcc}
              className="flex items-center gap-3 "
            >
              <IoMdLogOut className="text-[18px] text-red-600" />{" "}
              <span className="text-[14px] text-red-600">خروج</span>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
