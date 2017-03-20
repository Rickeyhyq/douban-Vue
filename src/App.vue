<template>
  <div class="db-header">
    <header class="db-header-nav">
      <div class="db-nav">
        <a href="#">
          <h2>豆瓣</h2>
        </a>
        <nav>
          <ul>
            <li><a href="/movie" style="color: #2384E8;">电影</a></li>
            <li><a href="/book" style="color: #9F7860;">图书</a></li>
            <li><a href="/status" style="color: #E4A813;">广播</a></li>
            <li><a href="/group" style="color: #2AB8CC;">小组</a></li>
          </ul>
        </nav>
      </div>

    </header>
  </div>
</template>

<style lang="less" scoped>
  .db-header-nav {
    width: 100%;
    height: 47px;
    background-color: skyblue;
    position: fixed;
    z-index: 1000;
    top: 0;
    .db-nav {
      padding: 0 18px;
      border-bottom: 1px solid #f3f3f3;
      height: 47px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      h2 {
        color: #00b600;
        line-height: 47px;
      }
      nav {
        float: right;
        line-height: 47px;
        li {
          display: inline-block;
          margin: 0 5px;
        }
      }
    }
  }
</style>

<script>
</script>