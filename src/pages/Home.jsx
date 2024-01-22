import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Icon from '@mdi/react';
import { mdiSwordCross } from '@mdi/js';

function SampleNextArrow() {
    return (
        <div
        style={{display: "none"}}
        />
    );
}

function SamplePrevArrow() {
    return (
        <div
        style={{display: "none"}}
        />
    );
}

const Home = () => {
    document.title = "Home";
    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };
    return (
        <section id="home">
            <div className="bio">
                <h1>CREATIVE</h1>
                <h1 className="d">DEVELOPER</h1>
            </div>
            <div className="profile">
                <div className="ptext">
                    <div>
                        <Slider {...settings} id="slider">
                            <div className="card">TUR<Icon className="con" path={mdiSwordCross} size={5} />KY</div>
                            <div className="card">TUR<Icon className="con" path={mdiSwordCross} size={5} />KY</div>
                            <div className="card">TUR<Icon className="con" path={mdiSwordCross} size={5} />KY</div>
                            <div className="card">TUR<Icon className="con" path={mdiSwordCross} size={5} />KY</div>
                            <div className="card">TUR<Icon className="con" path={mdiSwordCross} size={5} />KY</div>
                        </Slider>
                    </div>
                </div>
                <div className="innerimg">
                    <img src="/download.png" alt="f" />
                </div>
            </div>
        </section>
    );
}

export default Home;