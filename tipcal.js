function totalAmount(bill, service) {
  if (service == 'good') {
    const tip = (bill * .2).toFixed(2)
    console.log(tip)
  }
  else if (service == 'fair') {
    const tip = (bill * .15).toFixed(2)
    console.log(tip)
  }
  else {
    const tip = (bill * .1).toFixed(2)
    console.log(tip)
  }
}

totalAmount(212, 'fair')