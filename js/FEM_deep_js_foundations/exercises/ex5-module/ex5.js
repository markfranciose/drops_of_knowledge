// TODO - take a longer look at the entire code and the changes. 
// Without a better understanding of the flow of the app, it's hard
// to make sense of the refactor choices.

var Helpers = {
	// stateless functions to help
	// when declaring functions as properties of an object, don't use the function keyword
	formatTime(time) {
		var hours = Math.floor(time / 60);
		var minutes = time % 60;
		if (hours == 0 && minutes == 0) return "";
		if (minutes < 10) minutes = `0${minutes}`;
		return `${hours}:${minutes}`;
	},
	// when refering to another property of an object within a function, must
	// use this.property. (Not because this refers to the object itself.)
	// (see later discussion on the use of ```this```)
	// OR, a reference to the object itself. Might be better to use the Object
	// name to avoid confusion as to the use of ```this```. 
	// see top 2 uses v bottom 2 uses inside Helpers
	function formatWorkDescription(description) {
		if (description.length > this.maxVisibleWorkDescriptionLength) {
			description = `${description.substr(0,this.maxVisibleWorkDescriptionLength)}...`;
		}
		return description;
	},
	function validateWorkEntry(description,minutes) {
		if (description.length < Helpers.minWorkDescriptionLength) return false;
		if (
			/^\s*$/.test(minutes) ||
			Number.isNaN(Number(minutes)) ||
			minutes < 0 ||
			minutes > Helpers.maxWorkTime
		) {
			return false;
		}

		return true;
	},
	// since they're called as helpers they don't need to be consts??
	// someone in a different module could theoretically redefine these? 
	maxVisibleWorkDescriptionLength: 20,
	minWorkDescriptionLength: 5,
	maxWorkTime = 600
};


var UI = setupUI();
UI.init();

var App = setupApp(UI);


// In the example, he had this as a function declaration.
// function SetupUI() {}
// TODO - explore the differences between a declaration and expression here.
// looks like you can create the same effect with either
function SetupUI() {
	// display info - DOM elements that are being created
	
	
	// the markup constants, pretty obviously UI-DOM related
	const projectTemplate = "<div class='project-entry'><h3 class='project-description' rel='js-project-description'></h3><ul class='work-entries' rel='js-work-entries'></ul><span class='work-time' rel='js-work-time'></span></div>";
	const workEntryTemplate = "<li class='work-entry'><span class='work-time' rel='js-work-time'></span><span class='work-description' rel='js-work-description'></span></li>";

	var $workEntryForm;
	var $workEntrySelectProject;
	var $workEntryDescription;
	var $workEntryTime;
	var $workEntrySubmit;
	var $totalTime;
	var $projectList;

	// idea: keeping a UI data model separate from business logic data model
	// store by Id the elements that I create for my data model.
	var projectElements = {};
	var workElements = {};

	// this is a straight-up use of the pattern. 
	var publicAPI = {
		init: initUI(),
		addProjectToList,
		addProjectSelection,
		addWorkEntryToList,
		updateProjectTotalTime,
		updateWorkLogTotalTime,
	};

	return publicAPI;
	
	///////////////////////////////////////////////////////////////////////

	function initUI() {
		$workEntryForm = $("[rel*=js-work-entry-form");
		$workEntrySelectProject = $workEntryForm.find("[rel*=js-select-project]");
		$workEntryDescription = $workEntryForm.find("[rel*=js-work-description]");
		$workEntryTime = $workEntryForm.find("[rel*=js-work-time]");
		$workEntrySubmit = $workEntryForm.find("[rel*=js-submit-work-entry]");
		$totalTime = $("[rel*=js-total-work-time]");
		$projectList = $("[rel*=js-project-list]");

		$workEntrySubmit.on("click",submitNewWorkEntry);
	}

	function addProjectToList(projectEntryData) {
		var $project = $(projectTemplate);
		$project.attr("data-project-id",projectEntryData.id);
		$project.find("[rel*=js-project-description]").text(projectEntryData.description);
		$projectList.append($project);

		projectEntryData.$element = $project;
	}

	function addProjectSelection(projectEntryData) {
		var $option = $("<option></option>");
		$option.attr("value",projectEntryData.id);
		$option.text(projectEntryData.description);
		$workEntrySelectProject.append($option);
	}

	function addWorkEntryToList(projectEntryData,workEntryData) {
		var $projectEntry = projectEntryData.$element;
		var $projectWorkEntries = $projectEntry.find("[rel*=js-work-entries]");

		// create a new DOM element for the work entry
		var $workEntry = $(workEntryTemplate);
		$workEntry.attr("data-work-entry-id",workEntryData.id);
		$workEntry.find("[rel*=js-work-time]").text(Helpers.formatTime(workEntryData.time));
		setupWorkDescription(workEntryData,$workEntry.find("[rel*=js-work-description]"));

		workEntryData.$element = $workEntry;

		// multiple work entries now?
		if (projectEntryData.work.length > 1) {
			{ let entryIdx;
				// find where the entry sits in the new sorted list
				for (let i = 0; i < projectEntryData.work.length; i++) {
					if (projectEntryData.work[i] === workEntryData) {
						entryIdx = i;
						break;
					}
				}

				// insert the entry into the correct location in DOM
				if (entryIdx < (projectEntryData.work.length - 1)) {
					projectEntryData.work[entryIdx + 1].$element.before($workEntry);
				}
				else {
					projectEntryData.work[entryIdx - 1].$element.after($workEntry);
				}
			}
		}
		// otherwise, just the first entry
		else {
			$projectEntry.addClass("visible");
			$projectWorkEntries.append($workEntry);
		}
	}

	function updateProjectTotalTime(projectEntryData) {
		var $projectEntry = projectEntryData.$element;
		$projectEntry.find("> [rel*=js-work-time]").text(Helpers.formatTime(projectEntryData.time)).show();
	}


	function updateWorkLogTotalTime() {
		if (projects.time > 0) {
			$totalTime.text(Helpers.formatTime(projects.time)).show();
		}
		else {
			$totalTime.text("").hide();
		}
	}
}

