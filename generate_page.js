//Copyright (C) 2026 by Theron Kauk and John Morris Beck <hdconfigure.direct@gmail.com> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

//todo:
//sanitize inputs to these functions with regex
//security risk level - high


//generates a new html page
//meant to be wrapped around other functions
var new_page=(license,title,style,body)=>{
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
var top_bar=(link)=>{return `
  <div class="top-bar">
    <a href="${link}" class="menu-link" title="Open Menu">
      <img src="/assets/menu.png" alt="Menu">
      <span class="menu-text">Menu</span>
    </a>
  </div>`;
                    }

//make a header for the page
var header=(header_text,header_subtext)=>{return `
  <div class="card-container">
    <div class="header-banner">
      <h1>${header_text}</h1>
      <p class="description">${header_subtext}</p>
    </div>`;
                                         }

//make an image on the page
var image=(image_path)=>{return `
    <div class="table-wrapper">
      <table>
        <tbody>
          <tr>
            <td class="action-cell">
              <img src="${image_path}" alt="Flight Simulator">
            </td>
          </tr>
        </tbody>
      </table>
    </div>`;
                                     }


var text_element=(text_value)=>{return `
    <div class="info-block">
      <p>
        ${text_value}
         </p>
    </div>`;
			       }

//add a license to the bottom of the page
var bottom_license=(license)=>{return `
<div style="text-align: right; font-size: 11px; color: #888888; font-family: sans-serif;">
 ${license}
</div>`;
                              }


//create a button on the page
var button=(link,text)=>{ return `
    <div class="table-wrapper">
      <table>
        <tbody>
          <tr>
            <td class="action-cell">
              <a href="${link}" class="table-btn table-btn-slate">${text}</a>
            </td>
          </tr>
  </tbody>
  </table>
  </div>`;
			}

//make a subheader element for sections, images, or text with layered boxes
var subheader = (header_text) => {
  return `
    <div class="subheader-wrapper">
      <div class="subheader-inner">
        <h2 class="subheader-title">${header_text}</h2>
      </div>
    </div>`;
}

//make an image on the page
var image=(image_path)=>{return `
    <div class="table-wrapper">
      <div class="image-cell-flush">
        <img src="${image_path}" alt="Flight Simulator">
      </div>
    </div>`;
			}

// make a button on the page
var button = (text, url, style = 'slate') => {
  return `<a href="${url}" class="table-btn table-btn-${style}">${text}</a>`;
}

// make a button on the page (takes text and url)
var button = (link,text) => {
  return `<a href="${link}" class="table-btn table-btn-slate">${text}</a>`;
}
//prototypes updated 8/18/2026
//var new_page=(license,title,style,body)=>{
//    var top_bar=(link)=>{return `
//  var header=(header_text,header_subtext)=>{return `
//			 var image=(image_header,image_path)=>{return `
//      var text_element=(text_value)=>{return `
//							       var bottom_license=(license)=>{return `
//var button=(link,text)=>{ return `


var flightdeckexperiencepage=(menu_link,header_text,header_subtext,body)=>{return new_page(
    "copyright (c) 2026 Theron Kauk and John Morris Beck - hd.configure.direct@gmail.com - all rights reserved",
    "FlightDeckExperiences",
    "/style.css",
    top_bar(menu_link) + header(header_text,header_subtext) + body + bottom_license("copyright (c) 2026 Theron Kauk and John Morris Beck all rights reserved"));

																		   
									  }

var pagebuilder_generate_default_ui_page=(style,title,menu_link,header_text,header_subtext,body)=>{return new_page(
    "THE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.",
    title,
    style,
    top_bar(menu_link) + header(header_text,header_subtext) + body + bottom_license("Copyright (C) 2026 by Theron Kauk and John Morris Beck <hdconfigure.direct@gmail.com> THE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE."));

