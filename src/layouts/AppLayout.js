import { createContext, useState } from "react";
import Footer from "../components/shared/footer/Footer";
import NavBar from "../components/shared/navBar/NavBar";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useSession from "../hooks/useSession";

import Slider from "../components/shared/slider/Slider";
import Loading from "../components/shared/Loading/Loading";
import RequireAuth from "../auth/RequireAuth";
export const GLOBAL_CONTEXT = createContext();

const AppLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const location = useLocation().pathname.slice(0, 10);
  const [product, productLoading, productRefetch] = useFetch({
    api: "product",
  });
  const [customers, customersLoading, customerRefetch] = useFetch({
    api: "user",
  });
  const [orders, orderLoading, ordersRefetch] = useFetch({
    api: "order",
  });
  const [emails, emailsLoading, emailRefetch] = useFetch({
    api: "email",
  });

  const [user, userLoading, userRefetch] = useSession();

  const [cart, cartLoading, cartRefetch] = useFetch({
    api: "cart",
    parameter: user?.phoneNumber,
  });
  const [userOrder, userOrderLoading, userOrderRefetch] = useFetch({
    api: "order",
    parameter: user?.phoneNumber,
  });

  if (
    productLoading ||
    userLoading ||
    customersLoading ||
    cartLoading ||
    orderLoading ||
    userOrderLoading ||
    emailsLoading
  ) {
    return <Loading />;
  }

  const value = {
    user,
    userRefetch,
    product,
    productRefetch,
    customers,
    customerRefetch,
    cart,
    cartRefetch,
    orders,
    ordersRefetch,
    userOrder,
    userOrderRefetch,
    emails,
    emailRefetch,
  };

  return (
    <GLOBAL_CONTEXT.Provider value={value}>
      {location === "/dashboard" ? (
        <RequireAuth>
          <div className="flex">
            <Slider
              open={open}
              setOpen={setOpen}
              role={user?.role}
              status={user?.status}
            />

            <div
              className={`m-3 text-xl text-gray-900 font-semibold w-full ${
                open
                  ? "ml-[24rem] md:ml-[19rem] duration-500 opacity-[0]  md:opacity-100 scale-0 md:scale-100"
                  : "ml-[4.5rem] duration-500"
              }`}
            >
              {children}
            </div>
          </div>
        </RequireAuth>
      ) : (
        <>
          <NavBar />
          <main className="min-h-[80vh]">{children}</main>
          <Footer />
        </>
      )}
    </GLOBAL_CONTEXT.Provider>
  );
};

export default AppLayout;
