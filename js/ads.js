class Ads extends React.Component {

  constructor() {
    super();
    this.state = {titulo: "Componentes curriculares", 
                  periodo: "Noturno"};
  }

  render() {   

    return <div>
    <h2><strong>{this.state.titulo}</strong></h2>
    <table>
      <tr>
        <td> <h4><strong>DISCIPLINA</strong></h4></td> 
        <td> <h4><strong>CARGA</strong></h4></td>
        <td> <h4><strong>PERÍODO</strong></h4></td>
      </tr>
      <tr>
        <td> Sistemas Operacionais</td> 
        <td> 66.7</td>
        <td> {this.state.periodo}</td>
      </tr>
      <tr>
        <td> Inglês</td> 
        <td> 33.3</td>
        <td> {this.state.periodo}</td>
      </tr>
      <tr>
        <td> Laboratório de Estruturas de Dados e Programação</td> 
        <td> 33.3</td>
        <td> {this.state.periodo}</td>
      </tr>
      <tr>
        <td> Introdução a Banco de Dados</td> 
        <td> 66.7</td>
        <td> {this.state.periodo}</td>
      </tr>
    </table>
    
    </div>;

  }
}

ReactDOM.render(<Ads />, document.getElementById('ads'));
