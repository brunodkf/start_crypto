'use client'
import { useEffect, useState } from 'react';
import { FaRegCircleUp } from "react-icons/fa6";

export default function BackToTop() {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY >= 700);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`topo__button hidden ${isVisible ? 'lg:block' : ''} fixed bottom-10 right-10 cursor-pointer`}
      aria-label="Voltar ao topo"
    >
      <FaRegCircleUp className='text-green-500 text-4xl' />
    </button>
  );
}