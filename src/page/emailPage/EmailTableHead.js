import React from "react";

const EmailTableHead = () => {
  return (
    <thead>
      <tr>
        <th className="hidden lg:table-cell ">Name</th>
        <th>Subject</th>
        <th>action</th>
      </tr>
    </thead>
  );
};

export default EmailTableHead;
