import { Main } from "../templates/Main";
export function Home () {
return (
    <Main  icon="home" title="Inicio" subtitle="Projeto com React JS">
    <div className="display-4"> Bem vindo!</div>
    <hr />
    <p className="mb-0">Sistema para exemplificar a construção de um cadastro desenvolvido em React</p>
    </Main>
)
}