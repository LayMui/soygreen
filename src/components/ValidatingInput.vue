<template>
  <div class="mb-3">
    <input v-model="model"
      :type="type"
      :name="name"
      v-validate.initial="validate"
      data-vv-as=" "
      :data-vv-name="name"
      :placeholder="placeholder"
      class="form-control"
      :class="customClasses">

    <div v-if="displayedError" class="small text-danger">
      {{ displayedError }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String || Number
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String
    },
    validate: {
      type: String || Object
    },
    placeholder: {
      type: String
    }
  },
  data () {
    return {
      model: this.value
    }
  },
  watch: {
    value () {
      this.model = this.value
    },
    model () {
      this.$emit('input', this.model)
    }
  },
  computed: {
    displayedError () {
      const errors = this.errors;
      if (!errors || !errors.items || !errors.items.length) return null;
      const field = this.fields[this.name];
      if (!field || !field.touched) return null;
      const hasError = errors.items.find(item => item.field === this.name);
      if (hasError) return hasError.msg;
      return null;
    },
    customClasses () {
      const field = this.fields[this.name];
      if (!field || !field.touched) return null;

      const classes = [];
      if (field.valid) classes.push('border-success');
      else classes.push('border-danger');
      return classes;
    },
    showError () {
      const field = this.fields[this.name];
      if (!field) return false;
      return field.touched && !field.valid;
    }
  }
}
</script>
