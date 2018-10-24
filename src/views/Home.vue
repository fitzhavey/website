<template>
	<section class="Home">

		<hero/>
		<work-experience/>

	</section>
</template>

<script>
import Hero from '@/components/Hero.vue';
import WorkExperience from '@/components/WorkExperience.vue';

export default {
	components: {
		Hero,
		WorkExperience
	}
};
</script>


<style lang="scss">


</style>

