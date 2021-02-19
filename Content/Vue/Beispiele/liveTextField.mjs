import LiveTextfield from './liveTextField.mjs';

//singelFile Component
export default {
    template: `<div> <h1>Live Textfield</h1>
        <input type="text" ref="in" @input="update"></button>
        <p>(a) Anzahl Buchstaben: {{a}}</p>
        <p>(b) Anzahl Leerzeichen: {{b}}</p>
        <p>(c) Anzahl Worte: {{c}}</p>
        </div> `,
    data() { 
        return {
            a: 0,   //length of input value
            b: 0,    //number of blanks
            c: 0    //number of words, seperated by blanks
        } 
    },
    methods: { 
        update() {
            console.log("updated");
            var v = this.$refs.in.value;
            this.count = v;
            this.a = v.length;
            var words = v.split(" ");
            this.b = words.length-1;
            this.c = this.b+1;
        } 
    }
}
    
new Vue({
    el: '#app',
    components: {
        LiveTextfield
    }
});
