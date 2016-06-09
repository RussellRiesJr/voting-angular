angular.module("app", []);
  .config(() => {
    firebase.initializeApp({
      apiKey: "AIzaSyDhpVxr7yIbjD4MhoyviqPshkHGRmQqr28",
      authDomain: "anguler-voting.firebaseapp.com",
      databaseURL: "https://anguler-voting.firebaseio.com",
      storageBucket: "anguler-voting.appspot.com",
    });
  });
  .controller("MainCtrl", function ($scope) {
    const main = this;

    main.heading = 'Who ya got?';

    main.rock = function () {
      firebase.database().ref('/votes/rock')
        .set(main.rockCount + 1);
    };
    main.paper = function () {
      firebase.database().ref('/votes/paper')
        .set(main.paperCount + 1);
    };
    main.scissors = function () {
      firebase.database().ref('/votes/scissors')
        .set(main.scissorsCount + 1);
    };

    firebase.database().ref('/votes').on('value', (snap) => {
      const data = snap.val();

      main.rockCount = data.rock;
      main.paperCount = data.paper;
      main.scissorsCount = data.scissors;
      $scope.$apply();
    });
  });

