document.addEventListener('deviceready', function(){
    var db = window.openDatabase("Database", "1.0", "db_interno", 200000);
    db.transaction(execute, erro, sucesso);      
}, false);

function execute(ex){
    ex.executeSql("CREATE TABLE IF NOT EXISTS tarefa(id integer primary key autoincrement, tarefa, progresso)");
}

function novaTarefa(tarefa, progresso){
    var db = window.openDatabase("Database", "1.0", "db_interno", 200000);
    db.transaction(function(ex){
        ex.executeSql("INSERT INTO tarefa (tarefa, progresso) VALUES ('" + tarefa + "', '" + progresso + "')");
    }, sucesso, erro);
    window.location = "index.html";      
}

function selectTarefa(){
    var db = window.openDatabase("Database", "1.0", "db_interno", 200000);
    db.transaction(function(ex){
        ex.executeSql("SELECT * FROM tarefa", [], function(ex, results){
            console.log(results);
            if (results.rows.length == 0){
                $('#cardsTodas').append("<p>Sem tarefas cadastradas!");
            } else {
                for(var i = 0; i < results.rows.length; i++){
                    $('#cardsTodas').html();
                    $('#cardsTodas').append('<div class="row"><div class="col s12 m6"><div class="card"><div class="card-content black-text"><span class="card-title">' + results.rows.item(i).tarefa + '</span><p><i class="material-icons">timelapse</i> ' + results.rows.item(i).progresso + '</p><div class="card-action"><a onclick="editaTarefa(' + results.rows.item(i).id + ')"><i class="material-icons">edit</i>Editar</a><a onclick="confirmaExclusao(' + results.rows.item(i).id + ')"><i class="material-icons">delete</i>Apagar</a></div></div></div></div></div>');
                }
            } 
        }, function(erro){
            console.log(erro);
        });
    }, erro);
}

function selectTarefasPendentes(){
    var db = window.openDatabase("Database", "1.0", "db_interno", 200000);
    db.transaction(function(ex){
        ex.executeSql("SELECT * FROM tarefa WHERE progresso = 'Não iniciado' OR progresso = 'Em andamento'", [], function(ex, results){
            console.log(results);
            if (results.rows.length == 0){
                $('#cardsTodas').append("<p>Sem tarefas pendentes!");
            } else {
                for(var i = 0; i < results.rows.length; i++){
                    $('#cardsPendentes').html();
                    $('#cardsPendentes').append('<div class="row"><div class="col s12 m6"><div class="card"><div class="card-content black-text"><span class="card-title">' + results.rows.item(i).tarefa + '</span><p><i class="material-icons">timelapse</i> ' + results.rows.item(i).progresso + '</p><div class="card-action"><a onclick="editaTarefa(' + results.rows.item(i).id + ')"><i class="material-icons">edit</i>Editar</a><a onclick="confirmaExclusao(' + results.rows.item(i).id + ')"><i class="material-icons">delete</i>Apagar</a></div></div></div></div></div>');
                }
            } 
        }, function(erro){
            console.log(erro);
        });
    }, erro);
}

function selectTarefasConcluidas(){
    var db = window.openDatabase("Database", "1.0", "db_interno", 200000);
    db.transaction(function(ex){
        ex.executeSql("SELECT * FROM tarefa WHERE progresso = 'Concluído'", [], function(ex, results){
            console.log(results);
            if (results.rows.length == 0){
                $('#cardsConcluidas').append("<p>Sem tarefas concluídas!");
            } else {
                for(var i = 0; i < results.rows.length; i++){
                    $('#cardsConcluidas').html();
                    $('#cardsConcluidas').append('<div class="row"><div class="col s12 m6"><div class="card"><div class="card-content black-text"><span class="card-title">' + results.rows.item(i).tarefa + '</span><p><i class="material-icons">timelapse</i> ' + results.rows.item(i).progresso + '</p><div class="card-action"><a onclick="editaTarefa(' + results.rows.item(i).id + ')"><i class="material-icons">edit</i>Editar</a><a onclick="confirmaExclusao(' + results.rows.item(i).id + ')"><i class="material-icons">delete</i>Apagar</a></div></div></div></div></div>');
                }
            } 
        }, function(erro){
            console.log(erro);
        });
    }, erro);
}

function alteraTarefa(id, tarefa, progresso){
    var db = window.openDatabase("Database", "1.0", "db_interno", 200000);
    db.transaction(function(ex){
        ex.executeSql("UPDATE tarefa SET tarefa = '" + tarefa + "', progresso = '" + progresso + "' WHERE id = " + id);
    }, sucesso, erro);
}

function apagarTarefa(id){
    var db = window.openDatabase("Database", "1.0", "db_interno", 200000);
    db.transaction(function(ex){
        ex.executeSql("DELETE FROM tarefa WHERE id = " + id);
    }, sucesso, erro);
    window.location.href = "index.html";   
}

function sucesso(ex){

}

function erro(result){
    //alert(result.message);
    console.log(result);
}