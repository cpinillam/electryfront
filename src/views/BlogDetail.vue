<template>
    <div>
        <loader :errorLoader=error :loadingLoader=loading ></loader>
        <div class="article-dual-column" v-if="entrada">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-md-0">
                        <div class="intro">
                            <h1>{{title}}</h1>
                            <p><span class="date">{{entrada.date}}</span></p>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-3 offset-md-1">

                       
                           <socialButtons></socialButtons>
                       
                    </div>
                </div>
                <div class="row" >
                    <div v-if="entrada" class="col-md-11 col-lg-8 offset-md-0 offset-lg-0 content-blog">
                      
                        <div class="text mb-4" v-html="extractOg"></div>
                        <img :src="imageOg ? imageOg : image='https://electryconsulting.com/img/blog/5971b36ddd0cc.jpg'">
                        <br><br>
                        <div class="text justify-paragraph" v-html="contentBlog"></div>
                    </div>
                    <div class="col-md-12 col-lg-3 offset-md-1">
                        <div class="toc">
                            <p>Artículos Anteriores</p>
                            
                            

<blogCardSlide v-for="(item, index) in entradas" :key="index" :title=item.title :paragraph=item.title :date=item.date :slug=item.slug :image="item.featuredImage ? item.featuredImage[1] : image='https://electryconsulting.com/img/blog/5971b36ddd0cc.jpg'"></blogCardSlide>
                  

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="newsletter-subscribe">
            <div class="container">
                <div class="text-center intro">
                    <h2 class="text-center mt-4">Ofertas de trabajo en todo el país<br><br><br></h2>
                    <a href="jobs" class=" enlace-electry btn-cristal-blue mb-5">Ofertas disponibles</a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import socialButtons from "../components/layout/buttons/socialButtons";
import blogCardSlide from "../components/Blog/blogCardSlide";
import loader from "../components/layout/loader";
import $ from 'jquery';

 export default {
        name: "BlogDetail",
        components: {blogCardSlide, socialButtons, loader},
        data(){
            return {
               error: false,
               loading: true,
               extractOg: null,
               contentBlog: "",
               title : null,
               descriptionOg : null,
               typeOg : null,
               imageOg : {},
               publishedOg : null,
               urlOg : null,
                entradas:[],
                entrada:{}
            }
        },

        created() {
            this.getEntrada();
            this.getEntradas();
           

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
             this.axios("wp/v2/posts?slug="+this.slug)
                .then((response) => {
                    this.loading = false;
                    this.entrada = response.data[0];
                    this.imageOg = response.data[0].yoast_head.match("<meta property=\"og:image\" content=\"(.+?)\" />")[1];
                    this.descriptionOg = this.entrada.yoast_head.match("<meta property=\"og:description\" content=\"(.+?)\" />")[1];
                    this.extractOg = this.entrada.excerpt.rendered;                   
                    this.title = response.data[0].title.rendered;
                    this.contentBlog = response.data[0].content.rendered;
                    this.typeOg = this.entrada.yoast_head.match("<meta property=\"og:type\" content=\"(.+?)\" />")[1];                
                    this.publishedOg = this.entrada.yoast_head.match("<meta property=\"article:published_time\" content=\"(.+?)\" />")[1];
                    this.urlOg = this.entrada.yoast_head.match("<meta property=\"og:url\" content=\"(.+?)\" />")[1];
                    
                  
                })
                .catch ((error) => {
                    console.log(error)
                })
            },

            async getEntradas(){
                try {
                    const AllEntradasDB = await this.axios.get('wp/v2/posts');
                    const entradasDB = AllEntradasDB.data.slice(0,5);

                    await entradasDB.forEach(element => {
                        let item = {};
                        item.id = element.id;
                        item.title = element.title.rendered;
                        item.slug = element.slug;
                        item.featuredImage = element.yoast_head.match("<meta property=\"og:image\" content=\"(.+?)\" />");
                        this.entradas.push(item)

                    });

                } catch (error) {
                    this.error = true;
                    console.log(error);

                }                
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
    @import '../assets/css/Article-Dual-Column.css';
    @import '../assets/css/jobs.css';
</style>