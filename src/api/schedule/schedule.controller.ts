import { Request, Response } from "express";

export class ScheduleController {
  public async finish(request: Request, response: Response) {
    try {
      const { slotId, userId } = request.body;

      if (!slotId || !userId)
        throw new Error("Dados de Slot | Usuario Invalidos");

      return response.json({
        message: "Agendamento Realizado com sucesso",
      });
    } catch (error: any) {
      return response.status(400).json({
        error: error.message,
      });
    }
  }
}
