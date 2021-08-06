const app = Vue.createApp({
    // template:'<h2>i am template</h2>'
    data() {
        return {
            name:'arif',
            email:"we mail",
            flag:true
        }
    },
    methods:{
        changeEmail(email){
            console.log(email);
            this.email = email;
        },
        showEmail(){
            this.flag = !this.flag
        }
    }
})

app.mount('#app');