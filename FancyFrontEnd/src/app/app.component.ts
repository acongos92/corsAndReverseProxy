import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FancyFrontEnd';

  greeting = "Oh my we failed to load the greeting";

  departure = "It would seem we couldnt load the departure message :(";

  loading = true;

  req1 = false;

  req2 = false; 

  constructor(private client:HttpClient){}

  public ngOnInit(): void {
    this.client.get<Hello>(environment.baseUrl + "/api/greeting/hello").pipe(
      finalize(() => {
        this.req1 = true;
        this.loading = !(this.req1 && this.req2);
      })
    )
    .subscribe({
      next: (response) => {
        this.greeting = response.Hello;
      },
      error: error => {
        console.log("Oh dear our request failed");
        console.log(error);
      }
    }
    );
    this.client.get<Goodbye>(environment.baseUrl + "/api/leaving/goodbye").pipe(
      finalize(() => {
        this.req2 = true;
        this.loading = !(this.req1 && this.req2);
      })
    )
    .subscribe({
      next: (response) => {
        this.departure = response.Goodbye;
      },
      error: error => {
        console.log("Oh dear another error");
        console.log(error);
      }
    })
  }
}

interface Hello {
  Hello: string;
}

interface Goodbye {
  Goodbye: string
}