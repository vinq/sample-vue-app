import Vue from '../lib/vue.js';

import Component1 from './components/component1.js';

let app = new Vue({
  	el: '#app',
  	data: function(){
  		return {
  			message: '',
        templateMessage: 'Example Vue'
  		}
  	},
  	created: function() {
  		setInterval(() => {
  			this.$root.$emit("time");
  		}, 500)

      this.$root.$on("message", function(obj){
        this.message = this.templateMessage + " " + obj.times.length;
      })
  	}
})