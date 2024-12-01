import { Component } from '@angular/core';
import { version } from '../../../package.json';

@Component({
  selector: 'art-footer',
  template: `
    <div class="container">
      <div class="version">v{{ version }}</div>
      <address class="address">mc-caron.com</address>
      <a href="https://www.flaticon.com/fr/icones-gratuites/chats" title="Icônes de chats"
        >Favicon créée par Maxim Kulikov</a
      >
      <div class="social-links">
        <a
          href="https://github.com/Kuchengeschmack/artiste-peintre"
          aria-label="Github"
          target="_blank"
          rel="noopener"
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="Github"
          >
            <path
              d="M12.3047 0C5.50634 0 0 5.50942 0 12.3047C0 17.7423 3.52529 22.3535 8.41332 23.9787C9.02856 24.0946 9.25414 23.7142 9.25414 23.3871C9.25414 23.0949 9.24389 22.3207 9.23876 21.2953C5.81601 22.0377 5.09414 19.6444 5.09414 19.6444C4.53427 18.2243 3.72524 17.8449 3.72524 17.8449C2.61064 17.082 3.81137 17.0973 3.81137 17.0973C5.04697 17.1835 5.69604 18.3647 5.69604 18.3647C6.79321 20.2463 8.57636 19.7029 9.27978 19.3881C9.39052 18.5924 9.70736 18.0499 10.0591 17.7423C7.32641 17.4347 4.45429 16.3765 4.45429 11.6618C4.45429 10.3185 4.9311 9.22133 5.72065 8.36C5.58222 8.04931 5.16694 6.79833 5.82831 5.10337C5.82831 5.10337 6.85883 4.77319 9.2121 6.36459C10.1965 6.09082 11.2424 5.95546 12.2883 5.94931C13.3342 5.95546 14.3801 6.09082 15.3644 6.36459C17.7023 4.77319 18.7328 5.10337 18.7328 5.10337C19.3942 6.79833 18.9789 8.04931 18.8559 8.36C19.6403 9.22133 20.1171 10.3185 20.1171 11.6618C20.1171 16.3888 17.2409 17.4296 14.5031 17.7321C14.9338 18.1012 15.3337 18.8559 15.3337 20.0084C15.3337 21.6552 15.3183 22.978 15.3183 23.3779C15.3183 23.7009 15.5336 24.0854 16.1642 23.9623C21.0871 22.3484 24.6094 17.7341 24.6094 12.3047C24.6094 5.50942 19.0999 0 12.3047 0Z"
            />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/mariececile.caron"
          aria-label="Facebook"
          target="_blank"
          rel="noopener"
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="Facebook"
          >
            <path
              d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
            />
          </svg>
        </a>
      </div>
    </div>
  `,
  styles: `
    .container {
      display: grid;
      width: 100%;
      height: 40px;
      background-color: white;
      text-align: center;
      align-items: center;
      justify-items: center;
    }

    .address,
    a {
      width: fit-content;
      align-content: center;
    }

    .social-links {
      display: flex;
      align-content: center;
      width: fit-content;
      height: 40px;
      position: fixed;
      right: 10px;
      bottom: 0px;
      z-index: 1;
      gap: 5px;

      path {
        transition: fill 0.3s ease;
        fill: var(--gray-400);
      }

      a:hover svg path {
        fill: var(--gray-900);
      }
    }

    .version {
      align-content: center;
      width: fit-content;
      height: 40px;
      position: fixed;
      left: 10px;
      bottom: 0px;
      z-index: 1;
    }
  `,
})
export class Footer {
  protected version = version;
}
