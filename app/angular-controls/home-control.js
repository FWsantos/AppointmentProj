angular.module('appointment')
.controller('homeCtrl', function ($scope) {

	$scope.add = false;
	$scope.rotinas = [
	"unico",
	"diario",
	"semanal",
	"mensal",
	"anual"
	];
	$scope.atividades = [{
		nome: 'Prova de Matemática',
		rotina: $scope.rotinas[1],
		data: '19/11',
		hora: '08:00',
		completo: false
	}, {
		nome: 'Missa',
		rotina: $scope.rotinas[1],
		data: '20/11',
		hora: '18:00',
		completo: false
	}, {
		nome: 'Super Mercado',
		rotina: $scope.rotinas[1],
		data: '21/11',
		hora: '09:00',
		completo: false
	}, {
		nome: 'Reunião',
		rotina: $scope.rotinas[1],
		data: '21/11',
		hora: '15:00',
		completo: false
	}, {
		nome: 'Pular da Ponte',
		rotina: $scope.rotinas[1],
		data: '22/11',
		hora: '00:00',
		completo: false
	}, ];
	$scope.adicionar = function(att) {
		$scope.atividades.push(angular.copy(att));
		delete $scope.atividade;
	};
})