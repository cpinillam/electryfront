<template>
    <div>
        <div class="block-titel no-radius">
            <div class="d-flex justify-content-between container">
                <div class="pl-4 pl-sm-2 pl-md-0">
                    <h1>{{$t("Clientes.Nuestros_clientes")}}</h1>
                    <p>{{$t("Clientes.Nuestros_clientes_subtitulo")}}<br></p>
                </div>
                <div class="d-none d-md-inline puntos"></div>
            </div>
        </div>
        <section class="d-flex flex-column align-items-center footer-radius" id="gestion-energetica">
            <div class="container">
                <div class="row d-flex justify-content-between">
                    <div class="col-12 col-sm-11 col-md-6 col-lg-7 px-md-3 px-5 justify-paragraph">
                        <div class="d-flex align-items-center">
                            <div class="servicios-item-icon" style="transform: scale(1.8) translateX(-15px);"><img class="img-bg" src="../assets/img/servicios-dot.svg"><i class="fas fa-home"></i></div>
                            <h2 class="servicios-titulos">{{$t("Clientes.Particulares")}}<br></h2>
                        </div>
                        <p class="ofrecemos-content" style="width: 90%;"><br>{{$t("Clientes.Particulares_text")}}<br><br></p>
                            
                            <a href="#" class=" btn float-right btn-animado btn-sm mb-5 mb-sm-0" data-toggle="modal" data-target="#modal-cliente-1">{{$t("Componentes.Botones.Boton_solicitar_informacion")}}</a>
                            <clientesModal id="modal-cliente-1" :cliente="$t('Clientes.Particulares')" ></clientesModal>
                            
                            </div>
                    <div class="col-12 col-sm-11 col-md-6 col-lg-6 photo-square"
                         data-aos="fade-right" data-aos-duration="750">
                        <div data-aos="fade-down" data-aos-duration="700" class="photo-square-clientes">
                            <div class="squared"><img src="../assets/img/particular-2.jpg" style="width: 156%;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="d-flex flex-column align-items-center" id="estudios-tecnicos">
            <div class="puntos-left"></div>
            <div class="container">
                <div class="row d-flex justify-content-between">
                    <div class="col-12 col-sm-11 col-md-6 col-lg-7 px-md-3 px-5 justify-paragraph">
                        <div class="d-flex align-items-center">
                            <div class="servicios-item-icon" style="transform: scale(1.8) translateX(-15px);"><img class="img-bg" src="../assets/img/servicios-dot.svg"><i class="fas fa-store"></i></div>
                            <h2 class="servicios-titulos">{{$t("Clientes.Pymes")}}<br></h2>
                        </div>
                        <p class="ofrecemos-content" style="width: 90%;"><br>{{$t("Clientes.Pymes_text")}}<br><br></p>
                            <a href="#" class=" btn float-right btn-animado btn-sm mb-5 mb-sm-0" data-toggle="modal" data-target="#modal-cliente-2">{{$t("Componentes.Botones.Boton_solicitar_informacion")}}</a>
                            <clientesModal id="modal-cliente-2" :cliente="$t('Clientes.Pymes')" ></clientesModal>
                            </div>
                    <div class="col-12 col-sm-11 col-md-6 col-lg-6 photo-square" data-aos="fade-right" data-aos-duration="750">
                        <div data-aos="fade-right" data-aos-duration="700" class="photo-square-clientes">
                            <div class="squared"><img src="../assets/img/Pyme.jpg" style="width: 153%;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="d-flex flex-column align-items-center border-radius-top" id="grandes-cuentas">
            <div class="puntos-rigth"></div>
            <div class="container">
                <div class="row d-flex justify-content-between">
                    <div class="col-12 col-sm-11 col-md-6 col-lg-7 px-md-3 px-5 justify-paragraph">
                        <div class="d-flex align-items-center">
                            <div class="servicios-item-icon" style="transform: scale(1.8) translateX(-15px);"><img class="img-bg" src="../assets/img/servicios-dot.svg"><i class="fas fa-building"></i></div>
                            <h2 class="servicios-titulos">{{$t("Clientes.Grandes_cuentas")}}<br></h2>
                        </div>
                        <p class="ofrecemos-content" style="width: 90%;"><br>{{$t("Clientes.Grandes_cuentas_text")}}<br><br></p>
                            <a href="#" class=" btn float-right btn-animado btn-sm mb-5 mb-sm-0" data-toggle="modal" data-target="#modal-cliente-3">{{$t("Componentes.Botones.Boton_solicitar_informacion")}}</a>
                            <clientesModal id="modal-cliente-3" :cliente="$t('Clientes.Grandes_cuentas')"></clientesModal>
                            </div>
                    <div
                            class="col-12 col-sm-11 col-md-6 col-lg-6 photo-square" data-aos="fade-right" data-aos-duration="750">
                        <div data-aos="fade-up" data-aos-duration="700" class="photo-square-clientes">
                            <div class="squared"><img src="../assets/img/gran-empresa-3.webp" style="width: 153%;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="d-flex flex-column align-items-center" id="administradores-fincas">
            <div class="puntos-left"></div>
            <div class="container">
                <div class="row d-flex justify-content-between">
                    <div class="col-12 col-sm-11 col-md-6 col-lg-7 px-md-3 px-5 justify-paragraph">
                        <div class="d-flex align-items-center">
                            <div class="servicios-item-icon" style="transform: scale(1.8) translateX(-15px);"><img class="img-bg" src="../assets/img/servicios-dot.svg"><i class="fas fa-store"></i></div>
                            <h2 class="servicios-titulos">{{$t("Clientes.Administradores_fincas")}}<br></h2>
                        </div>
                        <p class="ofrecemos-content" style="width: 90%;"><br>{{$t("Clientes.Administradores_fincas_text")}}<br><br></p>
                            <a  href="#" class=" btn float-right btn-animado btn-sm mb-5 mb-sm-0" data-toggle="modal" data-target="#modal-cliente-4">{{$t("Componentes.Botones.Boton_solicitar_informacion")}}</a>
                            <clientesModal id="modal-cliente-4" :cliente="$t('Clientes.Administradores_fincas')"></clientesModal>
                            </div>
                    <div class="col-12 col-sm-11 col-md-6 col-lg-6 photo-square" data-aos="fade-right" data-aos-duration="750">
                        <div class="photo-square-clientes">
                            <div class="squared"><img class="img-fluid" src="../assets/img/fincas.jpg" style="/*width: 153%;*/"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="d-flex flex-column align-items-center" id="gobierno">
            <div class="puntos-rigth"></div>
            <div class="container">
                <div class="row d-flex justify-content-between">
                    <div class="col-12 col-sm-11 col-md-6 col-lg-7 px-md-3 px-5 justify-paragraph">
                        <div class="d-flex align-items-center">
                            <div class="servicios-item-icon" style="transform: scale(1.8) translateX(-15px);"><img class="img-bg" src="../assets/img/servicios-dot.svg"><i class="fas fa-landmark"></i></div>
                            <h2 class="servicios-titulos">{{$t("Clientes.Organismos_publicos")}}<br></h2>
                        </div>
                        <p class="ofrecemos-content" style="width: 90%;"><br>{{$t("Clientes.Organismos_públicos_text")}}<br><br></p>
                            <a  href="#" class=" btn float-right btn-animado btn-sm mb-5 mb-sm-0" data-toggle="modal" data-target="#modal-cliente-5">{{$t("Componentes.Botones.Boton_solicitar_informacion")}}</a>
                            <clientesModal id="modal-cliente-5" :cliente="$t('Clientes.Organismos_publicos')"></clientesModal>
                            </div>
                    <div
                            class="col-12 col-sm-11 col-md-6 col-lg-6 photo-square" data-aos="fade-right" data-aos-duration="750">
                        <div data-aos="fade-up" data-aos-duration="700" class="photo-square-clientes">
                            <div class="squared"><img src="../assets/img/building.webp"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="newsletter-subscribe pt-5 pb-5">
            <div class="container">
                <div class="text-center intro">
                    <h2 class="text-center">{{$t("Clientes.Clientes_cta_text")}}<br></h2>
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
import clientesModal from "../components/layout/clientes/clientesModal";
import logosCompanies from "../components/layout/logosCompanies";
import testimoniosComp from "../components/layout/servicios/testimonios";

    export default {
        name: "Clientes",        
        metaInfo() {
        return { 
            title: "Consultoría energética - ElectryConsulting - Clientes",
            meta: [
              
              { name: 'description', content:  'ElectryConsulting centra sus servicios de asesoría energética en pymes, grandes cuentas, organismos públicos, administradores de fincas y particulares.'},
              { property: 'og:title', content: "Consultoría energética - ElectryConsulting - Clientes"},
              { property: 'og:site_name', content: 'ElectryConsulting - Consultoría energética'},
              { property: 'og:type', content: 'website'},
              { property: 'og:description', content: 'ElectryConsulting centra sus servicios de asesoría energética en pymes, grandes cuentas, organismos públicos, administradores de fincas y particulares.'},
              { property: 'og:image', content: 'https://electryconsulting.com/img/logo.png'},
              { property: 'og:locale', content: 'es_ES'}, 
              { name: 'robots', content: 'index,follow'}, 
              { name: 'googlebot', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'}, 
              { name: 'bingbot', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'} 
              
            ]
        }
    },   
        
        components:
            {
                FormCtaPhone,
                clientesModal,
                logosCompanies,
                testimoniosComp
                
                },
        
    }
</script>

<style scoped>
    @import '../assets/css/Testimonials.css';
</style>