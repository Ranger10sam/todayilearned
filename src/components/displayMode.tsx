"use client"
import { useState, useEffect, useRef } from 'react';
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@/styles/displayMode.css'

const DisplayMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasExpanded, setHasExpanded] = useState(false); // Track expansion state
  const [animationClass, setAnimationClass] = useState(''); // Track animation state
  const containerRef = useRef<HTMLDivElement | null>(null); // Type the ref

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      document.body.classList.toggle('dark-mode', newMode);
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  const handleClick = () => {
    if (!hasExpanded) {
      setHasExpanded(true);
    } else {
      toggleDarkMode();
      setAnimationClass('icon-transition');
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setHasExpanded(false); // Collapse the droplet when clicking outside
    }
  };

  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    } else {
      // Set default theme if not found
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (animationClass) {
      const timer = setTimeout(() => {
        setAnimationClass('');
      }, 500); // Duration of the animation in milliseconds
      return () => clearTimeout(timer);
    }
  }, [animationClass]);

  return (
    <div
      ref={containerRef}
      className={`droplet-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <div className={`droplet-bar ${hasExpanded ? 'droplet-expanded' : ''}`}>
        <button onClick={handleClick} className="droplet-btn">
          <FontAwesomeIcon icon={faSun} className={`icon ${animationClass} ${isDarkMode ? 'icon-down' : 'icon-up'}`} />
          <FontAwesomeIcon icon={faMoon} className={`icon ${animationClass} ${isDarkMode ? 'icon-up' : 'icon-down'}`} />
        </button>
      </div>
    </div>
  );
};

export default DisplayMode;
