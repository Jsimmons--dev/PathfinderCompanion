import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {GearComponent} from "./gear/gear.component";
import {StatsDisplayComponent} from "./statsDisplay/statsDisplay.component";

//definition of routes for the router
const routes = [
    {path:'', component:HomeComponent},
    {path:'gear', component:GearComponent},
    {path:'statsDisplay', component:StatsDisplayComponent}
]

export default RouterModule.forRoot(routes);
