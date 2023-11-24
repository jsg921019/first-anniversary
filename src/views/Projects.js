import { Link } from 'react-router-dom';
import useTypewritter from '../hooks/useTypewriter';
import Card from '../components/Card';
import gallery1 from '../assets/gallery1.jpeg';
import gallery2 from '../assets/gallery2.jpeg';
import gallery3 from '../assets/gallery3.jpeg';
import gallery4 from '../assets/gallery4.jpeg';
import gallery5 from '../assets/gallery5.jpeg';
import gallery6 from '../assets/gallery6.jpeg';
import gallery7 from '../assets/gallery7.jpeg';
import gallery8 from '../assets/gallery8.jpeg';

function Projects() {
  const [text, complete] = useTypewritter('이번에도 같이 찍은 사진이 별로 없어서... 다음에는 진짜 사진으로 채워보자', false);
  return (
    <section className='overload nes-container with-title is-rounded'>
      <h2 className='title' style={{fontSize: "20px", border:"solid", borderWidth: '0.2rem', borderColor:'#000000', marginBottom: '2rem', transform: 'translate(0, -0.5rem)'}}>사진첩</h2>
      <p>{text}</p>
      <div className='card-grid'>
        <Card img={gallery6} header='청출어람' description='요리에는 별 관심이 없던 내가 처음으로 은내에게 파스타 레시피를 전수받은 순간' />
        <Card img={gallery4} header='토요일엔' description='토요일엔 밥먹으면서 나는솔로 보는 것은 필수!' />
        <Card img={gallery5} header='들어는봤나' description='스위니토드를 처음보고 일주일동안 헤어나오지를 못하였다' />
        <Card img={gallery7} header='리움미술관' description='김범 전시회를 보면서 바위가 되는 법에 대해 진지하게 토론중이다' />
        <Card img={gallery2} header='첫여행' description='대천에서 레일바이크를 타면서 덜덜 떠는 중' />
        <Card img={gallery8} header='충격적 패배' description='스크린 야구에서 정승균 선수 안타깝게 패배' />
        <Card img={gallery1} header='서울숲' description='벚꽃보다 사람이 더 많았던 벚꽃놀이' />
        <Card img={gallery3} header='하나둘셋T1화이팅' description='은내가 응원을 도와준 덕분에 페이커가 웃을 수 있었다' />
      </div>
      {!complete && <span className='skip'>press any button to skip</span>}
      <Link to={'/mailbox'} id='home'>
        뒤로가기
      </Link>
    </section>
  );
}

export default Projects;
