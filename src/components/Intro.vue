<template>
  <div class="landing-container">
    <div class="title-button-container">
      <div class="title-container">
        <h1 class="title">Science or Fiction</h1>
      </div>
      <h4 class="subtitle">Compete against the rogues with a series of Science or Fiction questions and see how you stack up!</h4>
      <ul class="rogue-list" >
        <li class="rogue-list-item"><img  class="rogue-list-item-image" src="/images/steve.jpeg" /><span class="rogue-name">Steve</span></li>
        <li class="rogue-list-item"><img  class="rogue-list-item-image" src="/images/jay.jpeg" /><span class="rogue-name">Jay</span></li>
        <li class="rogue-list-item"><img  class="rogue-list-item-image" src="/images/bob.jpeg" /><span class="rogue-name">Bob</span></li>
        <li class="rogue-list-item"><img  class="rogue-list-item-image" src="/images/cara.jpeg" /><span class="rogue-name">Cara</span></li>
        <li class="rogue-list-item"><img  class="rogue-list-item-image" src="/images/evan.jpeg" /><span class="rogue-name">Evan</span></li>
      </ul>
      <div class="begin-quiz-button-container">
        <button class="button main-button" @click="beginQuiz">Begin Quiz</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Intro',
  props: {
    msg: String
  },
  computed: {
    ...mapState(['active', 'activeQuestionNumber', 'totalNumberOfQuestions', 'onFirstQuestion']),
  },
  methods: {
     beginQuiz(){
		this.$store.commit('setActive', true);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
@import '../styles/index.less';
/*Main Title and Button*/
.title-container {
	margin: 30px 0;
	transition: all 0.6s, border-bottom-left-radius 0.3s, border-bottom-right-radius 0.3s;
	animation-duration: 3s;
	animation-name: fadeInAndUp;
}

.title-container.quiz-active {
	margin: 0;
}

.title {
	font-size: 72px;
	transition: all 0.3s;
	position: relative;
	color: white;
	@media @tablets {
		font-size: 40px;
	}
	&.quiz-active {
		color: #444;
		font-size: 20px;
	}
	@media @smartphones {
		font-size: 34px;
	}
}


.landing-container {
	overflow: hidden;
	display: flex;
	flex-flow: column;
	width: 100%;
	justify-content: center;
	transform: translate(0, 20vh);
	transition: all 0.3s;
	&.quiz-active {
		transform: translate(0, 0);
		margin: 40px 0;
		@media @laptops {
			margin: 20px 0;
		}
		@media @tablets {
			margin: 10px 0;
		}
	}
	@media @tablets {
		transform: translate(0, 10vh);
	}
	@media @smartphones {
		transform: translate(0, 0vh);
	}
}

.title-button-container {
	height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    flex-flow: column;
    padding: 0 20px;
    text-align: center;
}

.subtitle {
	transition: transform 0.3s;
	opacity: 0;
	animation-duration: 3s;
	animation-name: fadeInAndUpSimulataneously;
	animation-delay: 0.1s;
	animation-fill-mode: forwards;
	font-weight: 100;
    color: #d8efff;
	&.quiz-active {
		animation-name: fadeOutAndShrink;
		animation-duration: 1s;
		animation-delay: 0s;
	}
}

.button {
	color: white;
	background-color: #69ADDD;
	border: none;
	outline: none;
	font-size: 18px;
	padding: 20px 40px;
	border-radius: 10px;
	box-shadow: 1px 2px 3px 1px rgba(0,0,0,0.3);
	cursor: pointer;
	&:hover {
		background-color: #50a5e1;
	}
	@media @smartphones {
		padding: 15px 30px;
	}
}
.begin-quiz-button-container {
	margin: 30px 0;
	@media @smartphones {
		margin: 15px 0;
	}
}

.begin-quiz-button-container.quiz-active {
	animation-name: fadeOutAndShrink;
	animation-duration: 1s;
	animation-delay: 0s;
	animation-fill-mode: forwards;
}

.main-button {
	font-size: 30px;
	transition: transform 0.3s;
	opacity: 0;
	animation-duration: 3s;
	animation-name: fadeInAndUpSimulataneously;
	animation-fill-mode: forwards;
	animation-delay: 1s;
	@media @smartphones {
		font-size: 23px;
	}
}

.main-button.quiz-active {
	animation-name: fadeOutAndShrink;
	animation-duration: 1s;
	animation-delay: 0s;
}
.rogue-list {
	list-style: none;
	display: flex;
	padding: 0;
	margin: 30px 0;
    flex-wrap: wrap;
    display: flex;
	justify-content: center;
	
	&.quiz-active {
		animation-name: fadeOutAndShrink;
		animation-duration: 1s;
		animation-delay: 0s;
		animation-fill-mode: forwards;
	}
	@media @smartphones {
		margin: 15px 0;
	}
}


.rogue-list-item {
	margin: 0 10px;
	animation-duration: 3s;
	animation-name: fadeInAndUpSimulataneously;
	opacity: 0;
	animation-fill-mode: forwards;
	display: flex;
    flex-flow: column;
	&.quiz-active:nth-child(n) {
		animation-name: shrinkHeight;
		animation-duration: 1s;
		animation-delay: 0s;
	}
	@media @smartphones {
		margin-bottom: 10px
	}
}

@iterations: 1;

.rogue-list-item-loop (@i) when (@i < 10) {
	.rogue-list-item:nth-child(@{i}) {
		@k: (@i + 5) / 10;
		animation-delay: ~"@{k}s";
	}

	.rogue-list-item-loop(@i + 1);
}

.rogue-list-item-loop (@iterations);

.rogue-list-item-image {
    width: 100px;
    height: 100px;
    overflow: hidden;
	border-radius: 50px;	
	margin: 0 0 10px;
	@media @smartphones {
		width: 70px;
		height: 70px;
		margin: 0 0 2px;
	}
}

.rogue-name {
    color: white;
	font-size: 20px;
	@media @smartphones {
		font-size: 18px;
	}
}
</style>
