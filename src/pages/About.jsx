import Footer from '../components/Footer'
import { FaReact, FaJs, FaPython, FaNodeJs} from "react-icons/fa6";
import { myCirtifications } from '../data';
// import AboutNavbar from '../components/AboutNavbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './style.css';
// import required modules
import { EffectCards } from 'swiper/modules';
// import Contact from './Contact';

const data = myCirtifications;

const About = () => {
    // make page title
    document.title = "ABOUT";
    // retuen my About page.
    return (
    <>
        {/* <AboutNavbar /> */}
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
                <h1 id='certificarion-head-text'>Cirtifications</h1>
                <div id="cirt">
                    <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper">
                        {data.map((item) => {
                            const {id, images} = item;
                            return (
                                    <SwiperSlide key={id}>
                                        <img key={id} src={`${images}`} alt='certificate'/>
                                    </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            {/* <Contact /> */}
        </section>
        <Footer />
    </>
    )
};
export default About;
