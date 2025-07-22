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
    // apiData recebe os projetos para que eu possa manipulalos no código;

    useEffect(() => {

        const dataProjects = async () => {
            try {
                const data = await apiService(`/api/projects`);
                setApiData(data);
            } catch (err) {
                setApiData([])
                console.log(err)

            } 
        }

        dataProjects();
    }, [])


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
                                    <button aria-label='liked button'>
                                        <img src={like} alt='like button' />
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