
//Api call for Getting News.
export async function GetNews(Id,Author,published) {
    let data={
        'id':Id,
        'author':Author,
        'published':published
    }

    const requestOptions = {
        method: 'GET',
        //body: JSON.stringify(user)
    };

    return fetch('http://test.peppersquare.com/api/v1/article?id=${encodeURIComponent(data.id)}&author=${encodeURIComponent(data.author)}&published=${encodeURIComponent(data.published)}',
    requestOptions)
        .then(handleResponse).catch(err => alert('Network Failed!'));

    //Handling Responces from the promises.
    function handleResponse(response) {
        if (!response.ok) {
            return Promise.reject(response.statusText);
            alert(response.statusText)
        }
        return response.json();
    }
}


