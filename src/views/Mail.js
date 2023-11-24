import { Link } from 'react-router-dom';
import useTypewritter from '../hooks/useTypewriter';

function Mail({thumbnail, letter}) {
  const [text, complete] = useTypewritter(letter, false);
  return (
    <section className='about overload nes-container with-title is-rounded'>
      <h2 className='title' style={{transform: 'translate(0, -0.5rem)', border:"solid", borderWidth: '0.2rem', borderColor:'#000000'}}>편지</h2>
      <img src={thumbnail} alt='thumbnail' className='pixel-corners' style={{marginBottom: "1rem"}}/>
      <p>{text}</p>
      {!complete && <span className='skip'>press any button to skip</span>}
      <Link to={'/mailbox'} id='home'>
        뒤로가기
      </Link>
    </section>
  );
}

export default Mail;
