let i=0;
let images;
var settings = {
    "url": "https://pixabay.com/api/?key=10081206-916ebb0b727e64cf7a5d7a46e&q=dive+scuba&orientation=horizontal&min_width=1920&min_height=1080&per_page=200&image_type=photo",
    "method": "GET",
    "timeout": 0,
  };
  

  $(document).ready(function(){
    $.ajax(settings).done(function (response) {
        images=response;
        console.log(images);
        $('#imagesWrapper').attr('src',images.hits[i].largeImageURL);     
      });
      
      setInterval(cambiarImagen, 10000);
  });

  function cambiarImagen(){
    if(i==199){
      i=-1;
    }

    i++;
    $('#imagesWrapper').attr('src',images.hits[i].largeImageURL); 
  }