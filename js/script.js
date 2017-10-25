
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
