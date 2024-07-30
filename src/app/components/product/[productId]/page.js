 


// 'use client';
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Navbar from '@/app/components/navbar/page';
// import Footer from '@/app/components/footer/page';
// import { usePathname } from 'next/navigation';
// import { useDispatch } from 'react-redux';
// import { add } from '@/Redux/Cartslice';
// import { toast } from 'react-toastify';
// import './product.css'; // Import the external CSS
// import { CiStar } from "react-icons/ci";

// StarIcon
// import StarIcon from "react-icons/ci";

// const ProductsApi = "http://localhost:5010/api/products";
// const ReviewsApi = "http://localhost:5010/api/reviews";

// export default function ProductDetails() {
//   const router = usePathname();
//   const id = router.split("/").pop();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [displayedImage, setDisplayedImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState({ username: '', rating: 0, comment: '' });
//   const dispatch = useDispatch(); // Redux dispatch

//   useEffect(() => {
//     if (id) {
//       const fetchProduct = async () => {
//         try {
//           const response = await fetch(`${ProductsApi}/${id}`);
//           if (response.ok) {
//             const data = await response.json();
//             setProduct(data);
//             setDisplayedImage(data.images[0]); // Set the initial displayed image
//           } else {
//             console.error('Failed to fetch product');
//           }
//         } catch (error) {
//           console.error('Error fetching product:', error);
//         } finally {
//           setLoading(false);
//         }
//       };

//       const fetchReviews = async () => {
//         try {
//           const response = await fetch(`${ReviewsApi}/${id}`);
//           if (response.ok) {
//             const data = await response.json();
//             setReviews(data);
//           } else {
//             console.error('Failed to fetch reviews');
//           }
//         } catch (error) {
//           console.error('Error fetching reviews:', error);
//         }
//       };

