function updateTeamName() {
  const team1 = document.querySelector('input.Team1NameInput').value
  document.querySelector('h2.Team1Name').textContent = team1
  console.log(team1)
}

function main() {
  if (document.querySelector('h2.Team1Name')) {
    document.querySelector('h2.Team1Name').textContent = 'Team 1'
  }
  document
    .querySelector('button.update-TeamName1-Button')
    .addEventListener('click', updateTeamName)
}

document.addEventListener('DOMContentLoaded', main)
