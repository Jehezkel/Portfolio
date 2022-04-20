import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isExpanded: boolean = false;
  @Input() appTitle: string = '';
  constructor() {}

  ngOnInit(): void {}
}
