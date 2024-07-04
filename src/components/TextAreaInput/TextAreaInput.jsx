export default function TextAreaInput({
  labelName,
  inputName,
  setLableValue,
  lableValue,
  inputValue,
  setInputValue,
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="py-2 px-3 text-sm text-gray-600 font-light rounded focus:outline-gray-200 focus:outline-1"
        type="text"
        name={labelName}
        value={lableValue[labelName]}
        onChange={(e) =>
          setLableValue((preve) => ({
            ...preve,
            [labelName]: e.target.value,
          }))
        }
      />
      <textarea
        className="text-sm py-2 px-3  border rounded focus:outline-gray-200 focus:outline-1 resize-none"
        name={inputName}
        value={inputValue[inputName]}
        placeholder={placeholder}
        onChange={(e) =>
          setInputValue((preve) => ({
            ...preve,
            [inputName]: e.target.value,
          }))
        }
      ></textarea>
    </div>
  );
}
