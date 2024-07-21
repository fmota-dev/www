import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Avatar, Container, Form } from "./styles";

export function Profile() {
	return (
		<Container>
			<header>
				<Link to="/">
					<FiArrowLeft />
				</Link>
			</header>

			<Form>
				<Avatar>
					<img src="https://github.com/fmota-dev.png" alt="Foto do usuário" />

					<label htmlFor="avatar">
						<FiCamera />

						<input id="avatar" type="file" />
					</label>
				</Avatar>

				<Input placeholder="Nome" type="text" icon={FiUser} />

				<Input placeholder="E-mail" type="text" icon={FiMail} />

				<Input placeholder="Senha Atual" type="password" icon={FiLock} />

				<Input placeholder="Nova Senha" type="password" icon={FiLock} />

				<Button title="Salvar" />
			</Form>
		</Container>
	);
}
