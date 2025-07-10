// este componente foi feito com o proposito de componentizar a o card de projetos para futuramente criar uma área de curtidos;
import './projectCard.css'
import likeFill from '../../assets/like-filled.svg'
import like from '../../assets/like.svg'
// função que retorna uma imagem para o meu card caso não recebe vai colocar uma div com fundo cinza;
const ImageCard = ({ image, name, location }) => {
    const alt = `Projeto de ${name}, ${location}`
    return image ?
        (<img src={image} alt={alt} className='poster-card' />)
        :
        (<div className='poster-card' aria-label='Imagem do projeto não carregada'></div>)

};


function ProjectsCards(props) {
    return (
        <>
            <div className="card">
                <ImageCard image={props.image} name={props.name} location={props.location} />
                <h3>{props.name || 'nome ficticio'}</h3>
                <p>{props.location || 'Cidade ficticia'}</p>
                <button aria-label='liked button'>
                    <img src={like} alt='like button' />
                </button>
            </div>
        </>
    )
}

export default ProjectsCards