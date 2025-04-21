// import { useState } from "react";
import { TopBar } from "../components/topbar";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { CheckCircle, Upload } from "lucide-react";
import BannerImg from "../assets/banner.png";
import Media1 from "../assets/media/video-1.mp4";
import Media2 from "../assets/media/video-2.mp4";
import Media3 from "../assets/media/video-3.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../../node_modules/swiper/swiper.min.css";
import "../../node_modules/swiper/swiper-bundle.css";
import "../../node_modules/swiper/swiper-bundle.min.css";
import { Play } from "@phosphor-icons/react/dist/ssr";

export { BannerImg, Media1, Media2, Media3 };

export const BookMakeUp: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   location: "",
  //   makeup_type: "",
  //   time: "",
  //   date: "",
  //   phone: "",
  // });
  // const [photo, setPhoto] = useState<File | null>(null);
  // // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  // const [success, setSuccess] = useState<string | null>(null);
  // const navigate = useNavigate();

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setPhoto(e.target.files[0]);
  //   }
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError(null);
  //   setSuccess(null);

  //   try {
  //     const formDataToSend = new FormData();
  //     formDataToSend.append("name", formData.name);
  //     formDataToSend.append("email", formData.makeup_type);
  //     formDataToSend.append("email", formData.date);
  //     formDataToSend.append("email", formData.phone);
  //     formDataToSend.append("email", formData.time);
  //     formDataToSend.append("location", formData.location);
  //     if (photo) {
  //       formDataToSend.append("photo", photo);
  //     }

  //     await axios.post(
  //       "http://localhost/maggiebeautyhome-backend/book-makeup.php",
  //       formDataToSend,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );

  //     setSuccess("Agent signed up successfully!");
  //     setFormData({
  //       name: "",
  //       makeup_type: "",
  //       date: "",
  //       time: "",
  //       location: "",
  //       phone: "",
  //     });
  //     setPhoto(null);
  //     navigate("/start-your-claim");
  //   } catch (error) {
  //     setError("Error signing up. Please try again.");
  //     console.error("Error signing up:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <main className="w-full">
      {/* {success && (
        <div className="w-full flex items-center fixed bg-primary/40 p-4 bg-opacity-40 top-0 z-20 justify-center h-screen">
          {" "}
          <div className="rounded-md flex items-center text-green-600 gap-4 max-w-sm w-full tw-font-medium bg-white p-5">
            <CheckCircle className=" w-8  h-8" />
            Succesfully booked your session{" "}
          </div>{" "}
        </div>
      )} */}
      <main className="w-full max-w-[90%] mx-auto ">
        <TopBar />
{/*         
        <section className="w-full h-auto pt-8">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div className="space-y-6 text-center max-w-2xl flex items-center flex-col mx-auto w-full">
            <p className="rounded-3xl bg-transparent border text-center border-primary py-1 px-4 text-xs w-fit flex items-center justify-between gap-4">
              <img
                src={BannerImg}
                alt="banner"
                className="w-6 h-6 object-cover rounded-full border border-primary"
              />
              <span className="text-primary">Glamor, beauty & style</span>
            </p>
            <h1 className="text-center w-full ds:text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-gray-800 inter-tight-500 text-balance">
              Book your quality{" "}
              <span className="bg-gradient-to-tr from-primary to-primary/80 text-transparent bg-clip-text  via-violet-600">
                "make up session"
              </span>
            </h1>
            <p className="text inter-400 text-gray-500">
              at maggie beauty home, we offer a variaties of make ups , suitable
              for any occation and affordable too, so why not book a session
              with us now!
            </p>
            <a href="#book-make-up-service" className="text-white rounded-3xl bg-gradient-to-bl from-primary via-primary/80 to-violet-700 px-6 py-2">
              Book a session
            </a>
          </div>
          <div className="py-8"></div>
        </section> */}
      </main>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1.1}
        spaceBetween={10}
        autoplay={true}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1.3, spaceBetween: 20 },
          768: { slidesPerView: 2.1, spaceBetween: 30 },
          1024: { slidesPerView: 2.5, spaceBetween: 10 },
        }}
        className="mySwiper"
      >
        <SwiperSlide className="rounded-md mb-20">
          <section className="bg-gray-400 relative rounded-md overflow-hidden h-[200px]">
           
            <video
              src={Media1}
              className="fixed h-full w-full rounded-md object-cover top-0 left-0"
              autoPlay
              muted
            ></video>
            <main className="w-full h-[200px] bg-primary/40 top-0 absolute z-30 flex items-center justify-center">
              <button className="border border-white w-14 h-14 flex items-center justify-center rounded-full">
                <Play size={20} className="text-white" />
              </button>
            </main>
          </section>
        </SwiperSlide>
        <SwiperSlide className="rounded-md mb-20">
          <section className="bg-gray-400 relative rounded-md overflow-hidden h-[200px]">
            <video
              src={Media2}
              className="fixed h-full w-full rounded-md object-cover top-0 left-0"
              autoPlay
              muted
            ></video>
            <main className="w-full h-[200px] bg-primary/40 top-0 absolute z-30 flex items-center justify-center">
              <button className="border border-white w-14 h-14 flex items-center justify-center rounded-full">
                <Play size={20} className="text-white" />
              </button>
            </main>
          </section>
        </SwiperSlide>
        <SwiperSlide className="rounded-md mb-20">
          <section className="bg-gray-400 relative rounded-md overflow-hidden h-[200px]">
            <video
              src={Media3}
              className="fixed h-full w-full rounded-md object-cover top-0 left-0"
              autoPlay
              muted
            ></video>
            <main className="w-full h-[200px] bg-primary/40 top-0 absolute z-30 flex items-center justify-center">
              <button className="border border-white w-14 h-14 flex items-center justify-center rounded-full">
                <Play size={20} className="text-white" />
              </button>
            </main>
          </section>
        </SwiperSlide>
      </Swiper>
      
    </main>
  );
};

