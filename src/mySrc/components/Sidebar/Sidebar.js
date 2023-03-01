import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { activeActions } from "../../store/active-action";
import Icon from "../Icon/Icon";
import "./Sidebar.css";
const Sidebar = () => {
  const active = useSelector((state) => state.active.active);
  const dispatch = useDispatch();
  const offAni = () => {
    dispatch(activeActions.off());
  };
  return (
    <div className="sidebar_container">
      <h2>Admin Page</h2>
      <ul>
        <li>
          MAIN
          <ul>
            <NavLink to="/" className="sidebar_navlink">
              <li className="link_sidebar">
                <Icon name="faGripVertical" />
                Dashboard
              </li>
            </NavLink>
          </ul>
        </li>
        <li>
          LIST
          <ul>
            <NavLink to="/products" className="sidebar_navlink">
              <li className="link_sidebar">
                <Icon name="faHotel" />
                Products
              </li>
            </NavLink>
            <NavLink to="/orders" className="sidebar_navlink">
              <li className="link_sidebar">
                <Icon name="faTruck" />
                Orders
              </li>
            </NavLink>
          </ul>
        </li>
        <li>
          CHAT
          <ul>
            <NavLink to="/chat" className={`sidebar_navlink`}>
              <li
                className={`${active ? "active" : ""} link_sidebar`}
                onClick={offAni}
              >
                <Icon name="faPlane" />
                Chat
              </li>
            </NavLink>
          </ul>
        </li>
        <li>
          NEW
          <ul>
            <NavLink to="/newProduct" className="sidebar_navlink">
              <li className="link_sidebar">
                <Icon name="faHotel" />
                New Product
              </li>
            </NavLink>
          </ul>
        </li>
        <li>
          USER
          <ul>
            <NavLink to="/logout" className="sidebar_navlink">
              <li className="link_sidebar">
                <Icon name="faRightFromBracket" />
                Logout
              </li>
            </NavLink>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
