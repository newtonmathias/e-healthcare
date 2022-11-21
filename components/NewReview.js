import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { checkReviewAvailability, clearErrors, newReview } from '../redux/actions/allDoctorsActions';
import { NEW_REVIEW_RESET } from '../redux/constants/allDoctorsConstants';
import { 
    StarIcon,
} from '@heroicons/react/24/outline'


export const NewReview = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const dispatch = useDispatch()
    const router = useRouter();

    const { error, success } = useSelector(state => state.newReview)
    const { reviewAvailable } = useSelector(state => state.checkReview)


    const { id } = router.query;


    useEffect(() => {
        if (id !== undefined) {
            dispatch(checkReviewAvailability(id))
        }

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            toast.success('Review is posted.')
            dispatch({ type: NEW_REVIEW_RESET })
        }

    }, [dispatch, success, error, id])

    const submitHandler = () => {
        const reviewData = {
            rating, comment, doctorId: id
        }

        let modal = document.getElementById("my-modal");
        modal.classList.add('hidden')

        dispatch(newReview(reviewData))
    }

    function setUserRatings() {
        let modal = document.getElementById("my-modal");

        modal.classList.remove('hidden')
        modal.classList.add('flex')

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.classList.add('hidden')
            }
            }

        const stars = document.querySelectorAll('.star');

        stars.forEach((star, index) => {
            star.starValue = index + 1;

            ['click', 'mouseover', 'mouseout'].forEach(function (e) {
                star.addEventListener(e, showRatings)
            })
        })

        function showRatings(e) {
            stars.forEach((star, index) => {
                if (e.type === 'click') {
                    if (index < this.starValue) {
                        star.classList.add('stroke-amber-500')

                        setRating(this.starValue)
                    } else {
                        star.classList.remove('stroke-amber-500')
                    }

                }

                if (e.type === 'mouseover') {
                    if (index < this.starValue) {
                        star.classList.add('stroke-amber-100')

                    } else {
                        star.classList.remove('stroke-amber-100')
                    }

                }

                if (e.type === 'mouseout') {
                    star.classList.remove('stroke-amber-100')
                }

            })
        }
        
    }

  return (
    <div>
        {reviewAvailable &&
            <button
                className="bg-indigo-500 text-white px-8 py-2 text-base font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                id="open-btn"
                onClick={setUserRatings}
            >
                Submit Your Review
            </button>
            }
        <div
            className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full  w-full"
            id="my-modal"
        >
        <div
            className="relative top-20 m-auto p-5 border w-96 shadow-lg rounded-md bg-white h-1/2"
        >
            <div className="mt-3 text-center">
            <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    name="" id="" cols="40" rows="8" className='border border-solid border-gray-300'
                ></textarea>

                <div className='flex mb-2 stars'>
                    <StarIcon className='h-6 star'/>
                    <StarIcon className='h-6 star'/>
                    <StarIcon className='h-6 star'/>
                    <StarIcon className='h-6 star'/>
                    <StarIcon className='h-6 star'/>
                </div>
                <button 
                    className='py-4 px-8 bg-indigo-500 text-color1 font-extrabold'
                    onClick={submitHandler}
                > 
                Submit
                </button>
            </div>
        </div>
    </div>
</div>
  )
}
