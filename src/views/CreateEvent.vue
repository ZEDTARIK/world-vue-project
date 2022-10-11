<template>
    <h1>Create an event</h1>
    
    <div class="form-container">
    
      <form @submit.prevent="onSubmit">
        <label>Select a category: </label>
        <select v-model="event.category">
          <option
            v-for="option in categories"
            :value="option"
            :key="option"
            :selected="option === event.category"
          >{{ option }}</option>
        </select>
    
        <h3>Name & describe your event</h3>
    
        <label>Title</label>
        <input
          v-model="event.title"
          type="text"
          placeholder="Title"
        >
        <br />
        <br />
        <label>Description</label>
        <input
          v-model="event.description"
          type="text"
          placeholder="Description"
        />
    
        <h3>Where is your event?</h3>
   
        <label>Location</label>
        <input
          v-model="event.location"
          type="text"
          placeholder="Location"
        />
        <br />
        <br />
        <h3>When is your event?</h3>
        <label>Date</label>
        <input
          v-model="event.date"
          type="text"
          placeholder="Date"
        />
        <br />
        <br />
        <label>Time</label>
        <input
          v-model="event.time"
          type="text"
          placeholder="Time"
        />
    
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    
    </div>
    </template>
    
    <script>
    import {v4 as uuid4 } from 'uuid'

    export default {
        nama:'EventCreate',
      data () {
        return {
          categories: [
            'sustainability',
            'nature',
            'animal welfare',
            'housing',
            'education',
            'food',
            'community'
          ],
          event: {
            id: '',
            category: '',
            title: '',
            description: '',
            location: '',
            date: '',
            time: '',
            organizer: ''
          }
        }
      },
      methods: {
        onSubmit(){
            const event = {
                ...this.event,
                id: uuid4(),
                organizer: this.$store.state.user
            };
            
            console.log("Event ", event);
        }
      }
    }
    </script>