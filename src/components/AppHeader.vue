<template>
	<header class="Header inner">

		<router-link
			class="Header__title"
			to="/">
			Michael&nbsp;
			<span class="Header__title--light">- Software Engineer</span>
		</router-link>

	</header>
</template>

<style lang="scss">

@import '../styles/index.scss';

.Header {
	padding: 1rem 0;
	display: flex;
	position: fixed;

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
}
</style>
