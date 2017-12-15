const footbalApiUrlx = 'http://localhost:8000/api/football'

$(document).ready(function() {
  console.log
  if (!localStorage.getItem('jwtToken')) {
    window.location.assign('/login.html')
  }
  let embed = function(video) {
    return `
      <div class="card">
        <div class="image" >
        <iframe width="100%"
        src="https://www.youtube.com/embed/${video.id}"
        frameborder="0"
        gesture="media" allow="encrypted-media"
        allowfullscreen></iframe>
        </div>
        <div class="content">
            <div class="header">${video.title}</div>
          </div>
        </div>
      `
  }
  $.ajax({
    url: footbalApiUrlx + '/match' + location.search,
    type: 'GET',
    success: function({ data }) {
      let { awayGoals, awayTeam, homeTeam, homeGoals } = data
      let searchQuery = `${homeTeam.name} ${homeGoals} - ${awayGoals} ${awayTeam.name}  Highlights`
      $.ajax({
        url: `http://localhost:8000/api/youtube/search?limit=6&q=${searchQuery}`,
        type: 'GET',
        success: function(rows) {
          console.log(rows)
          rows.data.forEach(video => {
            $('#listVideo').append(`${embed(video)}`)
          })
        }
      })
    }
  })
})
