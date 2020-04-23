import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {
  
  @Input() user: User;
  @Input() modeDetail: Boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
