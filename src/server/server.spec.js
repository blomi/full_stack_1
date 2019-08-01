import { addNewTask, updateTask } from "./server";

(async function myfunc() {
  await addNewTask({
    name: "my task",
    id: "12345"
  });

  await updateTask({
    id: "12345",
    name: "My task - updated!"
  });
})();
