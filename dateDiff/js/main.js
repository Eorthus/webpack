import { printError, printREsult } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import showf from './show.js'
import timeer from './timer.js';

const form = document.getElementById('datecalc')
showf();
timeer();

form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target)

  const firsDate = formData.get('firstDate')
  const secondDate = formData.get('secondDate')

  if (!firsDate || !secondDate) {
    printError('Oooooopppsss - введите текст!!!!')
  } else {
    const dateDiff = getDateDiff(firsDate, secondDate)
    printREsult(dateDiff)
  }
}
