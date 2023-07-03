import "./CampoTexto.css"


const CampoTexto = (props) => {

    const algoDigitado = (e)=>{
        props.algoAlterado(e.target.value)
    }

    return (
        <div className={`campo campo-${props.type}`}>
            <label>{props.label}</label>
            <input required={props.obrigatorio} 
            onChange={algoDigitado} 
            type={props.type} 
            placeholder={props.placeholder}/>
        </div>
    )

}

export default CampoTexto