import React, { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import back from "../pics/formulaire.png";
import { Link,useNavigate } from "react-router-dom";

function Slides(props) {
  const navigate= useNavigate();
  const [loggedIn, setLoggedIn] = useState();
  const [error, setError] = useState();
  const token = localStorage.getItem("access");
  const [annonce, setAnnonce] = useState();

  const [user, setUser] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/api/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  },[]);

  useEffect(() => {
    fetch("http://localhost:8000/api/posts/"+ props.mail + "/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAnnonce(data);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center w-full h-full sm:py-8 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={6}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {annonce
                    ? annonce.map((post) => {
                        return (
                          <Slide index={0}>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto backdrop-blur-xl">
                              <img
                                src={back}
                                alt="black chair and white table"
                                className="object-cover object-center w-full rounded-xl "
                              />

                              <div className="bg-transparent  bg-opacity-30 absolute w-full h-full p-6">
                                <div className="lg:text-xl text-base lg:leading-5 text-white flex gap-3">
                                  <img
                                    src={`http://localhost:8000${post.photo}`}
                                    className="h-14 w-14 rounded-full"
                                  ></img>
                                  <div className="leading-6">
                                    <p>
                                      
                                      {user.first_name}-{user.last_name}
                                      <br></br>
                                      {post.lieu}
                                    </p>
                                  </div>
                                </div>
                                <img
                                  src={`http://localhost:8000${post.photo}`}
                                  className="h-[70%] w-[90%] justify-center mx-auto flex"
                                />
                                <div className="flex  justify-center pt-10 gap-3">
                               <Link to={'/' + post.id}>   <button
                                    type="submit"
                                    className="border border-[#7A6048] rounded-xl px-4 backdrop-blur-3xl  h-10  focus:bg-transparent focus:text-[#7A6048] hover:bg-transparent text-white hover:text-[#7A6048]"
                                  >
                                    Afficher
                                  </button></Link>
                                  <Link to={"/annonce/" + post.id + "/"} state={{ id: post.id}}>
                                  
                                    <button
                                      type="submit"
                                      className="border border-[#2B3A55] rounded-xl  px-4 h-10  bg-[#2B3A55] focus:bg-transparent focus:text-[#2B3A55] hover:bg-transparent text-white hover:text-[#2B3A55]"
                                    >
                                      Modifier
                                    </button>
                                  </Link>
                                  <button onClick={()=>{
                    console.log("deleting ...")
                    fetch('http://localhost:8000/api/posts/'+post.id +'/' ,{
                    method: 'DELETE',
                    headers: { 
                                'Content-Type': 'application/json',
                                 Authorization: 'Bearer ' + localStorage.getItem('access')
                             }
                })
                        .then((response)=>{
                            if (response.status === 401) {
                                setLoggedIn(false);
                                navigate('/log')}
                            if(!response.ok){
                                throw new Error('something went wrong');
                            }
                            navigate('/');
                        })
                        .catch((e)=>{
                            setError(e.message);
                            
                        })
                                    }}>delete</button>
                                </div>
                              </div>
                            </div>
                          </Slide>
                        );
                      })
                    : null}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {annonce
                    ? annonce.map((post) => {
                        return (
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={back}
                        alt="black chair and white table"
                        className="object-cover object-center w-full h-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full  p-3">
                      <div className="lg:text-xl text-base lg:leading-5 text-white flex gap-3">
                                  <img
                                    src={`http://localhost:8000${post.photo}`}
                                    className="h-14 w-14 rounded-full"
                                  ></img>
                                  <div className="leading-6">
                                    <p>
                                      
                                      {user.first_name}-{user.last_name}
                                      <br></br>
                                      {post.lieu}
                                    </p>
                                  </div>
                                </div>
                        <img
                                  src={`http://localhost:8000${post.photo}`}
                                  className="h-[250px] w-[170px]  justify-center mx-auto flex"
                                />
                        <div className="flex h-full items-end pb-6">
                        <Link to={'/' + post.id}>   <button
                                    type="submit"
                                    className="border border-[#7A6048] rounded-xl px-4 backdrop-blur-3xl  h-10  focus:bg-transparent focus:text-[#7A6048] hover:bg-transparent text-white hover:text-[#7A6048]"
                                  >
                                    Afficher
                                  </button></Link>
                                  <Link to={"/annonce/" + post.id + "/"} state={{ id: post.id}}>
                                  
                                    <button
                                      type="submit"
                                      className="border border-[#2B3A55] rounded-xl  px-4 h-10  bg-[#2B3A55] focus:bg-transparent focus:text-[#2B3A55] hover:bg-transparent text-white hover:text-[#2B3A55]"
                                    >
                                      Modifier
                                    </button>
                                  </Link>
                                  <button onClick={()=>{
                    console.log("deleting ...")
                    fetch('http://localhost:8000/api/posts/'+post.id +'/' ,{
                    method: 'DELETE',
                    headers: { 
                                'Content-Type': 'application/json',
                                 Authorization: 'Bearer ' + localStorage.getItem('access')
                             }
                })
                        .then((response)=>{
                            if (response.status === 401) {
                                setLoggedIn(false);
                                navigate('/log')}
                            if(!response.ok){
                                throw new Error('something went wrong');
                            }
                            navigate('/');
                        })
                        .catch((e)=>{
                            setError(e.message);
                            
                        })
                                    }}>delete</button>
                        </div>
                      </div>
                    </div>
                  </Slide>)}):null}
      
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden "
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src="https://i.ibb.co/fDngH9G/carosel-1.png"
                        alt="black chair and white table"
                        className="object-cover object-center w-full"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                        <div className="lg:text-xl text-base lg:leading-5 text-white flex gap-3">
                          <img
                            src="https://i.ibb.co/fDngH9G/carosel-1.png"
                            className="h-14 w-14 rounded-full"
                          ></img>
                          <div className="leading-6">
                            <p>
                              Issad Chiraz<br></br>
                              Amizour, Lota
                            </p>
                          </div>
                        </div>
                        <img src="https://i.ibb.co/fDngH9G/carosel-1.png" />
                        <div className="flex h-full items-end pb-10">
                          <button
                            type="submit"
                            className="border border-[#7A6048] w-[80px] sm:w-[170px] h-10  bg-[#7A6048] focus:bg-transparent focus:text-[#7A6048] hover:bg-transparent text-white hover:text-[#7A6048]"
                          >
                            MODIFY
                          </button>
                          <button
                            type="submit"
                            className="border border-[#7A6048] w-[80px] sm:w-[170px] h-10  bg-[#7A6048] focus:bg-transparent focus:text-[#7A6048] hover:bg-transparent text-white hover:text-[#7A6048]"
                          >
                            MODIFY
                          </button>{" "}
                        </div>
                      </div>
                    </div>
                  </Slide>
               
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default Slides;
