require('child_process').execFileSync('python3',['scripts/render-swt-china-herald.py'],{stdio:'inherit'});
require('./scripts/render-travel-services.cjs');
require("./scripts/render-us-eb1a-niw.cjs");
require("./scripts/render-uk-global-talent.cjs");

// Preserve visual communication planning and directory links after full generation.
require("./scripts/render-visual-communication.cjs");

// Keep UK private school directory and category pages in sync.
require("./scripts/render-uk-day-schools.cjs");

// Preserve the Singapore internship service and navigation after full generation.
require("./scripts/render-singapore-internship.cjs");
require("./scripts/render-europe-agriculture.cjs");
require("./scripts/render-singapore-work-pass.cjs");

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

require('./scripts/render-us-community-college.cjs');

// Preserve OPT job support, guide and navigation.
require("./scripts/render-opt-support.cjs");

// Preserve Greece country guide and study information.
require('./scripts/render-greece.cjs');

// Preserve Taiwan university introductions and winter comparison.
require('./scripts/render-taiwan-winter.cjs');

// Preserve music planning and the subject/service directory entries.
require('./scripts/render-music-study.cjs');

// Preserve CSC masters, doctoral and joint-training routes.
require('./scripts/render-csc.cjs');

require('./scripts/render-swt-terms.cjs');

// Keep the application pricing policy and service navigation current.
require('./scripts/render-application-fees.cjs');

// Preserve Hong Kong minor homestay guidance and service.
require('./scripts/render-hk-guardianship.cjs');

// Preserve UK-first hub and Japan school planning.
require('./scripts/render-private-school-hub.cjs');

// Preserve the affordable study guide and directory entries.
require('./scripts/render-affordable-study.cjs');

// Preserve public school country pages and navigation.
require('./scripts/render-public-school-alliance.cjs');

// Keep Korea K-12 school records, application materials and contact entry in sync.
require("./scripts/render-korea-schools.cjs");

// Preserve photography planning and navigation after full generation.
require("./scripts/render-photography-art.cjs");
