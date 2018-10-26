<template>
	<div class="AboutMe">
		<b-container class="py-3">
			<h1>About Me</h1>

			<b-row class="pt-3">

				<b-col class="responsive-col">
					<img
						class="AboutMe__image"
						src="../assets/images/profile.jpg"
						alt="Michael Fitzhavey"/>
				</b-col>

				<b-col class="responsive-col">
					<p>
						I'm a Node.js developer working at Oneflow Systems in London who specialises in rapidly building out front-end user interfaces. I am also proficient in back-end technologies and can build robust REST APIs (typically using the swagger framework).
					</p>
				</b-col>

				<b-col class="responsive-col">
					<p>I have experience with:</p>
					<ul>
						<li>HTML5, JS, CSS3</li>
						<li>Typescript and CSS Compilers</li>
						<li>VueJS, React and Angular</li>
						<li>C#, .NET Core and Visual Basic</li>
						<li>SQL and MongoDB</li>
						<li>Swagger and Firebase</li>
						<li>Mailchimp and CMS systems</li>
					</ul>
				</b-col>

			</b-row>

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
	text-align: left;

	&__image {
		width: 100%;
	}

}

</style>

