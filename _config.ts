import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import sass from "lume/plugins/sass.ts";
import date from "lume/plugins/date.ts";
import { ja } from "npm:date-fns/locale/ja";
import minifyHTML from "lume/plugins/minify_html.ts";
import toml from "lume/plugins/toml.ts";
import favicon from "lume/plugins/favicon.ts";

const site = lume();

site.use(jsx());
site.use(sass());
site.use(toml());
site.use(date({ locales: { ja } }));
site.use(minifyHTML());
site.use(favicon({
  input: "/assets/icon.png",
}));

export default site;
