import { Container, Links, Content } from "./styles";

import { Tags } from "../../components/Tags";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="EXCLUIR NOTA" />

          <h1>Introdução ao React</h1>

          <p>
            React é uma biblioteca JavaScript de código aberto com foco em criar
            interfaces de usuário em páginas web. É mantido pelo Facebook e por
            uma comunidade de desenvolvedores individuais e empresas de software.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://www.fmota.dev.br">Site pessoal</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/fmota-dev/">LinkedIn</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tags title="React" />
            <Tags title="Node.JS" />
          </Section>

          <Button title="VOLTAR" />
        </Content>
      </main>
    </Container>
  );
}
