function parseDate(str) {
  const [datePart, timePart] = str.split('/');
  const [y, m, d] = datePart.split('.').map(Number);
  const [hh, mm] = timePart.split('.').map(Number);
  return new Date(y, m - 1, d, hh, mm);
}

async function fetchWithRetry(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed');
      return await res.json();
    } catch (err) {
      if (i < tries - 1) {
        console.warn('Retrying...');
        await new Promise(r => setTimeout(r, 5000));
      } else {
        throw err;
      }
    }
  }
}

function renderPosts(posts) {
  const list = document.getElementById('post-list');
  posts.forEach(post => {
    const li = document.createElement('li');
    const dt = parseDate(post.date);
    const time = dt.toTimeString().slice(0, 5);
    li.textContent = `${time} - ${post.name}`;
    li.addEventListener('click', () => openModal(post, dt));
    list.appendChild(li);
  });
}

function openModal(post, dt) {
  document.getElementById('modal-title').textContent = post.name;
  const time = dt.toTimeString().slice(0, 5);
  const dateStr = `${dt.getFullYear()}.${dt.getMonth() + 1}.${dt.getDate()} ${time}`;
  document.getElementById('modal-date').textContent = dateStr;
  document.getElementById('modal-body').innerHTML = marked.parse(post.detail);
  document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

document.getElementById('close').addEventListener('click', closeModal);
document.getElementById('modal').addEventListener('click', e => {
  if (e.target.id === 'modal') closeModal();
});

fetchWithRetry('/api/posts')
  .then(renderPosts)
  .catch(() => {
    document.getElementById('post-list').textContent = '게시글을 불러오지 못했습니다.';
  });
