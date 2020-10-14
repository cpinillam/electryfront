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
                    <div v-if="entrada" class="col-md-12 content-blog mt-5">
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
        name: "PoliticaRedes",

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
                maincontent:""
            }
        },
        created() {
            this.getEntrada();        
        },
               
        methods: {
            async getEntrada(){
             this.loading = true;
             this.axios("wp/v2/pages?slug=politica-de-redes-sociales")
                .then((response) => {
                    this.loading = false;
                    this.entrada = response.data[0];
                    this.maintitle = response.data[0].title.rendered;
                    this.maincontent = response.data[0].content.rendered;
               
                })
                .catch ((error) => {
                 
                    console.log(error);
                })
            }, 
         }

    }
</script>
                   
<style scoped>

</style>