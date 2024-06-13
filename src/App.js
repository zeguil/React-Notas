import React, { Component } from "react";
import { ListaDeNotas } from "./components/ListaNotas";
import { FormularioCadastro } from "./components/Formulario";

class App extends Component {
  render(){
    return (
      <section>
      <FormularioCadastro></FormularioCadastro>
      <ListaDeNotas></ListaDeNotas>
      </section>
    );
  }
}

export default App;
