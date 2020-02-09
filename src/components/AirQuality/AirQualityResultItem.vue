<template>
  <div class="item">
    <p>Updated 6 weeks ago</p>
    <h2>Milton Keynes</h2>
    <p>in Milton Keynes, United Kingdom</p>
    <p><strong>Values: PM25: 9, SO2: 32, O3: 8, NO2: 43</strong></p>
    <button><span>Close</span></button>
  </div>
</template>

<style lang="scss" scoped>
  .item {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 15px 30px;
    position: relative;
    margin: 10px
  }

  h2 {
    color: #7738af;
  }

  button {
    position: absolute;
    top: 15px;
    right: 15px;
    height: 25px;
    width: 25px;
    background: red;
    border: none;
    cursor: pointer;

    span {
      //.visually-hidden
      position: absolute !important;
      clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
      clip: rect(1px, 1px, 1px, 1px);
      padding:0 !important;
      border:0 !important;
      height: 1px !important;
      width: 1px !important;
      overflow: hidden;
    }
  }
</style>