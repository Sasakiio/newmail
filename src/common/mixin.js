//混入
import BackTop from 'components/content/backTop/BackTop'
export const mixinBackTop = {
	components: {
		BackTop,
	},
	data() {
		return {
			isShowBackTop: false,
		}
	},
	methods: {
		backTop() {
			this.$refs.scroll.scrollTo(0, 0, 300);
		},
	}
}