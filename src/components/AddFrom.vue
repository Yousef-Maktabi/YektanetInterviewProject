<template>
  <div class="form-container">
    <input type="text" v-model="title" class="form-input" />

    <CustomSelect
      :options="priorityOptions"
      :value="selectedPriority"
      @input="updatePriotiry"
    />
    <CustomSelect
      :options="colorOptions"
      :value="selectedColor"
      @input="updateColor"
    />

    <button @click="addTodo" class="form-button">Add</button>
  </div>
</template>
<script>
import CustomSelect from "./common/CustomSelect.vue";
export default {
  components: {
    CustomSelect,
  },
  data() {
    return {
      title: "",
      selectedPriority: 2,
      selectedColor: "blue",
      priorityOptions: [
        {
          id: 1,
          text: "Important",
        },
        {
          id: 2,
          text: "Medium",
        },
        {
          id: 3,
          text: "Easy",
        },
      ],
      colorOptions: [
        { id: "blue", text: "blue" },
        { id: "green", text: "green" },
        { id: "red", text: "red" },
        { id: "yellow", text: "yellow" },
      ],
    };
  },

  methods: {
    addTodo() {
      if (this.title.trim() && this.title != "") {
        this.$emit("addTodo", {
          title: this.title,
          priority: this.selectedPriority,
          color: this.selectedColor,
        });
        this.title = "";
        this.selectedPriority = 2;
      } else {
        alert("Please Enter A Title");
      }
    },
    updatePriotiry(newValue) {
      this.selectedPriority = newValue;
    },

    updateColor(newValue) {
      this.selectedColor = newValue;
    },
  },
};
</script>
<style scoped>
.form-container {
  margin: 16px 0;
}

.form-input {
  padding: 8px 16px;
  border: 0;
  margin: 0 8px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.form-button {
  all: unset;
  background-color: green;
  color: #fff;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
}
</style>
