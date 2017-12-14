const YouTube = require('simple-youtube-api');
const youtube = new YouTube(process.env.YOUTUBE_API_KEY);

const search = (req,res,next)=> {

  youtube.searchVideos(req.query.q, req.query.limit)
      .then(results => {
        console.log(results.map(video=>{
          return video.raw.id.videoId;
        }));
        res.status(200).json({
          message:`there are ${req.query.limit} that matches your search for ${req.query.q}`,
          data:results
        })
      })
  .catch(console.log);
}
module.exports = {
  search
};
