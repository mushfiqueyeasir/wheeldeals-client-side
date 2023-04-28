import React, { useContext } from "react";
import AdminRouteAuth from "../../auth/adminRouteAUth";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import EmailTableHead from "./EmailTableHead";
import EmailTableRow from "./EmailTableRow";

const EmailPage = () => {
  const { emails } = useContext(GLOBAL_CONTEXT);

  return (
    <AdminRouteAuth>
      <section className="py-10 ">
        <div className="overflow-x-auto w-full lg:w-[80%] xl:w-[50%] mx-auto">
          {emails.length > 0 ? (
            <table className="table w-full">
              {/* head */}
              <EmailTableHead />

              <tbody>
                {emails.map((item) => (
                  <EmailTableRow key={item._id} item={item} />
                ))}
              </tbody>
            </table>
          ) : (
            <h2 className="text-center">No Email Found</h2>
          )}
        </div>
      </section>
    </AdminRouteAuth>
  );
};

export default EmailPage;
