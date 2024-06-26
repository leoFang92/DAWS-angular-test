import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  message: any;

  constructor(private alertService:AlertService) { }

  ngOnInit() {
    this.subscription = this.alertService.getMessage().subscribe(message=>{
      this.message = message;
      // setTimeout(function(){;console.log(this.message)},3000);
    });
  }
  clear(){
    this.message = "";
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

