import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img 
        src="https://github.com/fmota-dev.png" 
        alt="Foto de usuário" />

        <div>
          <span>Bem-vindo,</span>
          <strong>Filipe Mota</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}