import Vue from 'vue'

class FormTime {
    constructor() {}

    Formtimer(value) {
        let m = parseInt(value / 60);
        let s = parseInt(value % 60);
        m >= 10 ? m : (m = "0" + m);
        s >= 10 ? s : (s = "0" + s);
        return m + ":" + s;
    }
}
export const Formtimer = new Formtime();