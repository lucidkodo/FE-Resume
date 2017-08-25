/* 1024px ~ 1070px */
@media only screen and (min-device-width: 1024px) and (max-width: 1070px) {
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
@media only screen and (min-device-width: 768px) and (max-width: 1023px) {
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
@media only screen and (min-device-width: 481px) and (max-width: 767px) {
	body {
		font-size: 85%;
	}

	p { font-size: 100% }

	.left-panel { background-color: rgba(0,0,0,0); }

	.hero-text-box {
		width: 500px;
		transform: translate(-55%, -50%);
	}

	.main-nav { display: none }
	
	.burger-i {
		display: inline-block;
		float: right;
		padding-right: 30px;
		font-size: 180%;
		color: #ff5451;
	}

	nav li {
		display: block;
		list-style: none;
		padding: 20px 22px 20px 60px;
	}

	.section-basic-info { padding: 7% 5% }
	.section-basic-info .span-1-of-2 { width: 100% }

	.info-col {
		margin-left: 7%
	}

	.lang-col {
		width: 90%;
		margin-left: 5%;
	}

	.about-my-coding { 
		padding: 0 9%;
		padding-bottom: 3%; 
	}

	.code-stat-col { 
		width: 100%;
		padding: 0 20%; 
		padding-bottom: 5%;
	}

	.lang-names p { line-height: 145% }

	.lang-stars i {
		line-height: 120%;
		vertical-align: -1px;
	}

	/* To align with boxes */
	/*.lang-names { border: 1px solid #000 }
	.lang-stars { border: 1px solid #000 }*/

	.code-goals-col { width: 100%; }

	.section-my-exp .span-1-of-3 { margin: 0 }

	.exp-box { 
		padding: 3% !important;
		display: block;
		width: 70%;
		margin: 1% 15% !important;  
		height: 130px;
	}

	.exp-info { 
		width: 80%;
		margin: 5% 0;
		margin-left: 10%; 
	}

	.exp-info p { font-size: 100%; }

	.bonus,
	.final-notes { 
		width: 85%;
		margin-left: 7.5%;
	}

	.my-facts-list { 
		width: 85%;
		margin-left: 7.5%;
		padding: 0;
	}

	.social-connect { margin-left: 33%; }
}



/* 321 ~ 480px */
@media only screen and (min-device-width: 321px) and (max-width: 480px) {
	body {
		font-size: 70%;
	}

	.hero-text-box {
		width: 300px;
		transform: translate(-56%, -50%);
	}

	nav li {
		padding: 15px 40px 15px 30px;
	}

	nav li a { font-size: 110% }

	.section-basic-info { padding: 5% 1% }
	.section-basic-info .span-1-of-2 { width: 100% }

	.info-col {
		width: 100% !important;
		margin-left: 1%;
		padding: 0;
	}

	.lang-col {
		margin: 0;
	}


}



/* 0 ~ 320px */
@media only screen and (min-device-width: 200px) and (max-width: 320px) {
	
}