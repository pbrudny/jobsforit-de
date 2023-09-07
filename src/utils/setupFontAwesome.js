import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInfinity,
  faGamepad,
  faUser,
  faUserSecret,
  faUserGraduate,
  faUserTie,
  faUserNinja,
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';

const SetupFontAwesome = () => {
  library.add(
    faInfinity,
    faGamepad,
    faUser,
    faUserSecret,
    faUserGraduate,
    faUserTie,
    faCheckSquare,
    faUserNinja
  );
  return null;
};

export default SetupFontAwesome;
