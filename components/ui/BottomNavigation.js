export default function BottomNavigation() {
  return (
    <div className="flex divide-x divide-gray max-w-[1230px] ml-[30px] mr-[30px] py-[50px] bg-white ">
      <div className="flex w-1/2 items-center ml-[30px] ">
        <div>
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

        <p className="text-deep-blue ml-[30px] mr-[170px] leading-[30px]">
          Lien de rebond lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </div>
      <div className="flex w-1/2 items-center">
        <p className="ml-[170px] mr-[30px] text-deep-blue">
          Lien de rebond lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <div className="rotate-180 mr-[30px]">
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
