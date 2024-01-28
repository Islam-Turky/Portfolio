import Footer from '../components/Footer'
// import { FaReact, FaJs, FaPython, FaNodeJs} from "react-icons/fa6";
import { myCirtifications } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './style.css';
// import required modules
import { EffectCards } from 'swiper/modules';

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
            <div className='maintitle'>
                <h1>About Me</h1>
            </div>
            <div className='cv'>
                <div className="someinfo">
                    <p>
                        Hey! <br />
                        <span id='green'>I am Islam </span> <br />
                        <span>FullStack Developer</span>
                    </p>
                </div>
                <div className="myphoto">
                    <img src="/about.jpg" alt="photo" />
                </div>
            </div>
            <div id='breaker'></div>
            {/* Cirtifications */}
            <div id="cirt">
                <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper">
                    {data.map((item) => {
                        const {id, images} = item;
                        return (
                                <SwiperSlide key={id} className='photosInSwiper'>
                                    <img key={id} src={`${images}`} alt='certificate'/>
                                </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
        <Footer />
    </>
    )
};
export default About;
