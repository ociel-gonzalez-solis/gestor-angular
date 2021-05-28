import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

const appRotes: Routes = [
  { path: '', component: AboutmeComponent },
  { path: 'about-me', component: AboutmeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'create-project', component: CreateComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'proyecto/:id', component: DetailComponent },
  { path: 'editar-proyecto/:id', component: EditComponent },
  { path: '**', component: ErrorComponent }
];

export const appRoutingPoviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRotes);
