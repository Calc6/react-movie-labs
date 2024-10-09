import React, { useState, useEffect } from "react"; // Update the import statement to include useEffect and useState

export default function FilterMoviesCard(props) {
  const [genres, setGenres] = useState([{ id: '0', name: "All" }]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY
    )
      .then(res => res.json())
      .then(json => {
        // console.log(json.genres)
        return json.genres;
      })
      .then(apiGenres => {
        setGenres([genres[0], ...apiGenres]);
      });
    // eslint-disable-next-line
  }, []);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    // Completed later
  };

  const handleTextChange = (e) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <Card 
      sx={{
        backgroundColor: "rgb(204, 204, 0)"
      }} 
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField
          sx={{ ...formControl }}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={props.titleFilter}
          onChange={handleTextChange}
        />
        <FormControl sx={{ ...formControl }}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            defaultValue=""
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
