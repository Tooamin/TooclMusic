import Vue from 'vue'

import {
    Toast
} from 'vant'

Vue.use(Toast)

class numberFormat {
    constructor() {}

    numberFormat(value) {
        let param = {};
        let k = 10000;
        let sizes = ["", "万", "亿", "万亿"];
        let i;
        if (value < k) {
            param.value = value;
            param.unit = "";
        } else {
            i = Math.floor(Math.log(value) / Math.log(k));

            param.value = (value / Math.pow(k, i)).toFixed(2);
            param.unit = sizes[i];
        }
        return param.value + param.unit;
    }
}