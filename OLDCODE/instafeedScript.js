$(document).ready(function()  {
                  var userFeed = new Instafeed({
                  get:'user',
                  userId:'',
                  limit :12,
                  resolution: 'standard_resolution',
                  accessToken:'',
                  sortBy: 'most-recent',
                  template: 'section class="col-lg-3 gallery instaimg "><a herf="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></section>',
                  });
userFeed.run();
  
});
                  
