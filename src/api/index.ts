import express from 'express'
import { SlotController } from './slot/slot.controller';
import { ScheduleController } from './schedule/schedule.controller';
const app = express();

const slotController = new SlotController();
const scheduleController = new ScheduleController()

app.get('/slot', slotController.searchSlot.bind(slotController))
app.post('/schedule', scheduleController.finish.bind(scheduleController))

app.listen('3000', () => {
    console.log('App Is running on port 3000')
})