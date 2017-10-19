
$(document).ready(function(){
    var carousel = $(".carousel"),
    currdeg  = 0;
    var currentDivNumber = 0;
    var currentDiv = 'a';
    var divTable = ['a', 'b', 'c', 'd', 'e', 'f'];
    let users = [{
        name: 'Jan Kowalski',
        age: 18,
        phone: '+48 787 693 128',
        class: 'a'
    },
    {
        name: 'Adam Nowak',
        age: 25,
        phone: '+48 569 235 564',
        class: 'b'
    },
    {
        name: 'Anna Pawłowska',
        age: 30,
        phone: '+48 679 452 545',
        class: 'c'
        
    },
    {
        name: 'Maria Sosnowska',
        age: 24,
        phone: '+48 789 231 231',
        class: 'd'
    },
    {
        name: 'Paweł Wróblewski',
        age: 29,
        phone: '+48 589 741 123',
        class: 'e'
        
    },
    {
        name: 'Katarzyna Słomińska',
        age: 32,
        phone: '+48 600 987 325',
        class: 'f'
    }
    ];
function addUser(){
    for (var i=0; i<users.length; i++) {
     $('.'+`${users[i].class}`).append(`<span class="number">${i+1}</span>`);
     $('.'+`${users[i].class}`).append(`<span class="name">${users[i].name}</span>`);
     $('.'+`${users[i].class}`).append(`<span class="age">${users[i].age+' lat'}</span>`);
     $('.'+`${users[i].class}`).append(`<span class="phone">${users[i].phone}</span>`);
    }
    
}
});

