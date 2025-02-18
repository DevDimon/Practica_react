import Survey from "./components/Survey"
import './App.css'

function App() {

  return (
    <>
      <div className="main">
        <div className="nav">
          <div className="logo">
            <img src="./assets/logo.svg" alt="logo" /> 
            <div className="logo-title">Адыгейский государственный университет</div>
          </div>
          <div className="module-title">Модуль онлайн опросов</div>
          <div className="button">
            Загрузить опрос
          </div>
        </div>
        <div className="content-wrap">
          <div className="content">
            <Survey/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
