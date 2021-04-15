export default {
	name: 'PreviewFileCustom-Component',
	props: {
		fileUrl: {
			required: true,
			type: String | null,
			default: null
		}
	},
	methods: {
		fileChanged(event) {
			this.$emit('fileChanged', event)
		}
	}
}