//get data

export function loadVehicles() {
    return function (dispatch) {
        fetch('http://localhost:4001/vehicles')
        .then((response) => {
            return response.json();
        }).then((vehicles) => {
            dispatch(vehiclesLoaded(vehicles));
        })
    }
}
export function vehiclesLoaded(vehicles) {
    return {
        type: 'VEHICLES_LOADED',
        value: vehicles
    }
}

// create data
export function createVehicle(vehicle){
    return function(dispatch){
        fetch('http://localhost:4001/vehicles', {
            method: 'post',
            body: JSON.stringify(vehicle),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(function(res){
            return res.json();
        }).then(function(v){
            dispatch(vehicleCreated(v))
        })
    }
}

export function vehicleCreated(vehicle){
    return {
        type: 'VEHICLE_CREATED',
        value: vehicle
    }
}