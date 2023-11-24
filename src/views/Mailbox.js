import { Link } from 'react-router-dom';

function Mailbox() {
  return (
    <section className='overload nes-container with-title is-centered is-rounded'>
      <h1 className='title' style={{fontSize: "20px", border:"solid", borderWidth: '0.2rem', borderColor:'#000000', marginBottom: '2rem', transform: 'translate(0, -0.5rem)'}}>문자함</h1>
      <ul>
        <li>
          <Link to={'./1'}>문자1</Link>
        </li>
        <li>
          <Link to={'./2'}>문자2</Link>
        </li>
        <li>
          <Link to={'./3'}>문자3</Link>
        </li>
        <li>
          <Link to={'/gallery'}>사진첩</Link>
        </li>
        <li>
          <Link to={'/'} style={{fontSize: '14px'}}>뒤로가기</Link>
        </li>
      </ul>
    </section>
  );
}

export default Mailbox;
