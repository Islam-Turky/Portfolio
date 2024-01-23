import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

const Github = 'https://api.github.com/users/Islam-Turky/repos';
const Projects = () => {
    // create state repo.
    const [repo, setRepo] = useState([]);
    useEffect(() => {
        const fetchAccount = async () => {
        try {
            const response = await fetch(Github);
            const myRepo = await response.json();
            setRepo(myRepo);
        }catch (err) {
            console.log(err);
        }
    }
    fetchAccount();
    },[])
    return(
            <div id='projects'>
                <div id='container'>
                    <div className='title'>
                        <h1>Projects</h1>
                        <p>Let me show you</p>
                    </div>
                    <div className='works'>
                {repo.map((rep) => {
                    const { name, id, fork, html_url } = rep;
                    if (!fork && name !== "skillCreator" 
                    && name !== "store" 
                    && name !== "Islam-Turky" 
                    && name !== "islam-torky.github.io"
                    ) {
                        return(
                    <div key={id} className='linksforproject'>
                        <div className="namew">{name}</div>
                        <div className="logo"><FaGithub /></div>
                        <a href={html_url} target='blank'>github</a>
                    </div>
                    )}
                })}
                </div>
            </div>
        </div>
    )
}

export default Projects;