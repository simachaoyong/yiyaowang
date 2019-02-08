<template>
  <div class="Search">
    <div class="com">
      <div class="img">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABFCAMAAACfde9RAAABSlBMVEUAAAAnLlcmLlYnMFYmLVYrL1omLVYnLlgsMVk7PnNkVYEmLVYmLVcmLVYtNGAmLlYqMVvIJi0mLVYnLlgmLVYmLVcnLlcmLVY1NWUmLVYmLVYnLVYnLlcoLlcoLlcnLVcoL1nIJi0mLVYnLlYnLVcnLVcoLlfIJi3IJi0nLVcmLVcmLlcoLlcoLlcnMFcwN2MmLVfHJi7IJi0nLVfIJy0nLlbJJy0nLlcqL1guMF8mLlbIJi3IJi7IJy0nLVbIJi0mLlbIJi0mLlcmLVcnLlbIJy7JJy4nLljJKC/KKC/LKDDKKjLOLDHpPEsmLVYnLVYmLVfIJi3IJi4mLVfIJy7JKC4qLljLKi8pL1nNLTLUMTHeQ0PIJi3IJi3IJi7IJy7JJy7JJi3JJy7JKC4oL1nJKTEnLVbIJi3IJi7NMjjJKC97L0ImLVbHJi1HbBZ1AAAAbHRSTlMA2eQ66SL2Yx8EA/LW0RCyGaSeWfnd2sEJ4rykfHRnUCfmkomGgkvx0beva0Y/NA39/NjNmo6DQjAV/Pn27cWyrKqnmpaUaV9MNx8bEQT77Mm7fm9SPzcvLhUKB97GjXl0cGJbPSfnysENRhuILn6vAAAGKUlEQVRo3szX3U8aQRQF8INQUqSi0KqkrVRirGisEaw0KX4EiVZEmtq0sdCmGj8imnv//1d172KGncVlI2bm93Y22ezDzp05gyDNUdinVeWNE9hmP893WrBK+zM7DmCTeonFIezR/FlkUbRo0R90uKsAa5wv8IM0LHFYZYUtG8TvPKv2YYO//7lXAxa4LHCvBVhgb4M9OjCutc2aXRglR6BuD2a1d9lPHUYdl9jXNUw6rbCvfzCoccR9bMOcX5vcTxlGSN3r7xymlKvVtKiw5hK9Epk43cvAKxqhe8k/GLKm/i8rTfR6T+IHPFIxEh8wZHXWFNQPr0Sjy3ES81GPGonYJ8kpDEuZNWl0TSytUhhTcGVnxl9FIusSUpHHbdUu4HXFmlO4XsYonDGIiSknzklaoUDvEp5SWmTNDVxbFNIXOEanJeYkvqZgO54Cz7oGRI5CykBckFjuTkwAfWjSrNmEa4TCmc5CzJGYlVijAbyFKs+aI7jGKYQ3YzMJuBbJsZqVuDPyiK/d96E45ufogJPkmEQQdazURX/CujM8UeI7ORYxiCUS6j2+8xwdcJbEOgaxRo6k8ui6wro2gnwjEX8BPx9J5DCIJDnW1HLDuhI0/U7Cefi6bdVsn5IKojB+FLxy4YIkioChCaaOKWT2AuVoL6aNTmaSlvkyOtPoVLv//9eUfeG5u3vlNvX7egV295x9znPO9RETLFMM8kzwmnq43M0b6scok3xK9ggm9SpqTJCnGLxgglnqccptDuzmaGNmbeH9DoFYOhn1lT5gtgSimBfolqJ8NNo0j3YYumnu4Is5M9mQdkfeUD+Irmwkfxtt0EPMw/tmQaCaHfFLjrg94Mk1KEdkKcFqkx4LLbKFUcpr9WyToGJH3NVjrKUpBDSS87dx9DMsmhG6YYgJ7ofFtRiuHFUSlOVhwkGscZtrl0vE1mOfRZOkG5aYoGBUyK6xnmaSgLo0wRJJfnEHTwn5uGDZ1vQQkOoyVFVChkncIkED5cS/YpJE6OEiac65g0tCLmPOl7KsS5lueMYEJZKU8XzqkPTgxeqkcXb6h4ScWpbHzQC4kxFYIuE6H2BlYpkm3FOoCDvcxfEdduyMIijJC1bTQoUGKhG6AxMMleot+FrBFncwQz2OxhdTW/N2gJu1QX3vwiIwBfpQI80gpvU2k6xD9FmKFBvcwWc4ggHGMtXdjV4Mf4oqtspMP1UATUwxwSNSNJPSvdItVVSTtCdlLK0v2Tx3cE4CHfZs48sMDOMwCnOkmGWCNhS5Jetpo5tbniqoedC4gBSHHLE94AMZjMe1308xs6aMUgNZntTPMSwpD/7eX9U9BXqgEehbXXwlRYUpytOHTzhfEY/yGSWdOcslT8C982RYdFZ7KRkC3FTHcowL3MHKCRoOzWLq+cwFHAx0UCjVm8oEo2wnUJkae0wwKDa1aSbiMXfxBCw2koXktm3bERN0lD7g83043FIARR3zdMnuW90esMyQdRK0kyph22ii8cu9sHMt4HnUmD5Xgfq6IVso3a+gPIYkIE+gDhsyngd92JYqI7c34GNiFEvSfjNDH9LuEeUHI4uNzc2B5kjQjmJOHslGHzKxqSLwMmFEvwiGxcUOKbBDv8oZa83kCRmUkUZ9yIXu7USoB5iF6Ic7ygMOuCxCCyZbBUOfggQhOfQEdS1huJIGWq2sD0IbLlRnHMFaDB+RvKO7SaDhfK2OB/c2ibdl7Jt13Tsw1nJ7QHtdmz5Fg3Gbg9r7DiV5NSfWC6sXBPBJ6FtNtghpTRa98tv+TWgNb7kHvy1sWGYyB+stdkjjj6ETw77V9oB/TwUccx72H3tY8dKPGGv90z9lJGGKsAz778u04ZC+/s9XUHMobsOsy55PMagak8AL7uQAqm99XBhhc1TlL28Ph6hnMG6zUtQpDqNGR/mZu1jZJYIJNlLWpTrJIgjSoA8jFId17CCJvr+KfDEGE2ykAIMMC3ztk4X99+WT0jjBB+7injmhsmN4tNdvgJ0RjjZWxrelGUnBXMFk7eCENFcsRDYH8uck+0Mec7zDwuoQtCL71vmF810CcPS9V3xYAqtg8zhZmUrDJNTbL1As2uNsrNLRX/4HwMEsmD+stZMAAAAASUVORK5CYII="
          alt
        >
      </div>
      <span class="city">广州</span>
      <div class="searchbar" @click="goto">
        <a href="javascript:;"></a>
        <i class="iconfont icon-fangdajing"></i>
        <span class="info">输入产品名称</span>
      </div>
      <div class="advisory">
        <div class="icon">
          <i class="iconfont icon-zixun"></i>
        </div>
        <span class="info">咨询药师</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goto(){
      this.$router.push({path:'/search'})
    }
  }
};
</script>

<style lang="less" scoped>
.Search {
  position: fixed;
  z-index: 999;
  top: 1.1rem;
  left: 0;
  width: 100%;
  .com {
    margin-top: 0.26666667rem;
    height: 0.746667rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img {
      width: 1.333333rem;
      height: 0.64rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 0.9rem;
        height: 0.4rem;
      }
    }
    .city {
      width: 1.2rem;
      line-height: 0.53333333rem;
      font-size: 0.37333333rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: white;
    }
    .searchbar {
      height: 0.746667rem;
      line-height: 0.74666667rem;
      font-size: 0.32rem;
      padding: 0 0.26666667rem;
      border-radius: 10px;
      color: #898989;
      background-color: #ecebeb;
      flex: 1;
    
    }
    .advisory {
        color: white;
      margin-left: 0.266667rem;
      width: 1.493333rem;
      font-size: 0.3133333rem;
      display: flex;

      align-items: center;
      .icon {
        width: 0.2rem;
      }
      .info {
        margin-left: 0.466667rem;
        width: 0.7rem;
      }
    }
  }
}
</style>
