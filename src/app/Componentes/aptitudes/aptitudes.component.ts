import { Component, OnInit } from '@angular/core';
import { LocalStorageServiceService } from 'src/app/service/local-storage-service.service';


@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  constructor(private sLocalStorage: LocalStorageServiceService) { }

  ngOnInit(): void {
  }

 

}
