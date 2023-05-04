<template>
  <div class="container p-2 mb-3">
    <div class="card shadow-sm">
      <div class="card-body">
        <div class="row">
          <div class="col text-center">
            <h2>For now I'm paginating the courses, just for example proposes</h2>
          </div>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-between text-right mt-2">
            <BaseButton class="btn-sm w-25" @click="refreshTable">
              Reload All 👾
            </BaseButton>
            <BaseCheckBox
              v-model="showPresentAbsent"
              class="align-self-center"
              :checked-prop="showPresentAbsent === 0 ? false : true"
              :check-name="'present-absent'" @change="changePresentAbsentApiCall"
            >
              {{  showPresentAbsent ? 'Present' : 'Absent' }}
            </BaseCheckBox>
          </div>
        </div>
        <div class="row">
          <div v-if="!refresh" class="col text-center">
            <BaseTable
              :end-point-url="endpointUrl"
              data-position="0"
              data-route="[0].students"
              head-variant="light"
              :outlined="true"
              :hover="true"
              :no-border-collapse="true"
              :current-page="currentPage"
              :per-page="perPage"
              :extra-params="extraParams"
              :show-empty="true"
              caption-top
            />
          </div>
        </div>
        <div class="row">
          <b-col class="text-center">
            <b-pagination
              v-model="currentPage"
              :per-page="perPage"
              align="fill"
              size="sm"
              class="my-0"
            ></b-pagination>
          </b-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      perPage: 5,
      showPresentAbsent: true,
      refresh: false,
      endpointUrl: '/api/courses',
      extraParams: '',
    }
  },
  created() {
    this.refresh = false
  },
  methods: {
    changePresentAbsentApiCall(event) {
      if (this.showPresentAbsent) {
        this.extraParams = '&present=true'
        this.refresh = true
        setTimeout(() => {
          this.refresh = false
        }, 200)
      } else {
        this.extraParams = '&present=false'
        this.refresh = true
        setTimeout(() => {
          this.refresh = false
        }, 200)
      }
    },
    refreshTable() {
      this.extraParams = ''
      this.refresh = true
      setTimeout(() => {
        this.refresh = false
      }, 200)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
