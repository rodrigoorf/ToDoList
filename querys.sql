# Consulta 1
SELECT a.nome from Aluno as a
inner join turma as t
on t.id = a.id
inner join professor as p
on p.id = t.id
WHERE p.nome = 'JOAO PEDRO';

#Consulta 2
SELECT t.dia_da_semana from Turma as t
inner join Disciplina as d
on t.id = d.id
WHERE d.nome = 'MATEMATICA';

#Consulta 3
SELECT a.nome from Aluno as a
inner join Turma as t
on a.id = t.id
inner join Disciplina as d
on d.id = t.id
WHERE d.nome = 'MATEMATICA'
AND d.nome = 'FISICA';

#Consulta 4
SELECT d.nome from Disciplina as d
inner join Turma as t
on d.id != t.id;

#Consulta 5
SELECT a.nome from Aluno as a
inner join Turma as t
on a.id = t.id
inner join Disciplina as d
on t.id = d.id
WHERE d.nome = 'MATEMATICA'
AND NOT d.nome = 'QUIMICA'