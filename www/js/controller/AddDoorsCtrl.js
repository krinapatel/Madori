angular.module('ionicApp')

.controller('AddDoorsCtrl', function($scope, $state, $ionicHistory ,$rootScope ) {
  $scope.goBack = function() {
    $ionicHistory.goBack();
  };
    
  $scope.addWindows = function(user) {
      $rootScope.box = [];
      var elements = document.querySelectorAll('.dragg');
      for ( var i=0, len = elements.length; i < len; i++ ) {
          var element = elements[i];
            var xl = element.offsetLeft;
            var yt = element.offsetTop;
            var w = element.clientWidth;
            var h = element.clientHeight;
            $rootScope.box.push({type:"door", x:xl, y:yt, width:w, height:h});
      }
       // $rootScope.box.type = "door";
        console.log($rootScope.box);
      $state.go('AddWindows');
  };

  $rootScope.door = [{width:0}];
  var doortype;
  var n;
  $scope.addD = function(){
    doortype = document.getElementById("doortypelist").value;

    console.log("door ",$rootScope.door.width,doortype);
  }

  $scope.addDoor = function(){
        var door = document.createElement("canvas");
        // var name = document.createElement("p");
        // var r = document.createTextNode("Door");
        //name.appendChild(r);
        //door.appendChild(name);
      
        door.classList.add('dragg');
        door.style.width = (($rootScope.door.width*10)*2)+"px";
        if(doortype == "Single")
        {
            door.style.height = (($rootScope.door.width*10)*2)+"px";
            console.log("in single");
        }
        else if(doortype == "Double")
        {
            door.style.height = ((($rootScope.door.width/2)*10)*2)+"px";
            console.log("in double");
        }
        else
        {
            door.style.height = "10px";
            console.log("in sliding");
        }  
        door.style.backgroundColor = "blue";
        var room = document.querySelector("#roomholder");
        room.style.position = "relative";
        room.appendChild(door);
      
            // get all draggie elements
        var draggableElems = document.querySelectorAll('.dragg');
            // array of Draggabillies
        var draggies = []
            // init Draggabillies
        for ( var i=0, len = draggableElems.length; i < len; i++ ) {
        var draggableElem = draggableElems[i];
        var draggie = new Draggabilly( draggableElem, {
            containment: true
        });
        draggies.push( draggie );
        }
    }

  // this is used later in the resizing and gesture demos
  //window.dragMoveListener = dragMoveListener;

    //$scope.roomwidth = $rootScope.cwidth;
    //$scope.roomheight = $rootScope.cheight;
    //$scope.roomwidth = 400;
    //$scope.roomheight = 400;
    console.log("W and H",$scope.roomwidth,$scope.roomheight);
  })
