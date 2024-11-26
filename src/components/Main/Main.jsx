import { useContext } from 'react';
import { assets } from '../../assets/assets';
import { cardContent } from '../../helpers/cardContent';
import './Main.css';
import { Context } from '../../context/Context';

export const Main = () => {

  const {
    onSent,
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    loading,
    resultData } = useContext(Context);


  return (
    <div className='main'>

      <header className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user-icon" />
      </header>

      <section className="main-container">

        {!showResult ? (
          <>
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
          </>
        ) :
          <div className='result'>

            <div className="result-title">
              <img src={assets.user_icon} alt="user-icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="gemini-icon" />
              {loading
                ? <div className='loader'> <hr /><hr /><hr /> </div>
                : <p dangerouslySetInnerHTML={{ __html: resultData }} ></p>
              }
            </div>

          </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder='Ingresa un prompt..' />
            <div>
              <img src={assets.gallery_icon} alt="gallery-icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="send_icon" />
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
