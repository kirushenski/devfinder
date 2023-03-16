import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    /* HSL */
    --hsl-primary: 212 100% 50%;
    --hsl-white: 0 0% 100%;
    --hsl-darkest-blue: 220 40% 13%;
    --hsl-dark-blue: 222 41% 20%;
    --hsl-error: 0 91% 62%;

    /* Colors */
    --color-primary: hsl(var(--hsl-primary));
    --color-white: hsl(var(--hsl-white));
    --color-darkest-blue: hsl(var(--hsl-darkest-blue));
    --color-dark-blue: hsl(var(--hsl-dark-blue));
    --color-error: hsl(var(--hsl-error));

    /* Grid */
    --spacing-base: 8px;
    --spacing-1: calc(var(--spacing-base) * 1);
    --spacing-2: calc(var(--spacing-base) * 2);
    --spacing-3: calc(var(--spacing-base) * 3);
    --spacing-4: calc(var(--spacing-base) * 4);
    --spacing-5: calc(var(--spacing-base) * 5);
    --spacing-6: calc(var(--spacing-base) * 6);
    --spacing-7: calc(var(--spacing-base) * 7);
    --spacing-8: calc(var(--spacing-base) * 8);
    --spacing-9: calc(var(--spacing-base) * 9);
    --spacing-10: calc(var(--spacing-base) * 10);

    /* Animation */
    --duration: 300ms;

    /* Normalize */
    --body-color: var(--color-darkest-blue);
    --body-background: var(--color-white);
    --link-underline-width: 2px;
    --focus-ring-width: 3px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background: none;
    overflow-wrap: break-word;
  }

  html, body, #__next {
    height: 100%;
  }

  #__next {
    isolation: isolate;
  }

  html {
    scroll-behavior: smooth;

    @media (prefers-reduced-motion) {
      scroll-behavior: auto;
    }
  }

  body {
    --font-h1: 700 26px/38px var(--font-base);
    --font-h2: 700 22px/33px var(--font-base);
    --font-h3: 400 16px/24px var(--font-base);
    --font-h4: 400 13px/20px var(--font-base);
    --font-body: 400 15px/25px var(--font-base);

    font: var(--font-body);
    color: var(--body-color);
    background: var(--body-background);
    -webkit-font-smoothing: antialiased;
  }

  input, textarea, select {
    border-radius: 0;
    color: var(--body-background);
    background: var(--body-color);
  }

  button {
    cursor: pointer;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  svg {
    fill: currentColor;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    box-shadow: inset 0 calc(-1 * var(--link-underline-width)) 0 0 currentColor;
    padding-bottom: var(--link-underline-width);
  }

  :disabled {
    cursor: not-allowed;
  }

  :focus {
    outline: var(--focus-ring-width) solid var(--color-white);
    outline-offset: var(--focus-ring-width);
  }

  .js-focus-visible :focus:not(.focus-visible), input:focus, textarea:focus {
    outline: none;
  }
`

export default GlobalStyle
