<template>
    <div>
         <loader :errorLoader=error :loadingLoader=loading ></loader>
        <div class="block-titel">
            <div class="d-flex justify-content-between container">
                <div class="pl-4 pl-sm-2 pl-md-0">
                    <h1>{{$t("Jobs.ultimas_ofertas")}}</h1>
                </div>
                <div class="d-none d-md-inline puntos"></div>
            </div>
        </div>
        <div id="delegaciones-column" class="container">
            <div class="row">
                <div class="col-12 col-md-9 mb-5">
                    <div class="delegaciones-column">
                        <div class="container">
                            <div class="row mb-5 d-none">
                                <div class="col-12 p-0">
                                    <div class="blog-slider__item swiper-slide">
                                        <nav class="navbar navbar-light navbar-expand-md navigation-clean-search">
                                            <div class="container">
                                                <form class="form-inline" target="_self">
                                                    <div class="form-group" style="width: 100%;"><label><i class="fa fa-search"></i></label><select class="form-control search-field select-form"><optgroup label="Todas las zonas"><option value="12">Barcelona (9)</option><option value="valencia">Valencia (5)</option><option value="madrid">Madrid (6)</option></optgroup></select></div>
                                                </form><button class="btn btn-animado" type="submit">Buscar</button></div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-5">

                                 <buttonJobsItem v-for="(item, index) in entradas" :key="index" :titleJob=item.title :UbicationJob=item.zona :linkJob=item.slug></buttonJobsItem>   
                 
                                

                              
                                
                               
                               

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 d-none d-md-block mb-5">
                    <div class="delegaciones-column"><a class="enlace-electry" href="nueva-delegacion"><img class="img-fluid" src="../assets/img/banner.webp"></a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
   
    import buttonJobsItem from "../components/layout/buttons/buttonJobsItem";
     import loader from "../components/layout/loader";

    export default {
        name: "Jobs",
        components: {
            buttonJobsItem, loader
        },
        meta: [
              
              { name: 'description', content:  'ElectryConsulting te ofrece toda la información sobre el sector energético para que estés al tanto y también contenido de interés para el asesor energético.'}
              
            ],
      
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
                this.axios('wp/v2/jobzona')
                    .then((response) =>{ 
                        this.loading = false;
                        
                        response.data.forEach(element => {
                            let item = {};
                            item.id = element.ID;
                            item.title = element.post_title;
                            item.content = element.post_content;
                            item.slug = element.post_name;
                            item.zona = element.job_data.zona;
                            
                            this.entradas.push(item)
                        });
                    }).catch((error) => {
                       
                        console.log(error);

                });
            }
        }
    }



</script>

<style scoped>

    @import '../assets/css/jobs.css';

</style>