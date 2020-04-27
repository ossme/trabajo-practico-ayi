import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ControlContainer } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/features/store/user.reducers';
import * as actions from 'src/app/features/store/user.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  formulario : FormGroup;
  listUser:UserState;
  @ViewChild('closebutton') closebutton;
  constructor( private fb:FormBuilder,
                private store: Store<{ users: UserState }>) {
    this.crearFormulario()
    this.store.select('users')
    .subscribe(users => this.listUser=users)
  }

  ngOnInit(): void {
  }

  get nombreNoValido(){
    return this.formulario.get('nombre').invalid && this.formulario.get('nombre').touched
  }
  get nombreUsuarioNoValido(){
    return this.formulario.get('nombreUsuario').invalid && this.formulario.get('nombreUsuario').touched
  }
  get emailNoValido(){
    return this.formulario.get('correo').invalid && this.formulario.get('correo').touched
  }
  get telefonoNoValido(){
    return this.formulario.get('telefono').invalid && this.formulario.get('telefono').touched
  }
  get companiaNoValido(){
    return this.formulario.get('compania').invalid && this.formulario.get('compania').touched
  }

  crearFormulario(){
    this.formulario= this.fb.group({
      nombre        :['', [Validators.required]],
      nombreUsuario :['',Validators.required],
      correo        :['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      telefono      :['',Validators.required],
      compania      :['',Validators.required],
      calle         :[''],
      ciudad        :[''],
      suite         :[''],
      codigoPostañ  :[''],
      website       :[''],
      bs            :['']
    })
  }

  guardar(){
    if(!this.formulario.invalid){
      console.log(this.formulario)
      var newUser = {
        "id": new Date().getTime,
        "name": this.formulario.controls.nombre.value,
        "username": this.formulario.controls.nombreUsuario.value,
        "email": this.formulario.controls.correo.value,
        "address": {
          "street": this.formulario.controls.calle.value,
          "suite": this.formulario.controls.suite.value,
          "city": this.formulario.controls.ciudad.value,
          "zipcode": ""  
          },
        "phone": this.formulario.controls.telefono.value,
        "website": this.formulario.controls.website.value,
        "company": {
          "name": this.formulario.controls.compania.value,
          "bs": this.formulario.controls.bs.value
        }
      };
      var ls = JSON.parse(JSON.stringify(this.listUser.data));
      ls.push(newUser);
      this.store.dispatch(actions.CreateData({user:ls})); 
    }else{
      Object.values(this.formulario.controls).forEach( control =>{
        control.markAsTouched();
      });
      return;
    }
  }

}
