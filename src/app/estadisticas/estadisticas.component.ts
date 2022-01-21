import { Component, OnInit } from '@angular/core';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {


  areas:any = []

  single = []
  view_pie: [number, number] = [(innerWidth - (innerWidth/10)), (innerHeight/2)];
  view_bar: [number, number] = [(innerWidth - (innerWidth/5)), (innerHeight/2)];

  // pie chart
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'right';

  //bar chart
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Área';
  showYAxisLabel = true;
  yAxisLabel = 'Nota';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private http: MateriasService) {
    
    this.http.areas('https://crustal-calories.000webhostapp.com/webServices/unq/areas.php').subscribe(res => {

      this.areas = res['data']

    })

    this.http.org('https://crustal-calories.000webhostapp.com/webServices/unq/org.php').subscribe(res => {

      this.single = res['data']
      
    })

  }

  ngOnInit(): void {
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  
}
