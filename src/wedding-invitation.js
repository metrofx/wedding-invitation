/**
 * The program that changed our life ;)
 */

(function () {

	var Eko = new Person("Eko"),
		  Rina = new Person("Rina");

	isResponsible(Eko); 

	gettingMarried({
		man: Eko, 
		woman: Rina,
		in: "Gedung Serbaguna PLN Duren Tiga, Jl. Duren Tiga 102, Jakarta Selatan",
		on: "Sunday, April 7th, 2013",
		at: "11:00 - 13:00"
	});

	isResponsible(Eko);

	// Person Class
	function Person(name) {
		this.name = name;
		this.status = "single";
		this.responsibility = "none";
	}

	// The grant process
	function gettingMarried(args) {
		args.man.responsibility = "all";
		args.man.status = args.woman.status = "committed";
   	    	
		console.log("Expecting you to attend our wedding reception in " + args.in + 
				    " on " + args.on + 
				    " at " + args.at
				   );
	}

	// Check if the person is responsible
	function isResponsible(person) {
		return ((person.status === "single" || 
				 person.name === "Eko") ? false : true);
	}
	
}());
