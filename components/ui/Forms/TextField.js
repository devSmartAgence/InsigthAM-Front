export default function TextField() {
  return (
    <div className="floating-input mb-5 relative">
      <input
        type="email"
        id="prénom"
        className="focus:outline-none rounded-full focus:border-gray-500 focus:shadow-sm w-full p-3 h-[50px]"
        placeholder="name@example.com"
        autocomplete="off"
      />
      <label
        for="prénom"
        className="absolute text-[13px] text-deep-blue top-0 left-0 px-3 py-5 pointer-events-none transform origin-left transition-all duration-100 ease-in-out "
      >
        Prénom*
      </label>
    </div>
  );
}
