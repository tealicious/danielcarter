<template>
  <div id="app">
    <div class="board">
      <app-row v-for="(row, index) in rows" :key="index" :row="row"></app-row>
    </div>
    <app-log></app-log>
  </div>
</template>

<script>
import Row from "./components/Row.vue";
import Log from "./components/Log.vue";
const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
const rows = [];
for (let i = 8; i > 0; i--) {
  let row = [];
  for (let j = 0; j < columns.length; j++) {
    let square = {
      row: i,
      column: columns[j]
    };
    row.push(square);
  }
  rows.push(row);
}
export default {
  name: "app",
  data() {
    return {
      rows: rows
    };
  },
  components: {
    appRow: Row,
    appLog: Log
  }
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
  width: 100%;
  font-family: sans-serif;
  font-weight: bold;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  height: 100%;
  width: 100%;
  margin: auto;
  @media (orientation: portrait) {
    flex-direction: column;
  }
}
.log {
  margin: auto;
  background: #f5f5f5;
  padding-left: 3rem;
  height: calc(95vmin + 1rem);
  width: auto;
  @media (orientation: landscape) {
    overflow-y: auto;
    margin-left: 0;
    max-width: 220px;
    min-width: 220px;
  }
  @media (orientation: portrait) {
    height: auto;
    margin: 0;
    min-height: calc(100vh - 100vw);
    > div {
      height: 100%;
    }
  }
}
.board {
  @media (orientation: landscape) {
    margin-right: 0;
  }
  @media (orientation: portrait) {
    margin-top: 1rem;
    margin-bottom: 0;
  }
  margin: auto;
  height: 95vmin;
  min-height: 95vmin;
  width: 95vmin;
  min-width: 95vmin;
  padding: 0.5rem;
  background: black;
  .row {
    width: 100%;
    height: calc(95vmin / 8);
    display: flex;
    &:nth-of-type(even) {
      div:nth-of-type(odd) {
        background: black;
        color: black;
      }
      div:nth-of-type(even) {
        background: white;
        color: white;
      }
    }
    &:nth-of-type(odd) {
      div:nth-of-type(even) {
        background: black;
        color: black;
      }
      div:nth-of-type(odd) {
        background: white;
        color: white;
      }
    }
    > div {
      flex: 1;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        z-index: 1;
        text-transform: uppercase;
        margin: 0;
      }
      &:before {
        content: "";
        height: 50%;
        width: 50%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        position: absolute;
        border-radius: 100%;
        background: rgb(116, 168, 221);
        opacity: 0;
        transition: all 0.2s ease;
      }
      &.focus:before {
        opacity: 1;
      }
    }
  }
}
</style>
