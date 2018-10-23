<template>
	<header class="Header inner">

		<router-link
			class="Header__title"
			to="/">
			Michael&nbsp;
			<span class="Header__title--light">- Software Engineer</span>
		</router-link>

		<a
			href="https://github.com/michaelfitzhavey"
			title="Check me out on github!"
			target="_blank">
			<img
				class="Header__icon"
				src="../assets/icons/github.svg"
				alt="github/michaelfitzhavey"/>
		</a>

	</header>
</template>

<style lang="scss">

@import '../styles/index.scss';

.Header {
	padding: 1rem 0;
	display: flex;
	position: fixed;
	top: 0;

	@media all and (min-width: $desktop) {
		padding: 2rem 0;
	}

	&__title {
		font-weight: bold;
		margin-right: auto;
		color: $yellow !important;

		@media all and (min-width: $tablet) {
			font-size: 1.5rem;
		}

		&--light {
			font-weight: normal;
			color: $orange !important;
		}

	}

	&__icon {
		width: 32px;
		margin-top: -4px;

		@media all and (min-width: $tablet) {
			width: 48px;
		}
	}

}
</style>
