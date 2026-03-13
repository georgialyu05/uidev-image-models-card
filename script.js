function handleLogin() {
  const tooltip = document.getElementById('tooltip');
  
  tooltip.classList.add('show');
  
  setTimeout(() => {
    tooltip.classList.remove('show');
  }, 3000);
}

function handleAuth() {
  const authBtn = document.querySelector('.auth');
  const userBadge = document.querySelector('.user-badge');

  // 第一阶段：加载中
  authBtn.classList.add('loading');
  authBtn.onclick = null; // 防止重复点击

 setTimeout(() => {
    // 第二阶段：完成
    authBtn.classList.remove('loading');
    authBtn.classList.add('authenticated');

    // badge 滚动切换
    userBadge.classList.add('authenticated');
    userBadge.onclick = null; // 认证后禁止点击 login
  }, 1000);
}