import styled from "styled-components";

export const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: var(--main-background);

  border: 3px solid #ffff;
  border-radius: 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

export const UserContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  gap: 1rem;

  h2 {
    color: var(--primary-text-color);
  }
`;

export const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  background: #fcf6f9;
  border: 2px solid #ffffffff;
  padding: 0.2rem;
  box-shadow: var(--shadow);
`;

export const NavMenu = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;

  li {
    display: grid;
    grid-template-columns: 40px auto;
    align-items: center;
    margin: 0.6rem 0;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    padding-left: 1rem;
    position: relative;
  }

  .active {
    color: var(--primary-text-color);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: var(--primary-text-color);
      border-radius: 0 10px 10px 0;
      transition: var(--transition);
    }
  }
`;

export const MenuItemIcon = styled.span`
  font-size: 1.4rem;
  transition: var(--transition);
`;
