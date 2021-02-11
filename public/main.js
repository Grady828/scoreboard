let team1TotalPoints = 0
let team2TotalPoints = 0

function updateTeamName1() {
  const team1 = document.querySelector('input.Team1NameInput').value
  document.querySelector('h2.Team1Name').textContent = team1
  console.log(team1)
}
function updateTeamName2() {
  const team2 = document.querySelector('input.Team2NameInput').value
  document.querySelector('h2.Team2Name').textContent = team2
  console.log(team2)
}
function teamOneAddAPoint() {
  if (team1TotalPoints >= 21) {
    const winner = document.querySelector('h2.Team1Name').textContent
    window.alert(`${winner} WinsA New Car!!!!`)

    return
  }
  team1TotalPoints++
  document.querySelector('h3.team1Points').textContent = team1TotalPoints
}
function teamTwoAddAPoint() {
  if (team2TotalPoints >= 21) {
    const winner = document.querySelector('h2.Team2Name').textContent
    window.alert(`${winner} WinsA New Car!!!!`)

    return
  }
  team2TotalPoints++
  document.querySelector('h3.team2Points').textContent = team2TotalPoints
}

function teamOneSubtractAPoint() {
  if (team1TotalPoints <= 0) {
    return
  }
  team1TotalPoints--
  document.querySelector('h3.team1Points').textContent = team1TotalPoints
}
function teamTwoSubtractAPoint() {
  if (team2TotalPoints <= 0) {
    return
  }
  team2TotalPoints--
  document.querySelector('h3.team2Points').textContent = team2TotalPoints
}
function reset() {
  location.reload(true)
}

function main() {
  if (document.querySelector('h2.Team1Name')) {
    document.querySelector('h2.Team1Name').textContent = 'Team 1'
  }
  document
    .querySelector('button.update-TeamName1-Button')
    .addEventListener('click', updateTeamName1)

  if (document.querySelector('h2.Team2Name')) {
    document.querySelector('h2.Team2Name').textContent = 'Team 2'
  }
  document
    .querySelector('button.update-TeamName2-Button')
    .addEventListener('click', updateTeamName2)

  const plus1Button = document
    .querySelector('#oneAddButton')
    .addEventListener('click', teamOneAddAPoint)

  const plus2Button = document
    .querySelector('#twoAddButton')
    .addEventListener('click', teamTwoAddAPoint)

  const minus1Button = document
    .querySelector('#oneSubtractButton')
    .addEventListener('click', teamOneSubtractAPoint)

  const minus2Button = document
    .querySelector('#twoSubtractButton')
    .addEventListener('click', teamTwoSubtractAPoint)

  const resetButton = document
    .querySelector('#Reset')
    .addEventListener('click', reset)
}

document.addEventListener('DOMContentLoaded', main)
