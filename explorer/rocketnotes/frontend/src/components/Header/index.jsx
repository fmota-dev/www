import { RiShutDownLine } from "react-icons/ri";
import { Container, Logout, Profile } from "./styles";

import { useAuth } from "../../hooks/auth";

export function Header() {
	const { signOut } = useAuth();

	return (
		<Container>
			<Profile to="/profile">
				<img src="https://github.com/fmota-dev.png" alt="Foto de usuário" />

				<div>
					<span>Bem-vindo,</span>
					<strong>Filipe Mota</strong>
				</div>
			</Profile>

			<Logout onClick={signOut}>
				<RiShutDownLine />
			</Logout>
		</Container>
	);
}
