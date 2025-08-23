import * as Yup from "yup";
import { Priority } from "../types/interface/TaskInterface";

export const TaskSchema = Yup.object().shape({
  title: Yup.string()
    .required("El título es obligatorio")
    .min(3, "El título debe tener al menos 3 caracteres"),
  description: Yup.string().required("La descripción es obligatoria").max(300, "La descripción no puede superar 300 caracteres"),
  dueDate: Yup.date()
    .nullable()
    .min(new Date(new Date().setHours(0,0,0,0)), "La fecha no puede ser pasada"),
  tags: Yup.array()
    .of(Yup.string())
    .max(10, "Solo puedes agregar maximo 10 etiquetas"),
  priority: Yup.mixed<Priority>()
    .oneOf(["alto", "medio", "bajo"])
    .required("La prioridad es obligatoria"),
});
