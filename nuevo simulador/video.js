var videos;
var settings = {
    "url": "https://pixabay.com/api/videos/?key=10081206-916ebb0b727e64cf7a5d7a46e&q=dive+scuba",
    "method": "GET",
    "timeout": 0,
  };
  


  $(document).ready(function(){
    $.ajax(settings).done(function (response) {
        var videos=response;
        //console.log(videos);
        $('#videoWrapper').attr('src',videos.hits[0].videos.medium.url+'&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&#t=235s');
        //$('#video').attr('src',videos.hits[0].videos.medium.url);
        console.log(videos.hits[0].videos.medium.url);
        /*
        for(let i = 0; i < videos.hits.length; i++) {
            console.log(videos.hits[i].videos.medium.url);  // (o el campo que necesites)
        }*/
      });
  });