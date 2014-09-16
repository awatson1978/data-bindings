if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("selectedItem", {item: "zkrk"});
  Session.setDefault("selectedItem", {item: "zkrk"});
  Session.setDefault("item", {item: "zkrk"});
  Session.setDefault("sessionVar", {item: "zkrk"});

  Template.hello.helpers({
    menuItems: function () {
      return [{item: "One"},{item: "Two"}, {item: "Three"}];
    },
    exampleOne: function () {
      return Session.get("selectedItem");
    },
    exampleTwo: function () {
      return Session.get("item");
    },
    exampleThree: function () {
      return Session.get("sessionVar");
    }

  });

  Template.hello.events({
    'click .menu-item': function () {
      Session.set("selectedItem", {item: this.item});
    }
  });

  Template.body.events({
    'keyup input':function(event, template){
      alert(JSON.stringify(template));
    }
  });

  Meteor.startup(function(){
    // example 2
    $("input[data-name]").on("keyup", function( eventObject ) {
      var dataName = eventObject.target.getAttribute("data-name");
      var object = {};
      object[dataName] = eventObject.target.value;
      Session.set(dataName, object);
    });

    // example 3
    $("input[sessionVar]").on("keyup", function( eventObject ) {
      var dataName = eventObject.target.getAttribute("sessionVar");
      var inputValue = eventObject.target.value;
      Session.set(eventObject.target.id, inputValue);
    });

    //example 4
    $("input[sessionVar]").on("keyup", function( eventObject ) {
      if(eventObject.target.getAttribute("data-bind")){
        var inputValue = eventObject.target.value;
        Session.set(eventObject.target.id, inputValue);
      }
    });

  })

}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
