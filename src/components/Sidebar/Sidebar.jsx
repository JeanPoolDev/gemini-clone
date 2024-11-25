import './Sidebar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'

export const Sidebar = () => {

  const [extended, setExtended] = useState(false)

  return (
    <div className="sidebar">

      <section className="top">
        <img
          onClick={() => setExtended(prevState => !prevState)}
          className='menu'
          src={assets.menu_icon}
          alt="menu-icon"
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus-icon" />
          {extended ? <p>Nuevo Chat</p> : null}
        </div>

        {extended
          ? (
            <div className="recent">
              <p className="recent-title">Chat Actual</p>
              <div className="recent-entry">
                <img src={assets.message_icon} alt="icono-message" />
                <p>Whats is react?</p>
              </div>
            </div>
          )
          : null
        }

      </section>

      <section className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question-icon" />
          {extended ? <p>Ayuda</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history-icon" />
          {extended ? <p>Actividad</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="setting-icon" />
          {extended ? <p>Ajustes</p> : null}
        </div>
      </section>

    </div>
  )
}
