import { PokemonDetailComponent } from './pokemon/pokemon-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { AppComponent } from './app.component';
import { PokedexService } from './services/pokedex.service';
import { PokemonListComponent } from './pokemon/pokemon-list.component';
import { HeaderComponent } from './header/header.component';
import { SoundService } from './services/sound.service';
import { CaptalizePipe } from './pipes/captalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    HeaderComponent,
    CaptalizePipe
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [
    PokedexService,
    SoundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
