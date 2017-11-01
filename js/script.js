
var config = {
    apiKey: "AIzaSyD_clrqijvFWnNFsx10HPvml9NX7e8vnw0",
    authDomain: "myportfolio2017-a5377.firebaseapp.com",
    databaseURL: "https://myportfolio2017-a5377.firebaseio.com",
    projectId: "myportfolio2017-a5377",
    storageBucket: "myportfolio2017-a5377.appspot.com",
    messagingSenderId: "960447294585"
  };
  firebase.initializeApp(config);
  


var firstName= firebase.database().ref('fname');
firstName.on('value', function(snapshot) {
    var name=snapshot.val();
    $(".FirstName").html(name);
    console.log(snapshot.val());

});


var secondName=firebase.database().ref('lname');
secondName.on('value',function(snapshot){
    var name=snapshot.val();
    $(".LastName").html(name);
    console.log(snapshot.val());
});

var containfo=firebase.database().ref()

var projects=firebase.database().ref('projects');

projects.on('val',function(snapshot){
    $(".testing-space").empty();
    var projects=snapshot.val()
    
    var div=$('<div class="col-sm-4 portfolio-item">');
    var thumbnail= $('<div class="thumbnail">');
    var title=$('<h4 class="text-center" id="project1-title">');
    title.text(projects[key].project.title);
    var img= $('<img src="" class="img-responsive">');
    img.attr("src", projects[key]l.project_image_url);
    var caption= $('<div class="caption text-center">');
    var livesiteButton = $('<a class="btn btn-outline" href="">');
    livesiteButton.attr("href", projects[key].live_site_url);
    livesiteButton.text("Live Site");
    var sourceButton= $('<a class="btn btn-outline" href=""> Source </a>');
    sourceButton.attr("href", projects[key].source_url);
    
    caption.append(livesiteButton);
    caption.append(sourceButton);
    thumbnail.append(caption);
    thumbnail.append(title);
    thumbnail.append(img);
    div.append(thumbnail);
    
    $
}