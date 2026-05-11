type Teacher = {
    name: string;
    subject: string;
};

type Student = {
    name: string;
    class: number;
};


function greet(person: Teacher | Student): string {
    console.log(typeof person);
    if ('class' in person) {
    // if (typeof (person as Student).class === 'number') {

        return `Hello, ${person.name}! You are a student in class ${person.class}.`;
    } else {
        return `Hello, ${person.name}! You are a teacher of ${person.subject}.`;
    }
}

console.log(greet({ name: 'Rishat', subject: 'Math' }));