import { randomUUID } from 'node:crypto'

class SlotSearcher {
  public async searchByProfessionalId(professionalId: number) {
    const slots: { id: string; start: Date; end: Date }[] = [];
    let hour = 5;

    while (hour < 15) {
      const date = new Date();
      date.setHours(hour, 0, 0, 0);
      const end_first = new Date();
      end_first.setHours(hour, 30, 0, 0);

      const end_final = new Date();
      end_final.setHours(hour + 1, 0, 0, 0);

      const slot = {
        id: randomUUID(),
        start: date,
        end: end_first,
      };

      const second_slot = {
        id: randomUUID(),
        start: end_first,
        end: end_final,
      };

      hour++;
      slots.push(slot);
      slots.push(second_slot);
    }

    return slots;
  }
}

export default new SlotSearcher();
