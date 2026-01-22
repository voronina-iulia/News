document.querySelectorAll('.main-article_text').forEach(textEl => {
    const imgContent = textEl.closest('.main-article').querySelector('.main_img-content');
    
    if (!textEl.textContent.trim()) {
        imgContent.style.height = '185px';
    }
});
