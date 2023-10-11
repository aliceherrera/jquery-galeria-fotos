
$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })
    
    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endereçoNovaImagem = $('#endereço-img-nova').val();
        const novoItem = $('<li style="display: none"</li>');
        $(`<img src="${endereçoNovaImagem}" />`).appendTo(novoItem); //.appendTo insere o item entre a tag li acima
        $(`
            <div class="overlay-img-link">
                <a href="${endereçoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        //.appendTo insere o item entre a tag li acima
        //target="_blank" abre o link em nova aba
        $(novoItem).appendTo('ul'); //adicionando o li ao ul
        $(novoItem).fadeIn(1000); //adicionando fade in de 1s ao adicionar nova imagem
        $('#endereço-img-nova').val('');
    })
})
