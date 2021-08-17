<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton :is-checked="itemInfo.checked" @click.native="checkClick"/>
    </div>

    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片">
    </div>

    <div class="item-info">
    <div class="item-title">{{itemInfo.title}}</div>
    <div class="item-desc">{{itemInfo.desc}}</div>
    <div class="info-bottom">
    <div class="item-price-left">{{itemInfo.price}}</div>
        

    <div class="item-price-right">
			<button @click="sub" class="button" :disabled="isAble"> - </button>
			<div class="item-count-right">{{itemInfo.count}}</div>
			<button @click="add" class="button"> + </button>
		</div>

      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: "CartListItem",
  components: {
      CheckButton
  },
  props: {
      itemInfo: {
          type: Object,
          default() {
              return {}
      }
      }
  },
  data() {
			return {
			}
	},
  computed: {
			isAble() {
				return this.itemInfo.count <= 1
			}
	},
  methods: {
    checkClick() {
      this.itemInfo.checked = !this.itemInfo.checked
    },
    sub() {
				this.itemInfo.count -= 1
		},
		add() {
				this.itemInfo.count += 1
		}
  }
}
</script>

<style scoped>
#shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
}

.item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.item-img {
    padding: 5px;
}

.item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
}

.item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
}

.item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
}

.info-bottom {
    margin-top: 10px;
    margin-right: 10px;
		line-height: 22px;

    bottom: 10px;
    left: 10px;
    right: 10px;
    
    position: absolute;
    display: flex;
		justify-content: space-between;
    
}

.info-bottom .item-price-left {
    color: orangered;
}

.item-price-left::before {
		content: "￥";
}
 
.item-price-right {
		width: 85px;
		height: 24px;
    display: flex;
    font-size: 16px;

	}

.button{
    background-color: #eee;
    font-weight: bold;
    border: 0;
    width: 1.5rem;
  }

.item-count-right{
    width: 35px;
    text-align: center;
    background-color: #f5f4f4;
    border-radius: 3px;
}


</style>