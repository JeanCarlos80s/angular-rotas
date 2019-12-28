import { Component, OnInit } from '@angular/core';
import { EletronicService } from 'src/app/services/eletronic.service';
import { Observable } from 'rxjs';
import { Eletronic } from 'src/app/models/eletronic';

@Component({
  selector: 'app-eletronic-list',
  templateUrl: './eletronic-list.component.html',
  styleUrls: ['./eletronic-list.component.css']
})
export class EletronicListComponent implements OnInit {

  eletronics$: Observable<Eletronic[]>;

  constructor(
    private eletronicService: EletronicService,
  ) { }

  ngOnInit() {
    this.eletronics$ = this.eletronicService.eletronics$;
    console.log(this.eletronics$)
  }

}
