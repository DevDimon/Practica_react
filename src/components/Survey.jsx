import data from "../survey.json"
import QCheckbox from "./QCheckbox"
import QRadio from "./QRadio"
import QSelect from "./QSelect"
import QText from "./QText"

const Survey = () => {

    let answers = {}

    const endSurvey = () => {
        // console.log("Нажал кнопку")
    }

    const updateAnswers = (ans) => {
        answers = {...answers, ...ans}
        console.log(answers)
    }

    return (
        <>
            <hr/>
            <h2>{data.title}</h2>
            <h3>{data.description}</h3>
            <hr/>
            {
            data.questions.map((q)=>{
                return (
                    <div key={q.id}>
                        <div className = "qTitle">{q.id}.{q.text}</div>   
                        {q.type == "text"       &&  <QText question = {q} onAnswer = {updateAnswers} />}
                        {q.type == "radio"      &&  <QRadio question = {q}  onAnswer = {updateAnswers} />}
                        {q.type == "checkbox"   &&  <QCheckbox question = {q}  onAnswer = {updateAnswers} />}
                        {q.type == "select"     &&  <QSelect question = {q}  onAnswer = {updateAnswers} />}
                    </div>
                )
            })
            }
            <div>
                <button onClick={endSurvey}>Закончить опрос</button>
            </div>
        </>
    )
}

export default Survey; 