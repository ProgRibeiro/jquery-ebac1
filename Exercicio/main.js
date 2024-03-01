$(document).ready(function() {
    // Adiciona tarefa ao enviar o formulário
    $('#taskForm').submit(function(event) {
        event.preventDefault(); 

        
        var taskName = $('#taskInput').val();

        // Verifica se o campo não está vazio
        if(taskName.trim() !== '') {
            // Cria um novo elemento de lista e adiciona à lista
            $('#taskList').append('<li>' + taskName + '</li>');

            // Limpa o campo de entrada
            $('#taskInput').val('');
        }
    });

    // Adiciona efeito ao clicar em um item da lista
    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
