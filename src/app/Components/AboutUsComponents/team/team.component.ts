import { Component, OnInit } from '@angular/core'
import { teamData } from './../../../shared/APIData/AboutUsData'
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  teamData: any = teamData
  constructor() {}

  ngOnInit(): void {}
}
