import React, { useContext, useState } from "react";

import {
  imageUploadDiv,
  imageUploadBox,
  file,
  layer,
  iconsStyle,
  profileImageCX,
  uploadLogoText,
  fileNameCX,
} from "./styledClass";

import { toast } from "react-toastify";

import { convertImage } from "../../utility/imageResize";
import CustomInputField from "../customInputField/CustomInputField";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import Loading from "../shared/Loading/Loading";
import { update } from "../../hooks/update";

const CustomerUpdateForm = ({ customer }) => {
  const { _id, name, phoneNumber, imgURL } = customer[0];
  const { customerRefetch } = useContext(GLOBAL_CONTEXT);
  const [loading, setLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const [fileName, setFileName] = useState(name.slice(0, 8) + ".png");
  const [userImage, setUserImage] = useState(imgURL);

  const handleProfileImage = (event) => {
    const size = event.target.files[0].size;
    if (size < 5000000) {
      setFileName(event.target.files[0].name);
      convertImage(event.target.files[0], setUserImage, setLoading);
    } else {
      toast.error("Max image limit 5MB!", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = event.target.password.value
      ? {
          imgURL: userImage,
          name: event.target.name.value,
          phoneNumber: event.target.phoneNumber.value,
          password: event.target.password.value,
        }
      : {
          imgURL: userImage,
          name: event.target.name.value,
          phoneNumber: event.target.phoneNumber.value,
        };

    update({
      endPoint: "user",
      id: _id,
      data: data,
      refetch: customerRefetch,
      loading: setPostLoading,
      imageThumbReset: setUserImage,
      fileNameReset: setFileName,
    });
  };

  return (
    <>
      <div
        className={`container mx-auto py-10  md:w-3/4 lg:w-3/6 px-3 ${
          postLoading && "opacity-30"
        }`}
      >
        <form onSubmit={handleSubmit}>
          <div className={profileImageCX}>
            <div className={imageUploadDiv}>
              <div
                className={imageUploadBox}
                style={{
                  backgroundImage: `url(${userImage})`,
                }}
              >
                {loading ? (
                  <Loading small={true} />
                ) : (
                  <input
                    type="file"
                    name="photo"
                    className={file}
                    onChange={handleProfileImage}
                    formEncType="multipart/form-data"
                    accept="image/*"
                  />
                )}
                <div className={layer(userImage)}>
                  <div className={iconsStyle}>
                    {!loading && (
                      <img
                        src="https://mez.ink/mezink-web/_next/static/images/invoice/imageLogo.png"
                        alt="uploadImageThumbnail"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className={uploadLogoText}>User Image</h2>
              <h2 className={fileNameCX}>
                {fileName
                  ? fileName.length <= 15
                    ? fileName
                    : fileName.slice(0, 8) +
                      "..." +
                      fileName.slice(fileName.indexOf("."))
                  : "No file chosen"}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInputField
              type="text"
              label={"Customer Name"}
              name="name"
              required={true}
              spanFull={true}
              defaultValue={name}
            />
            <CustomInputField
              type="text"
              label={"Customer Phone Number"}
              name="phoneNumber"
              required={true}
              spanFull={true}
              defaultValue={phoneNumber}
              pattern="^\+8801[3-9][0-9]{8}$"
              placeholder="Example:+8801711111111"
            />
            <CustomInputField
              type="text"
              label={"Customer Password"}
              name="password"
              spanFull={true}
              placeholder="Include Uppercase, Lowercase, Number, Special"
            />
          </div>
          <div className="pt-6  flex justify-center">
            <button
              disabled={loading}
              type="submit"
              className={`btn btn-outline`}
            >
              submit
            </button>
          </div>
        </form>
      </div>
      {postLoading && <Loading />}
    </>
  );
};

export default CustomerUpdateForm;
