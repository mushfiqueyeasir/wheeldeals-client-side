import React, { useContext } from "react";
import RequireAuth from "../../auth/RequireAuth";

import AdminRouteAuth from "../../auth/adminRouteAUth";
import { Link, useParams } from "react-router-dom";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/shared/Loading/Loading";

const EmailViewPage = () => {
  const { id } = useParams();
  const { emailRefetch } = useContext(GLOBAL_CONTEXT);
  const [messages, messageLoading] = useFetch({
    api: "email",
    parameter: id,
  });

  if (messageLoading) {
    return <Loading />;
  } else {
  }
  const { createdAt, name, email, subject, message } = messages[0];

  const date = new Date(createdAt);
  const year = date.getFullYear(); // 2023
  const month = date.getMonth() + 1; // months are zero-indexed, so add 1 to get the actual month number
  const day = date.getDate(); // 28
  const hours = date.getHours(); // 11
  const minutes = date.getMinutes(); // 12
  const seconds = date.getSeconds(); // 50
  const milliseconds = date.getMilliseconds();
  const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}.${milliseconds}`;

  return (
    <RequireAuth>
      <AdminRouteAuth>
        <section className="py-10  md:w-[40rem] ">
          <Link
            to="/dashboard/emails"
            className="btn btn-sm btn-outline text-xl"
            onClick={() => emailRefetch()}
          >
            <svg
              class="w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
          <div className="flex flex-col gap-y-3 pt-5">
            <div>
              <h1 className="text-2xl break-words">
                Subject: <span className="capitalize ">{subject}</span>
              </h1>
            </div>

            <div className="text-base font-[600] ">
              <div className="flex flex-col gap-y-1">
                <p className="break-words">
                  Name: <span className="font-[500]">{name}</span>
                </p>
                <p>
                  Email: <span className="font-[500]">{email}</span>
                </p>
                <p className="break-words">
                  Time: <span className="font-[500]">{formattedDate}</span>
                </p>
              </div>
            </div>
            <div>
              <p className="text-xl break-words">
                Message:{" "}
                <span className="font-[400] break-words text-base text-justify">
                  {message}
                </span>
              </p>
            </div>
          </div>
        </section>
      </AdminRouteAuth>
    </RequireAuth>
  );
};

export default EmailViewPage;
