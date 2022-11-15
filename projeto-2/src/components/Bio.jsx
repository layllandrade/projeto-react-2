import Titulo from './Titulo'
import Imagem from './Imagem'
import Paragrafo from './Paragrafo'

function Bio(props) {
    return (
        <div>
            <Titulo content="Prazer, eu sou a Laylla!"/>
            <Imagem imagem="https://avatars.githubusercontent.com/u/109319620?s=400&u=bd7d953440abbd2f57355aebeb42ad2c09f55a9d&v=4"/>
            <Paragrafo paragrafo="Tenho 26 anos, moro em Campina Grande -PB, formada em Direito desde 2019. Entusiasta
                da tecnologia, encontrei no reprograma a oportunidade de migração de carreira, onde atualmente sou Aluna Front-end
                da turma On20.
                Confira abaixo meus conteudos favoritos:" />
        </div>
    )
}
export default Bio