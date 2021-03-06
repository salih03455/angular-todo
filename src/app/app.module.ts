import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ThemeSettingsComponent } from './theme-settings/theme-settings.component'

import { AddMovieModule } from './pages/add-movie/add.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ListMovieModule } from './pages/list-movie/list-movie.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Reducers: */
import { movieReducer } from './store/reducers/movie.reducer';
import { themeReducer } from './store/reducers/theme.reducer';

/* Material Modules: */
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    ThemeSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddMovieModule,
    ListMovieModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ movieStore: movieReducer, themeStore: themeReducer }),
    StoreDevtoolsModule.instrument() // chrome dev tool için
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
