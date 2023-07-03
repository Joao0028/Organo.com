import './ListaSuspensa.css'

function ListaSuspensa(props){

    return (

        <div className='ListaSuspensa'>
        
        <h2 className='testo'>Time</h2>
        <label>{props.label}</label>
        <select onChange={evento => props.algoAlterado(evento.target.value)} required={props.obrigatorio}>
            <option></option>
            {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
        </div>

    )

}

export default ListaSuspensa