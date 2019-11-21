const express = require('express');
const helper = require('../../models/clientWorkoutsModel');
const classHelper = require('../../models/classModel');
const uuid = require("uuid/v4");


const router = express.Router();



// ------------ Coach Get All Clients for Workout ------------ //

router.get('/sessions/:id',  async (req, res) => {

  const { id } = req.params;

    try {
        let sessions = await helper.getAllClientsForWorkout(id);

        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).send(error);
    }
});


// --------- Get Client's Workouts ----------- //

router.get('/sessions/client/:id',  async (req, res) => {
    const { id } = req.params;
    try {
        let foundSession = await helper.getClientsWorkouts(id);

        res.status(200).json(foundSession);
    } catch (error) {
        res.status(500).send(error);
    }
});

// --------------- Client Add Workout to Account -------------- //

router.post('/sessions/client',  async (req, res) => {

  // const { id } = req.params;

    const sessionId = req.body;

    // const addWorkout = {...sessionId, client_id: id}

    try {
        const newSession = await helper.addClientToWorkout(sessionId);

        // const getClass = await classHelper.getClassById(newSession["workout_id"]);

        // let attendeeSize = getClass["attendee_size"];

        //Need to add 
        // const modifiedClass = await classHelper.updateClass({...getClass, attendee_size: attendeeSize + 1});

        res.status(201).json({message: "Congratulations you have been added to the workout!", data: newSession});
    } catch (error) {
        res.status(500).send(error);
    }
});


// ------------- Client Remove Workout from Account ------------- //

router.delete('/sessions/client/:id',  async (req, res) => {
    const { id } = req.params;

    const workoutId = req.body;

    try {
        let deletedSession = await helper.removeClientFromWorkout(id, workoutId);

        res.status(200).json({message: "You have been removed from the workout."});
    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = router;