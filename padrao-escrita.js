const classA = [
    {
        name: 'Lucas',
        grade: 1.8
    },
    {
        name: 'Jorge',
        grade: 10
    },
    {
        name: 'Leticia',
        grade: 2
    },
    {
        name: 'Mais um student',
        grade: 10

    }
]

const classB = [
    {
        name: 'Amanda',
        grade: 10
    },
    {
        name: 'Fernando',
        grade: 10
    },
    {
        name: 'Robson',
        grade: 0
    },
    {
        name: 'Novo student',
        grade: 5

    }
]


function calculateAverage(students) {

    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

function sendMessage(average, turma) {

    if (average > 5) {
        console.log(`${turma} average: ${average} Congrats`)
    } else {
        console.log(`${turma} average: ${average}. Is not good.`)
    }
}

function markAsFlunked(student) {

    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}



markAsFlunked(classA)

function sendFlunkedMessage(student) {

    if (student.flunked) {
        console.log(`${student.name} flunked!`)
    }
}

function studentsflunked(students) {

    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

// Execução
sendMessage(average1, 'ClassA')
sendMessage(average2, 'ClassB')

studentsflunked(classA)
studentsflunked(classB)