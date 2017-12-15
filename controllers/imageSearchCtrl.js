
const imageSearch = require('node-google-image-search');

module.exports = {
  getImages : (req,res,next) => {
    var results = imageSearch(req.query.q, callback, 0, 1);
    
    function callback(results) {
      res.status(200).json(results)
    }
    // searchClient.search('Manchester City', (images)=>{
    //   console.log('Query Images')
    //   res.status(200).json(images)
    // })
    // .catch(err =>{
    //   res.status(500).json(err)
    // })
  }
}