const axios = require('axios')

const BaseUrl = 'https://api.crowdscores.com/v1'
const headers = { 'x-crowdscores-api-key': process.env.CROWDSCORES_APIKEY }

module.exports = {
  getMatches: function(req, res, next) {
    let { team_id, from, to } = req.query
    let url = `${BaseUrl}/matches?team_id=${team_id}&from=${from}&to=${to}`
    axios
      .get(url, {
        headers: headers
      })
      .then(function({ data }) {
        res.status(200).json({
          message: 'Success get Matches',
          data: data
        })
      })
      .catch(function(err) {
        res.status(500).json(err)
      })
  },
  
}
