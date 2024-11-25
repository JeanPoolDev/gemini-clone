import { assets } from '../../assets/assets';
import { cardContent } from '../../helpers/cardContent';
import './Main.css';

export const Main = () => {
  return (
    <div className='main'>

      <header className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user-icon" />
      </header>

      <section className="main-container">
        <div className="greet">
          <p><span>Hola. ¿Cómo estás?</span></p>
          <p>Que aventura nos espera...</p>
        </div>
        <div className='cards'>

          {
            cardContent.map(card => (
              <div key={card.title} className='card'>
                <p>{card.message}</p>
                <img src={card.img} alt={card.title} />
              </div>
            ))
          }

        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Ingresa un prompt..' />
            <div>
              <img src={assets.gallery_icon} alt="gallery-icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              <img src={assets.send_icon} alt="send_icon" />
            </div>
          </div>
          <p className='bottom-info'>
            Recuerda que este proyecto es con fines educativos. @JP
          </p>
        </div>

      </section>
    </div>
  )
}
