import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
const App = () => {
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
  const variants = {
    default:{
      x: mousePosition.x,
      y: mousePosition.y,
      backgroundColor: '#22ae5a',
    }
  }
  return (
    <>
    <motion.div 
      className="cursor-dot" 
      data-cursor-dot
      variants={variants} 
      animate= "default"
    >
    </motion.div>
    <Navbar />
    </>
  );
}

export default App;
