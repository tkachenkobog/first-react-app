import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    };
    handler = (e) => {
        if (e.key === 'Enter') {
            this.props.searcher(this.state.search, this.state.type);
        }
    };
    filter = (e) => {
        this.setState(()=>({type: e.target.dataset.type}), ()=>{
            this.props.searcher(this.state.search, this.state.type);

        });
    };
    render() {
        return (
            <div className="row">
                <div className="input-field ">
                    <input
                        placeholder="Search"
                        id="email_inline"
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handler}
                    />
                </div>
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={this.filter}
                            checked={this.state.type==='all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="movie"
                            onChange={this.filter}
                            checked={this.state.type==='movie'}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="series"
                            onChange={this.filter}
                            checked={this.state.type==='series'}
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
        );
    }
}

export { Search };
