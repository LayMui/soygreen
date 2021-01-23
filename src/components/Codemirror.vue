<template>
  <Codemirror v-model="model"
    @keydown.native.stop
    :options="options"
    width="auto"
    :style="customStyle" />
</template>

<script>
import { codemirror } from 'vue-codemirror'

// language
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/mode/css/css.js'

import 'codemirror/addon/selection/active-line.js'
import 'codemirror/addon/edit/closebrackets.js'

export default {
  props: {
    value: {
      type: String
    },
    lang: {
      type: String,
      default: 'javascript'
    },
    height: {
      type: Number
    }
  },
  data() {
    return {
      model: this.value || '',
      options: {
        tabSize: 2,
        styleActiveLine: true,
        lineNumbers: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        line: true,
        mode: `text/${this.lang}`,
        theme: 'oceanic-next'
      }
    }
  },
  methods: {
    resetLang() {
      this.options.mode = `text/${this.lang}`
    }
  },
  computed: {
    customStyle() {
      const style = {}
      if (this.height) style.height = this.height + 'px'
      return style
    }
  },
  watch: {
    value() {
      this.model = this.value || ''
    },
    model() {
      this.$emit('input', this.model)
    },
    lang() {
      this.resetLang()
    }
  },
  components: {
    Codemirror: codemirror
  }
}
</script>
