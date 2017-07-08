
function Bike() {   
    this._currentLocation = []
}

Bike.prototype = {
     bikesCurrentLocation: function (quarter){
        this._currentLocation.push(quarter)

     return
    },
    getCurrentLocation: function(){
        return this._currentLocation
    },

    cycle: function(){

    }

}


