

class MemoryGame {

    srcs = [null, 'jenos.png', 'lian.png', 'dredge.png', 'maldamba.png']

    constructor () {
        this.container = document.querySelector('.container')
    }

    startNewGame() {
        this.lastClickedImageId = null
        this._shuffleImages()
        this._showImagesFor(3000)
        this._makeImagesClickable()
    }

    _makeImagesClickable() {
        const images = this.container.querySelectorAll('img')
        for (let img of images) {
            img.addEventListener('click', () => {
                console.log('Clicked')

                const imgID = Math.abs(img.id)
                const realImgSrc = 'images/' + this.srcs[imgID]
                console.log(img.src, realImgSrc)

                if (!img.src.includes(realImgSrc)) {
                    img.src = realImgSrc
                    this._checkWinLose(imgID)
                }
            })
        }
    }

    _checkWinLose(imgID) {
        if (!this.lastClickedImageId || this.lastClickedImageId == imgID) {
                this.lastClickedImageId ? this.lastClickedImageId = null : this.lastClickedImageId = imgID
            } else {
                setTimeout(() => {
                    alert('You have lost')
                    this.startNewGame()
                }, 500)

            }
    }

    _showImagesFor(ms = 1000) {
        const images = this.container.querySelectorAll('img')
        for (let img of images) {
            const imgID = Math.abs(img.id)
            img.src =  'images/' + this.srcs[imgID]
        }
        setTimeout(() => {
            for (let img of images) {
                img.src = 'images/back.png'
            }
        }, ms)
    }


    _shuffleImages() {
        let images = this.container.querySelectorAll('img')
        this.container.innerHTML = ''

        Array.from(images)
            .sort(() => 0.5 - Math.random())
            .forEach((img) => this.container.innerHTML += img.outerHTML)
    }
}


const g = new MemoryGame()
g.startNewGame()

document.querySelector('#playButton')
    .addEventListener('click', () => {
        g.startNewGame()
    })

