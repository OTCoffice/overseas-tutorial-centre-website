// Presentation cleanup shared by the Chinese Iceland page and its generator.
module.exports = function plainIceland(html) {
  if (html.includes('class="iceland-plain"')) return html;
  const start = html.indexOf('<section class="page-hero regional-office-hero country-gateway-hero country-iceland-2026"');
  const source = html.indexOf('<p class="source-note">', start);
  if (start < 0 || source < 0) throw new Error('Iceland content boundaries missing');
  const end = html.indexOf('</section>', source) + '</section>'.length;
  let body = html.slice(start, end);
  body = body.replace(/<div class="eyebrow">[^<]*<\/div>/g, '')
    .replace(/<div class="country-hero-chips">[\s\S]*?<\/div>/, '')
    .replace('<h2>大學、費用與申請</h2>', '')
    .replace(/<b>\d{2}<\/b>/g, '');
  const style = `<style>
.iceland-plain{overflow-wrap:anywhere}.iceland-plain .band{max-width:1000px}.iceland-plain .page-hero{padding:32px 0;background:#f4f6f8!important;color:#17283b}.iceland-plain .page-hero h1{font-size:2.2rem;color:#17283b!important}.iceland-plain .page-hero p{font-size:1.1rem;color:#344454}.iceland-plain .country-gateway-panel{padding-top:32px}.iceland-plain .section-head{margin-top:30px}.iceland-plain .country-official-grid,.iceland-plain .country-school-grid,.iceland-plain .country-subnav-grid,.iceland-plain .country-route-steps-grid{display:block}.iceland-plain article,.iceland-plain .country-subnav-grid a{display:block;padding:16px 0;margin:0;background:none;border:0;border-bottom:1px solid #ddd;box-shadow:none;border-radius:0;min-height:0}.iceland-plain .country-school-grid article>b{display:none}.iceland-plain article p{margin:8px 0}.iceland-plain .country-subnav,.iceland-plain .country-official,.iceland-plain .country-route-steps{background:none;padding:0;border:0}.iceland-plain .country-subnav-grid a:after{display:none}.iceland-plain .country-route-steps-grid article b{display:inline-block;margin-right:12px}.iceland-plain .actions{flex-wrap:wrap}
</style>`;
  return html.slice(0,start) + style + '<div class="iceland-plain">' + body + '</div>' + html.slice(end);
};
