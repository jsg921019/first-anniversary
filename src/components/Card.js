function Card({ img, header, description, link }) {
  return (
    <div className='card'>
      <img src={img} alt={header} className='pixel-corners' />
      <h3 style={{marginTop: '1rem'}}>{header}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
