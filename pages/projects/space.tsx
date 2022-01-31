import { Container } from 'components/Container';
import { ExternalLink } from 'components/Others';
import { gsap } from 'gsap';
import { useEffect } from 'react';

export default function Space() {
    return (
        <Container
            hideThemeButton
            hideLogo
            metadata={{
                title: 'Space Man - by Shivam010',
                description: 'Space Man svg adopted by Shivam Rathore',
            }}
        >
            <div className="mx-auto -mt-5 mb-16 max-w-4xl flex flex-col justify-center items-center">
                <h1 className="font-logo leading-normal text-4xl xs:text-6xl sm:text-7xl md:text-[5.9rem] mb-3 mx-auto">
                    <ExternalLink href="https://shivamrathore.com">
                        <span className="text-pink-700 leading-relaxed">
                            Space
                        </span>{' '}
                        Man
                    </ExternalLink>
                </h1>
                {animated()}
                {animated()}
                <div className="flex flex-row">
                    <div className="min-w-[50%] sm:float-left">
                        {animated()}
                    </div>
                    <div className="min-w-[50%] sm:float-left">
                        {animated()}
                    </div>
                </div>
            </div>
        </Container>
    );
}

const animationEffect = () => {
    gsap.to('#headStripe', {
        y: 0.5,
        rotation: 5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        duration: 1,
    });

    gsap.to('#spaceman', {
        y: 0.5,
        x: 0.5,
        rotation: 3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        duration: 1,
    });

    gsap.to('#craterSmall', {
        x: -8,
        y: 8,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: 'sine.inOut',
    });

    gsap.to('#craterBig', {
        x: 8,
        y: -8,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: 'sine.inOut',
    });

    gsap.to('#planet', {
        rotation: 4,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: 'sine.inOut',
        transformOrigin: '50% 50%',
    });

    gsap.to('#starsBig g', {
        rotation: 20,
        transformOrigin: '50% 50%',
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
    });

    gsap.fromTo(
        '#starsSmall g',
        {
            scale: 0,
            rotation: -10,
            transformOrigin: '50% 50%',
            stagger: 0.01,
        },
        {
            scale: 1,
            rotation: 10,
            transformOrigin: '50% 50%',
            yoyo: true,
            repeat: -1,
            stagger: 0.01,
            duration: 1.5,
        },
    );

    gsap.to('#circlesSmall circle', {
        y: -3,
        x: -2,
        yoyo: true,
        duration: 1,
        ease: 'sine.inOut',
        repeat: -1,
    });

    gsap.to('#circlesBig circle', {
        y: 2,
        x: 2,
        yoyo: true,
        duration: 1,
        ease: 'sine.inOut',
        repeat: -1,
    });

    gsap.set('#glassShine', { x: -2 });

    gsap.fromTo(
        '#glassShine',
        {
            x: -60,
            y: 20,
            rotation: -10,
            ease: 'expo.inOut',
            transformOrigin: '50% 50%',
            repeat: -1,
        },
        {
            x: 60,
            y: 20,
            duration: 2,
            rotation: -30,
            ease: 'expo.inOut',
            transformOrigin: '50% 50%',
            repeat: -1,
            repeatDelay: 3,
            delay: 2,
        },
    );
};

