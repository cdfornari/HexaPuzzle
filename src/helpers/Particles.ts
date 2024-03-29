export default JSON.parse(JSON.stringify({
    "background": {
        "color": {
            "value": "transparent"
        },
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    },
    "fullScreen": {
        "zIndex": 0
    },
    "interactivity": {
        "events": {
            "onClick": {
                "enable": true,
                "mode": "push"
            },
            "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                    "force": 40
                }
            }
        },
        "modes": {
            "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 30,
                "divs": {
                    "distance": 200,
                    "duration": 0.4,
                    "mix": false,
                    "selectors": []
                }
            },
            "grab": {
                "distance": 400
            },
            "repulse": {
                "divs": {
                "distance": 200,
                "duration": 0.4,
                "factor": 100,
                "speed": 1,
                "maxSpeed": 50,
                "easing": "ease-out-quad",
                "selectors": []
                }
            }
        }
    },
    "particles": {
        "color": {
            "value": "#ffffff"
        },
        "links": {
            "color": {
                "value": "#ffffff"
            },
            "distance": 150,
            "enable": true,
            "opacity": 0.4
        },
        "move": {
            "attract": {
                "rotate": {
                "x": 600,
                "y": 1200
                }
            },
            "enable": true,
            "path": {},
            "outModes": {
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
            },
            "spin": {}
        },
        "number": {
            "density": {
                "enable": true
            },
            "value": 60
        },
        "opacity": {
            "value": 0.5,
            "animation": {
                "speed": 1,
                "minimumValue": 0.1
            }
        },
        "shape": {
            "options": {
                "polygon": [
                    {
                        "nb_sides": 6,
                        "particles": {
                            "opacity": {
                                "value": 1
                            },
                            "size": {
                                "value": 15,
                                "random": {
                                    "enable": true,
                                    "minimumValue": 8
                                }
                            },
                            "color": {
                                "value": "#0be4e4"
                            }
                        }
                    },
                    {
                        "nb_sides": 6,
                            "particles": {
                            "opacity": {
                                "value": 1
                            },
                            "size": {
                                "value": 15,
                                "random": {
                                    "enable": true,
                                    "minimumValue": 8
                                }
                            },
                            "color": {
                                "value": "#ff5757"
                            }
                        }
                    },
                    {
                        "nb_sides": 6,
                        "particles": {
                            "opacity": {
                                "value": 1
                            },
                            "size": {
                                "value": 15,
                                "random": {
                                    "enable": true,
                                    "minimumValue": 8
                                }
                            },
                            "color": {
                                "value": "#ff8200"
                            }
                        }
                    },
                    {
                        "nb_sides": 6,
                        "particles": {
                            "opacity": {
                                "value": 1
                            },
                            "size": {
                                "value": 15,
                                "random": {
                                    "enable": true,
                                    "minimumValue": 8
                                }
                            },
                            "color": {
                                "value": "#cb6ce6"
                            }
                        }
                    },
                    {
                        "nb_sides": 6,
                        "particles": {
                            "opacity": {
                                "value": 1
                            },
                            "size": {
                                "value": 15,
                                "random": {
                                    "enable": true,
                                    "minimumValue": 8
                                }
                            },
                            "color": {
                                "value": "#38b6ff"
                            }
                        }
                    }
                ],
                "star": []
            },
            "type": "polygon"
        },
        "size": {
            "random": {
                "enable": true
            },
            "value": {
                "min": 1,
                "max": 5
            },
            "animation": {
                "speed": 40,
                "minimumValue": 0.1
            }
        },
        "stroke": {
            "color": {
                "value": "#000000",
                "animation": {
                    "h": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "decay": 0,
                        "sync": true
                    },
                    "s": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "decay": 0,
                        "sync": true
                    },
                    "l": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "decay": 0,
                        "sync": true
                    }
                }
            }
        }
    }
}))