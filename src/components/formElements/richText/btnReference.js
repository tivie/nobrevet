import {faBold, faItalic, faUnderline} from "@fortawesome/free-solid-svg-icons";


/**
 * @typedef {import("@fortawesome/fontawesome-svg-core").IconDefinition} IconDefinition
 * @type {{underline: {icon: IconDefinition, descriptor: string}, bold: {icon: IconDefinition, descriptor: string}, italic: {icon: IconDefinition, descriptor: string}}}
 */
export const btnReference = {
  bold: {
    descriptor: 'BOLD',
    icon: faBold
  },
  italic: {
    descriptor: 'ITALIC',
    icon: faItalic
  },
  underline: {
    descriptor: 'UNDERLINE',
    icon: faUnderline
  }
};
