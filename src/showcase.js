const tableTemplate = {
  name: "table demo",
  template: {
    "type": "box",
    "layout": "column",
    "id": 1,
    "contents": [
      {
        "type": "table",
        "id": 2,
        "contents": [
          {
            "type": "trow",
            "id": 5,
            "contents": [
              {
                "type": "tcol",
                "id": 6,
                "width": "16.6%",
                "contents": [
                  {
                    "type": "text",
                    "id": 16,
                    "text": "利用者氏名",
                    "fontStyle": "",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 9,
                "width": "16.6%",
                "contents": [
                  {
                    "type": "textField",
                    "id": 356,
                    "width": "auto",
                    "bindingKey": "patient"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 10,
                "width": "16.6%",
                "contents": [
                  {
                    "type": "text",
                    "id": 178,
                    "text": "訪問者",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 11,
                "width": "16.6%",
                "contents": [
                  {
                    "type": "textField",
                    "id": 357,
                    "width": "auto",
                    "bindingKey": "visitorName"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 12,
                "width": "16.6%",
                "contents": [
                  {
                    "type": "text",
                    "id": 179,
                    "text": "同行者",
                    "width": "",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 13,
                "width": "16.6%",
                "contents": [
                  {
                    "type": "textField",
                    "id": 358,
                    "width": "auto",
                    "bindingKey": "partnerName"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 7,
            "contents": [
              {
                "type": "tcol",
                "id": 8,
                "contents": [
                  {
                    "type": "text",
                    "id": 17,
                    "text": "訪問日時",
                    "textAlign": "center"
                  }
                ],
                "width": "16.6%"
              },
              {
                "type": "tcol",
                "id": 659,
                "colspan": "3",
                "contents": [
                  {
                    "type": "box",
                    "id": 660,
                    "contents": [
                      {
                        "type": "radioGroup",
                        "id": 661,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 662,
                            "label": "定期"
                          },
                          {
                            "type": "radio",
                            "id": 663,
                            "label": "緊急"
                          }
                        ],
                        "dense": true,
                        "direction": "row",
                        "bindingKey": "visitDateRadio"
                      },
                      {
                        "type": "datePicker",
                        "id": 664,
                        "locale": "ja",
                        "style": "standard",
                        "dense": true,
                        "bindingKey": "visitDatePicker",
                        "width": "",
                        "label": "日付の選択"
                      },
                      {
                        "type": "text",
                        "id": 692,
                        "text": "　"
                      },
                      {
                        "type": "timeIntervalSelect",
                        "id": 665,
                        "time": [
                          "時間選択",
                          "00:00",
                          "00:30",
                          "01:00",
                          "01:30",
                          "02:00",
                          "02:30",
                          "03:00",
                          "03:30",
                          "04:00",
                          "04:30",
                          "05:00",
                          "05:30",
                          "06:00",
                          "06:30",
                          "07:00",
                          "07:30",
                          "08:00",
                          "08:30",
                          "09:00",
                          "09:30",
                          "10:00",
                          "10:30",
                          "11:00",
                          "11:30",
                          "12:00",
                          "12:30",
                          "13:00",
                          "13:30",
                          "14:00",
                          "14:30",
                          "15:00",
                          "15:30",
                          "16:00",
                          "16:30",
                          "17:00",
                          "17:30",
                          "18:00",
                          "18:30",
                          "19:00",
                          "19:30",
                          "20:00",
                          "20:30",
                          "21:00",
                          "21:30",
                          "22:00",
                          "22:30",
                          "23:00",
                          "23:30"
                        ],
                        "dense": true,
                        "width": "12%",
                        "bindingKey": "visitTimeInterval"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 15,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 180,
                    "layout": "column",
                    "contents": [
                      {
                        "type": "box",
                        "id": 666,
                        "contents": [
                          {
                            "type": "text",
                            "id": 336,
                            "text": "室温",
                            "flexBasis": "auto"
                          },
                          {
                            "type": "textField",
                            "id": 337,
                            "width": "",
                            "bindingKey": "roomTemperature"
                          },
                          {
                            "type": "text",
                            "id": 341,
                            "text": "℃",
                            "flexBasis": "auto"
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "id": 667,
                        "contents": [
                          {
                            "type": "text",
                            "id": 339,
                            "text": "湿度",
                            "flexBasis": "auto"
                          },
                          {
                            "type": "textField",
                            "id": 340,
                            "width": "",
                            "bindingKey": "roomHumidity"
                          },
                          {
                            "type": "text",
                            "id": 342,
                            "text": "%",
                            "flexBasis": "auto"
                          }
                        ]
                      }
                    ],
                    "wrap": "wrap",
                    "fillHeight": false,
                    "alignItems": "align-start"
                  }
                ],
                "width": "16.6%"
              }
            ]
          }
        ]
      },
      {
        "type": "table",
        "id": 3,
        "contents": [
          {
            "type": "trow",
            "id": 18,
            "contents": [
              {
                "type": "tcol",
                "id": 19,
                "contents": [
                  {
                    "type": "text",
                    "id": 26,
                    "text": "體溫",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 22,
                "contents": [
                  {
                    "type": "text",
                    "id": 185,
                    "textAlign": "center",
                    "text": "脈拍"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 23,
                "contents": [
                  {
                    "type": "text",
                    "id": 186,
                    "text": "血圧",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 24,
                "contents": [
                  {
                    "type": "text",
                    "id": 187,
                    "text": "呼吸",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 25,
                "contents": [
                  {
                    "type": "text",
                    "id": 188,
                    "text": "SpO2",
                    "textAlign": "center"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 20,
            "contents": [
              {
                "type": "tcol",
                "id": 21,
                "contents": [
                  {
                    "type": "textField",
                    "id": 668,
                    "bindingKey": "bodyTemperature"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 27,
                "contents": [
                  {
                    "type": "box",
                    "id": 367,
                    "layout": "column",
                    "contents": [
                      {
                        "type": "textField",
                        "id": 368,
                        "bindingKey": "pulseInput",
                        "width": ""
                      },
                      {
                        "type": "box",
                        "id": 669,
                        "contents": [
                          {
                            "type": "radioGroup",
                            "id": 670,
                            "contents": [
                              {
                                "type": "radio",
                                "id": 671,
                                "label": "整脈"
                              },
                              {
                                "type": "radio",
                                "id": 672,
                                "label": "不整脈"
                              }
                            ],
                            "direction": "row",
                            "dense": true,
                            "bindingKey": "pulseRadio"
                          },
                          {
                            "type": "select",
                            "id": 689,
                            "dense": true,
                            "bindingKey": "pulseSelect",
                            "options": [
                              "選択",
                              "リズム不整",
                              "結滞"
                            ]
                          }
                        ],
                        "layout": "column",
                        "flexGrow": 0,
                        "flexShrink": 0,
                        "fillHeight": true,
                        "alignItems": "",
                        "wrap": true,
                        "justifyContent": "justify-start"
                      },
                      {
                        "type": "box",
                        "id": 649,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 682,
                            "label": "脈圧",
                            "bindingKey": "bloodPressureCheckbox"
                          },
                          {
                            "type": "radioGroup",
                            "id": 656,
                            "contents": [
                              {
                                "type": "radio",
                                "id": 657,
                                "label": "良好"
                              },
                              {
                                "type": "radio",
                                "id": 658,
                                "label": "不良"
                              }
                            ],
                            "dense": true,
                            "direction": "row",
                            "bindingKey": "bloodPressureRadio"
                          }
                        ],
                        "alignItems": "align-end"
                      }
                    ],
                    "justifyContent": "center",
                    "flexGrow": 1
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 28,
                "contents": [
                  {
                    "type": "box",
                    "id": 192,
                    "layout": "column",
                    "contents": [
                      {
                        "type": "box",
                        "id": 193,
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "text",
                            "id": 194,
                            "text": "最高/最低",
                            "flexBasis": "auto"
                          },
                          {
                            "type": "textField",
                            "id": 195,
                            "shrink": "",
                            "flex": "",
                            "flexBasis": "",
                            "width": "15%",
                            "bindingKey": "bloodPressure"
                          }
                        ],
                        "wrap": ""
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 29,
                "contents": [
                  {
                    "type": "textField",
                    "id": 688,
                    "bindingKey": "breatheInput"
                  },
                  {
                    "type": "radioGroup",
                    "id": 675,
                    "contents": [
                      {
                        "type": "radio",
                        "id": 676,
                        "label": "副雑音あり"
                      },
                      {
                        "type": "radio",
                        "id": 677,
                        "label": "なし"
                      }
                    ],
                    "direction": "row",
                    "bindingKey": "breatheNoiseRadio"
                  },
                  {
                    "type": "select",
                    "id": 384,
                    "style": "",
                    "dense": true,
                    "width": "",
                    "flexBasis": "",
                    "flexGrow": 1,
                    "options": [
                      "選択",
                      "連続性高調整副雑音",
                      "連続性低調性副雑音",
                      "断続性粗い副雑音",
                      "断続性細かい副雑音"
                    ],
                    "bindingKey": "breathNoiseSelectionValue"
                  },
                  {
                    "type": "box",
                    "id": 683,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 684,
                        "label": "air入り",
                        "bindingKey": "breatheAir"
                      },
                      {
                        "type": "radioGroup",
                        "id": 685,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 686,
                            "label": "良好"
                          },
                          {
                            "type": "radio",
                            "id": 687,
                            "label": "不良"
                          }
                        ],
                        "direction": "row",
                        "dense": true,
                        "bindingKey": "breatheAirRadio"
                      }
                    ],
                    "alignItems": "align-end"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 30,
                "contents": [
                  {
                    "type": "textField",
                    "id": 674,
                    "bindingKey": "spO2Input"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "table",
        "id": 4,
        "contents": [
          {
            "type": "trow",
            "id": 31,
            "contents": [
              {
                "type": "tcol",
                "id": 32,
                "contents": [
                  {
                    "type": "text",
                    "id": 35,
                    "text": "排尿",
                    "textAlign": "center"
                  }
                ],
                "rowspan": "4",
                "width": "20%"
              },
              {
                "type": "tcol",
                "id": 191,
                "width": "80%",
                "contents": [
                  {
                    "type": "box",
                    "id": 199,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 200,
                        "label": "尿量",
                        "bindingKey": "urineVolume",
                        "grow": 0,
                        "marginRight": "8px"
                      },
                      {
                        "type": "select",
                        "id": 392,
                        "dense": true,
                        "style": "",
                        "flexBasis": "auto",
                        "bindingKey": "urineAmount",
                        "options": [
                          "選択",
                          "<100",
                          "100",
                          "200",
                          "300",
                          "400",
                          "> 400"
                        ],
                        "width": "100px",
                        "flexGrow": 0
                      },
                      {
                        "type": "text",
                        "id": 393,
                        "text": "ml",
                        "margin": "0 8px 0 0"
                      },
                      {
                        "type": "checkbox",
                        "id": 394,
                        "label": "性状",
                        "bindingKey": "urineSituation",
                        "grow": 0,
                        "marginRight": "8px"
                      },
                      {
                        "type": "select",
                        "id": 691,
                        "bindingKey": "urineSituationSelection",
                        "dense": true,
                        "options": [
                          "選択",
                          "クリア",
                          "混濁",
                          "浮遊物"
                        ],
                        "width": "100px",
                        "flexGrow": 0
                      }
                    ],
                    "wrap": "nowrap",
                    "justifyContent": "justify-start",
                    "alignItems": "align-center"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 37,
            "contents": [
              {
                "type": "tcol",
                "id": 38,
                "width": "",
                "contents": [
                  {
                    "type": "box",
                    "id": 398,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 399,
                        "label": "道量",
                        "bindingKey": "urinePathVolume",
                        "grow": 0,
                        "marginRight": "8px"
                      },
                      {
                        "type": "text",
                        "id": 693,
                        "text": "("
                      },
                      {
                        "type": "select",
                        "id": 401,
                        "dense": true,
                        "style": "",
                        "flexBasis": "auto",
                        "options": [
                          "選択",
                          "<100",
                          "100",
                          "200",
                          "300",
                          "400",
                          ">400"
                        ],
                        "bindingKey": "pathSelection",
                        "flexGrow": 0,
                        "width": "100px",
                        "flexShrink": 0
                      },
                      {
                        "type": "text",
                        "id": 402,
                        "text": "ml）　"
                      },
                      {
                        "type": "checkbox",
                        "id": 403,
                        "grow": 0,
                        "marginRight": "8px",
                        "label": "性状",
                        "bindingKey": "urinePathSituation"
                      },
                      {
                        "type": "text",
                        "id": 404,
                        "text": "(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "select",
                        "id": 405,
                        "dense": true,
                        "options": [
                          "選択",
                          "クリア",
                          "混濁",
                          "浮遊物"
                        ],
                        "bindingKey": "pathSituationSelection",
                        "flexGrow": 0,
                        "width": "100px"
                      },
                      {
                        "type": "text",
                        "id": 406,
                        "text": "）"
                      }
                    ],
                    "wrap": "nowrap"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 39,
            "contents": [
              {
                "type": "tcol",
                "id": 40,
                "contents": [
                  {
                    "type": "box",
                    "id": 407,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 408,
                        "bindingKey": "urineTubeCheckbox",
                        "label": "尿管交換",
                        "grow": 0,
                        "marginRight": "8px"
                      },
                      {
                        "type": "text",
                        "id": 409,
                        "text": "(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "checkbox",
                        "id": 410,
                        "grow": 0,
                        "label": "管のサイズ",
                        "bindingKey": "urineTubecheckbox1"
                      },
                      {
                        "type": "select",
                        "id": 412,
                        "dense": true,
                        "width": "100px",
                        "options": [
                          "選択",
                          "12Fr",
                          "14Fr",
                          "16Fr",
                          "18Fr",
                          "20Fr"
                        ],
                        "bindingKey": "tubeSelection",
                        "flexGrow": 0
                      },
                      {
                        "type": "text",
                        "id": 413,
                        "text": "Fr　"
                      },
                      {
                        "type": "checkbox",
                        "id": 414,
                        "bindingKey": "urineTubeWaterCheckbox",
                        "label": "カフ水",
                        "grow": 0
                      },
                      {
                        "type": "select",
                        "id": 416,
                        "dense": true,
                        "width": "100px",
                        "flexBasis": "",
                        "bindingKey": "waterSelection",
                        "options": [
                          "選択",
                          "5ml",
                          "10ml",
                          "15ml",
                          "20ml",
                          "30ml"
                        ],
                        "flexGrow": 0
                      },
                      {
                        "type": "text",
                        "id": 417,
                        "flexBasis": "auto",
                        "text": "ml）"
                      }
                    ],
                    "wrap": "wrap"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 41,
            "contents": [
              {
                "type": "tcol",
                "id": 42,
                "contents": [
                  {
                    "type": "box",
                    "id": 418,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 419,
                        "label": "尿管管理",
                        "bindingKey": "urineTubeExchange1",
                        "grow": 0
                      },
                      {
                        "type": "text",
                        "id": 420,
                        "text": "(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "checkbox",
                        "id": 421,
                        "grow": 0,
                        "bindingKey": "bladderClean"
                      },
                      {
                        "type": "text",
                        "id": 422,
                        "flexBasis": "auto",
                        "text": "膀胱洗浄　"
                      },
                      {
                        "type": "checkbox",
                        "id": 425,
                        "grow": 0,
                        "bindingKey": "bladderClean1",
                        "label": "ミルキング"
                      },
                      {
                        "type": "select",
                        "id": 427,
                        "dense": true,
                        "width": "100px",
                        "flexBasis": "",
                        "options": [
                          "選択",
                          "実施",
                          "指導"
                        ],
                        "bindingKey": "urinaryCleanSelection",
                        "flexGrow": 0
                      },
                      {
                        "type": "checkbox",
                        "id": 428,
                        "bindingKey": "bladderClean2",
                        "label": "パープルシンドローム)",
                        "grow": 0
                      }
                    ],
                    "wrap": "wrap"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "table",
        "id": 43,
        "contents": [
          {
            "type": "trow",
            "id": 44,
            "contents": [
              {
                "type": "tcol",
                "id": 45,
                "contents": [
                  {
                    "type": "text",
                    "id": 46,
                    "text": "排便",
                    "textAlign": "center"
                  }
                ],
                "rowspan": "11",
                "width": "20%"
              },
              {
                "type": "tcol",
                "id": 47,
                "colspan": "2",
                "width": "80%",
                "contents": [
                  {
                    "type": "box",
                    "id": 211,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 213
                      },
                      {
                        "type": "text",
                        "id": 212,
                        "flexBasis": "auto",
                        "text": "腸蠕動音("
                      },
                      {
                        "type": "select",
                        "id": 430,
                        "dense": true,
                        "width": "140px",
                        "bindingKey": "intestinalSound",
                        "flexGrow": 0,
                        "options": [
                          "選択",
                          "聞かれず",
                          "弱め",
                          "良好",
                          "更新"
                        ]
                      },
                      {
                        "type": "text",
                        "id": 431,
                        "flexBasis": "auto",
                        "text": ")"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 48,
            "contents": [
              {
                "type": "tcol",
                "id": 49,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 214,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 215
                      },
                      {
                        "type": "text",
                        "id": 216,
                        "flexBasis": "auto",
                        "text": "排便状況"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 50,
            "contents": [
              {
                "type": "tcol",
                "id": 51,
                "contents": [
                  {
                    "type": "box",
                    "id": 432,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 433
                      },
                      {
                        "type": "text",
                        "id": 434,
                        "text": "日(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "checkbox",
                        "id": 435
                      },
                      {
                        "type": "text",
                        "id": 436,
                        "flexBasis": "auto",
                        "text": "量"
                      },
                      {
                        "type": "select",
                        "id": 437,
                        "dense": true,
                        "width": "140px",
                        "options": [
                          "選択",
                          "無し",
                          "付着",
                          "母指大",
                          "片手半分",
                          "片手",
                          "両手",
                          "両手山盛り"
                        ],
                        "flexGrow": 0,
                        "bindingKey": "daySelection"
                      },
                      {
                        "type": "text",
                        "id": 438,
                        "text": "　"
                      },
                      {
                        "type": "checkbox",
                        "id": 439
                      },
                      {
                        "type": "text",
                        "id": 440,
                        "flexBasis": "auto",
                        "text": "性状"
                      },
                      {
                        "type": "select",
                        "id": 441,
                        "dense": true,
                        "width": "140px",
                        "flexBasis": "",
                        "options": [
                          "選択",
                          "ブリストルスケール①",
                          "ブリストルスケール②",
                          "ブリストルスケール③",
                          "ブリストルスケール④",
                          "ブリストルスケール⑤",
                          "ブリストルスケール⑥",
                          "ブリストルスケール⑦"
                        ],
                        "flexGrow": 0,
                        "bindingKey": "daySituation"
                      },
                      {
                        "type": "text",
                        "id": 442,
                        "flexBasis": "auto",
                        "text": "）"
                      }
                    ],
                    "wrap": "wrap"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 68,
                "contents": [
                  {
                    "type": "box",
                    "id": 443,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 444
                      },
                      {
                        "type": "text",
                        "id": 445,
                        "text": "月(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "checkbox",
                        "id": 446
                      },
                      {
                        "type": "text",
                        "id": 447,
                        "flexBasis": "auto",
                        "text": "量"
                      },
                      {
                        "type": "select",
                        "id": 636,
                        "dense": true,
                        "width": "140px",
                        "options": [
                          "選択",
                          "無し",
                          "付着",
                          "母指大",
                          "片手半分",
                          "片手",
                          "両手",
                          "両手山盛り"
                        ],
                        "flexGrow": 0,
                        "bindingKey": "moonSelection"
                      },
                      {
                        "type": "text",
                        "id": 449,
                        "text": "　"
                      },
                      {
                        "type": "checkbox",
                        "id": 450
                      },
                      {
                        "type": "text",
                        "id": 451,
                        "flexBasis": "auto",
                        "text": "性状"
                      },
                      {
                        "type": "select",
                        "id": 642,
                        "dense": true,
                        "width": "140px",
                        "flexBasis": "",
                        "options": [
                          "選択",
                          "ブリストルスケール①",
                          "ブリストルスケール②",
                          "ブリストルスケール③",
                          "ブリストルスケール④",
                          "ブリストルスケール⑤",
                          "ブリストルスケール⑥",
                          "ブリストルスケール⑦"
                        ],
                        "flexGrow": 0,
                        "bindingKey": "moonSituation"
                      },
                      {
                        "type": "text",
                        "id": 453,
                        "flexBasis": "auto",
                        "text": "）"
                      }
                    ],
                    "wrap": "wrap"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 52,
            "contents": [
              {
                "type": "tcol",
                "id": 53,
                "contents": [
                  {
                    "type": "box",
                    "id": 454,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 455
                      },
                      {
                        "type": "text",
                        "id": 456,
                        "text": "火(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "checkbox",
                        "id": 457
                      },
                      {
                        "type": "text",
                        "id": 458,
                        "flexBasis": "auto",
                        "text": "量"
                      },
                      {
                        "type": "select",
                        "id": 637,
                        "dense": true,
                        "width": "140px",
                        "options": [
                          "選択",
                          "無し",
                          "付着",
                          "母指大",
                          "片手半分",
                          "片手",
                          "両手",
                          "両手山盛り"
                        ],
                        "flexGrow": 0,
                        "bindingKey": "fireSelection"
                      },
                      {
                        "type": "text",
                        "id": 460,
                        "text": "　"
                      },
                      {
                        "type": "checkbox",
                        "id": 461
                      },
                      {
                        "type": "text",
                        "id": 462,
                        "flexBasis": "auto",
                        "text": "性状"
                      },
                      {
                        "type": "select",
                        "id": 643,
                        "dense": true,
                        "width": "140px",
                        "flexBasis": "",
                        "options": [
                          "選択",
                          "ブリストルスケール①",
                          "ブリストルスケール②",
                          "ブリストルスケール③",
                          "ブリストルスケール④",
                          "ブリストルスケール⑤",
                          "ブリストルスケール⑥",
                          "ブリストルスケール⑦"
                        ],
                        "flexGrow": 0,
                        "bindingKey": "fireSituation"
                      },
                      {
                        "type": "text",
                        "id": 464,
                        "flexBasis": "auto",
                        "text": "）"
                      }
                    ],
                    "wrap": "wrap"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 69,
                "contents": [
                  {
                    "type": "box",
                    "id": 465,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 466
                      },
                      {
                        "type": "text",
                        "id": 467,
                        "text": "水(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "checkbox",
                        "id": 468
                      },
                      {
                        "type": "text",
                        "id": 469,
                        "flexBasis": "auto",
                        "text": "量"
                      },
                      {
                        "type": "select",
                        "id": 638,
                        "dense": true,
                        "width": "140px",
                        "options": [
                          "選択",
                          "無し",
                          "付着",
                          "母指大",
                          "片手半分",
                          "片手",
                          "両手",
                          "両手山盛り"
                        ],
                        "flexGrow": 0,
                        "bindingKey": "waterPSelection"
                      },
                      {
                        "type": "text",
                        "id": 471,
                        "text": "　"
                      },
                      {
                        "type": "checkbox",
                        "id": 472
                      },
                      {
                        "type": "text",
                        "id": 473,
                        "flexBasis": "auto",
                        "text": "性状"
                      },
                      {
                        "type": "select",
                        "id": 644,
                        "dense": true,
                        "width": "140px",
                        "flexBasis": "",
                        "options": [
                          "選択",
                          "ブリストルスケール①",
                          "ブリストルスケール②",
                          "ブリストルスケール③",
                          "ブリストルスケール④",
                          "ブリストルスケール⑤",
                          "ブリストルスケール⑥",
                          "ブリストルスケール⑦"
                        ],
                        "flexGrow": 0,
                        "bindingKey": "waterPSituation"
                      },
                      {
                        "type": "text",
                        "id": 475,
                        "flexBasis": "auto",
                        "text": "）"
                      }
                    ],
                    "wrap": "wrap"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 54,
            "contents": [
              {
                "type": "tcol",
                "id": 55,
                "contents": [
                  {
                    "type": "box",
                    "id": 476,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 477
                      },
                      {
                        "type": "text",
                        "id": 478,
                        "text": "木(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "checkbox",
                        "id": 479
                      },
                      {
                        "type": "text",
                        "id": 480,
                        "flexBasis": "auto",
                        "text": "量"
                      },
                      {
                        "type": "select",
                        "id": 639,
                        "dense": true,
                        "width": "140px",
                        "options": [
                          "選択",
                          "無し",
                          "付着",
                          "母指大",
                          "片手半分",
                          "片手",
                          "両手",
                          "両手山盛り"
                        ],
                        "flexGrow": 0,
                        "bindingKey": "woodSelection"
                      },
                      {
                        "type": "text",
                        "id": 482,
                        "text": "　"
                      },
                      {
                        "type": "checkbox",
                        "id": 483
                      },
                      {
                        "type": "text",
                        "id": 484,
                        "flexBasis": "auto",
                        "text": "性状"
                      },
                      {
                        "type": "select",
                        "id": 645,
                        "dense": true,
                        "width": "140px",
                        "flexBasis": "",
                        "options": [
                          "選択",
                          "ブリストルスケール①",
                          "ブリストルスケール②",
                          "ブリストルスケール③",
                          "ブリストルスケール④",
                          "ブリストルスケール⑤",
                          "ブリストルスケール⑥",
                          "ブリストルスケール⑦"
                        ],
                        "flexGrow": 0,
                        "bindingKey": "woodSituation"
                      },
                      {
                        "type": "text",
                        "id": 486,
                        "flexBasis": "auto",
                        "text": "）"
                      }
                    ],
                    "wrap": "wrap"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 70,
                "contents": [
                  {
                    "type": "box",
                    "id": 487,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 488
                      },
                      {
                        "type": "text",
                        "id": 489,
                        "text": "金(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "checkbox",
                        "id": 490
                      },
                      {
                        "type": "text",
                        "id": 491,
                        "flexBasis": "auto",
                        "text": "量"
                      },
                      {
                        "type": "select",
                        "id": 640,
                        "dense": true,
                        "width": "140px",
                        "options": [
                          "選択",
                          "無し",
                          "付着",
                          "母指大",
                          "片手半分",
                          "片手",
                          "両手",
                          "両手山盛り"
                        ],
                        "flexGrow": 0,
                        "bindingKey": "goldSelection"
                      },
                      {
                        "type": "text",
                        "id": 493,
                        "text": "　"
                      },
                      {
                        "type": "checkbox",
                        "id": 494
                      },
                      {
                        "type": "text",
                        "id": 495,
                        "flexBasis": "auto",
                        "text": "性状"
                      },
                      {
                        "type": "select",
                        "id": 646,
                        "dense": true,
                        "width": "140px",
                        "flexBasis": "",
                        "options": [
                          "選択",
                          "ブリストルスケール①",
                          "ブリストルスケール②",
                          "ブリストルスケール③",
                          "ブリストルスケール④",
                          "ブリストルスケール⑤",
                          "ブリストルスケール⑥",
                          "ブリストルスケール⑦"
                        ],
                        "flexGrow": 0,
                        "bindingKey": "goldSituation"
                      },
                      {
                        "type": "text",
                        "id": 497,
                        "flexBasis": "auto",
                        "text": "）"
                      }
                    ],
                    "wrap": "wrap"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 56,
            "contents": [
              {
                "type": "tcol",
                "id": 57,
                "contents": [
                  {
                    "type": "box",
                    "id": 498,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 499
                      },
                      {
                        "type": "text",
                        "id": 500,
                        "text": "土(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "checkbox",
                        "id": 501
                      },
                      {
                        "type": "text",
                        "id": 502,
                        "flexBasis": "auto",
                        "text": "量"
                      },
                      {
                        "type": "select",
                        "id": 641,
                        "dense": true,
                        "width": "140px",
                        "options": [
                          "選択",
                          "無し",
                          "付着",
                          "母指大",
                          "片手半分",
                          "片手",
                          "両手",
                          "両手山盛り"
                        ],
                        "flexGrow": 0,
                        "bindingKey": "terraSelection"
                      },
                      {
                        "type": "text",
                        "id": 504,
                        "text": "　"
                      },
                      {
                        "type": "checkbox",
                        "id": 505
                      },
                      {
                        "type": "text",
                        "id": 506,
                        "flexBasis": "auto",
                        "text": "性状"
                      },
                      {
                        "type": "select",
                        "id": 647,
                        "dense": true,
                        "width": "140px",
                        "flexBasis": "",
                        "options": [
                          "選択",
                          "ブリストルスケール①",
                          "ブリストルスケール②",
                          "ブリストルスケール③",
                          "ブリストルスケール④",
                          "ブリストルスケール⑤",
                          "ブリストルスケール⑥",
                          "ブリストルスケール⑦"
                        ],
                        "flexGrow": 0,
                        "bindingKey": "terraSituation"
                      },
                      {
                        "type": "text",
                        "id": 508,
                        "flexBasis": "auto",
                        "text": "）"
                      }
                    ],
                    "wrap": "wrap"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 71
              }
            ]
          },
          {
            "type": "trow",
            "id": 58,
            "contents": [
              {
                "type": "tcol",
                "id": 59,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 509,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 510
                      },
                      {
                        "type": "text",
                        "id": 511,
                        "text": "指診(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "radioGroup",
                        "id": 520
                      },
                      {
                        "type": "text",
                        "id": 519,
                        "flexBasis": "auto",
                        "text": "）"
                      }
                    ],
                    "wrap": "wrap"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 60,
            "contents": [
              {
                "type": "tcol",
                "id": 61,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 521,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 522
                      },
                      {
                        "type": "text",
                        "id": 523,
                        "text": "浣腸(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "radioGroup",
                        "id": 524
                      },
                      {
                        "type": "text",
                        "id": 525,
                        "flexBasis": "auto",
                        "text": "）"
                      }
                    ],
                    "wrap": "wrap"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 62,
            "contents": [
              {
                "type": "tcol",
                "id": 63,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 526,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 527
                      },
                      {
                        "type": "text",
                        "id": 528,
                        "text": "摘便実施(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "checkbox",
                        "id": 529
                      },
                      {
                        "type": "text",
                        "id": 530,
                        "flexBasis": "auto",
                        "text": "量"
                      },
                      {
                        "type": "select",
                        "id": 531,
                        "dense": true,
                        "width": "140px",
                        "flexGrow": 0,
                        "options": []
                      },
                      {
                        "type": "text",
                        "id": 532,
                        "text": "　"
                      },
                      {
                        "type": "checkbox",
                        "id": 533
                      },
                      {
                        "type": "text",
                        "id": 534,
                        "flexBasis": "auto",
                        "text": "性状"
                      },
                      {
                        "type": "select",
                        "id": 535,
                        "dense": true,
                        "width": "140px",
                        "flexBasis": "",
                        "flexGrow": 0
                      },
                      {
                        "type": "text",
                        "id": 536,
                        "flexBasis": "auto",
                        "text": "）"
                      }
                    ],
                    "wrap": "wrap"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 64,
            "contents": [
              {
                "type": "tcol",
                "id": 65,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 242,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 250
                      },
                      {
                        "type": "text",
                        "id": 251,
                        "flexBasis": "auto",
                        "text": "摘便未実施"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 66,
            "contents": [
              {
                "type": "tcol",
                "id": 67,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 243,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 252
                      },
                      {
                        "type": "text",
                        "id": 253,
                        "flexBasis": "auto",
                        "text": "腹部マッサージ"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 72,
            "contents": [
              {
                "type": "tcol",
                "id": 73,
                "contents": [
                  {
                    "type": "text",
                    "id": 75,
                    "text": "オムツ交換",
                    "textAlign": "center"
                  }
                ],
                "width": ""
              },
              {
                "type": "tcol",
                "id": 74,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 254,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 255
                      },
                      {
                        "type": "text",
                        "id": 256,
                        "flexBasis": "auto",
                        "text": "オムツ"
                      },
                      {
                        "type": "checkbox",
                        "id": 257
                      },
                      {
                        "type": "text",
                        "id": 258,
                        "flexBasis": "auto",
                        "text": "パット"
                      }
                    ],
                    "layout": "horizontal"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 76,
            "contents": [
              {
                "type": "tcol",
                "id": 80,
                "rowspan": "",
                "contents": [
                  {
                    "type": "text",
                    "id": 89,
                    "text": "清潔ケア・指導",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 81,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 259,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 260
                      },
                      {
                        "type": "text",
                        "id": 261,
                        "flexBasis": "auto",
                        "text": "入浴"
                      },
                      {
                        "type": "checkbox",
                        "id": 262
                      },
                      {
                        "type": "text",
                        "id": 263,
                        "flexBasis": "auto",
                        "text": "シャワー浴"
                      },
                      {
                        "type": "checkbox",
                        "id": 264
                      },
                      {
                        "type": "text",
                        "id": 265,
                        "flexBasis": "auto",
                        "text": "部分浴"
                      },
                      {
                        "type": "checkbox",
                        "id": 537
                      },
                      {
                        "type": "text",
                        "id": 538,
                        "flexBasis": "auto",
                        "text": "洗髪("
                      },
                      {
                        "type": "select",
                        "id": 539,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
                      },
                      {
                        "type": "text",
                        "id": 540,
                        "flexBasis": "auto",
                        "text": ")"
                      },
                      {
                        "type": "checkbox",
                        "id": 554
                      },
                      {
                        "type": "text",
                        "id": 555,
                        "flexBasis": "auto",
                        "text": "清拭("
                      },
                      {
                        "type": "radioGroup",
                        "id": 556
                      },
                      {
                        "type": "select",
                        "id": 557,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
                      },
                      {
                        "type": "text",
                        "id": 558,
                        "flexBasis": "auto",
                        "text": ")"
                      }
                    ],
                    "layout": "horizontal",
                    "wrap": "wrap"
                  },
                  {
                    "type": "box",
                    "id": 541,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 559
                      },
                      {
                        "type": "text",
                        "id": 560,
                        "flexBasis": "auto",
                        "text": "爪切り("
                      },
                      {
                        "type": "checkbox",
                        "id": 562
                      },
                      {
                        "type": "text",
                        "id": 561,
                        "flexBasis": "auto",
                        "text": "手("
                      },
                      {
                        "type": "select",
                        "id": 563,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
                      },
                      {
                        "type": "text",
                        "id": 564,
                        "flexBasis": "auto",
                        "text": ")"
                      },
                      {
                        "type": "text",
                        "id": 565,
                        "text": "　"
                      },
                      {
                        "type": "checkbox",
                        "id": 566
                      },
                      {
                        "type": "text",
                        "id": 567,
                        "flexBasis": "auto",
                        "text": "足("
                      },
                      {
                        "type": "select",
                        "id": 568,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
                      },
                      {
                        "type": "text",
                        "id": 569,
                        "flexBasis": "auto",
                        "text": ")"
                      },
                      {
                        "type": "text",
                        "id": 570,
                        "text": "　"
                      },
                      {
                        "type": "checkbox",
                        "id": 571
                      },
                      {
                        "type": "text",
                        "id": 572,
                        "flexBasis": "auto",
                        "text": "耳垢除去　"
                      },
                      {
                        "type": "checkbox",
                        "id": 573
                      },
                      {
                        "type": "text",
                        "id": 574,
                        "flexBasis": "auto",
                        "text": "髭剃り　"
                      }
                    ],
                    "layout": "horizontal",
                    "wrap": "wrap"
                  },
                  {
                    "type": "box",
                    "id": 575,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 576
                      },
                      {
                        "type": "text",
                        "id": 577,
                        "flexBasis": "auto",
                        "text": "口腔ケア("
                      },
                      {
                        "type": "checkbox",
                        "id": 578
                      },
                      {
                        "type": "text",
                        "id": 579,
                        "flexBasis": "auto",
                        "text": "歯磨き"
                      },
                      {
                        "type": "checkbox",
                        "id": 580
                      },
                      {
                        "type": "text",
                        "id": 581,
                        "flexBasis": "auto",
                        "text": "うがい"
                      },
                      {
                        "type": "checkbox",
                        "id": 582
                      },
                      {
                        "type": "text",
                        "id": 583,
                        "flexBasis": "auto",
                        "text": "拭き取り("
                      },
                      {
                        "type": "checkbox",
                        "id": 584
                      },
                      {
                        "type": "text",
                        "id": 585,
                        "flexBasis": "auto",
                        "text": "実施"
                      },
                      {
                        "type": "checkbox",
                        "id": 586
                      },
                      {
                        "type": "text",
                        "id": 587,
                        "flexBasis": "auto",
                        "text": "指導))"
                      }
                    ],
                    "layout": "horizontal",
                    "wrap": "wrap"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 85,
            "contents": [
              {
                "type": "tcol",
                "id": 90,
                "contents": [
                  {
                    "type": "text",
                    "id": 92,
                    "text": "衣生活のケア・指導",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 91,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 266,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 267
                      },
                      {
                        "type": "text",
                        "id": 268,
                        "flexBasis": "auto",
                        "text": "衣服調整  "
                      },
                      {
                        "type": "text",
                        "id": 588,
                        "flexBasis": "auto",
                        "text": "　"
                      },
                      {
                        "type": "checkbox",
                        "id": 269
                      },
                      {
                        "type": "text",
                        "id": 270,
                        "flexBasis": "auto",
                        "text": "更衣("
                      },
                      {
                        "type": "select",
                        "id": 589,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
                      },
                      {
                        "type": "text",
                        "id": 590,
                        "flexBasis": "auto",
                        "text": ")　"
                      },
                      {
                        "type": "checkbox",
                        "id": 591
                      },
                      {
                        "type": "text",
                        "id": 592,
                        "flexBasis": "auto",
                        "text": "シーツ交換("
                      },
                      {
                        "type": "select",
                        "id": 593,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
                      },
                      {
                        "type": "text",
                        "id": 594,
                        "flexBasis": "auto",
                        "text": ")　"
                      }
                    ],
                    "layout": "horizontal",
                    "wrap": "wrap"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 86,
            "contents": [
              {
                "type": "tcol",
                "id": 93,
                "contents": [
                  {
                    "type": "text",
                    "id": 95,
                    "text": "食事栄養のケア・指導",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 94,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 271,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 272
                      },
                      {
                        "type": "text",
                        "id": 273,
                        "flexBasis": "auto",
                        "text": "栄養指導　"
                      },
                      {
                        "type": "checkbox",
                        "id": 274
                      },
                      {
                        "type": "text",
                        "id": 275,
                        "flexBasis": "auto",
                        "text": "食事　"
                      },
                      {
                        "type": "checkbox",
                        "id": 276
                      },
                      {
                        "type": "text",
                        "id": 277,
                        "flexBasis": "auto",
                        "text": "飲水"
                      }
                    ],
                    "layout": "horizontal"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 87,
            "contents": [
              {
                "type": "tcol",
                "id": 98,
                "rowspan": "4",
                "contents": [
                  {
                    "type": "text",
                    "id": 103,
                    "text": "皮膚処置",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 99,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 278,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 282
                      },
                      {
                        "type": "text",
                        "id": 283,
                        "flexBasis": "auto",
                        "text": "褥瘡予防"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 88,
            "contents": [
              {
                "type": "tcol",
                "id": 100,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 279,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 284
                      },
                      {
                        "type": "text",
                        "id": 285,
                        "flexBasis": "auto",
                        "text": "褥瘡処置（部位"
                      },
                      {
                        "type": "select",
                        "id": 595,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
                      },
                      {
                        "type": "text",
                        "id": 596,
                        "flexBasis": "auto",
                        "text": "薬剤"
                      },
                      {
                        "type": "select",
                        "id": 597,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
                      },
                      {
                        "type": "text",
                        "id": 598,
                        "flexBasis": "auto",
                        "text": "方法"
                      },
                      {
                        "type": "select",
                        "id": 599,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
                      },
                      {
                        "type": "text",
                        "id": 600,
                        "flexBasis": "auto",
                        "text": ")"
                      }
                    ],
                    "wrap": "wrap"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 96,
            "contents": [
              {
                "type": "tcol",
                "id": 101,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 601,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 602
                      },
                      {
                        "type": "text",
                        "id": 603,
                        "flexBasis": "auto",
                        "text": "創処置（部位"
                      },
                      {
                        "type": "select",
                        "id": 604,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
                      },
                      {
                        "type": "text",
                        "id": 605,
                        "flexBasis": "auto",
                        "text": "薬剤"
                      },
                      {
                        "type": "select",
                        "id": 606,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
                      },
                      {
                        "type": "text",
                        "id": 607,
                        "flexBasis": "auto",
                        "text": "方法"
                      },
                      {
                        "type": "select",
                        "id": 608,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
                      },
                      {
                        "type": "text",
                        "id": 609,
                        "flexBasis": "auto",
                        "text": ")"
                      }
                    ],
                    "wrap": "wrap"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 97,
            "contents": [
              {
                "type": "tcol",
                "id": 102,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 610,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 611
                      },
                      {
                        "type": "text",
                        "id": 612,
                        "flexBasis": "auto",
                        "text": "外用薬塗布（薬剤"
                      },
                      {
                        "type": "select",
                        "id": 613,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
                      },
                      {
                        "type": "text",
                        "id": 618,
                        "flexBasis": "auto",
                        "text": ")"
                      }
                    ],
                    "wrap": "wrap"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 104,
            "contents": [
              {
                "type": "tcol",
                "id": 108,
                "contents": [
                  {
                    "type": "text",
                    "id": 110,
                    "text": "薬の管理・指導",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 109,
                "rowspan": "",
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 290,
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "box",
                        "id": 291,
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 294
                          },
                          {
                            "type": "text",
                            "id": 295,
                            "flexBasis": "auto",
                            "text": "残薬確認 "
                          },
                          {
                            "type": "checkbox",
                            "id": 619
                          },
                          {
                            "type": "text",
                            "id": 620,
                            "flexBasis": "auto",
                            "text": "服薬介助"
                          },
                          {
                            "type": "checkbox",
                            "id": 621
                          },
                          {
                            "type": "text",
                            "id": 622,
                            "flexBasis": "auto",
                            "text": "内服セット("
                          },
                          {
                            "type": "text",
                            "id": 623,
                            "flexBasis": "auto",
                            "text": "期間"
                          },
                          {
                            "type": "select",
                            "id": 624,
                            "dense": true,
                            "width": "50px",
                            "flexBasis": ""
                          },
                          {
                            "type": "text",
                            "id": 625,
                            "flexBasis": "auto",
                            "text": ")　"
                          },
                          {
                            "type": "checkbox",
                            "id": 626
                          },
                          {
                            "type": "text",
                            "id": 627,
                            "flexBasis": "auto",
                            "text": "点眼"
                          },
                          {
                            "type": "checkbox",
                            "id": 628
                          },
                          {
                            "type": "text",
                            "id": 629,
                            "flexBasis": "auto",
                            "text": "吸入("
                          },
                          {
                            "type": "select",
                            "id": 630,
                            "dense": true,
                            "width": "50px",
                            "flexBasis": ""
                          },
                          {
                            "type": "text",
                            "id": 631,
                            "flexBasis": "auto",
                            "text": ")　"
                          },
                          {
                            "type": "checkbox",
                            "id": 632
                          },
                          {
                            "type": "text",
                            "id": 633,
                            "flexBasis": "auto",
                            "text": "座薬 "
                          }
                        ],
                        "wrap": "wrap"
                      },
                      {
                        "type": "box",
                        "id": 292,
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 296
                          },
                          {
                            "type": "text",
                            "id": 297,
                            "flexBasis": "auto",
                            "text": "点滴"
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "id": 293,
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 298
                          },
                          {
                            "type": "text",
                            "id": 299,
                            "flexBasis": "auto",
                            "text": "注射"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 105,
            "contents": [
              {
                "type": "tcol",
                "id": 111,
                "contents": [
                  {
                    "type": "text",
                    "id": 113,
                    "text": "リハビリテーション",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 112,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 301,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 305
                      },
                      {
                        "type": "text",
                        "id": 306,
                        "flexBasis": "auto",
                        "text": "関節可動域"
                      },
                      {
                        "type": "checkbox",
                        "id": 351
                      },
                      {
                        "type": "text",
                        "id": 345,
                        "flexBasis": "auto",
                        "text": "関節可動域"
                      },
                      {
                        "type": "checkbox",
                        "id": 352
                      },
                      {
                        "type": "text",
                        "id": 346,
                        "flexBasis": "auto",
                        "text": "関節可動域"
                      },
                      {
                        "type": "checkbox",
                        "id": 353
                      },
                      {
                        "type": "text",
                        "id": 347,
                        "flexBasis": "auto",
                        "text": "関節可動域"
                      },
                      {
                        "type": "checkbox",
                        "id": 354
                      },
                      {
                        "type": "text",
                        "id": 348,
                        "flexBasis": "auto",
                        "text": "関節可動域"
                      },
                      {
                        "type": "checkbox",
                        "id": 355
                      },
                      {
                        "type": "text",
                        "id": 349,
                        "flexBasis": "auto",
                        "text": "関節可動域"
                      }
                    ],
                    "wrap": "wrap"
                  },
                  {
                    "type": "box",
                    "id": 302,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 307
                      },
                      {
                        "type": "text",
                        "id": 308,
                        "flexBasis": "auto",
                        "text": "座位"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "id": 303,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 309
                      },
                      {
                        "type": "text",
                        "id": 310,
                        "flexBasis": "auto",
                        "text": "呼吸リハ"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "id": 304,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 311
                      },
                      {
                        "type": "text",
                        "id": 312,
                        "flexBasis": "auto",
                        "text": "口腔リハ"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 106,
            "contents": [
              {
                "type": "tcol",
                "id": 114,
                "contents": [
                  {
                    "type": "text",
                    "id": 116,
                    "text": "排痰ケア",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 115,
                "colspan": "2"
              }
            ]
          },
          {
            "type": "trow",
            "id": 107,
            "contents": [
              {
                "type": "tcol",
                "id": 117,
                "contents": [
                  {
                    "type": "text",
                    "id": 119,
                    "text": "医療処置",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 118,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 313,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 317
                      },
                      {
                        "type": "text",
                        "id": 318,
                        "flexBasis": "auto",
                        "text": "酸素療法"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "id": 314,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 319
                      },
                      {
                        "type": "text",
                        "id": 320,
                        "flexBasis": "auto",
                        "text": "胃瘻"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "id": 315,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 321
                      },
                      {
                        "type": "text",
                        "id": 322,
                        "flexBasis": "auto",
                        "text": "点滴"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "id": 316,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 323
                      },
                      {
                        "type": "text",
                        "id": 324,
                        "flexBasis": "auto",
                        "text": "その他"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 120,
            "contents": [
              {
                "type": "tcol",
                "id": 122,
                "contents": [
                  {
                    "type": "text",
                    "id": 129,
                    "text": "睡眠のケア・指導",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 123,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 325,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 326
                      },
                      {
                        "type": "text",
                        "id": 327,
                        "flexBasis": "auto",
                        "text": "入眠を促すマッサージ"
                      },
                      {
                        "type": "checkbox",
                        "id": 328
                      },
                      {
                        "type": "text",
                        "id": 329,
                        "flexBasis": "auto",
                        "text": "生活指導"
                      },
                      {
                        "type": "checkbox",
                        "id": 330
                      },
                      {
                        "type": "text",
                        "id": 331,
                        "flexBasis": "auto",
                        "text": "足浴"
                      }
                    ],
                    "wrap": "wrap"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 121,
            "contents": [
              {
                "type": "tcol",
                "id": 124,
                "contents": [
                  {
                    "type": "text",
                    "id": 130,
                    "text": "体重",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 125,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 332,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "textField",
                        "id": 333
                      },
                      {
                        "type": "text",
                        "id": 334,
                        "flexBasis": "auto",
                        "text": "kg"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 126,
            "contents": [
              {
                "type": "tcol",
                "id": 127,
                "contents": [
                  {
                    "type": "text",
                    "id": 131,
                    "text": "留意点",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 128,
                "colspan": "2",
                "contents": [
                  {
                    "type": "textarea",
                    "id": 300
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 132,
            "contents": [
              {
                "type": "tcol",
                "id": 133,
                "contents": [
                  {
                    "type": "text",
                    "id": 135,
                    "text": "次回訪問予定日",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 134,
                "colspan": "2"
              }
            ]
          }
        ]
      },
      {
        "type": "table",
        "id": 136,
        "contents": [
          {
            "type": "trow",
            "id": 137,
            "contents": [
              {
                "type": "tcol",
                "id": 141,
                "contents": [
                  {
                    "type": "text",
                    "id": 144,
                    "text": "実績",
                    "textAlign": "center"
                  }
                ],
                "width": "15%"
              },
              {
                "type": "tcol",
                "id": 142,
                "width": "25%"
              },
              {
                "type": "tcol",
                "id": 143,
                "width": "60%"
              }
            ]
          },
          {
            "type": "trow",
            "id": 138,
            "contents": [
              {
                "type": "tcol",
                "id": 145,
                "contents": []
              },
              {
                "type": "tcol",
                "id": 146,
                "contents": [
                  {
                    "type": "text",
                    "id": 148,
                    "text": "精神基本療養費",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 147
              }
            ]
          },
          {
            "type": "trow",
            "id": 139,
            "contents": [
              {
                "type": "tcol",
                "id": 149,
                "contents": [
                  {
                    "type": "text",
                    "id": 152,
                    "text": "加算",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 150
              },
              {
                "type": "tcol",
                "id": 151
              }
            ]
          },
          {
            "type": "trow",
            "id": 140,
            "contents": [
              {
                "type": "tcol",
                "id": 158
              },
              {
                "type": "tcol",
                "id": 159,
                "contents": [
                  {
                    "type": "text",
                    "id": 161,
                    "text": "特別管理加算",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 160
              }
            ]
          },
          {
            "type": "trow",
            "id": 153,
            "contents": [
              {
                "type": "tcol",
                "id": 162
              },
              {
                "type": "tcol",
                "id": 163
              },
              {
                "type": "tcol",
                "id": 164
              }
            ]
          },
          {
            "type": "trow",
            "id": 154,
            "contents": [
              {
                "type": "tcol",
                "id": 165,
                "contents": [
                  {
                    "type": "text",
                    "id": 168,
                    "text": "保険外",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 166,
                "colspan": "2"
              }
            ]
          }
        ]
      },
      {
        "type": "table",
        "id": 169,
        "contents": [
          {
            "type": "trow",
            "id": 170,
            "contents": [
              {
                "type": "tcol",
                "id": 173
              },
              {
                "type": "tcol",
                "id": 174
              }
            ]
          },
          {
            "type": "trow",
            "id": 171,
            "contents": [
              {
                "type": "tcol",
                "id": 175,
                "colspan": "2",
                "contents": [
                  {
                    "type": "text",
                    "id": 176,
                    "text": "経過記録"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 172,
            "contents": [
              {
                "type": "tcol",
                "id": 177,
                "colspan": "2"
              }
            ]
          }
        ]
      },
      {
        "type": "imageUploader",
        "id": 361
      }
    ]
  },
  bindingData: {
    "pulseInput": null,
    "pulsePressure": null,
    "pulsePressureRadio": "良好",
    "pulseSelection": "選択",
    "bloodPressureLowValue": null,
    "breatheInputValue": null,
    "breathNoiseRadioValue": null,
    "breathNoiseSelectionValue": "選択",
    "airCheckbox": null,
    "airRadio": "良好",
    "spO2Value": null,
    "urineAmount": "選択",
    "pathSelection": "選択",
    "pathSituationSelection": "選択",
    "water1234": null,
    "waterSelection": "選択",
    "tubeSelection": "選択",
    "urinaryCleanSelection": "選択",
    "intestinalSound": "選択",
    "daySelection": "選択",
    "daySituation": "選択",
    "moonSelection": "選択",
    "moonSituation": "選択",
    "fireSelection": "選択",
    "fireSituation": "選択",
    "waterPSelection": "選択",
    "waterPSituation": "選択",
    "woodSelection": "選択",
    "woodSituation": "選択",
    "goldSelection": "選択",
    "goldSituation": "選択",
    "terraSelection": "選択",
    "terraSituation": "選択",
    "visitorName": null,
    "partnerName": null,
    "visitDateRadio": "定期",
    "visitDatePicker": null,
    "visitTimeInterval": "時間選択",
    "roomTemperature": null,
    "roomHumidity": null,
    "bodyTemperature": null,
    "pulseSelect": "選択",
    "bloodPressureRadio": "良好",
    "pulseRadio": "整脈",
    "breatheInput": null,
    "breatheNoiseRadio": "副雑音あり",
    "breatheAir": null,
    "breatheAirRadio": "良好",
    "spO2Input": null,
    "urineVolume": null,
    "urinePathVolume": null,
    "urinePathSituation": null,
    "urineTubeCheckbox": null,
    "urineTubecheckbox1": null,
    "urineTubeWaterCheckbox": null,
    "urineTubeExchange1": null,
    "bladderClean": null,
    "bladderClean1": null,
    "bladderClean2": null,
    "urineSituation": null,
    "urineSituationSelection": "選択",
    "patient": null,
    "bloodPressureCheckbox": null,
    "bloodPressure": null
  },
};

const diagnosisTemplate = {
  name: "diagnosis",
  template: {
    type: "box",
    layout: "vertical",
    id: 1,
    contents: [
      {
        type: "box",
        layout: "horizontal",
        alignItems: "center",
        id: 2,
        contents: [
          {
            type: "text",
            text: "Joints(MET)",
            flex: 1,
            align: "center",
            fontWeight: "bold",
            fontSize: "18px",
            id: 3,
            textAlign: "center",
          },
          {
            type: "box",
            layout: "vertical",
            flex: 4,
            id: 4,
            contents: [
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                id: 5,
                contents: [
                  {
                    type: "checkbox",
                    bindingKey: "jointsSgCheckbox",
                    id: 6,
                  },
                  {
                    type: "text",
                    text: "SG:Rt SG ER+EN",
                    flexBasis: "auto",
                    id: 7,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                alignItems: "center",
                id: 8,
                contents: [
                  {
                    type: "checkbox",
                    bindingKey: "jointsDCheckbox",
                    id: 9,
                  },
                  {
                    type: "text",
                    text: "D+: Tx group dysfn 1st rib on the left +",
                    flexBasis: "auto",
                    id: 10,
                  },
                  {
                    type: "textField",
                    value: "D+",
                    flexBasis: "auto",
                    width: "140px",
                    bindingKey: "jointsD",
                    id: 11,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                alignItems: "center",
                id: 12,
                contents: [
                  {
                    type: "checkbox",
                    bindingKey: "jointsMtRibCheckbox",
                    id: 13,
                  },
                  {
                    type: "text",
                    text: "MT/rib:",
                    flexBasis: "auto",
                    id: 14,
                  },
                  {
                    type: "textField",
                    value: "MT/rib",
                    flexBasis: "auto",
                    width: "140px",
                    bindingKey: "jointsMtRib",
                    id: 15,
                  },
                  {
                    type: "text",
                    text: "3D derot/thrust",
                    flexBasis: "auto",
                    id: 16,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                id: 17,
                contents: [
                  {
                    type: "checkbox",
                    bindingKey: "jointsLsjCheckbox",
                    id: 18,
                  },
                  {
                    type: "text",
                    text: "LSJ: derotation",
                    flexBasis: "auto",
                    id: 19,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                alignItems: "center",
                id: 20,
                contents: [
                  {
                    type: "checkbox",
                    bindingKey: "jointsPdCheckbox",
                    id: 21,
                  },
                  {
                    type: "text",
                    text: "Pelvic Dysfn:",
                    flexBasis: "auto",
                    id: 22,
                  },
                  {
                    type: "textField",
                    value: "PelvicDysfn",
                    flexBasis: "auto",
                    width: "140px",
                    bindingKey: "jointsPd",
                    id: 23,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "separator",
        marginAll: "16px",
        id: 24,
      },
      {
        type: "box",
        layout: "horizontal",
        alignItems: "center",
        id: 25,
        contents: [
          {
            type: "text",
            text: "Soft Tissue",
            flex: 1,
            align: "center",
            fontWeight: "bold",
            fontSize: "18px",
            id: 26,
            textAlign: "center",
          },
          {
            type: "box",
            layout: "vertical",
            flex: 4,
            id: 27,
            contents: [
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                id: 28,
                contents: [
                  {
                    type: "checkbox",
                    bindingKey: "softTissueOpenUpLigCheckbox",
                    id: 29,
                  },
                  {
                    type: "text",
                    text: "Lt T/L side: open up lig. & intercostrals",
                    flexBasis: "auto",
                    id: 30,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                id: 31,
                contents: [
                  {
                    type: "checkbox",
                    bindingKey: "softTissueEoCheckbox",
                    id: 32,
                  },
                  {
                    type: "text",
                    text: "Lt T/L side: open up EO/IO/QL",
                    flexBasis: "auto",
                    id: 33,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  bindingData: {
    jointsD: "",
    jointsMtRib: "",
    jointsPd: "",
    jointsSgCheckbox: false,
    jointsDCheckbox: false,
    jointsMtRibCheckbox: false,
    jointsLsjCheckbox: false,
    jointsPdCheckbox: false,
    softTissueOpenUpLigCheckbox: false,
    softTissueEoCheckbox: false,
  },
};

const textFieldTemplate = {
  name: "textField Demo",
  template: {
    type: "box",
    layout: "horizontal",
    id: 1,
    contents: [
      {
        type: "text",
        id: 3,
        flexBasis: "auto",
      },
      {
        type: "textField",
        flexBasis: "auto",
        width: "180px",
        id: 2,
      },
    ],
  },
  bindingData: {},
};

const newElementTemplate = {
  name: "new element template",
  template: {
    type: "box",
    id: 0,
    contents: [
      {
        type: "box",
        id: 1,
        contents: [
          {
            type: "box",
            id: 2,
            contents: [
              {
                type: "box",
                id: 3,
                contents: [
                  {
                    type: "radioGroup",
                    id: 4,
                    contents: [
                      {
                        type: "radio",
                        id: 5,
                        label: "radio item 1",
                        color: "red",
                      },
                      {
                        type: "radio",
                        id: 6,
                        label: "radio item 2",
                        color: "red",
                      },
                      {
                        type: "radio",
                        id: 7,
                        label: "radio item 3",
                        color: "blue",
                      },
                      {
                        type: "radio",
                        id: 8,
                        label: "radio item 4",
                        color: "purple",
                      },
                    ],
                    bindingKey: "radioGroup",
                    label: "this is radio group label",
                    dense: true,
                  },
                  {
                    type: "separator",
                    id: 9,
                    marginTop: "20px",
                    marginBottom: "20px",
                  },
                ],
                layout: "column",
              },
              {
                type: "box",
                id: 10,
                layout: "column",
                contents: [
                  {
                    type: "select",
                    id: 11,
                    options: [
                      "this-is-select",
                      "this-is-textarea",
                      "this-is-text-field",
                    ],
                    style: "outlined",
                    dense: true,
                    bindingKey: "select",
                  },
                  {
                    type: "separator",
                    id: 12,
                    marginTop: "20px",
                    marginBottom: "20px",
                  },
                ],
              },
              {
                type: "box",
                id: 13,
                layout: "column",
                contents: [
                  {
                    type: "multiSelect",
                    id: 14,
                    dense: true,
                    style: "outlined",
                    bindingKey: "multiSelect",
                    options: ["this", "is", "mutil", "select"],
                  },
                  {
                    type: "separator",
                    id: 15,
                    marginTop: "20px",
                    marginBottom: "20px",
                  },
                ],
              },
              {
                type: "box",
                id: 16,
                layout: "column",
                contents: [
                  {
                    type: "datePicker",
                    id: 17,
                    disabled: false,
                    dense: true,
                    style: "outlined",
                    bindingKey: "datePicker",
                  },
                  {
                    type: "separator",
                    id: 18,
                    marginTop: "20px",
                    marginBottom: "20px",
                  },
                ],
              },
              {
                type: "box",
                id: 19,
                layout: "column",
                contents: [
                  {
                    type: "timeIntervalSelect",
                    id: 20,
                    time: [
                      "21:00",
                      "21:30",
                      "22:00",
                      "22:30",
                      "23:00",
                      "23:30",
                    ],
                    bindingKey: "timeInterval",
                    style: "outlined",
                    dense: true,
                    multiple: "",
                  },
                  {
                    type: "separator",
                    id: 21,
                    marginTop: "20px",
                    marginBottom: "20px",
                  },
                ],
              },
              {
                type: "box",
                id: 22,
                layout: "column",
                contents: [
                  {
                    type: "textarea",
                    id: 23,
                    bindingKey: "textarea",
                    rows: "3",
                    autoGrow: false,
                    noResize: false,
                    style: "outlined",
                    dense: true,
                  },
                  {
                    type: "separator",
                    id: 24,
                    marginTop: "20px",
                    marginBottom: "20px",
                  },
                ],
              },
              {
                type: "box",
                id: 25,
                layout: "column",
                contents: [
                  {
                    type: "chipGroup",
                    id: 26,
                    contents: [
                      {
                        type: "chip",
                        id: 27,
                        color: "red",
                        value: "small",
                        filter: true,
                        outlined: true,
                        textColor: "",
                        size: "small",
                      },
                      {
                        type: "chip",
                        id: 28,
                        color: "",
                        value: "normal",
                        filter: false,
                        outlined: "",
                      },
                      {
                        type: "chip",
                        id: 29,
                        color: "red",
                        value: "tile ",
                        outlined: false,
                        filter: true,
                        textColor: "white",
                        tile: true,
                        size: "normal",
                      },
                      {
                        type: "chip",
                        id: 30,
                        color: "blue",
                        value: "blue-outlined",
                        filter: true,
                        outlined: true,
                      },
                    ],
                    color: "primary",
                    bindingKey: "chipGroup",
                    multiple: true,
                  },
                  {
                    type: "separator",
                    id: 31,
                    marginTop: "20px",
                    marginBottom: "20px",
                  },
                ],
              },
              {
                type: "box",
                id: 32,
                contents: [
                  {
                    type: "box",
                    id: 33,
                    contents: [
                      {
                        type: "icon",
                        id: 34,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 35,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 36,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 37,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 38,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 39,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 40,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 41,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 42,
                        contents: [],
                      },
                      {
                        type: "icon",
                        id: 43,
                        contents: [],
                      },
                    ],
                    layout: "",
                  },
                ],
                layout: "column",
              },
            ],
            layout: "column",
            flexGrow: 1,
          },
        ],
        layout: "",
        wrap: "wrap",
        flexGrow: 1,
      },
    ],
    layout: "",
    flex: "1",
    flexBasis: "100%",
    wrap: "wrap",
  },
  bindingData: {
    select: "this-is-select",
    timeInterval: ["21:30", "22:00", "22:30", "23:00", "23:30", "21:00"],
    datePicker: "2020-10-02",
    multiSelect: ["zxcv", "asdf", "qwer", "this", "is", "mutil", "select"],
    chipGroup: null,
    textarea: "Eureka!!\nthis is textarea!\n",
    radioGroup: "radio item 4",
  },
};

export const templates = {
  tableTemplate,
  diagnosisTemplate,
  textFieldTemplate,
  newElementTemplate,
};

export const defaultBindingData = tableTemplate.bindingData;
export const defaultTemplate = tableTemplate.template;
