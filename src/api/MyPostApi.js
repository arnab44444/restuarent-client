export const myPostPromise = (email )=> {
    return fetch(`http://localhost:3000/myFood-post?email=${email}`
    )
    .then(res => res.json())
}