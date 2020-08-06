import { Component,OnInit,HostListener,ViewChild, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-ngx';
import OverlayScrollbars from 'overlayscrollbars';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private smooth: SimpleSmoothScrollService) { }

  ngOnInit() {
    this.smooth.smoothScrollToAnchor();
  }
 //Navbar hidden/display @ certain height of website
 @HostListener("window:scroll", ["$event"])
 onWindowScroll() {
  var cPos = window.pageYOffset;
  if(cPos > 300){
   document.getElementById("mainHeader").style.backgroundColor  = "white";
   document.getElementById("mainHeader").style["boxShadow"]= "0px 2px 5px royalblue"; 
  }
  if(cPos < 300){
   document.getElementById("mainHeader").style.backgroundColor  = "transparent";
   document.getElementById("mainHeader").style["boxShadow"]= "none"; 
  }
 }


newTab(url: any){
  window.open(url);
}

//  customClassName: string = 'custom-class-name-test';
//  componentClass: string = 'OverlayScrollbarsComponent';
//  loremIpsumLong: string = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
//  loremIpsumMedium: string = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.';
//  loremIpsumShort: string = 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.';
//  loremList: Array<string> = [];
//  hasCustomClassName: boolean = false;
//  componentContent: string = 'Lorem Ipsum';
//  osComponentOptions: OverlayScrollbars.Options = {
//   className       : "os-theme-dark",
// 	resize          : "both",
// 	sizeAutoCapable : true,
// 	paddingAbsolute : true,
// 	scrollbars : {
// 		clickScrolling : true
// 	}
// };

//  @ViewChild('osComponentRef1', { read: OverlayScrollbarsComponent })
//     osComponentRef1: OverlayScrollbarsComponent;

//     ngAfterViewInit() {
//       console.log(`${this.componentClass} (1)`);
//       console.log(this.osComponentRef1)

//   }
}
