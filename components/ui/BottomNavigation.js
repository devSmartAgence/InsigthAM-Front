export default function BottomNavigation() {
  return (
    <div className="flex-row w-full divide-y divide-gray max-w-[1230px] mx-15 py-[50px] bg-white md:flex md:divide-x md:divide-y-0 ">
      <div className="flex mb-4 w-full items-center md:w-1/2 md:mb-0 ">
        <div className="ml-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.263"
            height="16"
            viewBox="0 0 25.263 16"
          >
            <path
              id="Picto_fleche_rebond_gauche_"
              data-name="Picto_fleche_rebond (gauche)"
              d="M0,8a.978.978,0,0,1,.237-.579L6.974.263A.843.843,0,0,1,8.165.23.868.868,0,0,1,8.2,1.42L2.79,7.158H24.421a.842.842,0,1,1,0,1.684H2.79L8.2,14.579a.882.882,0,0,1-.033,1.191.843.843,0,0,1-1.191-.033L.237,8.579A.749.749,0,0,1,0,8Z"
              transform="translate(0 0)"
              fill="#243063"
            />
          </svg>
        </div>

        <p className="text-deep-blue ml-[6%] leading-[30px] md:mr-[28%]">
          Lien de rebond lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </div>
      <div className="flex w-full items-center md:w-1/2  ">
        <p className="text-deep-blue mr-[6%] mt-4 leading-[30px] text-right md:ml-[28%]">
          Lien de rebond lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <div className="rotate-180 mr-7 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.263"
            height="16"
            viewBox="0 0 25.263 16"
          >
            <path
              id="Picto_fleche_rebond_gauche_"
              data-name="Picto_fleche_rebond (gauche)"
              d="M0,8a.978.978,0,0,1,.237-.579L6.974.263A.843.843,0,0,1,8.165.23.868.868,0,0,1,8.2,1.42L2.79,7.158H24.421a.842.842,0,1,1,0,1.684H2.79L8.2,14.579a.882.882,0,0,1-.033,1.191.843.843,0,0,1-1.191-.033L.237,8.579A.749.749,0,0,1,0,8Z"
              transform="translate(0 0)"
              fill="#243063"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
