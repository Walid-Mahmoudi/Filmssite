import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MoviesComponent } from './movies/movies.component';
import { ContactComponent } from './contact/contact.component';
import { TvComponent } from './tv/tv.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { MovieditelsComponent } from './movieditels/movieditels.component';

const routes: Routes = [
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  { path: 'about', canActivate: [authGuard], component: AboutComponent },
  { path: 'gallery', canActivate: [authGuard], component: GalleryComponent },
  { path: 'movies', canActivate: [authGuard], component: MoviesComponent },
  { path: 'contact', canActivate: [authGuard], component: ContactComponent },
  { path: 'tv', canActivate: [authGuard], component: TvComponent },
  {
    path: 'moviedetals/:id',
    canActivate: [authGuard],
    component: MovieditelsComponent,
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
