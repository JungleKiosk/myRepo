<template>
    <div class="coding-example">
      <h2>Coding Playground</h2>
      <div class="code-editor">
        <textarea v-model="code" rows="10" cols="50" placeholder="Enter JavaScript code"></textarea>
        <button @click="runCode">Run Code</button>
      </div>
      <div class="output">
        <h3>Output:</h3>
        <div v-for="(number, index) in numbers" :key="index">{{ number }}</div>
      </div>
      <div class="code-preview">
        <h3>Code Preview:</h3>
        <pre>{{ code }}</pre>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const code = ref(`for (let i = 0; i < 10; i++) {
      numbers.value.push(Math.random());
  }`);
  
  const numbers = ref([]);
  
  function runCode() {
      try {
          // Clear previous output
          numbers.value = [];
  
          // Evaluate the entered code
          eval(code.value);
  
          // Generate and display 10 random numbers
        for (let i = 0; i < 0; i++) {
              numbers.value.push(Math.random());
          }
      } catch (error) {
          console.error(error);
          alert('An error occurred while running the code. Check the console for details.');
      }
  }
  </script>
  
  <style scoped>
  /* ... rest of the styles ... */
  
  .code-preview {
      border-top: 1px solid #ccc;
      padding-top: 10px;
  }
  
  pre {
      background-color: #f5f5f5;
      padding: 10px;
      border-radius: 5px;
      white-space: pre-wrap;
  }
  </style>
  