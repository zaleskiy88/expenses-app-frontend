import { NavStyled, UserContainer, UserAvatar, NavMenu, MenuItemIcon, StyledNavLink } from "./Navigation.styled";
import { menuItems } from "../../utils/menuItems";
import { FaSignOutAlt } from "react-icons/fa";
import { useGlobalContext } from "../../context/useGlobalContext";
import avatar from "../../img/avatar.png";

export const Navigation = () => {
  const { user, logout } = useGlobalContext();

  return (
    <NavStyled>
      <UserContainer>
        <UserAvatar src={avatar} alt="user´s avatar" />
        <div>
          <h2>{user.name}</h2>
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

      <div onClick={logout} style={{ cursor: "pointer" }}>
        <FaSignOutAlt /> <span>Sign Out</span>
      </div>
    </NavStyled>
  );
};