// import React, { useState } from "react";
// import axios from "axios";
// import { CheckCircle,  Upload } from "lucide-react";
// import { GoBack } from "@/components/ui/go-back";
// import { Link, useNavigate } from "react-router-dom";

// const AgentSignup: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     location: "",
//   });
//   const [photo, setPhoto] = useState<File | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setPhoto(e.target.files[0]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccess(null);

//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append("name", formData.name);
//       formDataToSend.append("email", formData.email);
//       formDataToSend.append("password", formData.password);
//       formDataToSend.append("location", formData.location);
//       if (photo) {
//         formDataToSend.append("photo", photo);
//       }

//       await axios.post("http://localhost/refundme_backend/add-agent.php", formDataToSend, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setSuccess("Agent signed up successfully!");
//       setFormData({ name: "", email: "", password: "", location: "" });
//       setPhoto(null);
//       navigate("/start-your-claim");
//     } catch (error) {
//       setError("Error signing up. Please try again.");
//       console.error("Error signing up:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center w-full space-y-6 flex-col items-center min-h-screen bg-gray-100">
//        {success && <div className="w-full flex items-center fixed bg-tw_primary/40 p-4 bg-opacity-40 top-0 z-20 justify-center h-screen">
//           <div className="rounded-md flex items-center text-green-600 gap-4 max-w-sm w-full tw-font-medium bg-white p-5">
//             <CheckCircle className=" w-8  h-8" />
//             Succesfully created an account
//           </div>
//         </div>}
//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//         <div className="absolute top-0 left-0 m-5">
//             <GoBack />
//         </div>
//       <div className="bg-white p-6 rounded-lg  shadow-lg w-full max-w-96">
//         <h2 className="text-lg font-semibold text-center mb-4 tw-font-medium">Agent Signup</h2>

//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="border p-2 w-full rounded text-sm tw-font-regular text-gray-600"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="border p-2 w-full rounded text-sm tw-font-regular text-gray-600"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="border p-2 w-full rounded text-sm tw-font-regular text-gray-600"
//           />
//           <input
//             type="text"
//             name="location"
//             placeholder="Location"
//             value={formData.location}
//             onChange={handleChange}
//             required
//             className="border p-2 w-full rounded text-sm tw-font-regular text-gray-600"
//           />

//           {/* File Upload */}
//           <label
//             htmlFor="photo"
//             className="flex items-center justify-center tw-font-regular cursor-pointer border border-dashed p-3 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100 transition"
//           >
//             {photo ? (
//               <span className="text-sm">{photo.name}</span>
//             ) : (
//               <>
//                 <Upload size={18} className="mr-2 text-gray-500 tw-font-regular" />
//                 <span className="text-sm">Upload Profile Photo</span>
//               </>
//             )}
//           </label>
//           <input
//             id="photo"
//             type="file"
//             name="photo"
//             accept="image/*"
//             className="hidden"
//             onChange={handleFileChange}
//           />

//           <button
//             type="submit"
//             className="w-full px-4 py-2 tw-font-regular text-white bg-tw_primary smooth hover:bg-tw_primary/80 rounded-md"
//             disabled={loading}
//           >
//             {loading ? "Signing up..." : "Sign Up"}
//           </button>
//         </form>
//       </div>
//         <div className="tw-font-regular text-center flex items-center flex-wrap justify-center  text-gray-600">Already have an account? <Link to="/agent-login" className="text-tw_primary underline underline-offset-8 ml-2">login to your account</Link></div>
//     </div>
//   );
// };

// export default AgentSignup;
