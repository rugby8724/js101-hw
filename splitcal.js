function splitAmount(bill, service='fair', split=1) {
  if (service == 'good') {
    const total = (bill + (bill * .2))
    const totalSplit = (total / split).toFixed(2)
    console.log(totalSplit)
  }
  else if (service == 'fair') {
    const total = (bill + (bill * .2))
    const totalSplit = (total / split).toFixed(2)
    console.log(totalSplit)
  }
  else {
    const total = (bill + (bill * .2))
    const totalSplit = (total / split).toFixed(2)
    console.log(totalSplit)
  }
}

splitAmount(212, 'good', 3)