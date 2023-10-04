export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=m0DWO7DGvIHFDCfw5A8lM8Z6uK1VNE7i&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs
}