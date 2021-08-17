<template>
<div class="recommend">
  <div v-for="item in recommends" class="recommend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <h4>{{item.title}}</h4>
    </a>
   </div>
</div>

</template>

<script>
export default {
    name:"RecommendView",
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
		
		}
}
</script>

<style scoped>
.recommend {
		display: flex;
		padding: 15px 0 20px 0;
		border-bottom: 8px solid #eee;
          
	}

	.recommend-item {
		flex: 1;
        text-align: center;
        justify-content:center;
        
	}

	.recommend-item img {
		width: 85%;
		margin-bottom: 10px;
        
	}

    .recommend-item h4 {
        font-weight: 400;
		font-size: 15px;
        
    }
</style>