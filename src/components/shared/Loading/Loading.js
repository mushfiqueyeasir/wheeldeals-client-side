import React from "react";

const Loading = ({ small }) => {
  return (
    <div
      className={
        small
          ? ` flex justify-center items-center`
          : `flex justify-center items-center h-[90vh] lg:h-[100vh]`
      }
    >
      <div
        className={`loader ${small ? "w-[4rem]" : "w-[10rem]"} ${
          small ? "h-[4rem]" : "h-[10rem]"
        } shadow-lg`}
      ></div>
    </div>
  );
};

export default Loading;
