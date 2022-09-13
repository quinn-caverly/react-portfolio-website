import React from "react";
import styled from "styled-components";

import picNoBorders from "../../images/ProjectImages/Spiderweb/picNoBorders.png";
import complexDiagram from "../../images/ProjectImages/Spiderweb/complexDiagram.png";
import classifierExample from "../../images/ProjectImages/Spiderweb/classifierExample.png";
import someStandardNote from "../../images/ProjectImages/Spiderweb/someStandardNote.png";
import someDailyNote from "../../images/ProjectImages/Spiderweb/someDailyNote.png";
import someReadingNote from "../../images/ProjectImages/Spiderweb/someReadingNote.png";

import "./Compositions.css";

import Colormash from "../HomePageComponents/Colormash";

import HomeButton from "../HomeButton";
import ImageHolder from "./components/ImageHolder";
import TextBox from "./components/TextBox";
import BackgroundColor from "../BackgroundColor";

const SuperContainer = styled.section`
	display: flex;
	justify-content: flex-start;
	align-items: left;

	top: 0%;
	bottom: 0%;
	left: 0%;
	right: 0%;
`;

const BackgroundHolder = styled.section`
	display: flex;
	justify-content: flex-start;
	align-items: left;

	position: absolute;

	left: 0%;
	top: 0%;

	min-height: 100%;
	min-width: 100%;

	aspect-ratio: 1.777;
`;

export default class Spiderweb extends React.Component {
	render() {
		return (
			<SuperContainer>
				<BackgroundColor></BackgroundColor>
				<div className="ContentBoxScroller">
					<div className="TitleBox">
						<div className="ProjectTitle">
							Java Productivity Application using Natural Language
							Processing to Evaluate Note Similarity
						</div>
					</div>
					<TextBox
						text="This app is the result of the desire to create a tool that would
						 be personally useful for me and the desire to gain a greater understanding of programming
						  and the tools used in the field of computer science generally. 
						  I had gotten into the habit of writing daily notes and to-do lists to keep myself organized. 
						  I had the idea of creating a program which would organize these notes by their contents. 
						  During the creation of the app, I was introduced to NLP, frontend development, and fullstack development."
					></TextBox>
					<ImageHolder
						src={picNoBorders}
						alt="Pic of App"
					></ImageHolder>
					<a
						className="ExternalLink"
						href="https://github.com/quinn-caverly/spiderweb"
						target="_blank"
						rel="noreferrer"
					>
						Source via Github Repository
					</a>
					<TextBox text="5,761 Lines of Java Code; 25 Classes"></TextBox>
					<TextBox text="469 Lines of CSS Code"></TextBox>
					<div className="HeaderBox">
						Natural Language Processing Implementation for
						Similarity Between Notes
					</div>
					<ImageHolder
						src={complexDiagram}
						alt="Diagram of Pipeline"
					></ImageHolder>
					<TextBox
						text="The following is a sample of the similar notes
							classifier. The notes are shown with references
							so that they can be opened through a click."
					></TextBox>
					<ImageHolder
						src={classifierExample}
						alt="Example of Classifer"
					></ImageHolder>
					<TextBox
						text="Each note is run through the pipeline on the
								startup of the app. The words from that note and
								the words associated with those words are mapped
								and stored in a reference to that note. When a
								note is created, refreshed, or opened, it is
								compared to the maps of all the other notes and
								they are ranked and then displayed in a section
								on the bottom of the app. The classification
								process as a whole is designed for efficiency
								with a linear computation scheme between each
								note. This allows hundreds of notes to be
								compared and ranked instantly."
					></TextBox>
					<div className="HeaderBox">Note Types</div>
					<TextBox text="The various note types represent the notetaking formats that I would use when writing on paper."></TextBox>
					<TextBox text="The Reading Type note represents an intuitive way to annotate a book, article, or textbook."></TextBox>
					<ImageHolder
						src={someReadingNote}
						alt="Sample of Reading Note"
					></ImageHolder>
					<TextBox text="The Daily Type note is a direct translation of the 3 section format that I would use when planning my schedule on paper."></TextBox>
					<ImageHolder
						src={someDailyNote}
						alt="Sample of Daily Note"
					></ImageHolder>
					<TextBox text="The Standard Type note is for general notetaking with a section for images and a pyramid section for simplifying concepts."></TextBox>
					<ImageHolder
						src={someStandardNote}
						alt="Sample of Standard Note"
					></ImageHolder>
					<div className="HeaderBox">
						Citations (Software and Data Used)
					</div>
					<TextBox text="Finlayson, Mark Alan (2014) Java Libraries for Accessing the Princeton Wordnet: Comparison and Evaluation. In H. Orav, C. Fellbaum, & P. Vossen (Eds.), Proceedings of the 7th International Global WordNet Conference (GWC 2014) (pp. 78-85). Tartu, Estonia."></TextBox>
					<TextBox text="Apache Software Foundation. Apache OpenNLP. Version 2.0.0. September 4, 2022, https://opennlp.apache.org."></TextBox>
					<TextBox text="Compilation of Google English Word Frequency data by Rachel Tatman via Kaggle. https://www.kaggle.com/datasets/rtatman/english-word-frequency. "></TextBox>
					<div className="Buffer"></div>
				</div>
				<HomeButton></HomeButton>
			</SuperContainer>
		);
	}
}
