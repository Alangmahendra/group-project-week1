const GoogleImages = require('google-images');
const searchClient = new GoogleImages(process.env.GOOGLE_CSE_ID, process.env.GOOGLEIMAGESEARCH_APIKEY);
var imageSearch = require('node-google-image-search');


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