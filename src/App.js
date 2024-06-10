import React from "react";
import { ListaDeNotas } from "./components/ListaNotas";

function App() {
  return (
    <section>
    <form>
      <input type="text" placeholder="Titulo"></input>
      <textarea placeholder="Digite sua nota..."></textarea>
      <button>Criar</button>
    </form>
    <ListaDeNotas></ListaDeNotas>
    </section>
  );
}

export default App;
