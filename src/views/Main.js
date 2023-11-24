import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import couple from '../assets/couple.png';

function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    function goHome(e) {
      e.stopPropagation();
      const isInternalLink = e.target.tagName === 'a' || e.target.closest('a') || e.target.tagName === 'button' || e.target.closest('button');

      if (!isInternalLink) {
        navigate('/mailbox');
      }
    }

    window.addEventListener('keydown', goHome);
    window.addEventListener('click', goHome);
    return () => {
      window.removeEventListener('keydown', goHome);
      window.removeEventListener('click', goHome);
    };
  }, [navigate]);

  return (
    <>
    <img id='couple' src={couple} alt="couple" />
    <section className='start-menu'>
      <h1>승균 은내 축 1주년</h1>
      <p className='start-text'>CLICK TO CONTINUE</p>
    </section>
    </>
  );
}

export default Main;
