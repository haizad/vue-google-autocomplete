import Vue from 'vue';
import QuasarVueGoogleAutocomplete from './../../src/QuasarVueGoogleAutocomplete.vue';

const app = new Vue({
    el: '#app',

    components: { QuasarVueGoogleAutocomplete },

    data: {
        address: ''
    },

    methods: {
        /**
        * When the location found
        * @param {Object} addressData Data of the found location
        * @param {Object} placeResultData PlaceResult object
        * @param {String} id Input container ID
        */
      getAddressData(addressData, placeResultData, id) {
            this.address = addressData;
      },

      handleError(error) {
        alert(error)
      }
    }
});
