<template>
  <div class="container">
    <h2>
      <slot name="header"></slot>
    </h2>
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: rgb(252, 247, 255);
  color: black;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

h2 {
  margin: 0;
  font-size: 2em;
}
</style>
