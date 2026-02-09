import { Routes } from '@angular/router';

import { Start } from './view/start/start'
import { Home } from './view/home/home'
import { LearnDay } from './view/learn-day/learn-day'
import { PageNotFound } from './view/page-not-found/page-not-found'
import { Info } from './view/info/info'

export const routes: Routes = [
    { path: 'start', component: Start },
    { path: 'home', component: Home },
    { path: 'learn-day/:day', component: LearnDay },
    { path: 'info', component: Info },

    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: '**', component: PageNotFound },
];
