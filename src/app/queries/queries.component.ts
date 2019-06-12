import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit, AfterViewInit {
  @ViewChild('hello1', { static: true }) hello1: ElementRef;
  @ViewChild('hello2', { static: true }) hello2: ElementRef;
  @ViewChild('hello3', { static: false }) hello3: ElementRef;

  ngOnInit() {
    console.log('#ngOnInit');
    console.log('hello1', this.hello1);
    console.log('hello2', this.hello2);
    console.log('hello3', this.hello3);
  }

  ngAfterViewInit() {
    console.log('#ngAfterViewInit');
    console.log('hello1', this.hello1);
    console.log('hello2', this.hello2);
    console.log('hello3', this.hello3);
  }
}
