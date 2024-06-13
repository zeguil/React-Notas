import React, { Component } from "react";
import { Card } from "./CardNota";
export class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map(categorias => {
          return (
            <li>
              <div>{categorias}</div>
              <Card></Card>
            </li>
          );
        })}
        
      </ul>
    );
  }
}

