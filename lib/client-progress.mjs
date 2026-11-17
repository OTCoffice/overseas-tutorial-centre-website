export const applicationStages=['需求與方案','確認申請項目','申請資料','遞交與審理','錄取／申請結果','確認與費用','簽證與行前','服務完成'];
export function stageForStatus(status){const groups=[['資料待補','已評估'],['候選路線','待官方核實'],['文件準備中','待客戶提供'],['已提交','機構已收到'],['有條件錄取','待完成條件'],['已確認入學','待客戶確認'],['行前準備中'],['階段完成','已結案']];const i=groups.findIndex(g=>g.includes(status));return i<0?null:i;}
