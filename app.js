async function result() {
    const user = {
        "firstName": "vlad",
        "lastName": "vlad",
        "username": "vlad",
        "email": "george@gmail.com",
        "password": "vlad"
    }
    const userLogin = {
        "email": "george@gmail.com",
        "password": "vlad"
    }
    
    const res = await fetch('http://localhost:4000/api/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
        });

    console.log(await res.json());
    return res;
}

result();