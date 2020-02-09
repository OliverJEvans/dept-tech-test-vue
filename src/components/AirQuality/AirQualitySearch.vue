<template>
  <div>
    <div class="search__wrapper search__wrapper--open">
      <div class="input__wrapper">
        <input type="search" class="input" placeholder="Enter city name..." />
      </div>
      <ul class="search__results">
        <li><button>Mace Head</button></li>
        <li><button>Manchester</button></li>
        <li><button>Market Harborough</button></li>
        <li><button>Middlesbrough</button></li>
        <li><button>Milton Keynes</button></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .input__wrapper {
    background: #ffffff;
    border: 2px solid #bebebe;
    border-radius: 8px;
    overflow: hidden;
  }

  .input {
    padding: 10px;
    border: 0;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
  }

  .search__wrapper {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    border: 1px solid #b7acd8;

    &--open {
      background: white;
      border-radius: 10px;
      overflow: hidden;
    }
  }

  .search__results {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: block;
      padding: 10px;

      &:hover {
        background: #f2f2f2;
      }
    }

    button {
      background: none;
      border: none;
    }
  }
</style>