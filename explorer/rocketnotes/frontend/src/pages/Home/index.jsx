import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header></Header>

      <Menu>
        <li>
          <ButtonText title="Todos" isActive={true}></ButtonText>
        </li>
        <li>
          <ButtonText title="React"></ButtonText>
        </li>
        <li>
          <ButtonText title="Node"></ButtonText>
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "javascript" },
                { id: "3", name: "frontend" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
