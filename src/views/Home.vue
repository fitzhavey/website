<template>
	<div class="Home inner">

		<p>Full Stack developer based in London. Specialised in Node.js, Firebase & Vue.</p>

		<img
			class="Home__hero"
			src="../assets/logo.svg"
			alt="code image">

		<p>I make things really <pre class="inline">fast</pre>, really <pre class="inline">well</pre>.</p>

	</div>
</template>

<style lang="scss">

@import '../styles/index.scss';

.Home {
	text-align: left;
	display: flex;
	flex-wrap: wrap;

	&__hero {
		width: 80%;
		margin: 0 10%;
	}

}

</style>

