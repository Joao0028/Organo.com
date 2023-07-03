import './Rodape.css'

function Rodape(){
    return (
        <div className='Rodape'>
            <div className='iconsDiv'>
                <a href="https://github.com/Joao0028"><img src="/Imagens/fb.png" alt="Logo do rodape sem redirecionamento" /></a>
                <a href="https://github.com/Joao0028"><img src="/Imagens/tw.png" alt="Logo do rodape sem redirecionamento" /></a>
                <a href="https://github.com/Joao0028"><img src="/Imagens/ig.png" alt="Logo do rodape sem redirecionamento" /></a>
            </div>

            <div>
            <img src="/Imagens/logo.png" alt="Logo do projeto Organo" />
            </div>
            <div>
            <h4><a href="https://github.com/Joao0028">&copy; Desenvolvido por João Paulo</a></h4>
            </div>
        </div>
    )
}

export default Rodape