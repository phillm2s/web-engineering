import MenuComponent from './menuComponent.mjs';
//singelFile Component
export default {
    template: `
      <div>
        <button>Button1</button>
        <button>Button2</button>
        <button>Button3</button>
        <button>Button4</button>
        <button>Button5</button>
        <button>Button6</button>
        <button>Button7</button>
      </div> 
        `,
    data() { 
        return {
        } 
    },
    methods: { 
        update() {
            console.log("updated");
        } 
    }
}
    
new Vue({
    el: '#app',
    components: {
        MenuComponent
    }
});
