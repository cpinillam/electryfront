<template>
   <div>
       <div class="block-titel no-radius ">
           <div class="d-flex justify-content-between container">
               <div class="pl-4 pl-sm-2 pl-md-0">
                   <h1>{{$t("Servicios.Servicios")}}</h1>
                   <p>{{$t("Servicios.Servicios_subtitulo")}}<br></p>
               </div>
               <div class="d-none d-md-inline puntos"></div>
           </div>
       </div>
       <section class="d-flex flex-column align-items-center footer-radius" id="gestion-energetica" ref="gestion-energetica">
           <div class="container">
               <div class="row d-flex justify-content-between">
                   <div class="col-12 col-sm-11 col-md-6 col-lg-4 offset-0 offset-lg-1 offset-xl-0 flex-column order-1 px-md-1 px-5 justify-paragraph" data-aos="fade-right" data-aos-duration="700">
                       <div class="d-flex align-items-center">
                           <div class="servicios-item-icon"><img class="img-bg" src="@/assets/img/servicios-dot.svg"><i class="fas fa-charging-station"></i></div>
                           <h2 class="servicios-titulos">{{$t("Servicios.Gestion_energetica")}}<br></h2>
                       </div>
                       <p class="ofrecemos-content" v-html="$t('Servicios.Gestion_energetica_texto')"><br></p>
                       <a href="#" class=" btn float-right btn-animado btn-sm" data-toggle="modal" data-target="#modal-service-1">{{$t("Componentes.Botones.Boton_solicitar_presupuesto")}}</a>
                       
                       <div class="puntos-graf"></div>
                   </div>
                   <div class="col-12 col-sm-11 col-md-6 col-lg-7 order-1 mb-5 pt-5 pl-3 pr-4 px-md-5 py-md-1">
                       <div data-aos="fade-down" data-aos-duration="700">
                           <div><img class="img-fluid" src="@/assets/img/img-gestion-energetica.svg"></div>
                       </div>
                   </div>
               </div>
           </div>

           <serviciosModal id="modal-service-1" :servicio="$t('Servicios.Gestion_energetica')"></serviciosModal>


       </section>
       <section class="d-flex flex-column align-items-center" id="estudios-tecnicos" ref="estudios-tecnicos">
           <div class="puntos-left"></div>
           <div class="container">
               <div class="row d-flex justify-content-between">
                   <div class="col-12 col-sm-11 col-md-6 col-lg-6 order-2 order-md-1 photo-square" data-aos="fade-right" data-aos-duration="750">
                       <div class="photo-center"><img class="img-fluid" src="@/assets/img/img-estudios-tecnicos.svg"></div>
                   </div>
                   <div class="col-12 col-sm-11 col-md-6 col-lg-7 order-1 order-md-2 px-md-3 px-5 justify-paragraph">
                       <div class="d-flex align-items-center">
                           <div class="servicios-item-icon"><img class="img-bg" src="@/assets/img/servicios-dot.svg"><i class="fab fa-searchengin"></i></div>
                           <h2 class="servicios-titulos">{{$t("Servicios.Estudios_tecnicos")}}<br></h2>
                       </div><p class="ofrecemos-content" style="width: 90%;" v-html="$t('Servicios.Estudios_tecnicos_texto')"><br></p>
                       <a href="#" class=" btn float-right btn-animado btn-sm" data-toggle="modal" data-target="#modal-service-2">{{$t("Componentes.Botones.Boton_solicitar_presupuesto")}}</a></div>
               </div>
           </div>
       </section>

       <serviciosModal id="modal-service-2" :servicio="$t('Servicios.Estudios_tecnicos')"></serviciosModal>

       <section class="d-flex flex-column align-items-center border-radius-top footer-radius" id="monitorizacion-energetica" ref="monitorizacion-energetica">
           <div class="puntos-rigth"></div>
           <div class="container">
               <div class="row d-flex justify-content-between">
                   <div class="col-12 col-sm-11 col-md-6 col-lg-4 offset-0 offset-lg-1 offset-xl-0 flex-column order-1 px-md-1 px-5 justify-paragraph" data-aos="fade-right" data-aos-duration="700">
                       <div class="d-flex align-items-center">
                           <div class="servicios-item-icon"><img class="img-bg" src="@/assets/img/servicios-dot.svg"><i class="fas fa-satellite-dish"></i></div>
                           <h2 class="servicios-titulos">{{$t("Servicios.Monitorizacion_energetica")}}<br></h2>
                       </div><p class="ofrecemos-content" v-html="$t('Servicios.Monitorizacion_energetica_texto')"><br></p>
                       <a href="#" class=" btn float-right btn-animado btn-sm" data-toggle="modal" data-target="#modal-service-3">{{$t("Componentes.Botones.Boton_solicitar_presupuesto")}}</a><div class="puntos-graf"></div>
                   </div>
                   <div class="col-12 col-sm-11 col-md-6 col-lg-7 order-1 mb-5 pt-5 pl-3 pr-4 px-md-5 py-md-1">
                       <div data-aos="fade-down" data-aos-duration="700">
                           <div><img class="img-fluid" src="@/assets/img/img-monitorizacion.svg" style="max-height: 70vh;"></div>
                       </div>
                   </div>
               </div>
           </div>
       </section>

        <serviciosModal id="modal-service-3" :servicio="$t('Servicios.Monitorizacion_energetica')"></serviciosModal>

       <section class="d-flex flex-column align-items-center" id="eficiencia-energetica">
           <div class="puntos-left"></div>
           <div class="container">
               <div class="row d-flex justify-content-between">
                   <div class="col-12 col-sm-11 col-md-6 col-lg-6 order-2 order-md-1 photo-square mt-4 mt-sm-0" data-aos="fade-right" data-aos-duration="750"><img class="img-fluid" src="@/assets/img/img-eficiencia.svg" style="max-height: 60vh;"></div>
                   <div class="col-12 col-sm-11 col-md-6 col-lg-7 order-1 order-md-2 px-md-3 px-5 justify-paragraph">
                       <div class="d-flex align-items-center">
                           <div class="servicios-item-icon"><img class="img-bg" src="@/assets/img/servicios-dot.svg"><i class="fas fa-solar-panel"></i></div>
                           <h2 class="servicios-titulos">{{$t("Servicios.Eficiencia_energetica")}}<br></h2>
                       </div><p class="ofrecemos-content" style="width: 90%;" v-html="$t('Servicios.Eficiencia_energetica_texto')"><br /></p>
                       <p class="ofrecemos-content" style="width: 90%;">&nbsp;<i class="fas fa-lightbulb" style="font-size: large;width: 30px;color: rgba(17,67,106,0.28);"></i><strong> {{$t("Servicios.Iluminacion_led")}} </strong>{{$t("Servicios.Iluminacion_led_text")}}<br></p>
                       <p class="ofrecemos-content" style="width: 90%;">&nbsp;<i class="fas fa-solar-panel" style="font-size: large;width: 30px;color: rgba(17,67,106,0.28);"></i><strong> {{$t("Servicios.Productos_fotovoltaicos")}} </strong>{{$t("Servicios.Productos_fotovoltaicos_text")}}<br></p>
                       <p class="ofrecemos-content" style="width: 90%;">&nbsp;<i class="fas fa-charging-station" style="font-size: large;width: 30px;color: rgba(17,67,106,0.28);"></i><strong> {{$t("Servicios.Cargadores")}} </strong>{{$t("Servicios.Cargadores_text")}}<br></p>
                       <p class="ofrecemos-content" style="width: 90%;">&nbsp;<i class="fas fa-battery-half" style="font-size: large;width: 30px;color: rgba(17,67,106,0.28);"></i><strong> {{$t("Servicios.Baterias_de_condensadores")}} </strong>{{$t("Servicios.Baterias_de_condensadores_text")}} <br></p>
                       <p class="ofrecemos-content" style="width: 90%;">&nbsp;<i class="fas fa-tachometer-alt" style="font-size: large;width: 30px;color: rgba(17,67,106,0.28);"></i><strong> {{$t("Servicios.Contadores_de_telemedida")}} </strong>{{$t("Servicios.Contadores_de_telemedida_text")}}<br></p>
                       <a href="#" class=" btn float-right btn-animado btn-sm" data-toggle="modal" data-target="#modal-service-4">{{$t("Componentes.Botones.Boton_solicitar_presupuesto")}}</a>
                   </div>
               </div>
           </div>
       </section>

    <serviciosModal id="modal-service-4" :servicio="$t('Servicios.Eficiencia_energetica')"></serviciosModal>

       <div class="pt-5 pb-5 padding-footer" style="background-color: #f1f8fd;"></div>
       <div class="newsletter-subscribe pt-5 pb-5">
           <div class="container">
               <div class="text-center intro">
                   <h2 class="text-center">{{$t("Servicios.cta_texto")}}<br></h2>
               </div>
           </div>
           <form-cta-phone></form-cta-phone>
       </div>

       <logosCompanies></logosCompanies>
       <testimoniosComp></testimoniosComp>
   </div>
