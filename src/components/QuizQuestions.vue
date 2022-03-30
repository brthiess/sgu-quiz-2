<template>
  <div data-quiz-container class="quiz-container-container">
    <section class="quiz-template" v-bind:class="{ active: active }">
      <div class="quiz-container">
        <div
          v-for="(section, index) in sections"
          :key="'section-' + index"
          class="quiz-section-container"
          v-bind:class="{
            'quiz-results-container-wrapper': section.sectionType == 'results',
            'active-question': section.active,
            upcoming: section.number > activeSectionNumber,
            preceding: section.number < activeSectionNumber,
            'section-unanswered': !section.answered,
            'section-answered': section.answered,
            'section-answered-correctly':
              section.answered && section.answeredCorrectly,
            'section-answered-incorrectly':
              section.answered && !section.answeredCorrectly,
          }"
        >
          <section
            v-if="section.type != 'results'"
            class="quiz-inner-container"
          >
            <h3 class="quiz-question-type-text">Multiple Choice Question</h3>
            <div class="quiz-date-number-container">
              <p class="quiz-episode-number">
                Episode: #{{ section.episodeNumber }}
              </p>
              <p class="quiz-question-date">, {{ section.date }}</p>
            </div>
            <div class="quiz-question-container">
              <h3 class="quiz-question">{{ section.question }}</h3>
            </div>
            <ul class="quiz-answers-container">
              <li
                v-for="(answer, index) in section.answers"
                :key="'answer-' + index"
                @click="answerQuestion(section, answer.number)"
                class="quiz-answer"
                v-bind:class="{
                  'answer-correct': answer.correct,
                  'answer-incorrect': !answer.correct,
                  'this-answer-picked': answer.picked,
                }"
              >
                <ul class="rogue-answers-container">
                  <li
                    v-for="(rogueAnswer, index) in rogueAnswersByAnswerNumber(
                      section,
                      answer.number
                    )"
                    :key="'rogueAnswer-' + index"
                    class="rogue-answer-image-container"
                    v-bind:class="{ answered: section.answered }"
                  >
                    <img
                      class="rogue-answer-image"
                      v-bind:src="rogueAnswer.image"
                    />
                    <p class="rogue-answer-name">{{ rogueAnswer.name }}</p>
                  </li>
                </ul>
                <p class="quiz-answer-text">{{ answer.text }}</p>
              </li>
            </ul>
          </section>
          <QuizResults v-bind:section="section"></QuizResults>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import QuizResults from "@/components/QuizResults.vue";
export default {
  name: "QuizFooter",
  components: {
    QuizResults,
  },
  computed: {
    ...mapState([
      "active",
      "activeSectionNumber",
      "totalNumberOfQuestions",
      "onFirstQuestion",
      "sections",
      "results",
    ]),
  },
  methods: {
    rogueAnswersByAnswerNumber: function(section, answerNumber) {
      if (!section.rogueAnswers) {
        return [];
      }
      return section.rogueAnswers.filter((i) => i.number == answerNumber);
    },
    goToPreviousQuestion() {
      this.$store.commit("decrementActiveSectionNumber");
    },
    goToNextQuestion() {
      this.$store.commit("incrementActiveSectionNumber");
    },
    answerQuestion(section, answerNumber) {
      if (section.answered === true) {
        return;
      }
      section.answered = true;
      section.answers[answerNumber].picked = true;

      this.$store.commit("setSection", section, section.number);
      this.$store.commit(
        "answerQuestion",
        section.answers[answerNumber].correct
      );
      console.log(this.sections);
    },
  },
};
</script>
