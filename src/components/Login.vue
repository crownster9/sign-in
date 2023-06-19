<template>
  <div class="w-full">
    <div class="flex flex-wrap sm:flex-row">
      <img class="rounded-2xl border-black border-2" src=".src/image/apostle.jpg">
      <section class=" my-5 text-center font-bold m-4  ">
        <h1 class="font-extrabold font-serif  text-4xl my-5">Join Eternity network intl online sermon </h1>
        <p class="md:flex-row">This is a platform where you get and been notified on updates pertaining to kingdom songs and sermons </p>
          <p class="text-2xl bg-purple-900 border rounded-full">Welcome to our page {{user}}</p>
        <div class="m-5 md:mx-20 my-5 space-y-6 md:  md:px-40 text-justify">
           <form class=" space-y-4" @submit.prevent="submit">
             <div>
             <label>FullName: </label>
            <input :class="{'border-red-500':!user,'border-green-500':user}" v-model="user" class="border md:h-8 md:w-64 pl-4 border-blue-500 rounded-full" placeholder="FullName" type="text"/>
            </div>
            <div>
              <label>EmailAds: </label>
              <input :class="{'border-red-500':!email,'border-green-500':email}" v-model="email" type="Email" placeholder="Email Address" class=" pl-4 md:h-8 md:w-64 border border-blue-500 rounded-full"/>
            </div>
            <div class="">
              <label>Username:</label>
              <input :class="{'border-red-500':!name,'border-green-500':name}" v-model="name" type="text" placeholder="Username" class="border rounded-full md:h-8 md:w-64 pl-4"/> 
            </div>
            <div>
            <label>Password: </label>
            <input :class="{'border-red-500':!pass,'border-green-500':pass}" v-model="pass" type="password" class="pl-4 md:h-8 md:w-64 border border-blue-500 rounded-full"  placeholder="Password"/>
           </div>
           <div class="text-red-700" id="msg"></div>
           <div class=" flex justify-between">
            <div><input type="checkbox" name="remember-me"> Remenber me
            </div>
                <a href="#">forget password</a>
              </div>
              <div class="text-center m-2 ">
                <button class="px-2 rounded-xl p-1 text-sm-2 text-white border bg-blue-800 ">Submit</button>
                </div>
              </form>
            </div>
            <Content/>
          </section>
          
          </div>
          </div>

</template>

<script>
import Content from './Content.vue';
export default {
  name:'Login',
  components:{
     Content,
  },
  data() {
    return{
      name:"",
      user:"",
      email:"",
      pass:"",
    }
  },
  methods:{
     submit() {
      if(this.user=="" || this.email==""  || this.pass==""){
        msg.innerHTML="please enter all fields"
        setTimeout(() => {msg.remove()},3000)

      }
      else{
        alert('success')
      }
      },
    }
    }
</script>