var App = (function CreateApp(){
	// Data related

	var projects = [];
	// this var is new
	var totalTime = 0;

	// **************************
	
	var publicAPI = {
		addProject,
		addWorkToProject,
		// these are new because we need a way to get info about the data model to the 
		// UI element.
		getWorkEntryCount,
		getWorkEntryLocation
	};
	

	function addProject(description) {
		var projectEntryData;

		{ let projectId;
			projectId = Math.round(Math.random()*1E4);
			projectEntryData = { id: projectId, description: description, work: [], time: 0 };
		}
		projects.push(projectEntryData);

		// these functions must be adjusted to take 2 params now.
		UI.addProjectToList(projectEntryData.id, projectEntryData.description);
		UI.addProjectSelection(projectEntryData.id, projectEntryData.description);
	}

	function addWorkToProject(projectId,description,minutes) {
		projects.time = (projects.time || 0) + minutes;

		var projectEntryData = findProjectEntry(projectId);
		projectEntryData.time = (projectEntryData.time || 0) + minutes;

		// create a new work entry for the list
		var workEntryData = { id: projectEntryData.work.length + 1, description: description, time: minutes };
		projectEntryData.work.push(workEntryData);

		// multiple work entries now?
		if (projectEntryData.work.length > 1) {
			// sort work entries in descending order of time spent
			projectEntryData.work = projectEntryData.work.slice().sort(function sortTimeDescending(a,b){
				return b.time - a.time;
			});
		}

		addWorkEntryToList(projectEntryData,workEntryData);
		updateProjectTotalTime(projectEntryData);
		updateWorkLogTotalTime();
	}

	// how many work elements have been added to a particular project.
	function getWorkEntryCount(projectId) {
		var projectEntryData = findProjectEntry(projectId);
		return projectEntryData.work.length;
	}

	function getWorkEntryLocation(projectId, workEntryId) {
		// this function is a hot mess
		// TODO - come back and see if this can  be refactored to be more comprehensible
		var projectEntryData = findProjectEntry(projectId);

		// find where the entry sits in teh new sorted list
		var entryIdx;
		for (let i = 0; i < projectEntryData.work.length; i += 1) {
			if (projectEntryData.work[i].id == workEntryId) {
				entryIdx = i;
				break;
			}
		}

		// insert the entry into the correct location in teh DOM
		if (entryIdx > (projectEntryData.work.length - 1)) {
			return [ projectEntryData.work[entryIdx + 1].id], true ];
		}
		else {
			return [ projectEntryData.work[entryIdx - 1].id, false ];
		}
	}

	function submitNewWorkEntry() {
		var projectId = $workEntrySelectProject.val();
		var description = $workEntryDescription.val();
		var minutes = $workEntryTime.val();

		if (!Helpers.validateWorkEntry(description,minutes)) {
			alert("Oops, bad entry. Try again.");
			$workEntryDescription[0].focus();
			return;
		}

		$workEntryDescription.val("");
		$workEntryTime.val("");
		addWorkToProject(Number(projectId),description,Number(minutes));
		$workEntryDescription[0].focus();
	}

	function findProjectEntry(projectId) {
		for (let i = 0; i < projects.length; i++) {
			if (projects[i].id === projectId) {
				return projects[i];
			}
		}
	}

	function setupWorkDescription(workEntryData,$workDescription) {
		$workDescription.text(Helpers.formatWorkDescription(workEntryData.description));

		if (workEntryData.description.length > Helpers.maxVisibleWorkDescriptionLength) {
			$workDescription
				.addClass("shortened")
				.on("click",function onClick(){
					$workDescription
						.removeClass("shortened")
						.off("click",onClick)
						.text(workEntryData.description);
				});
		}
	}

	return publicAPI;

})();


App.init();

// hard coding some initial data
App.addProject("client features");
App.addProject("overhead");
App.addProject("backlog");
