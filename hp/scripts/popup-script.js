async function loadFilmPage(url) {
	try {
		const iframe = document.getElementById('overlayIframe');
    		iframe.src = url;
    		document.getElementById('filmOverlay').style.display = 'flex';
  	} catch (error) {
    		console.error('Ошибка загрузки страницы:', error);
    		document.getElementById('overlayIframe').src = '';
    		document.getElementById('overlayContent').innerHTML = '<p>Не удалось загрузить страницу фильма.</p>';
    		document.getElementById('filmOverlay').style.display = 'flex';
  	}
}

function closeOverlay() {
  		document.getElementById('filmOverlay').style.display = 'none';
  		document.getElementById('overlayIframe').src = ''; // Очищаем iframe
}

// Навешиваем обработчики на все ссылки с постерами
document.addEventListener('DOMContentLoaded', function() {
 	const filmLinks = document.querySelectorAll('.item a');
		filmLinks.forEach(link => {
    			link.addEventListener('click', function(e) {
      				e.preventDefault(); // Отменяем переход по ссылке
      				const filmUrl = this.getAttribute('href');
      				loadFilmPage(filmUrl);
    			});
		});

  		// Закрытие по клику вне iframe (на фоне)
  		document.getElementById('filmOverlay').addEventListener('click', function(e) {
    			if (e.target === this) {
      				closeOverlay();
    			}
  		});

  		// Закрытие по клавише Esc
  		document.addEventListener('keydown', function(e) {
    			if (e.key === 'Escape') {
      				closeOverlay();
    			}
  		});
});