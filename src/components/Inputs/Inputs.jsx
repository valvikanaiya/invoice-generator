export default function Inputs({ value, ...props }) {
  return (
    <input
      className="bg-transparent text-sm border w-full text-gray-600 py-2 px-3  rounded focus:outline-gray-200 focus:outline-1"
      value={value}
      {...props}
    />
  );
}

export function LabelInputs({ value, setValue, className, ...props }) {
  return (
    <input
      className={`py-2 px-3 border border-transparent hover:border-gray-200 text-sm text-gray-600 font-light rounded focus:outline-gray-200 focus:outline-1 ${className}`}
      type="text"
      value={value}
      {...props}
    />
  );
}
