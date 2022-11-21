import { 
    StarIcon,
    TrophyIcon,
    HandThumbUpIcon,
    CheckBadgeIcon
} from '@heroicons/react/24/solid'
const ListReview = ({ reviews }) => {
    const starArray = [...Array(5).keys()].map(i => i + 1);
    const Rating = () =>
    starArray.map(i => ( // use many times
        <StarIcon className='h-4 text-orange-400' key={Math.random()}/>
    ));

  return (
    <>
        <div className="reviews w-75">
        <h3 className='font-semibold text-2xl py-2'>Patient reviews</h3>
            <hr />

            {reviews && reviews.map(review => (

                <div key={review._id} className="review-card my-3">
                    <p className='flex'>{Rating((review.rating))}</p>
                        <div className="flex justify-between">
                            <div className='text-green-800 font-bold inline-flex my-3'>
                                <p className='font-serif pr-1'>{review.name}</p>
                            </div>
                            <div className='text-green-800 inline-flex my-3'>
                                <CheckBadgeIcon className='h-3 my-auto px-1'/>
                                <p className='font-serif pr-1'>Verified patient</p>
                            </div>
                        </div>
                    <p className="pb-2">{review.comment}</p>
                    <hr />
                </div>

            ))}
        </div>
    </>
  )
}

export default ListReview