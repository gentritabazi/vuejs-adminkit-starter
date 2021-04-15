import getUrlExtensionMixin from '@/mixins/get-url-extension.js'

export default {
	name: 'PreviewFileAudio-Component',
	props: {
		fileUrl: {
			required: true,
			type: String | null,
			default: null
		}
	},
	data() {
		return {
			fileType: null,
			isPlaying: false
		}
	},
	mixins: [getUrlExtensionMixin],
	methods: {
		playAudio() {
			if (this.fileUrl) {
				const audio = new Audio(this.fileUrl)
				audio.play()
			}
		},
		fileChanged(event) {
			this.$emit('fileChanged', event)
		}
	}
}