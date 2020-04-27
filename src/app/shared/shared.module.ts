import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';




@NgModule({
  declarations: [ModalComponent, FooterComponent, HeaderComponent,HeaderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ModalComponent,FooterComponent,HeaderComponent
  ]
})
export class SharedModule { }