</template>

<script>
    import FormCtaPhone from "../components/layout/forms/form-cta-phone";
    import serviciosModal from "../components/layout/servicios/serviciosModal";
    import logosCompanies from "../components/layout/logosCompanies";
    import testimoniosComp from "../components/layout/servicios/testimonios";
    import $ from 'jquery';
    export default {
        name: "Servicios",
        
        metaInfo() {
        return { 
            title: "Consultoría energética - ElectryConsulting - Servicios",
            meta: [
              
              { name: 'description', content:  'ElectryConsulting ofrece servicios de asesoría energética entre los que destacan la optimización de las instalaciones a través de la eficiencia energética.'},
              { property: 'og:title', content: "Consultoría energética - ElectryConsulting - Servicios"},
              { property: 'og:site_name', content: 'ElectryConsulting - Consultoría energética'},
              { property: 'og:type', content: 'website'},
              { property: 'og:description', content: 'ElectryConsulting ofrece servicios de asesoría energética entre los que destacan la optimización de las instalaciones a través de la eficiencia energética.'},
              { property: 'og:image', content: 'https://electryconsulting.com/img/logo.png'},
              { property: 'og:locale', content: 'es_ES'}, 
              { name: 'robots', content: 'index,follow'}, 
              { name: 'googlebot', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'}, 
              { name: 'bingbot', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'} 
              
            ]
        }
    },    
        components: {
            FormCtaPhone,
            serviciosModal,
            logosCompanies,
            testimoniosComp
        }
    }
</script>

