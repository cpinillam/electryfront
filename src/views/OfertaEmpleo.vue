<template>
    <div>
        <loader :errorLoader=error :loadingLoader=loading ></loader>
        <div class="article-dual-column" v-if="entrada">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-md-0">
                        <div class="intro">
                            <h1>{{entrada.title.rendered}}</h1>
                            <p><span class="date">{{entrada.date}}</span></p>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-3 offset-md-1">

                       
                           <socialButtons></socialButtons>
                       
                    </div>
                </div>
                <div class="row" >
                    <div v-if="entrada" class="col-md-11 col-lg-6 offset-md-0 offset-lg-0 content-blog">
                      
                        
                        <div class="text" v-html="entrada.content.rendered"></div>
                    </div>
                    <div class="col-md-12 col-lg-5 offset-md-1">
                        <div class="toc">
                            
                
                                    <FormJobs :oferta=entrada.title.rendered></FormJobs>
                               
                            

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
    </div>
</template>


<script>

import socialButtons from "../components/layout/buttons/socialButtons";
import blogCardSlide from "../components/Blog/blogCardSlide";
import loader from "../components/layout/loader";
import FormJobs from "../components/layout/forms/form-jobs"


 export default {
        name: "BlogDetail",
        components: {blogCardSlide, socialButtons, loader, FormJobs},
        data(){
            return {
               error: false,
               loading: true,
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
        methods: {
            async getEntrada(){
            this.loading = true;
             this.axios("wp/v2/jobs?slug="+this.slug)
                .then((response) => {
                    this.loading = false;
                    this.entrada = response.data[0];
                    this.imageOg = response.data[0].yoast_head.match("<meta property=\"og:image\" content=\"(.+?)\" />")[1];
                     this.maintitle = response.data[0].title.rendered;
                    this.maincontent = response.data[0].content.rendered;
                    this.descriptionOg = this.entrada.yoast_head.match("<meta property=\"og:description\" content=\"(.+?)\" />")[1];
                    this.extractOg = this.entrada.excerpt.rendered;
                    let form =this.entrada.content.rendered.match("<form action=\"(.+?)\"")[1];
                    this.entrada.content.rendered = this.entrada.content.rendered.replace(form,"");
                    this.title = this.entrada.yoast_head.match("<title>(.+?)<\\/title>")[1]; this.typeOg = this.entrada.yoast_head.match("<meta property=\"og:type\" content=\"(.+?)\" />")[1]; this.publishedOg = this.entrada.yoast_head.match("<meta property=\"article:published_time\" content=\"(.+?)\" />")[1];
                    this.urlOg = this.entrada.yoast_head.match("<meta property=\"og:url\" content=\"(.+?)\" />")[1];
                   this.formAction();
                })
                .catch ((error) => {
                    console.log(error)
                })
            },

            async getEntradas(){
                try {
                    const entradasDB = await this.axios.get('wp/v2/posts');

                    await entradasDB.data.forEach(element => {
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