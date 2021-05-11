import './style.css'
import {Comment} from './comment'

const displayCommentsInterval = 10000
const commentsSection = document.getElementById('comments')
const form = document.getElementById('commentForm')
const usernameInput = document.querySelector('#username')
const commentInput = document.querySelector('#comment')
const submitBtn = form.querySelector('button')


displayComments()
setInterval(displayComments, displayCommentsInterval)

// submitBtn.addEventListener()
// commentInput.addEventListener()
// usernameInput.addEventListener()
form.addEventListener('submit', sendAndUpdateNotes)




function sendAndUpdateNotes(event) {
    event.preventDefault()
    let comment = {
        from: usernameInput.value,
        text: commentInput.value,
        date: new Date().toJSON()
    }

    Comment.store(comment)
        .then(comm => {
            console.log(comm)
            displayComments()
        })
}

function displayComments() {
    Comment.getAll()
        .then(comments => {
            console.log(comments)
            const html = Comment.createHTML(comments)
            commentsSection.innerHTML = html
        })
}
