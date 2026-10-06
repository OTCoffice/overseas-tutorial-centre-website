// Compact academic typography shared by the OPT and English CV pages.
module.exports=bodyClass=>`<style>
body.opt-page{font-size:14px;line-height:1.75;color:#344b59}
body.opt-page .band{box-sizing:border-box;width:calc(100% - 48px);max-width:1120px;margin-left:auto;margin-right:auto}
body.opt-page .services-hero{padding:0;border:0}
body.opt-page .services-hero .band{padding:22px 0}
body.opt-page .service-hero-layout{grid-template-columns:minmax(0,.9fr) minmax(0,1.4fr);gap:24px;align-items:center}
body.opt-page .services-hero h1{font-size:24px!important;line-height:1.4;margin:6px 0 8px;letter-spacing:.01em}
body.opt-page .services-hero h2{font-size:14px!important;line-height:1.6;color:#f5f2e9;border:0;padding:0;margin:0 0 8px}
body.opt-page .services-hero .eyebrow{font-size:11px;letter-spacing:.06em}
body.opt-page .services-hero .hero-sub{font-size:13px!important;line-height:1.7;max-width:370px;margin:0 0 14px}
body.opt-page .btn{font-size:13px;line-height:1.5;padding:8px 13px;min-height:36px}
body.opt-page .actions{margin:0;gap:8px}
body.opt-page .service-hero-panel{grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}
body.opt-page .service-hero-panel a{min-height:100px;padding:12px 10px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:5px;border-left-width:2px}
body.opt-page .service-hero-panel a::before,body.opt-page .service-review-strip a::before{display:none}
body.opt-page .service-hero-panel strong{font-size:13px;line-height:1.6}
body.opt-page .service-hero-panel span{font-size:11px;line-height:1.5}
body.opt-page .service-review-strip{padding:12px 0;gap:8px;border-bottom:1px solid #d9d6cb}
body.opt-page .service-review-strip a{min-height:58px;padding:9px 12px;display:block;border-top-width:2px}
body.opt-page .service-review-strip b{display:none}
body.opt-page .service-review-strip strong{display:block;font-size:13px;line-height:1.5}
body.opt-page .service-review-strip span{display:block;font-size:11px;line-height:1.5;margin-top:3px}
body.opt-page .consolidated-page{box-sizing:border-box;width:calc(100% - 48px);max-width:960px;margin:0 auto;padding:18px 0 32px;font-size:14px;line-height:1.8}
body.opt-page .consolidated-page>nav{font-size:12px;margin:0 0 18px}
body.opt-page .consolidated-page p,body.opt-page .consolidated-page li,body.opt-page .consolidated-page blockquote,body.opt-page .opt-table th,body.opt-page .opt-table td{font-size:14px!important;line-height:1.8}
body.opt-page .consolidated-page p{margin:0 0 12px}
body.opt-page .consolidated-page section{padding:16px 0;border-bottom:1px solid #d9d6cb}
body.opt-page .consolidated-page h2{font-size:17px!important;line-height:1.5;color:#183747;border-top:1px solid #b7892c;padding-top:12px;margin:20px 0 12px;scroll-margin-top:90px}
body.opt-page .consolidated-page ul,body.opt-page .consolidated-page ol{padding-left:22px;margin:0 0 14px}
body.opt-page .consolidated-page li{margin-bottom:5px}
body.opt-page blockquote{margin:12px 0;padding:14px 16px;background:#eef2f3;border-left:2px solid #b7892c;overflow-wrap:anywhere}
body.opt-page .opt-table{overflow-x:auto;margin:12px 0 20px}
body.opt-page .opt-table table{width:100%;border-collapse:collapse;table-layout:fixed}
body.opt-page .opt-table th,body.opt-page .opt-table td{text-align:left;padding:10px 12px;border:1px solid #d7dce0;vertical-align:top;overflow-wrap:anywhere}
body.opt-page .opt-table th{width:36%;background:#eef2f3;font-weight:600}
body.opt-page figure{max-width:480px;margin:24px 0}
body.opt-page figure img{width:100%;height:auto}
body.opt-page .consolidated-page .opt-note{font-size:12px!important;line-height:1.75;color:#566970}
body.opt-page .footer-inner,body.opt-page .footer-inner p,body.opt-page .footer-inner li{font-size:12px;line-height:1.7}
@media(max-width:900px){body.opt-page .service-hero-layout{grid-template-columns:1fr 1.2fr;gap:18px}body.opt-page .service-hero-panel{grid-template-columns:repeat(2,minmax(0,1fr))}body.opt-page .service-hero-panel a{min-height:68px}}
@media(max-width:700px){body.opt-page .band,body.opt-page .consolidated-page{width:calc(100% - 32px)}body.opt-page .services-hero .band{padding:18px 0}body.opt-page .service-hero-layout{grid-template-columns:1fr;gap:16px}body.opt-page .services-hero h1{font-size:22px!important}body.opt-page .service-hero-panel a{min-height:60px}body.opt-page .service-review-strip{grid-template-columns:repeat(2,minmax(0,1fr))}body.opt-page .service-review-strip a{min-height:52px}body.opt-page .consolidated-page h2{font-size:16px!important}body.opt-page .opt-table th,body.opt-page .opt-table td{padding:8px}body.opt-page .consolidated-page{padding-top:14px}}
</style>`.replaceAll('opt-page',bodyClass);
