import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { PostCreatePage } from './posts/post-create/post-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostCreatePage

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatCardModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
