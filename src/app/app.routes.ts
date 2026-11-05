import { Routes } from '@angular/router';

import { NotFound } from './error-routing/not-found/not-found';
import { UncaughtError } from './error-routing/error/uncaught-error';
import { ChildViewComponent } from './child-view/child-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'child-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtError },
  { path: 'child-view', component: ChildViewComponent, data: { text: 'Child-View' } },
  { path: '**', component: NotFound } // must always be last
];
