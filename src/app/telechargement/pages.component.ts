import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }
fileName ="liste_absence.xlsx"
  ngOnInit(): void {
  }
 data:any=[
          {
            'matricule':'M137456807',
            'nom':'abde',
            'Prenom':'gher',
            "nombreAb":4
          },
          {
            'matricule':'M137456807',
            'nom':'abde',
            'Prenom':'gher',
            "nombreAb":4
          },
          {
            'matricule':'M137456807',
            'nom':'abde',
            'Prenom':'gher',
            "nombreAb":4
          },
          {
            'matricule':'M137456807',
            'nom':'abde',
            'Prenom':'gher',
            "nombreAb":4
          },
          {
            'matricule':'M137456807',
            'nom':'abde',
            'Prenom':'gher',
            "nombreAb":4
          },
          {
            'matricule':'M137456807',
            'nom':'abde',
            'Prenom':'gher',
            "nombreAb":4
          },
          {
            'matricule':'M137456807',
            'nom':'abde',
            'Prenom':'gher',
            "nombreAb":4
          },
          {
            'matricule':'M137456807',
            'nom':'abde',
            'Prenom':'gher',
            "nombreAb":4
          },
          {
            'matricule':'M137456807',
            'nom':'abde',
            'Prenom':'gher',
            "nombreAb":4
          },
          {
            'matricule':'M137456807',
            'nom':'abde',
            'Prenom':'gher',
            "nombreAb":4
          },
          {
            'matricule':'M137456807',
            'nom':'abde',
            'Prenom':'gher',
            "nombreAb":4
          },
          {
            'matricule':'M137456807',
            'nom':'abde',
            'Prenom':'gher',
            "nombreAb":4
          },
          {
            'matricule':'M137456807',
            'nom':'abde',
            'Prenom':'gher',
            "nombreAb":4
          },
          {
            'matricule':'M137456807',
            'nom':'abde',
            'Prenom':'gher',
            "nombreAb":4
          },

  ]

    exportexcel(): void
  {

    
    let element = document.getElementById('data-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 

    XLSX.writeFile(wb, this.fileName);
 
  }
}
