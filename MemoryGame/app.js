class MemoryGame {

    srcs = [null, 'jenos.png', 'lian.png', 'dredge.png', 'maldamba.png']

    constructor () {
        this.container = document.querySelector('.container')
    }
    check() {

    }
    win() {

    }
    lose() {

    }

    makeCardClickable(card) {
        card.addEventListener('click', (event) => {
            console.log('Clicked')
            const cardId = Math.abs(card.id)
            card.src = 'images/' + this.srcs[cardId]
        })
    }

    hideCardsIn(ms = 1000) {
        setTimeout(() => {
            const imgs = this.container.querySelectorAll('img')
            for (let img of imgs) {
                img.src = 'images/back.png'
                this.makeCardClickable(img)
            }
        }, ms)
    }

    initCards() {
      this.container.innerHTML = `
      <img id="1" src="images/jenos.png" class="img-fluid" height="180" width="300">
      <img id="2" src="images/lian.png" class="img-fluid" height="180" width="300">
      <img id="3" src="images/dredge.png" class="img-fluid" height="180" width="300">
      <img id="4" src="images/maldamba.png" class="img-fluid" height="180" width="300">
      <img id="-1" src="images/jenos.png" class="img-fluid" height="180" width="300">
      <img id="-2" src="images/lian.png" class="img-fluid" height="180" width="300">
      <img id="-3" src="images/dredge.png" class="img-fluid" height="180" width="300">
      <img id="-4" src="images/maldamba.png" class="img-fluid" height="180" width="300">
      `
    }
}

const g = new MemoryGame()
g.initCards()
g.hideCardsIn(1000)
