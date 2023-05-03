import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          httpEquiv="x-ua-compatible"
          content="ie=edge"
          className="dark-theme"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Moraa Nyanchoka</title>
        <meta name="description" content="Moraa Nyanchoka" />
        <meta name="author" content="Moraa Nyanchoka" />
        <meta property="og:url" content="https://moraanyanchoka.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Moraa Nyanchoka" />
        <meta
          property="og:image"
          content="https://moraanyanchoka.com/assets/apple-touch-icon-1024x1024.png"
        />
        <meta
          property="og:description"
          content="Growth Marketing, Brand Specialist & Entrepreneur"
        />
        <meta property="og:site_name" content="Moraa Nyanchoka" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@annenyanchoka" />
        <meta name="twitter:creator" content="@annenyanchoka" />
        <meta name="twitter:url" content="https://moraanyanchoka.com" />
        <meta name="twitter:title" content="Moraa Nyanchoka" />
        <meta
          name="twitter:description"
          content="Growth Marketing, Brand Specialist & Entrepreneur"
        />
        <meta
          name="twitter:image"
          content="https://moraanyanchoka.com/assets/apple-touch-icon-1024x1024.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap"
          rel="stylesheet"
        />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
