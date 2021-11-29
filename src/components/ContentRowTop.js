import React from 'react';
import Contentrowmovie from './ContentRowMovie';
import Lastmovieindb from './LastMovieinDb';
import Genresindb from './GenresinDb';

const Contentrowtop = () => {
  return (
   
      <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>			

          <Contentrowmovie/>

					<div className="row">
						<Lastmovieindb/>						
						<Genresindb/>
					</div>
				</div>
 
  );
}

export default Contentrowtop;