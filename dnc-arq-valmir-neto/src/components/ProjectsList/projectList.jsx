import '../ProjectsList/projectList.css'
// assets
import likeFill from '../../assets/like-filled.svg'
import like from '../../assets/like.svg'

function ProjectList() {
    return (
        <div className="container">
            <div className="project-grid">
                <h2>Follow Our Projects</h2>
                <p>It is a long established fact that a reader will be distracted by the of readable <br/> content of page  lookings at its layouts  points.</p>
                <div className="card">
                   <div className="exemple-poster"></div>
                    <h3>nome ficticio</h3>
                    <p>Cidade ficticia</p>
                    <button aria-label='liked button'>
                        <img src={like} alt='like button' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectList