<template>
    <div>
         <loader :errorLoader=error :loadingLoader=loading ></loader>
        <div class="block-titel">
            <div class="d-flex justify-content-between container">
                <div class="pl-4 pl-sm-2 pl-md-0">
                    <h1>{{$t("Blog.Blog")}}</h1>
                    <p>{{$t("Blog.Blog_text")}}</p>
                </div>
                <div class="d-none d-md-inline puntos"></div>
            </div>
        </div>
        <div class="article-dual-column">
            
            <div class="container" style="min-height: 200px">
              
                <div class="row">
                  
                  <blogCard v-for="(item, index) in entradas" :key="index" :title=item.title :paragraph=item.resume :date=item.date :slug=item.slug :image="item.featuredImage ? item.featuredImage[1] : image='https://electryconsulting.com/img/blog/5971b36ddd0cc.jpg'"></blogCard>   
                    
                </div>
            </div>
        </div>

        <div class="newsletter-subscribe">
            <div class="container">
                <div class="text-center intro">
                    <h2 class="text-center mt-4">{{$t("Componentes.Cta_Ofertas.Ofertas_text")}}<br><br><br></h2>
                    <a href="jobs" class="enlace-electry btn-cristal-blue mb-5">{{$t("Componentes.Cta_Ofertas.Ofertas_Boton_text")}}</a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    import blogCard from "../components/Blog/blogCard";
    import loader from "../components/layout/loader";
    export default {
      
        name: "Blog",
        metaInfo() {
        return { 
            title: "Consultoría energética - ElectryConsulting - Blog",
            meta: [
              
              { name: 'description', content:  'ElectryConsulting te ofrece toda la información sobre el sector energético para que estés al tanto y también contenido de interés para el asesor energético.'},
              { property: 'og:title', content: "Consultoría energética - ElectryConsulting - Blog"},
              { property: 'og:site_name', content: 'ElectryConsulting - Consultoría energética'},
              { property: 'og:type', content: 'website'},
              { property: 'og:description', content: 'ElectryConsulting te ofrece toda la información sobre el sector energético para que estés al tanto y también contenido de interés para el asesor energético.'},
              { property: 'og:image', content: 'https://electryconsulting.com/img/logo.png'},
              { property: 'og:locale', content: 'es_ES'}, 
              { name: 'robots', content: 'index,follow'}, 
              { name: 'googlebot', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'}, 
              { name: 'bingbot', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'} 
              
            ]
        }
    },  
        
        components: {blogCard, loader},
        data(){
            return {
               
                error: false,
                loading: false,

                entradas:[],
                entrada:{}
            }
        },
        created() {
            this.getEntradas();
          

        },
        methods: {
            async getEntradas(){
                this.loading = true;
                this.axios('wp/v2/posts')
                    .then((response) =>{  

                        this.loading = false;
                        this.entrada = response.data[1]; 
                        response.data.forEach(element => {
                            let item = {};
                            item.id = element.id;
                            item.title = element.title.rendered;
                            item.content = element.content.rendered.slice(0,150);
                            item.slug = element.slug;
                            item.featuredImage = element.yoast_head.match("<meta property=\"og:image\" content=\"(.+?)\" />");
                            item.descriptionOg = element.yoast_head.match("<meta property=\"og:description\" content=\"(.+?)\" />")[1].slice(0,200);
                            item.resume = element.excerpt.rendered;
                            this.entradas.push(item)
                        });
                    }).catch((error) => {
                       
                        console.log(error);

                });
            }
        }
    }
</script>

<style>
    @import '../assets/css/Article-Dual-Column.css';
   
</style>