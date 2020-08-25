var imageContainer = document.getElementById('image-container')
var loader = document.getElementById('loader')
var photoArray = []

function setAttributes(element,attributes){
    for (var key in attributes){
        element.setAttribute(key,attributes[key])
    }
}

function displayPhotos(){
    photoArray.forEach((photo) => {
        //vreate <a> to link to unsplash
        var item = document.createElement('a')
        // item.setAttribute('href',photo.links.html)
        // item.setAttribute('target','_blank')
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        })
        //create <img> for photo
        var img = document.createElement('img')
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })
        // img.setAttribute('src',photo.urls.regular)
        // img.setAttribute('alt',photo.alt_description)
        // img.setAttribute('title',photo.alt_description)
        //put <img> inside <a>, then put both inside imageContainer element
        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}

//unsplash API
var count = 30
var apiKey = 'xMgGjBr7766mWE7nJglxXheQzHIv136W09b5ckIa8nQ'
var apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

//get photos from unsplash
async function getPhotos(){
    try{
        var response = await fetch(apiUrl)
        photoArray = await response.json()
        //console.log(photoArray)
        displayPhotos()
    } catch(error){

    }
}
getPhotos()