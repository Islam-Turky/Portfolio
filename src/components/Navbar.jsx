import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Resources from "../pages/Resources";
import Blog from "../pages/Blog";
import Learn from "../pages/Learn";
import Contact from "../pages/Contact";
import { useState } from "react";
import { AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
    const [sidebar, setSideBar] = useState(false);
    const showSidebar = () => {
        return setSideBar(!sidebar)
    };

    return (
        <BrowserRouter>
            <header>
                <div id="logo-btn">
                    <NavLink to="/" id="logo">
                        <img src="/Islam.jpg" alt="profile" width={'100px'} height={'100px'}/>
                    </NavLink>
                </div>
                <nav>
                    <div>
                        <NavLink to="/Resources" className="navlink">Resources</NavLink>
                        <NavLink to="/Projects" className="navlink">Work</NavLink>
                        <NavLink to="/Blog" className="navlink">Blog</NavLink>
                        <NavLink to="/Learn" className="navlink">Learn</NavLink>
                        <NavLink to="/About" className="navlink">About</NavLink>
                    </div>
                </nav>
                <div className="contacticon">
                    <a href="/Contact">Contact</a>
                </div>
                <span onClick={showSidebar} id="lista" className={sidebar? 'rotate':null}>{
                    sidebar ? <AiOutlineClose /> : <BsList />
                }</span>
            </header>
            <div id="side_bar" className={sidebar ? "showsidebar" : "hideSidebar"}>
                <div id="links_sidebar">
                    <Link to="/Resources" className="sidelink">Rsources</Link>
                    <Link to="/Projects" className="sidelink">Work</Link>
                    <Link to="/Blog" className="sidelink">Blog</Link>
                    <Link to="/Learn" className="sidelink">Learn</Link>
                    <Link to="/About" className="sidelink">About</Link>
                    <Link to="/Contact" className="sidelink">Contact</Link>
                </div>
            </div>
            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="Contact" element={<Contact />}/>
                    <Route path="About" element={<About />}/>
                    <Route path="Projects" element={<Projects />}/>
                    <Route path="Resources" element={<Resources />}/>
                    <Route path="Blog" element={<Blog />}/>
                    <Route path="Learn" element={<Learn />}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
};
export default Navbar; 