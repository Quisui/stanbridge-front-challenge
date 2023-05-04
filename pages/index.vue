<template>
  <div>
    <div class="container h-100 mt-5 pt-5">
      <div class="row align-self-center">
        <div class="col text-center">
          <div class="card">
            <div class="card-body">
              <h1 class="text-success">Welcome to my challenge</h1>
              <h1>
                🥳
              </h1>
              <nuxt-link to="/courses">
                <h3 class="text-dark">
                  Click here to check courses
                </h3>
              </nuxt-link>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      text: '',
    }
  },
}
</script>
