import { useState, useEffect } from 'react';

const Github = 'https://api.github.com/users/Islam-Turky/repos';
const Projects = () => {
    // create state repo.
    const [repo, setRepo] = useState([]);
    // const [repos, setRepo] = useState([]);
    // fetch my github profile.
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
                {repo.map((rep) => {
                    const { name, id, fork, html_url } = rep;
                    if (!fork && name !== "skillCreator" 
                    && name !== "store" 
                    && name !== "Islam-Turky" 
                    && name !== "islam-torky.github.io"
                    ) {
                    return(
                    <div key={id} id='linksforproject'>
                        <a href={html_url} target='blank'className='linksproject'>{name}</a>
                    </div>
                    )}
                })}
            </div>
        </div>
    )
}

export default Projects;