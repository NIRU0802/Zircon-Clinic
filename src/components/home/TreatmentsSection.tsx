"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import {
  getCategories,
  getTreatmentsByCategory,
} from "@/data/treatments";

import SectionTitle from "@/components/ui/SectionTitle";

import {
  staggerContainer,
  staggerItem,
} from "@/utils/animations";

import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";


const TreatmentsSection = () => {

  const [activeCategory, setActiveCategory] =
    useState("All");


  const categories = useMemo(
    () => getCategories(),
    []
  );


  const filteredTreatments = useMemo(
    () => getTreatmentsByCategory(activeCategory),
    [activeCategory]
  );



  return (
    <section
      className="
        relative
        overflow-hidden
        section-padding
        bg-gradient-to-b
        from-white
        via-gray-50
        to-white
      "
    >

      {/* Background */}

      <div
        className="
          absolute
          -top-40
          -right-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-primary-100/40
          blur-3xl
        "
      />


      <div
        className="
          absolute
          bottom-0
          -left-40
          w-[350px]
          h-[350px]
          rounded-full
          bg-yellow-100/40
          blur-3xl
        "
      />



      <div className="container-custom relative z-10">


        <SectionTitle
          badge="Wakad, Pune"
          subtitle="Our Treatments"
          title='Complete <span class="text-gradient">Dental Care</span> Solutions'
          description="
          Advanced dental treatments combining technology,
          expertise and personalized patient care.
          "
        />



        {/* CATEGORY */}

        <div
          className="
          flex
          gap-3
          mb-14
          justify-start
          md:justify-center
          overflow-x-auto
          scrollbar-hide
          pb-3
          "
        >

          {
            categories.map((category) => (

              <button

                key={category}

                onClick={() =>
                  setActiveCategory(category)
                }

                aria-pressed={
                  activeCategory === category
                }

                className={`
                  relative
                  px-6
                  py-3
                  rounded-full
                  text-sm
                  font-semibold
                  transition-all
                  whitespace-nowrap

                  ${activeCategory === category

                    ?
                    `
                    bg-primary-600
                    text-white
                    shadow-lg
                    shadow-primary-500/30
                    `
                    :
                    `
                    bg-white
                    text-gray-600
                    border
                    border-gray-100
                    hover:text-primary-600
                    `
                  }
                `}
              >

                {category}

              </button>

            ))
          }

        </div>




        {/* CARDS */}


        <AnimatePresence mode="wait">

          <motion.div

            key={activeCategory}

            variants={staggerContainer}

            initial="hidden"

            animate="visible"

            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-8
            "

          >


            {
              filteredTreatments.map(
                (treatment, index) => (


                  <motion.div

                    key={treatment.id}

                    variants={staggerItem}

                    whileHover={{
                      y: -8
                    }}

                    transition={{
                      duration: .3
                    }}

                  >


                    <Link
                      href={`/treatments/${treatment.slug}`}
                      className="block h-full"
                    >


                      <article

                        className="
                    group
                    h-full
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    border
                    border-gray-100
                    shadow-sm
                    hover:shadow-xl
                    transition-all
                  "

                      >



                        {/* IMAGE */}


                        <div
                          className="
                  relative
                  h-60
                  overflow-hidden
                  "
                        >

                          <Image

                            src={treatment.image}

                            alt={treatment.title}

                            fill

                            priority={
                              index < 4
                            }

                            sizes="
                    (max-width:768px)100vw,
                    (max-width:1200px)50vw,
                    25vw
                    "

                            className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                    "

                          />


                          <div
                            className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    "
                          />



                          <div
                            className="
                    absolute
                    top-4
                    left-4
                    text-3xl
                    "
                          >

                            {treatment.icon}

                          </div>



                          <div
                            className="
                    absolute
                    top-4
                    right-4
                    px-3
                    py-1
                    rounded-full
                    bg-white/90
                    text-xs
                    font-bold
                    text-primary-600
                    "
                          >

                            {treatment.category}

                          </div>



                          <div
                            className="
                    absolute
                    bottom-4
                    left-5
                    flex
                    items-center
                    gap-2
                    text-white
                    text-sm
                    font-semibold
                    "
                          >

                            View Details

                            <FiArrowRight />

                          </div>



                        </div>





                        {/* CONTENT */}


                        <div
                          className="
                  p-6
                  flex
                  flex-col
                  min-h-[210px]
                  "
                        >


                          <h3
                            className="
                    text-xl
                    font-bold
                    text-gray-900
                    group-hover:text-primary-600
                    transition
                    "
                          >

                            {treatment.title}

                          </h3>



                          <p
                            className="
                    mt-3
                    text-sm
                    text-gray-500
                    line-clamp-3
                    "
                          >

                            {treatment.description}

                          </p>




                          <div
                            className="
                    mt-auto
                    pt-4
                    border-t
                    border-gray-100
                    flex
                    justify-between
                    items-center
                    "
                          >


                            <div>

                              <p
                                className="
                        text-primary-600
                        font-bold
                        text-sm
                        "
                              >

                                {treatment.priceRange}

                              </p>


                              {
                                treatment.duration && (

                                  <p
                                    className="
                          flex
                          items-center
                          gap-1
                          text-xs
                          text-gray-400
                          mt-1
                          "
                                  >

                                    <FiClock />

                                    {treatment.duration}

                                  </p>

                                )
                              }


                            </div>



                            <FiCheckCircle
                              className="
                      text-green-500
                      w-6
                      h-6
                      "
                            />


                          </div>


                        </div>


                      </article>


                    </Link>


                  </motion.div>

                )
              )
            }


          </motion.div>


        </AnimatePresence>





        {/* CTA */}


        <div className="text-center mt-16">


          <Link

            href="/treatments"

            className="
            inline-flex
            items-center
            gap-3
            px-8
            py-4
            rounded-full
            bg-primary-600
            text-white
            font-semibold
            hover:bg-primary-700
            shadow-lg
            transition
            "

          >

            Explore All Treatments

            <FiArrowRight />

          </Link>


        </div>


      </div>


    </section>
  );
};


export default TreatmentsSection;