import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'livre',
        loadChildren: () => import('./livre/livre.module').then(m => m.BibliothequeLivreModule),
      },
      {
        path: 'utilisateur',
        loadChildren: () => import('./utilisateur/utilisateur.module').then(m => m.BibliothequeUtilisateurModule),
      },
      {
        path: 'auteur',
        loadChildren: () => import('./auteur/auteur.module').then(m => m.BibliothequeAuteurModule),
      },
      {
        path: 'emplacement',
        loadChildren: () => import('./emplacement/emplacement.module').then(m => m.BibliothequeEmplacementModule),
      },
      {
        path: 'theme',
        loadChildren: () => import('./theme/theme.module').then(m => m.BibliothequeThemeModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class BibliothequeEntityModule {}
