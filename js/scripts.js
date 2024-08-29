const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            message: 'SPENTO',
            on: false,
            msgClasses: 'off-msg'
        };
    },
    methods: {
        handleClick() {
            if (this.on) {
                this.message = 'SPENTO';
                this.msgClasses = 'off-msg';
            }
            else {
                this.message = 'ACCESO';
                this.msgClasses = 'on-msg';
            }
            
            this.on = !this.on;
        },
        randomNumber(min, max) {
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log('Numero generato:', num);
            return num;
        }
    }
}).mount('#app');


// const myButton = document.querySelector('button');
// const myP = document.querySelector('p');

// let on = false;

// myButton.addEventListener('click', function () {
//     if (on) {
//         myP.innerText = 'SPENTO';
//     }
//     else {
//         myP.innerText = 'ACCESO';
//     }
    
//     on = !on;
// });