<template>
    <b-table :class="tableClass" v-bind="$attrs" :busy.sync="isBusy" :items="myProvider" :fields="fields">
      <template #cell(actions)="row">
        <BaseCheckBox
          v-model="row.item.pivot.present"
          :checked-prop="row.item.pivot.present === 0 ? false : true"
          :check-name="row.item.first_name" @change="changePresentStatus(row.item)">
          {{ row.item.pivot.present ? 'Present' : 'Absent' }}
        </BaseCheckBox>
      </template>
      <template #table-caption>
        <h6 class="feature-title mx-auto"> <b>Course</b>: {{ courseName }}</h6>
        <h6 class="feature-title mx-auto"> <b>Instructor</b>: {{ instructorName }}</h6>
      </template>
    </b-table>
</template>

<script>
export default {
  props: {
    endPointUrl: {
      type: String,
      required: true,
    },
    dataRoute: {
      type: String,
      required: true,
    },
    tableClass: {
      type: String,
      default: 'table',
    },
    currentPage: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    extraParams: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      isBusy: false,
      instructorName: '',
      courseName: '',
      fields: [
        { key: 'id', label: 'Student ID', sortable: false },
        {
          key: 'first_name',
          label: 'First Name',
          sortable: false,
          class: 'text-left',
        },
        {
          key: 'last_name',
          label: 'Last Name',
          sortable: false,
          class: 'text-left',
        },
        { key: 'email', label: 'Email', sortable: false, class: 'text-left' },
        { key: 'actions', label: 'Actions' },
      ],
    }
  },
  methods: {
    async myProvider(ctx) {
      this.isBusy = true
      try {
        let url = `${this.endPointUrl}?page=${ctx.currentPage}&perPage=${ctx.perPage}`
        url = this.extraParams !== '' ? url+this.extraParams: url
        const { data, fields = [] } = await this.$axios.get(url)
        // const items = modularData[this.dataRoute] // couldn't make it more module
        const items = data.data[0].students
        this.instructorName = data.data[0].instructor.name
        this.courseName = data.data[0].name
        this.fields = fields.length > 0 ? fields : this.fields
        this.isBusy = false
        return items || []
      } catch (error) {
        this.isBusy = false
        alert(error.message)
        return []
      }
    },
    async changePresentStatus({ pivot }) {
      try {
        const response = await this.$axios.put(
          `${this.endPointUrl}/${pivot.course_id}`,
          {
            course_id: pivot.course_id,
            student_id: pivot.student_id,
            present: pivot.present,
          }
        )

        alert(`${response.data.message}`)
      } catch (error) {
        alert(`${error.message}`)
      }
    },
  },
}
</script>
