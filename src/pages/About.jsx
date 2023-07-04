import { useEffect, useState } from 'react';
import Footer from '../components/Footer'
import { FaReact, FaJs, FaPython, FaNodeJs, FaCircleChevronLeft, FaCircleChevronRight} from "react-icons/fa6";
import { myCirtifications } from '../data';
import AboutNavbar from '../components/AboutNavbar';

const data = myCirtifications;
const Github = 'https://api.github.com/users/Islam-Turky/repos';

const About = () => {
    // make page title
    document.title = "ABOUT";
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
    const cirt = document.getElementById('cirt');
    const nextbtn = document.getElementById('nextvbtn');
    const prevtbtn = document.getElementById('prevbtn');
    if(cirt){
        cirt.addEventListener('wheel', (eve) => {
            eve.preventDefault();
            cirt.scrollLeft += eve.deltaY;
            cirt.style.scrollBehavior = 'smooth';
        })

        nextbtn.addEventListener('click',() => {
            cirt.scrollLeft += 400;
        });

        prevtbtn.addEventListener('click',() => {
            cirt.scrollLeft -= 400;
        });
    }
    // retuen my About page.
    return (
    <>
        <AboutNavbar />
        <section id='about'>
            {/* cv */}
            <div id='cv' className='secti'>
                <div>
                    {/* image */}
                    <div id='profileimage'>

                    </div>
                    {/* skills */}
                    <div id='skills'>
                            <h3>Skills</h3>
                            <div id='skillicon'>
                                <span id='js'><FaJs /></span>
                                <span id='react'><FaReact /></span>
                                <span id='py'><FaPython /></span>
                                <span id='node'><FaNodeJs /></span>
                            </div>
                    </div>
                </div>
                {/* word about me */}
                <div id='maincirtria'>
                    <h1>About Me</h1>
                    {/* content */}
                    <div id='education'>
                        <h3>Education</h3>
                        <h5><span className='icon'>-</span>Tanta University</h5>
                        <p className='word'>
                            Study in The college of Science
                            in Computer Science Department.
                            in the First Year i was Learn C++ programmin Language
                            Basics , in the Second Year learn data structure and algorithms and
                            in the Third Year learn Software Engineering , System Analysis and
                            Simulation.
                        </p>
                        <h5><span className='icon'>-</span>Self Learning</h5>
                        <p className='word'>
                            When I was Study in the university i
                            was Planning to Learn the New Technologies
                            depend on my self , where I Collect The 
                            Resources From The Internet and learning 
                            from this resources such as Youtube, W3 Schools
                            and MDN ...
                        </p>
                    </div>
                </div>
            </div>
            {/* Cirtifications */}
            <div id="cirtifications" className='secti'>
                <h1>Cirtifications</h1>
                <div id='container'>
                    <i className='iconarrow' id='prevbtn'><FaCircleChevronLeft /></i>
                    <div id="cirt">
                        {data.map((item) => {
                            const {title, id, images, width, height} = item;
                            return (
                                <div key={id} className='cart' id={id}>
                                    <p>{title}</p>
                                    <div
                                        id='cirtphoto'
                                    style=  {{ 
                                                background: `url(${images}) no-repeat`,
                                                width: `${width}` ,
                                                height: `${height}`
                                            }}
                                    >

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <i className='iconarrow' id='nextvbtn'><FaCircleChevronRight /></i>
                </div>
            </div>
            {/* projects */}
            <div id='projects' className='secti'>
                <h1>Projects</h1>
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
        </section>
        <Footer />
    </>
    )
};
export default About;
