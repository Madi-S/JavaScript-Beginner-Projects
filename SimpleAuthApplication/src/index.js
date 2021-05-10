import {createModal, questionInputIsValid} from './utils'
import {Question} from './question'
import './styles.css'
import {authWithEmailAndPassword, getAuthForm} from "./auth";

console.log('App is running!')

const modalBtn = document.getElementById('modalBtn')
const form = document.getElementById('questionForm')
const input = form.querySelector('#questionInput')
const submitBtn = form.querySelector('#submitQuestionBtn')

modalBtn.addEventListener('click', openModal)
window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitQuestionFormHandler)
input.addEventListener('input', lockBtn)


function lockBtn(event) {
    submitBtn.disabled = !questionInputIsValid(input.value)
}


function submitQuestionFormHandler(event) {
    event.preventDefault()

    if (questionInputIsValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }

        submitBtn.disabled = true

        // Async request to server to store user's question
        console.log('Question:', question)
        Question.create(question).then(() => {
            input.value = ''
            input.className = ''
            // submitBtn.disabled = false
        })


    }
}


function openModal() {
    createModal('Authorization', getAuthForm())
    document
        .getElementById('authForm')
        .addEventListener('submit', authFormHandler, {once: true})
}


function authFormHandler(event) {
    event.preventDefault()
    const email = event.target.querySelector('#email').value
    const password = event.target.querySelector('#password').value

    authWithEmailAndPassword(email, password)
        .then(Question.fetch)
        .then(renderModalAfterAuth)
}


function renderModalAfterAuth(content) {
    console.log(content)
    return 55
}