import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { useState } from "react";
import { AiTwotonePhone, AiOutlineClose} from "react-icons/ai";
import { FaInfo, FaHome} from "react-icons/fa";

const Navbar = () => {
    const [sidebar, setSideBar] = useState(false);
    const showSidebar = () => {
        return setSideBar(!sidebar)
    };

    return (
        <BrowserRouter>
            <header>
                <div id="logo-btn">
                    <h1 id="logo">ISLAM</h1>
                </div>
                <nav>
                    <NavLink to="/" className="navlink">Home</NavLink>
                    <NavLink to="/About" className="navlink">About</NavLink>
                    <NavLink to="/Contact" className="navlink">Contact</NavLink>
                </nav>
                <span onClick={showSidebar} id="lista" className={sidebar? 'rotate':null}>{
                    sidebar ? <AiOutlineClose /> : <BsList />
                }</span>
            </header>
            <div id="side_bar" className={sidebar ? "showsidebar" : "hideSidebar"}>
                <div id="links_sidebar">
                    <Link to="/" className="sidelink"><span><FaHome /></span>Home</Link>
                    <Link to="/About" className="sidelink"><span><FaInfo /></span>About</Link>
                    <Link to="/Contact" className="sidelink"><span><AiTwotonePhone /></span>Contact</Link>
                </div>
            </div>
            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="About" element={<About />}/>
                    <Route path="Contact" element={<Contact />}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
};
export default Navbar; 