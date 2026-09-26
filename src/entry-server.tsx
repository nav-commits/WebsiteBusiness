import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

export const render = (url: string) =>
  new Promise<string>((resolve, reject) => {
    const helmetContext = {};
    let didError = false;

    const stream = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          const output = new PassThrough();
          let html = "";

          output.setEncoding("utf8");
          output.on("data", (chunk) => {
            html += chunk;
          });
          output.on("end", () => {
            clearTimeout(abortTimer);
            if (didError) {
              reject(new Error(`Server rendering failed for ${url}`));
              return;
            }
            resolve(html);
          });

          stream.pipe(output);
        },
        onShellError(error) {
          clearTimeout(abortTimer);
          reject(error);
        },
        onError(error) {
          didError = true;
          console.error(error);
        },
      }
    );

    const abortTimer = setTimeout(() => stream.abort(), 15000);
  });
