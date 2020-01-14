import UI from './modules/UI.js';
(() => {
    const interfaceApp = new UI('#lista', '#input', '#addTarefa');
    interfaceApp.iniciar();

})();