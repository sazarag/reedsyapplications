<template>
  <div class="q4">
    
       <div class="" v-for='item in books' :value='item' :key='item.slug'>
                        <div class="column is-6">
                            <div class="column-title">
                              <span>Title</span>
                            </div>
                            <div class="desc">
                              <span>{{item.title}}</span>
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="column-title">
                              <span>Synopsis</span>
                            </div>
                            <div class="desc">
                              <span>{{item.synopsis}}</span>
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="column-title">
                              <span>Author</span>
                            </div>
                            <div class="desc">
                              <span>{{item.author}}</span>
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="column-title">
                              <span>Rating</span>
                            </div>
                            <div class="desc">
                              <span>{{item.rating}}</span>
                            </div>
                        </div>
                      </div>
                 
  </div>
</template>

<script>
import service from '@/service'
export default {
  name: 'q4',
  data () {
    return {
      slug: '',
      books: []
    }
  },
  mounted () {
    var self = this
    if (Object.keys(this.$route.params).length !== 0) {
      this.slug = this.$route.params.slug
    } else {
      service.books.getList(self, self.eventHub, true).then(function (data) {
        if (data.status == 200 && data.body.meta.count !== 0) {
          self.books = data.body.books  
          console.log(self)
        }
      })
    }
  },
}
</script>

<style scoped>

</style>
