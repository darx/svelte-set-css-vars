# svelte-set-css-vars

## Install

```bash
npm install svelte-set-css-vars
```

## Usage

```html
<script>
  import setVars from "svelte-set-css-vars";

  let variables = {
    global: {
      font: {
        size: "100%",
        colour: "#333333",
        name: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`
      },
      headings: [
        {
          font: {
            size: "1.5em",
            name: "inherit",
          },
        },
        {
          font: {
            size: "1.5em",
            name: "inherit",
          },
        },
        {
          font: {
            size: "1.17em",
            name: "inherit",
          },
        },
        {
          font: {
            size: "1em",
            name: "inherit",
          },
        },
        {
          font: {
            size: "0.83em",
            name: "inherit",
          },
        },
        {
          font: {
            size: "0.67em",
            name: "inherit",
          },
        },
      ],
    },
    button: {
      font: {
        name: "inherit",
        size: "16px",
        colour: "#ffffff",
        hover: {
          colour: "#ffffff",
        },
      },
      background: {
        value: "#c9269e",
        hover: {
          value: "#b1208a",
        },
      },
      border: {
        colour: "#c9269e",
        width: "3px",
        style: "solid",
        radius: "8px",
        hover: {
          colour: "#c9269e",
          width: "3px",
          style: "solid",
          radius: "8px",
        },
      },
      outline: {
        colour: "inherit",
        style: "inherit",
        width: "inherit",
      },
    },
    link: {
      font: {
        name: "inherit",
        size: "inherit",
        colour: "#c9269e",
        hover: {
          colour: "#c9269e",
        },
      },
      background: {
        value: "transparent",
        hover: {
          value: "transparent",
        },
      },
      text: {
        decoration: "underline",
        hover: {
          decoration: "none",
        },
      },
    }
  };
</script>

<svelte:body use:setVars={variables} />

<!-- OR LOCALISE CSS VARIABLES -->

<div use:setVars={variables}></div>

<style>
  div {
    font-family: var(--global-font-name);
  }
</style>
```