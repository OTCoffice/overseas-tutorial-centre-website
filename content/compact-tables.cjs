// Shared mobile table labels; preserve cell contents, links and desktop layout.
module.exports = function compactTables(html) {
  return html.replace(/<table\b([^>]*)>([\s\S]*?)<\/table>/gi, (whole, attrs, inner) => {
    if (/otc-mobile-records/.test(attrs)) return whole;
    const rows = [...inner.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)];
    const header = rows.find(r => /<th\b/i.test(r[1]));
    if (!header) return whole;
    const labels = [...header[1].matchAll(/<th\b[^>]*>([\s\S]*?)<\/th>/gi)].map(m => m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim());
    if (labels.length < 4) return whole;
    const escape = s => s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
    const updated = inner.replace(/<tr\b([^>]*)>([\s\S]*?)<\/tr>/gi, (row, ra, cells) => {
      if (!/<td\b/i.test(cells)) return row;
      let column = 0;
      return '<tr' + ra + '>' + cells.replace(/<(td|th)\b([^>]*)>([\s\S]*?)<\/\1>/gi, (_, tag, ca, content) => {
        const span = Number((ca.match(/colspan=["']?(\d+)/i)||[])[1]||1);
        const label = labels.slice(column, column + span).join('／'); column += span;
        return '<' + tag + ca + ' data-otc-label="' + escape(label) + '"><div class="otc-cell-value">' + content + '</div></' + tag + '>';
      }) + '</tr>';
    });
    const a = /\bclass=/.test(attrs) ? attrs.replace(/class=(["'])(.*?)\1/, (_,q,c) => 'class='+q+c+' otc-mobile-records'+q) : attrs+' class="otc-mobile-records"';
    return '<table' + a + '>' + updated + '</table>';
  });
};
