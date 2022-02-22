export default function Selector({ setter, type, required }) {
  return (
    <div className="floating-input mb-5 relative ">
      <select
        name="demande"
        id="demande"
        className="font-sans text-deep-blue text-[13px] focus:outline-none rounded-full focus:border-gray-500 focus:shadow-sm w-full py-4 h-[60px] px-[30px] pl-[27px] "
        onChange={(e) => setter(e.target.value)}
        type={type}
        required={required}
      >
        <option value="Demande d'informations" defaultValue>
          Demande d&apos;informations
        </option>
        <option value="Demande d'étude">Demande d&apos;étude</option>
        <option value="Autre">Autre</option>
      </select>
    </div>
  );
}
