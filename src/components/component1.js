import Vue from '../../lib/vue.js';

import { ToolsService } from '../services/toolsService.js';

let Main = Vue.component('component1', {
  	template: 
			'<div>'+
          '<div v-on:click="click()" class="button">Hello Vue {{times.length}} times!!!</div>'+
          '<div class="container">'+
            '<div v-for="item in times" class="hello">{{item}}</div>'+
          '</div>'+
      '</div>',
    data: function () {
        return {
          times: [],
          countMax: 21,
          count: 0,
          lock: false
        }
    },
  	created: function() {
      let self = this;
      
      this.$root.$on("time", () => {
        if (!self.lock) {
          this.times.length > 0 && this.times.indexOf("hello") !== -1 && !this.lock ? this.times.push('click it again') : this.times.push('click it please');
          self.count++;
        }

        if (self.count > self.countMax) {
          self.lock = true;

          let items = ToolsService.doByClassName("hello", (helloItem) => {          
            helloItem.remove();
          })        

          if (items.length === 0) {
            self.count = 0;          
            self.lock = false;
          }
        }
      })

      this.times.push('click it');
    },
    methods: {    	
    	click: function(){
        this.times.push('hello');
        this.$root.$emit("message", {times: this.times});
    	}
    }
})

export { Main };