//       fetchProduct();
//       fetchReviews();
//     }
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (!product) return <div>Product not found</div>;

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleClickOutside = (event) => {
//     if (event.target.className === 'modal') {
//       closeModal();
//     }
//   };

//   const handleAddToWishlist = (product) => {
//     dispatch(add({ ...product, quantity: 1 }));
//     toast('Add to Cart', {
//       position: "bottom-center",
//       autoClose: 1000, // 1 second
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: false,
//       draggable: false,
//       progress: undefined,
//       style: {
//         backgroundColor: '#7D573D',
//         color: 'white',
//         fontWeight: 'bold',
//       },
//     });
//   };

//   const handleReviewChange = (e) => {
//     setNewReview({ ...newReview, [e.target.name]: e.target.value });
//   };

//   const handleStarClick = (rating) => {
//     setNewReview({ ...newReview, rating });
//   };

//   const handleReviewSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${ReviewsApi}/${id}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newReview),
//       });
//       if (response.ok) {
//         const newReviewData = await response.json();
//         setReviews([...reviews, newReviewData]);
//         // setNewReview({ username po: '', rating: 0, comment: '' });
        
//         setNewReview({ username: '', rating: 0, comment: '' });
//         toast('Review added successfully', {
//           position: "bottom-center",
//           autoClose: 1000, // 1 second
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: false,
//           draggable: false,
//           progress: undefined,
//           style: {
//             backgroundColor: '#964B00',
//             color: 'white',
//             fontWeight: 'bold',
//           },
//         });
//       } else {
//         console.error('Failed to add review');
//       }
//     } catch (error) {
//       console.error('Error adding review:', error);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div style={{ marginTop: '100px' }}>
//         <div className="product_detail_container">
//           <div className="all_img_container">
//             <Image
//               className="main_product_img"
//               src={displayedImage}
//               alt={product.name}
//               width={500}
//               height={500}
//               onClick={openModal}
//               style={{ objectFit: 'cover' }}
//             />
//             <div className="additional_images">
//               {product.images.map((image, index) => (
//                 <Image
//                   key={index}
//                   src={image}
//                   alt={`${product.name} - ${index + 1}`}
//                   width={80}
//                   height={100}
//                   onClick={() => setDisplayedImage(image)} // Change displayed image on click
//                   className="thumbnail_image"
//                   style={{ objectFit: 'cover' }} // Ensures image covers the entire area
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="content_container">
//             <h2 className="product_heading">{product.name}</h2>
//             <p className="description">{product.description}</p>
//             <p className="price">₹{product.price}</p>
//             <button className="prodcut_button" onClick={() => handleAddToWishlist(product)}>Add To Cart</button>
//           </div>
//         </div>
//       </div>
//       <div className="review_section">
//         <h3>Reviews</h3>
//         {reviews.map((review, index) => (
//           <div key={index} className="review">
//             <div className="review_rating">
//               {[...Array(5)].map((star, i) => (
//                 <CiStar key={i} className={i < review.rating ? 'filled' : ''} />
//               ))}
//               &nbsp; by {review.username}
//             </div>
//             <div className="review_comment">{review.comment}</div>
//             <div className="review_date">{new Date(review.createdAt).toLocaleString()}</div>
//           </div>
//         ))}
//         <h3>Add a Review</h3>
//         <form className="review_form" onSubmit={handleReviewSubmit}>
//           <label>
//             Username:
//             <input
//               type="text"
//               name="username"
//               value={newReview.username}
//               onChange={handleReviewChange}
//               required
//             />
//           </label>
//           <label>
//             Rating:
//             <div className="stars">
//               {[...Array(5)].map((star, i) => (
//                 <CiStar key={i} className={i < newReview.rating ? 'filled' : ''} onClick={() => handleStarClick(i + 1)} />
//               ))}
//             </div>
//           </label>
//           <label tab-label="Comment:">
//             Comment:
//             <textarea
//               name="comment"
//               value={newReview.comment}
//               onChange={handleReviewChange}
//               required
//             />
//           </label>
//           <button type="submit">Submit Review</button>
//         </form>
//       </div>
//       <Footer />
//       {isModalOpen && (
//         <div className="modal" onClick={handleClickOutside}>
//           <div className="modal_content">
//             <span className="close_button" onClick={closeModal}>&times;</span>
//             <Image
//               src={displayedImage}
//               alt={product.name}
//               width={800}
//               height={800}
//               className="modal_image"
//               style={{ objectFit: 'cover' }} // Ensures image covers the entire area
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

 


'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { add } from '@/Redux/Cartslice';
import { toast } from 'react-toastify';
import { CiStar } from "react-icons/ci";
import Navbar from '@/app/components/navbar/page';
import Footer from '@/app/components/footer/page';
import './product.css';

const ProductsApi = "http://localhost:5010/api/products";
const ReviewsApi = "http://localhost:5010/api/reviews";

export default function ProductDetails() {
  const router = usePathname();
  const id = router.split("/").pop();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [displayedImage, setDisplayedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ username: '', rating: 0, comment: '' });
  const [selectedImages, setSelectedImages] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`${ProductsApi}/${id}`);
          if (response.ok) {
            const data = await response.json();
            setProduct(data);
            setDisplayedImage(data.images[0]);
          } else {
            console.error('Failed to fetch product');
          }
        } catch (error) {
          console.error('Error fetching product:', error);
        } finally {
          setLoading(false);
        }
      };

      const fetchReviews = async () => {
        try {
          const response = await fetch(`${ReviewsApi}/${id}`);
          if (response.ok) {
            const data = await response.json();
            setReviews(data);
          } else {
            console.error('Failed to fetch reviews');
          }
        } catch (error) {
          console.error('Error fetching reviews:', error);
        }
      };

      fetchProduct();
      fetchReviews();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddToWishlist = (product) => {
    dispatch(add({ ...product, quantity: 1 }));
    toast('Add to Cart', {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      style: {
        backgroundColor: '#7D573D',
        color: 'white',
        fontWeight: 'bold',
      },
    });
  };

  const handleReviewChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleStarClick = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      toast('You can upload a maximum of 5 images', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        style: {
          backgroundColor: '#ff4d4d',
          color: 'white',
          fontWeight: 'bold',
        },
      });
      return;
    }

    files.forEach(file => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSelectedImages(prev => [...prev, reader.result]);
      };
    });
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${ReviewsApi}/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newReview, images: selectedImages }),
      });
      if (response.ok) {
        const newReviewData = await response.json();
        setReviews([...reviews, newReviewData]);
        setNewReview({ username: '', rating: 0, comment: '' });
        setSelectedImages([]);
        toast('Review added successfully', {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          style: {
            backgroundColor: '#964B00',
            color: 'white',
            fontWeight: 'bold',
          },
        });
      } else {
        console.error('Failed to add review');
      }
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '100px' }}>
        <div className="product_detail_container">
          <div className="all_img_container">
            <Image
              className="main_product_img"
              src={displayedImage}
              alt={product.name}
              width={500}
              height={500}
              onClick={openModal}
              style={{ objectFit: 'cover' }}
            />
            <div className="additional_images">
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${product.name} - ${index + 1}`}
                  width={80}
                  height={100}
                  onClick={() => setDisplayedImage(image)}
                  className="thumbnail_image"
                  style={{ objectFit: 'cover' }}
                />
              ))}
            </div>
          </div>
          <div className="content_container">
            <h2 className="product_heading">{product.name}</h2>
            <p className="description">{product.description}</p>
            <p className="price">₹{product.price}</p>
            <button className="prodcut_button" onClick={() => handleAddToWishlist(product)}>Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="review_section">
        <h3>Reviews</h3>
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <div className="review_rating">
              {[...Array(5)].map((star, i) => (
                <CiStar key={i} className={i < review.rating ? 'filled' : ''} />
              ))}
              &nbsp; by {review.username}
            </div>
            <div className="review_comment">{review.comment}</div>
            {review.images && review.images.length > 0 && (
              <div className="review_images">
                {review.images.map((image, i) => (
                  <Image
                    key={i}
                    src={image}
                    alt={`Review image ${i + 1}`}
                    width={80}
                    height={80}
                    className="review_image"
                    style={{ marginRight: '10px' }}
                  />
                ))}
              </div>
            )}
            <div className="review_date">{new Date(review.createdAt).toLocaleString()}</div>
          </div>
        ))}
        <h3>Add a Review</h3>
        <form className="review_form" onSubmit={handleReviewSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={newReview.username}
              onChange={handleReviewChange}
              required
            />
          </label>
          <label>
            Rating:
            <div className="stars">
              {[...Array(5)].map((star, i) => (
                <CiStar key={i} className={i < newReview.rating ? 'filled' : ''} onClick={() => handleStarClick(i + 1)} />
              ))}
            </div>
          </label>
          <label tab-label="Comment:">
            Comment:
            <textarea
              name="comment"
              value={newReview.comment}
              onChange={handleReviewChange}
              required
            />
          </label>
          <label>
            Upload Images:
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
          <div className="image_preview">
            {selectedImages.map((img, index) => (
              <img key={index} src={img} alt={`Selected preview ${index + 1}`} width={80} height={80} style={{ marginRight: '10px' }} />
            ))}
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
      <Footer />
      {isModalOpen && (
        <div className="modal" onClick={handleClickOutside}>
          <div className="modal_content">
            <span className="close_button" onClick={closeModal}>&times;</span>
            <Image
              src={displayedImage}
              alt={product.name}
              width={800}
              height={800}
              className="modal_image"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
