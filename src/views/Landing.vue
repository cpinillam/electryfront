<template>
    <div>
        
         <loader :errorLoader=error :loadingLoader=loading ></loader>

        <section class="d-flex flex-column align-items-center" id="que-ofrecemos" style="min-height: 200px">
      
      <div class="row d-flex flex-column justify-content-center align-items-center flex-sm-row align-items-sm-start w-100 molino-footer" style="height: 80vh;">
        <div class="landing-header" >
           <img :src="imageOg ? imageOg : image='https://electryconsulting.com/img/blog/5971b36ddd0cc.jpg'">
        </div>

       
        <div class="col-12 que-hacemos-footer">
        
        </div>
        
        <div class="col-10 col-sm-6 col-md-4 col-lg-4 col-xl-3 order-3 order-md-2 molino-svg" >
       
        </div>
        
        <div class="col-12 order-4 padding-footer">
          <div></div>
        </div>
      </div>
    </section>

    <div class="article-dual-column" v-if="entrada">

              

        </div>
    <div class="newsletter-subscribe pt-5 pb-5">
      <div class="container">
        <div class="text-center intro">
          <h2 class="text-center">{{$t("Componentes.Botones.Boton_solicitar_informacion")}}<br></h2>
        </div>
        <form-cta-phone></form-cta-phone>
      </div>
    </div>
    <section class="d-flex flex-column align-items-center" id="monitorizacion-energetica">
           <div class="puntos-rigth"></div>
           <div class="container">
               <div class="row d-flex justify-content-between">
                 <div v-html="maincontent">
                       
                   </div>  
                   
               </div>
           </div>
       </section>
 
      
    </div>
</template>


<script>
import blogCardSlide from "../components/Blog/blogCardSlide";
import FotosEventos from "../components/FotosEventos";
import serviciosModal from "../components/layout/servicios/serviciosModal";
import MolinoHome from "../components/Home/molino-home";
import FormCtaPhone from "../components/layout/forms/form-cta-phone";
 import loader from "../components/layout/loader";
import $ from 'jquery';

 export default {
        name: "BlogDetail",
        components: {
            blogCardSlide,
            FormCtaPhone,
            MolinoHome,
            serviciosModal,
            loader
        },
        data(){
            return {
                error: false,
               loading: false,
               title : null,
               descriptionOg : null,
               typeOg : null,
               imageOg: {},
               publishedOg : null,
               urlOg : null,
               entradas:[],
               entrada:{},
                maintitle:"",
                maincontent:""
            }
        },

        created() {
            this.getEntrada();
        },
        props : {
            slug : String
        },
        updated(){
          
            let self = this;
             $("#btn-main-cta").on("click",function() {
                if( $("#name").val() !== ""){
                    
                    let bodyFormData = new FormData();
                        bodyFormData.append('your-name', $("#name").val());
                        bodyFormData.append('your-email', $("#email").val());
                     $("#name").val("");
                    self.enviarMsg(bodyFormData);
               }
             })
             
            
        },
        methods: {
            async getEntrada(){
             this.loading = true;
             this.axios("wp/v2/landings?slug="+this.slug)
                .then((response) => {
                    this.loading = false;
                    this.entrada = response.data[0];
                    this.maintitle = response.data[0].title.rendered;
                    this.maincontent = response.data[0].content.rendered;
                    this.imageOg = response.data[0].yoast_head.match("<meta property=\"og:image\" content=\"(.+?)\" />")[1];
                    this.title = response.data[0].yoast_head.match("<title>(.+?)<\\/title>")[1];
                    this.descriptionOg = response.data[0].yoast_head.match("<meta property=\"og:description\" content=\"(.+?)\" />")[1];
                    this.typeOg = response.data[0].yoast_head.match("<meta property=\"og:type\" content=\"(.+?)\" />")[1];
                    this.urlOg = response.data[0].yoast_head.match("<meta property=\"og:url\" content=\"(.+?)\" />")[1];
                   
                })
                .catch ((error) => {
                    console.log(error)
                })
            },

            
            enviarMsg(data){
                const headers = {
                'Content-Type': 'multipart/form-data'
                };
                this.axios.post("contact-form-7/v1/contact-forms/70/feedback", data, {
                headers: headers
                        })
                .then((response)=> {
                        console.log("enviado");

                }).catch((error) => {

                });
            }      
        },
        
        metaInfo() {
        return { 
            title: this.title,
            meta: [
                { name: 'description', content:  this.descriptionOg},
                { property: 'og:title', content: this.title},
                { property: 'og:type', content: this.typeOg},
                { property: 'og:description', content: this.descriptionOg },
                { property: 'og:image', content: this.imageOg},   
                { property: 'og:url', content: this.urlOg},
                { property: 'article:published_time', content: this.publishedOg }   

            ]
        }
    }

    }
</script>
                   
<style scoped>
@import '../assets/css/elementor/frontend.css';
@import '../assets/css/elementor/global.css';

</style>