import Vue from 'vue'

class Formtime {
    constructor() {}

    Formtime(value) {
        let m = parseInt(this.durationText / 60);
        let s = parseInt(this.durationText % 60);
        m >= 10 ? m : (m = "0" + m);
        s >= 10 ? s : (s = "0" + s);
        return m + ":" + s;
    }
}