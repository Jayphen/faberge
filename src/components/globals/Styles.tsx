import React from "react";
import "normalize.css";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          padding: 1rem;
          background: #f4f6fb;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
      `}
    />
  );
}
