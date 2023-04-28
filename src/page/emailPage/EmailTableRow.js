import React, { useContext } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Swal from "sweetalert2";
import { deleteItem } from "../../hooks/delete";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

const EmailTableRow = ({ item }) => {
  const { emailRefetch } = useContext(GLOBAL_CONTEXT);
  const { _id, name, subject, opened } = item;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem({ api: "email", id: _id, refetch: emailRefetch });
      }
    });
  };

  return (
    <tr className="font-[500] text-base">
      <td
        className={`hidden lg:table-cell ${
          opened === "false" && "bg-yellow-100"
        }`}
      >
        <div className="flex items-center space-x-3">
          <div className="capitalize text-base font-[500]">{name}</div>
        </div>
      </td>
      <td className={` ${opened === "false" && "bg-yellow-100"} capitalize`}>
        {subject.length > 15 ? subject.slice(0, 15) + "..." : subject}
        <br />
      </td>
      <td
        className={`text-xl text-white ${
          opened === "false" && "bg-yellow-100"
        }`}
      >
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 p-2 rounded-full"
          >
            <HiOutlineTrash />
          </button>
          <Link
            to={`/dashboard/emails/${_id}`}
            htmlFor="my-modal"
            className="bg-blue-500 p-2 rounded-full"
          >
            <AiFillEye />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default EmailTableRow;
