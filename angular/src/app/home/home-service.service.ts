import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  show: boolean=true;
  constructor() {
    
   }

   cambiar(){
     return this.show=false;
   }

   mostrar(){
     
     return this.show;
   }
  
}
