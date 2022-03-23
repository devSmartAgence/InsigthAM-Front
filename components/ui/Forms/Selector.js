import { mailSubjectGenerator } from "../../../utils/mailSubjectGenerator";
import { useRouter } from "next/router";

export default function Selector({ setter, type, required }) {
  const router = useRouter();
  console.log("ROUTER ICICICI ===>", router.asPath);
  return (
    <div className="floating-input mb-5 relative">
      <select
        name="demande"
        id="demande"
        className="font-sans text-deep-blue text-[13px] focus:outline-none rounded-full focus:border-gray-500 focus:shadow-sm w-full py-4 h-[60px] px-[30px] pl-[27px] "
        onChange={(e) =>
          setter(mailSubjectGenerator(e.target.value, router.asPath))
        }
        type={type}
        required={required}
      >
        <option value="Demande d'informations">
          Demande d&apos;informations
        </option>
        <option
          value={
            router.asPath ===
            "/nos-etudes/BarometresInstitutionnels/les-societes-de-gestion-vues-par-les-conseillers-en-gestion-de-patrimoine"
              ? "Commande de l'étude"
              : "Demande d'étude"
          }
          selected={
            router.asPath ===
            "/nos-etudes/BarometresInstitutionnels/les-societes-de-gestion-vues-par-les-conseillers-en-gestion-de-patrimoine"
              ? true
              : false
          }
        >
          {router.asPath ===
          "/nos-etudes/BarometresInstitutionnels/les-societes-de-gestion-vues-par-les-conseillers-en-gestion-de-patrimoine"
            ? "Commande de l'étude"
            : "Demande d'étude"}
        </option>
        <option value="Autre">Autre</option>
      </select>
    </div>
  );
}
