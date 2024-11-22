import { Component, Input } from '@angular/core';

import { Core } from 'core/index';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  template: `
    <div class="right-side">
      <div class="pill-group">
        @for (item of sideMenu; track item.title) {
          <a class="pill" [routerLink]="item.link" rel="noopener">
            <span>{{ item.title }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14"
              viewBox="0 -960 960 960"
              width="14"
              fill="currentColor">
              <path
                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
            </svg>
          </a>
        }
        <a class="pill" [href]="facebookUrl" target="_blank" rel="noopener">
          <span>Facebook</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="14"
            viewBox="0 -960 960 960"
            width="14"
            fill="currentColor">
            <path
              d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
          </svg>
        </a>
      </div>
    </div>
  `,
  styles: `
    @media screen and (max-width: 500px) {
      .pill-group {
        flex-direction: row;
        justify-content: center;
      }
    }

    @media screen and (min-width: 500px) {
      .pill-group {
        flex-direction: row;
      }
    }
    .right-side {
      height: 100%;
      display: flex;
      align-items: center;
    }

    .pill {
      display: flex;
      align-items: center;
      --pill-accent: var(--bright-blue);
      background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
      color: var(--pill-accent);
      padding-inline: 0.75rem;
      padding-block: 0.375rem;
      border-radius: 2.75rem;
      border: 0;
      transition: background 0.3s ease;
      font-family: var(--inter-font);
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.4rem;
      letter-spacing: -0.00875rem;
      text-decoration: none;

      &:hover {
        background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
      }
    }

    .pill-group {
      display: flex;
      align-items: start;
      flex-wrap: wrap;
      gap: 1.25rem;

      .pill:nth-child(6n + 1) {
        --pill-accent: var(--bright-blue);
      }

      .pill:nth-child(6n + 2) {
        --pill-accent: var(--french-violet);
      }
      .pill:nth-child(6n + 3),
      .pill:nth-child(6n + 4),
      .pill:nth-child(6n + 5) {
        --pill-accent: var(--hot-red);
      }

      svg {
        margin-inline-start: 0.25rem;
      }
    }
  `,
  imports: Core,
})
export class SideMenuComponent {
  @Input() sideMenu = [] as Header['menuItems'];
  readonly facebookUrl = 'https://www.facebook.com/mariececile.caron';
}
