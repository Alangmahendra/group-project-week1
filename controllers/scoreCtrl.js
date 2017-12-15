const axios = require('axios')
const BaseUrl = 'https://api.crowdscores.com/v1'
const headers = { 'x-crowdscores-api-key': process.env.CROWDSCORES_APIKEY }

module.exports = {
  getMatches: function(req, res, next) {
    let { team_id, from, to } = req.query
    let url = `${BaseUrl}/matches?competition_ids=2&from=${from}`
    axios
      .get(url, {
        headers: headers
      })
      .then(function({ data }) {
        console.log(data.map(match => 
          `${match.dbid} ${match.homeTeam.name} ${match.homeGoals} VS ${match.awayGoals} ${match.awayTeam.name}`
        ))
        res.status(200).json({
          message: 'Success get Matches',
          data: data
        })
      })
      .catch(function(err) {
        res.status(500).json(err)
      })
  },
  getTeams : function(req,res,next) {
    let url = `${BaseUrl}/teams?competition_ids=2`
    axios
      .get(url, {
        headers: headers
      })
      .then(function({ data }) {
        console.log(data.map(team => team.name))
        res.status(200).json({
          message: 'Success get Teams',
          data: data
        })
      })
      .catch(function(err) {
        res.status(500).json(err)
      })
  },
  getRounds : function(req,res,next) {
    let url = `${BaseUrl}/rounds?competition_ids=2`
    axios
      .get(url, {
        headers: headers
      })
      .then(function({ data }) {
        res.status(200).json({
          message: 'Success get rounds',
          data: data
        })
      })
      .catch(function(err) {
        res.status(500).json(err)
      })
  },
  getMatchDetail : function(req,res,next) {
    console.log('hit')
    let url = `${BaseUrl}/matches/${req.query.id}`
    axios
      .get(url, {
        headers: headers
      })
      .then(function({ data }) {
        console.log(data)
        res.status(200).json({
          message: 'Success get match',
          data: data
        })
      })
      .catch(function(err) {
        res.status(500).json(err)
      })
  }
}
