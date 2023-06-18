import reviews_graph from "../../assets/reviews_graph.png"
import star from "../../assets/star.png"

export default function Review() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    const renderReviewData = () => {
       return reviewsData.map(review =>( 
        <>
        <div className="nexted-container-main" key={review.id}>
           {[...Array(review.rating)].map((_, i) => (
                            <img alt="star" key={i} src={star} className="star" style={{width:20, paddingRight:5 }} />
           ))}
          <h4>{review.name} <span className="span3">{review.date}</span></h4> 
          <p className="review-text">{review.text}</p>
          <hr />
        </div>
        </>
        ))

    }

    return (
        <div className="nexted-container">
           <h2>Your reviews<span className="span2"> last <u>30 days</u></span></h2>
           <img alt="reviews_graph" src={reviews_graph} />
           <h3 className="main-title">Reviews({reviewsData.length})</h3> 
           {renderReviewData()}
        </div>
    )
}