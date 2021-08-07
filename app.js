const app = Vue.createApp({
    // template:'<h2>i am template</h2>'
    data() {
        return {
            objs:[
                {
                    name:'arif',
                    email:"we mail",
                    flag:true,
                    profile:'assets/img.jpg',
                    isFav:true
                },
                {
                    name:'asif',
                    email:"we mail ashif",
                    flag:true,
                    profile:'assets/img.png',
                    isFav:false

                },
                {
                    name:'shakib',
                    email:"we mail shakib",
                    flag:true,
                    profile:'assets/image.png',
                    isFav:true

                }
            ],
            url:"www.google.com"
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