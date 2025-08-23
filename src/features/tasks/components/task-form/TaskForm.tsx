import { Check, X, Calendar } from "lucide-react";
import { format } from "date-fns";
import PrioritySelector from "../priority-selector/PrioritySelector";
import TagsInput from "../tags-input/TagsInput";
import { ErrorMessage, Form, Formik } from "formik";
import { useState } from "react";
import {  Task } from "../../types/interface/TaskInterface";
import Button from "../../../../shared/components/ui/button/Button";
import { TaskSchema } from "../../schemas/TaskSchema";
import { TextInput } from "../../../../shared/components/ui/text-input/TextInput";
import { TextArea } from "../../../../shared/components/ui/text-area/TextArea";
import CustomCalendar from "../../../../utility/CustomCalendar";
import { Priority } from "../../types/Types";


interface TaskFormProps {
  show: boolean;
  onClose: () => void;
  addTask: (
    title: string,
    description?: string,
    priority?: Priority,
    dueDate?: string,
    tags?: string[]
  ) => void;
  updateTask: (
    id: string,
    title: string,
    description?: string,
    priority?: Priority,
    dueDate?: string,
    tags?: string[]
  ) => void;
  editingTask?: Task | null;
}

export default function TaskFormModal({
  show,
  onClose,
  addTask,
  updateTask,
  editingTask,
}: TaskFormProps) {
  const [showCalendar, setShowCalendar] = useState(false);

  const initialValues = {
    title: editingTask?.title || "",
    description: editingTask?.description || "",
    priority: editingTask?.priority || "medio",
    dueDate: editingTask?.dueDate ? new Date(editingTask.dueDate) : null,
    tags: editingTask?.tags || [],
  };

  if (!show) return null;

  return (
    <div className="fixed px-4 inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl py-10 px-5 relative pt-10 overflow-y-auto">
        <Button variant="close" onClick={onClose}>
          <X size={20} />
        </Button>

        <Formik
          initialValues={initialValues}
          validationSchema={TaskSchema}
          onSubmit={(values) => {
            const dueDateString = values.dueDate
              ? format(values.dueDate, "yyyy-MM-dd")
              : undefined;

            if (editingTask) {
              updateTask(
                editingTask.id,
                values.title,
                values.description,
                values.priority,
                dueDateString,
                values.tags
              );
            } else {
              addTask(
                values.title,
                values.description,
                values.priority,
                dueDateString,
                values.tags
              );
            }

            onClose();
          }}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form className="flex flex-col gap-3">
              <TextInput
                variant={errors.title && touched.title ? "error" : "primary"}
                placeholder="Agrega el titulo a tu tarea"
                value={values.title}
                onChange={(e) => setFieldValue("title", e.target.value)}
              />
              <ErrorMessage
                name="title"
                component="p"
                className="text-red-500 text-xs"
              />

              <TextArea
                variant={
                  errors.description && touched.description
                    ? "error"
                    : "primary"
                }
                placeholder="Hoy tengo grandes cosas para mi...."
                value={values.description}
                onChange={(e) => setFieldValue("description", e.target.value)}
                rows={3}
              />
              <ErrorMessage
                name="description"
                component="p"
                className="text-red-500 text-xs"
              />

              <PrioritySelector
                priority={values.priority}
                onChange={(value) => setFieldValue("priority", value)}
              />
              <ErrorMessage
                name="priority"
                component="p"
                className="text-red-500 text-xs"
              />

              <div className="relative">
                <label className="font-medium text-sm mb-1 block">
                  Fecha límite:
                </label>
                <div
                  className="flex items-center border rounded-lg px-3 py-2 cursor-pointer hover:border-gray-400 transition-colors"
                  onClick={() => setShowCalendar(!showCalendar)}
                >
                  <Calendar size={18} className="text-gray-500 mr-2" />
                  <span className="flex-1">
                    {values.dueDate
                      ? format(values.dueDate, "yyyy-MM-dd")
                      : "Seleccionar fecha"}
                  </span>
                </div>

                <CustomCalendar
                  selectedDate={values.dueDate}
                  setSelectedDate={(date) => setFieldValue("dueDate", date)}
                  showCalendar={showCalendar}
                  setShowCalendar={setShowCalendar}
                  navigateMonth={() => {}}
                />
              </div>
              <ErrorMessage
                name="dueDate"
                component="p"
                className="text-red-500 text-xs"
              />

              <TagsInput
                tags={values.tags}
                onAdd={(tag) => setFieldValue("tags", [...values.tags, tag])}
                onRemove={(tag) =>
                  setFieldValue(
                    "tags",
                    values.tags.filter((t) => t !== tag)
                  )
                }
              />
              <ErrorMessage
                name="tags"
                component="p"
                className="text-red-500 text-xs"
              />

              <Button type="submit" variant="success">
                <Check size={18} /> {editingTask ? "ACTUALIZAR" : "AGREGAR"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
