import { IoExitOutline } from "react-icons/io5";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/fmota-dev.png" alt="Foto de perfil" />

        <div>
          <span>Bem-vindo!</span>
          <strong>Filipe Mota</strong>
        </div>
      </Profile>

      <Logout>
        <IoExitOutline size={24} />
      </Logout>
    </Container>
  );
}
