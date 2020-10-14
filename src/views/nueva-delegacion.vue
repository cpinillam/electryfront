<template>
    <div>

        <div>
            <div class="block-titel">
                <div class="d-flex justify-content-between container">
                    <div class="pl-4 pl-sm-2 pl-md-0">
                        <h1>{{$t("Nueva_Delegacion.nuevas_delegaciones")}}</h1>
                        <p>{{$t("Nueva_Delegacion.nuevas_delegaciones_text")}}</p>
                    </div>
                    <div class="d-none d-md-inline puntos"></div>
                </div>
            </div>
            <div class="features-clean pb-0">
                <div class="container d-flex flex-column">
                    <div class="col-12 pt-5 pb-0">
                        <p class="pb-0">{{$t("Nueva_Delegacion.nuevas_delegaciones_parrafo")}}</p>
                        <div class="intro">
                            <h2 class="text-center pt-0"><strong>{{$t("Nueva_Delegacion.Nuestras_ventajas")}}</strong><br></h2>
                        </div>
                    </div>
                    
                    <div class="col-12 order-1 order-lg-2 pb-0">
                            <div class="row no-gutters features">
                                <div class="col-sm-6 col-lg-6 item pl-0 pr-5 mb-0">
                                    <p class="description">
                                       <i class="fas fa-check"></i> {{$t("Nueva_Delegacion.ventajas1")}} </p><br>
                                     <p> <i class="fas fa-check"></i> {{$t("Nueva_Delegacion.ventajas2")}}.</p>
                                      <p> <i class="fas fa-check"></i> {{$t("Nueva_Delegacion.ventajas3")}}</p>
                                      <p> <i class="fas fa-check"></i> {{$t("Nueva_Delegacion.ventajas4")}}</p>
                                </div>
                                <div class="col-sm-6 col-lg-6 item pl-0 pb-0">
                                    <p class="description">
                                        <i class="fas fa-check"></i> {{$t("Nueva_Delegacion.ventajas5")}}</p>
                                    <br>
                                    <p> <i class="fas fa-check"></i> {{$t("Nueva_Delegacion.ventajas6")}}</p>
                                    <p><i class="fas fa-check"></i> {{$t("Nueva_Delegacion.ventajas7")}}</p>
                                </div>
                               
                                

                            </div>
                        </div>
                </div>
            </div>

            <div class="features-clean">
                <div class="container d-flex flex-column">
                    <div class="col-12 pt-5">
                        <div class="intro">
                            <h4 class="text-center">{{$t("Nueva_Delegacion.Buscamos_delegaciones")}}</h4>
                        </div>
                    </div>
                    <div class="col-12 order-1 order-lg-4">
                        <div class="row no-gutters features">
                            <div class="col-sm-6 col-lg-4 item"><i class="fas fa-users icon"></i>
                                <p class="description">{{$t("Nueva_Delegacion.Buscamos_delegaciones1")}}</p>
                            </div>
                            <div class="col-sm-6 col-lg-4 item"><i class="fas fa-calendar-check icon"></i>
                                <p class="description">{{$t("Nueva_Delegacion.Buscamos_delegaciones2")}}</p>
                            </div>
                            <div class="col-sm-6 col-lg-4 item"><i class="fas fa-user-check icon"></i>
                                <p class="description">{{$t("Nueva_Delegacion.Buscamos_delegaciones3")}}</p>
                            </div>
                            <div class="col-sm-6 col-lg-4 item"><i class="fas fa-file-invoice-dollar icon"></i>
                                <p class="description">{{$t("Nueva_Delegacion.Buscamos_delegaciones4")}}</p>
                            </div>

                            <div class="col-sm-6 col-lg-4 item"><i class="fas fa-award icon"></i>
                                <p class="description">{{$t("Nueva_Delegacion.Buscamos_delegaciones5")}}</p>
                            </div>
                            <div class="col-sm-6 col-lg-4 item"><i class="fas fa-chart-line icon"></i>
                                <p class="description">{{$t("Nueva_Delegacion.Buscamos_delegaciones6")}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
        <div class="newsletter-subscribe">
                <div class="container px-0">
                    <div class="row no-gutters d-flex justify-content-center">
                        <div class="col-12 col-md-8">
                            <div class="text-center intro px-5 px-sm-5 px-md-0">
                                <h1 class="text-center mt-5">{{$t("Nueva_Delegacion.Forma_parte")}}<br></h1>
                                <h2 class="text-center mb-5">{{$t("Nueva_Delegacion.Unete")}}<br></h2>
                                    <FormNuevaDelegacion></FormNuevaDelegacion>
                                </div>
                                
                        </div>
                        <div class="col-6 col-sm-5 col-md-3"><img class="img-fluid" src="../assets/img/img-gestion-energetica.svg"></div>
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
    
</template>

<script>
    import MolinoHome from "../components/Home/molino-home";
    import FotosEventos from "../components/FotosEventos";
    import FormNuevaDelegacion from "../components/layout/forms/form-nueva-delegacion"

    export default {
        name: "nueva-delegacion",
        meta: [
              
              { name: 'description', content:  'Únete como asesor energético a la mejor compañía de asesoría energética de todo el país. Encuentra tu delegación más cercana y trabaja con nosotros.'}
              
            ],
        components: {
            FotosEventos, FormNuevaDelegacion
        }
    }
</script>

<style scoped>

   


</style>