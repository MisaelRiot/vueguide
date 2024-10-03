import { ref } from "vue"

class BackendAuthService {
    constructor(){
        this.jwt = ref('')
        this.baseUrl = "https://dummyjson.com"
        this.error = ref('')
    }

    getJWT(){
        return this.jwt
    }

    getError(){
        return this.error
    }

    async login(username, password){
        try {
            const url = `${this.baseUrl}/auth/login`
            const res = await fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username, password
                    })
                }
            )

            const response = await res.json()

            if(res.status != 200){
                this.error = response.message
                return false
            }

            this.jwt = response.accessToken
            $cookies.set('auth', response.accessToken)
            $session.start()
            $session.set('auth', response.accessToken)
            console.log(response)
            return true
        } catch (error) {
            console.log(error)
            this.error = 'Error obtaining jwt'
            return false
        }
    }
}

export default BackendAuthService