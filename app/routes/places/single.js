import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      "name":"Cliffs of dover",
      "description":"Beautiful cliff, where you can see the city below on sunny days",
      "activities":[
        {
          "name":"photography"
        },
        {
          "name":"jumping"
        },
        {
          "name":"climbing"
        },
        {
          "name":"yoga"
        }
      ]
    }
  }
});
