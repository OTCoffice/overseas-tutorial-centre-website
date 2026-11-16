const registrationForm = document.getElementById('job-search-registration');
const registrationStatus = document.getElementById('registration-status');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const lines = Array.from(new FormData(registrationForm), ([label, answer]) =>
    `${label}：${answer.trim()}`
  );
  const body = ['OTC 求職登記表', '', ...lines, '', '最新 CV 隨郵件附上。'].join('\r\n');
  const email = 'office@overseasuk.com';

  if (event.submitter?.value !== 'download') {
    const subject = encodeURIComponent('OTC 求職登記表');
    const draft = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    if (draft.length <= 1900) {
      registrationStatus.textContent = '請在電郵草稿附上 CV 並寄出。如果沒有開啟草稿，可下載表格後手動寄出。';
      window.location.href = draft;
      return;
    }
  }

  const url = URL.createObjectURL(new Blob(['\uFEFF', body], { type: 'text/plain;charset=utf-8' }));
  const download = document.createElement('a');
  download.href = url;
  download.download = 'OTC-求職登記表.txt';
  document.body.append(download);
  download.click();
  download.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  registrationStatus.textContent = '請將下載的表格和 CV 一起電郵給 office@overseasuk.com。';
});

for (const button of registrationForm.querySelectorAll('button[type=submit]')) {
  button.disabled = false;
}
