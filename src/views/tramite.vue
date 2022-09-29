<template>
  <v-container fluid flex>
    <v-card class="toolbarInit" elevation="5">
      <v-toolbar-title><h1>Tramites</h1></v-toolbar-title>
      <v-btn class="mt-4" color="primary" btn :href="'/NvoTramite'">
        <div>Nuevo tramite</div>
        <v-icon> mdi-playlist-plus</v-icon>
      </v-btn>
    </v-card>
    <v-row class="mb-5">
      <v-col cols="12" sm="3" md="4"> </v-col>
    </v-row>
    <v-row no-gutters dense>
      <v-data-table
        :headers="headers"
        :items="datosTramites"
        :items-per-page="all"
        id="datosTramites.nro_tramite"
        sort-by="nro_tramite"
        class="elevation-2 table"
      >
        <template v-slot:top> </template>
        <template v-slot:[`item.actionsTramite`]="{ item }">
          <v-btn rounded small color="#E59866" value="">
            <v-icon id="info" small dense class="mr-2" @click="editItem(item)">
              mdi-home-export-outline</v-icon
            ></v-btn
          >
          <v-btn rounded small color="#F4D03F" show-hint hint="This is a hint">
            <v-icon id="info" small dense class="mr-2" @click="Historial(item)">
              mdi-format-line-spacing
            </v-icon></v-btn
          >
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-row>

    <v-dialog
      v-model="dialogHisto"
      width="900"
      @click:outside="dialogHisto = false"
    >
      <v-data-table
        :headers="headersHisto"
        :items="datosHistorial"
        class="elevation-2 tableDlg"
        @click:row="editItemDif"
      >
        <template v-slot:[`item.actionsDif`]="{ item }">
          <v-icon large class="mr-2" @click="editItemDif(item)">
            mdi-cross
          </v-icon>
        </template>
      </v-data-table>
      <v-divider></v-divider>
    </v-dialog>
  </v-container>
</template>
  <script>
export default {
  data: () => ({
    dialogHisto: false,
    dialogDelete: false,
    datosTramites: [],
    headers: [
      {
        text: "Nro de Tramite",
        align: "start",
        value: "nro_tramite",
      },
      { text: "Fecha Alta", value: "fecha_alta" },
      { text: "N Expediente", value: "nro_expediente" },
      { text: "Titular", value: "nombre_titular" },
      { text: "Estado", value: "estado" },
      { text: "Area", value: "area", sortable: false },
      { text: "Usuario", value: "usuario", sortable: false },
      { text: "Detalle", value: "actionsTramite", sortable: false },
    ],
    headersHisto: [
      {
        text: "Nro de Paso",
        align: "start",
        value: "nro_paso",
      },
      { text: "Estado", value: "estado" },
      { text: "Origen", value: "origen" },
      { text: "Destino", value: "destino" },
      { text: "Fecha Recepcion", value: "fecha_recepcion" },
      { text: "Vencimiento", value: "fecha_vencimiento", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    datosHistorial() {
      return this.$store.state.datosHistorial;
    },
  },
  async mounted() {
    try {
      this.datosTramites = (await this.$http.get("/Tramites/read")).data;
    } catch (error) {}
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },
  methods: {
    initialize() {},
    Historial(item) {
      this.$store.dispatch("getHistorial", {
        id: item.nro_tramite,
      });
      this.dialogHisto = true;
    },

    editItem(item) {
      // alert(item.nro_tramite)
      this.$store.dispatch("getTramite", {
        id: item.nro_tramite,
      });
      this.$router.push("DetailTramite/");
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
    async CargarTramite(value) {
      this.$store.dispatch("getDifuntos", {
        tipo: this.editedItem.tipo,
        manzana: this.editedItem.manzana,
        lote: this.editedItem.lote,
        parcela: this.editedItem.parcela,
        nivel: this.editedItem.nivel,
      });
      this.$store.dispatch("getDocumentos");
      this.dlgDifunto = true;
    },
  },
};
</script>
<style>
.table thead th {
  font-size: 20px !important;
  font-weight: 500;
  background-color: #5dade2;
}
.tableDlg thead th {
  background-color: #5dade2;
}
.toolbarInit {
  background: red;
  padding: 2%;
}
h1 {
  color: black;
}
#info {
  width: 50%;
  margin: 0 auto;
}
.container {
  display: grid;
  place-content: center;
}
h1 {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
v-btn {
  text-align: right;
}
</style>