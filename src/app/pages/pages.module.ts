import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { Pages } from './pages.component';
import {BusyModule, BusyConfig} from 'angular2-busy';


@NgModule({
  imports: [CommonModule, NgaModule, routing, BusyModule],
  declarations: [Pages]
})
export class PagesModule {
}
