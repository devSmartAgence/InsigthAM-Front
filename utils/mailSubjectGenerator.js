// Themes beautyfing : from Pascale to original
export function mailSubjectGenerator(subject, router) {
  console.log("router ===>", router.split("/")[router.split("/").length - 1]);
  switch (subject) {
    case "Demande d'informations":
      subject = `Demande d'informations : ${
        router.split("/")[router.split("/").length]
      }`;
      break;
    case "Demande d'étude":
      subject = "Demande d'étude : ";
      break;
    case "Commander l'étude":
      subject =
        "Commande d'étude : Les Sociétés de Gestion vues par les Conseillers en Gestion de Patrimoine";
      break;
    default:
      subject = "Autre";
      break;
  }
  return subject;
}
