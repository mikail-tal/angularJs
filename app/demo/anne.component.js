angular.module('myApp.demo')
.component('anne',{
    template:'<span>{{$ctrl.value && $ctrl.value > 1 ? "ans" :"an"}}',
    bindings:{
        value:'<'
    }
});