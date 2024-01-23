import { useState, useEffect } from "react";

const Home = () => {
    document.title = "Home";
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
            x: e.clientX - 16,
            y: e.clientY - 16
            })
        }
        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.addEventListener('mousemove', mouseMove);
        }
    }, [])
    return (
        <section id="home">
            <div className="bio">
                <h1>CREATIVE</h1>
                <h1 className="d">DEVELOPER</h1>
            </div>
            <div className="profile">
                <div className="innerimg">
                    <img src="/download.png" alt="f" style={{
                        transform: `translate(${mousePosition.x /150}px, ${mousePosition.y /150}px)`,
                    }}/>
                </div>
            </div>
        </section>
    );
}

export default Home;