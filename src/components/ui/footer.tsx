import { PhoneIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1B7C72] text-white py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 lg:px-[88px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-6 sm:gap-8">
        {/* Top Section */}
        <div className="flex w-full flex-col lg:flex-wrap xl:flex-row xl:flex-nowrap items-start lg:justify-between gap-6">
          {/* logo */}
          <div className="flex items-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="118" height="118" viewBox="0 0 118 118" fill="none">
              <path d="M76.4751 30.1322C75.8323 30.1322 75.1958 30.2588 74.6019 30.5048C74.0081 30.7507 73.4685 31.1113 73.014 31.5658C72.5595 32.0203 72.1989 32.5599 71.9529 33.1538C71.7069 33.7476 71.5803 34.3841 71.5803 35.0269C71.5803 35.6697 71.7069 36.3062 71.9529 36.9C72.1989 37.4939 72.5595 38.0335 73.014 38.488C73.4685 38.9425 74.0081 39.303 74.6019 39.549C75.1958 39.795 75.8323 39.9216 76.4751 39.9216C77.5938 39.8656 78.6932 40.2286 79.5587 40.9397C80.2146 41.5075 80.988 42.6431 81.1936 44.9534C81.2407 45.6008 81.4161 46.2324 81.7096 46.8115C82.0032 47.3905 82.409 47.9053 82.9034 48.326C83.3978 48.7467 83.9709 49.0648 84.5894 49.2619C85.208 49.459 85.8595 49.531 86.5062 49.4739C87.1528 49.4168 87.7816 49.2316 88.356 48.9291C88.9304 48.6266 89.4389 48.2129 89.8519 47.7121C90.2649 47.2112 90.5741 46.6332 90.7616 46.0117C90.949 45.3902 91.011 44.7376 90.9438 44.0919C90.5523 39.7356 88.8881 36.1233 86.0589 33.6172C83.399 31.3143 79.9929 30.0735 76.4751 30.1322ZM53.4993 20.5483C50.8781 18.3589 47.797 16.7889 44.4852 15.955C41.1733 15.1211 37.7161 15.0449 34.3707 15.7319C28.7557 16.8915 23.6389 19.7646 19.7257 23.955C15.8393 28.0568 11.9039 33.5585 11.6592 41.5369C11.5515 45.159 12.0018 51.0326 15.34 55.5358C18.3846 59.804 19.9411 62.0164 20.7438 64.17C21.5955 66.6761 21.6444 69.3584 21.6444 73.4994V73.5679C21.6934 77.6011 22.5451 83.1811 24.6204 88.301C26.6371 93.3132 30.2396 98.8344 36.3971 101.096L36.6125 101.174L36.8279 101.233C40.3912 102.182 44.0916 101.928 46.9599 99.275C49.3975 96.994 50.3079 93.7341 50.7778 91.2085C51.2281 88.8198 51.4435 86.0494 51.6588 83.4552C51.8402 80.3228 52.2096 77.2042 52.765 74.1161C54.253 67.2439 56.0445 66.3041 56.3969 66.1867C59.5589 65.3546 61.4385 66.3825 62.7209 69.3193C64.3655 73.0882 64.855 78.5409 65.3151 83.9055C65.7752 89.1625 66.8814 94.3215 69.2309 97.787C70.4741 99.6176 72.3733 101.409 75.0948 101.996C77.8358 102.603 80.4006 101.771 82.5054 100.44C89.9943 95.7116 94.0079 86.0788 95.0358 74.1357C95.5645 68.6047 96.1225 66.2552 96.886 64.4246C97.5091 62.9911 98.2457 61.6097 99.0887 60.2934C99.6956 59.2655 100.44 58.0027 101.389 56.3091C102.897 53.5975 105.501 48.4776 105.794 42.3885C106.088 35.9667 103.788 28.9379 96.377 22.9957C89.544 17.4157 82.985 15.2327 76.945 15.5361C70.9734 15.8396 66.2353 18.5513 62.8971 21.4196L62.7503 21.5468L62.623 21.6741C59.6274 24.6697 58.7366 24.6305 58.7072 24.6305C58.6975 24.6305 58.3548 24.6109 57.5129 24.0627C56.2084 23.1405 55.0013 22.0875 53.9104 20.9203L53.7146 20.7245L53.4993 20.5483ZM26.9209 30.6021C29.4312 27.9291 32.7012 26.0907 36.2894 25.3353C38.1844 24.9366 40.1448 24.9689 42.0257 25.4298C43.9065 25.8907 45.6597 26.7684 47.1557 27.9981C50.3666 31.2286 53.9496 34.2242 58.3157 34.4102C62.9167 34.6059 66.4898 31.6495 69.4267 28.7323C71.6391 26.8723 74.341 25.4724 77.4638 25.306C80.567 25.1591 84.8254 26.187 90.2194 30.5923L90.2586 30.6216C95.1729 34.557 96.191 38.5413 96.0344 41.9284C95.8484 45.6484 94.1939 49.1335 92.8626 51.5221C92.2687 52.5924 91.6846 53.604 91.1103 54.5568C89.8376 56.7301 88.6727 58.688 87.8504 60.685C86.5288 63.8959 85.8631 67.4201 85.3051 73.2253V73.2742C84.3849 84.023 80.9586 89.8575 77.2974 92.1678H77.2778C76.4261 90.8365 75.5157 87.8507 75.0948 83.0637L75.036 82.4371C74.6249 77.6207 74.0375 70.729 71.7174 65.4035C70.4644 62.5352 68.4869 59.5788 65.276 57.7677C61.8105 55.7903 57.5815 55.663 53.7929 56.7496C48.3304 58.316 45.0803 63.4848 43.2106 72.0701L43.2008 72.1191C42.5738 75.5304 42.1489 78.9757 41.9281 82.4371L41.9184 82.6035C41.703 85.3348 41.5268 87.557 41.1744 89.4072L41.0863 89.9554C40.9296 91.0029 40.7632 92.1091 39.5983 91.8252C37.3173 90.8952 35.2615 88.4674 33.7148 84.63C32.2476 80.9814 31.4804 77.0892 31.4535 73.1567C31.4535 69.3878 31.4535 65.149 30.0144 60.9395C28.5068 56.8378 25.8343 53.1765 23.2303 49.711C21.899 47.9489 21.3703 44.8457 21.4682 41.8305C21.6053 37.2882 23.7198 33.9892 26.8818 30.6608L26.9209 30.6021Z" fill="white" />
            </svg>
            <span className="text-[40px] font-normal text-center capitalize font-LoveLight text-white">Realdent</span>
          </div>
          {/* Address */}
          <div className="flex flex-col items-start md:items-center justify-center gap-2 md:gap-4 flex-1 min-w-[240px] xl:flex-none xl:min-w-0">
            <p className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold capitalize font-Montagu text-white">
              Contact Details
            </p>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] font-light capitalize font-Poetsen text-white">
              📍 Address: 64C East Crest, Melane Plaza, DanyBoyle, TT 33546+1 (800) 123-4567
            </p>
          </div>
          {/* Contant */}
          <div className="flex flex-col items-start md:items-center justify-center gap-2 md:gap-4 flex-1 min-w-[240px] xl:flex-none xl:min-w-0">
            <p className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold capitalize font-Montagu text-white">
              <PhoneIcon className="inline-block text-[#4a4444] fill-[#6b6363]" /> Call Us:
            </p>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] font-light capitalize font-Poetsen text-white">
              +1 (800) 456-7890
            </p>
          </div>
          {/* Social Media */}
          <div className="flex flex-col items-start md:items-center justify-center gap-2 md:gap-4 self-start md:self-auto flex-1 min-w-[240px] xl:flex-none xl:min-w-0">
            <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold capitalize font-Montagu text-white">
              Social Media
            </h2>
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                  <g clip-path="url(#clip0_1_464)">
                    <path d="M31 15.5C31 6.93964 24.0604 0 15.5 0C6.93964 0 0 6.93964 0 15.5C0 23.2364 5.66816 29.649 13.0781 30.8117V19.9805H9.14258V15.5H13.0781V12.0852C13.0781 8.20047 15.3922 6.05469 18.9328 6.05469C20.6286 6.05469 22.4023 6.35742 22.4023 6.35742V10.1719H20.4479C18.5224 10.1719 17.9219 11.3667 17.9219 12.5925V15.5H22.2207L21.5335 19.9805H17.9219V30.8117C25.3318 29.649 31 23.2366 31 15.5Z" fill="#1877F2" />
                    <path d="M21.5335 19.9805L22.2207 15.5H17.9219V12.5925C17.9219 11.3666 18.5224 10.1719 20.4479 10.1719H22.4023V6.35742C22.4023 6.35742 20.6286 6.05469 18.9326 6.05469C15.3922 6.05469 13.0781 8.20047 13.0781 12.0852V15.5H9.14258V19.9805H13.0781V30.8117C13.8793 30.9372 14.689 31.0002 15.5 31C16.311 31.0002 17.1207 30.9372 17.9219 30.8117V19.9805H21.5335Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_464">
                      <rect width="31" height="31" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="#"
                className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                  <g clip-path="url(#clip0_1_467)">
                    <path d="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="white" />
                    <path d="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z" fill="#1D9BF0" />
                    <path d="M24.1669 11.0693C24.1802 11.2615 24.1802 11.4536 24.1802 11.6476C24.1802 17.5567 19.6819 24.3716 11.4563 24.3716V24.3679C9.02635 24.3714 6.64672 23.6755 4.60156 22.3632C4.95508 22.4056 5.30988 22.4271 5.66598 22.4278C7.68001 22.4294 9.63612 21.7539 11.2199 20.5098C10.2868 20.4921 9.38248 20.1832 8.63342 19.6265C7.88437 19.0697 7.328 18.2928 7.04209 17.4043C7.71207 17.5335 8.40277 17.5072 9.06096 17.3273C6.97476 16.9058 5.4738 15.0728 5.4738 12.9439V12.8873C6.09572 13.2337 6.79176 13.4257 7.50333 13.447C5.53847 12.1337 4.93275 9.51966 6.11923 7.47584C7.24185 8.85747 8.64261 9.98746 10.2305 10.7924C11.8183 11.5973 13.5578 12.0591 15.3358 12.1479C15.1585 11.3848 15.1847 10.5885 15.4117 9.83875C15.6388 9.08896 16.0587 8.41191 16.6294 7.87533C18.4306 6.18219 21.2633 6.26902 22.9565 8.0692C23.9579 7.87149 24.9183 7.50435 25.7962 6.98359C25.4624 8.01903 24.7638 8.89794 23.8304 9.45681C24.7169 9.35227 25.5826 9.11498 26.3984 8.75289C25.7983 9.65169 25.0427 10.436 24.1669 11.0693Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_467">
                      <rect width="31" height="31" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              {/* Google */}
              <a
                href="#"
                className="w-10 h-10  rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="Google"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                  <g clip-path="url(#clip0_1_472)">
                    <path d="M10.7991 1.01934C7.70177 2.09385 5.03059 4.1333 3.17797 6.83814C1.32535 9.54298 0.388942 12.7706 0.506284 16.047C0.623626 19.3234 1.78854 22.4757 3.82991 25.0411C5.87128 27.6065 8.68151 29.4496 11.8478 30.2998C14.4148 30.9622 17.1043 30.9913 19.685 30.3846C22.0229 29.8594 24.1843 28.7362 25.9577 27.1247C27.8033 25.3964 29.143 23.1976 29.8327 20.7649C30.5823 18.1194 30.7157 15.3373 30.2226 12.6322H15.8076V18.6118H24.1558C23.9889 19.5655 23.6314 20.4758 23.1046 21.2881C22.5777 22.1004 21.8924 22.7981 21.0897 23.3393C20.0703 24.0137 18.9211 24.4674 17.716 24.6714C16.5074 24.8961 15.2676 24.8961 14.059 24.6714C12.834 24.4181 11.6751 23.9125 10.6563 23.1868C9.01943 22.0281 7.7904 20.382 7.14454 18.4835C6.48776 16.5494 6.48776 14.4525 7.14454 12.5184C7.60428 11.1627 8.36428 9.92829 9.36782 8.90738C10.5163 7.71763 11.9702 6.86719 13.5702 6.44937C15.1701 6.03154 16.8542 6.06248 18.4377 6.53879C19.6748 6.91852 20.806 7.58198 21.7412 8.47629C22.6825 7.53983 23.6222 6.60095 24.5602 5.65965C25.0446 5.15348 25.5726 4.67153 26.0497 4.15324C24.6222 2.82479 22.9465 1.79109 21.1188 1.11137C17.7904 -0.0971712 14.1485 -0.12965 10.7991 1.01934Z" fill="white" />
                    <path d="M10.7992 1.01954C14.1483 -0.13023 17.7901 -0.0986067 21.1188 1.10915C22.9468 1.79348 24.6217 2.83216 26.0473 4.16555C25.5629 4.68384 25.0519 5.16821 24.5578 5.67196C23.6181 6.61003 22.6793 7.54488 21.7412 8.47649C20.806 7.58218 19.6748 6.91872 18.4378 6.53899C16.8548 6.06101 15.1707 6.02828 13.5703 6.4444C11.9699 6.86051 10.5151 7.70939 9.36541 8.8979C8.36187 9.91881 7.60186 11.1532 7.14213 12.5089L2.12158 8.6218C3.91863 5.05816 7.03012 2.33225 10.7992 1.01954Z" fill="#E33629" />
                    <path d="M0.789563 12.4729C1.05941 11.1355 1.50742 9.84034 2.12159 8.62207L7.14214 12.5189C6.48536 14.453 6.48536 16.5498 7.14214 18.4839C5.46943 19.7756 3.79592 21.0737 2.12159 22.3783C0.584069 19.3178 0.11515 15.8308 0.789563 12.4729Z" fill="#F8BD00" />
                    <path d="M15.8076 12.6299H30.2226C30.7157 15.335 30.5823 18.117 29.8327 20.7625C29.143 23.1953 27.8033 25.394 25.9577 27.1224C24.3374 25.8582 22.7099 24.6036 21.0897 23.3394C21.893 22.7976 22.5786 22.0992 23.1055 21.286C23.6323 20.4728 23.9896 19.5616 24.1558 18.6071H15.8076C15.8052 16.6163 15.8076 14.6231 15.8076 12.6299Z" fill="#587DBD" />
                    <path d="M2.11914 22.3778C3.79346 21.0861 5.46698 19.788 7.13969 18.4834C7.78683 20.3826 9.01762 22.0288 10.6562 23.1867C11.6783 23.909 12.8396 24.4105 14.0663 24.6592C15.2749 24.8839 16.5146 24.8839 17.7233 24.6592C18.9284 24.4552 20.0775 24.0015 21.097 23.3271C22.7172 24.5914 24.3447 25.8459 25.9649 27.1101C24.1918 28.7224 22.0304 29.8465 19.6923 30.3724C17.1115 30.9791 14.4221 30.95 11.8551 30.2876C9.82482 29.7455 7.92843 28.7899 6.28477 27.4807C4.54504 26.0994 3.12411 24.3588 2.11914 22.3778Z" fill="#319F43" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_472">
                      <rect width="31" height="31" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 xl:flex xl:items-start xl:justify-between gap-8 w-full">
          {/* Ist contact */}
          <div className="flex flex-col items-start w-full xl:w-[489px] gap-4">
            <div className="flex flex-col items-start gap-[16px]">
              <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-Montagu font-semibold text-white">Tagline</h3>
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-Poppins font-normal text-white">
                Taking care of your oral health with professional dental services.
              </p>
            </div>
            <div className="flex flex-col items-start gap-[16px]">
              <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-Montagu font-semibold text-white">Introduction</h3>
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-Poppins font-normal text-white">
                Regular checkups help in detecting early warning signs of dental issues. Visit your dentist regularly to maintain a healthy smile!
              </p>
            </div>
            <div className="flex flex-col items-start gap-[16px]">
              <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-Montagu font-semibold text-white">Trust Factor</h3>
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-Poppins font-normal text-white">
                Trusted by over 15,000 Happy Patients!
              </p>
            </div>
          </div>
          {/* Quick Links contact */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-Montagu font-semibold text-white">Quick Links</h2>
            <div className="flex flex-col items-start gap-3">
              <a href="/" className="text-[12px] sm:text-[13px] md:text-[14px] font-Poppins font-normal text-white">- Home</a>
              <a href="/about" className="text-[12px] sm:text-[13px] md:text-[14px] font-Poppins font-normal text-white">- About Us</a>
              <a href="/services" className="text-[12px] sm:text-[13px] md:text-[14px] font-Poppins font-normal text-white">- Services</a>
              <a href="/tips" className="text-[12px] sm:text-[13px] md:text-[14px] font-Poppins font-normal text-white">- Dental Health Tips</a>
              <a href="/appointment" className="text-[12px] sm:text-[13px] md:text-[14px] font-Poppins font-normal text-white">- Book an Appointment</a>
            </div>
          </div>
          {/* Services contact */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-Montagu font-semibold text-white">Services</h2>
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-Poppins font-normal text-white">- Teeth Whitening</p>
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-Poppins font-normal text-white">- Routine Checkup</p>
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-Poppins font-normal text-white">- Dental Implants</p>
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-Poppins font-normal text-white">- Orthodontic Braces</p>
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-Poppins font-normal text-white">- Dental Crowns</p>
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-Poppins font-normal text-white">- Tooth Filling</p>
            </div>
          </div>
          {/* Newsletter contact */}
          <div className="flex flex-col items-start w-full xl:w-[148px] gap-4">
            <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-Montagu font-semibold text-white">Newsletter</h2>
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-Poppins font-normal text-white">📩 Subscribe to Our Newsletter
                Stay updated with the latest dental care tips & exclusive offers!</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;