<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <input
      type="file"
      accept="image/jpg,image/png,image/jpeg,image/gif"
      @change="handleChange"
    />
  </div>
</template>

<script>
import COS from 'cos-js-sdk-v5'
var cos = new COS({
  SecretId: 'AKIDXu9ByWqvlMipJhrUu64vXv4zf7KJI2a3',
  SecretKey: 'JPHuKXZQ6ctviDUVIqEQQEqDLE8rOiqn'
})
console.log(cos)
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    handleChange (e) {
      console.dir(e.target)
      cos.putObject({
        Bucket: 'jiangjian1-1313062302', /* 必须 */
        Region: 'ap-shanghai', /* 存储桶所在地域，必须字段 */
        Key: 'exampleobject', /* 必须 */
        StorageClass: 'STANDARD',
        Body: e.target.files[0], // 上传文件对象
        onProgress: function (progressData) {
          console.log(JSON.stringify(progressData))
        }
      }, function (err, data) {
        console.log(err || data)
        this.src = data.Location
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
