import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

//Angular Specific
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'; 
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatListModule } from '@angular/material/list';

//Component Specific
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,MatInputModule,MatTableModule,MatSelectModule,MatIconModule,MatProgressBarModule,
    MatFormFieldModule,MatCardModule,MatDatepickerModule,MatNativeDateModule,NgbModule,MatListModule,
    SimpleSmoothScrollModule,FontAwesomeModule,OverlayscrollbarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
