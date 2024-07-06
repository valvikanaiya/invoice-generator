import { useDispatch } from "react-redux";

export default function TextAreaInput({ value, setValue, placeholder }) {
  const dispatch = useDispatch();
  return (
    <>
      <textarea
        className="text-sm py-2 px-3  border rounded focus:outline-gray-200 focus:outline-1 resize-none"
        value={value}
        placeholder={placeholder}
        onChange={(e) => dispatch(setValue(e.target.value))}></textarea>
    </>
  );
}
