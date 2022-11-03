export const setupPosts = (data) => {
    if (data.length) {
        data.forEach(doc => {
            console.log(doc)
            doc.data()
        })
    } else {
        console.log('no post')
    }
}