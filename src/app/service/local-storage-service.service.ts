import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageServiceService {

  constructor() { }

  setLocalStorage(login:string, estado:string ){
    try {
      localStorage.setItem(login, JSON.stringify(estado));
    } catch (e) { 
      console.log(e);
    }

  }

  getLocalStorage(login:string){
    try {
      return JSON.parse(localStorage.getItem(login));
    } catch (e) { 
    console.log(e);
    }
  }

  clearLocalStorage():void{
    try {
    localStorage.clear();
  } catch (e) { 
    console.log(e);
  }

}
}
