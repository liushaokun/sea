import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: 'detail/:id',
      component: HeroDetailComponent
    },{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
      {
        path: 'heroes',
        component: HeroesComponent
      },{
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
  ],
  declarations: [ DashboardComponent,
    AppComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})


export class AppModule {

}


