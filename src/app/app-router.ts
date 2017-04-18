import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user', loadChildren: 'app/user/user.module' }
  //  { path: 'user', loadChildren: 'user/user.module#UserComponent' }
];

export const app_rout: ModuleWithProviders = RouterModule.forRoot(routes);