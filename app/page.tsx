import Image from "next/image";
import styles from "./page.module.scss";
import db from "@/db.json";

const userId : number = 1;
const carteirasIds = [1, 2];
export default function Home() {
  return (
    <main className={styles.main}>
       <h1>Hello, world!</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Email</th>
            <th>Profissão</th>
            <th>Salário</th>
          </tr>
        </thead>
        <tbody>
        {db.usuarios.map((usuario) => (
  usuario.id === userId ? (
    <tr key={usuario.id}>
      <td>{usuario.nome}</td>
      <td>{usuario.idade}</td>
      <td>{usuario.email}</td>
      <td>{usuario.profissao}</td>
      <td>{usuario.salario}</td>
      <td>{usuario.carteiras.map((carteira) => carteira.id)}</td>
    </tr>
  ) : null
))}
        </tbody>

        <thead>
          <tr>
            <th>carteira</th>
            <th>Renda esperada</th>
            <th>saldo</th>
            <th>carteira</th>
            <th>id_criador</th>
            <th>Id_participantes</th>
          </tr>
        </thead>
        <tbody>
        {db.carteiras.map((carteira) => (
  carteira.id === 1 || carteira.id === 2 ? (
    <tr key={carteira.id}>
      <td>{carteira.id}</td>
      <td>{carteira.renda_mensal_esperada}</td>
      <td>{carteira.saldo}</td>
      <td>{carteira.id_criador}</td>
      <td>{carteira.id_participantes}</td>
    </tr>
  ) : null
))}
        </tbody>
      </table>
    </main>
  );
}
