<template>
  <v-app>
    <v-app-bar app color="primary"      short   dark
   
      src="../img/back-app.jpg">

      <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>
      
      <div class="d-flex align-center">
        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
          src="https://vecino.villaallende.gov.ar/App_Themes/images/GESTION%20vertical%202.png" width="100" />
      </div>
      <v-spacer></v-spacer>
    <v-app-bar-title  style="color:white;margin-right: 1% " >{{ title }}</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon style="margin-right: 1%" >
        <v-avatar >
          <v-img  style="height: 55px; margin-top: 25px" alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down"
            contain min-width="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlu7f9_MmSWQq06q_SUCRIx-0Cu0udlR-9hw&usqp=CAU" width="100" />
        </v-avatar>
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary   src="../img/back-app.jpg" dark  >
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
           <v-list-item :href="'/tramite/'">
            <v-list-item-icon>

              <v-icon>mdi-file-chart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Tramites</v-list-item-title>
          </v-list-item>



          <v-list-item :href="'/'"  >
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Salir</v-list-item-title>
          </v-list-item> 

   <v-list
        dense
        nav
      >
        
      </v-list>


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="drawer2" absolute temporary right>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
         <!--    <img src="https://randomuser.me/api/portraits/women/81.jpg" /> -->
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      
      <v-divider></v-divider>
    </v-navigation-drawer>

    <v-main>
       
         <router-view />
       
    </v-main>
  </v-app>
</template>

<script>
import Login from "./Login.vue"
export default {
  name: 'App',
  components: { Login },
  data: () => ({
    drawer: false,
    drawer2: false,
    group: null,
    title:"E-Tramite Obras Privadas"
  }),
};
</script>
