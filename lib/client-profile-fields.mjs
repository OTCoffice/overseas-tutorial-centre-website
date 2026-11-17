export const profileSchemaVersion='20261117-global7';
export const profileFields={
 basic:[['chineseName','中文姓名'],['familyName','英文姓（與證件一致）'],['givenName','英文名（與證件一致）'],['birthDate','出生日期'],['gender','性別'],['email','聯絡電郵'],['nationality','國籍／護照國家或地區'],['maritalStatus','婚姻狀況'],['passportNumber','護照號碼（正式申請需要時填寫）'],['passportExpiry','護照到期日'],['residence','現居國家及城市'],['phone','聯絡電話（含國碼）'],['contact','偏好聯絡方式'],['homeAddress','常住地址'],['homePostcode','常住地址郵遞區號'],['overseasAddress','境外地址'],['overseasPostcode','境外郵遞區號']],
 education:[['school','學校名稱'],['country','所在國家'],['qualification','學歷／學位'],['subject','專業'],['start','開始年月'],['end','畢業／預計完成年月'],['grade','GPA／均分'],['scale','滿分與評分制度'],['teachingLanguage','授課語言'],['completed','在讀／畢業狀況'],['interruptions','休學／退學／轉學情況（如有）']],
 languages:[['test','考試／語言'],['date','考試日期'],['overall','總分／程度'],['listening','聽力'],['reading','閱讀'],['writing','寫作'],['speaking','口語'],['reference','成績單編號（如需要）'],['expiry','成績有效期']],
 work:[['employer','機構／僱主'],['role','職位／實習'],['start','開始年月'],['end','結束年月／至今'],['country','工作國家'],['details','工作內容與成果']],
 plan:[['countries','目標國家／地區（多個以逗號分隔）'],['degree','申請學段／目標學位'],['subject','意向專業'],['cities','意向城市'],['intake','入學年月'],['budget','全程預算及幣別'],['languageCourse','是否接受語言班／預科'],['priorities','選校優先考量'],['requirements','其他要求']],
 applications:[['country','申請國家'],['school','院校名稱'],['course','課程／專業名稱'],['degree','申請學位／學段'],['code','課程代碼'],['source','官方課程網址'],['intake','入學年月'],['duration','學制'],['campus','校區'],['specialism','專業方向'],['creditTransfer','是否申請學分減免'],['languageSchool','語言學校（如需要）'],['languageCourse','語言課程'],['languageStart','語言課程開課日期'],['languageWeeks','語言課程週數'],['preference','志願順序'],['notes','選校備註']],
 emergency:[['name','聯絡人姓名'],['relationship','與申請人關係'],['phone','聯絡電話（含國碼）'],['email','聯絡電郵'],['address','聯絡地址'],['guardian','是否為監護人']],
 visa:[['country','申請簽證國家'],['type','簽證類型'],['heldBefore','是否持有／曾持有目的地簽證'],['previousDetails','以往簽證詳情（如有）'],['refusal','是否有任何國家拒簽紀錄'],['refusalDetails','拒簽日期、國家及原因（如有）'],['cancellation','是否有簽證取消／遣返紀錄'],['cancellationDetails','相關情況（如有）'],['courseReference','CAS／CoE／入學文件編號（如適用）'],['funding','費用來源與資助安排'],['dependants','隨行家屬安排'],['travelDate','預計出發日期'],['appointment','預約／生物辨識日期'],['notes','簽證材料特殊情況']],
 payments:[['purpose','款項用途'],['school','院校／收款機構'],['amount','金額'],['currency','幣別'],['paidDate','付款日期'],['reference','付款參考號'],['notes','備註（勿填卡號或銀行密碼）']],
 arrival:[['country','目的地國家'],['city','目的地城市'],['arrivalDate','預計抵達日期'],['airport','抵達機場'],['flight','航班（確認後填寫）'],['pickup','接機需要'],['accommodation','住宿需要／已確認地址'],['moveIn','入住日期'],['guardian','監護安排（如適用）'],['academic','選課／學術支援需要'],['career','實習／求職支援需要'],['other','其他境外服務需要']],
 serviceRequests:[['service','服務項目'],['country','服務國家／城市'],['preferredDate','預計服務日期'],['details','具體需求'],['budget','預算及幣別'],['contactTime','方便聯絡時段']],
 decisions:[['school','院校名稱'],['course','課程名稱'],['reference','申請／錄取編號'],['request','處理要求'],['deadline','相關截止日期'],['notes','補充說明']],
 other:[['visaHistory','簽證／居留經歷補充'],['notes','需要顧問了解的其他情況']]
};
export const profileTitles={basic:'個人基本資料',education:'教育經歷',languages:'語言及其他考試',work:'工作與實習',plan:'留學意向',applications:'意向院校與課程',emergency:'緊急聯絡人／監護人',visa:'簽證背景',payments:'付款紀錄',arrival:'境外服務需求',serviceRequests:'服務諮詢需求',decisions:'錄取處理需求',other:'其他資料'};
export const repeatingProfileGroups=['education','languages','work','applications','emergency','payments','serviceRequests','decisions'];
