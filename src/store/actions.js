import axios from 'axios';
import state from './state';

export const getInmueble=({commit},{circunscripcion,seccion,manzana,parcela,p_h})=>{
    axios.get('/Catastro/BuscarCatastro?circunscripcion=' +
    circunscripcion +
    '&seccion=' +
    seccion +
    '&manzana=' +
    manzana +
    '&parcela=' +
    parcela +
    '&p_h=' +
    p_h)
    .then(response=> {
        commit('SET_INMUEBLE',response.data)
    })
    
}
export const getTramites=({commit})=>{
    axios.get('/Tramites/read')
    .then(response=> {
        commit('SET_TRAMITES',response.data)
    })

}
export const getTramite=({commit},{id})=>{
    axios.get('/Tramites/getByPk?id='+id)
    .then(response=> {
        commit('SET_TRAMITE',response.data)
    })


}
export const getHistorial=({commit},{id})=>{
    axios.get('/Tramites/getHistorial?id='+id)
    .then(response=> {
        commit('SET_HISTORIAL',response.data)
    })

    
}
