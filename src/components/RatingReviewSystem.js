'use client';

import { useState } from 'react';
import { StarIcon, UserIcon, CalendarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function RatingReviewSystem({ type = 'producer', entityId, entityName }) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    title: '',
    comment: '',
    quality: 5,
    quantity: 5,
    delivery: 5,
    communication: 5
  });

  // Dummy reviews data
  const reviews = [
    {
      id: 1,
      user: 'Supermarket ABC',
      userType: 'client',
      rating: 5,
      title: 'Produkte të shkëlqyera!',
      comment: 'Produktet janë të freskëta dhe të cilësisë së lartë. Dorëzimi është i shpejtë dhe i sigurt.',
      quality: 5,
      quantity: 4,
      delivery: 5,
      communication: 5,
      date: '2024-01-10',
      verified: true
    },
    {
      id: 2,
      user: 'Restaurant XYZ',
      userType: 'client',
      rating: 4,
      title: 'Shumë i kënaqur',
      comment: 'Cilësia e produkteve është e mirë, por ndonjëherë sasia nuk përputhet me porosinë.',
      quality: 4,
      quantity: 3,
      delivery: 4,
      communication: 4,
      date: '2024-01-08',
      verified: true
    },
    {
      id: 3,
      user: 'Market DEF',
      userType: 'client',
      rating: 5,
      title: 'Partner i besueshëm',
      comment: 'Fermeri është shumë profesional dhe produktet janë gjithmonë të freskëta.',
      quality: 5,
      quantity: 5,
      delivery: 5,
      communication: 5,
      date: '2024-01-05',
      verified: false
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const ratingDistribution = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Here you would submit the review to your backend
    console.log('Submitting review:', newReview);
    setShowReviewForm(false);
    setNewReview({
      rating: 5,
      title: '',
      comment: '',
      quality: 5,
      quantity: 5,
      delivery: 5,
      communication: 5
    });
  };

  const StarRating = ({ rating, onChange, readOnly = false }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => !readOnly && onChange(star)}
            className={`${readOnly ? 'cursor-default' : 'cursor-pointer hover:scale-110'} transition-transform`}
            disabled={readOnly}
          >
            <StarIcon
              className={`w-5 h-5 ${
                star <= rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Vlerësimet dhe Komentet
          </h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <StarIcon className="w-6 h-6 text-yellow-500 fill-current" />
              <span className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
            </div>
            <div className="text-gray-600">
              Bazuar në <span className="font-semibold">{totalReviews}</span> vlerësime
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium"
        >
          Shkruaj Vlerësim
        </button>
      </div>

      {/* Rating Distribution */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Shpërndarja e Vlerësimeve</h4>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-3">
              <span className="text-sm text-gray-600 w-8">{rating}</span>
              <StarIcon className="w-4 h-4 text-yellow-500 fill-current" />
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{
                    width: `${(ratingDistribution[rating] / totalReviews) * 100}%`
                  }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 w-8">{ratingDistribution[rating]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-4">Shkruaj Vlerësimin Tënd</h4>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vlerësimi i Përgjithshëm
              </label>
              <StarRating rating={newReview.rating} onChange={(rating) => setNewReview({...newReview, rating})} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Titulli
              </label>
              <input
                type="text"
                value={newReview.title}
                onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Shkruaj një titull..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Komenti
              </label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Shkruaj komentin tënd..."
                required
              />
            </div>

            {/* Detailed Ratings */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cilësia e Produkteve
                </label>
                <StarRating rating={newReview.quality} onChange={(rating) => setNewReview({...newReview, quality: rating})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sasia e Porositur
                </label>
                <StarRating rating={newReview.quantity} onChange={(rating) => setNewReview({...newReview, quantity: rating})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dorëzimi
                </label>
                <StarRating rating={newReview.delivery} onChange={(rating) => setNewReview({...newReview, delivery: rating})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Komunikimi
                </label>
                <StarRating rating={newReview.communication} onChange={(rating) => setNewReview({...newReview, communication: rating})} />
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 font-medium"
              >
                Dërgo Vlerësimin
              </button>
              <button
                type="button"
                onClick={() => setShowReviewForm(false)}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 font-medium"
              >
                Anulo
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <UserIcon className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h5 className="font-semibold text-gray-900">{review.user}</h5>
                    {review.verified && (
                      <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{review.date}</span>
                    <span>•</span>
                    <span className="capitalize">{review.userType}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <StarIcon className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="font-semibold text-gray-900">{review.rating}</span>
              </div>
            </div>

            <h6 className="font-semibold text-gray-900 mb-2">{review.title}</h6>
            <p className="text-gray-600 mb-4">{review.comment}</p>

            {/* Detailed Ratings */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Cilësia:</span>
                <StarRating rating={review.quality} readOnly />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Sasia:</span>
                <StarRating rating={review.quantity} readOnly />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Dorëzimi:</span>
                <StarRating rating={review.delivery} readOnly />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Komunikimi:</span>
                <StarRating rating={review.communication} readOnly />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Reviews */}
      {reviews.length > 3 && (
        <div className="text-center mt-6">
          <button className="text-green-600 hover:text-green-800 font-medium">
            Shiko Më Shumë Vlerësime
          </button>
        </div>
      )}
    </div>
  );
}
