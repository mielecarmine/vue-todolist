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
    };
  },
  methods: {},

  mounted() {},
}).mount("#app");
