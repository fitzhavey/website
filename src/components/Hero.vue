<template>
	<div class="Hero inner">
		<pre class="Hero__title">Michael Fitzhavey</pre>

		<img
			class="Hero__image"
			src="../assets/logo.svg"
			alt="code image">

		<section class="text-align-left">
			<p>Full Stack developer based in London. Specialising in Node.js, Firebase & Vue.</p>
			<p>I use agile development methods and cutting edge web technonology to deliver rapid results.</p>
		</section>
	</div>
</template>

<style lang="scss">

@import '../styles/index.scss';

.Hero {
	display: flex;
	flex-direction: column;
	justify-content: center;
	$headerHeight: 50px;
	margin-top: $headerHeight;
	height: calc(100vh - #{$headerHeight});

	@media all and (min-width: $desktop) {
		$headerHeight: 80px;
		margin-top: $headerHeight;
		height: calc(100vh - #{$headerHeight});
	}

	@media all and (max-height: 500px) {
		height: auto;
	}

	&__title {
		font-size: 2rem;

		@media all and (min-width: $tablet) {
			font-size: 3rem;
		}

		@media all and (min-width: $desktop) {
			font-size: 4rem;
		}
	}

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

