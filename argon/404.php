<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
	<link href="<?php echo $GLOBALS['assets_path']; ?>/assets/vendor/nucleo/css/nucleo.css" rel="stylesheet">
	<link href="<?php echo $GLOBALS['assets_path']; ?>/assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet">
	<link type="text/css" href="<?php echo $GLOBALS['assets_path']; ?>/assets/css/argon.min.css" rel="stylesheet">
	<script src="<?php echo $GLOBALS['assets_path']; ?>/assets/vendor/jquery/jquery.min.js"></script>
	<script src="<?php echo $GLOBALS['assets_path']; ?>/assets/vendor/bootstrap/bootstrap.min.js"></script>
	<script src="<?php echo $GLOBALS['assets_path']; ?>/assets/js/argon.min.js"></script>
	<title><?php _e("404 - 找不到页面", "argon"); ?></title>
	<script>
		var darkmodeAutoSwitch = "<?php echo (get_option("argon_darkmode_autoswitch") == '' ? 'false' : get_option("argon_darkmode_autoswitch"));?>";
		function setDarkmode(enable){
			if (enable == true){
				$("html").addClass("darkmode");
			}else{
				$("html").removeClass("darkmode");
			}
			$(window).trigger("scroll");
		}
		function toggleDarkmode(){
			if ($("html").hasClass("darkmode")){
				setDarkmode(false);
				sessionStorage.setItem("Argon_Enable_Dark_Mode", "false");
			}else{
				setDarkmode(true);
				sessionStorage.setItem("Argon_Enable_Dark_Mode", "true");
			}
		}
		if (sessionStorage.getItem("Argon_Enable_Dark_Mode") == "true"){
			setDarkmode(true);
		}
		function toggleDarkmodeByPrefersColorScheme(media){
			if (sessionStorage.getItem('Argon_Enable_Dark_Mode') == "false" || sessionStorage.getItem('Argon_Enable_Dark_Mode') == "true"){
				return;
			}
			if (media.matches){
				setDarkmode(true);
			}else{
				setDarkmode(false);
			}
		}
		function toggleDarkmodeByTime(){
			if (sessionStorage.getItem('Argon_Enable_Dark_Mode') == "false" || sessionStorage.getItem('Argon_Enable_Dark_Mode') == "true"){
				return;
			}
			let hour = new Date().getHours();
			if (hour < 7 || hour >= 22){
				setDarkmode(true);
			}else{
				setDarkmode(false);
			}
		}
		if (darkmodeAutoSwitch == 'system'){
			var darkmodeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
			darkmodeMediaQuery.addListener(toggleDarkmodeByPrefersColorScheme);
			toggleDarkmodeByPrefersColorScheme(darkmodeMediaQuery);
		}
		if (darkmodeAutoSwitch == 'time'){
			toggleDarkmodeByTime();
		}
		if (darkmodeAutoSwitch == 'alwayson'){
			setDarkmode(true);
		}

		function toggleAmoledDarkMode(){
			$("html").toggleClass("amoled-dark");
			if ($("html").hasClass("amoled-dark")){
				localStorage.setItem("Argon_Enable_Amoled_Dark_Mode", "true");
			}else{
				localStorage.setItem("Argon_Enable_Amoled_Dark_Mode", "false");
			}
		}
		if (localStorage.getItem("Argon_Enable_Amoled_Dark_Mode") == "true"){
			$("html").addClass("amoled-dark");
		}else if (localStorage.getItem("Argon_Enable_Amoled_Dark_Mode") == "false"){
			$("html").removeClass("amoled-dark");
		}
	</script>
	<link rel="stylesheet" href="//cdn.kokononine.moe/kokononine/cursor.css">
	<link rel="stylesheet" href="//cdn.kokononine.moe/kokononine/font.css">
	<link rel="stylesheet" href="//cdn.kokononine.moe/kokononine/classes.css">
</head>
<body>
	<div class="position-relative">
		<section class="section section-lg section-shaped pb-250" style="height: 100vh !important;">
			<div class="shape shape-style-1 shape-default" style="background: repeating-linear-gradient(150deg, #ffffff 0%, #ffe5ee 12.5%, #ffffff 25%) 100% 100%/200% 200% no-repeat border-box border-box fixed; animation: background-repeating-linear-gradient 8s linear infinite;">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class="container py-lg-md d-flex">
				<div class="col px-0">
					<div class="row">
						<div class="col-lg-6 col-sm-12">
							<div class="display-1 text-white" style="color: #ff7faa !important;">404</div>
							<p class="lead text-white" style="color: #ff7faa !important;">Page not found.<br><?php _e("这个页面不见了", "argon"); ?><br>据说点击下面的两个按钮可能会出现<br></p><table style="color: #ff7faa !important; display: inline-table; animation: sanbai 1s linear infinite;"><tr><td style="font-size: 3rem;">\</td><td style="font-size: 2rem;">三倍 ice cream</td><td style="font-size: 3rem;">/</td></tr></table><span class="lead text-white" style="color: #ff7faa !important;">喵～</span>
							<div class="btn-wrapper">
								<a href="javascript:window.history.back(-1);" ondragstart="return false;" class="btn btn-info btn-icon mb-3 mb-sm-0" style="background: #ff9fbf !important; border-color: #ff9fbf; color: #ffffff;">
									<span class="btn-inner--icon"><i class="fa fa-chevron-left"></i></span>
									<span class="btn-inner--text"><?php _e("返回上一页", "argon"); ?></span>
								</a>
								<a href="<?php bloginfo('url'); ?>" class="btn btn-white btn-icon mb-3 mb-sm-0" style="background: #ff9fbf !important; border-color: #ff9fbf; color: #ffffff;">
									<span class="btn-inner--icon"><i class="fa fa-home"></i></span>
									<span class="btn-inner--text"><?php _e("回到首页", "argon"); ?></span>
								</a>
							</div>
							<?php echo apply_filters('argon_404page_extra_html', ''); ?>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
<style>
	body{
		overflow: hidden;
	}
	html.darkmode .section-shaped .shape {
		background: #262626;
	}
	html.darkmode .text-white {
		opacity: .75;
	}
	html.darkmode .btn-white {
		background: #424242;
		border-color: #424242;
		color: #eee;
	}
	html.darkmode .btn-info {
		background: #0a7f94;
		border-color: #0a7f94;
		color: #eee;
	}
	html.darkmode.amoled-dark .section-shaped .shape {
		background: #000;
	}
	@keyframes background-repeating-linear-gradient {
		0% {
			background-position: 100% 100%;
		}
		100% {
			background-position: 0% 0%;
		}
	}
	@keyframes sanbai {
		0%, 100% {
			transform: scale(1) rotateZ(0deg);
			opacity: 1;
		}
		25% {
			transform: scale(1.1) rotateZ(11deg);
			opacity: 0.25;
		}
		75% {
			transform: scale(0.75) rotateZ(-9deg);
			opacity: 0.75;
		}
	}
</style>
</body>
</html>
