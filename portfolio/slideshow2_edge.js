/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'baby_33',
                            type: 'image',
                            rect: ['-134px', '-90px', '548px', '365px', 'auto', 'auto'],
                            clip: 'rect(0px 552.2353515625px 371.4765625px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"baby_3.png",'0px','0px'],
                            transform: [[],[],[],['0.50866','0.50959']]
                        },
                        {
                            id: 'pregnancy',
                            type: 'image',
                            rect: ['0px', '0px', '279px', '186px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"pregnancy.png",'0px','0px']
                        },
                        {
                            id: 'braclet',
                            type: 'image',
                            rect: ['0px', '0px', '279px', '186px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"braclet.jpg",'0px','0px']
                        },
                        {
                            id: 'branch',
                            type: 'image',
                            rect: ['0px', '0px', '279px', '186px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"branch.jpg",'0px','0px']
                        },
                        {
                            id: 'car',
                            type: 'image',
                            rect: ['0px', '1px', '279px', '186px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"car.jpg",'0px','0px']
                        },
                        {
                            id: 'flowers6',
                            type: 'image',
                            rect: ['0px', '0px', '279px', '186px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"flowers6.jpg",'0px','0px']
                        },
                        {
                            id: 'charline_2',
                            type: 'image',
                            rect: ['0px', '1px', '279px', '186px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"charline_2.png",'0px','0px']
                        },
                        {
                            id: 'baby_3',
                            type: 'image',
                            rect: ['0px', '0px', '279px', '186px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"baby_3.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '278px', '186px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 49000,
                    autoPlay: true,
                    labels: {
                        "begin": 0
                    },
                    data: [
                        [
                            "eid83",
                            "width",
                            0,
                            0,
                            "linear",
                            "${car}",
                            '279px',
                            '279px'
                        ],
                        [
                            "eid81",
                            "width",
                            0,
                            0,
                            "linear",
                            "${charline_2}",
                            '279px',
                            '279px'
                        ],
                        [
                            "eid80",
                            "height",
                            0,
                            0,
                            "linear",
                            "${charline_2}",
                            '186px',
                            '186px'
                        ],
                        [
                            "eid79",
                            "width",
                            0,
                            0,
                            "linear",
                            "${branch}",
                            '279px',
                            '279px'
                        ],
                        [
                            "eid77",
                            "width",
                            0,
                            0,
                            "linear",
                            "${flowers6}",
                            '279px',
                            '279px'
                        ],
                        [
                            "eid74",
                            "height",
                            0,
                            0,
                            "linear",
                            "${braclet}",
                            '186px',
                            '186px'
                        ],
                        [
                            "eid73",
                            "width",
                            0,
                            0,
                            "linear",
                            "${pregnancy}",
                            '279px',
                            '279px'
                        ],
                        [
                            "eid71",
                            "width",
                            0,
                            0,
                            "linear",
                            "${baby_3}",
                            '279px',
                            '279px'
                        ],
                        [
                            "eid70",
                            "height",
                            0,
                            0,
                            "linear",
                            "${baby_3}",
                            '186px',
                            '186px'
                        ],
                        [
                            "eid78",
                            "height",
                            0,
                            0,
                            "linear",
                            "${branch}",
                            '186px',
                            '186px'
                        ],
                        [
                            "eid82",
                            "height",
                            0,
                            0,
                            "linear",
                            "${car}",
                            '186px',
                            '186px'
                        ],
                        [
                            "eid27",
                            "opacity",
                            14000,
                            7000,
                            "linear",
                            "${flowers6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid31",
                            "opacity",
                            0,
                            7000,
                            "linear",
                            "${baby_3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid72",
                            "height",
                            0,
                            0,
                            "linear",
                            "${pregnancy}",
                            '186px',
                            '186px'
                        ],
                        [
                            "eid29",
                            "opacity",
                            7000,
                            7000,
                            "linear",
                            "${charline_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid28",
                            "opacity",
                            42000,
                            7000,
                            "linear",
                            "${pregnancy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid33",
                            "opacity",
                            35000,
                            7000,
                            "linear",
                            "${braclet}",
                            '1',
                            '0'
                        ],
                        [
                            "eid67",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${baby_33}",
                            '0.50959',
                            '0.50959'
                        ],
                        [
                            "eid69",
                            "top",
                            0,
                            0,
                            "linear",
                            "${baby_33}",
                            '-90px',
                            '-90px'
                        ],
                        [
                            "eid66",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${baby_33}",
                            '0.50866',
                            '0.50866'
                        ],
                        [
                            "eid30",
                            "opacity",
                            21000,
                            7000,
                            "linear",
                            "${car}",
                            '1',
                            '0'
                        ],
                        [
                            "eid76",
                            "height",
                            0,
                            0,
                            "linear",
                            "${flowers6}",
                            '186px',
                            '186px'
                        ],
                        [
                            "eid75",
                            "width",
                            0,
                            0,
                            "linear",
                            "${braclet}",
                            '279px',
                            '279px'
                        ],
                        [
                            "eid68",
                            "left",
                            0,
                            0,
                            "linear",
                            "${baby_33}",
                            '-134px',
                            '-134px'
                        ],
                        [
                            "eid32",
                            "opacity",
                            28000,
                            7000,
                            "linear",
                            "${branch}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("slideshow2_edgeActions.js");
})("EDGE-42988083");
