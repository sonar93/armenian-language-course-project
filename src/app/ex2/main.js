function initializeExercise() {
			//Initialize global variables
			unitInfo = {
				unit_name: jsonObject.root.unitID,
				item_name: jsonObject.root.itemID,
				type: jsonObject.root.type
			};
			pageNum = 0;
			pageStat = {
				correct: 0,
				incorrect: 0,
				total: 9
			}; //Current page statistics
			exerciseStat = {
				correct: 0,
				incorrect: 0,
				total: 9
			}; //Whole exercise statistics
			submits_count = 0; //submits count

			//create pagination
			var pagesNav = document.getElementById("myPagination");
			exItemsObj = jsonObject.root.page;

			if (exItemsObj.length == undefined) {
				exItemsObj = [exItemsObj];
			}

			for (var i = 0; i < exItemsObj.length; i++) {
				var li = document.createElement('li');
				var content = '<a data-content="' + exItemsObj[i].number + '" href="#">' + exItemsObj[i].number + '</a>';
				li.innerHTML = content;

				pagesNav.appendChild(li)

				//Count total number of the exercise elements.
				//exerciseStat.total = pageStat.total = exItemsObj[i].items.letter.length;
			}

			if (exItemsObj.length > 1) {
				var li = document.createElement('li');
				var content = '<a data-content="1" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>';
				li.innerHTML = content;

				pagesNav.appendChild(li)
			} else if (exItemsObj.length == 1) {
				pagesNav.style.display = "none";
			}

			//Create right and wrong audio elements
			rightAudioElement = new Audio(jsonObject.root["rightaudio"]);
			wrongAudioElement = new Audio(jsonObject.root["wrongaudio"]);
			//rightAudioElement.play();

			//Finish the initialization
			initialized = true;
		}

		function initExercisePage(pageIndex) {
			//reset current page statistics
			pageStat.correct = pageStat.incorrect = 0;
			//define array of already opened letters
			opennedLetters = [];

			var exerciseDiv = document.getElementsByClassName("letters_table")[0];

			var current_page = exItemsObj[pageIndex - 1];
			exerciseDiv.style.backgroundImage = "url('" + current_page.image + "')";
			//var items = exItemsObj[pageIndex-1].item;

			var letters = current_page.items.letter;
			letters.shuffle();

			var table = document.createElement('table');
			table.className = 'table table-bordered aybuben_table';

			for (var i = 0; i < 9; i += 3) {
				var tr = document.createElement('tr');
				tr.innerHTML = "<td >" + letters[i].text + "</td><td>" + letters[i + 1].text + "</td><td>" + letters[i + 2].text + "</td>";
				table.appendChild(tr);
			}

			var startBtn = document.getElementById("startBtn");
			startBtn.setAttribute('onclick', 'startCurrentPageExercise(' + pageIndex + ')');

			exerciseDiv.innerHTML = "";
			exerciseDiv.appendChild(table);
		}

		function startCurrentPageExercise(pageIndex) {
			playLetters(pageIndex);
		}

		function playLetters(pageIndex) {
			lettersObj = exItemsObj[pageIndex - 1].items.letter;

			var lettersDiv = document.getElementsByClassName("letters_table")[0];
			var letterColumns = lettersDiv.getElementsByTagName("table")[0].getElementsByTagName("td");

            var currentSound;
			if (opennedLetters.length != lettersObj.length) {
				currentSound = Math.floor(Math.random() * 9);

				while (opennedLetters.indexOf(currentSound) != -1)
					currentSound = Math.floor(Math.random() * 9);
			} else {
				for (var i = 0; i < letterColumns.length; i++) {
					//letterColumns[i].style.border = 0;
				}



				var startBtn = document.getElementById("startBtn");
				//startBtn.disabled = true;
				return true;
			}
          //  console.log("kukku");
			//for (var i = 0; i < letterColumns.length; i++) {
			//	if (letterColumns[i].className != "no_background") {
			//		letterColumns[i].addEventListener("click", isCorrentTextNode, false);
			//		letterColumns[i].currentSound = currentSound;
			///		letterColumns[i].pageIndex = pageIndex;
			//	}
			}

			var audioElement = new Audio(lettersObj[currentSound].audio_file);
			audioElement.setAttribute('id', "audio1");
			audioElement.play();
		}

		function isCorrentTextNode(e) {
			var currentSound = this.currentSound;
			var pageIndex = this.pageIndex;
			if (this.innerHTML.trim() === lettersObj[currentSound].text) {
				rightAudioElement.play();
				updateStats("correct"); //Increment correctClicks count
				this.className = "no_background";
				opennedLetters.push(currentSound);

				var letterColumns = this.parentNode.parentNode.getElementsByTagName("td");
				for (var i = 0; i < letterColumns.length; i++) {
					letterColumns[i].removeEventListener("click", isCorrentTextNode, false);
				}

				window.setTimeout(function() {
					playLetters(pageIndex)
				}, 1000);
				return true;
			} else {
				wrongAudioElement.play();
				updateStats("incorrect"); //Increment incorrectClicks count
				return false;
			}
		}

		function updateStats(statPart) {
			if (statPart === "correct") {
				pageStat.correct = 1; //current Page
				pageStat.incorrect = 0; //current Page
			} else {
				pageStat.correct = 0; //current Page
				pageStat.incorrect = 1; //current Page
			}

			exerciseStat[statPart]++; //whole exercise Page
			updateProgressBar();
		}

		function updateProgressBar() {
			var correct = document.getElementById("correct-progress");
			var incorrect = document.getElementById("incorrect-progress");

			if (exerciseStat.correct == 0 && exerciseStat.incorrect == 0) {
				correct.style.width = 0;
				incorrect.style.width = 0;
			} else {
				correct.style.width = (exerciseStat.correct / exerciseStat.total * 100) + "%";

				incorrect.style.width = (exerciseStat.incorrect / exerciseStat.total * 100) + "%";
			}
			submitStatus(unitInfo, pageNum, pageStat);


		}

		function fillActivityModal(data) {

			if (data.status == 1 && data.activityStat.length != undefined) {
				var modal = document.getElementById("activityStatModal");
				var modal_body = modal.getElementsByClassName("modal-body")[0];
				modal_body.innerHTML = "";

				for (var i = 0; i < data.activityStat.length; i++) {
					var x = data.activityStat[i];
					x.activityData.correct = parseFloat(x.activityData.correct);
					x.activityData.incorrect = parseFloat(x.activityData.incorrect);
					x.activityData.total = parseFloat(x.activityData.total);
					var t = new Date(x.date * 1000);
					//console.log(t.toLocaleString(), t.toLocaleTimeString(), t.toDateString());
					var complete = ((x.activityData.correct * x.activityData.correct) / (x.activityData.total * (x.activityData.correct + x.activityData.incorrect)) * 100);
					complete = complete.toFixed(0);
					var incomplete = 100 - complete;
					incomplete = incomplete.toFixed(0);
					//console.log(complete, incomplete);
					var duration = x.duration;
					var minutes = "";
					var seconds = "";
					if (Math.floor(duration / 60) > 0) {
						minutes = Math.floor(duration / 60) + "m "
					}
					if (duration % 60 > 0) {
						seconds = (duration % 60) + "s "
					};
					duration = minutes + seconds;
					var content = '<div class="">' +
						'<div class="col-md-4 col-sm-6 col-xs-8"><b>' + t.toLocaleTimeString() + "  " + t.toDateString() + '</b></div>' +
						'<div class="col-md-3 col-sm-3 col-xs-4">(<span class="glyphicon glyphicon-time" aria-hidden="true"></span> ' + duration + ')' +
						((complete == 100) ? '<img src="media/image/apricot.png" class="reward-img">' : '') + '</div>' +
						'<div class="progress col-md-5 col-sm-12 col-xs-12">' +
						'<div class="progress-bar progress-bar-success progress-bar-striped" style="width:' + complete + '%">' + complete + '%</div>' +
						'<div class="progress-bar progress-bar-warning progress-bar-striped" style="width:' + incomplete + '%">' + incomplete + '%</div>' +
						'</div>' +
						'<div class="clear"></div>'; +
					'</div>';
					modal_body.innerHTML += content;
				}
			}
		}


		function submitStatus(unitInfo, pageNumber, pageStatusData) {
			var sendData = {
				"ajax": 1,
				"is_first": submits_count++,
				"unit_info": unitInfo,
				"page_number": pageNumber,
				"statusData": pageStatusData
			};

			//alert("Congratulations! \nYou have finished this task, please go to the next page.")

			$.ajax({
				type: "POST",
				url: Web_url + "/jsonResponce/saveData.php",
				data: sendData,
				cache: false,
				dataType: "json",
				success: function(data) {

				}
			});
		}

		function getIteghmActivityList(unitInfo) {
			var sendData = {
				"ajax": 1,
				"unit_info": unitInfo
			};


			$.ajax({
				type: "POST",
				url: Web_url + "/jsonResponce/getData.php",
				data: sendData,
				cache: false,
				dataType: "json",
				success: function(data) {

					fillActivityModal(data);
				}
			});
		}

		function getItemActivityList(unitInfo) {
			var sendData = {
				"ajax": 1,
				"unit_info": unitInfo
			};
			$.ajax({
				type: "POST",
				url: Web_url + "/jsonResponce/getData.php",
				data: sendData,
				cache: false,
				dataType: "json",
				success: function(data) {
					fillActivityModal(data);
				}
			});
		}

		$(function() {

			setSizes(); //Setup sizes
			var title = document.getElementById("lessonTitle");
			title.innerHTML = jsonObject.root.title;

			//Initialize exercise data
			if (!initialized) {
				initializeExercise();
				submitStatus(unitInfo, 0, pageStat);


				//attach Event on page items
				$('ul.pagination li > a').on("click", function() {
					if (!$(this).parent("li").hasClass("disabled") && pageNum != $(this).attr("data-content")) {
						//Submit statistic data for previously opened page (started from second page)
						//if( $(this).attr("data-content") > 1 )


						//change pageNum
						pageNum = parseInt($(this).attr("data-content"));


						//update pagination items
						$(this).parent("li").parent("ul").find("li").each(function() {
							$(this).removeClass("active");
							if ($(this).index("ul.pagination li") < pageNum - 1) {
								$(this).addClass("disabled");
							}
							if ($(this).find("a").attr("data-content") == pageNum)
								$(this).addClass("active");
						})

						if ($("[aria-label = 'Next']")) {
							if (pageNum + 1 <= exItemsObj.length) {
								$("[aria-label = 'Next']").attr("data-content", pageNum + 1);
								$("[aria-label = 'Next']").parent("li").removeClass("active");
							} else {
								$("[aria-label = 'Next']").attr("data-content", 4);
								$("[aria-label = 'Next']").parent("li").addClass("active");
								//$("[aria-label = 'Next']").parent("li").addClass("disabled");
							}
						}
						//initialize current Page
						initExercisePage(pageNum);
					}
					return false;
				});

				$('ul.pagination li:first-child > a').click();

				//Call activity statistics' data from server
				$('#activityStatModal').on('show.bs.modal', function(e) {
					getItemActivityList(unitInfo);
				})
				//$('#activityStatModal').modal('show');
			}
		});

		function setSizes() {
			//set initial width and height
			var lettersDiv = document.getElementsByClassName("letters_table")[0];
			var w = lettersDiv.parentNode.parentNode.getElementWidth();
			var ratio = 0.6;
			if (w < 768) {
				var ratio = 0.8;
			}

			lettersDiv.style.width = w * ratio + "px";
			lettersDiv.style.height = w * ratio * 0.62 + "px";
		}

		window.onresize = function() {
			setSizes();
		}