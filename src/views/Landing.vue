<template>
    <v-app id="inspire">
 

        <v-main>
            <v-container>
                <v-row>
                   <v-col cols="12" sm="3" md="4" justify="center">
                 
                    <v-card  height="400" :href="'/GestCementerio/'" flat class="ma-3 text-xs-center rounded-card" elevation="10">
                      <v-card-title primary-title style="text-align: center;display: block;" > <h3>  CEMENTERIO PARQUE</h3> </v-card-title>             
                     <v-img src="../assets/cementerioParque.jpg" max-width="400" class="ml-3"></v-img></v-card>
    
                  </v-col>   
                  <v-col cols="12" sm="3" md="4" ></v-col>
                  <v-col cols="12" sm="3" md="4" >
                    <v-card height="400" elevation="10">
                       <v-card-title style="text-align: center;display: block;"> <h3>CEMENTERIO SANTA INES</h3> </v-card-title>        
                        <v-img src="../assets/cementerioSI.jpg" max-width="400" class="ml-3"></v-img></v-card>
                   
                   </v-col>
                    
                   
                </v-row>
            </v-container>
        </v-main>
        

        
    </v-app>
</template>

<script>
    import menu from "@/components/menu.vue"
export default {
   components:{menu}, //
}
</script>
<style>
.rounded-card{
  border-radius:20px;
}
</style>
