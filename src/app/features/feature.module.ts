import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery/components/gallery.component';
import { HeaderComponent } from './header/components/header.component';
import { SideMenuComponent } from './side-menu/components/side-menu.component';

@NgModule({
  imports: [HeaderComponent, SideMenuComponent, GalleryComponent],
  exports: [HeaderComponent, SideMenuComponent, GalleryComponent],
})
export class FeatureModule {}
