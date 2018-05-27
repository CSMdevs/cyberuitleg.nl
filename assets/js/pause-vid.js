
			var whenToPause = 10;
			var video = document.getElementById("intro-video");
			var CurrentTime = video.currentTime;
			
			function isTime() {
			if (CurrentTime>=whenToPause){
				video.pause();
				window.alert(CurrentTime+"Detected");
			} else {
				isTime();
				window.alert(CurrentTime+"Not detected");
				return;
			    
			}}