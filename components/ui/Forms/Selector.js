import { mailSubjectGenerator } from "../../../utils/mailSubjectGenerator";

export default function Selector({ setter, type, required, router }) {
  console.log("ROUTER SELECTOR ===>", router.split("/"));
  return (
    <div className="floating-input mb-5 relative ">
      <select
        name="demande"
        id="demande"
        className="font-sans text-deep-blue text-[13px] focus:outline-none rounded-full focus:border-gray-500 focus:shadow-sm w-full py-4 h-[60px] px-[30px] pl-[27px] "
        onChange={(e) => setter(mailSubjectGenerator(e.target.value, router))}
        type={type}
        required={required}
      >
        <option
          value="Demande d'informations"
          selected={router.split("/").length <= 2 && "true"}
        >
          Demande d&apos;informations
        </option>
        <option
          selected={
            router ===
            "/nos-etudes/BarometresInstitutionnels/les-societes-de-gestion-vues-par-les-conseillers-en-gestion-de-patrimoine"
              ? "Commande de l'étude"
              : "Demande d'étude"
          }
          value={
            router ===
            "/nos-etudes/BarometresInstitutionnels/les-societes-de-gestion-vues-par-les-conseillers-en-gestion-de-patrimoine"
              ? "Commande de l'étude"
              : "Demande d'étude"
          }
        >
          {router ===
          "/nos-etudes/BarometresInstitutionnels/les-societes-de-gestion-vues-par-les-conseillers-en-gestion-de-patrimoine"
            ? "Commande de l'étude"
            : "Demander l'étude"}
        </option>
        <option value="Autre">Autre</option>
      </select>
    </div>
  );
}
