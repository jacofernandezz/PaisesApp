import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{
    margin-right: 5px;
  }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ["africa", "europe","americas", "oceania","asia"];
  regionActiva: string = "";
  paises: Country[] = [];

  constructor( private paisService: PaisService){}

  getClaseButtonCss( region:string ): string{
    return (region===this.regionActiva) ? 'btn btn-dark':'btn btn-outline-dark';
  }

  activarRegion(region: string){

    if(region === this.regionActiva){return;}

    this.regionActiva = region;
    this.paisService.buscarRegion( region ).subscribe( (paises) =>{

      this.paises = paises;
    });
  }

}
