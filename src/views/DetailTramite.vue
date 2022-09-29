<template>
  <v-form ref="form" v-model="valid" lazy-validation class="formulario">
    <v-card elevation="6" class="cardBusqueda">
      <v-row>
        <h1>Detalle Tramite</h1>
      </v-row>
      <br />
      <v-row align="center" dense>
        <v-col cols="1">
          <v-text-field
            v-model="datosTramite.circunscripcion"
            
            label="Circunscripcion"
            outlined
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-text-field
            v-model="datosTramite.seccion"
           
            label="Seccion"
            outlined
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-text-field
            v-model="datosTramite.manzana"
           
            label="Manzana"
            outlined
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-text-field
            v-model="datosTramite.parcela"
            
            label="Parcela"
            outlined
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-text-field
            v-model="datosTramite.p_h"
           
            label="P_H"
            outlined
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-text-field
            v-model="datosTramite.anio"
            value=""
            label="Año"
            outlined
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field
            v-model="datosTramite.nro_expediente"
            value=""
            label="Expediente"
            outlined
            readonly
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="2">
          <v-text-field
            v-model="datosTramite.fecha_alta"
            value=""
            label="Fecha Ingreso"
            outlined
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-text-field
            v-model="datosTramite.nro_tramite"
            value="0"
            
            label="Nro de tramite"
            outlined
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>
    <v-card elevation="6" class="cardBusqueda">
      <h1>Datos Vecino</h1>
      <br />
      <v-row>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="datosTramite.nombre_titular"
            value=""
            label="Nombre"
            outlined
            readonly
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field
            v-model="datosTramite.calle_pf"
            value=""
            label="Calle"
            outlined
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-text-field
            v-model="datosTramite.nro_pf"
            value=""
            label="Nro"
            outlined
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field
            v-model="datosTramite.superficie"
            value=""
            label="Superficie"
            outlined
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field
            v-model="datosTramite.presupuesto_destinado"
            value=""
            label="Presupuesto"
            outlined
            readonly
          ></v-text-field>
        </v-col>


      </v-row>
      <v-divider></v-divider>
     

     
    </v-card>
    <v-card-actions class="card-principal">
      <v-row>
        <v-col cols="12" sm="3" md="3">
          <v-btn elevation="5" color="warning" @click="Salir" :href="'/tramite'"
            >Salir</v-btn
          >
        </v-col>
      </v-row>
    </v-card-actions>
  </v-form>
</template>
    <script>
export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    valid: true,
    objTramite: {
      nro_tramite: 0,
      anio: 0,
      id_tipo_tramite: 0,
      id_profesional: 0,
      cuit_vecino: "",
      circunscripcion: 0,
      seccion: 0,
      manzana: 0,
      parcela: 0,
      p_h: 0,
      cod_calle_pf: 0,
      cod_oficina_destino: 0,
      id_estado_tramite: 0,
      calle_pf: "",
      nro_pf: "",
      superficie: 0,
      presupuesto_destinado: 0,
    },
    year: "",
    date: "",

    files: [],
    nameRules: [(v) => !!v || "dato requerido"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: "0",
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  computed: {
    datosTramite() {
      return this.$store.state.datosTramite;
    },
  },
  methods: {
    CambioId(index) {
      this.objTramite.id_tipo_tramite = this.select.id;
    },

    validate() {
      this.$refs.form.validate();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    printYear: function () {
      return new Date().getFullYear();
    },
    printDate: function () {
      return new Date().toLocaleDateString("en-GB");
    },
    async BuscarInmueble() {
      try {
        this.$store.dispatch("getInmueble", {
          circunscripcion: this.objTramite.circunscripcion,
          seccion: this.objTramite.seccion,
          manzana: this.objTramite.manzana,
          parcela: this.objTramite.parcela,
          p_h: this.objTramite.p_h,
        });
      } catch (error) {}
    },
  },
};
</script>
    <style>
.cardBusqueda {
  padding: 20px;
  margin: 5px;
  background-color: green;
}
.formulario {
  margin: 10px;
  padding: 10px;
}
</style>