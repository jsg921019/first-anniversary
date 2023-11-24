import { useState, useEffect} from 'react';

function useTypewritter(text, status) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [complete, setComplete] = useState(status);

  useEffect(() => {
    if (clicked) {
      setCurrentText(text);
      setCurrentIndex(text.length);
    }
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 75);

      return () => clearTimeout(timeout);
    }
  }, [clicked, currentIndex, text]);

  useEffect(() => {
    function click(e) {
      e.stopPropagation();
      const isInternalLink = e.target.tagName === 'a' || e.target.closest('a') || e.target.tagName === 'button' || e.target.closest('button');

      if (!isInternalLink) {
        setClicked(true);
      }
    }

    window.addEventListener('click', click);
    window.addEventListener('keydown', click);

    return () => {
      window.removeEventListener('click', click);
      window.removeEventListener('keydown', click);
    };
  }, []);

  useEffect(() => {
    if (currentIndex === text.length) {
      setComplete(true);
    }
  }, [text.length, currentIndex]);

  return [currentText, complete];
}

export default useTypewritter;
