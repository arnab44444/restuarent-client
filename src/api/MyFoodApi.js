export const myFoodPromise = (email )=> {
    return fetch(`http://localhost:3000/my-food?email=${email}`
    )
    .then(res => res.json())
}