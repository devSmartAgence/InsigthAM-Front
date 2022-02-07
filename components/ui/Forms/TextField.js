export default function TextField({ label, setter, type, required }) {
  return (
    <div className="floating-input mb-5 relative">
      <input
        required={required}
        onChange={(e) => setter(e.target.value)}
        type={type}
        id={
          label.charAt(label.length - 1) === "*"
            ? label.toLowerCase().substring(0, label.length - 1)
            : label.toLowerCase()
        }
        className="font-sans text-deep-blue focus:outline-none rounded-full focus:border-gray-500 focus:shadow-sm w-full py-4 h-[60px] px-[30px]"
        placeholder="name@example.com"
        autoComplete="off"
      />
      <label
        htmlFor={
          label.charAt(label.length - 1) === "*"
            ? label.toLowerCase().substring(0, label.length - 1)
            : label.toLowerCase()
        }
        className="absolute text-[13px] text-deep-blue top-0 left-3 px-[18px] py-5 pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
      >
        {label}
      </label>
    </div>
  );
}
