import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { UserComponent } from "./user.component";

const lazyRoutes: Routes = [
    { path: 'user', component:UserComponent },
    { path: '', redirectTo: 'user', pathMatch: 'full'},
];

export const lazyRouting: ModuleWithProviders = RouterModule.forChild(lazyRoutes);
