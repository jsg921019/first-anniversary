import './App.scss';
import Main from './views/Main';
import Mailbox from './views/Mailbox';
import Mail from './views/Mail';
import Projects from './views/Projects';
// import Contact from './views/Contact';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { text1, text2, text3 } from './text.js'
import boy from './assets/boy2.jpeg'
import girl from './assets/girl.jpeg'
import couple from './assets/glamping.jpeg'

var Snow = {
  el: "#snow", 
  density: 20000, // higher = fewer bits
  maxHSpeed: 2, // How much do you want them to move horizontally
  minFallSpeed: 0.5,
	canvas: null,
	ctx: null, 
  particles: [],
  colors: [],
  mp: 1,
  quit: false,
  init(){
    this.canvas = document.querySelector(this.el);
    this.ctx = this.canvas.getContext("2d");
    this.reset();
    requestAnimationFrame(this.render.bind(this));
    window.addEventListener("resize", this.reset.bind(this));
  },
  reset(){
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = this.w;
    this.canvas.height = this.h;
    this.particles = [];
    this.mp = Math.ceil(this.w * this.h / this.density);
		for(var i = 0; i < this.mp; i++)
		{
			var size = Math.random()*8+8;
			this.particles.push({
				x: Math.random()*this.w, //x-coordinate
				y: Math.random()*this.h, //y-coordinate
				w: size,
				h: size,
				vy: this.minFallSpeed + Math.random(), //density
				vx:(Math.random()*this.maxHSpeed) - this.maxHSpeed/2,
				fill: '#fff',
				s: (Math.random() * 0.2) - 0.1
			});
		}
  },
  
  render(){
		this.ctx.clearRect(0, 0, this.w, this.h);
		this.particles.forEach((p,i) => {
      p.y += p.vy;
			p.x += p.vx;
			this.ctx.fillStyle = p.fill;
			this.ctx.fillRect(p.x, p.y, p.w, p.h);
      if(p.x > this.w+5 || p.x < -5 || p.y > this.h){
        p.x = Math.random()*this.w;
        p.y = -10;
			}
    });
    if(this.quit){
      return;
    }
		requestAnimationFrame(this.render.bind(this));
  },
  destroy(){
    this.quit = true;
  }
	
};

function App() {

  useEffect(() => {
    Snow.init();
  }, [])

  return (
    <>
      <canvas id='snow'></canvas>
      <main>
        <Routes>
          <Route path='' element={<Main />} />
          <Route path='/mailbox' element={<Mailbox />} />
          <Route path='/mailbox/1' element={<Mail thumbnail={boy} letter={text1}/>} />
          <Route path='/mailbox/2' element={<Mail thumbnail={girl} letter={text2}/>} />
          <Route path='/mailbox/3' element={<Mail thumbnail={couple} letter={text3}/>} />
          <Route path='/gallery' element={<Projects />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
