import React, {useState} from 'react';

const Search =(props)=> {
    const{
        searcher=Function.prototype,
    }=props; 
    const[search, setSearch ]=useState('');
    const[type, setType]=useState('all');
   
   const handler = (e) => {
        if (e.key === 'Enter') {
           
            searcher(search, type);
        }
    };
   const filter = (e) => {
        setType(e.target.dataset.type);
        searcher(search, e.target.dataset.type);
        
    };
        return (
            <div className="row">
                <div className="input-field ">
                    <input
                        placeholder="Search"
                        id="email_inline"
                        type="search"
                        className="validate"
                        value={search}
                        onChange={(e) =>
                            setSearch (e.target.value)
                        }
                        onKeyDown={handler}
                    />
                </div>
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={filter}
                            checked={type==='all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="movie"
                            onChange={filter}
                            checked={type==='movie'}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="series"
                            onChange={filter}
                            checked={type==='series'}
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
        );
    }


export { Search };
