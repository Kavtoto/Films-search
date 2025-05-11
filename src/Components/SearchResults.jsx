export default function SearchResults({ films, loading, notFound }) {
    return (
        <>
            {loading && <p className="searching">Loading...</p>}
            {notFound && <p className="searching">Nothing found.</p>}

            {films && films.description && !loading && (
                <div className="searced-films">
                    {films.description.map((film, index) => (
                        <div key={index} id="films-found">
                            <h1>{film["#TITLE"]}</h1>
                            <img
                                src={film["#IMG_POSTER"]}
                                alt={film["#TITLE"]}
                                width={200}
                            />
                            <p>Acters: {film["#ACTORS"]}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}