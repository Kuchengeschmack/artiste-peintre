import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CoreModule } from 'core/core-module';

@Component({
  selector: 'art-intro',
  imports: [CoreModule],
  template: `
    <article class="article">
      <h1>Présentation</h1>
      <iframe
        [src]="trustedUrl"
        width="500"
        height="673"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
      ></iframe>
    </article>
  `,
  styles: `
    .article {
      text-align: center;
      padding: 3rem;
    }

    h1 {
      text-align: center;
      font-weight: 700;
    }
  `,
})
export class Intro {
  private _sanitizer = inject(DomSanitizer);
  protected trustedUrl;

  constructor () {
    this.trustedUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthierry.reale%2Fposts%2Fpfbid0Qi6Jt6cTp3Ujcz4UttvcpFyyXP12BJDLvJybSPri2vjexePEVtvg1KtmC3YukCFCl&show_text=true&width=500',
    );
  }
}
