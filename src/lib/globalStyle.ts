import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --color-white: hsl(0 0% 100%);
    --color-primary: hsl(212 100% 50%);
    --color-error: hsl(0 91% 62%);

    --color-text: var(--color-white);
    --color-bg: hsl(220 40% 13%);
    --color-alt-bg: hsl(222 41% 20%);
    --color-main: var(--color-white);

    /* Grid */
    --spacing-base: 4px;
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
    --spacing-11: calc(var(--spacing-base) * 11);
    --spacing-12: calc(var(--spacing-base) * 12);
    --spacing-13: calc(var(--spacing-base) * 13);
    --spacing-14: calc(var(--spacing-base) * 14);
    --spacing-15: calc(var(--spacing-base) * 15);
    --spacing-16: calc(var(--spacing-base) * 16);
    --spacing-17: calc(var(--spacing-base) * 17);
    --spacing-18: calc(var(--spacing-base) * 18);
    --spacing-19: calc(var(--spacing-base) * 19);
    --spacing-20: calc(var(--spacing-base) * 20);

    /* Shadows */
    --shadow: none;

    /* Animation */
    --duration: 300ms;

    /* Normalize */
    --body-color: var(--color-text);
    --body-background: var(--color-bg);
    --link-underline-width: 2px;
    --focus-ring-width: 3px;
    --focus-ring-color: var(--color-primary);

    @media (prefers-color-scheme: light) {
      --color-text: hsl(217 35% 45%);
      --color-bg: hsl(227 100% 98%);
      --color-alt-bg: var(--color-white);
      --color-main: hsl(217 21% 21%);

      --shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
    }
  }

  ::selection {
    background-color: var(--color-primary);
    color: var(--color-white);
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
    block-size: 100%;
  }

  #__next {
    isolation: isolate;
    display: grid;
    place-items: center;
    min-inline-size: 375px;
    padding: var(--spacing-4);
  }

  html {
    scroll-behavior: smooth;

    @media (prefers-reduced-motion) {
      scroll-behavior: auto;
    }
  }

  /* TODO rems with multipliers */

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
    max-inline-size: 100%;
  }

  svg {
    fill: currentColor;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  :disabled {
    cursor: not-allowed;
  }

  :focus {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-width);
  }

  .js-focus-visible :focus:not(.focus-visible), input:focus, textarea:focus {
    outline: none;
  }

  input[type='search']::-webkit-search-cancel-button {
    display: none;
  }
`

export default GlobalStyle
