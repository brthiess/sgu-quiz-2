<template>
  <div id="app">
    <Intro></Intro>
    <Quiz></Quiz>
  </div>
</template>

<script>
import Intro from './components/Intro.vue'
import Quiz from './components/Quiz.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Intro,
    Quiz
  },
  ...mapState(['active'])
}
</script>

<style>

* {
	font-family: 'Raleway', sans-serif;
	box-sizing: border-box;
	margin: 0;
}

.hidden {
	display: none !important;
}

.invisible {
	opacity: 0 !important;
}
body {
	height: 100vh;
	background-color: #105c90;
	overflow: auto;
	transition: all 0.8s;
	&.quiz-active {
		background-color: #F5F2B7;
	}
}

.body-content {
	flex-flow: column;
	display: flex;
}
@keyframes fadeInAndUp {
	0% {
		opacity: 0;
		transform: translateY(200px);
	}
	30% {
		opacity: 0;
	}
	60% {
		opacity: 1;

	}
	70% {
		transform: translateY(200px);
	}
	90% {
		transform: translateY(0);
	}
}

@keyframes fadeInAndUpSimulataneously{
	0% {
		opacity: 0;
		transform: translateY(200px);
	}
	80% {
		opacity: 0;
		transform: translateY(200px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes fadeOutAndShrink {
	0% {
		max-height: 200px;
		opacity: 1;
		transform: scale(1);
	}
	30% {
		opacity: 0;
	}

	80% {
		opacity: 0;
		transform: scale(0);
	}

	100% {
		max-height: 0px;
		opacity: 0;
		padding: 0;
		margin: 0;
		transform: scale(0);
	}
}


@keyframes shrinkHeight {
	0% {
		opacity: 1;
	}
	100% {
		height: 0px;
		opacity: 0;
	}
}

</style>
