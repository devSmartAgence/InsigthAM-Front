// Themes beautyfing : from Pascale to original
export function mailSubjectGenerator(subject, router) {
  switch (subject) {
    case "Demande d'informations":
      subject = `Demande d'informations `;
      break;
    case "Demande d'étude":
      if (router.split("/").length === 4) {
        subject = `Demande d'étude ${
          ":" + " " + router.split("/")[router.split("/").length - 1]
        }`;
      } else {
        subject = `Demande d'étude`;
      }
      break;
    case "Commande de l'étude":
      subject =
        "Commande de  l'étude : Les Sociétés de Gestion vues par les Conseillers en Gestion de Patrimoine";
      break;
    case "Autre":
      subject = "Autre";
      break;
    default:
      subject = "";
      break;
  }
  return subject;
}
