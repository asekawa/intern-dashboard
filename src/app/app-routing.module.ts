import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternListComponent } from './intern-list/intern-list.component';
import { StructureComponent } from './structure/structure.component';



const routes: Routes = [
    {path:'',component:StructureComponent},
  {path:'intern-list',component:InternListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

