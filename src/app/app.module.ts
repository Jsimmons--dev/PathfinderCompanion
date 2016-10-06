import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import appRoutes from "./app.routes";
import {GearComponent} from "./gear/gear.component";
import {SkillsComponent} from "./skills/skills.component";
import {AbilitiesComponent} from "./abilities/abilities.component";
import {StatsDisplayComponent} from "./statsDisplay/statsDisplay.component";
import {FeatsComponent} from "./feats/feats.component";
import {Configuration} from "./app.constants";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GearComponent,
    SkillsComponent,
    AbilitiesComponent,
    StatsDisplayComponent,
    FeatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  providers: [Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
