function greet(username){
    let today = new Date()
    let curHr = today.getHours()

if (curHr < 12) {
  return 'Good morning, '+username
} else if (curHr < 18) {
  return 'Good afternoon, '+username
} else {
  return 'Good evening, '+username
}
}
exports.greet = greet;