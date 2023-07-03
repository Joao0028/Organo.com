import Card from '../Card/Card'
import './Time.css'
import hexToRgba from 'hex-to-rgba';
import { v4 as uuidv4 } from 'uuid';

function Time(props){
    return (
      props.colaboradores.length > 0 && <section className='Time' style={{backgroundColor: hexToRgba(props.cor, 0.6)}}>
            <input type="color" value={props.cor} className='input-cor' onChange={e => props.mudarCor(e.target.value, props.id)}/>
            <h3 style={{borderColor: props.cor}}>{props.NomeDoTime}</h3>
            <div className='Card'>
            {props.colaboradores.map( Pessoa => { 
            return  <Card key={uuidv4()} id={Pessoa.id} Nome={Pessoa.Nome} Imagem={Pessoa.Imagem} Time={Pessoa.Cargo} corDeFundo={props.corDois} aoDeletar={props.aoDeletar}/>
            })}
            </div>
       </section>
    )
}

export default Time