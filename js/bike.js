
function Bike() {   
    this._quarters = []
}

Bike.prototype = {
     addQuarter: function (quarter){
        this._quarters.push(quarter)

     return
    },
    getCurrentLocation: function(){
        return this._quarters
    }


}






/*
function Route () {
  this._stations = []
}

Route.prototype = {
  addStation: function (station) {
    this._stations.push(station)

    return
  },
  getStations: function () {
    return this._stations
  }

}*/