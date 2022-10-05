import './style.css'
import MovieCard from "components/MovieCard"
import Pagination from "components/Pagination"

function Listing() {
    return (

        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className='transition-dsmovie-card'>
                            <MovieCard />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className='transition-dsmovie-card'>
                            <MovieCard />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className='transition-dsmovie-card'>
                            <MovieCard />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className='transition-dsmovie-card'>
                            <MovieCard />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className='transition-dsmovie-card'>
                            <MovieCard />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className='transition-dsmovie-card'>
                            <MovieCard />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className='transition-dsmovie-card'>
                            <MovieCard />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className='transition-dsmovie-card'>
                            <MovieCard />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className='transition-dsmovie-card'>
                            <MovieCard />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className='transition-dsmovie-card'>
                            <MovieCard />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className='transition-dsmovie-card'>
                            <MovieCard />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className='transition-dsmovie-card'>
                            <MovieCard />
                        </div>
                    </div>

                </div>
            </div>

        </>

    );
}
export default Listing