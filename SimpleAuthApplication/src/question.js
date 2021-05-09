export class Question {
    static create(question) {
        return fetch('https://askme-app-9eff3-default-rtdb.firebaseio.com/questions.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                question.id = response.name
                return question
            })
            .then(question => {
                addToLocalStorage(question)
            })
            .then(Question.renderList)
    }

    static renderList() {
        const questions = getQuestionsFromLocalStorage()
        const html = questions.length
            ? questions.map(questionToCard).join('')
            : '<div class="mui--text-headline">You have not asked any questions yet ;(</div>'

        document.getElementById('list').innerHTML = html
    }
}


function addToLocalStorage(question) {
    let existingQuestions = getQuestionsFromLocalStorage()
    existingQuestions.push(question)
    localStorage.setItem('questions', JSON.stringify(existingQuestions))
}


function getQuestionsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('questions') || '[]')
}


function questionToCard(question) {
    return `
        <div class="mui--text-black-54">
            ${new Date(question.date).toLocaleDateString()}
            ${new Date(question.date).toLocaleTimeString()}
        </div>
        
        <div>
            ${question.text}
        </div>
        <br>
    `
}