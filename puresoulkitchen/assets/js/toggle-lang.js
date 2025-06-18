function toggleLanguage() {
  const current = window.location.pathname;
  if (current.includes('/zh/')) {
    window.location.href = current.replace('/zh/', '/');
  } else {
    window.location.href = '/zh' + current;
  }
}