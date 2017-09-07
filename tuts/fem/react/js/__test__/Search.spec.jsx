import React from "react";
// import renderer from "react-test-renderer";
import preload from "../../data.json";
import { shallow } from "enzyme";
import Search from "../Search";
import ShowCard from "../ShowCard";

test("Search renders correctly", () => {
	const component = shallow(<Search />);
	expect(component).toMatchSnapshot();
});

test("Search should render the correct amount of shows", () => {
	const component = shallow(<Search />);
	expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test("Search should render correct amount of shows based on search term", () => {
	const searchWord = "black";
	const component = shallow(<Search />);
	component.find("input").simulate("change", { target: { value: searchWord } });
	// const showCount = ~3:30, setting this ugly thing up
});
