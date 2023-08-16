module.exports = function(app) {
    var tareaCrl = require('../controllers/tarea');

    app.route('/api/tareas')
        .get(tareaCrl.list_all_tareas)
        .post(tareaCrl.create_tarea);
    
    app.route('/api/tareas/:tareaId')
        .get(tareaCrl.read_tarea)
        .put(tareaCrl.update_tarea)
        .delete(tareaCrl.delete_tarea);
    
}