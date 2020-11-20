<template>
    <section class="quiz-container-wrapper" id="quiz-template" v-show="active" v-bind:class="{'active': active}">
        <QuizQuestions></QuizQuestions>
        <QuizFooter></QuizFooter>
    </section>
</template>

<script>
import QuizQuestions from '@/components/QuizQuestions.vue'
import QuizFooter from '@/components/QuizFooter.vue'
import { mapState } from 'vuex'

export default {
  components: {
    QuizQuestions,
    QuizFooter
  },
  computed: {
      ...mapState(['active', 'activeQuestionNumber', 'totalNumberOfQuestions', 'onFirstQuestion'])
  }
}

</script>