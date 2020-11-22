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

<style lang="less">

@import '../styles/index.less';
/*Quiz Container*/
.quiz-template {
	flex-flow: column;
	justify-content: space-between;
	height: 100%;
	display: none;
	&.active {
		display: flex;
	}
}
.quiz-container-wrapper {
	flex: 1;
	flex-flow: column;
	padding-bottom: 100px;
	display: none;
	&.active {
		display: flex;
	}
}

.quiz-container-container {
	flex-grow: 1;
}

.quiz-container {
	width: 100%;
	overflow: hidden;
	height: 100%;
	position: relative;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 100%;
}

.quiz-section-container {
	width: 100%;
	transition: transform 0.5s, max-height 1.0s;
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 2;
	max-height: 1000px;
}

.quiz-section-container.preceding {
	transform: translateX(-100%);
	max-height: 400px;
}

.quiz-section-container.upcoming {
	transform: translateX(100%);
	max-height: 400px;
}

.quiz-inner-container {
	max-width: 1500px;
	margin: auto;
	display: grid;
	grid-template-columns: auto auto;
	padding: 0 40px;
	@media @mini-tablets {
		padding: 0 30px;
	}
	@media @smartphones {
		padding: 0 10px;
	}
}

.quiz-question-type-text {
	grid-column-start: 1;
	grid-column-end: 2;
	width: 300px;
	border-bottom: 1px solid #333;
	padding-bottom: 10px;
	font-size: 18px;
	@media @smartphones {
		font-size: 16px;
		padding-bottom: 5px;
		width: 260px;
	}
}

.quiz-date-number-container {
	grid-column-start: 1;
	display: flex;
	margin: 5px 0;
	color: #666;
	font-size: 14px;
	@media @smartphones {
		font-size: 13px;
	}
}
.quiz-episode-number {
	color: #333;
}

.quiz-question-container {
	grid-column-start: 1;
	grid-column-end: 3;
	margin: 40px 0;

	@media @tablets {
		margin: 25px 0;
	}

	@media @mini-tablets {
		margin: 22px 0;
	}

	@media @smartphones {
		margin: 15px 0;
	}
}

.quiz-question {
	font-size: 32px;
	@media @tablets {
		font-size: 25px;
	}
	@media @smartphones {
		font-size: 20px;
	}
}

.quiz-answers-container {
	list-style: none;
	display: flex;
	padding: 0;
	grid-column-start: 1;
	grid-column-end: 3;
	padding-bottom: 10px;
	@media @tablets {
		flex-flow: column;
	}
}

.quiz-answer {
	background-color: white;
	margin: 0 20px;
	padding: 20px 40px;
	border-radius: 5px;
	box-shadow: 1px 1px 3px rgba(0,0,0,.2);
	flex: 1;
	line-height: 1.4;
	transition: all 0.15s;
	position: relative;

	@media @tablets {
		margin: 10px 0;
		font-size: 15px;
		padding: 15px 30px;
	}
	
	@media @smartphones {
		font-size: 14px;
		padding: 10px 20px;

		&:first-child {
			margin-top: 0;
		}
	}
}
.section-unanswered .quiz-answer:hover {
	background: #d1ecff;
	box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
	cursor: pointer;
}

.quiz-answer.this-answer-picked.answer-correct, .section-answered-incorrectly .answer-correct {
	background: #5fba7d;
	color: white;
}
.quiz-answer.this-answer-picked.answer-incorrect {
	background: #e74c3c;
	color: white;
}

.quiz-answer:first-child {
	margin-left: 0;
}

.quiz-answer:last-child {
	margin-right: 0;
}



.quiz-answer.selected {
	color: white;
	background-color: #105c90;
	box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}
.rogue-answers-container {
	list-style: none;
	display: flex;
	position: absolute;
	padding: 0;
	top: -43px;
	right: 15px;
	@media @laptops {
		top: -30px;
	}
	@media @tablets {
		top: -13px;
	}
}
.rogue-answer-image-container {
	position: relative;
	height: 40px;
	width: 40px;
	margin-left: 10px;
	transition: all 0.3s;
	transition-delay: 1s;
	transform: translateY(-100px);
	opacity: 0;
	display: flex;
    flex-flow: column;
    align-items: center;
	@media @laptops {
		height: 25px;
		width: 25px;
	}
}
@iterations: 1;

.span-loop (@i) when (@i < 10) {
	.rogue-answer-image-container:nth-child(@{i}) {
		@k: (@i + 5) / 10;
		transition-delay: ~"@{k}s";
	}

	.span-loop(@i + 1);
}

.span-loop (@iterations);

.rogue-answer-image-container.answered{
	opacity: 1;
	transform: translateY(0px);
}
.rogue-answer-image {
	height: 100%;
	width: 100%;
    border-radius: 20px;
    object-fit: cover;
    object-position: center;
}
.rogue-answer-name {
    background: #0e5c90;
    box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.3);
    white-space: nowrap;
    padding: 5px 10px;
    color: white;
    border-radius: 5px;
    left: -50%;
    transition: all;
    visibility: hidden;
    opacity: 0;
	transition-delay: 0.05s;
	min-width: min-content;
	&:hover {
		opacity: 1;
		visibility: visible;
	}
	@media @smartphones {
		font-size: 13px;
	}
}
.rogue-answer-image:hover+.rogue-answer-name {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
}
.quiz-question-number {
	font-size: 140px;
	align-self: flex-end;
	display: none; /*hide for now.  Not sure how we want to display this*/
}

</style>