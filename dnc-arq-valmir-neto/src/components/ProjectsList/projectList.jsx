import { useState, useEffect, useContext } from 'react'
import '../ProjectsList/projectList.css'
// assets
import likeFill from '../../assets/like-filled.svg'
import like from '../../assets/like.svg'

// services
import apiService from '../../services/apiService'

// UTILITS
import { callBackDefaultContent } from '../../utilits/callBackDefaultContent'

// CONTEXT
import { AppContext } from '../../context/textsContext'

function ProjectList() {

    const dataContext = useContext(AppContext);
    const contentApplication = dataContext?.contentApplication;
    const language = dataContext?.language;

    const [apiData, setApiData] = useState([]);
    const [favProjects, setFavProjects] = useState([]);

    // apiData recebe os projetos para que eu possa manipulalos no código;

    useEffect(() => {

        const dataProjects = async () => {
            try {
                const {projetos} = await apiService(`/.netlify/functions/fetch`);
                setApiData(projetos);
            } catch (err) {
                setApiData([])
                console.log(err)

            } 
        }

        dataProjects();
    }, [])

    // função que define o projeto como gostei;
    const handleFavProject = (id) => {
        setFavProjects((prevFavProjects = favProjects)=> {
            if (prevFavProjects.includes(id)) {
                const aLikedProjects = prevFavProjects.filter((projectId) => projectId !== id );
                const dataFormat = JSON.stringify(aLikedProjects)
                sessionStorage.setItem('favProjects', dataFormat);
                return  aLikedProjects;
            } else {
                sessionStorage.setItem('favProjects', JSON.stringify([...favProjects, id]));
                return [...prevFavProjects, id];
            }
        })
    }

    useState(() => {
        const sessionData = JSON.parse(sessionStorage.getItem('favProjects'))
        if (sessionData) {
            setFavProjects(sessionData);
        }
    })
    return (
        <div className="container">
            <div className="section-projects flex-container jc-center">
                <h2 className='font-other-titles align-center'>{callBackDefaultContent(contentApplication, language, 'projects', 'title')}</h2>
                <p className='font-text align-center'>{callBackDefaultContent(contentApplication, language, 'projects', 'subtitle')}</p>
                <div className="project-grid flex-container jc-center flex-align-center flex-wrap">
                    {
                        apiData.map((projects) => {
                            return (
                                <div className="card flex-container flex-direction" key={projects.id}>
                                    <div className="exemple-poster" style={{ 'backgroundImage': `url(${projects.thumb})` }}></div>
                                    <h3 className='small-titles'>{projects.title}</h3>
                                    <p className='font-text'>{projects.subtitle}</p>
                                    <button
                                     aria-label='liked button'
                                     onClick={() => handleFavProject(projects?.id)}
                                     >
                                        <img src={favProjects.includes(projects?.id) ? 
                                            likeFill :
                                            like
                                        } 
                                        alt='like button' 
                                        />
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectList