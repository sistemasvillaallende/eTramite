<template>
  <v-form ref="form" v-model="valid" lazy-validation class="formulario">
    <v-card elevation="6" class="cardBusqueda">
      <v-row>
        <h1>Nuevo Tramite</h1>
      </v-row>
      <br />
      <v-row align="center" dense>
        <v-col cols="1">
          <v-text-field
            v-model="objTramite.circunscripcion"
            :rules="nameRules"
            label="Circunscripcion"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-text-field
            v-model="objTramite.seccion"
            :rules="nameRules"
            label="Seccion"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-text-field
            v-model="objTramite.manzana"
            :rules="nameRules"
            label="Manzana"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-text-field
            v-model="objTramite.parcela"
            :rules="nameRules"
            label="Parcela"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-text-field
            v-model="objTramite.p_h"
            :rules="nameRules"
            label="P_H"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-5 mb-3"
            append-icon="mdi-home-search-outline"
          >
            <v-icon @click="BuscarInmueble" dark>
              mdi-home-search-outline >
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" sm="1">
          <v-text-field
            v-model="year"
            value=""
            label="Año"
            outlined
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field
            v-model="datosInmueble.nro_expediente"
            value=""
            label="Expediente"
            outlined
            readonly
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="2">
          <v-text-field
            v-model="date"
            value=""
            label="Fecha Ingreso"
            outlined
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>
    <v-card
      elevation="6"
      class="cardBusqueda"
      v-if="datosInmueble != null && datosInmueble != 'undefined'"
    >
      <h1>Datos Vecino</h1>
      <br />
      <v-row>
        <v-col cols="12" sm="1">
          <v-text-field
            v-model="datosInmueble.cuit"
            value=""
            label="Cuit"
            outlined
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field
            v-model="datosInmueble.nombre"
            value=""
            label="Nombre"
            outlined
            readonly
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="2">
          <v-text-field
            v-model="datosInmueble.celular"
            value=""
            label="Celular"
            outlined
            readonly
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="2">
          <v-text-field
            v-model="datosInmueble.e_mail"
            value=""
            label="Email"
            outlined
            readonly
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="2">
          <v-text-field
            v-model="datosInmueble.nombre_calle"
            value=""
            label="Calle"
            outlined
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="1">
          <v-text-field
            v-model="datosInmueble.nro_dom_pf"
            value=""
            label="Nro"
            outlined
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="3">
          <v-select
            v-model="select"
            :items="datosTiposTramites"
            item-text="tramite"
            item-value="id"
            :rules="[(v) => !!v || 'Item is required']"
            label="Tipos de tramites"
            @change="CambioId()"
            return-object
            required
          ></v-select>
        </v-col>
        <v-col cols="2">
          <v-text-field
            v-model="objTramite.superficie"
            :counter="10"
            type="number"
            :rules="nameRules"
            label="Superficie a construir"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
            v-model="objTramite.presupuesto_destinado"
            :counter="10"
            :rules="nameRules"
            label="Presupuesto Destinado"
            type="number"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-file-input
          v-model="files"
          placeholder="Subir documentos"
          label="archivos adjuntos"
          multiple
          prepend-icon="mdi-paperclip"
        >
          <template v-slot:selection="{ text }">
            <v-chip small label color="primary">
              {{ text }}
            </v-chip>
          </template>
        </v-file-input>
      </v-row>
    </v-card>
    <v-card-actions class="card-principal">
      <v-row>
        <v-col cols="12" sm="3" md="3">
          <v-btn color="primary" elevation="5" @click="GuardarAlert">
            Guardar
          </v-btn>
        </v-col>
        <v-col cols="12" sm="3" md="3">
          <v-btn elevation="5" color="error" :href="'/tramite'">Cancelar</v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-form>
</template>
  <script>
import Swal from "sweetalert2";
export default {
  components: {
    Swal,
  },
  data: () => ({
    menu: false,
    modal: false,
    menu2: false,
    valid: true,
    datosInmueble: [],
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
      usuario: "",
      nombre_titular: "",
    },
    year: "",
    date: "",
    datosTiposTramites: [],
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
  async mounted() {
    try {
      this.datosTiposTramites = (
        await this.$http.get("/TiposTramites/read")
      ).data;
    } catch (error) {}
    this.year = this.printYear();
    this.date = this.printDate();
  },

  methods: {
    validarDatos() {
      var aprobado = true;
      this.aprobado = true;
      var errores = ".";
      this.errores = " ";
      if (
        this.objTramite.id_tipo_tramite === null ||
        this.objTramite.id_tipo_tramite === 0
      ) {
        this.aprobado = false;
        this.errores = this.errores + " - " + " tipo de tramite ";
      }
      if (
        this.objTramite.superficie === null ||
        this.objTramite.superficie === 0
      ) {
        this.aprobado = false;
        this.errores = this.errores + " - " + " superficie ";
      }
      if (
        this.objTramite.presupuesto_destinado === null ||
        this.objTramite.presupuesto_destinado === 0
      ) {
        this.aprobado = false;
        this.errores = this.errores + " - " + " presupuesto ";
      }
      if (this.aprobado === false) {
        Swal.fire({
          icon: "warning",
          title: "Falta cargar " + this.errores,
          showConfirmButton: false,
          timer: 2500,
        });
      }
      return this.aprobado;
    },
    GuardarAlert() {
      this.objTramite.anio = this.printYear();
      this.objTramite.cod_calle_pf = this.datosInmueble.cod_calle_pf;
      this.objTramite.calle_pf = this.datosInmueble.nombre_calle;
      this.objTramite.cuit_vecino = this.datosInmueble.cuit;
      this.objTramite.id_profesional = 1;
      this.objTramite.id_estado_tramite = 1;
      this.objTramite.cod_oficina_destino = 3;
      this.objTramite.nro_pf = this.datosInmueble.nro_dom_pf.toString();
      this.objTramite.nro_tramite = 0;
      this.objTramite.usuario = "PROFESIONAL";
      this.objTramite.nombre_titular = this.datosInmueble.nombre;

      if (this.validarDatos()) {
        Swal.fire({
          title: "Confirmar ingreso de Tramite ",
          text: "Esta seguro que desea ingresar este tramite?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si",
          cancelButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            this.GuardarTramite();
          }
        });
      }
    },
    CambioId(index) {
      this.objTramite.id_tipo_tramite = this.select.id;
    },

    async GuardarTramite() {
      try {
        await this.$http.post("/Tramites/insert", this.objTramite).data;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se agrego el tramite con exito!!",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {}
      this.$router.push("tramite/");
    },
    mostrararchivo() {
      for (let index = 0; index < this.files.length; index++) {
        console.log(files[index]);
      }
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
        this.datosInmueble = (
          await this.$http.get(
            "/Catastro/BuscarCatastro?circunscripcion=" +
              this.objTramite.circunscripcion +
              "&seccion=" +
              this.objTramite.seccion +
              "&manzana=" +
              this.objTramite.manzana +
              "&parcela=" +
              this.objTramite.parcela +
              "&p_h=" +
              this.objTramite.p_h
          )
        ).data;
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
h1 {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
</style>