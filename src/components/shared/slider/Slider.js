import React, { useContext } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { TbDeviceAnalytics } from "react-icons/tb";

import { BsFillPersonPlusFill } from "react-icons/bs";
import { MdAddBox, MdPendingActions } from "react-icons/md";
import { RiMotorbikeFill, RiAdminFill } from "react-icons/ri";
import {
  AiOutlineUser,
  AiOutlineLogout,
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineMail,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { GLOBAL_CONTEXT } from "../../../layouts/AppLayout";

const Slider = ({ open, setOpen, role, status }) => {
  const { user, userRefetch } = useContext(GLOBAL_CONTEXT);
  const handleLogout = () => {
    sessionStorage.clear();
    userRefetch();
  };

  const menus =
    user.role === "admin"
      ? [
          {
            name: "Analytics",
            link: "dashboard/analytics",
            icon: TbDeviceAnalytics,
          },
          {
            name: "Emails",
            link: "dashboard/emails",
            icon: AiOutlineMail,
          },
          {
            name: "products",
            link: "dashboard/product",
            icon: RiMotorbikeFill,
          },
          {
            name: "Add product",
            link: "dashboard/addProduct",
            icon: MdAddBox,
          },
          {
            name: "Customer List",
            link: "dashboard/customers",
            icon: IoIosPeople,
          },
          {
            name: "Add Customer",
            link: "dashboard/addCustomer",
            icon: BsFillPersonPlusFill,
          },
          {
            name: "Order List",
            link: "dashboard/orderList",
            icon: MdPendingActions,
            margin: true,
          },
          { name: "admin profile", link: "dashboard/admin", icon: RiAdminFill },
          { name: "Home", link: "/home", icon: AiOutlineHome },
        ]
      : [
          { name: "Profile", link: "dashboard/profile", icon: AiOutlineUser },
          { name: "cart", link: "dashboard/cart", icon: AiOutlineShoppingCart },
          {
            name: "my orders",
            link: "dashboard/userOrders",
            icon: MdPendingActions,
            margin: true,
          },

          { name: "Home", link: "/home", icon: AiOutlineHome },
        ];

  return (
    <section
      className={`bg-[#0e0e0e] min-h-screen fixed ${
        open ? "w-[24rem] md:w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-2 relative capitalize">
        {menus.map((menu, i) => (
          <div key={i}>
            <NavLink
              to={status !== "inactive" && menu?.link}
              className={` ${
                menu?.margin && "mb-4"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md disabled ${
                status === "inactive" && "cursor-not-allowed"
              }`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
            </NavLink>
            {menu?.margin && <hr />}
          </div>
        ))}

        <button
          onClick={handleLogout}
          className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
        >
          <div>{React.createElement(AiOutlineLogout, { size: "20" })}</div>
          <h2
            style={{
              transitionDelay: `${menus.length + 3}00ms`,
            }}
            className={`whitespace-pre duration-500 ${
              !open && "opacity-0 translate-x-28 overflow-hidden"
            }`}
          >
            Logout
          </h2>
        </button>
      </div>
    </section>
  );
};

export default Slider;
