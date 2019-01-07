
//Api call for Publish News.
export async function PostNews(title, Description,category,Author,Image ) {

    //PlaceBet Api required feilds.
    let NewsData = {
      
            "title": title,
            "Description": Description,
            "category":category,
            "Author": Author,
            "Image":Image,
       
    }

    const requestOptions = {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': 'Bearer' + ' ' + token
        // },
        body: JSON.stringify(NewsData)
    };

    return fetch('http://test.peppersquare.com/api/v1/article',requestOptions )
        .then(handleResponse).catch(err => setTimeout(() => {
            alert('Network Failed!');
        }, 500));

    //Handling Responces from the promises.
    function handleResponse(response) {
        if (!response.ok) {
            return Promise.reject(response.statusText);
            alert(response.statusText)
        }
        return response.json();
    }
}
