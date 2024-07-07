import { useDispatch } from "react-redux";

export default function TextAreaInput({ value, setValue, placeholder, className, onChange }) {
  const dispatch = useDispatch();
  return (
    <>
      <textarea
        className={`text-sm py-2 px-3  border rounded focus:outline-gray-200 focus:outline-1 resize-none ${className}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}></textarea>
    </>
  );
}
