import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { DomingoComponent } from './domingo/domingo.component';
import { SegundaComponent } from './segunda/segunda.component';
import { TercaComponent } from './terca/terca.component';
import { QuartaComponent } from './quarta/quarta.component';
import { QuintaComponent } from './quinta/quinta.component';
import { SextaComponent } from './sexta/sexta.component';
import { SabadoComponent } from './sabado/sabado.component';


const routes: Routes = [
  {path: 'domingo', component: DomingoComponent},
  {path: 'segunda', component: SegundaComponent},
  {path: 'terca', component: TercaComponent},
  {path: 'quarta', component: QuartaComponent},
  {path: 'quinta', component: QuintaComponent},
  {path: 'sexta', component: SextaComponent},
  {path: 'sabado', component: SabadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
