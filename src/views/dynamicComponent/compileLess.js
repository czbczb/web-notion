import less from "less";
import Sass from "sass.js"; // 用于编译 SCSS

export async function compileLess(code) {
  // 动态判断并编译样式
  const styleMatch = code.match(
    /<style.*?lang=["'](less|scss)["'].*?>([\s\S]*?)<\/style>/
  );
  if (!styleMatch) {
    return code;
  }
  const lang = styleMatch[1];
  const styleContent = styleMatch[2];

  if (lang === "less") {
    // 编译 LESS
    less.render(styleContent, (e, output) => {
      if (e) {
        console.error("LESS 编译错误:", e);
      } else {
        code = code.replace(styleMatch[0], `<style>${output.css}</style>`);
      }
    });
  } else if (lang === "scss") {
    // 编译 SCSS
    Sass.compile(styleContent, (result) => {
      if (result.status === 0) {
        code = code.replace(styleMatch[0], `<style>${result.text}</style>`);
      } else {
        console.error("SCSS 编译错误:", result.message);
      }
    });
  }
  return code;
}
