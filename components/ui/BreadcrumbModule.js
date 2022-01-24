import Button from "./Button";

export default function BreadCrumModule() {
  return (
    <>
      <Button label={"< Retour"} size={"small"} />
      <div className="flex items-center ml-[30px]">
        <div className="text-deep-blue text-[11px]">Étude</div>
        <div className="text-deep-blue text-[11px] mx-[20px]">&#x3e;</div>
        <div className="text-deep-blue text-[11px]">
          Étude référencement thématique
        </div>
        <div className="text-deep-blue text-[11px] mx-[20px]">&#x3e;</div>

        <div className="text-deep-blue text-[11px] text-light-blue">
          Fonds en Euros : quelle place demain dans l’épargne des Français ?
          Titre long lorem dolor consectetur adipiscing (H1) …{" "}
        </div>
      </div>
    </>
  );
}
