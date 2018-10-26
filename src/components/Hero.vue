<template>
	<b-container class="Hero">
		<pre class="Hero__title">Michael Fitzhavey</pre>

		<img
			class="Hero__image"
			src="../assets/images/logo.svg"
			alt="code image">

		<section class="text-align-left">
			<p class="Hero__text lead">Full Stack developer based in London. Specialising in Node.js, Firebase & Vue.</p>
			<p class="Hero__text lead">I use agile development methods and cutting edge web technonology to deliver rapid results.</p>
		</section>
	</b-container>
</template>

<style lang="scss">

@import '../styles/index.scss';

.Hero {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: $headerHeight;
	height: calc(100vh - #{$headerHeight});

	@media all and (min-width: $desktop) {
		$headerHeightDesktop: 63px;
		margin-top: $headerHeightDesktop;
		height: calc(100vh - #{$headerHeightDesktop});
	}

	@media all and (max-height: 500px) {
		height: auto;
	}

	&__title {
		font-size: 1.4rem;
		color: $white;

		@media all and (min-width: $tablet) {
			font-size: 3rem;
		}

		@media all and (min-width: $desktop) {
			font-size: 4rem;
		}
	}

	&__text {
		font-size: 1rem;

		@media all and (min-width: $tablet) {
			font-size: 1.25rem;
		}

		@media all and (min-width: $desktop) {
			font-size: 1.5rem;
		}
	}

	&__image {
		width: 60%;
		margin: 1rem 20%;

		@media all and (min-width: $tablet) {
			width: 50%;
			margin: 2rem 25%;
		}

		@media all and (min-width: $desktop) {
			width: 30%;
			margin: 2rem 35%;
		}
	}

}

</style>

