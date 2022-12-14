import {isUndefined} from 'util';
import axios from 'axios';
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies();

export function calculaExpiracionSesion(){
    const now = new Date().getTime();
    const newDate = now + (60*30*1000);
    return new Date (newDate);
}

export function getSession(){
    return isUndefined(cookies.get('_s')) ? false: cookies.get('_s');
}

function renovarSesion(){
    const sesion = getSession();
    if (!sesion) window.location.href ='/login';
    cookies.set ('_s', sesion, {
        path: '/',
        expires: calculaExpiracionSesion(),
    });
    return sesion;
}

export const request={
    get: function (services){
        let token = renovarSesion();
        return axios.get(`http://localhost:3001/${services}`,{
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
    },
};