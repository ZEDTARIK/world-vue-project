import { createStore } from 'vuex'
import EventService from '@/services/EventService.js'

export default createStore({
    state: {
        user: 'Zouhair ETTARAK',
        events: [],
        event: {},
    },
    getters: {},
    mutations: {
        ADD_EVENT(state, event) {
            state.events.push(event)
        },
        SET_EVENTS(state, events) {
            state.events = events
        },
        SET_EVENT(state, event) {
            state.event = event
        },
    },
    actions: {
        createEvent({ commit }, event) {
            EventService.postEvent(event)
                .then(() => {
                    commit('ADD_EVENT', event)
                })
                .catch((err) => {
                    console.error(err)
                })
        },
        fetchEvents({ commit }) {
            EventService.getEvents()
                .then((response) => {
                    commit('SET_EVENTS', response.data)
                })
                .catch((error) => {
                    console.log(error.message)
                })
        },
        fetchEvent({ commit, state }, id) {
            const eventExiste = state.events.find((e) => e.id === id)
            if (eventExiste) {
                commit('SET_EVENT', eventExiste)
            } else {
                EventService.getEvent(id)
                    .then((response) => {
                        commit('SET_EVENT', response.data)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        },
    },
    modules: {},
})