(() => {
    u('a#upper').handle('click', function(e) {
        window.scroll({top: 0, behavior: 'smooth'});
    });
    u('article.tweet > blockquote a').handle('click', function(e) {});
    // ---
    if(0 < u('img.psc').length) {
        const $div = u('<div>').attr('id', 'dialog').addClass('hidden');
        const $article = u('<article>').handle('click', function(e) {
            $div.addClass('hidden');
            u('body').removeClass('modal');
        });
        const $img = u('<img>').attr('id', 'dialog_img');
        const $btn = u('<button>').attr({
            id: 'dialog_close',
            type: 'button'
        }).text('閉じる');
        $article.append($btn).append($img);
        $div.append($article);
        u('body').append($div);
        // event
        u('img.psc').handle('click', function(e) {
            let path = u(this).attr('src');
            $img.attr('src', path);
            $div.removeClass('hidden');
            u('body').addClass('modal');
        });
    }
})();
