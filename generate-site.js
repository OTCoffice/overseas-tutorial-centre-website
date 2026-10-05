
// Preserve visual communication planning and directory links after full generation.
require("./scripts/render-visual-communication.cjs");

// Keep UK private school directory and category pages in sync.
require("./scripts/render-uk-day-schools.cjs");

// Preserve the Singapore internship service and navigation after full generation.
require("./scripts/render-singapore-internship.cjs");

// Preserve the source-backed Singapore internship Herald guide.
require('./scripts/render-singapore-guide.cjs');

// Preserve professional website and career services after full generation.
require("./scripts/render-professional-services.cjs");

// Preserve the three-country masters comparison and official sources.
require("child_process").execFileSync("python3",["scripts/render-masters-comparison.py"],{stdio:"inherit"});

// Preserve the nursing hub, country guide and navigation.
require('./scripts/render-nursing.cjs');

require('./scripts/render-korea-winter.cjs');

// Preserve Canada K–12 directories and application service.
require("./scripts/render-canada-schools.cjs");

// Preserve veterinary certification pages and vocational-training navigation.
require("./scripts/render-veterinary-training.cjs");

// Preserve the source-backed volunteer alliance and UK sponsor directory.
require('./scripts/render-volunteer-alliance.cjs');
