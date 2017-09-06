import React from "react";
import preload from "../data.json";
import Showcard from "./ShowCard";

const Search = () => (
	<div className="search">
		{/*<pre><code>{JSON.stringify(preload, null, 4)}</code></pre> //what this does is a quick way to dump a bunch of data to the DOM... see what it looks like*/}
		{preload.shows.map(show => <Showcard show={show} />)}
	</div>
);

export default Search;