const animated = () => {
    useEffect(animationEffect, []);
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
            width="100%"
            height="100%"
            className="dark:stroke-rang-0 stroke-rang-900"
        >
            <g>
                <defs>
                    <clipPath id="GlassClip">
                        <path
                            d="M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5
s-28.485-16.599-34.877-24.192c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13
c6.755-0.61,20.546-0.608,41.785,5.087s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z"
                        ></path>
                    </clipPath>
                    <clipPath id="cordClip">
                        <rect width="800" height="600"></rect>
                    </clipPath>
                </defs>

                <g
                    id="planet"
                    transform="matrix(0.9994,0.0335,-0.0335,0.9994,3.883,-16.5281)"
                    style={{ transformOrigin: '0px 0px' }}
                >
                    <circle
                        fill="none"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        cx="572.859"
                        cy="108.803"
                        r="90.788"
                    ></circle>

                    <circle
                        id="craterBig"
                        fill="none"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        cx="548.891"
                        cy="62.319"
                        r="13.074"
                        style={{ transformOrigin: '0px 0px' }}
                        transform="matrix(1,0,0,1,4.841,-4.824)"
                    ></circle>

                    <circle
                        id="craterSmall"
                        fill="none"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        cx="591.743"
                        cy="158.918"
                        r="7.989"
                        style={{ transformOrigin: '0px 0px' }}
                        transform="matrix(1,0,0,1,-4.841,4.824)"
                    ></circle>
                    <path
                        id="ring"
                        fill="none"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        d="
M476.562,101.461c-30.404,2.164-49.691,4.221-49.691,8.007c0,6.853,63.166,12.408,141.085,12.408s141.085-5.555,141.085-12.408
c0-3.378-15.347-4.988-40.243-7.225"
                    ></path>

                    <path
                        id="ringShadow"
                        opacity="0.5"
                        fill="none"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        d="
M483.985,127.43c23.462,1.531,52.515,2.436,83.972,2.436c36.069,0,68.978-1.19,93.922-3.149"
                    ></path>
                </g>
                <g id="stars">
                    <g id="starsBig">
                        <g
                            transform="matrix(0.9998,-0.0175,0.0175,0.9998,-26.7865,62.2734)"
                            style={{ transformOrigin: '0px 0px' }}
                        >
                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="518.07"
                                y1="245.375"
                                x2="518.07"
                                y2="266.581"
                            ></line>

                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="508.129"
                                y1="255.978"
                                x2="528.01"
                                y2="255.978"
                            ></line>
                        </g>
                        <g
                            transform="matrix(0.9994,0.0357,-0.0357,0.9994,-0.5931,0.7129)"
                            style={{ transformOrigin: '0px 0px' }}
                        >
                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="154.55"
                                y1="231.391"
                                x2="154.55"
                                y2="252.598"
                            ></line>

                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="144.609"
                                y1="241.995"
                                x2="164.49"
                                y2="241.995"
                            ></line>
                        </g>
                        <g
                            transform="matrix(0.9843,0.1765,-0.1765,0.9843,48.9992,-91.3672)"
                            style={{ transformOrigin: '0px 0px' }}
                        >
                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="320.135"
                                y1="132.746"
                                x2="320.135"
                                y2="153.952"
                            ></line>

                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="310.194"
                                y1="143.349"
                                x2="330.075"
                                y2="143.349"
                            ></line>
                        </g>
                        <g
                            transform="matrix(0.9735,0.2286,-0.2286,0.9735,210.1703,-59.6141)"
                            style={{ transformOrigin: '0px 0px' }}
                        >
                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="200.67"
                                y1="483.11"
                                x2="200.67"
                                y2="504.316"
                            ></line>

                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="210.611"
                                y1="493.713"
                                x2="190.73"
                                y2="493.713"
                            ></line>
                        </g>
                    </g>
                    <g id="starsSmall">
                        <g
                            transform="matrix(0.4206,-0.0342,0.0343,0.421,331.4934,322.4325)"
                            style={{ transformOrigin: '0px 0px' }}
                        >
                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="432.173"
                                y1="380.52"
                                x2="432.173"
                                y2="391.83"
                            ></line>

                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="426.871"
                                y1="386.175"
                                x2="437.474"
                                y2="386.175"
                            ></line>
                        </g>
                        <g
                            transform="matrix(0.3885,-0.0443,0.0444,0.3891,503.918,341.9315)"
                            style={{ transformOrigin: '0px 0px' }}
                        >
                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="489.555"
                                y1="299.765"
                                x2="489.555"
                                y2="308.124"
                            ></line>

                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="485.636"
                                y1="303.945"
                                x2="493.473"
                                y2="303.945"
                            ></line>
                        </g>
                        <g
                            transform="matrix(0.3551,-0.0524,0.0526,0.3561,306.0025,422.4659)"
                            style={{ transformOrigin: '0px 0px' }}
                        >
                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="231.468"
                                y1="291.009"
                                x2="231.468"
                                y2="299.369"
                            ></line>

                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="227.55"
                                y1="295.189"
                                x2="235.387"
                                y2="295.189"
                            ></line>
                        </g>
                        <g
                            transform="matrix(0.3217,-0.0587,0.0588,0.3223,373.1985,935.7633)"
                            style={{ transformOrigin: '0px 0px' }}
                        >
                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="244.032"
                                y1="547.539"
                                x2="244.032"
                                y2="555.898"
                            ></line>

                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="247.95"
                                y1="551.719"
                                x2="240.113"
                                y2="551.719"
                            ></line>
                        </g>
                        <g
                            transform="matrix(0.2872,-0.0628,0.0629,0.2876,289.4152,711.5711)"
                            style={{ transformOrigin: '0px 0px' }}
                        >
                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="186.359"
                                y1="406.967"
                                x2="186.359"
                                y2="415.326"
                            ></line>

                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="190.277"
                                y1="411.146"
                                x2="182.44"
                                y2="411.146"
                            ></line>
                        </g>
                        <g
                            transform="matrix(0.2519,-0.0646,0.0647,0.2522,809.0866,745.4495)"
                            style={{ transformOrigin: '0px 0px' }}
                        >
                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="480.296"
                                y1="406.967"
                                x2="480.296"
                                y2="415.326"
                            ></line>

                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                x1="484.215"
                                y1="411.146"
                                x2="476.378"
                                y2="411.146"
                            ></line>
                        </g>
                    </g>
                    <g id="circlesBig">
                        <circle
                            fill="none"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            cx="588.977"
                            cy="255.978"
                            r="7.952"
                            transform="matrix(1,0,0,1,0,-1.941)"
                            style={{ transformOrigin: '0px 0px' }}
                        ></circle>

                        <circle
                            fill="none"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            cx="450.066"
                            cy="320.259"
                            r="7.952"
                            transform="matrix(1,0,0,1,0,-1.941)"
                            style={{ transformOrigin: '0px 0px' }}
                        ></circle>

                        <circle
                            fill="none"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            cx="168.303"
                            cy="353.753"
                            r="7.952"
                            transform="matrix(1,0,0,1,0,-1.941)"
                            style={{ transformOrigin: '0px 0px' }}
                        ></circle>

                        <circle
                            fill="none"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            cx="429.522"
                            cy="201.185"
                            r="7.952"
                            transform="matrix(1,0,0,1,0,-1.941)"
                            style={{ transformOrigin: '0px 0px' }}
                        ></circle>

                        <circle
                            fill="none"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            cx="200.67"
                            cy="176.313"
                            r="7.952"
                            transform="matrix(1,0,0,1,0,-1.941)"
                            style={{ transformOrigin: '0px 0px' }}
                        ></circle>

                        <circle
                            fill="none"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            cx="133.343"
                            cy="477.014"
                            r="7.952"
                            transform="matrix(1,0,0,1,0,-1.941)"
                            style={{ transformOrigin: '0px 0px' }}
                        ></circle>

                        <circle
                            fill="none"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            cx="283.521"
                            cy="568.033"
                            r="7.952"
                            transform="matrix(1,0,0,1,0,-1.941)"
                            style={{ transformOrigin: '0px 0px' }}
                        ></circle>

                        <circle
                            fill="none"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            cx="413.618"
                            cy="482.387"
                            r="7.952"
                            transform="matrix(1,0,0,1,0,-1.941)"
                            style={{ transformOrigin: '0px 0px' }}
                        ></circle>
                    </g>
                    <g id="circlesSmall">
                        <circle
                            cx="549.879"
                            cy="296.402"
                            r="2.651"
                            transform="matrix(1,0,0,1,0,3.836)"
                            style={{ transformOrigin: '0px 0px' }}
                        ></circle>
                        <circle
                            cx="253.29"
                            cy="229.24"
                            r="2.651"
                            transform="matrix(1,0,0,1,0,3.836)"
                            style={{ transformOrigin: '0px 0px' }}
                        ></circle>
                        <circle
                            cx="434.824"
                            cy="263.931"
                            r="2.651"
                            transform="matrix(1,0,0,1,0,3.836)"
                            style={{ transformOrigin: '0px 0px' }}
                        ></circle>
                        <circle
                            cx="183.708"
                            cy="544.176"
                            r="2.651"
                            transform="matrix(1,0,0,1,0,3.836)"
                            style={{ transformOrigin: '0px 0px' }}
                        ></circle>
                        <circle
                            cx="382.515"
                            cy="530.923"
                            r="2.651"
                            transform="matrix(1,0,0,1,0,3.836)"
                            style={{ transformOrigin: '0px 0px' }}
                        ></circle>
                        <circle
                            cx="130.693"
                            cy="305.608"
                            r="2.651"
                            transform="matrix(1,0,0,1,0,3.836)"
                            style={{ transformOrigin: '0px 0px' }}
                        ></circle>
                        <circle
                            cx="480.296"
                            cy="477.014"
                            r="2.651"
                            transform="matrix(1,0,0,1,0,3.836)"
                            style={{ transformOrigin: '0px 0px' }}
                        ></circle>
                    </g>
                </g>
                <g
                    id="spaceman"
                    clipPath="url(cordClip)"
                    transform="matrix(0.9994,0.0338,-0.0338,0.9994,8.0568,2.3903)"
                    style={{ transformOrigin: '0px 0px' }}
                >
                    <path
                        id="cord"
                        fill="none"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="
M273.813,410.969c0,0-54.527,39.501-115.34,38.218c-2.28-0.048-4.926-0.241-7.841-0.548
c-68.038-7.178-134.288-43.963-167.33-103.87c-0.908-1.646-1.793-3.3-2.654-4.964c-18.395-35.511-37.259-83.385-32.075-118.817"
                    ></path>

                    <path
                        fill="none"
                        id="backpack"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="
M338.164,454.689l-64.726-17.353c-11.086-2.972-17.664-14.369-14.692-25.455l15.694-58.537
c3.889-14.504,18.799-23.11,33.303-19.221l52.349,14.035c14.504,3.889,23.11,18.799,19.221,33.303l-15.694,58.537
C360.647,451.083,349.251,457.661,338.164,454.689z"
                    ></path>
                    <g id="antenna">
                        <line
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            x1="323.396"
                            y1="236.625"
                            x2="295.285"
                            y2="353.753"
                        ></line>
                        <circle
                            className="fill-pink-700"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            cx="323.666"
                            cy="235.617"
                            r="6.375"
                        ></circle>
                    </g>
                    <g id="armR">
                        <path
                            className="dark:fill-rang-900 fill-rang-0"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            d="
M360.633,363.039c1.352,1.061,4.91,5.056,5.824,6.634l27.874,47.634c3.855,6.649,1.59,15.164-5.059,19.02l0,0
c-6.649,3.855-15.164,1.59-19.02-5.059l-5.603-9.663"
                        ></path>
                        <path
                            className="dark:fill-rang-900 fill-rang-0"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            d="
M388.762,434.677c5.234-3.039,7.731-8.966,6.678-14.594c2.344,1.343,4.383,3.289,5.837,5.793
c4.411,7.596,1.829,17.33-5.767,21.741c-7.596,4.411-17.33,1.829-21.741-5.767c-1.754-3.021-2.817-5.818-2.484-9.046
C375.625,437.355,383.087,437.973,388.762,434.677z"
                        ></path>
                    </g>
                    <g id="armL">
                        <path
                            className="dark:fill-rang-900 fill-rang-0"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            d="
M301.301,347.66c-1.702,0.242-5.91,1.627-7.492,2.536l-47.965,27.301c-6.664,3.829-8.963,12.335-5.134,18.999h0
c3.829,6.664,12.335,8.963,18.999,5.134l9.685-5.564"
                        ></path>
                        <path
                            className="dark:fill-rang-900 fill-rang-0"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            d="
M241.978,395.324c-3.012-5.25-2.209-11.631,1.518-15.977c-2.701-0.009-5.44,0.656-7.952,2.096
c-7.619,4.371-10.253,14.09-5.883,21.71c4.371,7.619,14.09,10.253,21.709,5.883c3.03-1.738,5.35-3.628,6.676-6.59
C252.013,404.214,245.243,401.017,241.978,395.324z"
                        ></path>
                    </g>
                    <g id="body">
                        <path
                            className="dark:fill-rang-900 fill-rang-0"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            d="
M353.351,365.387c-7.948,1.263-16.249,0.929-24.48-1.278c-8.232-2.207-15.586-6.07-21.836-11.14
c-17.004,4.207-31.269,17.289-36.128,35.411l-1.374,5.123c-7.112,26.525,8.617,53.791,35.13,60.899l0,0
c26.513,7.108,53.771-8.632,60.883-35.158l1.374-5.123C371.778,395.999,365.971,377.536,353.351,365.387z"
                        ></path>
                        <path
                            fill="none"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            d="
M269.678,394.912L269.678,394.912c26.3,20.643,59.654,29.585,93.106,25.724l2.419-0.114"
                        ></path>
                    </g>
                    <g id="legs">
                        <g id="legR">
                            <path
                                className="dark:fill-rang-900 fill-rang-0"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                d="
M312.957,456.734l-14.315,53.395c-1.896,7.07,2.299,14.338,9.37,16.234l0,0c7.07,1.896,14.338-2.299,16.234-9.37l17.838-66.534
C333.451,455.886,323.526,457.387,312.957,456.734z"
                            ></path>

                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                x1="304.883"
                                y1="486.849"
                                x2="330.487"
                                y2="493.713"
                            ></line>
                        </g>
                        <g id="legL">
                            <path
                                className="dark:fill-rang-900 fill-rang-0"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                d="
M296.315,452.273L282,505.667c-1.896,7.07-9.164,11.265-16.234,9.37l0,0c-7.07-1.896-11.265-9.164-9.37-16.234l17.838-66.534
C278.993,441.286,286.836,447.55,296.315,452.273z"
                            ></path>

                            <line
                                fill="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                x1="262.638"
                                y1="475.522"
                                x2="288.241"
                                y2="482.387"
                            ></line>
                        </g>
                    </g>
                    <g id="head">
                        <ellipse
                            className="dark:fill-rang-900 fill-rang-0"
                            transform="matrix(0.259 -0.9659 0.9659 0.259 -51.5445 563.2371)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            cx="341.295"
                            cy="315.211"
                            rx="61.961"
                            ry="60.305"
                        ></ellipse>
                        <path
                            id="headStripe"
                            fill="none"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            d="
M330.868,261.338c-7.929,1.72-15.381,5.246-21.799,10.246"
                            style={{ transformOrigin: '0px 0px' }}
                            transform="matrix(0.9999,0.0169,-0.0169,0.9999,5.1792,-4.7431)"
                        ></path>

                        <path
                            fill="none"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            d="
M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5s-28.485-16.599-34.877-24.192
c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13c6.755-0.61,20.546-0.608,41.785,5.087
s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z"
                        ></path>
                        <g clipPath="url(#GlassClip)">
                            <polygon
                                id="glassShine"
                                fill="none"
                                strokeWidth="3"
                                strokeMiterlimit="10"
                                points="
278.436,375.599 383.003,264.076 364.393,251.618 264.807,364.928 				"
                                transform="matrix(0.866,-0.5,0.5,0.866,-42.5359,370.0963)"
                                style={{ transformOrigin: '0px 0px' }}
                            ></polygon>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};
