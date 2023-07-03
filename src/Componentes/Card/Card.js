import './Card.css'
import { CiCircleRemove } from "react-icons/ci";

function Card({ id , Imagem, Nome , Time ,  corDeFundo, aoDeletar }){
    return (
        <div  className='colaborador'>
            <div className='DeletaPessoa'>
                <button onClick={()=>aoDeletar(id)}>
                <CiCircleRemove className='icon'/>
                </button>
            </div>
            <div  className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={Imagem} alt={Nome} />
            </div>
            <div className='rodape'>
                <h4>{Nome}</h4>
                <h5>{Time}</h5>
            </div>
        </div>
    )
}

export default Card