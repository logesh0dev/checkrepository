import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngsetuping';

  constructor(private route: Router) { }

  routeto() {
    this.route.navigate(['check/first'])
  }

  routeto1() {
    this.route.navigate(['check/employee'])
  }

  changesiebar() {
    document.getElementById("side").style.width = document.getElementById("side").style.width == "0px" ? "12%" : "0px";
    document.getElementById("wholecontent").style.marginLeft = document.getElementById("wholecontent").style.marginLeft == "0px" ? "12%" : "0px";
    document.getElementById("wholecontent").style.width = document.getElementById("wholecontent").style.width == "100%" ? "88%" : "100%";


    console.log(document.getElementById("side").style.width, document.getElementById("wholecontent").style.marginLeft, document.getElementById("wholecontent").style.width)
  }


  responsivechange() {
    // var x = document.getElementById("navcontent1");
    // console.log(x.style)

    // document.getElementById("navcontent1").style.display == "none"? document.getElementById("navcontent1").style.display = "block" : document.getElementById("navcontent1").style.display = "none"
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }

  }

}
