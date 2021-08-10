<template>
  <div class="container">
    <div class="card mb-5">
      <h3 v-if="edit" class="card-header">Edit Task</h3>
      <h3 v-else class="card-header">Add Task</h3>

      <b-form
        class="card-body"
        @submit.prevent="edit ? editTask() : saveNewTask()"
      >
        <b-form-input
          type="text"
          id="task-title"
          v-model="task.title"
          placeholder="Enter task"
        ></b-form-input>
        <br />
        <button v-if="edit" class="btn text-white btn-warning float-right">
          Edit
        </button>
        <button v-else class="btn btn-success float-right">Add</button>
      </b-form>
    </div>

    <div>
      <table class="w-100 mb-3">
        <tr>
          <td>
            <h2>To-do(s)</h2>
          </td>
          <td class="float-right">
            <button class="btn btn-success" @click="showAddForm()">
              <b-icon-plus></b-icon-plus>
            </button>
          </td>
        </tr>
      </table>
      <b-list-group>
        <b-list-group-item v-for="(task, index) in tasks" :key="index">
          {{ task.title }}
          <br>
          <span class="text-muted">Created date: {{ task.createdAt | formatDate }}</span>
          <div class="float-right">
            <button
              class="btn btn-warning text-white"
              @click="showEditForm(task._id)"
            >
              <b-icon-pen></b-icon-pen>
            </button>
            <button class="btn btn-danger" @click="deleteTask(task._id)">
              <b-icon-trash></b-icon-trash>
            </button>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";
import { Tasks } from "../../db/Tasks";
export default {
  data() {
    return {
      task: {
        title: "",
        createdAt: "",
        userId: "",
      },
      edit: false,
    };
  },
  meteor: {
    $subscribe: {
      tasks: [],
    },
    tasks() {
      return Tasks.find({}).fetch();
    },
  },
  // created() {
  //   if (!Meteor.userId()) {
  //     this.$router.push("/login");
  //   }
  // },
  methods: {
    saveNewTask() {
      var payload = { ...this.task, createdAt: new Date(), userId: Meteor.userId() };
      Meteor.call("createTask", payload, (error) => {
        window.scrollTo(0, 0);
        if (error) {
          this.flashMessage.error({
            title: "Attempt failed",
            message: error.reason,
            y: 70,
            x: 10,
          });
        } else {
          this.flashMessage.success({
            title: "Task added successfully",
            y: 70,
            x: 10,
          });
          this.task = {
            title: "",
          };
        }
      });
    },

    deleteTask(id) {
      Meteor.call("deleteTask", id, (error) => {
        window.scrollTo(0, 0);
        if (error) {
          this.flashMessage.error({
            title: "Attempt failed",
            message: error.reason,
            y: 70,
            x: 10,
          });
        } else {
          this.flashMessage.success({
            title: "Task deleted successfully",
            y: 70,
            x: 10,
          });
        }
      });
    },

    showEditForm(id) {
      this.edit = true;
      let taskWithGivenId = this.tasks.find((task) => task._id == id);
      this.task = { ...taskWithGivenId };
    },

    showAddForm() {
      this.edit = false;
      this.task = { title: "" };
    },

    editTask() {
      Meteor.call("editTask", this.task, (error) => {
        window.scrollTo(0, 0);
        if (error) {
          this.flashMessage.error({
            title: "Attempt failed",
            message: error.reason,
            y: 70,
            x: 10,
          });
        } else {
          this.flashMessage.success({
            title: "Task edited successfully",
            y: 70,
            x: 10,
          });
        }
      });
    },
  },
};
</script>
