AOS.init();

setInterval(function(){
    const hoje = new Date();
    const timeStampHoje =hoje.getTime();
    console.log(timeStampHoje);
    const birthday = new Date("May 04,2024 20:15:00");
    const birthdayTimeStamp = birthday.getTime();
    console.log(birthdayTimeStamp);
    const timeDifference = birthdayTimeStamp - timeStampHoje;
    const days = Math.floor(timeDifference / (1000 * 3600 * 24));
    const hours = Math.floor(timeDifference % (1000 * 3600 * 24)/ (1000 * 3600));
    const minutes = Math.floor(timeDifference % (1000 * 3600) / (1000 * 60));
    const seconds = Math.floor(timeDifference % (1000 * 60) / 1000) ;
    
    document.getElementById('horaCero').innerText =`${days} d ${hours} h ${minutes} min ${seconds} s`;

},2000);

let button = document.querySelector('#accept');
button.addEventListener('click',function(){
alert('Confirmalçao enviada. Esperamos por você.');
});