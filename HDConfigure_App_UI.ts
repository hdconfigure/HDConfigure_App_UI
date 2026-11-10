//Copyright (C) 2026 by Theron Kauk and John Morris Beck <hd.configure.direct@gmail.com> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

//todo:
//sanitize inputs to these functions with regex
//security risk level - high

//generates a new html page
//meant to be wrapped around other functions
export const new_page=(license: any, title: any, style: any, body: any) => {
    return `<!DOCTYPE html>
  <!--${license}-->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="stylesheet" href="${style}">
</head>
<body>${body}
</body>
</html>`;
}

//make a navbar for the page
export const top_bar=(link: any) => {return `
  <div class="top-bar">
    <a href="${link}" class="menu-link" title="Open Menu">
      <img src="/assets/menu.png" alt="Menu">
      <span class="menu-text">Menu</span>
    </a>
  `;
                    }

//make a header for the page
export const header=(header_text: any, header_subtext: any) => {return `
  <div class="card-container">
    <div class="header-banner">
      <h1>${header_text}</h1>
      <p class="description">${header_subtext}</p>
    </div>`;
                                     }

export const text_element=(text_value: any) => {return `
    <div class="info-block">
      <p>
        ${text_value}
         </p>
    `;
           }

//add a license to the bottom of the page
export const bottom_license=(license: any) => {return `
<div style="text-align: right; font-size: 11px; color: #888888; font-family: sans-serif;">
 ${license}
</div>`;
                              }


//make a subheader element for sections, images, or text with layered boxes
export const subheader = (header_text: any) => {
  return `
    <div class="subheader-wrapper">
      <div class="subheader-inner">
        <h2 class="subheader-title">${header_text}</h2>
      </div>
    `;
}

//make an image on the page
export const image=(image_path: any) => {return `
    <div class="table-wrapper">
      <div class="image-cell-flush">
        <img src="${image_path}" alt="Flight Simulator">
      </div>
    `;
            }

// make a button on the page (takes text and url)
export const button = (link: any, text: any) => {
  return `<a href="${link}" class="table-btn table-btn-slate">${text}</a>`;
}

export const flightdeckexperiencepage=(menu_link: any, header_text: any, header_subtext: any, body: any) => {return new_page(
    "Copyright (C) 2026 by Theron Kauk and John Morris Beck <hd.configure.direct@gmail.com> THE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.",
    "FlightDeckExperiences",
    "/style.css",
    top_bar(menu_link) + header(header_text,header_subtext) + body + bottom_license("copyright (c) 2026 Theron Kauk and John Morris Beck all rights reserved"));

																		    
									  }

export const generate_html_page=(style: any, title: any, menu_link: any, header_text: any, header_subtext: any, body: any) => {return new_page(
    "Copyright (C) 2026 by Theron Kauk and John Morris Beck <hd.configure.direct@gmail.com> THE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.",
    title,
    style,
    top_bar(menu_link) + header(header_text,header_subtext) + body + bottom_license("Copyright (C) 2026 by Theron Kauk and John Morris Beck <hd.configure.direct@gmail.com> THE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE."));
