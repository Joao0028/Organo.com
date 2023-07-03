import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import Botao from "../Botao/Botao"
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {
      function criaCard(e){
            e.preventDefault();

            props.aoColaboradorCadastrado({
                Nome:nome,
                Cargo:cargo,
                Imagem:imagem,
                Time:time,
                id: uuidv4()
            })
      }


      const [nome, setNome] = useState()
      const [cargo, setCargo] = useState()
      const [imagem, setImagem] = useState()
      const [time, setTime] = useState()

      const [nomeTime, setNomeTime] = useState()
      const [corTime, setCorTime] = useState()

    return (

        <section className="formulario">
            <form onSubmit={criaCard}>

                <h2>Preencha os dados para criar o card.</h2>

                <CampoTexto
                type="text" 
                algoAlterado={valor => setNome(valor)} 
                obrigatorio={true}  label="Nome" 
                onChange={(e)=>setNome(e.target.value)} 
                placeholder="Digite seu nome"/>
                <CampoTexto
                type="text" 
                algoAlterado={valor => setCargo(valor)} 
                obrigatorio={true} label="Cargo" 
                onChange={(e)=>setCargo(e.target.value)} 
                placeholder="Digite seu cargo"/>
                <CampoTexto
                type="text" 
                algoAlterado={valor => setImagem(valor)} 
                obrigatorio={true} label="Imagem" 
                onChange={(e)=>setImagem(e.target.value)} 
                placeholder="Informe o endereço da imagem"/>
                <ListaSuspensa 
                obrigatorio={true} 
                algoAlterado={(valor) => setTime(valor)} itens={props.time}/>
                <Botao texto="Criar Card"/>
            </form>
            <form onSubmit={(e)=>{
                e.preventDefault();
                props.cadastrarTime({nome: nomeTime, cor: corTime})
            }}>

                <h2>Preencha os dados para criar um novo time.</h2>

                <CampoTexto
                type="text" 
                algoAlterado={valor => setNomeTime(valor)} 
                obrigatorio label="Nome" 
                onChange={(e)=>setNomeTime(e.target.value)} 
                placeholder="Digite o nome do time"
                />
                <CampoTexto 
                type="color"
                algoAlterado={valor => setCorTime(valor)} 
                obrigatorio label="Cor" 
                onChange={(e)=>setCorTime(e.target.value)} 
                placeholder="Digite a cor do Time"
                />
                <Botao texto="Criar Card"/>
            </form>
        </section>

    )
}

export default Formulario