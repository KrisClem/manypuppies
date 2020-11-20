
function getDogImage(number) {
    const options = {method: 'GET'}
    const apiLinkString = 'https://dog.ceo/api/breeds/image/random/'
    console.log(number);
    fetch(apiLinkString + number, options)
    .then(response => response.json())
    .then(responseJson => {
        for (let i = 0; i < responseJson.message.length; i++){
            showPups(responseJson.message[i])
        }

    })
    .catch(error => alert('Something broke. Please try again later.'))
}


function showPups(responseJson) {
    console.log(responseJson)
    $('ul').append(
        `<li><img src=${responseJson}></li>`
    )

    $('.results').removeClass('hidden');
}


function submitNumber() {
    console.log($('input').val())
    $('form').submit(event => {
        event.preventDefault();
        $('ul').empty()
        const number = $('input').val()
        getDogImage(number) 
    });
   
}

$(submitNumber)