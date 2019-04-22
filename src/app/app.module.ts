import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnimeService } from './anime/anime.service';
import { animeReducer } from './anime/anime.reducer';
// import { AnimeEffects } from './anime/anime.effects';
import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
import { TwitterTimelineComponent } from './components/twitter-timeline/twitter-timeline.component';

@NgModule({
  declarations: [AppComponent, TwitterTimelineComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ anime: animeReducer }),
    // EffectsModule.forRoot([AnimeEffects]),
  ],
  providers: [AnimeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
