export const myPostPromise = (email )=> {
    return fetch(`https://restuarent-server-sepia.vercel.app/myFood-post?email=${email}`
    )
    .then(res => res.json())
}