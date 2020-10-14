<template>
    <div class="w-100">
        <img class="error" src="../../assets/img/images/404error.svg" alt="Error 404">
        
    </div>
</template>


<script>

 export default {
        name: "NotFound",

               
        data(){
            return {
                error: false,
                loading: false,
                entrada:{}
            }
        }

    }
</script>
                   
<style scoped>
.error {
    height: 100%;
    margin-left: auto;
    margin-right: auto;
}

.w-100 {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>