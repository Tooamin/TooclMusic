import Vue from 'vue'

import { Toast } from 'vant'

Vue.use(Toast)

class ValidForm{
    constructor() { }
    
    vaild(o) {
        
        for (let key in o){
            if (!o[key].reg.test(o[key].value)) {
                
            }
        }
    }
}