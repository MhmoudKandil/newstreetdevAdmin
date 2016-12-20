import { Injectable } from '@angular/core';

@Injectable()


export class videostate {
	stateID: number;
	stateName: string;
}
export class video {
	id: number;
	videoName: string;
	videoMetaData: string;
	source: string;
	state: videostate;
	requestcomment: string;
	//needattention: boolean;
	selected: boolean;
}

export class BasicTablesService {

	smartTablePageSize = 10;
	
	videolist: video[] = [
		{
			id: 1,
			videoName: 'Videos: Gun Owner Refuses To Be Cucked By Cops Harassing Him For Permit',
			videoMetaData: "",
			source: "BOX.COM",
			state: { stateID: 1, stateName: "Not Ordered" },
			requestcomment: "",
			selected: false
		},
		{
			id: 2,
			videoName: 'Marta Police Lt. Willie Davenport’s Intimidation and AggressivePolicing Tactics',
			videoMetaData: `I'm going to share with you a paradigm-shifting perspective on the issues of gender violence -- sexual assault, domestic violence, relationship abuse, sexual harassment, sexual abuse of children. That whole range of issues that I'll refer to in shorthand as "gender violence issues," they've been seen as women's issues that some good men help out with, but I have a problem with that frame and I don't accept it. I don't see these as women's issues that some good men help out with. In fact, I'm going to argue that these are men's issues, first and foremost.`,
			source: "BOX.COM",
			state: { stateID: 2, stateName: "Ordered" },
			requestcomment: "",
			selected: false
		},
		{
			id: 3,
			videoName: 'Are the Maryland State Police Harassing this Family?',
			videoMetaData: `The first is that it gives men an excuse not to pay attention. Right? A lot of men hear the term "women's issues" and we tend to tune it out, and we think, "Hey, I'm a guy. That's for the girls," or "That's for the women." And a lot of men literally don't get beyond the first sentence as a result. It's almost like a chip in our brain is activated, and the neural pathways take our attention in a different direction when we hear the term "women's issues." This is also true, by the way, of the word "gender," because a lot of people hear the word "gender" and they think it means "women." So they think that gender issues is synonymous with women's issues. There's some confusion about the term gender`,
			source: "BOX.COM",
			state: { stateID: 1, stateName: "Not Ordered" },
			requestcomment: "",
			selected: false
		},
		{
			id: 4,
			videoName: 'Northern Nevada CopBlock Owns Reno Officer While Chalking the Police',
			videoMetaData: `And actually, let me illustrate that confusion by way of analogy. So let's talk for a moment about race. In the U.S., when we hear the word "race," a lot of people think that means African-American, Latino, Asian-American, Native American, South Asian, Pacific Islander, on and on. A lot of people, when they hear the word "sexual orientation" think it means gay, lesbian, bisexual. And a lot of people, when they hear the word "gender," think it means women. In each case, the dominant group doesn't get paid attention to. Right? As if white people don't have some sort of racial identity or belong to some racial category or construct, as if heterosexual people don't have a sexual orientation, as if men don't have a gender. This is one of the ways that dominant systems maintain and reproduce themselves, which is to say the dominant group is rarely challenged to even think about its dominance, because that's one of the key characteristics of power and privilege, the ability to go unexamined, lacking introspection, in fact being rendered invisible in large measure in the discourse about issues that are primarily about us. And this is amazing how this works in domestic and sexual violence, how men have been largely erased from so much of the conversation about a subject that is centrally about men`,
			source: "local",
			state: { stateID: 1, stateName: "Not-Ordered" },
			requestcomment: "",
			selected: false
		},
		{
			id: 5,
			videoName: 'REPO MAN HARASSED BY PHILADELPHIA POLICE (VIDEO)',
			videoMetaData: `And actually, let me illustrate that confusion by way of analogy. So let's talk for a moment about race. In the U.S., when we hear the word "race," a lot of people think that means African-American, Latino, Asian-American, Native American, South Asian, Pacific Islander, on and on. A lot of people, when they hear the word "sexual orientation" think it means gay, lesbian, bisexual. And a lot of people, when they hear the word "gender," think it means women. In each case, the dominant group doesn't get paid attention to. Right? As if white people don't have some sort of racial identity or belong to some racial category or construct, as if heterosexual people don't have a sexual orientation, as if men don't have a gender. This is one of the ways that dominant systems maintain and reproduce themselves, which is to say the dominant group is rarely challenged to even think about its dominance, because that's one of the key characteristics of power and privilege, the ability to go unexamined, lacking introspection, in fact being rendered invisible in large measure in the discourse about issues that are primarily about us. And this is amazing how this works in domestic and sexual violence, how men have been largely erased from so much of the conversation about a subject that is centrally about men`,
			source: "local",
			state: { stateID: 1, stateName: "Not-Ordered" },
			requestcomment: "",
			//comment: "",
			selected: false
		},
		{
			id: 6,
			videoName: 'Wareham Police Harass Crime Watcher (VIDEO)',
			videoMetaData: `It starts with a very basic English sentence: "John beat Mary." That's a good English sentence. John is the subject. Beat is the verb. Mary is the object. Good sentence. Now we're going to move to the second sentence, which says the same thing in the passive voice. "Mary was beaten by John." And now a whole lot has happened in one sentence. We've gone from "John beat Mary" to "Mary was beaten by John." We've shifted our focus in one sentence from John to Mary, and you can see John is very close to the end of the sentence, well, close to dropping off the map of our psychic plain. The third sentence, John is dropped, and we have, "Mary was beaten," and now it's all about Mary. We're not even thinking about John. It's totally focused on Mary. Over the past generation, the term we've used synonymous with "beaten" is "battered," so we have "Mary was battered." And the final sentence in this sequence, flowing from the others, is, "Mary is a battered woman." So now Mary's very identity -- Mary is a battered woman -- is what was done to her by John in the first instance. But we've demonstrated that John has long ago left the conversation`,
			source: "local",
			state: { stateID: 1, stateName: "Not-Ordered" },
			requestcomment: "",
			//comment: "",
			selected: false
		},
		{
			id: 7,
			videoName: 'Neptune City (NJ) Police Ongoing Harrassment and Intimidation of Nurse and Small Children',
			videoMetaData: `We have to ask a different set of questions. You can see where I'm going with this, right? The questions are not about Mary. They're about John. The questions include things like, why does John beat Mary? Why is domestic violence still a big problem in the United States and all over the world? What's going on? Why do so many men abuse, physically, emotionally, verbally, and other ways, the women and girls, and the men and boys, that they claim to love? What's going on with men? Why do so many adult men sexually abuse little girls and little boys? Why is that a common problem in our society and all over the world today? Why do we hear over and over again about new scandals erupting in major institutions like the Catholic Church or the Penn State football program or the Boy Scouts of America, on and on and on? And then local communities all over the country and all over the world, right? We hear about it all the time. The sexual abuse of children. What's going on with men? Why do so many men rape women in our society and around the world? Why do so many men rape other men? What is going on with men? And then what is the role of the various institutions in our society that are helping to produce abusive men at pandemic rates?`,
			source: "local",
			state: { stateID: 1, stateName: "Not-Ordered" },
			requestcomment: "",
			//comment: "",
			selected: false
		}

	];


