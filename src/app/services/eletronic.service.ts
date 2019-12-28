import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Eletronic } from '../models/eletronic';
import { EletronicsModule } from '../eletronics/eletronics.module';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EletronicService {

  private eletronicSubject$: BehaviorSubject<Eletronic[]> = new BehaviorSubject<Eletronic[]>([]);
  public eletronics$ = this.eletronicSubject$.asObservable();

  
  constructor() {
    timer(1000).subscribe(() => {
      this.eletronicSubject$.next([
        { name: "Headphone", brand: "Bose", price: '200', description: "Noise Cancelling" },
        { name: "Portable HD", brand: "Sansung", price: '100', description: "2T Hard Disk" },
        { name: "Monitor 23\"", brand: "AOC", price: '200', description: "HDMI/VGA" },
        { name: "Processador i7-8700K", brand: "Intel", price: '400', description: "12 MB Cache" },
        { name: "Mouse woreless", brand: "Logitech", price: '50', description: "For Gamers" },
      ]);
    })
  }
  
  get(i: number): Observable<Eletronic> {
    return this.eletronics$.pipe(
      map(eletronics => (i >= 0 && i < eletronics.length) ? eletronics[i]: null),
      delay(1000)
      )
    }
  }
  