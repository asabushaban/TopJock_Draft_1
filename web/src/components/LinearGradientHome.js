import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const LinearGradientContainer = styled.div`
  position: absolute;
  top: -100px;
  width: 55%;
  height: 10%;
  opacity: 0.7;
`;

const LinearGradientHome = () => {
  return (
    <LinearGradientContainer>
      <svg viewBox="0 0 937 544" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.97">
          <path
            d="M58.4318 97.1589C87.316 83.1916 117.208 70.8528 147.891 60.2314C161.532 55.5095 175.685 51.0726 190.529 51.308C228.475 51.9115 259.227 81.9694 280.418 111.739C299.934 139.159 315.984 168.542 328.117 199.065C340.141 229.311 348.584 261.155 367.851 288.368C387.118 315.583 421.1 337.821 455.092 333.276C475.316 330.571 492.599 318.701 504.338 303.779C516.076 288.856 522.85 271.032 528.118 253.078C534.148 232.523 538.981 210.419 554.82 195.185C571.215 179.414 598.579 174.046 621.821 182.042C654.885 193.415 672.882 225.631 691.804 253.159C715.842 288.131 747.865 320.568 789.185 336.767C830.506 352.968 882.177 349.439 911.384 320.568"
            stroke="url(#paint0_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M58.9284 106.424C87.3076 92.6682 116.741 80.631 146.968 70.3826C160.404 65.8281 174.334 61.5727 188.925 61.7983C218.233 62.251 243.318 80.147 263.044 101.724C268.423 107.602 273.404 113.751 277.965 119.894C297.577 146.332 313.84 174.77 326.311 204.391C338.666 233.741 347.403 264.791 366.669 291.323C377.471 306.196 392.298 319.751 409.137 328.614C423.809 336.328 440.13 340.439 456.467 338.476C459.384 338.127 462.247 337.589 465.049 336.878C482.307 332.493 496.911 321.557 507.491 308.373C510.887 304.138 513.911 299.681 516.637 295.077C523.756 283.051 528.957 269.969 533.488 256.941C540.702 236.281 547.314 214.77 563.977 199.957C580.525 185.245 606.859 179.911 629.595 187.617C661.947 198.581 679.946 229.411 698.82 255.586C700.308 257.649 701.825 259.702 703.373 261.741C726.755 292.565 756.823 320.226 794.468 334.075C834.605 348.843 884.358 344.586 912.316 316.103"
            stroke="url(#paint1_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M59.4249 115.689C87.2988 102.145 116.275 90.4102 146.045 80.5359C159.274 76.146 172.983 72.0738 187.321 72.288C216.112 72.7181 240.902 89.841 260.567 110.569C265.936 116.217 270.925 122.132 275.514 128.05C295.219 153.505 311.696 180.998 324.505 209.716C337.192 238.171 346.247 268.418 365.488 294.277C376.811 309.496 391.979 323.495 409.223 332.848C424.215 340.964 441.013 345.483 457.843 343.677C460.853 343.356 463.813 342.836 466.712 342.132C484.579 337.789 499.584 326.497 510.643 312.967C514.188 308.628 517.364 304.067 520.253 299.378C527.8 287.126 533.605 273.878 538.856 260.804C547.255 240.041 555.604 219.135 573.134 204.731C589.778 191.055 615.137 185.777 637.371 193.193C669.008 203.747 687.01 233.191 705.838 258.013C707.322 259.971 708.835 261.915 710.375 263.847C733.659 293.038 763.216 318.88 799.753 331.383C838.702 344.717 886.541 339.732 913.248 311.639"
            stroke="url(#paint2_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M59.9221 124.955C87.2895 111.623 115.81 100.189 145.12 90.6878C158.145 86.4652 171.632 82.5748 185.718 82.7784C213.992 83.1858 238.484 99.5335 258.089 119.415C263.449 124.832 268.448 130.513 273.062 136.204C292.863 160.678 309.553 187.228 322.7 215.042C335.717 242.601 345.114 272.032 364.306 297.231C376.159 312.792 391.662 327.238 409.311 337.08C424.622 345.6 441.898 350.527 459.217 348.876C462.322 348.584 465.377 348.084 468.376 347.386C486.851 343.084 502.258 331.437 513.797 317.561C517.489 313.118 520.819 308.456 523.871 303.679C531.846 291.199 538.254 277.786 544.226 264.666C553.808 243.798 563.851 223.505 582.291 209.503C598.974 196.836 623.418 191.641 645.146 198.769C676.071 208.911 694.075 236.971 712.856 260.441C714.338 262.291 715.844 264.129 717.377 265.951C740.563 293.51 769.611 317.533 805.038 328.691C842.802 340.591 888.722 334.878 914.18 307.174"
            stroke="url(#paint3_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M60.4195 134.22C87.2816 121.1 115.343 109.969 144.197 100.84C157.017 96.7838 170.281 93.077 184.115 93.2685C211.871 93.6543 236.068 109.228 255.611 128.26C260.963 133.449 265.968 138.894 270.61 144.359C290.505 167.852 307.409 193.457 320.893 220.369C334.244 247.031 344.001 275.638 363.125 300.186C375.514 316.088 391.344 330.984 409.397 341.314C425.029 350.236 442.781 355.572 460.592 354.078C463.791 353.813 466.943 353.332 470.04 352.64C489.123 348.381 504.932 336.377 516.951 322.156C520.789 317.608 524.273 312.843 527.488 307.98C535.891 295.274 542.903 281.695 549.597 268.528C560.362 247.558 572.054 227.88 591.449 214.276C608.115 202.589 631.697 197.507 652.922 204.346C683.132 214.077 701.14 240.751 719.874 262.868C721.351 264.612 722.854 266.343 724.38 268.058C747.469 293.983 776.006 316.187 810.322 325.999C846.9 336.465 890.906 330.025 915.113 302.71"
            stroke="url(#paint4_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M60.9164 143.486C87.2722 130.577 114.876 119.747 143.274 110.993C155.888 107.103 168.93 103.578 182.51 103.759C209.75 104.123 233.651 118.922 253.134 137.105C258.475 142.065 263.49 147.277 268.158 152.514C288.148 175.025 305.264 199.686 319.088 225.695C332.769 251.46 342.907 279.234 361.943 303.14C374.876 319.38 391.025 334.728 409.482 345.548C425.434 354.872 443.665 360.615 461.969 359.279C465.259 359.041 468.507 358.58 471.703 357.896C491.395 353.677 507.604 341.317 520.104 326.75C524.089 322.099 527.727 317.23 531.106 312.282C539.934 299.349 547.522 285.59 554.966 272.392C566.866 251.292 580.213 232.247 600.607 219.05C617.206 208.307 639.976 203.372 660.696 209.922C690.194 219.242 708.204 244.532 726.892 265.297C728.366 266.933 729.863 268.557 731.383 270.164C754.373 294.457 782.4 314.841 815.606 323.306C850.999 332.34 893.087 325.172 916.047 298.247"
            stroke="url(#paint5_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M61.4132 152.751C87.2635 140.056 114.411 129.527 142.35 121.145C154.759 117.421 167.579 114.079 180.906 114.25C207.63 114.591 231.233 128.617 250.655 145.95C255.988 150.682 261.01 155.658 265.706 160.669C285.79 182.2 303.121 205.914 317.282 231.022C331.294 255.891 341.831 282.821 360.761 306.095C374.246 322.67 390.707 338.472 409.568 349.781C425.841 359.508 444.549 365.661 463.342 364.479C466.727 364.27 470.073 363.828 473.366 363.15C493.666 358.973 510.277 346.258 523.257 331.345C527.389 326.589 531.181 321.619 534.723 316.583C543.979 303.424 552.167 289.495 560.334 276.255C573.415 255.047 588.331 236.603 609.763 223.823C626.249 213.992 648.255 209.239 668.471 215.499C697.256 224.408 715.269 248.312 733.91 267.723C735.38 269.255 736.871 270.77 738.385 272.27C761.276 294.929 788.794 313.496 820.891 320.615C855.098 328.216 895.269 320.318 916.979 293.782"
            stroke="url(#paint6_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M61.9101 162.016C87.255 149.533 113.945 139.306 141.427 131.298C153.631 127.739 166.228 124.581 179.303 124.739C205.509 125.059 228.816 138.31 248.176 154.796C253.501 159.298 258.533 164.04 263.254 168.823C283.434 189.372 300.977 212.142 315.476 236.348C329.82 260.32 340.768 286.399 359.581 309.047C373.622 325.955 390.39 342.216 409.654 354.015C426.247 364.143 445.432 370.704 464.718 369.679C468.196 369.498 471.637 369.075 475.031 368.404C495.938 364.269 512.951 351.198 526.411 335.939C530.69 331.08 534.635 326.005 538.34 320.884C548.025 307.498 556.815 293.402 565.705 280.116C579.967 258.802 596.41 240.94 618.921 228.595C635.252 219.64 656.535 215.104 676.246 221.075C704.318 229.573 722.334 252.091 740.928 270.151C742.394 271.574 743.881 272.983 745.388 274.375C768.181 295.401 795.188 312.148 826.174 317.922C859.196 324.089 897.451 315.465 917.911 289.318"
            stroke="url(#paint7_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M62.4067 171.282C87.2467 159.01 113.479 149.085 140.503 141.45C152.501 138.058 164.877 135.082 177.699 135.23C203.388 135.528 226.365 148.039 245.699 163.641C251.005 167.924 256.053 172.422 260.801 176.979C281.076 196.546 298.833 218.373 313.67 241.675C328.346 264.751 339.72 289.97 358.397 312.001C373.007 329.236 390.071 345.961 409.741 358.249C426.653 368.78 446.315 375.748 466.093 374.881C469.664 374.727 473.201 374.322 476.694 373.658C498.211 369.565 515.624 356.138 529.563 340.533C533.99 335.571 538.089 330.394 541.956 325.186C552.069 311.573 561.463 297.309 571.074 283.981C586.519 262.558 604.448 245.25 628.078 233.368C644.218 225.254 664.813 220.969 684.022 226.652C711.38 234.739 729.398 255.872 747.946 272.579C749.407 273.896 750.889 275.198 752.39 276.481C775.085 295.875 801.582 310.803 831.459 315.23C863.295 319.965 899.634 310.612 918.843 284.853"
            stroke="url(#paint8_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M62.9039 180.548C87.237 168.488 113.013 158.865 139.58 151.603C151.373 148.376 163.526 145.584 176.095 145.72C201.267 145.995 223.947 157.736 243.221 172.487C248.517 176.541 253.575 180.803 258.35 185.135C278.718 203.719 296.689 224.601 311.863 247.001C326.871 269.181 338.685 293.532 357.216 314.956C372.4 332.513 389.753 349.706 409.827 362.482C427.06 373.416 447.2 380.793 467.47 380.081C471.132 379.957 474.767 379.571 478.356 378.914C500.482 374.862 518.298 361.078 532.716 345.128C537.291 340.062 541.543 334.782 545.575 329.487C556.114 315.648 566.111 301.217 576.444 287.843C593.073 266.316 612.449 249.526 637.236 238.143C653.153 230.832 673.094 226.835 691.796 232.227C718.441 239.905 736.463 259.653 754.963 275.007C756.423 276.218 757.898 277.411 759.393 278.586C781.989 296.347 807.977 309.456 836.743 312.538C867.394 315.839 901.815 305.758 919.776 280.39"
            stroke="url(#paint9_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M63.4011 189.813C87.2292 177.965 112.546 168.644 138.656 161.754C150.245 158.695 162.176 156.084 174.491 156.21C199.147 156.464 221.529 167.432 240.743 181.332C246.031 185.157 251.097 189.185 255.899 193.289C276.362 210.892 294.546 230.83 310.058 252.327C325.398 273.611 337.663 297.086 356.035 317.911C371.802 335.784 389.434 353.45 409.913 366.714C427.466 378.051 448.083 385.838 468.844 385.282C472.601 385.185 476.332 384.818 480.02 384.167C502.755 380.157 520.97 366.018 535.87 349.722C540.591 344.552 544.997 339.169 549.192 333.788C560.158 319.722 570.762 305.125 581.814 291.705C599.628 270.073 620.416 253.759 646.393 242.915C662.061 236.374 681.373 232.7 699.572 237.803C725.503 245.071 743.527 263.432 761.981 277.434C763.436 278.538 764.908 279.624 766.395 280.692C788.893 296.819 814.371 308.11 842.028 309.846C871.492 311.713 903.998 300.904 920.709 275.925"
            stroke="url(#paint10_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M63.8974 199.079C87.2202 187.443 112.08 178.422 137.732 171.908C149.116 169.013 160.824 166.586 172.887 166.701C197.025 166.933 219.114 177.128 238.265 190.178C243.544 193.775 248.618 197.567 253.446 201.445C274.004 218.066 292.401 237.059 308.251 257.654C323.922 278.041 336.648 300.633 354.853 320.865C371.212 339.049 389.116 357.195 409.999 370.948C427.873 382.688 448.967 390.882 470.219 390.483C474.069 390.415 477.897 390.066 481.684 389.422C505.027 385.454 523.644 370.959 539.023 354.318C543.892 349.042 548.451 343.557 552.81 338.089C564.203 323.798 575.411 309.034 587.183 295.568C606.184 273.832 628.35 257.943 655.55 247.688C670.948 241.884 689.651 238.566 707.347 243.38C732.566 250.236 750.593 267.213 768.999 279.862C770.451 280.858 771.917 281.839 773.398 282.797C795.798 297.293 820.766 306.764 847.311 307.154C875.592 307.59 906.179 296.051 921.641 271.462"
            stroke="url(#paint11_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M64.3946 208.344C87.2108 196.92 111.615 188.202 136.808 182.059C147.987 179.332 159.474 177.087 171.283 177.191C194.906 177.399 216.697 186.823 235.787 199.022C241.057 202.391 246.14 205.948 250.994 209.599C271.647 225.239 290.258 243.287 306.446 262.979C322.449 282.469 335.645 304.172 353.671 323.819C370.631 342.306 388.797 360.938 410.085 375.181C428.278 387.323 449.851 395.926 471.595 395.683C475.538 395.642 479.461 395.314 483.348 394.676C507.298 390.749 526.318 375.898 542.176 358.91C547.192 353.532 551.905 347.943 556.427 342.391C568.247 327.871 580.091 312.966 592.553 299.43C612.786 277.628 636.257 262.067 664.707 252.461C679.819 247.359 697.932 244.43 715.122 248.956C739.627 255.401 757.656 270.992 776.016 282.289C777.465 283.179 778.926 284.051 780.4 284.903C802.701 297.765 827.159 305.417 852.595 304.461C879.689 303.463 908.362 291.198 922.574 266.997"
            stroke="url(#paint12_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M64.8918 217.61C87.2028 206.398 111.148 197.981 135.885 192.212C146.858 189.651 158.123 187.588 169.681 187.682C192.784 187.868 214.284 196.518 233.308 207.868C238.571 211.008 243.661 214.33 248.542 217.755C269.289 232.412 288.113 249.516 304.641 268.306C320.974 286.9 334.65 307.704 352.489 326.774C370.06 345.556 388.479 364.683 410.172 379.415C428.685 391.959 450.735 400.971 472.97 400.884C477.006 400.872 481.027 400.562 485.012 399.932C509.571 396.046 528.99 380.838 545.33 363.505C550.492 358.023 555.36 352.331 560.044 346.692C572.292 331.947 584.74 316.875 597.922 303.294C619.339 281.387 644.139 266.124 673.864 257.235C688.68 252.804 706.211 250.296 722.897 254.532C746.689 260.568 764.721 274.773 783.034 284.717C784.479 285.501 785.935 286.266 787.403 287.009C809.605 298.238 833.553 304.072 857.88 301.77C883.789 299.338 910.545 286.345 923.507 262.533"
            stroke="url(#paint13_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M65.3887 226.874C87.1943 215.874 110.683 207.76 134.961 202.364C145.73 199.969 156.772 198.089 168.076 198.172C190.664 198.336 211.869 206.21 230.83 216.713C236.084 219.624 241.182 222.711 246.09 225.909C266.932 239.585 285.97 255.745 302.835 273.631C319.5 291.33 333.662 311.23 351.308 329.727C369.498 348.798 388.161 368.426 410.258 383.647C429.091 396.594 451.619 406.014 474.345 406.084C478.475 406.1 482.591 405.809 486.675 405.185C511.843 401.341 531.664 385.777 548.484 368.099C553.792 362.513 558.813 356.719 563.661 350.993C576.337 336.021 589.389 320.783 603.29 307.155C625.893 285.145 652.002 270.104 683.022 262.007C697.535 258.219 714.491 256.161 730.672 260.108C753.751 265.733 771.786 278.552 790.052 287.144C791.493 287.822 792.944 288.479 794.405 289.114C816.51 298.711 839.949 302.726 863.164 299.077C887.887 295.212 912.727 281.491 924.439 258.068"
            stroke="url(#paint14_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M65.886 236.14C87.1863 225.353 110.217 217.539 134.038 212.517C144.601 210.288 155.421 208.591 166.473 208.662C188.543 208.805 209.456 215.903 228.352 225.558C233.598 228.24 238.704 231.093 243.638 234.064C264.576 246.759 283.826 261.973 301.028 278.958C318.025 295.76 332.682 314.75 350.126 332.682C368.948 352.03 387.843 372.171 410.344 387.881C429.498 401.231 452.502 411.059 475.72 411.285C479.944 411.329 484.156 411.056 488.339 410.44C514.115 406.638 534.338 390.718 551.636 372.694C557.093 367.005 562.267 361.107 567.278 355.295C580.383 340.096 594.037 324.692 608.66 311.019C632.446 288.905 659.851 274 692.18 266.78C706.39 263.608 722.77 262.028 738.448 265.685C760.813 270.899 778.85 282.333 797.069 289.572C798.507 290.143 799.954 290.693 801.407 291.219C823.415 299.184 846.343 301.38 868.449 296.385C891.987 291.087 914.909 276.638 925.372 253.604"
            stroke="url(#paint15_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M66.3823 245.405C87.1761 234.829 109.75 227.318 133.114 222.668C143.472 220.606 154.07 219.092 164.868 219.152C186.423 219.273 207.043 225.592 225.874 234.403C231.113 236.854 236.225 239.474 241.187 242.218C262.218 253.932 281.682 268.202 299.223 284.285C316.551 300.19 331.706 318.262 348.945 335.637C368.407 355.252 387.525 375.916 410.43 392.115C429.903 405.866 453.386 416.103 477.096 416.485C481.411 416.557 485.721 416.303 490.002 415.693C516.387 411.934 537.01 395.658 554.789 377.288C560.393 371.494 565.721 365.494 570.896 359.595C584.427 344.17 598.686 328.6 614.031 314.882C638.999 292.664 667.692 277.802 701.337 271.553C715.249 268.969 731.05 267.893 746.223 271.261C767.875 276.064 785.915 286.113 804.088 291.999C805.522 292.463 806.962 292.905 808.41 293.325C830.318 299.655 852.737 300.033 873.733 293.693C896.085 286.962 917.091 271.784 926.304 249.14"
            stroke="url(#paint16_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M66.8795 254.671C87.1683 244.307 109.285 237.097 132.191 232.822C142.343 230.925 152.719 229.593 163.266 229.643C184.302 229.741 204.629 235.283 223.396 243.249C228.627 245.47 233.747 247.857 238.735 250.374C259.861 261.106 279.538 274.432 297.417 289.611C315.076 304.62 330.737 321.769 347.762 338.591C367.877 358.465 387.207 379.661 410.516 396.349C430.31 410.503 454.271 421.148 478.471 421.686C482.88 421.787 487.286 421.552 491.666 420.949C518.659 417.23 539.683 400.598 557.944 381.883C563.694 375.985 569.175 369.881 574.513 363.897C588.472 348.246 603.334 332.51 619.4 318.745C645.553 296.422 675.534 281.506 710.495 276.327C724.118 274.309 739.329 273.759 753.997 276.838C774.936 281.229 792.979 289.894 811.105 294.428C812.536 294.785 813.972 295.12 815.413 295.43C837.222 300.129 859.13 298.687 879.017 291.002C900.184 282.837 919.273 266.93 927.237 244.676"
            stroke="url(#paint17_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M67.3766 263.937C87.1598 253.785 108.819 246.876 131.267 242.975C141.214 241.243 151.368 240.095 161.662 240.133C182.182 240.21 202.228 244.942 220.917 252.094C226.144 254.077 231.269 256.238 236.282 258.53C257.503 268.279 277.394 280.66 295.611 294.938C313.603 309.05 329.772 325.27 346.581 341.546C367.36 361.665 386.889 383.405 410.603 400.582C430.716 415.139 455.154 426.193 479.846 426.887C484.349 427.016 488.851 426.8 493.329 426.203C520.931 422.527 542.356 405.538 561.097 386.478C566.994 380.476 572.63 374.27 578.13 368.199C592.516 352.32 607.983 336.419 624.77 322.607C652.106 300.182 683.384 285.102 719.651 281.1C733.001 279.627 747.608 279.624 761.773 282.415C781.998 286.395 800.044 293.673 818.123 296.855C819.55 297.106 820.981 297.334 822.416 297.537C844.126 300.601 865.524 297.341 884.301 288.31C904.282 278.712 921.455 262.078 928.169 240.212"
            stroke="url(#paint18_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M67.8736 273.203C87.1505 263.262 108.352 256.656 130.344 253.127C140.085 251.562 150.017 250.597 160.056 250.623C180.06 250.678 199.812 254.636 218.44 260.941C223.658 262.693 228.79 264.62 233.83 266.685C255.147 275.452 275.25 286.889 293.804 300.265C312.128 313.479 328.81 328.764 345.4 344.5C366.854 364.852 386.571 387.15 410.688 404.816C431.123 419.775 456.038 431.236 481.221 432.088C485.817 432.244 490.416 432.048 494.993 431.458C523.203 427.823 545.03 410.478 564.25 391.072C570.294 384.966 576.083 378.657 581.747 372.5C596.56 356.394 612.631 340.327 630.139 326.47C658.659 303.941 691.254 288.59 728.809 285.874C741.902 284.927 755.887 285.489 769.548 287.991C789.06 291.56 807.109 297.454 825.142 299.282C826.564 299.427 827.99 299.548 829.418 299.642C851.031 301.075 871.92 295.995 889.586 285.617C908.38 274.586 923.638 257.224 929.101 235.747"
            stroke="url(#paint19_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M68.3709 282.468C87.1425 272.739 107.887 266.435 129.42 263.28C138.958 261.88 148.666 261.098 158.454 261.113C177.939 261.146 197.395 264.329 215.962 269.786C221.17 271.309 226.311 273.002 231.379 274.84C252.789 282.626 273.106 293.117 291.999 305.59C310.654 317.91 327.853 332.253 344.217 347.454C366.363 368.025 386.253 390.894 410.774 409.049C431.529 424.409 456.921 436.281 482.598 437.288C487.286 437.473 491.98 437.295 496.657 436.712C525.475 433.119 547.704 415.419 567.403 395.666C573.594 389.457 579.537 383.045 585.364 376.801C600.605 360.469 617.281 344.236 635.508 330.333C665.212 307.699 699.154 291.964 737.967 290.647C750.827 290.21 764.167 291.355 777.323 293.567C796.123 296.726 814.173 301.233 832.159 301.71C833.579 301.748 835 301.761 836.421 301.748C857.936 301.547 878.314 294.649 894.87 282.925C912.48 270.461 925.819 252.371 930.036 231.284"
            stroke="url(#paint20_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
          <path
            d="M68.8671 291.732C111.311 269.621 164.666 266.477 213.483 278.63C262.3 290.783 306.681 317.351 343.035 350.408C365.882 371.181 385.935 394.638 410.86 413.281C435.787 431.926 467.421 445.695 498.319 441.965C536.99 437.298 563.923 407.583 588.982 381.102C630.19 337.552 682.533 295.109 747.124 295.419C779.294 295.574 811.553 306.582 843.422 303.853C887.611 300.069 925.213 266.982 930.968 226.819"
            stroke="url(#paint21_linear_760_2101)"
            stroke-width="1.33333"
            stroke-miterlimit="10"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_760_2101"
            x1="450.417"
            y1="337.584"
            x2="505.153"
            y2="133.309"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_760_2101"
            x1="450.542"
            y1="342.184"
            x2="503.696"
            y2="143.81"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_760_2101"
            x1="450.663"
            y1="346.801"
            x2="502.241"
            y2="154.306"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_760_2101"
            x1="450.779"
            y1="351.433"
            x2="501.99"
            y2="160.311"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_760_2101"
            x1="450.892"
            y1="356.082"
            x2="502.379"
            y2="163.928"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_760_2101"
            x1="451.002"
            y1="360.743"
            x2="502.77"
            y2="167.543"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_760_2101"
            x1="451.107"
            y1="365.416"
            x2="503.159"
            y2="171.157"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_760_2101"
            x1="451.21"
            y1="370.1"
            x2="503.549"
            y2="174.768"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_760_2101"
            x1="451.309"
            y1="374.795"
            x2="505.114"
            y2="173.995"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_760_2101"
            x1="451.408"
            y1="379.499"
            x2="507.56"
            y2="169.937"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_760_2101"
            x1="451.503"
            y1="384.212"
            x2="510.005"
            y2="165.877"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_760_2101"
            x1="451.595"
            y1="388.932"
            x2="512.45"
            y2="161.819"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_760_2101"
            x1="451.687"
            y1="393.66"
            x2="514.896"
            y2="157.76"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint13_linear_760_2101"
            x1="451.777"
            y1="398.395"
            x2="517.342"
            y2="153.702"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint14_linear_760_2101"
            x1="451.864"
            y1="403.135"
            x2="519.788"
            y2="149.642"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint15_linear_760_2101"
            x1="451.95"
            y1="407.882"
            x2="522.233"
            y2="145.584"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint16_linear_760_2101"
            x1="452.035"
            y1="412.633"
            x2="524.678"
            y2="141.525"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint17_linear_760_2101"
            x1="452.119"
            y1="417.391"
            x2="527.124"
            y2="137.466"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint18_linear_760_2101"
            x1="452.201"
            y1="422.152"
            x2="529.569"
            y2="133.408"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint19_linear_760_2101"
            x1="452.284"
            y1="426.918"
            x2="532.018"
            y2="129.349"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint20_linear_760_2101"
            x1="452.436"
            y1="431.707"
            x2="534.535"
            y2="125.31"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint21_linear_760_2101"
            x1="452.705"
            y1="436.53"
            x2="537.17"
            y2="121.301"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#001535" />
            <stop offset="0.489583" stop-color="#0D274E" />
            <stop offset="1" stop-color="#0D274E" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </LinearGradientContainer>
  );
};

export default LinearGradientHome;