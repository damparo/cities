import axios from "axios";

export default {

    searchCities: function(cityPic) {
        return axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${cityPic}&key=${process.env.REACT_APP_PLACES_API_KEY}&inputtype=textquery&fields=name,photos`);
    }


};





// module.exports = router;