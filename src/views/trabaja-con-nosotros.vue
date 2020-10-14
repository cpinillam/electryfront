<template>
    <div>

        <div>
            <div class="block-titel">
                <div class="d-flex justify-content-between container">
                    <div class="pl-4 pl-sm-2 pl-md-0">
                        <h1>{{$t("trabaja_con_nosotros.trabaja_con_nosotros")}}</h1>

                    </div>
                    <div class="d-none d-md-inline puntos"></div>
                </div>
            </div>
            <div class="features-clean">
                <div class="container d-flex flex-column">
                    <div class="col-12">
                        <div class="intro">
                            <h2 class="text-center"><strong>{{$t("trabaja_con_nosotros.trabaja_con_nosotros_subtitulo")}}</strong><br></h2>
                        </div>
                    </div>
                    <div class="row no-gutters d-flex justify-content-center justify-content-lg-start">
                        <div class="col-8 col-sm-6 col-lg-4 order-2 order-lg-1 align-items-xl-end"><div><MolinoHome class="img-fluid max-heigt"></MolinoHome></div></div>
                        <div class="col-12 col-md-12 col-lg-8 order-1 order-lg-2 pb-5">
                            <div class="row no-gutters features">
                                <div class="col-sm-6 col-lg-6 item"><i class="fas fa-people-carry icon"></i>
                                    <p class="description">{{$t("trabaja_con_nosotros.Razones_1")}}<br></p>
                                </div>
                                <div class="col-sm-6 col-lg-6 item"><i class="fas fa-award icon"></i>
                                    <p class="description">{{$t("trabaja_con_nosotros.Razones_2")}}<br></p>
                                </div>
                                <div class="col-sm-6 col-lg-6 item"><i class="far fa-handshake icon"></i>
                                    <p class="description">{{$t("trabaja_con_nosotros.Razones_3")}}<br></p>
                                </div>
                                <div class="col-sm-6 col-lg-6 item"><i class="fa fa-rocket icon"></i>
                                    <p class="description">{{$t("trabaja_con_nosotros.Razones_4")}}<br></p>
                                </div>
                                <div class="col-sm-6 col-lg-6 item"><i class="far fa-smile-beam icon"></i>
                                    <p class="description">{{$t("trabaja_con_nosotros.Razones_5")}}<br></p>
                                </div>

                                <div class="col-sm-6 col-lg-6 pl-5">
                                    <a href="jobs" class="enlace-electry btn-cristal-blue mb-5">{{$t("Componentes.Cta_Ofertas.Ofertas_Boton_text")}}</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 jobs-footer">
                    <div></div>
                </div>
            </div>
            <div class="newsletter-subscribe">
                <div class="container px-0">
                    <div class="row no-gutters d-flex justify-content-center">
                        <div class="col-12 col-md-8">
                            <div class="text-center intro px-5 px-sm-5 px-md-0">
                                <h1 class="text-center mt-5">{{$t("trabaja_con_nosotros.trabaja_form_titulo")}}<br></h1>
                                <h2 class="text-center mb-5">{{$t("trabaja_con_nosotros.trabaja_form_subtitulo")}}<br></h2>
                                    <FormTrabajaNosotros></FormTrabajaNosotros>
                                </div>
                                
                        </div>
                        <div class="col-6 col-sm-5 col-md-3"><img class="img-fluid" src="../assets/img/img-gestion-energetica.svg"></div>
                    </div>
                </div>
            </div>
            <div class="features-clean">
                <div class="container d-flex flex-column">
                    <div class="col-12 pt-5">
                        <div class="intro">
                            <h4 class="text-center">{{$t("trabaja_con_nosotros.Ser_asesor_energetico")}}<br></h4>
                        </div>
                    </div>
                    <div class="col-12 order-1 order-lg-2">
                        <div class="row no-gutters features">
                            <div class="col-sm-6 col-lg-3 item"><i class="fas fa-money-bill-wave icon"></i>
                                <p class="description">{{$t("trabaja_con_nosotros.Ser_asesor_energetico_1")}}<br></p>
                            </div>
                            <div class="col-sm-6 col-lg-3 item"><i class="fab fa-app-store-ios icon"></i>
                                <p class="description">{{$t("trabaja_con_nosotros.Ser_asesor_energetico_2")}}<br></p>
                            </div>
                            <div class="col-sm-6 col-lg-3 item"><i class="fas fa-comments icon"></i>
                                <p class="description">{{$t("trabaja_con_nosotros.Ser_asesor_energetico_3")}}<br></p>
                            </div>
                            <div class="col-sm-6 col-lg-3 item"><i class="fas fa-chart-line icon"></i>
                                <p class="description">{{$t("trabaja_con_nosotros.Ser_asesor_energetico_4")}}<br></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="delegaciones-column" class="ligth">
                <div class="row d-lg-flex justify-content-lg-center">
                    <div class="col-11 mb-5">
                        <div class="delegaciones-column bg-secondary">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 d-flex flex-column align-items-center justify-content-lg-center">
                                        <h2>{{$t("trabaja_con_nosotros.Tienes_tu_propio_equipo")}}<br></h2>
                                        <p class="pt-3 small text-center w-50">{{$t("trabaja_con_nosotros.Tienes_tu_propio_equipo_text")}}<br></p>
                                        
                                        <a class="enlace-electry" href="nueva-delegacion"><button class="btn-cristal-blue">{{$t("Componentes.Botones.Tienes_tu_propio_equipo_boton")}}</button></a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="padding: 30px 0;color: #f0f9ff;background-color: #282d32;">
                <div class="container text-center d-flex flex-column align-items-center">
                    <h1>{{$t("trabaja_con_nosotros.Eventos")}}</h1>
                    <p class="w-75">{{$t("trabaja_con_nosotros.Eventos_text")}}<br></p>
                </div>
            </div>
            <FotosEventos></FotosEventos>
        </div>
    </div>
</template>

<script>
    import MolinoHome from "../components/Home/molino-home";
    import FotosEventos from "../components/FotosEventos";
    import FormTrabajaNosotros from "../components/layout/forms/form-trabaja-nosotros"

    export default {
        name: "trabaja-con-nosotros",
        metaInfo() {
        return { 
            title: "Consultoría energética - ElectryConsulting - Trabaja con nosotros",
            meta: [
              
              { name: 'description', content:  'Únete como asesor energético a la mejor compañía de asesoría energética de todo el país. Encuentra tu delegación más cercana y trabaja con nosotros.'},
              { property: 'og:title', content: "Consultoría energética - ElectryConsulting - Trabaja con nosotros"},
              { property: 'og:site_name', content: 'ElectryConsulting - Consultoría energética'},
              { property: 'og:type', content: 'website'},
              { property: 'og:description', content: 'Únete como asesor energético a la mejor compañía de asesoría energética de todo el país. Encuentra tu delegación más cercana y trabaja con nosotros.'},
              { property: 'og:image', content: 'https://electryconsulting.com/img/logo.png'},
              { property: 'og:locale', content: 'es_ES'}, 
              { name: 'robots', content: 'index,follow'}, 
              { name: 'googlebot', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'}, 
              { name: 'bingbot', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'} 
              
            ]
        }
    },  

        components: {
            FotosEventos, FormTrabajaNosotros, MolinoHome
        }
    }
</script>

<style scoped>

   


</style>