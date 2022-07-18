import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Persona } from 'src/app/interfaces/ipersona';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  public personas!: Persona[];

  constructor(private peService : PersonaService) { }

  ngOnInit(): void {
      this.traerPersona();
  }

  public traerPersona(){
    this.peService.verPersonas().subscribe(
  (response: Persona[]) =>{
    this.personas = response;
  },
  (error: HttpErrorResponse) =>{
    alert(error.message);
  }
  );
  }

  // this.http.get("http://localhost:8080/ver/persona/6").suscribe((resp:any) =>{
  //   this.persona = resp;
  // })
}





//   //FUNCIONES
//    cambiarParrafo1(){
//     const inputUno: any = document.getElementById("inputUno");
//      if(inputUno.style.display === "block"){
//          inputUno.style.display = "none"
//      }else{
//          inputUno.style.display = "block"
//      }
//  }
//   textoIngresado1(newText:any){
//   const texto = document.getElementById("texto1") as HTMLInputElement;
//   const textoInput= texto.value
//   texto.innerText=newText
//   // document.getElementById("texto1").innerText=newText;
// }

//  ocultarSeccion1(){
// const seccion = document.getElementById("presentacion") as HTMLDivElement

// seccion.style.display="none"
// // document.getElementById("presentacion").style.display ="none";
// }
