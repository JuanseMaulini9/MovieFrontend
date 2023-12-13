import styled from "styled-components";

export default function Navbar() {
  const NavbarStyle = styled.nav`
    width: 100%;
    height: 60px;
    padding: 0px 50px;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: #23252b;
  `;
  const ListStyle = styled.ul`
    list-style: none;
    display: flex;
  `;
  const ElementStyle = styled.li`
    height: 60px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      background-color: #141519;
    }
  `;

  const SectionStyle = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const InputStyle = styled.input`
    height: 25px;
  `;

  const ButtonStyle = styled.button`
    margin-left: 10px ;
    height: 25px;
  `

  return (
    <NavbarStyle>
      <SectionStyle>
        <ListStyle>
          <ElementStyle>Movies</ElementStyle>
          <ElementStyle>Tv Series</ElementStyle>
          <ElementStyle>Genres</ElementStyle>
        </ListStyle>
      </SectionStyle>
      <SectionStyle>
        <InputStyle type="text" />
        <ButtonStyle>search</ButtonStyle>
      </SectionStyle>
    </NavbarStyle>
  );
}
