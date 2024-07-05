export default function Inputs({
  type,
  labelName,
  inputName,
  setLableValue,
  lableValue,
  inputValue,
  setInputValue,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center mb-2">
      <input
        className="lg:text-right py-2 px-3 border border-transparent hover:border-gray-200 text-sm text-gray-600 font-light rounded focus:outline-gray-200 focus:outline-1"
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
      <input
        className="text-sm border w-full text-gray-600 py-2 px-3  rounded focus:outline-gray-200 focus:outline-1"
        type={type}
        name={inputName}
        value={inputValue[inputName]}
        onChange={(e) =>
          setInputValue((preve) => ({
            ...preve,
            [inputName]: e.target.value,
          }))
        }
      />
    </div>
  );
}
