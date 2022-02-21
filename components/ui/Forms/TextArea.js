export default function TextArea({ label, setter, type, required }) {
  return (
    <div className="floating-input mb-5 relative">
      <textarea
        onChange={(e) => setter(e.target.value)}
        type={type}
        id={
          label.charAt(label.length - 1) === "*"
            ? label.toLowerCase().substring(0, label.length - 1)
            : label.toLowerCase()
        }
        className="font-sans text-deep-blue h-[140px] rounded-[25px] focus:outline-none focus:border-gray-500 focus:shadow-sm w-full p-4 px-[24px]"
        autoComplete="off"
        placeholder="name@example.com"
        required={required}
      />
      <label
        htmlFor={
          label.charAt(label.length - 1) === "*"
            ? label.toLowerCase().substring(0, label.length - 1)
            : label.toLowerCase()
        }
        className="absolute text-[13px] text-deep-blue top-0 left-3 px-3 py-5 pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
      >
        {label}
      </label>
    </div>
  );
}
