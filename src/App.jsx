import { useState } from 'react';
import Banner from './Componentes/Banner/Banner';
import Formulario from './Componentes/Formulario/Formulario';
import Time from './Componentes/Time/Time';
import Rodape from './Componentes/Rodape/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([ 
    {
      id: uuidv4(),
      nome:"Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome:"Front End",
      cor: "#82CffA",
    },
    {
      id: uuidv4(),
      nome:"Data Science",
      cor: "#a6d157",
    },
    {
      id: uuidv4(),
      nome:"DevOps",
      cor: "#ed6869",
    },
    {
      id: uuidv4(),
      nome:"Ux e Design",
      cor: "#Db6ebf",
    },
    {
      id: uuidv4(),
      nome:"Mobile",
      cor: "#ffba05",
    },
    {
      id: uuidv4(),
      nome:"Inovação e gestão",
      cor: "#ff8a29",
    }
  ]);
  
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletaPessoa(id){
    setColaboradores(colaboradores.filter( pessoa => pessoa.id !== id ))
  }

  function mudaCorDoTime(cor, id){
    setTimes(times.map(time => {if(time.id === id){
      time.cor = cor
    } return time} ))
  }

  function cadastrarTime(novoTime){
      setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
      cadastrarTime={cadastrarTime}
      time={times.map(time => time.nome)} 
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />

      {times.map(time => <Time 
      mudarCor={mudaCorDoTime}
      key={time.nome} 
      id={time.id} 
      cor={time.cor} 
      corDois={time.cor}
      NomeDoTime={time.nome}
      colaboradores={colaboradores.filter(colaborador => colaborador.Time === time.nome)}
      aoDeletar={deletaPessoa}
      />)}
      
      <Rodape/>
    </div>
  );
}

export default App;

//https://github.com/Joao0028.png 