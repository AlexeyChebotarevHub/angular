import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminfrontComponent } from './adminfront/adminfront.component';

const routes: Routes = [
    { path: "admin", component: AdminfrontComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
