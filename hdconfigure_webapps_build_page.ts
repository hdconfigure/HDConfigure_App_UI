//Copyright (C) 2026 by Theron Kauk and John Morris Beck <hd.configure.direct@gmail.com> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

// todo:
// sanitize inputs to these functions with regex
// security risk level - high

// generates a new html page
// meant to be wrapped around other functions
export const new_page = (license: string, title: string, style: string, body: string): string => {
    return `<!DOCTYPE html>
<!-- ${license} -->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="stylesheet" href="${style}">
</head>
<body>
${body}
</body>
</html>`;
};

// make a navbar for the page
export const top_bar = (menu_link: string, button_link: string, header_text: string, subheader_text: string): string => {
    return `
  <div class="top-bar">
    <a href="${menu_link}" class="menu-link" title="Open Menu">
      <img src="${button_link}" alt="Menu">
      <span class="menu-text">Menu</span>
    </a>
    <span class="top-bar-title">${header_text}</span>
    <span class="top-bar-subtitle">${subheader_text}</span>
  </div>`;
};

export const text = (text_value: string): string => {
    return `
    <div class="info-block">
      <p>
        ${text_value}
      </p>
    </div>`;
};

// add a license to the bottom of the page
export const bottom_license = (license: string): string => {
    return `
<div style="text-align: right; font-size: 11px; color: #888888; font-family: sans-serif;">
  ${license}
</div>`;
};

// make a subheader element for sections, images, or text with layered boxes
export const subheader = (header_text: string): string => {
    return `
    <div class="subheader-wrapper">
        <h2 class="subheader-title">${header_text}</h2>
    </div>`;
};

// make an image on the page
export const image = (image_path: string): string => {
    return `
    <div class="table-wrapper">
      <div class="image-cell-flush">
        <img src="${image_path}" alt="Flight Simulator">
      </div>
    </div>`;
};

// make a button on the page (takes text and url)
export const button = (link: string, text: string): string => {
    return `<a href="${link}" class="table-btn table-btn-slate">${text}</a>`;
};

const license_text = "Copyright (C) 2026 by Theron Kauk and John Morris Beck &lt;hd.configure.direct@gmail.com&gt; THE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.";

export const generate_html_page = (style: string, title: string, menu_link: string, header_text: string, subheader_text: string, body: string): string => {
    return new_page(
        license_text,
        title,
        style,
        top_bar(menu_link, "/assets/menu.png", header_text, subheader_text) + body + bottom_license(license_text)
    );
};
