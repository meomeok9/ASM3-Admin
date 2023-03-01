import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faReply,
  faTaxi,
  faLocationDot,
  faGripVertical,
  faUser,
  faHotel,
  faShop,
  faTruck,
  faRightFromBracket,
  faScrewdriverWrench,
  faTrashCan,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Icon.css";

const Icon = (props) => {
  switch (props.name) {
    case "faBed": {
      return <FontAwesomeIcon className={`icon`} icon={faBed} />;
    }
    case "faPlane": {
      return <FontAwesomeIcon className={`icon`} icon={faPlane} />;
    }
    case "faCar": {
      return <FontAwesomeIcon className={`icon`} icon={faCar} />;
    }
    case "faTaxi": {
      return <FontAwesomeIcon className={`icon`} icon={faTaxi} />;
    }
    case "faLocationDot": {
      return <FontAwesomeIcon className={`icon`} icon={faLocationDot} />;
    }
    case "faGripVertical": {
      return <FontAwesomeIcon className={`icon`} icon={faGripVertical} />;
    }
    case "faUser": {
      return <FontAwesomeIcon className={`icon`} icon={faUser} />;
    }
    case "faHotel": {
      return <FontAwesomeIcon className={`icon`} icon={faHotel} />;
    }
    case "faShop": {
      return <FontAwesomeIcon className={`icon`} icon={faShop} />;
    }
    case "faTruck": {
      return <FontAwesomeIcon className={`icon`} icon={faTruck} />;
    }
    case "faRightFromBracket": {
      return <FontAwesomeIcon className={`icon`} icon={faRightFromBracket} />;
    }
    case "faScrewdriverWrench": {
      return <FontAwesomeIcon className={`icon`} icon={faScrewdriverWrench} />;
    }
    case "faTrashCan": {
      return <FontAwesomeIcon className={`icon`} icon={faTrashCan} />;
    }
    case "faAngleLeft": {
      return <FontAwesomeIcon className={`icon`} icon={faAngleLeft} />;
    }
    case "faAngleRight": {
      return <FontAwesomeIcon className={`icon`} icon={faAngleRight} />;
    }
    case "faCommentSms": {
      return <FontAwesomeIcon className={`icon`} icon={faReply} />;
    }
    default:
      return <FontAwesomeIcon className={`icon`} icon={faBed} />;
  }
};
export default Icon;
