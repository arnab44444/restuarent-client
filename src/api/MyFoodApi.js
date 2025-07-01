export const myFoodPromise = (email )=> {
    return fetch(`https://restuarent-server-sepia.vercel.app/my-food?email=${email}`
    )
    .then(res => res.json())
}