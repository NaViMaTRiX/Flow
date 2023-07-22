import { appWindow } from '@tauri-apps/api/window';

function App() {
  
  // let [onTop, setStateOnTop] = useState(false);

  // async function setWindowTop(): Promise<boolean> {
  //   setStateOnTop(await appWindow.setAlwaysOnTop(onTop = !onTop));
  //   return onTop;
  // }
  let onTop: boolean = false

  return (
    <div className="box">
      <div className="mask-group-wrapper">
        <div className="mask-group">
          <div className="flow">
            <div class="dop">
              <div class="unit-dop">
                <div class="reload">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"
                  >
                    <path
                      d="M5.42267 17.388C5.67445 19.3079 6.44411 21.1231 7.64912 22.6389C8.85412 24.1547 10.449 25.3138 12.2627 25.992C14.0764 26.6703 16.0406 26.842 17.9445 26.4888C19.8484 26.1356 21.6202 25.2708 23.0699 23.9871C24.5197 22.7034 25.5927 21.0493 26.1738 19.2022C26.7549 17.3551 26.8222 15.3846 26.3686 13.5021C25.915 11.6196 24.9574 9.89614 23.5987 8.51648C22.24 7.13683 20.5313 6.15306 18.656 5.67068C13.4573 4.33734 8.076 7.01334 6.08934 12" stroke-width="2" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    />
                    <path
                      d="M5.33334 5.33313V11.9998H12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div class="unit-dop">
                <div class="diagramm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"
                  >
                    <path
                      d="M24.5 26.8333H22.1667C21.5478 26.8333 20.9543 26.5875 20.5168 26.1499C20.0792 25.7123 19.8333 25.1188 19.8333 24.5V9.33332C19.8333 8.71449 20.0792 8.12099 20.5168 7.68341C20.9543 7.24582 21.5478 6.99999 22.1667 6.99999H24.5C25.1188 6.99999 25.7123 7.24582 26.1499 7.68341C26.5875 8.12099 26.8333 8.71449 26.8333 9.33332V24.5C26.8333 25.1188 26.5875 25.7123 26.1499 26.1499C25.7123 26.5875 25.1188 26.8333 24.5 26.8333ZM22.1667 9.33332V24.5H24.5V9.33332H22.1667ZM15.1667 26.8333H12.8333C12.2145 26.8333 11.621 26.5875 11.1834 26.1499C10.7458 25.7123 10.5 25.1188 10.5 24.5V3.49999C10.5 2.88115 10.7458 2.28766 11.1834 1.85007C11.621 1.41249 12.2145 1.16666 12.8333 1.16666H15.1667C15.7855 1.16666 16.379 1.41249 16.8166 1.85007C17.2542 2.28766 17.5 2.88115 17.5 3.49999V24.5C17.5 25.1188 17.2542 25.7123 16.8166 26.1499C16.379 26.5875 15.7855 26.8333 15.1667 26.8333ZM12.8333 3.49999V24.5H15.1667V3.49999H12.8333ZM5.83334 26.8333H3.50001C2.88117 26.8333 2.28767 26.5875 1.85009 26.1499C1.4125 25.7123 1.16667 25.1188 1.16667 24.5V15.1667C1.16667 14.5478 1.4125 13.9543 1.85009 13.5167C2.28767 13.0792 2.88117 12.8333 3.50001 12.8333H5.83334C6.45218 12.8333 7.04567 13.0792 7.48325 13.5167C7.92084 13.9543 8.16667 14.5478 8.16667 15.1667V24.5C8.16667 25.1188 7.92084 25.7123 7.48325 26.1499C7.04567 26.5875 6.45218 26.8333 5.83334 26.8333ZM3.50001 15.1667V24.5H5.83334V15.1667H3.50001Z"
                      fill="url(#paint0_linear_4_7)"
                    />
                    <defs>
                      <linearGradient id="paint0_linear_4_7" x1="-13.16" y1="-10.2433" x2="37.3217" y2="40.2383" gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="0.51" stop-color="white" />
                        <stop offset="1" stop-color="white" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div class="unit-dop">
                <div class="tree_dot">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"
                  >
                    <path
                      d="M16 12C15.2089 12 14.4355 12.2346 13.7777 12.6741C13.1199 13.1136 12.6072 13.7384 12.3045 14.4693C12.0017 15.2002 11.9225 16.0044 12.0769 16.7804C12.2312 17.5563 12.6122 18.269 13.1716 18.8284C13.731 19.3878 14.4437 19.7688 15.2196 19.9231C15.9956 20.0775 16.7998 19.9983 17.5307 19.6955C18.2616 19.3928 18.8864 18.8801 19.3259 18.2223C19.7654 17.5645 20 16.7911 20 16C19.9988 14.9395 19.577 13.9228 18.8271 13.1729C18.0772 12.423 17.0605 12.0012 16 12ZM16 18C15.6044 18 15.2178 17.8827 14.8889 17.6629C14.56 17.4432 14.3036 17.1308 14.1522 16.7654C14.0009 16.3999 13.9613 15.9978 14.0384 15.6098C14.1156 15.2219 14.3061 14.8655 14.5858 14.5858C14.8655 14.3061 15.2219 14.1156 15.6098 14.0384C15.9978 13.9613 16.3999 14.0009 16.7654 14.1522C17.1308 14.3036 17.4432 14.56 17.6629 14.8889C17.8827 15.2178 18 15.6044 18 16C17.9995 16.5303 17.7886 17.0387 17.4136 17.4136C17.0387 17.7886 16.5303 17.9995 16 18Z"
                      fill="white"
                    />
                    <path
                      d="M16 10C16.7911 10 17.5645 9.76541 18.2223 9.32588C18.8801 8.88635 19.3928 8.26164 19.6955 7.53074C19.9983 6.79983 20.0775 5.99556 19.9231 5.21964C19.7688 4.44372 19.3878 3.73098 18.8284 3.17157C18.269 2.61216 17.5563 2.2312 16.7804 2.07686C16.0044 1.92252 15.2002 2.00173 14.4693 2.30448C13.7384 2.60723 13.1136 3.11992 12.6741 3.77772C12.2346 4.43552 12 5.20888 12 6C12.0011 7.06053 12.4229 8.0773 13.1728 8.8272C13.9227 9.57711 14.9395 9.99889 16 10ZM16 4C16.3956 4 16.7822 4.1173 17.1111 4.33706C17.44 4.55683 17.6964 4.86918 17.8478 5.23463C17.9991 5.60009 18.0387 6.00222 17.9616 6.39018C17.8844 6.77814 17.6939 7.13451 17.4142 7.41422C17.1345 7.69392 16.7781 7.8844 16.3902 7.96157C16.0022 8.03874 15.6001 7.99914 15.2346 7.84776C14.8692 7.69639 14.5568 7.44004 14.3371 7.11114C14.1173 6.78224 14 6.39556 14 6C14.0006 5.46976 14.2115 4.9614 14.5865 4.58646C14.9614 4.21152 15.4698 4.00061 16 4Z"
                      fill="white"
                    />
                    <path
                      d="M16 22C15.2089 22 14.4355 22.2346 13.7777 22.6741C13.1199 23.1136 12.6072 23.7384 12.3045 24.4693C12.0017 25.2002 11.9225 26.0044 12.0769 26.7804C12.2312 27.5563 12.6122 28.269 13.1716 28.8284C13.731 29.3878 14.4437 29.7688 15.2196 29.9231C15.9956 30.0775 16.7998 29.9983 17.5307 29.6955C18.2616 29.3928 18.8864 28.8801 19.3259 28.2223C19.7654 27.5645 20 26.7911 20 26C19.9988 24.9395 19.577 23.9228 18.8271 23.1729C18.0772 22.423 17.0605 22.0012 16 22ZM16 28C15.6044 28 15.2178 27.8827 14.8889 27.6629C14.56 27.4432 14.3036 27.1308 14.1522 26.7654C14.0009 26.3999 13.9613 25.9978 14.0384 25.6098C14.1156 25.2219 14.3061 24.8655 14.5858 24.5858C14.8655 24.3061 15.2219 24.1156 15.6098 24.0384C15.9978 23.9613 16.3999 24.0009 16.7654 24.1522C17.1308 24.3036 17.4432 24.56 17.6629 24.8889C17.8827 25.2178 18 25.6044 18 26C17.9995 26.5303 17.7886 27.0387 17.4136 27.4136C17.0387 27.7886 16.5303 27.9995 16 28Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="main">
              <div className="overlap-group">
                <div className="timer">
                  <h1 className="text-wrapper">29:10</h1>
                </div>
                <div class="load">
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="9" viewBox="0 0 42 9" fill="none"
                  >
                    <path
                      d="M4.48627 0.655823C3.69387 0.655823 2.91926 0.891055 2.2604 1.33177C1.60154 1.77249 1.08802 2.3989 0.784781 3.13178C0.481541 3.86467 0.4022 4.67111 0.55679 5.44914C0.71138 6.22717 1.09296 6.94183 1.65327 7.50275C2.21359 8.06368 2.92747 8.44568 3.70465 8.60044C4.48182 8.75519 5.28739 8.67577 6.01948 8.3722C6.75156 8.06863 7.37728 7.55454 7.81752 6.89497C8.25776 6.23539 8.49273 5.45993 8.49273 4.66666C8.49154 3.60329 8.06905 2.58381 7.31795 1.83189C6.56685 1.07997 5.54848 0.657017 4.48627 0.655823ZM4.48627 6.67208C4.09007 6.67208 3.70276 6.55447 3.37333 6.33411C3.0439 6.11375 2.78714 5.80055 2.63552 5.4341C2.48391 5.06766 2.44423 4.66444 2.52153 4.27542C2.59882 3.88641 2.78961 3.52908 3.06977 3.24862C3.34993 2.96815 3.70687 2.77716 4.09546 2.69978C4.48405 2.6224 4.88683 2.66211 5.25287 2.8139C5.61892 2.96568 5.93178 3.22272 6.1519 3.55251C6.37201 3.8823 6.4895 4.27003 6.4895 4.66666C6.48897 5.19837 6.27775 5.70815 5.90218 6.08412C5.52662 6.4601 5.0174 6.67155 4.48627 6.67208Z"
                      fill="white"
                    />
                    <path
                      d="M26.5218 0.655823C25.7294 0.655823 24.9548 0.891055 24.2959 1.33177C23.6371 1.77249 23.1236 2.3989 22.8203 3.13178C22.5171 3.86467 22.4377 4.67111 22.5923 5.44914C22.7469 6.22717 23.1285 6.94183 23.6888 7.50275C24.2491 8.06368 24.963 8.44568 25.7402 8.60044C26.5174 8.75519 27.3229 8.67577 28.055 8.3722C28.7871 8.06863 29.4128 7.55454 29.8531 6.89497C30.2933 6.23539 30.5283 5.45993 30.5283 4.66666C30.5271 3.60329 30.1046 2.58381 29.3535 1.83189C28.6024 1.07997 27.584 0.657017 26.5218 0.655823ZM26.5218 6.67208C26.1256 6.67208 25.7383 6.55447 25.4089 6.33411C25.0794 6.11375 24.8227 5.80055 24.6711 5.4341C24.5194 5.06766 24.4798 4.66444 24.5571 4.27542C24.6344 3.88641 24.8252 3.52908 25.1053 3.24862C25.3855 2.96815 25.7424 2.77716 26.131 2.69978C26.5196 2.6224 26.9224 2.66211 27.2884 2.8139C27.6545 2.96568 27.9673 3.22272 28.1874 3.55251C28.4076 3.8823 28.525 4.27003 28.525 4.66666C28.5245 5.19837 28.3133 5.70815 27.9377 6.08412C27.5622 6.4601 27.0529 6.67155 26.5218 6.67208Z"
                      fill="white"
                    />
                    <path
                      d="M15.504 0.655823C14.7116 0.655823 13.937 0.891055 13.2782 1.33177C12.6193 1.77249 12.1058 2.3989 11.8025 3.13178C11.4993 3.86467 11.42 4.67111 11.5746 5.44914C11.7291 6.22717 12.1107 6.94183 12.671 7.50275C13.2314 8.06368 13.9452 8.44568 14.7224 8.60044C15.4996 8.75519 16.3052 8.67577 17.0372 8.3722C17.7693 8.06863 18.3951 7.55454 18.8353 6.89497C19.2755 6.23539 19.5105 5.45993 19.5105 4.66666C19.5093 3.60329 19.0868 2.58381 18.3357 1.83189C17.5846 1.07997 16.5663 0.657017 15.504 0.655823ZM15.504 6.67208C15.1078 6.67208 14.7205 6.55447 14.3911 6.33411C14.0617 6.11375 13.8049 5.80055 13.6533 5.4341C13.5017 5.06766 13.462 4.66444 13.5393 4.27542C13.6166 3.88641 13.8074 3.52908 14.0875 3.24862C14.3677 2.96815 14.7246 2.77716 15.1132 2.69978C15.5018 2.6224 15.9046 2.66211 16.2706 2.8139C16.6367 2.96568 16.9495 3.22272 17.1697 3.55251C17.3898 3.8823 17.5073 4.27003 17.5073 4.66666C17.5067 5.19837 17.2955 5.70815 16.92 6.08412C16.5444 6.4601 16.0352 6.67155 15.504 6.67208Z"
                      fill="white"
                    />
                    <path
                      d="M37.5396 0.655823C36.7472 0.655823 35.9726 0.891055 35.3137 1.33177C34.6549 1.77249 34.1413 2.3989 33.8381 3.13178C33.5349 3.86467 33.4555 4.67111 33.6101 5.44914C33.7647 6.22717 34.1463 6.94183 34.7066 7.50275C35.2669 8.06368 35.9808 8.44568 36.758 8.60044C37.5351 8.75519 38.3407 8.67577 39.0728 8.3722C39.8049 8.06863 40.4306 7.55454 40.8708 6.89497C41.3111 6.23539 41.546 5.45993 41.546 4.66666C41.5449 3.60329 41.1224 2.58381 40.3713 1.83189C39.6202 1.07997 38.6018 0.657017 37.5396 0.655823ZM37.5396 6.67208C37.1434 6.67208 36.7561 6.55447 36.4266 6.33411C36.0972 6.11375 35.8405 5.80055 35.6888 5.4341C35.5372 5.06766 35.4975 4.66444 35.5748 4.27542C35.6521 3.88641 35.8429 3.52908 36.1231 3.24862C36.4032 2.96815 36.7602 2.77716 37.1488 2.69978C37.5374 2.6224 37.9401 2.66211 38.3062 2.8139C38.6722 2.96568 38.9851 3.22272 39.2052 3.55251C39.4253 3.8823 39.5428 4.27003 39.5428 4.66666C39.5423 5.19837 39.3311 5.70815 38.9555 6.08412C38.5799 6.4601 38.0707 6.67155 37.5396 6.67208Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="div">Flow</div>
              <div class="pause">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="47" viewBox="0 0 34 47" fill="none"
                >
                  <path
                    d="M8.5 7.83333H14.1667V39.1667H8.5V7.83333ZM19.8333 7.83333H25.5V39.1667H19.8333V7.83333Z" stroke="#365C56" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div data-tauri-drag-region class="titlebar">
              <div className="titlebar-button">
                <div className="close" onClick={() => appWindow.close()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="titlebar-button">
                <div className="dash" onClick={() => appWindow.minimize()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M2 7.75C2 7.55109 2.07902 7.36032 2.21967 7.21967C2.36032 7.07902 2.55109 7 2.75 7H12.75C12.9489 7 13.1397 7.07902 13.2803 7.21967C13.421 7.36032 13.5 7.55109 13.5 7.75C13.5 7.94891 13.421 8.13968 13.2803 8.28033C13.1397 8.42098 12.9489 8.5 12.75 8.5H2.75C2.55109 8.5 2.36032 8.42098 2.21967 8.28033C2.07902 8.13968 2 7.94891 2 7.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="titlebar-button">
                <div className="kons-button" onClick={async () => await appWindow.setAlwaysOnTop(onTop = !onTop)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72 0.219986C3.8353 0.105187 3.9848 0.0309951 4.14596 0.00860267C4.30711 -0.0137897 4.47118 0.0168318 4.61341 0.0958479C4.75564 0.174864 4.86832 0.297989 4.93444 0.446649C5.00057 0.59531 5.01656 0.761442 4.98 0.919986L8.31 4.24999H10.794C11.908 4.24999 12.465 5.59599 11.678 6.38399L9.767 8.29499L13.487 12.43C13.8174 12.7973 14.0001 13.2739 14 13.768V14H13.767C13.2733 13.9999 12.7971 13.8171 12.43 13.487L8.295 9.76599L6.384 11.676C5.596 12.464 4.25 11.906 4.25 10.793V8.30999L0.92 4.97999C0.761257 5.01689 0.594815 5.00108 0.445859 4.93495C0.296903 4.86882 0.173541 4.75597 0.0944414 4.61348C0.0153416 4.47098 -0.0151912 4.3066 0.00746346 4.14521C0.0301181 3.98382 0.104727 3.83419 0.22 3.71899L0.823 3.11499L3.116 0.821986L3.72 0.218986V0.219986Z" fill="white"/>
                </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
