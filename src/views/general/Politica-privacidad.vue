<template>
    <div>
        <loader :errorLoader=error :loadingLoader=loading ></loader>
        <div class="block-titel">
            <div class="d-flex justify-content-between container">
                <div class="pl-4 pl-sm-2 pl-md-0">
                    <h1>{{maintitle}}</h1>
                </div>
                <div class="d-none d-md-inline puntos"></div>
            </div>
        </div>
        <div class="article-dual-column" v-if="entrada">
            <div class="container">
                
                <div class="row" >
                    <div v-if="entrada" class="col-md-12 content-blog">
                        <div class="text" v-html="maincontent"></div>
                       
                    </div>
                    
                </div>
            </div>
        </div>

        
    </div>
</template>


<script>
import loader from "../../components/layout/loader";
import socialButtons from "../../components/layout/buttons/socialButtons";
 export default {
        name: "BlogDetail",

        components: {
            socialButtons,
            loader
        },
       
        data(){
            return {
                error: false,
                loading: false,
                entrada:{},
                maintitle:"",
                maincontent:"",
                allcookies:[],
            }
        },
        created() {
            this.getEntrada(); 
            this.getAllCookies();       
        },         
        methods: {
            async getEntrada(){
             this.loading = true;
             this.axios("wp/v2/pages?slug=politica-de-privacidad")
                .then((response) => {
                    this.loading = false;
                    this.entrada = response.data[0];
                    this.maintitle = response.data[0].title.rendered;
                    this.maincontent = response.data[0].content.rendered;
                   this.formAction();
                })
                .catch ((error) => {
                 
                    console.log(error);
                })
            }, 

            getAllCookies(){
                
                var allCookieArray = document.cookie.split(';');
                for (var i = 0; i<allCookieArray.length; i++)
                {
                    var tempCookie = allCookieArray[i].split('=');
                    var objCookie = {};
                    objCookie.name = tempCookie[0];
                    objCookie.value = tempCookie[1];
                    this.allcookies.push(objCookie); 
                }
                
            }
         }

    }
</script>
                   
<style scoped>

</style>