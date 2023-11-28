import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/dashboard/homepage/homepage.component';
import { NotFoundComponent } from './pages/error-pages/not-found/not-found.component';
import { ExplorerComponent } from './pages/sales/explorer/explorer.component';

const routes: Routes = [
  { path: 'dashboard', component: HomepageComponent },
  { path: 'sales', component: ExplorerComponent },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
