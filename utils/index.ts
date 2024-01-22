export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': '4c02db1e8bmsh0b73e11ccd1799bp12ec3djsndeaaa80ad32c',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    })
    const result = await response.json();
    return result;
}