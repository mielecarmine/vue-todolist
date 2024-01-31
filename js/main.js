const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      tasks: [
        {
          name: "Task 1",
          done: true,
        },
        {
          name: "Task 2",
          done: false,
        },
        {
          name: "Task 3",
          done: true,
        },
        {
          name: "Task 4",
          done: false,
        },
        {
          name: "Task 5",
          done: false,
        },
        {
          name: "Task 6",
          done: true,
        },
      ],

      newTask: {
        name: "",
        done: false,
      },

      message: {
        show: false,
        text: "",
        type: "",
      },
    };
  },
  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1);
    },

    addNewTask() {
      const newTaskCopy = { ...this.newTask };

      if (newTaskCopy.name.length < 4) {
        this.generateMessage("Inserisci almeno 5 caratteri", "danger");
        this.newTask.name = "";
      } else {
        this.tasks.push(newTaskCopy);
        this.newTask.name = "";
        this.generateMessage("Task creata con successo", "success");
      }
    },

    generateMessage(text, type) {
      const acceptedTypes = ["danger", "success", "info", "warning"];

      if (!acceptedTypes.includes(type)) {
        type = "info";
      }

      this.message.show = true;
      this.message.text = text;
      this.message.type = type;
    },

    doneTask(index) {
      this.tasks[index].done = true;
    },

    refreshTask(index) {
      this.tasks[index].done = false;
    },
  },

  mounted() {},
}).mount("#app");
