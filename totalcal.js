function tipAmount(bill, service) {
  if (service == 'good') {
    const total = (bill + (bill * .2)).toFixed(2)
    console.log(total)
  }
  else if (service == 'fair') {
    const total = (bill + (bill * .15)).toFixed(2)
    console.log(total)
  }
  else {
    const total = (bill + (bill * .1)).toFixed(2)
    console.log(total)
  }
}

tipAmount(212, 'good')