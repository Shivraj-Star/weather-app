const isPrimeDate = () => {
    let today = new Date();
    let date = today.getDate();
    for(let i = 2; i < date; i++)
      if(date % i === 0) return false;
    return date > 1;
  }

module.exports = isPrimeDate;