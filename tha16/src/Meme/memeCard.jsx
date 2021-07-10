import './memeCard.css';
import Dogo from './sephora.jpg';

const MemeCard = () => {
  return (
    <div className="memeParentDiv">
      <div className='memeApp'>
        <div className='memeImgDiv'>
          <img className="memeImg" src={Dogo} alt='sephora_Image' />
        </div>
        <div className='memeMainText'>
          <h1 className='memeMainHeading'>Life ka Truth</h1>
          <p className='memeMainPara'>By Naruto :)</p>
        </div>
      </div>
    </div>
  )
};

export default MemeCard;