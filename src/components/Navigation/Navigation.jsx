import PropTypes from "prop-types";
import { NavStyled, UserContainer, UserAvatar, NavMenu, MenuItemIcon, StyledNavLink } from "./Navigation.styled";
import { menuItems } from "../../utils/menuItems";
import { FaSignOutAlt } from "react-icons/fa";

import avatar from "../../img/avatar.png";

export const Navigation = () => {
  return (
    <NavStyled>
      <UserContainer>
        <UserAvatar src={avatar} alt="user´s avatar" />
        <div>
          <h2>Username</h2>
          <p>Your Money</p>
        </div>
      </UserContainer>

      <NavMenu>
        {/* Rendereing menu items. If adding new item, add it at menuItems array */}
        {menuItems.map((item) => {
          return (
            <li key={item.id}>
              <StyledNavLink to={item.link}>
                <MenuItemIcon> {<item.icon />}</MenuItemIcon>
                <span>{item.title}</span>
              </StyledNavLink>
            </li>
          );
        })}
      </NavMenu>

      <div>
        <FaSignOutAlt /> <span>Sign Out</span>
      </div>
    </NavStyled>
  );
};

Navigation.propTypes = {
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
};
