$.extend($.fn.dataTable.defaults, {
	"oLanguage" : {
		"sProcessing" : "Processando...",
		"sLengthMenu" : "Mostrar _MENU_ registros",
		"sZeroRecords" : "Não foram encontrados resultados",
		"sInfo" : "Mostrando de _START_ até _END_ de _TOTAL_ registros",
		"sInfoEmpty" : "Mostrando de 0 até 0 de 0 registros",
		"sInfoFiltered" : "(filtrado de _MAX_ registros no total)",
		"sInfoPostFix" : "",
		"sSearch" : "Buscar:",
		"sUrl" : "",
		// TODO Traduzir e propor alteração no site do DataTables
		// Sem a configuração abaixo, a tabela não é renderizada
		"oAria" : {
			"sSortAscending" : ": clique para ordenar esta coluna de maneira ascendente",
			"sSortDescending" : ": clique para ordenar esta coluna de maneira descendente"
		},
		"oPaginate" : {
			"sFirst" : "Primeiro",
			"sPrevious" : "Anterior",
			"sNext" : "Próximo",
			"sLast" : "Último"
		}
	}
});

jQuery.validator.addClassRules({
  name: {
    required: true,
    minlength: 2
  },
  zip: {
    required: true,
    digits: true,
    minlength: 5,
    maxlength: 5
  }
});