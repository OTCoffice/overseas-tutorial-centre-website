const routes = new Set([
  '/zh/universities/australia/',
  '/zh/private-school-alliance/australia/',
  '/zh/private-school-alliance/australia/lindisfarne-anglican-grammar-school/',
  '/zh/private-school-alliance/australia/macarthur-anglican-school/',
  '/zh/private-school-alliance/australia/the-illawarra-grammar-school/',
  '/zh/private-school-alliance/australia/moreton-bay-colleges/',
  '/australia-schools/plc-pathways/',
  '/australia-schools/rockhampton-grammar-school/',
  '/zh/public-school-alliance/australia/',
  '/zh/australia-vet-tafe-pathways/',
  '/zh/language-school-alliance/australia/',
  '/zh/summer-school-alliance/australia/',
  '/zh/nursing/australia/',
  '/zh/australia-job-search-coaching/',
  '/zh/vocational-training/pave/',
  '/zh/work-travel-alliance/australia/',
  '/zh/services/australia-491-planning/',
  '/zh/immigration-alliance/australia/',
  '/zh/subject-planning/',
  '/zh/services/affordable-study-abroad/',
]);

function overviewLink(route) {
  return routes.has(route) ? '<div class="band compact-band"><p><a href="/australia/">返回澳洲留學總覽</a></p></div>' : '';
}

module.exports = { overviewLink, routes };
