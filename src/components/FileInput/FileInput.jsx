import React from "react";
import AddIcon from "@assets/icons/Add-Icon.svg";
import CancelIcon from "@assets/icons/cancel-Icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { setLogo } from "../../store/slices/invoice";
const FileInput = () => {
  const { logo } = useSelector((state) => state.invoice);
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setLogo(reader.result));
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="relative">
        {logo && (
          <button
            onClick={() => dispatch(setLogo(null))}
            className="absolute border-none block top-1 left-1 p-1 w-6 h-6 m-0 bg-gray-800 hover:bg-green-600 rounded outline-none transition-all z-10"
          >
            <img src={CancelIcon} alt="" />
          </button>
        )}
        <label
          htmlFor="image-upload"
          className="block cursor-pointer relative   w-52"
        >
          {logo ? (
            <div className="relative">
              <img
                src={logo}
                alt="Selected"
                className="w-full h-auto aspect-video object-cover rounded"
              />
            </div>
          ) : (
            <div className="flex h-28 items-center border-2  border-indigo-100 bg-indigo-50  justify-center gap-2 rounded">
              <img className="h-8 w-8 " src={AddIcon} alt="" />{" "}
              <span className="text-indigo-400 ">Add your logo</span>
            </div>
          )}
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default FileInput;
