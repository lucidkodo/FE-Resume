/* 1024px ~ 1070px */
@media only screen and (max-width: 1070px) {
	.left-panel {
		height: 73px;
		width: 100%;
		background-color: #001b30;
		position: fixed;
		z-index: 999;
	}

	.site-content {
		width: 100%;
		margin: 0;
		padding: 0;
		overflow-x: hidden;
		overflow-y: hidden;
	}

	.my-photo {
		display: none;
	}

	nav {
		padding: 25px;
		float: right;
	}

	nav li {
		line-height: 100%;
		display: inline;
		padding: 0 10px;
	}
}



/* 768px ~ 1023px */
@media only screen and (max-width: 1023px) {
	nav {
		text-align: left;
		padding-right: 0;
	}

	nav li {
		list-style: none;
		line-height: 100%;
		padding: 20px 22px 20px 0;
		font-size: 95% !important;
	}

	.section-basic-info { padding: 7% 5% }

	.span-5-of-7 p {
		margin-left: 10px;
	}

	.lang-written {
		margin-left: 5px;
	}

	.about-my-coding { padding: 3% 9% }

	.social-connect { margin-left: 36.5%; }
} 


/* 481px ~ 767px */
@media only screen and (max-width: 767px) {
	body {
		font-size: 85%;
	}

	/*.left-panel { background-color: unset; }*/

	.hero-text-box {
		position: absolute;
		width: 500px;
		top: 50%;
		left: 65%;
		transform: translate(-50%, -50%);
	}

	.main-nav { display: none }
	
	.burger-i {
		display: inline-block;
		float: right;
		padding-right: 30px;
		font-size: 180%;
		color: #ff5451;
	}

	.main-nav {
		float: left;
		background-color: #001b30;
	}


	nav li {
		width: 100vw;
		display: block;
		list-style: none;
		line-height: 100%;
		padding: 20px 22px 20px 50px;
		/*margin-left: 50px;*/
	}






	.section-basic-info { padding: 7% 5% }

	.span-5-of-7 p {
		margin-left: 10px;
	}

	.lang-written {
		margin-left: 5px;
	}

	.about-my-coding { padding: 3% 9% }

	.social-connect { margin-left: 36.5%; }
}

/* 0 ~ 480px */
@media only screen and (max-width: 480px) {
	
}