<template>
	<div class="AboutMe">
		<b-container class="pt-3">
			<h1>About Me</h1>
			<n

			<img
				class="AboutMe__image"
				src="../assets/images/logo.svg"
				alt="Michael Fitzhavey">

			<section class="text-align-left">
				<p>Full Stack developer based in London. Specialising in Node.js, Firebase & Vue.</p>
				<p>I use agile development methods and cutting edge web technonology to deliver rapid results.</p>
			</section>
	</b-container>
	</div>
</template>

<style lang="scss">

@import '../styles/index.scss';

.AboutMe {
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: $greyLight;
	color: $grey;

	&__image {
		width: 80%;
		margin: 1rem 10%;

		@media all and (min-width: $tablet) {
			width: 70%;
			margin: 2rem 15%;
		}

		@media all and (min-width: $desktop) {
			width: 50%;
			margin: 2rem 25%;
		}
	}

}

</style>