	getVideos(): Promise<video[]> {
		return new Promise<video[]>(resolve =>
			setTimeout(resolve, 2000)) // delay 2 seconds
			.then(() => this.videolist);
	}

	getVideo(videoID): Promise<video> {
		return new Promise<video>(resolve =>
			setTimeout(resolve, 2000)) // delay 2 seconds
			.then(() => this.videolist.find(x => x.id == videoID));
	}


	orderInDepthOrder(vid: video, requestComment: string): Promise<video> {
		var retvid:any=Object.assign({},vid);
		retvid.requestcomment = requestComment;
		retvid.state = { stateID: 3, stateName: "An in-depth manual QA analysis is in progress" } 
		
		return new Promise<video>(resolve =>
			setTimeout(resolve, 2000)) // delay 2 seconds
			.then(() => retvid);
	}
	reviewVideo(vid: video, qareviewComment: string, needattention: boolean): Promise<video> {

		var retvid:any=Object.assign({},vid);
		retvid.requestcomment = qareviewComment;
	
		if(needattention == true)
			retvid.state = { stateID: 4, stateName: "QAed and need attention" }
		else
		    retvid.state = { stateID: 5, stateName: "QAed and doesn't attention"}	 

		return new Promise<video>(resolve =>
			setTimeout(resolve, 2000)) // delay 2 seconds
			.then(() => retvid);
	}


	calculateScore(videoID) {
		return Math.floor(Math.random() * 89) + 10;
	}

	analyzeVideo(videoID) {

	}

	constructor() {
		//alert('test')
		// this.editableTableData = this.smartTableData.slice(0, 36);
	}





}
