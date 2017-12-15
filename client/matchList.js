const footbalApiUrl = 'http://localhost:8000/api/football/matches'

let template = function(match) {
  if(match.outcome){
    return `
    <tr>
        <td>${match.homeTeam.name}</td>
        <td>${match.homeGoals}</td>
        <td><a href="/matchDetail.html?id=${match.dbid}">Highlights</a></td>
        <td>${match.awayGoals}</td>
        <td>${match.awayTeam.name}</td>
      
    </tr>`
  }else{
    return `
    <tr>
        <td>${match.homeTeam.name}</td>
        <td> - </td>
        <td></td>
        <td> - </td>
        <td>${match.awayTeam.name}</td>
    </tr>`     
  }

}

function refillMatches() {
  //2017-12-13T12:00:00-03:00
  // let monday = moment().startOf('isoweek')

  $.ajax({
    type: 'GET',
    url: footbalApiUrl + '?from=2017-12-13T12:00:00-03:00',
    success: function({data}) {
      $('#loader').hide()
      $('tbody').empty()
      data.forEach(match => {
        $('tbody').append(template(match))
      })
    },
    error: function(err) {
      console.error(err)
    }
  })
}




$(document).ready(function() {
  if(!localStorage.getItem('jwtToken')){
    window.location.assign('/login.html')
  }

  refillMatches()
})
