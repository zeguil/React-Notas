import React from "react";
import { ListaDeNotas } from "./components/ListaNotas";
import { FormularioCadastro } from "./components/Formulario";

function App() {
  return (
    <section>
    <FormularioCadastro></FormularioCadastro>
    <ListaDeNotas></ListaDeNotas>
    </section>
  );
}

export default App;
