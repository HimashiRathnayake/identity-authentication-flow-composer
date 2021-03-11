/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { FunctionComponent, ReactElement } from "react";

/**
 * Authenticator Icons Component Prop types.
 */
type AuthenticatorIconsProps = {
    /**
     * Authentication icon's type
     */
    type: string,
    /**
     * Authentication icon's position x
     */
    iconX:number,
    /**
     * Authentication icon's position y
     */
    iconY:number,
    /**
     * Authentication icon's height
     */
    iconHeight:number,
    /**
     * Authentication icon's width
     */
    iconWidth:number
}

/**
 * Authenticator Icons Component.
 *
 * @param {AuthenticatorIconsProps} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const AuthenticatorIcons : FunctionComponent<AuthenticatorIconsProps> = (
    props: AuthenticatorIconsProps
): ReactElement => {

    const {
        type,
        iconX,
        iconY,
        iconHeight,
        iconWidth
    } = props;

    return(
        type==="Google"||type==="Google-icon" ? (
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                x={ iconX } y={ iconY } height={ iconHeight } width={ iconWidth }
                viewBox="-150 -150 700 700" enableBackground="new 0 0 512 512;" xmlSpace="preserve">
                <path fill="#167EE6" d="M492.668,211.489l-208.84-0.01c-9.222,0-16.697,7.474-16.697,16.696v66.715
                    c0,9.22,7.475,16.696,16.696,16.696h117.606c-12.878,33.421-36.914,61.41-67.58,79.194L384,477.589
                    c80.442-46.523,128-128.152,128-219.53c0-13.011-0.959-22.312-2.877-32.785C507.665,217.317,500.757,
                    211.489,492.668,211.489z"/>
                <path fill="#12B347" d="M256,411.826c-57.554,0-107.798-31.446-134.783-77.979l-86.806,50.034
                    C78.586,460.443,161.34,512,256,512c46.437,0,90.254-12.503,128-34.292v-0.119l-50.147-86.81
                    C310.915,404.083,284.371,411.826,256,411.826z"/>
                <path fill="#0F993E" d="M384,477.708v-0.119l-50.147-86.81c-22.938,13.303-49.48,21.047-77.853,21.047V512
                    C302.437,512,346.256,499.497,384,477.708z"/>
                <path fill="#FFD500" d="M100.174,256c0-28.369,7.742-54.91,21.043-77.847l-86.806-50.034C12.502,165.746,0,
                209.444,0,256
                    s12.502,90.254,34.411,127.881l86.806-50.034C107.916,310.91,100.174,284.369,100.174,256z"/>
                <path fill="#FF4B26" d="M256,100.174c37.531,0,72.005,13.336,98.932,35.519c6.643,5.472,16.298,5.077,
                22.383-1.008
                    l47.27-47.27c6.904-6.904,6.412-18.205-0.963-24.603C378.507,23.673,319.807,0,256,0C161.34,0,78.586,
                    51.557,34.411,128.119
                    l86.806,50.034C148.202,131.62,198.446,100.174,256,100.174z"/>
                <path fill="#D93F21" d="M354.932,135.693c6.643,5.472,16.299,5.077,22.383-1.008l47.27-47.27
                    c6.903-6.904,6.411-18.205-0.963-24.603C378.507,23.672,319.807,0,256,0v100.174C293.53,100.174,
                    328.005,113.51,354.932,135.693z"/>
            </svg>
        ) : type==="Instagram"||type==="Instagram-icon" ? (
            <svg enableBackground="new 0 0 24 24" height={ iconHeight } viewBox="-6 -5 30 30" width={ iconWidth }
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x={ iconX } y={ iconY }>
                <linearGradient id="SVGID_1_" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)"
                    gradientUnits="userSpaceOnUse" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047">
                    <stop offset="0" stopColor="#fd5"/>
                    <stop offset=".5" stopColor="#ff543e"/>
                    <stop offset="1" stopColor="#c837ab"/>
                </linearGradient>
                <path d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 
                14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-
                .236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z"
                fill="url(#SVGID_1_)"/>
                <path d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 
                4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-
                5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 
                8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7
                .263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063
                -1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2
                .036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z" fill="#fff"/>
            </svg>
        ) : type==="Twitter"||type==="Twitter1-icon" ? (
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                x={ iconX } y={ iconY } height={ iconHeight } width={ iconWidth }
                viewBox="-100 -100 600 600" enableBackground="new 0 0 512 512" xmlSpace="preserve">
                <path fill="#03A9F4" d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,
                46.176-58.016
                        c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,
                        0-104.896,47.168-104.896,104.992
                        c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,
                        15.712-14.368,33.696-14.368,53.056
                        c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0
                        ,1.152
                        c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0
                        .384-19.872-1.792
                        c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16
                        .864-0.384-25.12-1.44
                        C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0
                        .384-13.568
                        C480.224,136.96,497.728,118.496,512,97.248z"/>
            </svg>
        ) : type==="Facebook"||type==="Facebook-icon" ? (
            <svg height={ iconHeight } width={ iconWidth } viewBox="-100 -100 612 612"
                xmlns="http://www.w3.org/2000/svg" x={ iconX } y={ iconY }>
                <path d="m483.738281 0h-455.5c-15.597656.0078125-28.24218725 12.660156-28.238281 
                28.261719v455.5c.0078125 15.597656 12.660156 28.242187 28.261719 28.238281h455.476562c15.605469.003906 
                28.257813-12.644531 28.261719-28.25 0-.003906 0-.007812 0-.011719v-455.5c-.007812-15.597656-12.660156
                -28.24218725-28.261719-28.238281zm0 0" fill="#4267b2"/>
                <path d="m353.5 512v-198h66.75l10-77.5h-76.75v-49.359375c0-22.386719 6.214844-37.640625 
                38.316406-37.640625h40.683594v-69.128906c-7.078125-.941406-31.363281-3.046875-59.621094-3.046875-59 
                0-99.378906 36-99.378906 102.140625v57.035156h-66.5v77.5h66.5v198zm0 0" fill="#fff"/>
            </svg>
        ) : type==="fido" ? (
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" x={ iconX } y={ iconY }
                viewBox="0 0 503.488 503.488" enableBackground="new 0 0 503.488 503.488" xmlSpace="preserve"
                width={ iconWidth } height={ iconHeight }
            >
                <g>
                    <g>
                        <path d="M382.616,133.644h-61.908c-2.148,0-4.156-0.436-4.156,1.7v61.904c0,2.14,2.008,3.28,4.156,
                        3.28h15.516v49.764
                                l-70.82,69.436V113.972h27.86c0.024,0,0.056,0,0.056,0c2.164,0,3.892-2.744,3.892-4.88c0-0
                                .78-0.228-2.016-0.624-2.628
                                L254.616,2.544C254.024,1.088,252.6,0,251.032,0c-1.58,0-3,0.892-3.584,2.352l-42.24
                                ,104.304
                                c-0.484,1.196-0.344,3.552,0.376,4.616c0.72,1.068,1.92,2.704,3.208,2.704h25.136v279.308l
                                -66.884-69.672v-71.948
                                c11.804-5.852,18.888-17.824,18.888-31.188c0-19.208-15.856-34.832-35.06-34.832c-19.212,0
                                -34.744,15.62-34.744,34.832
                                c0,13.364,7.64,25.336,19.444,31.188v78.356c0,0.992-0.116,2.008,0.084,3.056c0.084,0.388,
                                0.1,0.756,0.22,1.124l0.084,0.436
                                c0.116,0.432,0.22,0.868,0.392,1.3c0.196,0.452,0.408,0.88,0.648,1.308l0.22,0.392c0.164,
                                0.332,0.328,0.664,0.544,0.976
                                c0.584,0.88,1.24,1.676,1.932,2.364l85.872,85.868c-10.568,8.008-16.964,20.632-16.964,
                                33.992
                                c0,23.52,19.132,42.652,42.656,42.652c23.516,0,41.976-19.132,41.976-42.652c0-17.776
                                -12.1-33.412-27.836-39.752v-57.576
                                l96.5-95.836c0.704-0.7,1.712-1.504,2.288-2.38c0.22-0.308,0.556-0.64,0.728-0.976l0.
                                296-0.396
                                c0.244-0.432,0.524-0.872,0.704-1.312c0.172-0.42,0.32-0.856,0.444-1.292l0.132-0.432c0
                                .124-0.372,0.532-0.74,0.616-1.164
                                c0.196-1.008,0.58-2.028,0.58-3.016v-56.176h14.92c2.14,0,4.752-1.14,4.752-3.28v-61.904
                                C387.364,133.208,384.756,133.644,382.616,133.644z"/>
                    </g>
                </g>
            </svg>
        ) : type==="fido-icon" ? (
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="-25 0 215 200" enableBackground="new -20 0 200 200" xmlSpace="preserve" width={ iconWidth }
                height={ iconHeight }
            >
                <image
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAH29
                    JREFUeAHtnQl0HMWZx6uqu0ca3bIlW9ZlGXMETEiCzeGLAAYDSXaXECAcL8dmQ8ixLyHHZjdkIc5LXo6X6/GSvJeEhU02EAjeDeR
                    yHBuweRgbDCRgMDdYkkfCwrKFhC1pZrqr9l+jwyN5ZtRVMyML85WfPN3Vdf66vqqvzmaMDBEgAkSACBABIkAEiAARIAJEgAgQASJ
                    ABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAg
                    QASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJ
                    EgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAA
                    RIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIFJ0AL3oMZhF4dXV1pYlEwqt
                    UisOo4Ugk2dvbO4xgkmZBkWsikD+BIykgvLGycrZbUTvfdcUpTMkTlGCNyFIVU6yUcyaUYpJxNoxEvqGU6oHIvBgo9UwQBB3d3d2
                    vwi0JTf5lgELIQWC6BcRpra6uEmVVpzNX/BOE4GwkYAFaitIcaRx/BCFRuEnCT69U6iUl1T1DfuL2np6e18Yd0QURKCABt4Bh5Qr
                    KbWtoaGaed7bDxYdRyhfDcSUEw0hAR91H4LdRcN6ohKopCfgG3OctII/9fLG3uDYywqO+JMnP2eznyhA9e2sQKLqAtNXU1PCqqtV
                    c8Y9CXVrOOK8ykooc7wENylNDULdyOMn5SN3FHFZ9ViPz1KlSqmOhz81iXEHugn3+vSteTATxJ6P9j3bzy1mQM6AZ9FCtYYKdBNK
                    m5jIGDRYqLZkJBMxBTvCe+6a2tra6pqLii5yLKxFRG1oOx7TVyBYDhEPKQH26vavzF3CjVS8jozYurg546fsY4x9Ea3QKlLdaFCt
                    vJBCe4Eztw7MnZSB/7aiBDfyCHQeNIjgCjrXAB7NXfgx5OdY0elegEpDqv/h5W14x9Xs0uy9aCzJnzpy55SWl30Wt9AEALEfLYaZ
                    PTU399cCPPwRn5sKx7owqybzPQ2g/zriYiwDcSXVuFHZVCLuVC75YsqqbUPhumvEtScWxyIe6RDBxNtJuZKRkgeTBengiAUkjVww
                    B4Y2NjS0lrvs9zvilEAuRFl9BLkc760/s7ul52TRAqCCujHjXQGC/gBaiMrv/lDyjwPFWiODX5azlB9Um75aZ3Ddp7/F5SyvXfbR
                    Qgx6T8h4wIQr+ribF8aa7LTiQ+XV1DRHHuw6F773FEA5NGDV/gD6D7pwPmRL3ly1dDpnV6cshHJNC5bwCLc2NfiKxbNITuj3KCRR
                    UQObOnVvuRKNXCs6uQiEuKxY7qD/7hK/uNw1fbVpUwYXzJcVUk6lfuJ8nHPEv6vfLwwuWRSTkZWYRKKiAlDjOu1DTfgxZrC98l+M
                    QOHRCn/WHBl46ZBP2qvpYzD+uROsB+TU18KPE6Ylyf4GpT3L/5iVQSAFxhON9BihOLJZqpTGj/xEorjZ39vcfMMUeBM7J6MTqzre
                    dEWq2o1zjESK7yMjXTCBQMAFpbmheAdXqwmIKRwoY5/tkwB7HtfFEnsNZnV3rMfKq0Ia4WABTBRXPogWaCa+b0mBKoFCjWGVeRHw
                    ckVebJmCyez1CBSHThX8Yl/pXF8axkRlcq+eF8rV6hXJqZrA8JWGlXY1GA9UO/7he6mIct1lKyfVMIVAQAVnQ1HQcCvVZGNa1rVl
                    1gfOhP+2GUDyGEaqdgqteyZwhTGw7istKTOY1QFYW4vnfpev22AAUindIroWOW+Ub+RvCbLtV3DbpJT9HnoBVQTks2Zyj48vmHGY
                    f0gKFvh+182+U9G/uHxzc1dfXp4dv9bKHsZpatGEWXtTWlgxGIj4WJw6GDHqSM/UUCnk3Am2d9CDULVqgLlexF0I5JkdHBYG8BaS
                    ZNUcVd04V6rDZ6FCAIBxxrBr5fjwIfoQl7NkKftCul7b39el9IfbmoS0xtXLFWojddWjsHKOAMDiA5nE969vSZeSPHL+pCeTdSed
                    1w7XonLehVjYOC8KhFwGuPTA8fFMO4SgYYL6GSeHHb1KcPQQh0XGHNQE6Hw8KHtw645ebhM0RuQtFwLhQHxZqNIoVsGw27G36H73
                    JZOIXe/fuNR6yPSwdIS34BY/udiT7FoZ7n4AXPQiQ22CgAMKx3WHyer5qa0dux/T0aCOQt4BAR5uF2th2dvlptB47ph1q3/5NWJv
                    3ZRT8dYg7yypd9IqYegMDB2sdKb/AVm19eNrTSREecQJ590HQca1wOYZhMYxlkhuoVyif8nl0yPPrV5hEOuqWX74zgUWLm9nSZU8
                    HDr8Ijd9H0Xk/AY9rU04w14LUPY3r2xye+AtbtX0/cjc2YDAaCv3MRAKtra213PfbxtLm41yDQQz8lHFe6ZWWViS6uzu7GRtMbcU
                    oK2tLMBbr6uraN+Z+8m/eAoLBpRJMXGAOzthAQHgvfOnRqmk3uj/C2Fa9E/FXaueiO1h3bUOCBdURjANjPKCfzZZ7+JLHk9OeMIo
                    wPwK+v8gR7ueY4G0IqBQHGzzDI+U/9CLOZegEvNdrbv4qi8X+WFtZqVdzX+MpeT3c/RJ/GU3eAiKEwmiQWesxlhII1tR9gDHHRfz
                    li3aiImGdRYyCgp4mAp3d3Y+gdfh4TXnVJ7DqoVkODX4n1tu7t62l9Qr0J3ysxTu5rbHxGYwpLUWSYlyJnKOZefdBEImWDosGZJq
                    IUTRvNQJJqO39yLSeS4sPcv4GfiEYXCrJnoPGVc8dtCZK9UJVeHYqOIUQkKnioOdEYGYQ4LxDL2PC3xVSyg2o1afcT5S3ijUzcn7
                    0pAKDA7o15mxtWquM+g52+lCFo3GgYKySnqyFpPKs823zdrnCaQKK+9gkmfKPMSHdn9wPivu5UEtYkNysHHGqErnVfBIQG/oF9IP
                    RNMHevahsKFFW6wq3zt/E5nAp6vgsrvfxOzgoL/DuUwcDyfrU/VgHpmQviwd9bPsjB0YGGgqYmOIH5R5TW1s+HI1WOY5TjcJXi9I
                    7GyfeVCBqrMgQLsNJHEoIHJoh9aqKPun7vTguqg+HBfZjtEnPl8XDJDORUBs9Lst7XutJuecquANCEpcJr5+Xyqfa9+yJYcTrVzw
                    +vD9XeJOlNt0tnz9v/tsch52Ic3CydWSg0vEzMWLwMQRktJIXicUIsVqLoax70ORlndWWAY91dHU8hoSNjyipjWeeyJh3EjphY7V
                    PerqLd83VDn7uQ88XIgL12GIvvt9tcx1vCRqN08HvJIyfLUC7UYMGBLsxFVYw6+6dHg5H3jkfwuUAbHahUOnFnA+zZGIbW70dasP
                    ISOCu/24rbWlt+TP07XON04iVBdKR53nnbNls7De3B9FWXz9HRSInQd7fjlUXJyKPC5DGFuQDeWVR/OlpAg/5w2P8j/KARar6fQ/
                    DDfoQqgu/u/DkeXSq/z4sk0+NnqxZ9EGeXC2Iyx11Pk71+Cwyk/UQACzbiCLh2LONrJkZbA0XF2EYbiW8If9ZjMPWodZ55pWRjlf
                    KkeTuagiV3lfuZfFVFGtw+BYCzltA1H1Lm+TrzgcjjrgQGYdgqHoUGg8M0yCOXeJ35DiiMjyfDWlpA60VUB8+oJzITnb/sjvU7/w
                    /8Eu2Zx3LLwqMqQN1mpubF3jMuRCrFs7Hauzj4aUBualAnh2d17Ecjgc1agN7fVhGCewrcF2HKqINv0vhYwgsXisV3rNtra0bfSn
                    XxWKxl+Aue/kZD9zuIpeA6DxUIuZG/Gopz2gOy2RGV4dbIkzttQqR5Nzhh8IzS1ZXcyxUTAWC9HBfiUrBVCP8opadPoMWz3bFwEj
                    a71oUCWqrL2Lc+RIs3oG86JZCaNDhcwG3emJWvxfFsAXAeaesFkvVhjO+x7ye3VDFjriprq6uramquhKnaP4zsnYcCrhWoSAjI/k
                    0yGwqL6P+tBZTgXdQjt/5CGxlRIgPLWht/UX/gQN37t+/fyDluMD/5RSQAsf1lg0OBYQPbTitWbol10JF+Fep0tVR0+KShhFtMO7
                    q8fdRJbx5fnzOf4ppbVPT0oJLfWgHjns6E/2LG5G0pchZKjWjcjHRseVdmrDoynUxKtCf4nDCS6tLyr+x69XdjyLYgq7MIAGxfFF
                    G3jYsPaHEcf8dfi6BuoFWKA+hyBgx96DqrhZuyUG0KjUFDz5jnBMs9VlozTi048MowNcif83IYaEzOSHC8RuOzW+KrYKyPQ9q108
                    Svv9/6J/oFRoFMSQgBcGYPRC1aenbgsD9NgrOhXCVtS+XPYSwT3gECszF6A8WTR/PkhKO0aCTXKU+jxNt9Cma1aO1fBbnhbdGfPp
                    TGYvQnH4NLdjC5qqq78QGBnKOToVNBQlIWFIW7tRfT18QBN4PMX2xCt6no79UArXDIqX2XubPnduGzsHXIRy6AsCawGlOwGjSdby
                    oGzAIwD/h1dSUQkq/1t/fP9Jxtc8eRgvIFIWAuvudNdIp+QZeGwrOkSk0RclYWqCNlY11osT9OfK3CuVT94eOqNFCggRUQ+X6zOy
                    qmmR5efkN+W7EO+KZOqJEixS52nR2KauqvALB66X001ulFylPk4NtrmqeVVLr3oAa+9yZIBzp6Uulh7OrI45zOez1cLG1IQGxRpf
                    Zox6xYjJ+Kma7PoIrPRF21Jk29KW8KucqNBpXoDBmm0QOlW+oRXrC+CA6Tnvx24O//fjDOQV596XqHSauPaax9TQkxLqSIhUr1Gs
                    M76hnwyllsx0HnyBQp+C95FkBpQpJHG8XhYa9AXUtCcHDhKHe2KXnj/RKgmlvobic17oIG4CuxoDAbNvoUf4lVKEY+mebUac8iaH
                    vbuQxiaVT5RCWBcjzMjxfAQG0OuNZtyKYVH2HdPhVs2bN2mE7T5JLQJBmuROLu/QpINk7mJy1oPgsRoKMRmhSNYRSTwPGs2ims09
                    vSbl9KJ4YX2YCcMoXSBfjd+EyV/ozlmr4Px4v5NSMDwtgOUuUH4+vBL0f+co6uRouGjWIArMOhfBuEbCdeN17mfAD7pWUsXiyVTr
                    O+XgvV0JYFkynkOArxBWOyy+BWL4T+bCtAJIovPdARn4wMDj4LAqvXlWrlxsBW6q29xoaGqowInU+zrO9EXbHo3zh1RmbUqxduaQ
                    yGv1fDGndb+wbHnIVsKB99+574Eb/ZTWYybxMcPETODASELjH++drd+3u+A6uxwUga0RpD9xVW+7Grf4zNsG9Z30Or6BoAoLZ40u
                    RsTbUrBYvFD5RUNBSPI3lSDe89NTejcd99qXUYrtJGd2F+wcwSnaLHggAyouRJ9S0NnFOCnmK2/JI5DgUuvcjKtP3rUegdf6GoFT
                    dsivW+RVcZzoPQLuJ79mzZy9+fzO/qWmXcNyfwvMpQKoFMjRXLVSIco7jutfA34P4MypncG9dA2i/ZCYRGPrzsvl4h5ei8FjUrKn
                    Co9Wp9Vzyj/Bztv0pi3CMx8ov2I7CM3gdE/IHKDevpeqc8adFucDXIxwtHMdahK4LPhYfqtvk8OC3cZ1JOA4LtqOr61F8/eqb4PL
                    CqIAd5iaXhRYStEurW1paluZyl+2ZxYvMFhTZeyX8vFTrYYMCJQeF4HG8zu+z/Q9ChQxn+DmP94ph/2Zs7f8dfBR0mcXkFMytmFu
                    PLav/AHvjBS0jhRsqtZS3dvT29kwOO8e9P3Bw4D5sB/wd2o5QQpUhrFqoSnpEyzjdJCAZaNpYqa1Lo1A1/xEv0fglpOITvB+91lt
                    Y7/5txofTXfRIV+CzWxCOXtlaNFNe461E/k6wiQAV+QEIyR+Y6z4J/9n7nBkC11tosa79TqhZz2d4PKVVqhURznnz5s1rnNLxJAc
                    kIJOAWN8O4bvtWKFr2w9Ay/OEI4b+qI8kMk2DViK89qEdTMq/mvo1cI8l6OJ9cG81rwDhiMlArGtvb7dq5Xbv3v0cxoM3GqR3glM
                    uZZMnvLdPsAxxQwISAlIoJ0qcCCWpLpTbwxzhswxS/lqrS4c9CmnBr308KZwAAypK77oruGmpq5uDvseSVG1sE7pS25Ms+ZyN11E
                    /PtSzP6IS0ocwGBvsPSrB4IIenMk1MHVYuCQghyExt1DYNovjtN6GwmmnXuH4GUdIq2HICalNihfRIX11gl2Bbnik7BgUTmMVRUe
                    P1gNDuOrBfJd9vH7gwHMIy0qNhD+BuZuFesuvCRISEBNa2dyuXlqCCbw2u9ErHah6hD24tStb8KHtE/EDULesW6Fc8TiCn4BBBKt
                    JO4T7RlzKx3OFH+YZFh++DhVW7/mwMfg8DG+UJSUjp2eGDIEEJCSonM4GA11w5qCqNOeJ2TJM+T7M14Q4SDtnIvCwdx86v9xKx58
                    iaGyRlQugXpnnDwGj5dmDGjz/CgBB4fCFJxGWUSf/UN5UDXOcmkP3U19ZZXjqYN9aLoaHIjiBRFRjhAeVrKHhLO6rwGp0ZnJM7bD
                    ASBjKY2FNW2p4VDRYVQA6KfhyGNQrq77D5JzgzJNdsItPtp/qPtV3Sn3vnldP5Tb9OQlIOg3L69IoVhEoZaV+QKKGcNyPnjWesWZ
                    g1ix96oj9x0tx0AIyZzw6lwkICuw+2BsLiA4Luy11H9FoCRAJiCaXrwkkClCO9Wq5wkcLwnxfnwE1Y000GvUgyHppiXkLqXOleJ/
                    +X1/ma5JJnIbIuZWAYCbWRUuSfV1hhsSRgGSAYmqV1AMk+Nioqb+Ue3yhFPq9Xqg3Y43v+w70fl37WhkUMqsCnSkyHISoR8Qs+yC
                    ZQsxtRwKSm0+op56L4/Msa0g9/IjZ5Rn/HmzzpwFigs9auCa/AHzhWFdEdrywPB3zIZiUD2+MJk3CB/tmc5nq2OpaPF0NABsMmoY
                    xQp8DK/RHPm1MCXOkVf/FJjIbP67rBlDgUbAscyjSjzmyScEhPzh6uhTigUP2DtmFvuIsEfj+lAdWp4dHAqJpKCzB5mo9fjHOrg3
                    XJ3O8FxehlnTHfT/hOhE7NQInU/pxXp+KNs//2uAfXxvFQXR5BjTJezweT5REyw8i3PQKZJKr7LdQiHT+tO6fd0fd8fDJv5DvJT1
                    FaKmxHJQNO0IYrTQgAdEUORvALOu3evyB1FKIuZGK42Tgng37UAIiHTGIUSwUIJuSySMo0yciFRvSX6jVdd1sAekotSrFOSLs7e1
                    NVLWU9yF3VkHjFMRmnLZYjom+vAUEyux8vBer9WBIfn9CqdFKMEeG0x7Z6XJpARwVl7pukcmhhgt2HNR/zEWBR687bN6iQw6+08L
                    6EEpoP4fCRg/f4Weou3Bebb7Gi0A4FLbiFtwkkLFuVAB2nWPOGnHCyNyCpIrrrcxWfRBkgeOryvi8noEhATGAldWp2IMWhO2xK0A
                    QLaWWsfqz52UNP+wDF7PEOOA6rHMDdxhJkC9iT4ZRBzct/FklnJ+cdm91CT0Nh1nz01KTfoYhoPXTc6i7oz3RAROvJCAmtLK5fc9
                    LWnV4BX+Ww7W8KZDJC9Fm2ehoh1LlcNSuSuvoBTeBlM+jBjYqXGOJQIEWTLjvxr3RHMSY/7Hfssb5x6ECOH7s3uQXzYcvBXu2nbU
                    b9RVJQEwoZ3GrdXOccLETP0YjJOPB6fNlmfjQ8L0rWsbtDC/UujOq0IpdjEJcsCHVCUk46LWjBn5hgp3BDXaHL21taDjOwMtkpy4
                    +t/keWNqqkANYpvI3+IeshDckIOFZ5XTpiuBFCEp3Tkc5HkJ1eEcEhyHonYk5nGV8pJfbs4i3DKNFZ2V0UADL9tfb9cd7NmMwyK4
                    fwvgC4UbOQ1KsBFh/awRCdlGqNbLJj1LPDQwMGC+VJwGxgZ3Jz75te1A1bc30KJwdOtecXxMMOquMO+zLzzwh4OLTWM5t3QKFSKP
                    EHMLv4c5oFCgt3Bp9BM/8efOOTbMLddmGYV2P88vQOlr1YyDU+GyKusfmrF4SkFCvaGpHeh+54BJHEVmqWZAONP4nooZcw+rOPHP
                    Tmql3vumWQ923eGHgeF9F67UaqSzqsH1Hd/fTiOPh1JzC1EgmuEjV/JyfJlz36raampoJD3PfCNnUtBwz4B+EM2P1ajStnSqRuCd
                    3NJmfFhVo5iiPYtv+g1tVZcVjKOorUNuZd7hT+y3Uu6TyfnnWipU3J9arv3o+62RdQwf0llpNLqVOLT0lytyKhkCKMyBUn0JEZ+C
                    Rlepi+DYSGMm6DYdTnAl/xoMBEBLMK4lreEXVgaby8pvxUU69MjeXcdqamk7DuVj/gZW4JwGpOVOchQWt8PaOnp72XBFle0YCko2
                    MhT1//xOvBxtX3gGvizEeZbl8JLUp6VjMw6wRLr9YeuwxtjD6sn/vcuwUFJAJrYqxFmxiXYzvRy5BXHVWwmiRP+1FBMFDyuH6ELb
                    3obyazt3oAl6PdH/RU85cFP7fYuJuR4atuBxfq6qPRiKr8Bnna9A/Ww5/xmU11Xoo9lwyAaXVsHMO9yljHOmYR/rNTEAkDqxTJeV
                    XoT+Cl2pV440GzKPolOqaegk2Y+kD5fTwJOYBMUqlGKYV9Fdw9bBwPnGMRmXw8wpK84Km1tug3C1GHpsgJEa1+qj7OsyufxKpX12
                    q1DaczrldBqlBjiGEiaONnVOQJM1vCfKqP3Bq2xXox0LJ22M9MevRNxIQg8IRyulc0a36cG4wZ7pDaaJrZwg+Vfi06qT/KiY6MCq
                    XE73md+cnWLCphLkbUNivRlB2yz6Ugj+u+1zHQ8avxmoCvdhTL1+A7HB8sCp17rKWJ6uMwj+WpakH/JED9YzmPtLx2Epmehh0nUa
                    AL8HxOzL+J7ygjXjfybRH03gZfpmMTaJ030FK/8fQ7R9NqTEWgaRKvi78EAZIQCkusW2ZV+BXq6b4nBwUMRiLoCFlMDiqNAiCH+M
                    z0S/bhDHmhwRkjEQhf/u3d0I5vxUComfXp9mklqXjaM/iCkl7V9cOzK5/G/G8ZCskxQCj0wKpepXJ4IedXV26rwRZsTckIPbssvp
                    MHR3qxDajjP4I78d23iBr+NkfKIkqeRtUi7VwY7tuKnvwE5/IjlhsA3T8LyOPO1EuLScQJwaaz92ooHbIQH0lGYvdjrDyXj1MApL
                    PG8nhl5/TPrxv/+u3Q0i+iQJktYYpR/AZHqVajF3ovH/FYUqfHWWtd2cIPJuVj09krIMkXg8HTxxJIRmN+wUlgxt2dXXeGcNhGNk
                    SbWJPAmJCy9DtnMt3HhBbtqAVYf8JIcHJJboQF1r1QXi69lZsN7ql/8bPffAh9HOhYnGjjUGGWUt3nujs7PwzCuanYPkA/grx+bT
                    08HNej7YaCcyTPBgE/qd2xWJ3wkPeLcdYpCQgYySK9MvXMCn8/lux2PprKMR6JrrQqo+PruxTGLRZ43ixv6SyoXycIjIdrdY4NIm
                    CuT0hg2shqz+DbSf+MEFX6MpgPD7UCamwk7piwH7nW4aC5CfxLZHNcFFQviQgh5gX7YpjE5bo838peHAdanb9STvMIOdbeFL+0b9
                    Razn3v+i43XdotS6VCcEH0FWdapa64PnFiNGLw75/fSCDT0up/gcRdCCbBS2wKcEYCfMVLKH+daCCTx4cHvwypmeeQ3x5dcgzAaF
                    5kExUimDHL982pNawzeLdZ7wQSG89xjCvwsvWE4HVEBqD4cyUYLwBlWI7Dsz+rSOxVfe8bTGEcKiTnHQGmatVOl1gTMLOP+Ojs+L
                    r6+vr/1YWidyN7ZKrkbkLkZL5GLUdndw0j2e0xdD9qpcDpu7FafjrWTz+RMfevVAnCy8YYynMW0CCRGIn97zvYl91+VigIX9RtUi
                    ts1puMgoZyyRnQSAfxqTUjROslTzAXP+1cTsn6IVi9F3MYEfH7XCBT4FtSb83vdbqFmOPxPAd9TuYE9zLh+Vp2M9+Md7vWXjFLSj
                    LugBlMXpOhXdhAvIhodTvGQ+2OtWJ1/S8y2EeEgf3Mbf0Z5h1fwA1eSjhE1zJZCKR15xBWjrk3r179+D+LxCUByqV+qlfWnY6Tkd
                    ahTyeBnu96rhyqnmOUaFAa8jaQf8xSPu9Q4nEdinlawhfH7Z3qFLATTFMKHjFiJjCHCGAl8/ZH06e45dWLhSOeDs62MfgCb7FoWe
                    o1TAKeS9TwS7JxFNuydDL7P7He0YE7U1JkOPwhprqaLRRCW8hvpZ7DA5haEYhrMVuv9QBGUJKfXIiJiLxWWgmX2BB0H4wmYzh4Ii
                    CnO37pqRGiSYCRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJ
                    EgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAA
                    RIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkA
                    EiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBA
                    BIkAEiAARIAJEgAgQASJABN7CBP4fG7XxSSjnPYwAAAAASUVORK5CYII="
                    className="iconAuthenticator"
                />
            </svg>
        ): type==="identifier-first-icon" ? (
            <svg className="iconAuthenticator" height={ iconHeight } width={ iconWidth } viewBox="0 0 128 128">
                <circle cx="44.793" cy="44.793" fill="#f95050" r="38.487"/>
                <circle cx="44.793" cy="44.793" fill="#e2e8ed" r="28.745"/>
                <rect fill="#f95050" height="49.102" rx="5.532" transform="rotate(-45 100.394 100.43)" width="17.591"
                    x="91.61" y="75.855"/>
                <g fill="#6d7a84">
                    <path d="M86.89 79.65l-.01.01a5.469 5.469 0 00-1.53 1.08l-4.61 4.61a5.469 5.469 0 00-1.08
                    1.53l-.01.01-11.5-11.5a38.779 38.779 0 007.24-7.24zM65.195 44.713a1.749 1.749 0 01-1.741-1.595
                    18.785 18.785 0 00-13.729-16.4 1.75 1.75 0 11.919-3.377 22.3 22.3 0 0116.3 19.471 1.751 1.751 0
                    01-1.589 1.9l-.16.001zM37.17 27.525a1.75 1.75 0 01-.652-3.374 22.1 22.1 0 016.132-1.49 1.75 1.75 0
                    01.334 3.485 18.572 18.572 0 00-5.162 1.254 1.745 1.745 0 01-.652.125z"/>
                </g>
            </svg>
        ): type==="X509Certificate-icon" ? (
            <svg className="iconAuthenticator" viewBox="0 0 508 508" width={ iconWidth } height={ iconHeight }>
                <circle cx="253.55" cy="201.7" r="201.7" fill="#ffd15c"/>
                <g fill="#40596b">
                    <path d="M90.15 319.7L20.75 440l81-4.3 36.8 72.3 64.2-111.3c-46-11.9-85.5-39.6-112.6-77zM417.35
                    319.1c-26.9 37.5-66.4 65.3-112.3 77.4l64.4 111.5 36.8-72.3 81 4.3-69.9-120.9z"/>
                </g>
                <circle cx="253.55" cy="201.7" r="146.2" fill="#f8b64c"/>
                <path d="M353.75 185.9c4.5-4.4 2-12.1-4.2-13l-57.7-8.4c-2.5-.4-4.6-1.9-5.7-4.2l-25.8-52.3c-2.8-5.7-10.9
                -5.7-13.7 0l-25.7 52.3c-1.1 2.2-3.3 3.8-5.7 4.2l-57.7 8.4c-6.2.9-8.7 8.6-4.2 13l41.7 40.7c1.8 1.8 2.6
                4.3 2.2 6.7l-9.8 57.4c-1.1 6.2 5.5 11 11.1 8l51.6-27.1c2.2-1.2 4.9-1.2 7.1 0l51.6 27.1c5.6 2.9 12.1-1.8
                11.1-8l-9.9-57.4c-.4-2.5.4-5 2.2-6.7l41.5-40.7z" fill="#fff"/>
            </svg>
        ): type==="basic-icon" ? (
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAAD2CAIAAABqcO2fAAAAAXNSR0IArs4c6QAAAa1pVFh0WE1MO
                mNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wI
                j4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgP
                HJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50c
                y8xLjEvIj4KICAgICAgICAgPGRjOmNyZWF0b3I+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpPm1hZ
                2UgMTlNPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICA8L3JkZjpEZXNjc
                mlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KcGYwgwAAKPNJREFUeAHtfQl4HNWVblX1JrX23dZiSd7wgmUMNthgMDEmG
                BuzDYlDyAwkJryZl8ySeS/MQN68TGYmCclkhhdgkhBCQuY9XhKbhJgd29hgwGaxsWVjyViStdoWkqxd3Wp1LfNXt9RqtVp1q7urF3Wf+
                +mzq6tu3eW/f58+99x7z+EVReFinvrHXKcudttM5l9/cvLnp45ZBFPMm0AVRh0BWVEK0+0/2fDZfFt6psVaU1AU9SqDVcDHjOKjkljb0
                /XH5obWof724aEjXRd4nnfLsijLwRpG95IEgTSTmeOUHFvahtJ5Zp7fVrVwTUnpguzcmHUv6hRvGRo42tW5q+n0Bcfw4c5zbtHNyQrH8
                5wgqJ3EBaXkRsCnJkiS2lGTqTwr+/LCkhUFxVsqF6wpnmvxMiFqIESL4pKiHOrs2N/R+qv6ExDbnCqqPbQmTkdtLGdNwYrMSTIn8BazZ
                WN51Y4lKyDXq7JyotR+4ykODWxvR8vjJ47sbW8ec7snBXaUekDFzl4EIOAh+3i+Mjv3y0tr7luyojIKRDeS4pDc+zpanjhx5PW2Zrc4x
                mESSTJ79vIvli0H0RW5MiffQ/SayqxsAys3huKYMr4Bcp88SuQ2cGxSrigP0efl5H9laQ24Pi/TGKIbQPG24cFvvPvGS2fPjGEqSZI75
                YhpdIc9RK/IzvvOVdfds3iZNWKDckQUH5OlXY2nHzr8ZjsmlLxAaonRo53C5cmyxWTaWrXo0fU3RDgTDZ/iWL756oFXdp/9xK3Ojj0Ww
                BQeEeq68QhgMqrIpZnZ/75+0/aFS8MuP0yKv95+9pGjkN4tKrlpThk2/PQiEwFZyrKl/8Wlqx66fF2uLY2ZfXqGcCi+u7nh3n0vDjgdn
                BkLV5EmrP3YeB4r+GMcJ2IdzLdSEGnB9H4cEMBoCjxvwQoPx7kwoIaMJgoR3bctXv7MxltybbZQexWygoEV+PvAb9doJPy28jz+Mngh1
                zM9teAjx2N1l5Y6Qx2/BMwPSmFAberkjLPyQoFgwsim8+rPfZitBS8s1t0N9fftf6kPxAsxhSDFh91j/+v9g8+cPjEwOhqG8u2V1uinm
                efcqrTmXIqMm7RDJcQhm03ZMb4gusLzdp7HTzR4j0F3K5zEhbX5T5auLCn7hyvX31K5UD8KeikOft9/4NXfnT7BYVdNiNLWpP5yqT9eY
                PSYouDHK6z+6e8U5UxQBEB3Gy9AxmGVEBtWXGEQQRJz0+z/eeOt2M6ls5OoVFf6fdMnvzvzMWcGV0P4uYFCBm3Ezgvg9LAij8j4BofRL
                V0tpEyJjwB+sZ2KPCTLmHdB8GUJJkzDQmu2ydw/6vj2B2/3u6Dq60q6KI755d++s8+jXOkqFJnQ8DT8PAkmN6cMyRJ+nkhy68UuBfLhl
                9why/jDHo9MKOshqekm87GuC9DLdbKcraiA35hf9kPN1238xlQyjePHOAW/RMTsFGBsRF0Ey6GpSzw3KmNhU3cSxdsWLX1m41amJZFB8
                dfbm7/w2vP6+Q3hDWULaveIgh2TRG/dA5byGfGbD1nu4hSosnrBEMU7Fi97dtOt6ZrGay1FBcz+/tHD/bB/65Pf4De0K/w7pKj7DPQ2l
                PIRAhw3qigQi5i5QQXQi4fJ9MemT55rOq2df0aK48gZTChvtTfrtH9j3mAThBFFxnxCu0p6SggERQDr9QOyBNFoFwRdNOd5ZP76W6+90
                toUtEDvzRkpvrOxfnfzGZ3yO53jM6B8y2ggCW8NtOkRAwGwR7W5KVyeulSkI/H8oGv0kY/e+9Q5MlPu4OV0DA/93eEDIg7b6fjVwMwyn
                ef7VeWEEiFgAAJQBEZxopnXJ8tN5rfbzz524uhMFQehOFSUv35n77mhAT0i3O6ZDhO/Z8KX7oeHgENRwPJ8nbLcZH689sNX24KrK0Eov
                v9c68stjXqs4NC/MREmfoc3ivSWNgJORXFySrYevZznh1zOH9cewQGG6WUGUhxH1B4/cdTlHtOjomDfFPF7OqZ0xygEIMsdiroOyi5QM
                B3oaNmL3d3TUiDF3zjXuq/trHo+TTPhNXy9MDMg/VsTJ3oYKQJjioxdqJjsMQrieZyrhHSeLsinUNwjwo/oEeEWXuU32U8YuNNjIxAYV
                WQTlHImy1VB3jxdkE+huCrCYQg3MUS4uttb3U9D9kEjBpDKYCEATQFr+1gVYmT0CvKTR91TNfLJ12BI8WjhHuc+MxeGHwzs+sUSz8xZ6
                AkhYDACIqfgD7YNRrkQ5O3N2HXin22S4u9/en5v+1nONHnHP5/vGiIce76J4D5A6CI2CLhkGedpGOz0CPKn6mr9mzT5CmyFqn82zW2N0
                GBwVAlbCP2LoGtCIAYIQKrCIpjOXPTkhePdn8JZrK9J4xRvGRz4BbjP+iHALkLa+e3Dji5ijAC4B74yZoqC0DbQ+/NTx31tG6f40e7Od
                tZyJqa0sFBCS/G9TBeEQIwRwAmENJa2Ak3kwLlWh4jDomoap/hO7EicOg/1Pvb/F2faiN/+gNB17BFQGcj01GAyHenuPNbd6W2eSvERt
                7tL3ajFmK7ioAPs8LHvFdVICPgjIGExiKVRi7LUMTLkfUul+Km+nncvdGjbUrAdReFpmukPNV3HBwEIcrauIkk7G8ePSqgU/wP8EsKpr
                KYUh45PWkp8hpRqnYoAFAmcbmb4YRMERN2p77uIV1WKtw0NqvF3NJOZF4xx3qVZCz0kBPQgAJbDw5ZmTh6HJIawmxAU7xl1nhse0jYXQ
                vVRz2JoFkkPtRAAeN4/j/Ps8WtCVAsyrWfYtcKgOL4AilLf14NSBPz3ftd57dMPIDfxWwvygGfgLg5MQffDnyTB2Gozm9PMZgTmK8/OK
                cvMwQU+WtVoffjR9WSDhYtOTQXAqPmRSUhZFF/EsQfIe8T8ZO7hok0pmmhPPARHYXjl+Tx75oKcvEvzC5fnFy7MyavIzM6yWLGkgFC6d
                gvsUjBhjY1JEo66djsdmPif7rt4oqerrq+nabBfVnfqC6rEYfwQT1Sakv+D34ia5t1LogGAJ+QnZ37m9ElmcFfVZyx+aTUKS/FHElYZ+
                KqcvBsqqjfPq76qpLQ8I0vDeps/4Sd7aV6BDzmH6K7rvXjwfCtkz7sIUDrmUrd8spc5fAWk1gWgYVBSECA1Lo46eeE/HmH6PPEoNqmFo
                N7eiqJgNt80r/q+JTWfrahmembSWSxWLp795OOdDfXnEWEmdD+pOmuJfTYYLWC3Y4pUnQ1TBa/GfEZRBEE4sX2HGZ6ERlSL4YwJOxixr
                jlETpIDEIK2LQjbFlzyP1etva60IuBhhB9XF83B3zdXrX3i5JGfnfyoz6BoBRG2KvLX1TM0BikDMAXiiH6f6uB2xgTlEEo4w7yIt1EWO
                9OMtSTpA9G9omguQordMX9x9HpYmpH5vbXX4/fhW++99VxDHcIvzHa9xTCCexZxLPq+LapdXDtBwo9qmyC130+yp+qcUv5vNWsO3vmlq
                PLbB9vi3Pxdm+/46cYt2Rabaqih5EEA9B7RR0s2xTGTCsfVeVKOhCxB2/7Vpm0/u36zUWq3Tpz+fPmq12+7e1lBETexgU7ni8maDas/s
                I7r6R2b4qr/LQ2lXk8lyZFHkkrsmS/c8jmEao9Lh9aWlILla0vnqaZ0Sh67oR4Y2BRHKfp0Hj3Vzdo8kjQnI+uFWz5/7VyDZ5YhIQJb5
                O6td60rqyRZrp+Wuige0jAkYWZZLrJn/GHrXVcWz41774rT7bs237m8qIRTjfGU2AgQxVkYKQoiVf/6xlvXlZSysmo9xy+hZ0UTi5oSL
                rSysp6VZWQ++9nbijMyac2fBZX6nOyBLJRk6ZH1m26eN5+VL/A5VphP96sr88d7Pm0a6GsfGe4bdfqW5UFTLOzXFBRfVli8oqAYsjnwf
                c3PKwuKn9iw+e7XnlctzbTUr4kVUVwTHtF95+JL/6ZmtWamwIftw4O7Gut/13i6tudT1bWYOlmHSdvzN5H3zMUuz32sO5jmZmRurVr0p
                5dcGtIS0ucWLDlYs/qJY++pYfQozYwAUXxmbGS5JCvnR1dvZG5T8xWBPcqPHv/gl3W13ThV5d1N5d1O6MsxeTGpIl5wDP/i5JFf1tciY
                urDq6/GFpfJXJpX/3Tlta+3nW3AllGWD0rNYpL84STQSd7RMLony99f95nq7Bydr77U2nTNc7/+wQdvd0MhgWRVN1HpW5zAl8FsgY33h
                ab6jc8/+50P35nuezJoG/JsaY+s+0zQR3TThwBR3AfF1AtJXFde+cVFy6beDf4J69LfO3r4jpd3QedGtHa9zJ5emNnikMR/PLT/z/a9N
                Ky6bWKnO6oX3TL/ErIhaiBFFA8OjkkwfWfNtTaWB1O8jHWxrx/c+61396kH/yJXGCD4LVYEYr9n7wvwjBC8cX53sdvuW1dcbSF13A+Tg
                EuieAAgno+SeH1F9abyymDPAu999+jhnxx/P9TQ6YGlBHw2W15oOPUXB1/Xs66MVc8t1YtIkAdA6PtIFPdB4XfBC3+7co3GmQZfVgR9/
                PZ7b6pbug1PFuv/PXX88Y8/0lPwN1auEXT84OgpKvnyEMWnjakkrSias7G8atqDwButQ4N/8/Y+dSuQzmllYAGszybhH9578+PeblY+7
                uo5ZVfMKaN9iEGBIopPg0WR719ak6ZDKP7dewfOYX7J9JU6rQa9N3hh0Ol4+L23sIqk/YpFEO7BzJgOOAeDiSg+FRVFyUzP2Fa1aOrdI
                J8Onm/fdaaO8xw3DvLYqFtmy0tnz+ztaGGWd3v1olws6bO+DMxyki8DUXzqmMrSNXPLq3TYwv+99kM5sq0mUyue8RNC9j524ghz3lmZl
                XM9diDGpEkztjUhHxDFpw6LokAcMhdsjnR1vtLSwJmjMMuc2hz1k9m8p+3sMSz4s9KWyvm08Xk6SERxP0wUxZ5m36Rjovlk3TG4QvF7M
                7qX4tjYf54+yazjutJ59rR00lUCgCKK+wEiy3DuU52d63cryGW/y/VqK4IiMaIVBHkz7FsmE5yrMFeCFuXkYesiTToDYCaK+wEiy+vml
                DFj9b55vu3cYH8UDSl+LRq/FISz/b2qXz7NhO1ilxfN4fSdaNQsKakeEsX9hlMQNpSyz6291NoYBxpJ0v6OVr+2Br+EgTxaRvrgFc6Cu
                0TxiUGCIm5LW1lYMvE5+P+jkngI4QaiZwsPXi22lQvvdnYwzOMch/ZbsA+Mkh8CRPEJMBSlPDMLh3EmPgf//3Rfb2N/Xxxc9sB32cVuT
                7ya4A3z3q3IzCpOzyB13B8jovgEGrIML7JeX6YTt4L8j+V0t+o8lmlXDPJuRLd4vtfp8IY90CgHLnArs7LJqOIPEVF8Ag1FUc0RrHTSd
                yCNldP455IIN83axWLGCb/PcZgqaDcrrk+J4hPw8zyk+MSHGf+vBcXhWzAuSeHqWBRHu5bAoTNTZ49L++NUKVF8AniBV3/iNRPmmi2Dg
                3FQxL2t4vlWv7jXM7V0rj0jDnrUTK1JgPtEcc8gIOSA2VKCiZpmgj92HCWOG4EEvnlwQPUqoZmwWSUOBh/NJsX3IVF8HP8Mi7WI5cwE6
                5quePqg4uGJZQDRIzSTHYfcYj8b1mxSfB8Sxb34K4jCg2gC2oNxfmTIha0p8SIQz190jTIpDqMKggqRUcU3lERxDxSyMteeCXL4cAl6M
                RJvx8eyIrtEhrO4/LT0TCujI0F7l6w3ieLekVXsZjPTJVCfazSe0lGNkqM4WZ6XrYLJrC6+MlT2ZCX09H4RxccxMemIjdYGgwZrtjcdY
                uPu8JDisOpoF4hvqp6+aBeSTE+J4uOjadWx7cQd78ORiigiVKc2//BbpNrtSYhPwEQU9yChKMUwJ7NSnJZ8pjSLaTSckps+eOKxEQwqA
                kxFHHlIMs5GrpAUHx81piMH5EsEKT4bSRbfNhPFPfjzfJdjhDkSzGPwzBIizWAyFeJ0pmaCJqOGt6Sv4wRKjMWOiWxJ+r/PPKIoLh3uG
                VR7s8qfuCksCAaMVVjtwXCrgVa8Md/92hmv5SrttsbkaUpSHGzGAUdesFlt8D2ryjtJStfh3HV+dl5OenpUPBjqGWxFsZnNWaxlHfDbb
                jHn2NK8q7D4RjpEUfQGq4DjXB2GIz1tmUV5+IwnfzTCWk2YRf1hNFUSecF8WVHJlsoFOIk8Pzs322pT98YqnNVkKmDpALBJ942OxlEHQ
                CwVbKTRPkAtKXK306nqKp4EvaXH6TzT37v/XOuetqZm9cgSnxJE98Qhq92+I2WkOMS2otxcvfjBVWvh7wpOABlfhmCPcSYIcXmCPUmge
                1j3mTPVAIponQia9fmFS7CNbGdj/fePHmrp742Rn6MEACY1KC5JBXb7D66+4StLa1J5GpZrsz2w/LJbqxf99dt7d575OG4aV2x5nwIUl
                6TK7NxdN9+5JgECw8Z2cIPXBhn/25tur8jK/rcjh1JBlofzex0cucS8K8tlWdm7b/kc8dt/fPBT9q9Xb/wqgi2mwDQsuSmuQOd+auNWB
                GL1H2C6BgJg+b9ds3HN3Iqkd2ab1BQXxfsvvTyMwMcp8h3A/vjvrbteCGvmPYsgSl6KK0pBRvZDl6+dRYMR+6beUFa5saKaY23QjX3DD
                KwxeSkuibfPX4w48waClXxFYeMtrEzJ1y//HiUvxQXT9oVL/btK10ERuL5sXp49mSOoJCnFFSXfnlFTUBR0UOmmPwJwrbEU3oXifdrDv
                0nGXicrxWU4sGQuyBsL5SwtDRvlVXUueb2SJyvFuWyLzXNKd5YSL6bNLk/qGUuSUpxO6ITyHdETZDSU8hIrb9JSPLFgTuzW+O0rT+yGh
                tU6onhYsNFLswcBovjsGStqaVgIEMXDgo1emj0IEMVnz1hRS8NCgCgeFmz00uxBgCg+e8aKWhoWAkTxsGCjl2YPAilwsC0BBgNuHpoH+
                9uHB+G+GQvmhbZ0xPicn5MX3inpBOjQbGoCUTy6o4VImU/XHX+xpbF1aNAljnncDMFVBJ9usSzOLdi+cMkXF1/KDKMV3SYme+lE8WiNM
                CKWfPfIoSc//mgQ7pJNJo/3EpOvMqco1nZfqO0892jthw9evvavatbo8f7se50u9CNAFNePVQg5mwb6797zxw/Pt3FwsmWxBHkT/np4+
                KYydTtHvnlwz4GO1l/esJUZMi5IOXSLhQBNN1kIhf68ZWhg28s7P7zQzsH/INOZIKJTmC2vNJ2+67Xnh+CWjZLRCBDFDUYU3vPu2ftCf
                c+nqvzWnyzWd9qa//Ltvcm9I0o/HgbmJIobCKZa1HePHjrU3hIav71NsFh+fer4bxvqDG5QyhdHFDeSAgjg/dOTH0XiYuqfj7wLC6ORb
                Ur5sojiRlLg/zfU9Y9EEEHcZKrv6drf0WJkm1K+LKK4YRSA7/qdjac5U2SQKvLvz35iWJuoIApnZSAHOh0jZwf74Zk/ojIF0/ufntcTs
                iKiWlLp5cjGI5WQYvYV6/NDCK/MtBJqF4SoQ07H4JhLOxc91Y8AUVw/VoycI6JoSLwrxHUgKc7AOpTHRPFQ0NLMKxgUIQU+YwU1OAslY
                xAgihuDI0rJUWNjTe5CCbvcdLM5I6Rlo7BrSo0XieKGjXNlZnYu4qRFGLJQlhAXDkG2DGtWyhdEFDeMAvAvt7KwhJOliEqUlQ2lFaSmR
                ITh1JeJ4lPxiOATzjr86eLlEUlxRNa02e5etCyCVtCrgQgQxQMRieTz7dWLq/MLwxfkkrilauEylEDJOASI4sZhyXGI+vcvV22YiOoaY
                smynJOe8c9XXkdaSojAMbITxRkAhfr4i4uW3b/iCi7Und+YpCrKD6/ZuJxEeKiIs/ITxVkIhf78sfWb7rjk0hBYDn7L0kNr1j+w7LLQa
                6M3GAgQxRkAhfEYhu3/t2nb/SvXqPH+8KedFAWnNn+w/sbvrd2gnZGehocAUTw83Bhv2c2Wp66/edeWu1YWlWjZWBQFkQFf2faFB1ddx
                SiRHoeLAFE8XOR0vHfXgku+vvJKbUGOsJfL8gt0FEZZwkSAKB4mcDpfO9N/UUuK8/zAqLOhv09naZQtDASI4mGAFsIrZ/p7Oe09VbKME
                /shlEhZQ0SAKB4iYKFklxXlvGPEE29+5tcURf0aUIoaAkTxqEHLcYPusQ5IaO0g8zz/cW9PFBuR8kUTxaNIgS7HyMAYy/uPwJ8d7MO5z
                yi2I7WLJopHcfzbhgcdOKKmfdSNF86NDF8cdUaxHaldNFE8iuPfMNDHDrzN832jzvbhoSi2I7WLJopHcfw7QFwdJyQUSYJr5ii2I7WLJ
                opHcfwbIcW1tRRv5bKsyntK0UGAKB4dXDkOFkPV4K2H4jx38mJXtNqR8uUSxaNFAXhSbof6oYviAhQVfCWi1ZTULpcoHq3xPz8y3OtyM
                ozi3sp5Hm6GhkV3tJqS2uUSxaM1/mpwH7c+1gpCl3Pk/AgZVaIyFkTxqMCKQhsGerX3GPpX7BLd54aH/e/QtVEIEMWNQjKwHCzohOAeS
                5JOY08ipSggQBSPAqieIhshxUNJp2inSihw6c9LEdv0YxVCTkmRm+CIGWJcp51E4WhLbQj4hpKVKB4KWrrzDrvdY6KUZ8/QZTREsbLcO
                +p0yzLFU9aNsd6MRHG9SIWUD3439976BVm/RxUF0SUEkx4jekjtoMwcRxSPCgvMglCakRmVoqnQEBGg6WaIgFH22YYAUXy2jRi1N0QEi
                OIhAkbZZxsCRPHZNmLU3hARIIqHCBhln20IEMVn24hRe0NEIGkpTl669TMhuc//Jy3Fh8UxUZH1D3Mq51TPmCZvSlKKCwLOtPeNjibvw
                BnWM/juVykeYVxzw5pjfEFJSnGev+gYob17evjS7XTW9fXoOp2kp7jEy5OkFOc4RRKfbz6TeIAnXIsOd5676MDW9qSdvCQtxTmT+bcNd
                RcweJQ0EXiy7rjeHb+a5STsw+SlOM93DQ388Nj7CQt9IjTszfNte1oaIQ4SoTFRakPyUhyAmcw/qT2yr6M1StjN9mIdovvh996S5CS3O
                yU1xXl+TJZ2vPEieTcO+m188NCBwx0tnMkU9GnS3ExqimOUBKFtsP+2l3cd6e5MmjGLvCNwS/T3h9/8j9oPObMl8tISvIRkpzjgN5nP9
                vfetPs3P/34I0nnScoEH7TImocVg7v37P7BkXeS2FDoj1AyzzMm+2kywTHVfz/w6s7G+m+svHJTRRWCBk4+TZmrCyPDv2us/+Gx9y4MD
                nDm1Bj6FDrYhtU7E/dme/ObHa3LCoo2llVeNaesOiunKN2OQ2jJ6k0Qtu5RSexyOhBO6J3z7XvbmzvhZhGBWVKG3xBfqfJVHpfUHutY3
                cXuuu7OJ7DYIZjsFquQvKse6DVO9bvcYx5P/jgCbU4pcnsHPcUo7u00xNhEiCkHhj/pk19/k76v0zuYkhT3hyGpRbh/R1P2OgUsKik7t
                tRxDwJEcSJCkiNAFE/yAabuEcWJA0mOAFE8yQeYukcUJw4kOQJE8SQfYOoeUZw4kOQIEMWTfICpe0Rx4kCSI0AUT/IBpu4l9h6V2J9gC
                GnLSuybB8KG0EJ4AYo5w0NoXozalpAUh6M2SeLNFrvVyocQuzJSyMAIpyjK2HsomHxbEYMXKknw1GK12KyxPfiIQHDOMc/OWNSrQSacO
                JZlk8Wabonp+OK8nEMc40RR3bWr0bzgmEbrbkwh0NUJSZyTmfPA8sturpw/154Vy83ciqJ0OkZwbuDndcfaBvrUcQqSFE6S15VWfHX5Z
                WuK5+ZY04JkidqtMUlsGOiDf5jfnDk1hq/ZxJbgKRWK4tKi4geWrbqudF5ReroaGDFWCd/AtqHB3c1nnq6rHRh1JsjBZz7jyR+NiPpCt
                ccAKUlcX1b5zKZtC7JzY1DbTFV0DA/u2P+K6mBk+ukYWX549TX/e816W2zld0BTX2s7e+++F7ocjkCWS+KXlq587Nob82wx/e4FNO9Yz
                6f37Nldf7E7nixXFIvJVLt9RyJNN2V5QV7hzs13xJffGK3yzOzf3HT7iuI5gUHsRfGBFZd/d+2G+PIbLdw8b/6vbtgWqCZJ4g2VC37xm
                S3x5Teat6qwZNfmOwsQdjQu05WpX7hEorgiP3zF1XPtCRHLL9+W9u0rr52iUCpKUWbWP65ePxXAuH3aUrng9gVLOEn0tcBqtvzLVfH/+
                nnbszy/8Gs1q/2b52tnjC8ShuKKkm/Pgv4d4/5rVHdDeWVZVg7nc1IuSdeXV85NpGianwfFfaq2LC0vKMb0QKNHMX50Z/Viq9WGeXmM6
                w2oLnEoLiMWa3GaPaB9cfyYa00rz8zi5IkRUpRleYVxbM/0qhfm5Am+2YIs42NCxV8GermYEkzgN739sbmTMBRHGHjFJzBj03dGLRgaN
                Mk/k5hg7v9Uz0eTLeQTzRFSggwom+KwOcXC7MQLsGOcG0mgiBw9TkfL0MCkyULgay92+TM+7teIESD7dHFBqO+76FIN9omSzg729zudU
                +YzhjZNJy3ZFIdl2hwDMz7PDzodv2/6xFAQIipsd0tDtxohZAJJwXTwXGtDf29EhRr68rMNH0+WJwhnersPnGubvBPvq2cb6kSsBEUnY
                VQs+oK3sCkOz2hpvmGOTnPHSzUJP/zocIJEL4EE+qcP3pnkN5qIL+Go85uHDySIuvJ0fe2elib/9Sm4UX7o8IFeV0JEOMKX7elTx/ybZ
                yx3QPEMfbRkUxyueS1TNFJjm+pXGi90jQzf+cpz71zo8Lsbh8sjXRduf/m59sH+SS3F2wqTeXdj/X1vvPSpYyQOzZqoEjr3k6eO/dXB1
                5WAMTaZjned/5NXfw/3bhN54/P/iy2Nd7/+vMPtniIjDG0LKG7VR0s+7Wf/Crd3GrVDSwHLXZPTGo28RjySpDSr9U/mX7K1auG8zOxYL
                uBjeoTJwKttZ59rPD0MWTjT+qUoVuXlf3Hx8qvnlOXbsEIeuzQqSQg9taux/i3EBQC/AyjubYgkFmZkbl+0bGNZ1Rx7xoSaFYtGIgpk0
                0A/FvBfaG6QMTUPur/AoIagX2m84NSwUCiK2STUbr+fL33miQsjQ9rfByvPu7GBw6DGsYtBVZg2oRPYDhXjhIFB7dqbnNAkdZ+TZ4uIP
                nXQsE6gbagazJ7p6+etSQVQVOMMRpNkwTrlaR4eBN/eE+yNcO9ZeB7mXEnDJKkoWVbb0c992fz0xpvvePUPo5q/Kdmc0Be4lh1u0/S8h
                yH0mXv15DcwjzZ1fBWBOrFmj6duIKOnXhXAuHiXxnePrfr6UIzkIp3jRV5xaMhdSbqxonp+To4522JlCugBGIiBGmQDJUIgMRBwIuwki
                5BYCDPxggBn8uoSlIbA93hotoPilAiBxEAAXMzkBUYYLp4vTlcXy4WVBcWfKZ2HPdAajcdcU1RisgCk0Qh6RAhMIADx7NAW4ZhrWix3L
                16ON2CxYB+sAf1t7FwT9dP/hECUEbCqM26G2gz122uOUycHt1UtYszQPUZDW4ytB1GGiYqfpQhASzHzLCu2LK8unrssrwB9VCm+pqS0I
                it7ctdosK67YUkjbTwYMnQvxghgoUZiHrzmuetKK3LUrbweiuOUzWWFOOGipY7DAIkJbELt1YwxslRdgiCAE7UujRUfbyt5Ycu8Bd7Lc
                StmTUER1HLtPmAxxkZ2FW2M6GmUEQBfYQfUWo1HAxS5LDPbd3xsnOK3VC4wsxYLxhQZi43jL0S5J1Q8IRAUAUwIEYMu6KPJm6oiPueSv
                HzvnXHGXlZUsqm8Sl2U1kxjipKmZ3VNsxB6SAiEh4DAYV83N8aypeAM672XrPBVMU7xNJP5K0tqmIcfYCBHNTHfOOJrLV2kNALY1A0hy
                zAWSlJNUQnObvuQmtQ7INvnwXsJ61fAIUvppJH78KOLWCGAfVeoSs+O1xvLq/29gExSvDo79ytLa5gbUaAHYatbjA5JxAo+qifBEQC7s
                XXWBeppJ1kuz86FKzX/XJMUx11QvDInjynIRxU5gVzW+feGrpMUAStmmYoMczgjyfK9S1ZUwTWIX5pC8YrM7C+rgpzxXcFjF6fkCCwro
                181dEkIhI0ATNXQGkZZSjhEc3lO3o6lKwMqmkJxPAPF5+XkMwU5TkiMYKcLKeUBcNJHoxHwLNbwQyxbn1qtoorw6uwpIhy3AymOs2Qej
                ZwhyPEmWI7TQDT1VMGlFB0EwO9sAQs9LL0CtataeN6OZYEiHE8CKY5bEORlqmmFYSNHTqcs2zmetpIDCkqGIwB+56sqOPvog1q1JP3Zk
                kurp2rh3iYFoTgEObw/WnD8jqX9QNT3KbKNI1lu+PimeoHgd656+hhH15hzTJXf11RUfW3FFUFRC0Jx5PvS4uVbscNWz+8Dx/UrJMuDY
                ks3w0QApIT8hknDwVrIVCvAMWRb2kNXXF06g0/j4BQ3C8KP128qyczWo67gWwZZjl3qtEkrzCGl1/wQgPzOFEwgty75jRdF95+vuGKr3
                3KmX2HqZXCK48G8rOwfX7MpNy2dqa4gMzSWAUVdF7XjNKhaLCVCIBwEYBy0CcIIQhrp0U9QgyzfvGDJ/7hsjUZlWoTcvmjpA8svx7dE4
                33fI8hyr6+VDEGNZeS7TxeEgB4EwBjsIsTfmIwlHh36NwqVpfx0O6K+lKRnaFShRXG89uCqq27DGU/E4NKX4J1oBJtYBExASZzrg4xyw
                aMgx0M5wXHMAVnzYI4/VrKcZU37yYab4FXd//b0a565c6vf5bpv/0u7G+pDct8DezkOh+LcPvuAxvRG0Z2UQQAbV7E9W1AUaCZarq0CA
                FH5bXtq45btC5cGPJn+kU1xvKOy/I2Xdp89HZIHNvxAeFrPI1Ak9kBOr5vupDICCByKpUPotNj/HZocVBT4t/q5Pn4DYYai4h2DXJsNY
                cpy4XhF08FnwIBh9umQZezZwjZI/AxhJqGrsoBS6GNyIQCdG8yGWcIuwNePMqxIofIbk8Pti5frkd9e5HRJcW9WeNT9zgdvH+06H5IsH
                69GnUzgWytgJgHqg/e4T4LdC04q/AvpBsUVlmXP+XkFhyQxvQuZALKcabXBJ/D3127Ih61PXwqB4iiwzzX65f0vh6qX+1qCbzDO8OMEN
                fz7g+OyehiUH1Zk9B+P0GGV+JRmOQIYSu8fRhPDjS0e8D+YKQgOGUfGFGwYDJnZXkBC0b/9IQyN4njTb/aJA27oS/gJch3kRkyDPF4A7
                +GVHtJdr8Eo/GrpzSgiAEJYBCEDejaWSjgFdmS4MgGtIxVesgT7ic75ZUD3QqY43gfLdxx4+Y9Nn6jtpv20AYjSR8MRkOUie8bj131Wv
                /7t34RwKI73naK4q6n+a2/tGXY5Y+Av3b/FdJ1CCECpEd2bFyz5P+s3XZI77jQi1O6HSXFvNS+3NiEA1cH2ZpXlJM5DxZ7yayMgiXZb2
                tdXXPHNVWsLdU8upxcZEcVRXM+o89HaDx+t/cA56gmOQ0SfjjHdCRUBbHfy7I/9+8vX3VK1MNS3A/JHSnFvca+2NT1We2RfR4uIDS0I0
                ENED4CZPupEAOSGu7bs3PuWrPjLFatL7FqbT3QWaQzFURnccO1pb37iBBFdJ/KUbSoCHnLDRcS9S2p2LK2By5Opj8P/ZBjFvU1AWLrX2
                5of9xBdgkSPQ9Cw8LGgN+OBAMKuwTKneMmNc8PzjSO3tzsGU9xbKOILv9be/NSp48d6OtsH+lTzOfYdkvYSDwYlbp2wlcuyYLZcUViC0
                Go4WWw4uaNIcR+sCLP9dF3tgXOtH3Z3igilOR6r0rv45ctFFymCgMfxvXpyBqv5QllmFgI53LekZvO8arjUjB4EUZHiAc1FdOajXZ3tw
                4O7mk4f6jzf4xyBPsOJnhP+kO74C3dNN6Ai+phYCECUqbsyPJtkER/QbMGN1UVzri2ruLliPii+OFxTd0jdjAXF/RuE8Oy9Lucnfb2vt
                DbhhOipvp5TF7vVkFqUkhEBiOeN5ZVpJlNResYXFi41CcLy/MIsC1b3Y5diTfGAnvW6RjtHhoniAbAkx0foJRbBtDAnN77R/v4LupHpx
                goR+pcAAAAASUVORK5CYII="
                className="iconAuthenticator basic" alt="iconAuthenticator" height={ iconHeight } width={ iconWidth }
            />
        ): type==="totp-icon" ? (
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADYCAMAAAC+/t3fAAAAM1BMVEX///8plKnK5Opfr7/y+Po2m
                66UytTX6+/k8vRRqLlEobSh0NmHw896vMmu19+83eRstsRzZbGOAAAJyUlEQVR4nO2da5OrIAyGT0Wp9db+/1971natiARy1XZm32870
                219IIQQAv7796c/haqrqvd+dIG891NVnf1gbNU/QO52ycg9/P169mPSVPlHl0Pa4A3Td9BV3mGZ3moe/WfDtf2DDLWoG+9nPz6gts+OK
                FTHTfXZFLFqMdUv22f1WzWqUL3U+fZsnpfqHu0BsXp8wCzXjo021qxuOhvLguqpxp/nSAyxzkQzxnqi9cdj1d4ca9bhY603cRkpuSODr
                UpnNkZqOGqo1cORWD9qjolGKvX5uKyHfacd3l0vmXfaGd31km2nHePj0+rsAsiavjZWldV0fT1s7oJkY47T2Vg/uhnM1vaRIUbq3vHs4
                bVKN3isD42h8hoVuc53G6H0yD6L68eFKDnHT+PSIlPhapzvq5d678RxmQaZAtejjzOF7cTPhSuRibm6Pv0M9STytFIyKdctN+1UkslRR
                ibkKqZiJKsgidevZVyYZIVgIcQnk8UbDW79dOV3mueCieLDG3bPRBCGMuNGUTxPWTrxf4i1ihGtv2j2zyZrGK7xehyXgOxG5qolYQ99j
                mEHIsNhv3RhGQjfAROX1L2A68LJk7FDgYa0Yy0aYLzphd2UlGEmmpk7Fpdg1iQ0pCg/z03Y8q0EPZtVEi7H5DrA54s8PbvDflaf7N9EG
                qNo54HfYeahFb/hZknymfwhgGpOUUzfCLj+/eOPAUR73iVcwmQmPywoBzsyz0ENcCIJ4oKi/xDuWYq4JLZ4KURWwiyHxCfOEoTehUEgr
                AkgLyIiSewl6/Jlrl6+SyyJebLWIt22lG7sixo28+PSDuMlV0JJfjzTZeKqGymXCAxuVqFLPB0MdIzyuptzwcC5TF4ndTIYMNsoVKicD
                AZEjAqlHOJ9RuHvJ4N8UWbqV+ICNeHvJ5MEGhWW0oIgUbZlVsrjaxQHSMHa90M0Ln8OElDCfcgWmC/JCwpnB+Z8tfjtahpprjqxghfWJ
                8ySLlpmDbuzcVfSsaCdzdRyLrnrAFR7PNou+lCYxLi5bYRatD3tbFHBEqWrzKzu2E6LbVHOpVwiGeuKdJKRLWr4ROPzh8gtoMgWNSp+r
                Q9WIsm2c7TGAQjzE6O49eImwyjOCey+kaZ4xFfzfRKjv0dzGiqc3cymKjX1Dy5W7TYA4anq6OAwaikc/oNOUT1z0VLfwg5ro9XT9sQfZ
                piFbaFzxohpiy40nmk/jsKvxYT/wedVhtiFmX0bwiZOrp3CqQmxGg7aSWMWm8Wp+ryHDwKsCQMyTJetn1Y7FkYn+3Hha8QCFpwG1oUYN
                avh6B1cIZ9e84HPaWHXsD4rYqG/tpTmiQFHWkW34SyR8c2ruSLmMh98u6Yo1U1DsOzOPsbaXOVeeLeCOIUSiWCOTfDprJGt/VoeN+84W
                FTqlhA+9TFHPO8/8m7hPRIRng7VVAzhSwfGoHkLg+dti4huWIxA+zQfPkfQBAOiEK++PQJi4CyNoH6cD+s9ZnfxBiuY2HuQIcCWRlCBS
                X1xSXPEgwWjuLol+6ICEwpri/5iA+bQn6QKOUl/HxgyJzxebMAaMzDkHO0uNmAX1Dey1KHC/C8Ew6WFvxEMZYxmYJUhGCbG/0owzGraG
                MzqQosymTGY2Y0WxQzqt4IVp+k/sAsLTGEzs/AskK5VVb3zT22V1ftz9e9dDLnch6lX1KkiyLRKhuyrwXIZje8Gywy208Amr7ATnwGrD
                cGaEb5/elTpzQzY6wMGV4R1Qy4GfhZMHQCmvdB0u5tkIm0yAl8CljNAAlg9zXN3N2bXPvBz/365Rn3YU3kDJICt+2Qu00xFMJ30W9EA8
                WDhoG/g7V8YbMmxi7fWUQaIBts+MLz4gcGWhK0sCsYaIBosamcwrQyDLZOkYKW5v0tLDBbPPuDxSxhsaWnmDN2McUmQCthusQGllWGw5
                bE41RC3gX+kKg+22/uBbBEGWz5BPkrAMkAs2O7XyGAO/q6cOvE7SPJgu2UWGWzdUaW4RUHxHg5s9zDQljYItv4DwS1qFP7mwXZ7zJDZg
                2AV/F2gVC5XzoPF5R7gJ0Gw9SNo76GzJi5M0NGSH5z+IbDwSBIWTKfstxQrbtwHvG0DgYX/gfQeSmchSmCb34SLRiCw0A0gYw+lsxC0I
                JgM1iI+E0nB1SPAIldGje63ZoUr7DsGLJp8qM5ja1a4NPcxYDfkjwJg25gZl6k6BCzOVICbUQDY1nRxtZiHgMXPC7riNFjcDqhCsUPAd
                h6aFlLFMR8qqjoETLjQ3N2O/TFgu9QSadmyn/Ywtsi5C5UKts9yQh9Ngu1XHwfaYhZs/7jQ7WRJsH3T4/LBKm+CzIIlojsgu5ICS80Nq
                DlaZd2SBUvE48DiNgWWcjS4XJXGe1OyYIngDoi9E2Bpq0VlujX8Rw4s5Z2BzybA0j4At3ZhH1jEgdWpUgg0WNoFILeT5Okcs40/qNFxy
                SrajcMpmYFBKxzkqST6xd6RrMAIucq0pO/wsQKDBwl2N1o4zIzAcqkmbK5bloabwWS3uD4VB4HZN6kgwTI7wwg95xVxTjm+bTWfG8R2m
                Wiefk2YwBt4sNq9VjY/PtA1H5IX3ZjUOJV8NXrjRUBmAlYa9vgTtnwy5VO8T5W9LL45+WTom33wKodDhKudBW+1vOYLgFch2wCzq0CoI
                ZB5fVQDIG8AQh9+wpIZvxId+24Q3PK3pYwApYxcWtgSUWx8RjrJbvee5ho79eAXUqSqsc5ooGGvDqNEZyRjNDLH7EmIjSgLBeK1CvpvM
                47vOsqIFrZSz7sodxq+u6gJQfIbGDTfiL4L3HOibvjTL9d1KunvHysk1YXSEzCM20tGBbSaFvpzUmacglopWku4rfQpzgDgvasrfwagg
                EVuS15+gXn9/Y1ZqDnRi8m5eUDu6+makbwnQ7sM+Ff8FB7/TjgSWzWwjjRI0i6iE1iPHhGQXPsH1y5E0bf0bJnzE0h3vXvHzxFIF7kad
                1Z1bvQ+XO/3fmDdja7IZXcTgUwaSYlPJNNJtnwemVYSSfvSO6n0kmMG524F0sxFfBKZZF7ei/3yX3XljqOyyNSv9ONJuv+9V2127QdFJ
                plns8sW0GqMbp432P0hSXt4rcrcUHyATLcJzjNHKzNcBF6XbSy7vY9Ftfbluxg1GvWfRR3fafbd9RIxqSmVZva8JMJmiFSNqTPc6yh71
                EibE5V4rYW63IFWuIryWrAvwjJHOw/riTYZjbVzsZ5ibCaU1JzgMlJqOTsKsDphiaaqJq1laDOa12cR1fbyNQ1j/+kQtb2k37oPpfrVf
                WB1nMNsOZ2t+j5QHGXz8Oe7dryuk3fFKe72WF9L+126Vv38tr6I0Dk3+OlLkf70J6L+A6yvfzxdqzHCAAAAAElFTkSuQmCC"
                className="iconAuthenticator totp" alt="iconAuthenticator" width={ iconWidth } height={ iconHeight }
            />
        ): type==="active-sessions-limit-handler-icon" ? (
            <svg className="iconAuthenticator" height={ iconHeight } width={ iconWidth } viewBox="0 0 512 512">
                <path d="M512 256c0-3.11-.056-6.208-.165-9.291C506.944 109.628 394.275 0 256 0S5.056 109.628.166
                246.709C.056 249.792 0 252.89 0 256c0 141.385 131.502 246.71 256 246.71 126.754 0
                256-105.325 256-246.71z" fill="#ff5876"/>
                <path d="M256 493.419c-138.273 0-250.922-109.631-255.814-246.71A258.192 258.192 0 000 256c0 141.385
                114.615 256 256 256s256-114.615 256-256c0-3.112-.075-6.205-.185-9.29C506.922 383.789 394.273 493.419
                256 493.419z" fill="#e6485d"/>
                <path d="M469.419 246.709C464.555 133.042 370.865 42.382 256 42.382S47.445 133.042 42.581
                246.709C42.449 249.79 42.58 456.03 256 456.03s213.551-206.24 213.419-209.321z" fill="#e4eef9"/>
                <path d="M256 451.037c-114.864 0-208.539-90.662-213.405-204.328a216.93 216.93 0 00-.213 9.29c0
                117.978 95.64 213.618 213.618 213.618S469.618 373.978 469.618 256c0-3.114-.082-6.209-.213-9.29C464.539
                360.376 370.864 451.037 256 451.037z" fill="#d5e0f2"/>
                <path d="M333.595 181.05c-6.089-6.005-15.893-5.938-21.897.15l-36.334 36.837 3.651 17.537 16.972 5.654
                37.759-38.281c6.004-6.088 5.937-15.892-.151-21.897zM234.082
                219.447l-82.402-73.432c-6.385-5.69-16.172-5.126-21.861 1.259-5.689 6.384-5.126 16.172 1.259
                21.861l84.025 74.878 17.509-5.84z" fill="#405b6c"/>
                <path d="M365.636 355.837a7.712 7.712 0 01-4.976-1.814l-98.073-82.378a7.742 7.742 0
                019.959-11.856l98.073 82.379a7.742 7.742 0 01-4.983 13.669z" fill="#86dcff"/>
                <path d="M215.103 244.013l14.46 12.886 18.57-6.31-1.007-19.519-13.043-11.623c-9.075 5.453-15.944
                14.19-18.98 24.566zM275.363 218.038l-12.294
                12.464v24.466h19.366l13.552-13.739c-3.724-10.076-11.151-18.349-20.624-23.191z" fill="#2d4456"/>
                <path d="M280.783 246.708c-3.762-10.03-13.439-17.169-24.783-17.169s-21.021 7.139-24.783 17.169c-1.084
                2.891-.072 26.462 24.783 26.462s25.867-23.571 24.783-26.462z" fill="#ff5876"/>
                <path d="M256 263.88c-11.344 0-21.017-7.14-24.779-17.17a26.381 26.381 0 00-1.682 9.29c0 14.614 11.847
                26.46 26.46 26.46 14.614 0 26.46-11.847 26.46-26.46 0-3.27-.597-6.399-1.681-9.29-3.761 10.029-13.434
                17.17-24.778 17.17z" fill="#e6485d"/>
                <g fill="#405b6c">
                    <path d="M263.757 93.573V69.546a7.757 7.757 0 00-15.514 0v24.027c0 4.284 3.472 7.757 7.757
                    7.757s7.757-3.473 7.757-7.757zM248.243 418.427v24.027c0 4.284 3.472 7.757 7.757 7.757s7.757-3.473
                    7.757-7.757v-24.027a7.757 7.757 0 00-15.514 0zM442.454 263.757a7.757 7.757 0
                    000-15.514h-24.027a7.757 7.757 0 000 15.514zM69.546 248.243c-4.285 0-7.757 3.473-7.757 7.757s3.472
                    7.757 7.757 7.757h24.027a7.757 7.757 0 000-15.514z"/>
                </g>
            </svg>
        ):(
            <svg className="icon" width={ iconWidth } height={ iconHeight } viewBox="0 0 512.005 512.005" x={ iconX } 
                y={ iconY }
            >
                <path className="path fill secondary"
                    d="M256.003 234.672c-11.76 0-21.333 9.573-21.333 21.333 0 7.792 4.409 14.329 10.667
                    18.053v13.947a10.66 10.66 0 0010.667 10.667 10.66 10.66 0 0010.667-10.667v-13.947c6.258-3.724
                    10.667-10.262 10.667-18.053-.002-11.76-9.575-21.333-21.335-21.333zM256.003 149.339c-17.646 0-32
                    14.354-32 32v10.667h64v-10.667c0-17.646-14.355-32-32-32z"/>
                <path className="path fill secondary"
                    d="M440.888 64.609l-181.333-64a10.65 10.65 0 00-7.104 0l-181.333 64a10.683 10.683 0 00-7.115
                    10.063v128c0 165.646 24.563 226.188 187.198 308.188 1.51.76 3.156 1.146 4.802 1.146a10.67 10.67 0
                    004.802-1.146c162.635-82 187.198-142.542
                    187.198-308.188v-128c0-4.521-2.855-8.552-7.115-10.063zm-88.885 255.396c0 11.76-9.573
                    21.333-21.333 21.333H181.336c-11.76 0-21.333-9.573-21.333-21.333V213.339c0-11.76
                    9.573-21.333 21.333-21.333v-10.667c0-41.167 33.5-74.667 74.667-74.667s74.667 33.5 74.667
                    74.667v10.667c11.76 0 21.333 9.573 21.333 21.333v106.666z"/>
            </svg>
        )
    );
};
