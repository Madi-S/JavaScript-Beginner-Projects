const databaseURL = 'https://askme-app-9eff3-default-rtdb.firebaseio.com/comments.json'


export class Comment {
    static store(comment) {
        return fetch(databaseURL, {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                comment.id = response.name
                return comment
            })
    }

    static getAll() {
        return fetch(databaseURL)
            .then(response => response.json())
    }

    static delete(commentID) {

    }

    static createHTML(comments) {
        return Object.values(comments).map(comment => {
            const date = comment.date
                ? new Date(comment.date).toLocaleDateString() + ' | ' + new Date(comment.date).toLocaleTimeString()
                : '5 seconds ago'
            return `
                <div class="mui--text-headline">${comment.from}</div>
                <div class="mui--text-black-54">${date}</div>
                <div>${comment.text}</div>
                <br>`
        }).join('')
    }
}