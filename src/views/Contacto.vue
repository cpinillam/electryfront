<template>
    <div>
        <div class="block-titel">
            <div class="d-flex justify-content-between container">
                <div class="pl-4 pl-sm-2 pl-md-0">
                    <h1>{{$t("Contactanos.Contactanos")}}</h1>

                </div>
                <div class="d-none d-md-inline puntos"></div>
            </div>
        </div>
        <div class="newsletter-subscribe" >
            <div class="container px-0">
                <div class="row no-gutters d-flex justify-content-center">
                    <div class="col-12 col-md-8">
                        <div class="text-center intro px-5 px-sm-5 px-md-0">
                            <h1 class="text-center mt-5">{{$t("Contactanos.Escribenos")}}<br></h1>
                            <h2 class="text-center mb-5" >{{$t("Contactanos.Escribenos_text")}}<br></h2>
                           
                            <form-contacto></form-contacto>
                
                            </div>
                    </div>
                    <div class="col-6 col-sm-5 col-md-3"><img class="img-fluid" src="../assets/img/img-gestion-energetica.svg"></div>
                </div>
            </div>
        </div>
        <div style="position: relative;">
            <div class="container d-flex flex-column">
                <div class="row no-gutters d-flex justify-content-center justify-content-lg-start">
                    <div class="col-8 col-sm-6 col-lg-4 order-2 order-lg-1 align-items-xl-end" style="/*position: relative;*/"><img class="img-fluid max-heigt" src="../assets/img/img-monitorizacion.svg" style="/*position: absolute;*//*bottom: 0px;*/"></div>
                    <div class="col-12 col-md-12 col-lg-8 order-1 order-lg-2 p-4">
                        <p style="font-size: x-large;">{{$t("Contactanos.Contactanos_text")}}</p>
                        <p><i class="fa fa-phone pr-2"></i>{{$t("Contactanos.Contactanos_telefono")}}</p>
                        <p><i class="icon ion-android-mail pr-2"></i>&nbsp;<a class="enlace-electry" href="mailto:info@electryconsulting.com">{{$t("Contactanos.Contactanos_mail")}}</a></p>
                        <p><i class="fa fa-map-marker pr-2"></i>{{$t("Contactanos.Contactanos_direccion")}}</p>

                        <div class="text-center intro">
                            <h5 class="mt-5">{{$t("Contactanos.te_llamamos")}}</h5>
                        </div>
                        <form-cta-phone></form-cta-phone>

                    </div>
                </div>
            </div>
            <div class="col-12 jobs-footer">
                <div></div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import FormCtaPhone from "../components/layout/forms/form-cta-phone";
    import FormContacto from "../components/layout/forms/form-contacto"
    export default {
        name: "Contacto",
        metaInfo() {
        return { 
            title: "Consultoría energética - ElectryConsulting - Contacto",
            meta: [
              
              { name: 'description', content:  'Contacta con ElectryConsulting y estaremos encantados de atender tu solicitud de manera personalizada a través de nuestros asesores energéticos.'},
              { property: 'og:title', content: "Consultoría energética - ElectryConsulting - Contacto"},
              { property: 'og:site_name', content: 'ElectryConsulting - Consultoría energética'},
              { property: 'og:type', content: 'website'},
              { property: 'og:description', content: 'Contacta con ElectryConsulting y estaremos encantados de atender tu solicitud de manera personalizada a través de nuestros asesores energéticos.'},
              { property: 'og:image', content: 'https://electryconsulting.com/img/logo.png'},
              { property: 'og:locale', content: 'es_ES'}, 
              { name: 'robots', content: 'index,follow'}, 
              { name: 'googlebot', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'}, 
              { name: 'bingbot', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'} 
              
            ]
        }
    },      
        components: {FormCtaPhone, FormContacto},
        data(){
            return {
                ctaName: "",
                ctaEmail: "",
                ctaPhone: "",
                ctaAsunto: "",
                ctaCheck: "",

                
                alert:false,
                status: {
                    error:false,
                    success:false,
                    errorTxt: 'Lo sentimos su mensaje no pudo ser enviado',
                    succsesTxt: 'Su mensaje fue enviado exitosamente'
                }    
            }
        },
        methods: {
            validaMsg(){
                if (this.ctaName && this.ctaPhone && this.ctaAsunto && this.ctaCheck){
                    this.enviarMsg();    
                }
                else {
                   alert("faltan completar campos"); 
                }

            },    

            enviarMsg(){
                let headers = {'Content-Type': 'multipart/form-data' };
                let bodyFormData = new FormData();
                    bodyFormData.append('nombre', this.ctaName);
                    bodyFormData.append('telefono', this.ctaPhone);
                    bodyFormData.append('email', this.ctaEmail);
                    bodyFormData.append('asunto', this.ctaAsunto);

                this.axios.post("contact-form-7/v1/contact-forms/75/feedback", bodyFormData, {
                headers: headers
                        })
                .then((response)=> {
                        this.alert = true;
                        this.ctaName = "";
                        this.ctaPhone = "";
                        this.ctaEmail = "";
                        this.ctaAsunto = "";


                }).catch((error) => {

                });
            },
            
           

        }
    }
</script>

<style scoped>

</style>