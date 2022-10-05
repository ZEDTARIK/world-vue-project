import axios from 'axios'

const API_CLIENT = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    Headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return API_CLIENT.get('/events')
    },
    getEvent(id) {
        return API_CLIENT.get('/events/' + id)

    }
}