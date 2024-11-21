import { useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 safe-area-padding">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              <span className="ml-2 text-base sm:text-xl font-bold text-gray-900 flex items-center">
                Job in 30 Days by
                {/* <svg className="h-6 sm:h-8 ml-2" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="30" className="text-3xl font-bold" fill="#0052CC">hi</text>
                  <text x="32" y="30" className="text-3xl font-bold" fill="#3385FF">rello</text>
                  <circle cx="142" cy="20" r="12" fill="#3385FF" opacity="0.2"/>
                  <path d="M138 20a4 4 0 1 1 8 0 4 4 0 0 1-8 0" fill="#0052CC"/>
                  <path d="M144 24l3 3" stroke="#0052CC" strokeWidth="2.5" strokeLinecap="round"/>
                </svg> */}
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="50"
                  viewBox="0 0 513 161"
                  className="ms-2"
                >
                  <path
                    d="M0 0 C10.17307543 9.31639539 16.61914813 22.68368343 17.44482422 36.48535156 C18.1862475 55.35626614 16.78923066 72.12151683 4.09765625 87.12890625 C-4.83162515 96.44706758 -17.1684509 103.13785105 -30.21923828 103.97753906 C-33.0928904 104.02344917 -35.96585591 104.05166785 -38.83984375 104.06640625 C-39.82210937 104.08703125 -40.804375 104.10765625 -41.81640625 104.12890625 C-56.99535687 104.20879546 -70.54920724 98.67499599 -81.52734375 88.171875 C-92.84743395 75.98256359 -96.074382 62.21328884 -96.02734375 46.00390625 C-96.05151367 44.35551758 -96.05151367 44.35551758 -96.07617188 42.67382812 C-96.08572034 26.47007661 -90.98353455 12.58020649 -79.71484375 0.81640625 C-57.38788703 -18.53613296 -22.6872127 -18.24770057 0 0 Z "
                    fill="#B4D1E6"
                    transform="translate(495.71484375,57.18359375)"
                  />
                  <path
                    d="M0 0 C1.05960938 0.76957031 1.05960938 0.76957031 2.140625 1.5546875 C12.44625388 9.77558993 17.99731621 22.15259455 20 35 C20.14241424 37.72230292 20.23016717 40.40294421 20.25 43.125 C20.270625 43.84042969 20.29125 44.55585937 20.3125 45.29296875 C20.35069969 50.40217692 20.35069969 50.40217692 18.99992371 52.70478821 C15.79337002 54.7814505 12.369523 54.39024307 8.6730957 54.34057617 C7.82409698 54.34101425 6.97509827 54.34145233 6.10037231 54.34190369 C3.29194199 54.33981235 0.48410739 54.31646514 -2.32421875 54.29296875 C-4.27048924 54.28737402 -6.21676394 54.28310334 -8.16304016 54.28010559 C-13.2874415 54.26864713 -18.41158805 54.23917129 -23.53588867 54.20599365 C-28.76412509 54.17531437 -33.99240265 54.16160483 -39.22070312 54.14648438 C-49.48058074 54.1143026 -59.74026919 54.0630941 -70 54 C-69.39810948 56.38622781 -68.78753137 58.76966461 -68.171875 61.15234375 C-67.92026611 62.15557678 -67.92026611 62.15557678 -67.66357422 63.17907715 C-65.41421149 71.81483474 -61.68945802 78.69659257 -54.2109375 83.75390625 C-42.52535768 90.33994858 -30.81267237 91.61821736 -17.92578125 88.09765625 C-10.14728681 85.17942269 -5.23862934 79.57775584 -0.703125 72.8203125 C1 71 1 71 3.33984375 70.05859375 C6.89098453 69.98037479 8.77343928 71.14335572 11.8125 72.9375 C12.78832031 73.50339844 13.76414062 74.06929688 14.76953125 74.65234375 C15.50558594 75.09707031 16.24164063 75.54179687 17 76 C16.51480348 80.7372824 14.30838672 83.80132537 11.4375 87.4375 C10.98568359 88.01371094 10.53386719 88.58992188 10.06835938 89.18359375 C2.5122597 98.56210957 -8.02426855 104.98525045 -20 107 C-32.51727341 108.03037836 -45.40662827 108.29370174 -57 103 C-58.43666016 102.36384766 -58.43666016 102.36384766 -59.90234375 101.71484375 C-71.64942241 95.92993121 -80.10437395 86.11969386 -85 74 C-87.75145295 65.65081619 -88.46851002 57.7483819 -88.375 49 C-88.38660156 47.91460937 -88.39820313 46.82921875 -88.41015625 45.7109375 C-88.35559869 30.47119193 -83.87464271 16.18641965 -73.1796875 5.02734375 C-53.63196632 -13.15413885 -21.7840526 -15.99042159 0 0 Z M-52 11 C-53.60875 11.8971875 -53.60875 11.8971875 -55.25 12.8125 C-63.97905795 19.75606882 -67.62566488 27.00531907 -69 38 C-45.9 38 -22.8 38 1 38 C-0.24150191 26.82648277 -2.67495005 19.84848307 -11.5078125 12.6953125 C-23.11668731 4.79836631 -39.73832357 4.09234993 -52 11 Z "
                    fill="#B3D2E6"
                    transform="translate(301,54)"
                  />
                  <path
                    d="M0 0 C5.61 0 11.22 0 17 0 C17 21.45 17 42.9 17 65 C17.99 65 18.98 65 20 65 C20.226875 64.29875 20.45375 63.5975 20.6875 62.875 C24.56817248 54.37447933 31.77997669 50.14942136 40.1875 46.6875 C53.42803337 43.45092518 67.50226243 43.89543753 79.75 50.25 C90.63275432 56.88198591 97.06731429 65.24401385 100.35426331 77.58132935 C101.65290908 84.45664282 101.40662913 91.43918533 101.36328125 98.41015625 C101.36276163 100.0711619 101.36328327 101.73216817 101.36479187 103.39317322 C101.36470275 106.85001979 101.35438746 110.3066302 101.33618164 113.76342773 C101.31333568 118.19882198 101.3129855 122.63387689 101.31969929 127.069314 C101.32303275 130.48787978 101.31642365 133.90636771 101.30657005 137.32491875 C101.30271896 138.96162955 101.30156946 140.59834899 101.3031559 142.23506355 C101.30352532 144.51112709 101.29094696 146.78674707 101.2746582 149.06274414 C101.26774712 151.00486534 101.26774712 151.00486534 101.26069641 152.98622131 C101 156 101 156 99 158 C96.25514407 158.14507695 93.61519457 158.18652423 90.875 158.125 C90.12089844 158.11597656 89.36679688 158.10695312 88.58984375 158.09765625 C86.72642746 158.0740687 84.86317407 158.03819719 83 158 C82.99191315 157.18726624 82.98382629 156.37453247 82.97549438 155.53717041 C82.89713585 147.8295153 82.80972559 140.12203838 82.71247292 132.41460037 C82.66280035 128.45335553 82.61647114 124.49213368 82.578125 120.53076172 C82.54090107 116.69861914 82.49444792 112.86668386 82.44193649 109.03472137 C82.4235874 107.58214756 82.4084099 106.12952966 82.39665604 104.67688751 C82.52352648 87.01682509 82.52352648 87.01682509 76 71 C68.53379903 63.730278 60.49924677 62.7020393 50.57055664 62.68310547 C44.35638197 62.79028063 39.4205269 63.82483734 34 67 C33.27296875 67.42410156 32.5459375 67.84820312 31.796875 68.28515625 C23.63723416 73.70980637 20.83930731 81.38537731 18.61990356 90.6076355 C17.53814096 96.52748054 17.5591442 102.40752213 17.55859375 108.41015625 C17.54678779 109.75346794 17.53341586 111.09676668 17.51856995 112.44004822 C17.48277859 115.93548642 17.46229042 119.43080948 17.44702148 122.9263916 C17.42195066 128.55093436 17.38252258 134.17522361 17.32512093 139.79952812 C17.30884089 141.75546461 17.30537603 143.71149421 17.30210876 145.66749573 C17.29192215 146.8498027 17.28173553 148.03210968 17.27124023 149.25024414 C17.26696518 150.2910463 17.26269012 151.33184845 17.25828552 152.40419006 C17 155 17 155 15 158 C12.04935852 158.2208564 9.31631769 158.28060989 6.375 158.1875 C5.57320313 158.17396484 4.77140625 158.16042969 3.9453125 158.14648438 C1.96325622 158.11109051 -0.01845551 158.05728234 -2 158 C-2.04668272 137.84233234 -2.08197053 117.68467562 -2.10362434 97.52696514 C-2.11394499 88.16777936 -2.12802037 78.80862714 -2.15087891 69.44946289 C-2.17078867 61.29376622 -2.1837107 53.13809384 -2.18817699 44.98237354 C-2.19078847 40.66240451 -2.1969429 36.342505 -2.21146011 32.02255821 C-2.22500593 27.95886177 -2.22922875 23.89526366 -2.22621536 19.83154678 C-2.22676687 18.33796085 -2.23076218 16.84437173 -2.23841095 15.35080528 C-2.24832471 13.3156152 -2.24478587 11.2803727 -2.24050903 9.24516296 C-2.24235262 8.10490504 -2.24419621 6.96464712 -2.24609566 5.78983593 C-2 3 -2 3 0 0 Z "
                    fill="#FF6B35"
                    transform="translate(2,0)"
                  />
                  <path
                    d="M0 0 C5.61 0 11.22 0 17 0 C17.04624785 20.30532384 17.08196352 40.61063287 17.10362434 60.91599846 C17.11394802 70.343594 17.12802914 79.77115628 17.15087891 89.19873047 C17.17077944 97.4133812 17.18370849 105.62800784 17.18817699 113.842682 C17.19079004 118.19447697 17.19695438 122.546203 17.21146011 126.89797592 C17.22499139 130.99039622 17.22923172 135.08271891 17.22621536 139.17515945 C17.22676753 140.68045328 17.23077145 142.18575023 17.23841095 143.69102478 C17.24830203 145.73970199 17.24479117 147.78843107 17.24050903 149.83712769 C17.24235262 150.98568174 17.24419621 152.1342358 17.24609566 153.31759453 C17 156 17 156 15 158 C12.0906442 158.14517744 9.280054 158.18630796 6.375 158.125 C5.57320313 158.11597656 4.77140625 158.10695312 3.9453125 158.09765625 C1.96341477 158.07406223 -0.01832981 158.03819065 -2 158 C-2.04669716 137.98998696 -2.08197764 117.97998495 -2.10362434 97.96992874 C-2.11394192 88.67915273 -2.12801145 79.38841055 -2.15087891 70.09765625 C-2.17079805 62.00091363 -2.18371293 53.90419551 -2.18817699 45.80742908 C-2.19078687 41.51928599 -2.19693123 37.23121299 -2.21146011 32.94309235 C-2.22502071 28.90811975 -2.22922573 24.87324624 -2.22621536 20.83825302 C-2.22676621 19.35637499 -2.23075274 17.87449369 -2.23841095 16.39263535 C-2.24834779 14.3709324 -2.24478051 12.34917647 -2.24050903 10.32745361 C-2.24235262 9.19549183 -2.24419621 8.06353004 -2.24609566 6.89726639 C-2 4 -2 4 0 0 Z "
                    fill="#B4D1E6"
                    transform="translate(334,0)"
                  />
                  <path
                    d="M0 0 C1.47668858 0.0133035 2.95331108 0.03716415 4.4296875 0.0703125 C5.18378906 0.07933594 5.93789063 0.08835938 6.71484375 0.09765625 C8.57826004 0.1212438 10.44151343 0.15711531 12.3046875 0.1953125 C12.351356 20.50063478 12.38665102 40.80594622 12.40831184 61.11131096 C12.41863552 70.5389065 12.43271664 79.96646878 12.45556641 89.39404297 C12.47546694 97.6086937 12.48839599 105.82332034 12.49286449 114.0379945 C12.49547754 118.38978947 12.50164188 122.7415155 12.51614761 127.09328842 C12.52967889 131.18570872 12.53391922 135.27803141 12.53090286 139.37047195 C12.53145503 140.87576578 12.53545895 142.38106273 12.54309845 143.88633728 C12.55298953 145.93501449 12.54947867 147.98374357 12.54519653 150.03244019 C12.54704012 151.18099424 12.54888371 152.3295483 12.55078316 153.51290703 C12.3046875 156.1953125 12.3046875 156.1953125 10.3046875 158.1953125 C7.55983157 158.34038945 4.91988207 158.38183673 2.1796875 158.3203125 C1.42558594 158.31128906 0.67148437 158.30226562 -0.10546875 158.29296875 C-1.96888504 158.2693812 -3.83213843 158.23350969 -5.6953125 158.1953125 C-5.741981 137.88999022 -5.77727602 117.58467878 -5.79893684 97.27931404 C-5.80926052 87.8517185 -5.82334164 78.42415622 -5.84619141 68.99658203 C-5.86609194 60.7819313 -5.87902099 52.56730466 -5.88348949 44.3526305 C-5.88610254 40.00083553 -5.89226688 35.6491095 -5.90677261 31.29733658 C-5.92030389 27.20491628 -5.92454422 23.11259359 -5.92152786 19.02015305 C-5.92208003 17.51485922 -5.92608395 16.00956227 -5.93372345 14.50428772 C-5.94361453 12.45561051 -5.94010367 10.40688143 -5.93582153 8.35818481 C-5.93766512 7.20963076 -5.93950871 6.0610767 -5.94140816 4.87771797 C-5.5385146 0.48623906 -4.29574464 0.22704781 0 0 Z "
                    fill="#B4D1E7"
                    transform="translate(374.6953125,-0.1953125)"
                  />
                  <path
                    d="M0 0 C0.70189453 0.01353516 1.40378906 0.02707031 2.12695312 0.04101562 C3.85579829 0.07629818 5.58424765 0.13010417 7.3125 0.1875 C7.3125 4.8075 7.3125 9.4275 7.3125 14.1875 C8.3025 14.1875 9.2925 14.1875 10.3125 14.1875 C10.621875 12.8571875 10.621875 12.8571875 10.9375 11.5 C13.1864313 6.08212005 16.69031056 3.94597336 21.8046875 1.5546875 C27.08485462 -0.35416519 32.26376823 -0.1419951 37.8125 0 C39.33230469 0.02030273 39.33230469 0.02030273 40.8828125 0.04101562 C43.35994404 0.07606937 45.83592927 0.12520236 48.3125 0.1875 C48.39326963 2.64648655 48.45287143 5.10283742 48.5 7.5625 C48.52513672 8.26117188 48.55027344 8.95984375 48.57617188 9.6796875 C48.60546875 11.7109375 48.60546875 11.7109375 48.3125 15.1875 C44.46715774 17.75106151 41.2084489 17.47289658 36.75 17.5625 C27.85941564 17.9213049 20.16927857 18.72139544 13.8125 25.5625 C9.71921692 30.58391122 9.06278308 36.1027177 9.04125977 42.41455078 C9.03341965 43.45961288 9.03341965 43.45961288 9.02542114 44.52578735 C9.01523166 46.02841076 9.00940961 47.53106895 9.00753975 49.03372574 C9.00385953 51.41302048 8.98709064 53.79190458 8.96678162 56.17111206 C8.91151007 62.93186825 8.88063091 69.69268258 8.85620117 76.45361328 C8.84032939 80.59739809 8.81012337 84.74088641 8.77143669 88.88451767 C8.75979242 90.46093476 8.75385639 92.03740481 8.75375557 93.6138649 C8.75356356 95.81597174 8.73530395 98.01725878 8.71313477 100.21923828 C8.70806412 101.47133087 8.70299347 102.72342346 8.69776917 104.01345825 C8.27116467 107.52804131 8.09478304 108.97460637 5.3125 111.1875 C2.44211948 111.48311076 -0.02504745 111.56693016 -2.875 111.4375 C-3.62458984 111.41945313 -4.37417969 111.40140625 -5.14648438 111.3828125 C-6.9940371 111.33574109 -8.84093159 111.26399766 -10.6875 111.1875 C-10.75755151 97.15789804 -10.81026981 83.12832316 -10.84293652 69.09858227 C-10.8586125 62.58445877 -10.87988621 56.0704525 -10.91381836 49.55639648 C-10.94634261 43.27351537 -10.96433844 36.99074724 -10.97213173 30.70778847 C-10.9776877 28.30712416 -10.9885367 25.90646623 -11.00469017 23.50584984 C-11.02637195 20.15114202 -11.02947077 16.79690494 -11.02807617 13.44213867 C-11.038862 12.44304474 -11.04964783 11.44395081 -11.0607605 10.4145813 C-11.05663651 9.50172867 -11.05251251 8.58887604 -11.04826355 7.64836121 C-11.05102893 6.85469745 -11.05379431 6.06103369 -11.05664349 5.24331951 C-9.97819832 -0.76271528 -5.02473262 -0.18297346 0 0 Z "
                    fill="#B4D1E6"
                    transform="translate(166.6875,46.8125)"
                  />
                  <path
                    d="M0 0 C5.94 0 11.88 0 18 0 C18 36.96 18 73.92 18 112 C12.06 112 6.12 112 0 112 C0 75.04 0 38.08 0 0 Z "
                    fill="#FF6B35"
                    transform="translate(120,46)"
                  />
                  <path
                    d="M0 0 C4.50503185 3.30626801 8.5369245 7.81736909 9.8203125 13.3359375 C10.5814943 20.18657369 9.96102577 25.69391299 5.8203125 31.3359375 C1.62901045 35.80533542 -2.61569004 38.88386703 -8.828125 39.671875 C-17.09305752 39.79028378 -21.39732561 38.06841719 -27.4921875 32.3984375 C-31.35753133 28.59663357 -32.47758582 24.3511637 -32.5546875 19.0234375 C-32.40981088 12.68295481 -30.89525577 8.22525066 -26.53125 3.58203125 C-18.83916955 -3.38786697 -9.32844876 -5.32514686 0 0 Z "
                    fill="#FDFCFB"
                    transform="translate(481.1796875,70.6640625)"
                  />
                  <path
                    d="M0 0 C5.30710718 4.05767612 9.16185843 8.08173269 11.7421875 14.33203125 C12.97032812 23.5430859 12.30743044 31.71488176 6.7421875 39.33203125 C1.25819624 45.19862655 -6.25112553 48.44132255 -14.2578125 48.89453125 C-21.45799623 48.55489994 -27.74968828 45.34549932 -32.6328125 40.08203125 C-36.75591203 34.68217646 -40.07763111 28.47418577 -39.6328125 21.49609375 C-38.06108602 12.42592219 -34.5493943 5.99863196 -27.2578125 0.33203125 C-19.61432309 -4.55980197 -7.80988394 -4.74291235 0 0 Z M-31.03125 10.453125 C-34.76582193 16.1739183 -34.84687977 21.69520671 -34.2578125 28.33203125 C-32.43329804 34.53538043 -27.27874389 38.52085325 -22.2578125 42.33203125 C-16.37145877 44.29414916 -9.65545673 44.34901725 -3.9453125 41.76953125 C0.97344121 38.92130015 4.24431537 34.85117984 7.1171875 30.01953125 C8.66996827 23.34257393 8.51870958 17.1794671 5.078125 11.15234375 C1.77185699 6.6473119 -2.73924409 2.61541925 -8.2578125 1.33203125 C-18.17731337 0.22986449 -24.67565609 2.80155803 -31.03125 10.453125 Z "
                    fill="#FC713F"
                    transform="translate(483.2578125,66.66796875)"
                  />
                  <path
                    d="M0 0 C2.01623639 1.78277744 3.37344618 3.83126157 5 6 C2.70616539 11.21757856 -1.34942614 14.75712859 -5.3125 18.75 C-6.07240234 19.54277344 -6.83230469 20.33554688 -7.61523438 21.15234375 C-8.35708984 21.90128906 -9.09894531 22.65023437 -9.86328125 23.421875 C-10.53657471 24.10862305 -11.20986816 24.79537109 -11.90356445 25.50292969 C-14.50860397 27.36319548 -15.86183841 27.45261032 -19 27 C-21.8125 25 -21.8125 25 -24 23 C-23.1525475 17.01417469 -17.77343382 13.30300688 -13.6875 9.25 C-12.81931641 8.36183594 -11.95113281 7.47367187 -11.05664062 6.55859375 C-9.7969043 5.29982422 -9.7969043 5.29982422 -8.51171875 4.015625 C-7.74303467 3.24508789 -6.97435059 2.47455078 -6.18237305 1.68066406 C-4 0 -4 0 0 0 Z "
                    fill="#FE6C37"
                    transform="translate(445,107)"
                  />
                  <path
                    d="M0 0 C1.58206057 0.00667536 3.16410534 0.0186375 4.74609375 0.03515625 C5.55240234 0.03966797 6.35871094 0.04417969 7.18945312 0.04882812 C9.18753131 0.06065107 11.18557158 0.07858711 13.18359375 0.09765625 C13.23739953 2.8895783 13.27717044 5.68047035 13.30859375 8.47265625 C13.33373047 9.66375 13.33373047 9.66375 13.359375 10.87890625 C13.37694848 12.9525764 13.28694543 15.02648866 13.18359375 17.09765625 C11.18359375 19.09765625 11.18359375 19.09765625 7.48828125 19.29296875 C6.01159267 19.27966525 4.53497017 19.2558046 3.05859375 19.22265625 C2.30449219 19.21363281 1.55039063 19.20460938 0.7734375 19.1953125 C-1.08997879 19.17172495 -2.95323218 19.13585344 -4.81640625 19.09765625 C-4.84324612 16.11843032 -4.86316662 13.1394433 -4.87890625 10.16015625 C-4.88728516 9.31001953 -4.89566406 8.45988281 -4.90429688 7.58398438 C-4.90751953 6.77509766 -4.91074219 5.96621094 -4.9140625 5.1328125 C-4.91929932 4.38394775 -4.92453613 3.63508301 -4.92993164 2.86352539 C-4.70772107 -0.59292423 -3.58393762 0.09170772 0 0 Z "
                    fill="#FF6B35"
                    transform="translate(124.81640625,10.90234375)"
                  />
                  <path
                    d="M0 0 C3.63110555 1.91110818 5.54999057 3.13330818 7 7 C7.1953125 9.796875 7.1953125 9.796875 7.125 12.75 C7.10695313 13.73484375 7.08890625 14.7196875 7.0703125 15.734375 C7.03550781 16.85585937 7.03550781 16.85585937 7 18 C6.01 18.33 5.02 18.66 4 19 C3.34 18.67 2.68 18.34 2 18 C2.04640625 17.41992188 2.0928125 16.83984375 2.140625 16.2421875 C2.41012568 10.40942269 1.71217436 7.5242125 -2 3 C-1.34 2.01 -0.68 1.02 0 0 Z "
                    fill="#0D4875"
                    transform="translate(480,76)"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="tap-target inline-flex items-center justify-center rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/interview-practice"
              className="text-gray-700 hover:text-blue-600 py-2 px-3 rounded-md transition-colors"
            >
              Interview Practice
            </Link>
            <Link
              to="/program"
              className="text-gray-700 hover:text-blue-600 py-2 px-3 rounded-md transition-colors"
            >
              Program
            </Link>
            <Link
              to="https://hirello.websitetech.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 py-2 px-3 rounded-md transition-colors"
            >
              Pricing
            </Link>
            <a
              href="#get-started"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-sm"
            >
              Get Started for Free
            </a>
            <a
              href="https://hirello.ai/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 py-2 px-3 rounded-md transition-colors"
            >
              Blog
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t safe-area-padding">
          <Link
            to="/interview-practice"
            className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 active:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Interview Practice
          </Link>
          <Link
            to="/program"
            className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 active:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Program
          </Link>
          <Link
            to="/pricing"
            className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 active:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <a
            href="#get-started"
            className="block px-3 py-4 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started for Free
          </a>
          <a
            href="https://hirello.ai/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 active:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}
