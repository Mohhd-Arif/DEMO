const app = Vue.createApp({
    // template:'<h2>i am template</h2>'
    data() {
        return {
            objs:[
                {
                    name:'arif',
                    email:"we mail",
                    flag:true
                },
                {
                    name:'asif',
                    email:"we mail ashif",
                    flag:true
                },
                {
                    name:'shakib',
                    email:"we mail shakib",
                    flag:true
                }
            ]
        }
    },
    methods:{
        changeEmail(email,index){
            console.log(email);
            this.objs[index].email = email;
        },
        showEmail(index){
            this.objs[index].flag = !this.objs[index].flag
        }
    }
})

app.mount('#app');