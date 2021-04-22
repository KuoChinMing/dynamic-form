const tableTemplate = {
  name: "table demo",
  template: {
    "type": "box",
    "layout": "column",
    "id": 0,
    "contents": [
      {
        "type": "table",
        "id": 1,
        "contents": [
          {
            "type": "trow",
            "id": 2,
            "contents": [
              {
                "type": "tcol",
                "id": 3,
                "width": "16.6%",
                "contents": [
                  {
                    "type": "text",
                    "id": 4,
                    "text": "利用者氏名",
                    "fontStyle": "",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 5,
                "width": "16.6%",
                "contents": [
                  {
                    "type": "textField",
                    "id": 6,
                    "width": "auto",
                    "bindingKey": "patientName"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 7,
                "width": "16.6%",
                "contents": [
                  {
                    "type": "text",
                    "id": 8,
                    "text": "訪問者",
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
                    "id": 10,
                    "width": "auto",
                    "bindingKey": "visitorName"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 11,
                "width": "16.6%",
                "contents": [
                  {
                    "type": "text",
                    "id": 12,
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
                    "id": 14,
                    "width": "auto",
                    "bindingKey": "partnerName"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 15,
            "contents": [
              {
                "type": "tcol",
                "id": 16,
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
                "id": 18,
                "colspan": "3",
                "contents": [
                  {
                    "type": "box",
                    "id": 19,
                    "contents": [
                      {
                        "type": "radioGroup",
                        "id": 20,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 21,
                            "label": "定期"
                          },
                          {
                            "type": "radio",
                            "id": 22,
                            "label": "緊急"
                          }
                        ],
                        "dense": true,
                        "direction": "row",
                        "bindingKey": "visitDateRadio"
                      },
                      {
                        "type": "datePicker",
                        "id": 23,
                        "locale": "ja",
                        "style": "standard",
                        "dense": true,
                        "bindingKey": "visitDatePicker",
                        "width": "",
                        "label": "日付の選択"
                      },
                      {
                        "type": "text",
                        "id": 24,
                        "text": "　"
                      },
                      {
                        "type": "timeIntervalSelect",
                        "id": 25,
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
                "id": 26,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 27,
                    "layout": "column",
                    "contents": [
                      {
                        "type": "box",
                        "id": 28,
                        "contents": [
                          {
                            "type": "text",
                            "id": 29,
                            "text": "室温",
                            "flexBasis": "auto"
                          },
                          {
                            "type": "textField",
                            "id": 30,
                            "width": "",
                            "bindingKey": "roomTemperature"
                          },
                          {
                            "type": "text",
                            "id": 31,
                            "text": "℃",
                            "flexBasis": "auto"
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "id": 32,
                        "contents": [
                          {
                            "type": "text",
                            "id": 33,
                            "text": "湿度",
                            "flexBasis": "auto"
                          },
                          {
                            "type": "textField",
                            "id": 34,
                            "width": "",
                            "bindingKey": "roomHumidity"
                          },
                          {
                            "type": "text",
                            "id": 35,
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
        "id": 36,
        "contents": [
          {
            "type": "trow",
            "id": 37,
            "contents": [
              {
                "type": "tcol",
                "id": 38,
                "contents": [
                  {
                    "type": "text",
                    "id": 39,
                    "text": "體溫",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 40,
                "contents": [
                  {
                    "type": "text",
                    "id": 41,
                    "textAlign": "center",
                    "text": "脈拍"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 42,
                "contents": [
                  {
                    "type": "text",
                    "id": 43,
                    "text": "血圧",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 44,
                "contents": [
                  {
                    "type": "text",
                    "id": 45,
                    "text": "呼吸",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 46,
                "contents": [
                  {
                    "type": "text",
                    "id": 47,
                    "text": "SpO2",
                    "textAlign": "center"
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
                "contents": [
                  {
                    "type": "textField",
                    "id": 50,
                    "bindingKey": "bodyTemperature"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 51,
                "contents": [
                  {
                    "type": "box",
                    "id": 52,
                    "layout": "column",
                    "contents": [
                      {
                        "type": "textField",
                        "id": 53,
                        "bindingKey": "pulseInput",
                        "width": ""
                      },
                      {
                        "type": "box",
                        "id": 54,
                        "contents": [
                          {
                            "type": "radioGroup",
                            "id": 55,
                            "contents": [
                              {
                                "type": "radio",
                                "id": 56,
                                "label": "整脈"
                              },
                              {
                                "type": "radio",
                                "id": 57,
                                "label": "不整脈"
                              }
                            ],
                            "direction": "row",
                            "dense": true,
                            "bindingKey": "pulseRadio"
                          },
                          {
                            "type": "select",
                            "id": 58,
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
                        "id": 59,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 60,
                            "label": "脈圧",
                            "bindingKey": "bloodPressureCheckbox"
                          },
                          {
                            "type": "radioGroup",
                            "id": 61,
                            "contents": [
                              {
                                "type": "radio",
                                "id": 62,
                                "label": "良好"
                              },
                              {
                                "type": "radio",
                                "id": 63,
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
                "id": 64,
                "contents": [
                  {
                    "type": "box",
                    "id": 65,
                    "layout": "column",
                    "contents": [
                      {
                        "type": "box",
                        "id": 66,
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "text",
                            "id": 67,
                            "text": "最高/最低",
                            "flexBasis": "auto"
                          },
                          {
                            "type": "textField",
                            "id": 68,
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
                "id": 69,
                "contents": [
                  {
                    "type": "textField",
                    "id": 70,
                    "bindingKey": "breatheInput"
                  },
                  {
                    "type": "radioGroup",
                    "id": 71,
                    "contents": [
                      {
                        "type": "radio",
                        "id": 72,
                        "label": "副雑音あり"
                      },
                      {
                        "type": "radio",
                        "id": 73,
                        "label": "なし"
                      }
                    ],
                    "direction": "row",
                    "bindingKey": "breatheNoiseRadio"
                  },
                  {
                    "type": "select",
                    "id": 74,
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
                    "id": 75,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 76,
                        "label": "air入り",
                        "bindingKey": "breatheAir"
                      },
                      {
                        "type": "radioGroup",
                        "id": 77,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 78,
                            "label": "良好"
                          },
                          {
                            "type": "radio",
                            "id": 79,
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
                "id": 80,
                "contents": [
                  {
                    "type": "textField",
                    "id": 81,
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
        "id": 82,
        "contents": [
          {
            "type": "trow",
            "id": 83,
            "contents": [
              {
                "type": "tcol",
                "id": 84,
                "contents": [
                  {
                    "type": "text",
                    "id": 85,
                    "text": "排尿",
                    "textAlign": "center"
                  }
                ],
                "rowspan": "4",
                "width": "20%"
              },
              {
                "type": "tcol",
                "id": 86,
                "width": "80%",
                "contents": [
                  {
                    "type": "box",
                    "id": 87,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 88,
                        "label": "尿量",
                        "bindingKey": "urineVolume",
                        "grow": 0,
                        "marginRight": "8px"
                      },
                      {
                        "type": "select",
                        "id": 89,
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
                        "id": 90,
                        "text": "ml",
                        "margin": "0 8px 0 0"
                      },
                      {
                        "type": "checkbox",
                        "id": 91,
                        "label": "性状",
                        "bindingKey": "urineSituation",
                        "grow": 0,
                        "marginRight": "8px"
                      },
                      {
                        "type": "select",
                        "id": 92,
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
            "id": 93,
            "contents": [
              {
                "type": "tcol",
                "id": 94,
                "width": "",
                "contents": [
                  {
                    "type": "box",
                    "id": 95,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 96,
                        "label": "道量",
                        "bindingKey": "urinePathVolume",
                        "grow": 0,
                        "marginRight": "8px"
                      },
                      {
                        "type": "text",
                        "id": 97,
                        "text": "("
                      },
                      {
                        "type": "select",
                        "id": 98,
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
                        "id": 99,
                        "text": "ml）　"
                      },
                      {
                        "type": "checkbox",
                        "id": 100,
                        "grow": 0,
                        "marginRight": "8px",
                        "label": "性状",
                        "bindingKey": "urinePathSituation"
                      },
                      {
                        "type": "text",
                        "id": 101,
                        "text": "(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "select",
                        "id": 102,
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
                        "id": 103,
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
            "id": 104,
            "contents": [
              {
                "type": "tcol",
                "id": 105,
                "contents": [
                  {
                    "type": "box",
                    "id": 106,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 107,
                        "bindingKey": "urineTubeCheckbox",
                        "label": "尿管交換",
                        "grow": 0,
                        "marginRight": "8px"
                      },
                      {
                        "type": "text",
                        "id": 108,
                        "text": "(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "checkbox",
                        "id": 109,
                        "grow": 0,
                        "label": "管のサイズ",
                        "bindingKey": "urineTubecheckbox1"
                      },
                      {
                        "type": "select",
                        "id": 110,
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
                        "id": 111,
                        "text": "Fr　"
                      },
                      {
                        "type": "checkbox",
                        "id": 112,
                        "bindingKey": "urineTubeWaterCheckbox",
                        "label": "カフ水",
                        "grow": 0
                      },
                      {
                        "type": "select",
                        "id": 113,
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
                        "id": 114,
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
            "id": 115,
            "contents": [
              {
                "type": "tcol",
                "id": 116,
                "contents": [
                  {
                    "type": "box",
                    "id": 117,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 118,
                        "label": "尿管管理",
                        "bindingKey": "urineTubeExchange1",
                        "grow": 0
                      },
                      {
                        "type": "text",
                        "id": 119,
                        "text": "(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "checkbox",
                        "id": 120,
                        "grow": 0,
                        "bindingKey": "bladderClean"
                      },
                      {
                        "type": "text",
                        "id": 121,
                        "flexBasis": "auto",
                        "text": "膀胱洗浄　"
                      },
                      {
                        "type": "checkbox",
                        "id": 122,
                        "grow": 0,
                        "bindingKey": "bladderClean1",
                        "label": "ミルキング"
                      },
                      {
                        "type": "select",
                        "id": 123,
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
                        "id": 124,
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
        "id": 125,
        "contents": [
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
                    "id": 128,
                    "text": "排便",
                    "textAlign": "center"
                  }
                ],
                "rowspan": "10",
                "width": "20%"
              },
              {
                "type": "tcol",
                "id": 129,
                "colspan": "2",
                "width": "80%",
                "contents": [
                  {
                    "type": "box",
                    "id": 130,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 131,
                        "label": "腸蠕動音",
                        "grow": 0,
                        "bindingKey": "intestinalSoundsCheck"
                      },
                      {
                        "type": "select",
                        "id": 132,
                        "dense": true,
                        "width": "",
                        "bindingKey": "intestinalSoundsSelect",
                        "flexGrow": 0,
                        "options": [
                          "選択",
                          "聞かれず",
                          "弱め",
                          "良好",
                          "更新"
                        ],
                        "marginLeft": "10px"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 133,
            "contents": [
              {
                "type": "tcol",
                "id": 134,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 135,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 136,
                        "label": "排便状況",
                        "bindingKey": "defecationCheck"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 137,
            "contents": [
              {
                "type": "tcol",
                "id": 138,
                "contents": [
                  {
                    "type": "box",
                    "id": 139,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 140,
                        "label": "日",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "defecationSundayCheck"
                      },
                      {
                        "type": "box",
                        "id": 141,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 142,
                            "label": "量",
                            "grow": 0,
                            "bindingKey": "defecationAmountSundayCheck"
                          },
                          {
                            "type": "select",
                            "id": 143,
                            "dense": true,
                            "width": "",
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
                            "marginLeft": "10px",
                            "flexShrink": 1,
                            "bindingKey": "defecationAmountSundaySelect"
                          },
                          {
                            "type": "checkbox",
                            "id": 144,
                            "label": "性状",
                            "marginLeft": "10px",
                            "grow": 0,
                            "shrink": 0,
                            "bindingKey": "defecationShapeSundayCheck"
                          },
                          {
                            "type": "select",
                            "id": 145,
                            "dense": true,
                            "width": "",
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
                            "marginLeft": "10px",
                            "flexShrink": 1,
                            "bindingKey": "defecationShapeSundaySelect"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginLeft": "",
                        "flexShrink": 1,
                        "flexGrow": 0
                      }
                    ],
                    "wrap": false,
                    "alignItems": "align-center",
                    "flexGrow": 0,
                    "flexShrink": 1,
                    "fillHeight": false
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 146,
                "contents": [
                  {
                    "type": "box",
                    "id": 147,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 148,
                        "label": "月",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "defecationMondayCheck"
                      },
                      {
                        "type": "box",
                        "id": 149,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 150,
                            "label": "量",
                            "grow": 0,
                            "bindingKey": "defecationAmountMondayCheck"
                          },
                          {
                            "type": "select",
                            "id": 151,
                            "dense": true,
                            "width": "",
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
                            "marginLeft": "10px",
                            "flexShrink": 1,
                            "bindingKey": "defecationAmountMondaySelect"
                          },
                          {
                            "type": "checkbox",
                            "id": 152,
                            "label": "性状",
                            "marginLeft": "10px",
                            "grow": 0,
                            "shrink": 0,
                            "bindingKey": "defecationShapeMondayCheck"
                          },
                          {
                            "type": "select",
                            "id": 153,
                            "dense": true,
                            "width": "",
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
                            "marginLeft": "10px",
                            "flexShrink": 1,
                            "bindingKey": "defecationShapeMondaySelect"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginLeft": "",
                        "flexShrink": 1,
                        "flexGrow": 0
                      }
                    ],
                    "wrap": false,
                    "alignItems": "align-center",
                    "flexGrow": 0,
                    "flexShrink": 1,
                    "fillHeight": false
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 154,
            "contents": [
              {
                "type": "tcol",
                "id": 155,
                "contents": [
                  {
                    "type": "box",
                    "id": 156,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 157,
                        "label": "火",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "defecationTuesdayCheck"
                      },
                      {
                        "type": "box",
                        "id": 158,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 159,
                            "label": "量",
                            "grow": 0,
                            "bindingKey": "defecationAmountTuesdayCheck"
                          },
                          {
                            "type": "select",
                            "id": 160,
                            "dense": true,
                            "width": "",
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
                            "marginLeft": "10px",
                            "flexShrink": 1,
                            "bindingKey": "defecationAmountTuesdaySelect"
                          },
                          {
                            "type": "checkbox",
                            "id": 161,
                            "label": "性状",
                            "marginLeft": "10px",
                            "grow": 0,
                            "shrink": 0,
                            "bindingKey": "defecationShapeTuesdayCheck"
                          },
                          {
                            "type": "select",
                            "id": 162,
                            "dense": true,
                            "width": "",
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
                            "marginLeft": "10px",
                            "flexShrink": 1,
                            "bindingKey": "defecationShapeTuesdaySelect"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginLeft": "",
                        "flexShrink": 1,
                        "flexGrow": 0
                      }
                    ],
                    "wrap": false,
                    "alignItems": "align-center",
                    "flexGrow": 0,
                    "flexShrink": 1,
                    "fillHeight": false
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 163,
                "contents": [
                  {
                    "type": "box",
                    "id": 164,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 165,
                        "label": "水",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "defecationWednesdayCheck"
                      },
                      {
                        "type": "box",
                        "id": 166,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 167,
                            "label": "量",
                            "grow": 0,
                            "bindingKey": "defecationAmountWednesdayCheck"
                          },
                          {
                            "type": "select",
                            "id": 168,
                            "dense": true,
                            "width": "",
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
                            "marginLeft": "10px",
                            "flexShrink": 1,
                            "bindingKey": "defecationAmountWednesdaySelect"
                          },
                          {
                            "type": "checkbox",
                            "id": 169,
                            "label": "性状",
                            "marginLeft": "10px",
                            "grow": 0,
                            "shrink": 0,
                            "bindingKey": "defecationShapeWednesdayCheck"
                          },
                          {
                            "type": "select",
                            "id": 170,
                            "dense": true,
                            "width": "",
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
                            "marginLeft": "10px",
                            "flexShrink": 1,
                            "bindingKey": "defecationShapeWednesdaySelect"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginLeft": "",
                        "flexShrink": 1,
                        "flexGrow": 0
                      }
                    ],
                    "wrap": false,
                    "alignItems": "align-center",
                    "flexGrow": 0,
                    "flexShrink": 1,
                    "fillHeight": false
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 171,
            "contents": [
              {
                "type": "tcol",
                "id": 172,
                "contents": [
                  {
                    "type": "box",
                    "id": 173,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 174,
                        "label": "木",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "defecationThursdayCheck"
                      },
                      {
                        "type": "box",
                        "id": 175,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 176,
                            "label": "量",
                            "grow": 0,
                            "bindingKey": "defecationAmountThursdayCheck"
                          },
                          {
                            "type": "select",
                            "id": 177,
                            "dense": true,
                            "width": "",
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
                            "marginLeft": "10px",
                            "flexShrink": 1,
                            "bindingKey": "defecationAmountThursdaySelect"
                          },
                          {
                            "type": "checkbox",
                            "id": 178,
                            "label": "性状",
                            "marginLeft": "10px",
                            "grow": 0,
                            "shrink": 0,
                            "bindingKey": "defecationShapeThursdayCheck"
                          },
                          {
                            "type": "select",
                            "id": 179,
                            "dense": true,
                            "width": "",
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
                            "marginLeft": "10px",
                            "flexShrink": 1,
                            "bindingKey": "defecationShapeThursdaySelect"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginLeft": "",
                        "flexShrink": 1,
                        "flexGrow": 0
                      }
                    ],
                    "wrap": false,
                    "alignItems": "align-center",
                    "flexGrow": 0,
                    "flexShrink": 1,
                    "fillHeight": false
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 180,
                "contents": [
                  {
                    "type": "box",
                    "id": 181,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 182,
                        "label": "金",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "defecationFridayCheck"
                      },
                      {
                        "type": "box",
                        "id": 183,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 184,
                            "label": "量",
                            "grow": 0,
                            "bindingKey": "defecationAmountFridayCheck"
                          },
                          {
                            "type": "select",
                            "id": 185,
                            "dense": true,
                            "width": "",
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
                            "marginLeft": "10px",
                            "flexShrink": 1,
                            "bindingKey": "defecationAmountFridaySelect"
                          },
                          {
                            "type": "checkbox",
                            "id": 186,
                            "label": "性状",
                            "marginLeft": "10px",
                            "grow": 0,
                            "shrink": 0,
                            "bindingKey": "defecationShapeFridayCheck"
                          },
                          {
                            "type": "select",
                            "id": 187,
                            "dense": true,
                            "width": "",
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
                            "marginLeft": "10px",
                            "flexShrink": 1,
                            "bindingKey": "defecationShapeFridaySelect"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginLeft": "",
                        "flexShrink": 1,
                        "flexGrow": 0
                      }
                    ],
                    "wrap": false,
                    "alignItems": "align-center",
                    "flexGrow": 0,
                    "flexShrink": 1,
                    "fillHeight": false
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 188,
            "contents": [
              {
                "type": "tcol",
                "id": 189,
                "contents": [
                  {
                    "type": "box",
                    "id": 190,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 191,
                        "label": "土",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "defecationSaturdayCheck"
                      },
                      {
                        "type": "box",
                        "id": 192,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 193,
                            "label": "量",
                            "grow": 0,
                            "bindingKey": "defecationAmountSaturdayCheck"
                          },
                          {
                            "type": "select",
                            "id": 194,
                            "dense": true,
                            "width": "",
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
                            "marginLeft": "10px",
                            "flexShrink": 1,
                            "bindingKey": "defecationAmountSaturdaySelect"
                          },
                          {
                            "type": "checkbox",
                            "id": 195,
                            "label": "性状",
                            "marginLeft": "10px",
                            "grow": 0,
                            "shrink": 0,
                            "bindingKey": "defecationShapeSaturdayCheck"
                          },
                          {
                            "type": "select",
                            "id": 196,
                            "dense": true,
                            "width": "",
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
                            "marginLeft": "10px",
                            "flexShrink": 1,
                            "bindingKey": "defecationShapeSaturdaySelect"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginLeft": "",
                        "flexShrink": 1,
                        "flexGrow": 0
                      }
                    ],
                    "wrap": false,
                    "alignItems": "align-center",
                    "flexGrow": 0,
                    "flexShrink": 1,
                    "fillHeight": false
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 197,
                "contents": []
              }
            ]
          },
          {
            "type": "trow",
            "id": 198,
            "contents": [
              {
                "type": "tcol",
                "id": 199,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 200,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 201,
                        "label": "指診",
                        "grow": 0,
                        "shrink": 0,
                        "bindingKey": "touchExaminationCheck"
                      },
                      {
                        "type": "radioGroup",
                        "id": 202,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 203,
                            "label": "触れず"
                          },
                          {
                            "type": "radio",
                            "id": 204,
                            "label": "触れる"
                          }
                        ],
                        "direction": "row",
                        "dense": true,
                        "marginLeft": "10px",
                        "grow": 0,
                        "shrink": 0,
                        "bindingKey": "touchExaminationRadios"
                      },
                      {
                        "type": "select",
                        "id": 205,
                        "flexGrow": 0,
                        "dense": true,
                        "flexShrink": 1,
                        "bindingKey": "touchExaminationSelect",
                        "options": [
                          "選択",
                          "硬便",
                          "普通便",
                          "軟便"
                        ]
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 206,
            "contents": [
              {
                "type": "tcol",
                "id": 207,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 208,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 209,
                        "label": "浣腸",
                        "grow": 0,
                        "shrink": 0,
                        "bindingKey": "enemaCheck"
                      },
                      {
                        "type": "radioGroup",
                        "id": 210,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 211,
                            "label": "30ml"
                          },
                          {
                            "type": "radio",
                            "id": 212,
                            "label": "60ml"
                          },
                          {
                            "type": "radio",
                            "id": 213,
                            "label": "120ml"
                          },
                          {
                            "type": "radio",
                            "id": 214,
                            "label": "その他"
                          }
                        ],
                        "direction": "row",
                        "dense": true,
                        "marginLeft": "10px",
                        "grow": 0,
                        "bindingKey": "enemaRadio"
                      }
                    ],
                    "alignItems": "align-center"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 215,
            "contents": [
              {
                "type": "tcol",
                "id": 216,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 217,
                    "contents": [
                      {
                        "type": "radioGroup",
                        "id": 218,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 219,
                            "label": "摘便実施"
                          },
                          {
                            "type": "radio",
                            "id": 220,
                            "label": "摘便未実施"
                          }
                        ],
                        "direction": "column",
                        "dense": true,
                        "grow": 0,
                        "shrink": 0,
                        "label": "",
                        "bindingKey": "poopRadio"
                      },
                      {
                        "type": "box",
                        "id": 221,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 222,
                            "label": "量",
                            "grow": 0,
                            "marginLeft": "10px",
                            "bindingKey": "poopAmountCheck"
                          },
                          {
                            "type": "select",
                            "id": 223,
                            "dense": true,
                            "flexGrow": 0,
                            "marginLeft": "10px",
                            "bindingKey": "poopAmountSelect",
                            "options": [
                              "選択",
                              "母指大",
                              "片手半分",
                              "片手",
                              "両手",
                              "両手山盛り"
                            ]
                          }
                        ],
                        "flexGrow": 0,
                        "marginLeft": "",
                        "alignItems": "align-center"
                      },
                      {
                        "type": "box",
                        "id": 224,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 225,
                            "label": "性状",
                            "grow": 0,
                            "marginLeft": "10px",
                            "shrink": 0,
                            "bindingKey": "poopShapeCheck"
                          },
                          {
                            "type": "select",
                            "id": 226,
                            "dense": true,
                            "flexGrow": 0,
                            "marginLeft": "10px",
                            "bindingKey": "poopShapeSelect",
                            "options": [
                              "選択",
                              "ブリストルスケール①",
                              "ブリストルスケール②",
                              "ブリストルスケール③",
                              "ブリストルスケール④",
                              "ブリストルスケール⑤",
                              "ブリストルスケール⑥",
                              "ブリストルスケール⑦"
                            ]
                          }
                        ],
                        "flexGrow": 0,
                        "marginLeft": "",
                        "alignItems": "align-center"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 227,
            "contents": [
              {
                "type": "tcol",
                "id": 228,
                "colspan": "2",
                "contents": [
                  {
                    "type": "checkbox",
                    "id": 229,
                    "label": "腹部マッサージ",
                    "grow": 0,
                    "bindingKey": "abdomenMassageCheck"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 230,
            "contents": [
              {
                "type": "tcol",
                "id": 231,
                "contents": [
                  {
                    "type": "text",
                    "id": 232,
                    "text": "オムツ交換",
                    "textAlign": "center"
                  }
                ],
                "width": ""
              },
              {
                "type": "tcol",
                "id": 233,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 234,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 235,
                        "label": "オムツ",
                        "grow": 0,
                        "bindingKey": "diaperCheck1"
                      },
                      {
                        "type": "checkbox",
                        "id": 236,
                        "label": "パット",
                        "grow": 0,
                        "marginLeft": "10px",
                        "bindingKey": "diaperCheck2"
                      }
                    ],
                    "justifyContent": "justify-start",
                    "alignItems": "align-center"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 237,
            "contents": [
              {
                "type": "tcol",
                "id": 238,
                "rowspan": "",
                "contents": [
                  {
                    "type": "text",
                    "id": 239,
                    "text": "清潔ケア・指導",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 240,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 241,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 242,
                        "label": "入浴",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "bathingCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 243,
                        "label": "シャワー浴",
                        "grow": 0,
                        "marginLeft": "",
                        "marginRight": "20px",
                        "bindingKey": "showerBathCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 244,
                        "label": "部分浴",
                        "grow": 0,
                        "marginLeft": "",
                        "marginRight": "20px",
                        "bindingKey": "partialBathCheck"
                      },
                      {
                        "type": "box",
                        "id": 245,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 246,
                            "label": "洗髪",
                            "grow": 0,
                            "marginLeft": "",
                            "marginRight": "10px",
                            "bindingKey": "shampooCheck"
                          },
                          {
                            "type": "select",
                            "id": 247,
                            "dense": true,
                            "width": "",
                            "flexBasis": "",
                            "flexGrow": 0,
                            "marginLeft": "",
                            "marginRight": "10px",
                            "bindingKey": "ShampooSelect",
                            "options": [
                              "選択",
                              "ドライシャンプー",
                              "シャンプー",
                              "シャンプー/ドライヤー"
                            ]
                          }
                        ],
                        "flexGrow": 0,
                        "marginLeft": "",
                        "alignItems": "align-center",
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 248,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 249,
                            "label": "清拭",
                            "grow": 0,
                            "marginLeft": "",
                            "bindingKey": "bedBathCheck",
                            "shrink": 0
                          },
                          {
                            "type": "radioGroup",
                            "id": 250,
                            "contents": [
                              {
                                "type": "radio",
                                "id": 251,
                                "label": "全身"
                              },
                              {
                                "type": "radio",
                                "id": 252,
                                "label": "一部"
                              }
                            ],
                            "direction": "row",
                            "grow": 0,
                            "marginLeft": "10px",
                            "dense": true,
                            "bindingKey": "bedBathRadio",
                            "shrink": 0
                          },
                          {
                            "type": "select",
                            "id": 253,
                            "dense": true,
                            "width": "",
                            "flexBasis": "",
                            "flexGrow": 0,
                            "flexShrink": 0,
                            "bindingKey": "bedBathPartSelect",
                            "options": [
                              "選択",
                              "上半身",
                              "下半身",
                              "腰背部",
                              "胸腹部",
                              "上肢",
                              "下肢",
                              "陰部",
                              "臀部"
                            ]
                          }
                        ],
                        "alignItems": "align-center",
                        "marginLeft": "",
                        "flexGrow": 0,
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 254,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 255,
                            "label": "爪切り",
                            "grow": 0,
                            "marginLeft": "",
                            "marginRight": "20px",
                            "bindingKey": "nailCuttingCheck",
                            "shrink": 0
                          },
                          {
                            "type": "box",
                            "id": 256,
                            "contents": [
                              {
                                "type": "checkbox",
                                "id": 257,
                                "label": "手",
                                "bindingKey": "nailCuttingHandsCheck",
                                "shrink": 0,
                                "marginRight": "10px"
                              },
                              {
                                "type": "select",
                                "id": 258,
                                "bindingKey": "nailCuttingHandsSelect",
                                "options": [
                                  "選択",
                                  "両手",
                                  "右手のみ",
                                  "左手のみ"
                                ],
                                "flexGrow": 0,
                                "flexShrink": 1,
                                "dense": true,
                                "marginRight": ""
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "20px"
                          },
                          {
                            "type": "box",
                            "id": 259,
                            "contents": [
                              {
                                "type": "checkbox",
                                "id": 260,
                                "label": "足",
                                "bindingKey": "nailCuttingFootsCheck",
                                "shrink": 0,
                                "marginRight": "10px"
                              },
                              {
                                "type": "select",
                                "id": 261,
                                "bindingKey": "nailCuttingFootsSelect",
                                "options": [
                                  "選択",
                                  "両足",
                                  "右足のみ",
                                  "左足のみ"
                                ],
                                "flexShrink": 1,
                                "flexGrow": 0,
                                "dense": true
                              }
                            ],
                            "alignItems": "align-center"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginLeft": "",
                        "flexGrow": 0,
                        "marginRight": "20px"
                      },
                      {
                        "type": "checkbox",
                        "id": 262,
                        "label": "耳垢除去",
                        "grow": 0,
                        "marginLeft": "",
                        "marginRight": "20px",
                        "bindingKey": "clearEarCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 263,
                        "label": "髭剃り",
                        "grow": 0,
                        "marginLeft": "",
                        "marginRight": "20px",
                        "bindingKey": "shavingHairCheck"
                      },
                      {
                        "type": "box",
                        "id": 264,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 265,
                            "label": "口腔ケア",
                            "grow": 0,
                            "marginLeft": "",
                            "marginRight": "10px",
                            "shrink": 0,
                            "bindingKey": " oralCareCheck"
                          },
                          {
                            "type": "box",
                            "id": 266,
                            "contents": [
                              {
                                "type": "checkbox",
                                "id": 267,
                                "label": "歯磨き",
                                "grow": 0,
                                "marginLeft": "",
                                "marginRight": "10px",
                                "shrink": 0,
                                "bindingKey": "dentifriceCheck"
                              },
                              {
                                "type": "checkbox",
                                "id": 268,
                                "label": "うがい",
                                "grow": 0,
                                "marginLeft": "",
                                "marginRight": "10px",
                                "shrink": 0,
                                "bindingKey": "gargleCheck"
                              },
                              {
                                "type": "box",
                                "id": 269,
                                "contents": [
                                  {
                                    "type": "checkbox",
                                    "id": 270,
                                    "label": "拭き取り",
                                    "grow": 0,
                                    "marginLeft": "",
                                    "marginRight": "10px",
                                    "shrink": 0,
                                    "bindingKey": "oralWipeOffCheck"
                                  },
                                  {
                                    "type": "box",
                                    "id": 271,
                                    "contents": [
                                      {
                                        "type": "checkbox",
                                        "id": 272,
                                        "label": "実施",
                                        "grow": 0,
                                        "marginLeft": "",
                                        "marginRight": "10px",
                                        "shrink": 0,
                                        "bindingKey": "oralWipeOffTrueCheck"
                                      },
                                      {
                                        "type": "checkbox",
                                        "id": 273,
                                        "label": "指導",
                                        "grow": 0,
                                        "marginLeft": "",
                                        "marginRight": "",
                                        "shrink": 0,
                                        "bindingKey": "oralWipeOffNoCheck"
                                      }
                                    ],
                                    "alignItems": "align-center",
                                    "marginRight": "20px"
                                  }
                                ],
                                "alignItems": "align-center"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginLeft": "",
                            "flexGrow": 0,
                            "marginRight": "20px"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginLeft": "",
                        "flexGrow": 0,
                        "marginRight": "20px",
                        "wrap": false
                      }
                    ],
                    "layout": "column",
                    "wrap": "wrap",
                    "alignItems": "align-start",
                    "justifyContent": "justify-start"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 274,
            "contents": [
              {
                "type": "tcol",
                "id": 275,
                "contents": [
                  {
                    "type": "text",
                    "id": 276,
                    "text": "衣生活のケア・指導",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 277,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 278,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 279,
                        "label": "衣服調整",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "clothesAdjustmentCheck",
                        "shrink": 0
                      },
                      {
                        "type": "box",
                        "id": 280,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 281,
                            "label": "更衣",
                            "grow": 0,
                            "marginRight": "10px",
                            "bindingKey": "clothesChangeCheck",
                            "shrink": 0
                          },
                          {
                            "type": "select",
                            "id": 282,
                            "dense": true,
                            "width": "",
                            "flexBasis": "",
                            "flexGrow": 0,
                            "bindingKey": "clothesChangeSelect",
                            "options": [
                              "選択",
                              "上着",
                              "下着",
                              "ゆかた等",
                              "肌着"
                            ]
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center",
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 283,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 284,
                            "grow": 0,
                            "label": "シーツ交換",
                            "marginRight": "10px",
                            "bindingKey": "changeSheetCheck",
                            "shrink": 0
                          },
                          {
                            "type": "select",
                            "id": 285,
                            "dense": true,
                            "width": "",
                            "flexBasis": "",
                            "flexGrow": 0,
                            "bindingKey": "changeSheetSelect",
                            "options": [
                              "選択",
                              "シーツ",
                              "横シーツ",
                              "シート"
                            ]
                          }
                        ],
                        "alignItems": "align-center",
                        "flexGrow": 0,
                        "marginRight": "20px"
                      }
                    ],
                    "layout": "horizontal",
                    "wrap": "wrap",
                    "alignItems": "align-center"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 286,
            "contents": [
              {
                "type": "tcol",
                "id": 287,
                "contents": [
                  {
                    "type": "text",
                    "id": 288,
                    "text": "食事栄養のケア・指導",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 289,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 290,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 291,
                        "label": "栄養指導",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "nursingGuidanceCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 292,
                        "label": "食事",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "eatingCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 293,
                        "label": "飲水",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "drinkingCheck"
                      }
                    ],
                    "layout": "horizontal",
                    "wrap": "wrap",
                    "alignItems": "align-center"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 294,
            "contents": [
              {
                "type": "tcol",
                "id": 295,
                "rowspan": "4",
                "contents": [
                  {
                    "type": "text",
                    "id": 296,
                    "text": "皮膚処置",
                    "textAlign": "center"
                  }
                ],
                "colspan": "1"
              },
              {
                "type": "tcol",
                "id": 297,
                "rowspan": "",
                "contents": [
                  {
                    "type": "box",
                    "id": 298,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 299,
                        "label": "褥瘡予防",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "preventionOfBedsoresCheck"
                      }
                    ],
                    "layout": "horizontal",
                    "wrap": "wrap",
                    "alignItems": "align-center"
                  }
                ],
                "colspan": "2"
              }
            ]
          },
          {
            "type": "trow",
            "id": 300,
            "contents": [
              {
                "type": "tcol",
                "id": 301,
                "rowspan": "",
                "contents": [
                  {
                    "type": "box",
                    "id": 302,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 303,
                        "label": "褥瘡処置",
                        "grow": 0,
                        "marginRight": "10px",
                        "shrink": 0,
                        "bindingKey": "bedSoreTreatmentCheck"
                      },
                      {
                        "type": "box",
                        "id": 304,
                        "contents": [
                          {
                            "type": "text",
                            "id": 305,
                            "text": "部位",
                            "flex": "",
                            "grow": 0,
                            "marginRight": "10px",
                            "marginLeft": "",
                            "marginBottom": "",
                            "color": "",
                            "shrink": 0
                          },
                          {
                            "type": "select",
                            "id": 306,
                            "flexGrow": 0,
                            "dense": true,
                            "bindingKey": "locationSelect",
                            "options": [
                              "選択"
                            ]
                          }
                        ],
                        "alignItems": "align-center",
                        "marginRight": "10px",
                        "flexGrow": 0
                      },
                      {
                        "type": "box",
                        "id": 307,
                        "contents": [
                          {
                            "type": "text",
                            "id": 308,
                            "text": "薬剤",
                            "flex": "",
                            "grow": 0,
                            "marginRight": "10px",
                            "marginLeft": "",
                            "marginBottom": "",
                            "color": "",
                            "shrink": 0
                          },
                          {
                            "type": "select",
                            "id": 309,
                            "flexGrow": 0,
                            "dense": true,
                            "options": [
                              "選択"
                            ],
                            "bindingKey": "medicineSelect"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginRight": "10px",
                        "flexGrow": 0
                      },
                      {
                        "type": "box",
                        "id": 310,
                        "contents": [
                          {
                            "type": "text",
                            "id": 311,
                            "text": "方法",
                            "flex": "",
                            "grow": 0,
                            "marginRight": "10px",
                            "marginLeft": "",
                            "marginBottom": "",
                            "color": "",
                            "shrink": 0
                          },
                          {
                            "type": "select",
                            "id": 312,
                            "flexGrow": 0,
                            "dense": true,
                            "options": [
                              "選択"
                            ],
                            "bindingKey": "methodSelect"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginRight": "10px",
                        "flexGrow": 0
                      }
                    ],
                    "flexGrow": 0,
                    "alignItems": "align-center"
                  }
                ],
                "colspan": "2"
              }
            ]
          },
          {
            "type": "trow",
            "id": 313,
            "contents": [
              {
                "type": "tcol",
                "id": 314,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 315,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 316,
                        "label": "創処置",
                        "grow": 0,
                        "marginRight": "10px",
                        "shrink": 0,
                        "bindingKey": "creativeDisposalCheck"
                      },
                      {
                        "type": "box",
                        "id": 317,
                        "contents": [
                          {
                            "type": "text",
                            "id": 318,
                            "text": "部位",
                            "flex": "",
                            "grow": 0,
                            "marginRight": "10px",
                            "marginLeft": "",
                            "marginBottom": "",
                            "color": "",
                            "shrink": 0
                          },
                          {
                            "type": "select",
                            "id": 319,
                            "flexGrow": 0,
                            "dense": true,
                            "bindingKey": "bodyLocationSelect",
                            "options": [
                              "選択"
                            ]
                          }
                        ],
                        "alignItems": "align-center",
                        "marginRight": "10px",
                        "flexGrow": 0
                      },
                      {
                        "type": "box",
                        "id": 320,
                        "contents": [
                          {
                            "type": "text",
                            "id": 321,
                            "text": "薬剤",
                            "flex": "",
                            "grow": 0,
                            "marginRight": "10px",
                            "marginLeft": "",
                            "marginBottom": "",
                            "color": "",
                            "shrink": 0
                          },
                          {
                            "type": "select",
                            "id": 322,
                            "flexGrow": 0,
                            "dense": true,
                            "options": [
                              "選択"
                            ],
                            "bindingKey": "treatmentSelect"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginRight": "10px",
                        "flexGrow": 0
                      },
                      {
                        "type": "box",
                        "id": 323,
                        "contents": [
                          {
                            "type": "text",
                            "id": 324,
                            "text": "方法",
                            "flex": "",
                            "grow": 0,
                            "marginRight": "10px",
                            "marginLeft": "",
                            "marginBottom": "",
                            "color": "",
                            "shrink": 0
                          },
                          {
                            "type": "select",
                            "id": 325,
                            "flexGrow": 0,
                            "dense": true,
                            "options": [
                              "選択"
                            ],
                            "bindingKey": "optionSelect"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginRight": "10px",
                        "flexGrow": 0
                      }
                    ],
                    "flexGrow": 0,
                    "alignItems": "align-center"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 326,
            "contents": [
              {
                "type": "tcol",
                "id": 327,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 328,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 329,
                        "label": "外用薬塗布",
                        "grow": 0,
                        "marginRight": "20px",
                        "shrink": 0,
                        "bindingKey": "topicalDrugCoatingCheck"
                      },
                      {
                        "type": "box",
                        "id": 330,
                        "contents": [
                          {
                            "type": "text",
                            "id": 331,
                            "text": "薬剤",
                            "flex": "",
                            "grow": 0,
                            "marginRight": "10px",
                            "marginLeft": "",
                            "marginBottom": "",
                            "color": "",
                            "shrink": 0
                          },
                          {
                            "type": "select",
                            "id": 332,
                            "flexGrow": 0,
                            "dense": true,
                            "bindingKey": "coatingSelect",
                            "options": [
                              "選択"
                            ]
                          }
                        ],
                        "alignItems": "align-center",
                        "marginRight": "20px",
                        "flexGrow": 0
                      }
                    ],
                    "flexGrow": 0,
                    "alignItems": "align-center"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 333,
            "contents": [
              {
                "type": "tcol",
                "id": 334,
                "contents": [
                  {
                    "type": "text",
                    "id": 335,
                    "text": "薬の管理・指導",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 336,
                "rowspan": "",
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 337,
                    "layout": "column",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 338,
                        "label": "残薬確認",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "residualMedicineConfirmationCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 339,
                        "label": "服薬介助",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "medicineAssistCheck"
                      },
                      {
                        "type": "box",
                        "id": 340,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 341,
                            "label": "内服セット",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "oralSetCheck"
                          },
                          {
                            "type": "text",
                            "id": 342,
                            "flexBasis": "auto",
                            "text": "期間",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 343,
                            "dense": true,
                            "width": "",
                            "flexBasis": "",
                            "flexGrow": 0,
                            "flexShrink": 1,
                            "bindingKey": "periodSelect",
                            "options": [
                              "選択"
                            ]
                          }
                        ],
                        "alignItems": "align-center",
                        "flexGrow": 0,
                        "marginRight": "20px"
                      },
                      {
                        "type": "checkbox",
                        "id": 344,
                        "label": "点眼",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "eyeDropsCheck"
                      },
                      {
                        "type": "box",
                        "id": 345,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 346,
                            "label": "吸入",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "inhalationCheck"
                          },
                          {
                            "type": "select",
                            "id": 347,
                            "dense": true,
                            "width": "",
                            "flexBasis": "",
                            "flexGrow": 0,
                            "flexShrink": 1,
                            "bindingKey": "inhalationSelect",
                            "options": [
                              "選択"
                            ]
                          }
                        ],
                        "alignItems": "align-center",
                        "flexGrow": 0,
                        "marginRight": "20px"
                      },
                      {
                        "type": "checkbox",
                        "id": 348,
                        "label": "座薬",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "suppositoryCheck"
                      },
                      {
                        "type": "box",
                        "id": 349,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 350,
                            "label": "点滴",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "intravenousCheck"
                          },
                          {
                            "type": "box",
                            "id": 351,
                            "contents": [
                              {
                                "type": "text",
                                "id": 352,
                                "text": "薬剤",
                                "flex": "",
                                "grow": 0,
                                "marginRight": "10px",
                                "marginLeft": "",
                                "marginBottom": "",
                                "color": "",
                                "shrink": 0
                              },
                              {
                                "type": "select",
                                "id": 353,
                                "flexGrow": 0,
                                "dense": true,
                                "flexShrink": 1,
                                "bindingKey": "intravenousMedicineSelect",
                                "options": [
                                  "選択"
                                ]
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "10px",
                            "flexGrow": 0,
                            "flexShrink": 1
                          },
                          {
                            "type": "box",
                            "id": 354,
                            "contents": [
                              {
                                "type": "text",
                                "id": 355,
                                "text": "量",
                                "flex": "",
                                "grow": 0,
                                "marginRight": "10px",
                                "marginLeft": "",
                                "marginBottom": "",
                                "color": "",
                                "shrink": 0
                              },
                              {
                                "type": "select",
                                "id": 356,
                                "flexGrow": 0,
                                "dense": true,
                                "options": [
                                  "選択"
                                ],
                                "bindingKey": "intravenousAmountSelect"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "10px",
                            "flexGrow": 0,
                            "flexShrink": 1
                          },
                          {
                            "type": "box",
                            "id": 357,
                            "contents": [
                              {
                                "type": "text",
                                "id": 358,
                                "text": "速度",
                                "flex": "",
                                "grow": 0,
                                "marginRight": "10px",
                                "marginLeft": "",
                                "marginBottom": "",
                                "color": "",
                                "shrink": 0
                              },
                              {
                                "type": "select",
                                "id": 359,
                                "flexGrow": 0,
                                "dense": true,
                                "bindingKey": "intravenousSpeedSelect",
                                "options": [
                                  "選択"
                                ]
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "10px",
                            "flexGrow": 0,
                            "flexShrink": 1
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center",
                        "flexShrink": 1
                      },
                      {
                        "type": "box",
                        "id": 360,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 361,
                            "label": "注射",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "injectionCheck"
                          },
                          {
                            "type": "box",
                            "id": 362,
                            "contents": [
                              {
                                "type": "text",
                                "id": 363,
                                "text": "薬剤",
                                "flex": "",
                                "grow": 0,
                                "marginRight": "10px",
                                "marginLeft": "",
                                "marginBottom": "",
                                "color": "",
                                "shrink": 0
                              },
                              {
                                "type": "select",
                                "id": 364,
                                "flexGrow": 0,
                                "dense": true,
                                "flexShrink": 1,
                                "bindingKey": "injectionMedicineSelect",
                                "options": [
                                  "選択"
                                ]
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "10px",
                            "flexGrow": 0,
                            "flexShrink": 1
                          },
                          {
                            "type": "box",
                            "id": 365,
                            "contents": [
                              {
                                "type": "text",
                                "id": 366,
                                "text": "部位",
                                "flex": "",
                                "grow": 0,
                                "marginRight": "10px",
                                "marginLeft": "",
                                "marginBottom": "",
                                "color": "",
                                "shrink": 0
                              },
                              {
                                "type": "select",
                                "id": 367,
                                "flexGrow": 0,
                                "dense": true,
                                "options": [
                                  "選択"
                                ],
                                "bindingKey": "injectionLocationSelect"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "10px",
                            "flexGrow": 0,
                            "flexShrink": 1
                          },
                          {
                            "type": "box",
                            "id": 368,
                            "contents": [
                              {
                                "type": "text",
                                "id": 369,
                                "text": "方法",
                                "flex": "",
                                "grow": 0,
                                "marginRight": "10px",
                                "marginLeft": "",
                                "marginBottom": "",
                                "color": "",
                                "shrink": 0
                              },
                              {
                                "type": "select",
                                "id": 370,
                                "flexGrow": 0,
                                "dense": true,
                                "options": [
                                  "選択"
                                ],
                                "bindingKey": "injectionMethodSelect"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "10px",
                            "flexGrow": 0,
                            "flexShrink": 1
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center",
                        "flexShrink": 1
                      },
                      {
                        "type": "checkbox",
                        "id": 371,
                        "grow": 0,
                        "label": "外用薬貼付",
                        "marginRight": "20px",
                        "bindingKey": "topicalMedicineAffixedCheck"
                      }
                    ],
                    "wrap": "wrap",
                    "alignItems": "align-start",
                    "justifyContent": "justify-center"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 372,
            "contents": [
              {
                "type": "tcol",
                "id": 373,
                "contents": [
                  {
                    "type": "text",
                    "id": 374,
                    "text": "リハビリテーション",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 375,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 376,
                    "contents": [
                      {
                        "type": "box",
                        "id": 377,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 378,
                            "label": "関節可動域",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "rangeOfMotionCheck"
                          },
                          {
                            "type": "select",
                            "id": 379,
                            "dense": true,
                            "width": "",
                            "flexBasis": "",
                            "flexGrow": 0,
                            "flexShrink": 1,
                            "bindingKey": "rangeOfMotionSelect",
                            "options": [
                              "選択"
                            ]
                          }
                        ],
                        "alignItems": "align-center",
                        "flexGrow": 0,
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 380,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 381,
                            "label": "マッサージ",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "massageCheck"
                          },
                          {
                            "type": "select",
                            "id": 382,
                            "dense": true,
                            "width": "",
                            "flexBasis": "",
                            "flexGrow": 0,
                            "flexShrink": 1,
                            "bindingKey": "massageSelect",
                            "options": [
                              "選択"
                            ]
                          }
                        ],
                        "alignItems": "align-center",
                        "flexGrow": 0,
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 383,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 384,
                            "label": "筋力",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "20px",
                            "bindingKey": "muscleStrengthCheck"
                          },
                          {
                            "type": "box",
                            "id": 385,
                            "contents": [
                              {
                                "type": "checkbox",
                                "id": 386,
                                "label": "上肢",
                                "grow": 0,
                                "shrink": 0,
                                "marginRight": "10px",
                                "bindingKey": "upperLimbsCheck"
                              },
                              {
                                "type": "checkbox",
                                "id": 387,
                                "label": "下肢",
                                "grow": 0,
                                "shrink": 0,
                                "marginRight": "10px",
                                "bindingKey": "lowerLimbsCheck"
                              },
                              {
                                "type": "checkbox",
                                "id": 388,
                                "label": "体幹",
                                "grow": 0,
                                "shrink": 0,
                                "marginRight": "10px",
                                "bindingKey": "trunkCheck"
                              }
                            ],
                            "alignItems": "align-center",
                            "flexGrow": 0,
                            "marginRight": "20px"
                          }
                        ],
                        "alignItems": "align-center",
                        "flexGrow": 0,
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 389,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 390,
                            "label": "座位",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "sittingPositionCheck"
                          },
                          {
                            "type": "checkbox",
                            "id": 391,
                            "label": "立位",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "standingCheck"
                          },
                          {
                            "type": "checkbox",
                            "id": 392,
                            "label": "歩行",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "walkingCheck"
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center",
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 393,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 394,
                            "label": "呼吸リハ",
                            "marginRight": "20px",
                            "grow": 0,
                            "shrink": 0,
                            "bindingKey": " breathingRehabilitationCheck"
                          },
                          {
                            "type": "box",
                            "id": 395,
                            "contents": [
                              {
                                "type": "radioGroup",
                                "id": 396,
                                "contents": [
                                  {
                                    "type": "radio",
                                    "id": 397,
                                    "label": "補助筋マッサージ"
                                  },
                                  {
                                    "type": "radio",
                                    "id": 398,
                                    "label": "ストレッチ"
                                  },
                                  {
                                    "type": "radio",
                                    "id": 399,
                                    "label": "呼吸法"
                                  },
                                  {
                                    "type": "radio",
                                    "id": 400,
                                    "label": "呼気介助"
                                  }
                                ],
                                "direction": "row",
                                "dense": true,
                                "bindingKey": " breathingRehabilitationRadio"
                              }
                            ],
                            "flexGrow": 0,
                            "alignItems": "align-start",
                            "flexShrink": 0
                          }
                        ],
                        "alignItems": "align-center",
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 401,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 402,
                            "label": "口腔リハ",
                            "marginRight": "20px",
                            "grow": 0,
                            "bindingKey": "oralRehabilitationCheck"
                          },
                          {
                            "type": "box",
                            "id": 403,
                            "contents": [
                              {
                                "type": "radioGroup",
                                "id": 404,
                                "contents": [
                                  {
                                    "type": "radio",
                                    "id": 405,
                                    "label": "嚥下"
                                  },
                                  {
                                    "type": "radio",
                                    "id": 406,
                                    "label": "言語"
                                  }
                                ],
                                "direction": "row",
                                "dense": true,
                                "bindingKey": "oralRehabilitationRadio"
                              }
                            ],
                            "flexGrow": 0,
                            "alignItems": "align-start"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginRight": "20px"
                      }
                    ],
                    "flexGrow": 0,
                    "layout": "column",
                    "alignItems": "align-start",
                    "wrap": true
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 407,
            "contents": [
              {
                "type": "tcol",
                "id": 408,
                "contents": [
                  {
                    "type": "text",
                    "id": 409,
                    "text": "排痰ケア",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 410,
                "colspan": "2",
                "contents": [
                  {
                    "type": "radioGroup",
                    "id": 411,
                    "contents": [
                      {
                        "type": "radio",
                        "id": 412,
                        "label": "体位ドレナージ"
                      },
                      {
                        "type": "radio",
                        "id": 413,
                        "label": "スクイージング"
                      },
                      {
                        "type": "radio",
                        "id": 414,
                        "label": "吸引"
                      }
                    ],
                    "direction": "row",
                    "dense": true,
                    "bindingKey": "sputumCareRadio"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 415,
            "contents": [
              {
                "type": "tcol",
                "id": 416,
                "contents": [
                  {
                    "type": "text",
                    "id": 417,
                    "text": "医療処置",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 418,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 419,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 420,
                        "label": "酸素療法",
                        "grow": 0,
                        "marginRight": "20px",
                        "shrink": 0,
                        "bindingKey": "oxygenTherapyCheck"
                      },
                      {
                        "type": "box",
                        "id": 421,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 422,
                            "label": "IVH・CVポート",
                            "grow": 0,
                            "marginRight": "20px",
                            "bindingKey": "IvhCvPortCheck"
                          },
                          {
                            "type": "radioGroup",
                            "id": 423,
                            "direction": "row",
                            "contents": [
                              {
                                "type": "radio",
                                "id": 424,
                                "label": "ポンプ有"
                              },
                              {
                                "type": "radio",
                                "id": 425,
                                "label": "無"
                              }
                            ],
                            "dense": true,
                            "bindingKey": "IvhCvPortRadio"
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center",
                        "marginRight": "20px",
                        "flexShrink": 0
                      },
                      {
                        "type": "box",
                        "id": 426,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 427,
                            "label": "針",
                            "grow": 0,
                            "marginRight": "20px",
                            "bindingKey": "needleCheck"
                          },
                          {
                            "type": "radioGroup",
                            "id": 428,
                            "direction": "row",
                            "contents": [
                              {
                                "type": "radio",
                                "id": 429,
                                "label": "抜去"
                              },
                              {
                                "type": "radio",
                                "id": 430,
                                "label": "挿入"
                              },
                              {
                                "type": "radio",
                                "id": 431,
                                "label": "ルート交換"
                              }
                            ],
                            "dense": true,
                            "bindingKey": "needleRadio"
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center",
                        "marginRight": "20px",
                        "flexShrink": 0
                      },
                      {
                        "type": "checkbox",
                        "id": 432,
                        "label": "胃瘻",
                        "grow": 0,
                        "marginRight": "20px",
                        "shrink": 0,
                        "bindingKey": "gastrostomyCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 433,
                        "label": "腹膜透析",
                        "grow": 0,
                        "marginRight": "20px",
                        "shrink": 0,
                        "bindingKey": "peritonealDialysisCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 434,
                        "label": "出口部管理",
                        "grow": 0,
                        "marginRight": "20px",
                        "shrink": 0,
                        "bindingKey": "exitManagementCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 435,
                        "label": "ストマ処理",
                        "grow": 0,
                        "marginRight": "20px",
                        "shrink": 0,
                        "bindingKey": "stomaProcessingCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 436,
                        "label": "パウチ交換",
                        "grow": 0,
                        "marginRight": "20px",
                        "shrink": 0,
                        "bindingKey": "pouchExchangeCheck"
                      },
                      {
                        "type": "box",
                        "id": 437,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 438,
                            "label": "点滴",
                            "grow": 0,
                            "marginRight": "20px",
                            "shrink": 0,
                            "bindingKey": "intravenousCheck1"
                          },
                          {
                            "type": "box",
                            "id": 439,
                            "contents": [
                              {
                                "type": "text",
                                "id": 440,
                                "text": "薬剤",
                                "shrink": 0,
                                "marginRight": "10px"
                              },
                              {
                                "type": "select",
                                "id": 441,
                                "dense": true,
                                "marginRight": "10px",
                                "flexGrow": 0,
                                "flexShrink": 1,
                                "bindingKey": "intravenousSelect",
                                "options": [
                                  "選択"
                                ]
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "20px"
                          },
                          {
                            "type": "box",
                            "id": 442,
                            "contents": [
                              {
                                "type": "text",
                                "id": 443,
                                "text": "量",
                                "shrink": 0,
                                "marginRight": "10px"
                              },
                              {
                                "type": "select",
                                "id": 444,
                                "dense": true,
                                "marginRight": "10px",
                                "flexGrow": 0,
                                "flexShrink": 1,
                                "options": [
                                  "選択"
                                ],
                                "bindingKey": "intravenousAmountSelect1"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "20px"
                          },
                          {
                            "type": "box",
                            "id": 445,
                            "contents": [
                              {
                                "type": "text",
                                "id": 446,
                                "text": "速度",
                                "shrink": 0,
                                "marginRight": "10px"
                              },
                              {
                                "type": "select",
                                "id": 447,
                                "dense": true,
                                "marginRight": "10px",
                                "flexGrow": 0,
                                "flexShrink": 1,
                                "options": [
                                  "選択"
                                ],
                                "bindingKey": "intravenousSpeedSelect1"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "20px"
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center",
                        "marginRight": "20px",
                        "flexShrink": 0
                      },
                      {
                        "type": "box",
                        "id": 448,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 449,
                            "label": "注射",
                            "grow": 0,
                            "marginRight": "20px",
                            "shrink": 0,
                            "bindingKey": "injectionCheck1"
                          },
                          {
                            "type": "box",
                            "id": 450,
                            "contents": [
                              {
                                "type": "text",
                                "id": 451,
                                "text": "薬剤",
                                "shrink": 0,
                                "marginRight": "10px"
                              },
                              {
                                "type": "select",
                                "id": 452,
                                "dense": true,
                                "marginRight": "10px",
                                "flexGrow": 0,
                                "flexShrink": 1,
                                "options": [
                                  "選択"
                                ],
                                "bindingKey": "injectionMedicineSelect1"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "20px"
                          },
                          {
                            "type": "box",
                            "id": 453,
                            "contents": [
                              {
                                "type": "text",
                                "id": 454,
                                "text": "部位",
                                "shrink": 0,
                                "marginRight": "10px"
                              },
                              {
                                "type": "select",
                                "id": 455,
                                "dense": true,
                                "marginRight": "10px",
                                "flexGrow": 0,
                                "flexShrink": 1,
                                "options": [
                                  "選択"
                                ],
                                "bindingKey": "injectionLocationSelect1"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "20px"
                          },
                          {
                            "type": "box",
                            "id": 456,
                            "contents": [
                              {
                                "type": "text",
                                "id": 457,
                                "text": "方法",
                                "shrink": 0,
                                "marginRight": "10px"
                              },
                              {
                                "type": "select",
                                "id": 458,
                                "dense": true,
                                "marginRight": "10px",
                                "flexGrow": 0,
                                "flexShrink": 1,
                                "options": [
                                  "選択"
                                ],
                                "bindingKey": "injectionMethodSelect1"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "20px"
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center",
                        "marginRight": "20px",
                        "flexShrink": 0
                      },
                      {
                        "type": "box",
                        "id": 459,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 460,
                            "label": "その他",
                            "grow": 0,
                            "marginRight": "20px",
                            "shrink": 0,
                            "bindingKey": "otherCheck"
                          },
                          {
                            "type": "select",
                            "id": 461,
                            "dense": true,
                            "marginRight": "10px",
                            "flexGrow": 0,
                            "flexShrink": 1,
                            "bindingKey": "otherSelect",
                            "options": [
                              "選択"
                            ]
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center",
                        "marginRight": "20px",
                        "flexShrink": 0
                      }
                    ],
                    "wrap": true,
                    "alignItems": "align-start",
                    "layout": "column"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 462,
            "contents": [
              {
                "type": "tcol",
                "id": 463,
                "contents": [
                  {
                    "type": "text",
                    "id": 464,
                    "text": "睡眠のケア・指導",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 465,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 466,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 467,
                        "shrink": 0,
                        "grow": 0,
                        "label": "入眠を促すマッサージ",
                        "marginRight": "20px",
                        "bindingKey": "massageEncourageFallingAsleepCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 468,
                        "label": "生活指導",
                        "grow": 0,
                        "shrink": 0,
                        "marginRight": "20px",
                        "bindingKey": "lifeGuidanceCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 469,
                        "label": "足浴",
                        "grow": 0,
                        "shrink": 0,
                        "marginRight": "20px",
                        "bindingKey": "footBath"
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
            "id": 470,
            "contents": [
              {
                "type": "tcol",
                "id": 471,
                "contents": [
                  {
                    "type": "text",
                    "id": 472,
                    "text": "体重",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 473,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 474,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "textField",
                        "id": 475,
                        "shrink": 1,
                        "grow": 0,
                        "bindingKey": " bodyWeightText"
                      },
                      {
                        "type": "text",
                        "id": 476,
                        "text": "kg",
                        "grow": 0,
                        "shrink": 0
                      }
                    ],
                    "flexGrow": 0,
                    "alignItems": "align-center"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 477,
            "contents": [
              {
                "type": "tcol",
                "id": 478,
                "contents": [
                  {
                    "type": "text",
                    "id": 479,
                    "text": "留意点",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 480,
                "colspan": "2",
                "contents": [
                  {
                    "type": "textarea",
                    "id": 481,
                    "rows": "3",
                    "autoGrow": false,
                    "style": "standard",
                    "dense": true,
                    "bindingKey": "pointsToRememberText"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 482,
            "contents": [
              {
                "type": "tcol",
                "id": 483,
                "contents": [
                  {
                    "type": "text",
                    "id": 484,
                    "text": "次回訪問予定日",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 485,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 486,
                    "contents": [
                      {
                        "type": "radioGroup",
                        "id": 487,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 488,
                            "label": "未定"
                          },
                          {
                            "type": "radio",
                            "id": 489,
                            "label": "定期"
                          },
                          {
                            "type": "radio",
                            "id": 490,
                            "label": "振替"
                          }
                        ],
                        "direction": "row",
                        "bindingKey": "nextVisitDateRadio",
                        "dense": true,
                        "grow": 0,
                        "shrink": 0,
                        "marginRight": "20px"
                      },
                      {
                        "type": "datePicker",
                        "id": 491,
                        "dense": true,
                        "locale": "ja",
                        "marginRight": "20px",
                        "grow": 0,
                        "shrink": 1,
                        "bindingKey": "nextVisitDatePicker"
                      },
                      {
                        "type": "timeIntervalSelect",
                        "id": 492,
                        "dense": true,
                        "time": [
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
                        "marginRight": "",
                        "grow": 0,
                        "shrink": 1,
                        "bindingKey": "nextVisitDateSelect"
                      }
                    ],
                    "wrap": false,
                    "alignItems": "align-center"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "table",
        "id": 493,
        "contents": [
          {
            "type": "trow",
            "id": 494,
            "contents": [
              {
                "type": "tcol",
                "id": 495,
                "contents": [
                  {
                    "type": "text",
                    "id": 496,
                    "text": "実績",
                    "textAlign": "center"
                  }
                ],
                "width": "15%"
              },
              {
                "type": "tcol",
                "id": 497,
                "width": "25%",
                "contents": [
                  {
                    "type": "text",
                    "id": 498,
                    "text": "基本療養費"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 499,
                "width": "60%",
                "contents": [
                  {
                    "type": "box",
                    "id": 500,
                    "contents": [
                      {
                        "type": "radioGroup",
                        "id": 501,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 502,
                            "label": "Ⅰ"
                          },
                          {
                            "type": "radio",
                            "id": 503,
                            "label": "Ⅱ"
                          },
                          {
                            "type": "radio",
                            "id": 504,
                            "label": "Ⅲ"
                          }
                        ],
                        "direction": "row",
                        "dense": true,
                        "grow": 0,
                        "shrink": 0,
                        "marginRight": "20px",
                        "bindingKey": "basicMedicalExpensesRadio"
                      },
                      {
                        "type": "radioGroup",
                        "id": 505,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 506,
                            "label": "定期"
                          },
                          {
                            "type": "radio",
                            "id": 507,
                            "label": "緊急"
                          },
                          {
                            "type": "radio",
                            "id": 508,
                            "label": "緊急訪問看護加算"
                          }
                        ],
                        "direction": "row",
                        "dense": true,
                        "grow": 0,
                        "shrink": 0,
                        "bindingKey": "basicMedicalExpensesRadio1"
                      }
                    ],
                    "wrap": true
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 509,
            "contents": [
              {
                "type": "tcol",
                "id": 510,
                "contents": []
              },
              {
                "type": "tcol",
                "id": 511,
                "contents": [
                  {
                    "type": "text",
                    "id": 512,
                    "text": "精神基本療養費",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 513,
                "width": "60%",
                "contents": [
                  {
                    "type": "box",
                    "id": 514,
                    "contents": [
                      {
                        "type": "radioGroup",
                        "id": 515,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 516,
                            "label": "Ⅰ (30分未満)"
                          },
                          {
                            "type": "radio",
                            "id": 517,
                            "label": "Ⅱ (30分以上)"
                          }
                        ],
                        "direction": "row",
                        "dense": true,
                        "grow": 0,
                        "shrink": 0,
                        "marginRight": "20px",
                        "bindingKey": "basicMentalHealthExpensesRadio"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 518,
            "contents": [
              {
                "type": "tcol",
                "id": 519,
                "contents": [
                  {
                    "type": "text",
                    "id": 520,
                    "text": "加算",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 521,
                "contents": [
                  {
                    "type": "text",
                    "id": 522,
                    "text": "緊急時訪問看護加算"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 523,
                "contents": [
                  {
                    "type": "radioGroup",
                    "id": 524,
                    "contents": [
                      {
                        "type": "radio",
                        "id": 525,
                        "label": "有"
                      },
                      {
                        "type": "radio",
                        "id": 526,
                        "label": "無"
                      }
                    ],
                    "direction": "row",
                    "dense": true,
                    "grow": 0,
                    "shrink": 0,
                    "marginRight": "20px",
                    "bindingKey": "emergencyHomeVisitNursingAdditionRadio"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 527,
            "contents": [
              {
                "type": "tcol",
                "id": 528
              },
              {
                "type": "tcol",
                "id": 529,
                "contents": [
                  {
                    "type": "text",
                    "id": 530,
                    "text": "特別管理加算",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 531,
                "contents": [
                  {
                    "type": "box",
                    "id": 532,
                    "contents": [
                      {
                        "type": "radioGroup",
                        "id": 533,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 534,
                            "label": "Ⅰ"
                          },
                          {
                            "type": "radio",
                            "id": 535,
                            "label": "Ⅱ"
                          }
                        ],
                        "dense": true,
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "specialManagementAdditionRadio"
                      },
                      {
                        "type": "box",
                        "id": 536,
                        "contents": [
                          {
                            "type": "radioGroup",
                            "id": 537,
                            "contents": [
                              {
                                "type": "radio",
                                "id": 538,
                                "label": "悪性腫瘍指導管理"
                              },
                              {
                                "type": "radio",
                                "id": 539,
                                "label": "気管切開指導管理"
                              },
                              {
                                "type": "radio",
                                "id": 540,
                                "label": "気管ｶﾆｭｰﾚ"
                              },
                              {
                                "type": "radio",
                                "id": 541,
                                "label": "留置ｶﾃｰﾃﾙ"
                              }
                            ],
                            "direction": "row",
                            "dense": true,
                            "shrink": 0,
                            "bindingKey": "specialManagementAdditionRadio1"
                          },
                          {
                            "type": "radioGroup",
                            "id": 542,
                            "contents": [
                              {
                                "type": "radio",
                                "id": 543,
                                "label": "人工肛門・膀胱"
                              },
                              {
                                "type": "radio",
                                "id": 544,
                                "label": "真皮超褥瘡"
                              },
                              {
                                "type": "radio",
                                "id": 545,
                                "label": "週3日以上の点滴"
                              },
                              {
                                "type": "radio",
                                "id": 546,
                                "label": "各種在宅指導管理"
                              }
                            ],
                            "direction": "row",
                            "dense": true,
                            "shrink": 0,
                            "bindingKey": "specialManagementAdditionRadio2"
                          }
                        ],
                        "layout": "column",
                        "justifyContent": "justify-space-between"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 547,
            "contents": [
              {
                "type": "tcol",
                "id": 548
              },
              {
                "type": "tcol",
                "id": 549
              },
              {
                "type": "tcol",
                "id": 550,
                "contents": [
                  {
                    "type": "box",
                    "id": 551,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 552,
                        "label": "退院時共同指導管理加算",
                        "shrink": 0,
                        "marginRight": "20px",
                        "grow": 0,
                        "bindingKey": "jointGuidanceManagementAdditionAtDischargeCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 553,
                        "label": "退院支援導管加算 (退院日)",
                        "shrink": 0,
                        "marginRight": "20px",
                        "grow": 0,
                        "bindingKey": "dischargeSupportConduitAdditionCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 554,
                        "label": "複数名看護加算",
                        "shrink": 0,
                        "marginRight": "20px",
                        "grow": 0,
                        "bindingKey": "multipleNursingAdditionCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 555,
                        "label": "長時間訪問看護加算",
                        "shrink": 1,
                        "marginRight": "20px",
                        "grow": 0,
                        "bindingKey": "longTermHomeVisitNursingAdditionCheck"
                      }
                    ],
                    "wrap": true,
                    "layout": ""
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 556,
            "contents": [
              {
                "type": "tcol",
                "id": 557,
                "contents": [
                  {
                    "type": "text",
                    "id": 558,
                    "text": "保険外",
                    "textAlign": "center"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 559,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 560,
                    "contents": [
                      {
                        "type": "box",
                        "id": 561,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 562,
                            "label": "交通費",
                            "grow": 0,
                            "marginRight": "20px",
                            "bindingKey": "transportationExpensesCheck"
                          },
                          {
                            "type": "radioGroup",
                            "id": 563,
                            "contents": [
                              {
                                "type": "radio",
                                "id": 564,
                                "label": "250円"
                              },
                              {
                                "type": "radio",
                                "id": 565,
                                "label": "500円"
                              }
                            ],
                            "direction": "row",
                            "dense": true,
                            "grow": 0,
                            "bindingKey": "transportationExpensesRadio"
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center"
                      },
                      {
                        "type": "box",
                        "id": 566,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 567,
                            "label": "キャンセル料",
                            "grow": 0,
                            "marginRight": "10px",
                            "bindingKey": "cancellationChargeCheck"
                          },
                          {
                            "type": "select",
                            "id": 568,
                            "dense": true,
                            "flexGrow": 0,
                            "marginRight": "10px",
                            "bindingKey": "cancellationChargeSelect",
                            "options": [
                              "選択"
                            ]
                          },
                          {
                            "type": "text",
                            "id": 569,
                            "text": "円",
                            "grow": 0
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center"
                      },
                      {
                        "type": "box",
                        "id": 570,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 571,
                            "label": "休日・時間外",
                            "grow": 0,
                            "marginRight": "10px",
                            "bindingKey": "holidaysAfterHoursCheck"
                          },
                          {
                            "type": "select",
                            "id": 572,
                            "dense": true,
                            "flexGrow": 0,
                            "marginRight": "10px",
                            "bindingKey": "holidaysAfterHoursSelect",
                            "options": [
                              "選択"
                            ]
                          },
                          {
                            "type": "text",
                            "id": 573,
                            "text": "円",
                            "grow": 0
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center"
                      },
                      {
                        "type": "box",
                        "id": 574,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 575,
                            "label": "超過時間利用料 ( 30 分 3,000 円 ×",
                            "grow": 0,
                            "marginRight": "10px",
                            "shrink": 0,
                            "bindingKey": "overtimeUsageFeeCheck "
                          },
                          {
                            "type": "select",
                            "id": 576,
                            "flexGrow": 0,
                            "dense": true,
                            "flexShrink": 1,
                            "bindingKey": "overtimeUsageFeeSelect",
                            "options": [
                              "選択"
                            ]
                          },
                          {
                            "type": "text",
                            "id": 577,
                            "text": ")",
                            "grow": 0,
                            "marginLeft": "5px"
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center"
                      }
                    ],
                    "layout": "column"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "table",
        "id": 578,
        "contents": [
          {
            "type": "trow",
            "id": 579,
            "contents": [
              {
                "type": "tcol",
                "id": 580,
                "contents": [
                  {
                    "type": "textarea",
                    "id": 581,
                    "rows": "4",
                    "dense": true,
                    "bindingKey": "bottomtextarea1"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 582,
                "contents": [
                  {
                    "type": "textarea",
                    "id": 583,
                    "rows": "4",
                    "dense": true,
                    "bindingKey": "bottomtextarea2"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 584,
            "contents": [
              {
                "type": "tcol",
                "id": 585,
                "colspan": "2",
                "contents": [
                  {
                    "type": "text",
                    "id": 586,
                    "text": "経過記録"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 587,
            "contents": [
              {
                "type": "tcol",
                "id": 588,
                "colspan": "2",
                "contents": [
                  {
                    "type": "textarea",
                    "id": 589,
                    "rows": "4",
                    "dense": true,
                    "bindingKey": "progressRecordText"
                  }
                ]
              }
            ]
          }
        ]
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
    "bloodPressureCheckbox": null,
    "bloodPressure": null,
    "patientName": null,
    "defecationSundayCheck": false,
    "defecationAmountSundayCheck": false,
    "defecationAmountSundaySelect": "選択",
    "defecationShapeSundayCheck": false,
    "defecationShapeSundaySelect": "選択",
    "defecationTuesdayCheck": false,
    "defecationAmountTuesdayCheck": false,
    "defecationAmountTuesdaySelect": "選択",
    "defecationShapeTuesdayCheck": false,
    "defecationShapeTuesdaySelect": "選択",
    "defecationWednesdayCheck": false,
    "defecationAmountWednesdayCheck": false,
    "defecationAmountWednesdaySelect": "選択",
    "defecationShapeWednesdayCheck": false,
    "defecationShapeWednesdaySelect": "選択",
    "defecationMondayCheck": false,
    "defecationAmountMondayCheck": false,
    "defecationAmountMondaySelect": "選択",
    "defecationShapeMondayCheck": false,
    "defecationShapeMondaySelect": "選択",
    "defecationThursdayCheck": false,
    "defecationFridayCheck": false,
    "defecationAmountThursdayCheck": false,
    "defecationAmountThursdaySelect": "選択",
    "defecationShapeThursdayCheck": false,
    "defecationShapeThursdaySelect": "選択",
    "defecationAmountFridayCheck": false,
    "defecationAmountFridaySelect": "選択",
    "defecationShapeFridayCheck": false,
    "defecationShapeFridaySelect": "選択",
    "defecationSaturdayCheck": false,
    "defecationAmountSaturdayCheck": false,
    "defecationAmountSaturdaySelect": "選択",
    "defecationShapeSaturdayCheck": false,
    "defecationShapeSaturdaySelect": "選択",
    "intestinalSoundsCheck": false,
    "intestinalSoundsSelect": "選択",
    "touchExaminationCheck": false,
    "touchExaminationRadios": null,
    "touchExaminationSelect": "選択",
    "enemaCheck": null,
    "enemaRadio": null,
    "poopCheck": false,
    "defecationCheck": false,
    "poopAmountCheck": false,
    "poopAmountSelect": "選択",
    "poopShapeCheck": false,
    "poopShapeSelect": "選択",
    "poop": null,
    "poopRadio": null,
    "abdomenMassageCheck": null,
    "diaperCheck1": null,
    "diaperCheck2": null,
    "showerBathCheck": false,
    "bathingCheck": false,
    "partialBathCheck": false,
    "shampooCheck": false,
    "ShampooSelect": "選択",
    "bedBathCheck": false,
    "bedBathRadio": null,
    "bedBathPartSelect": "選択",
    "nailCuttingCheck": false,
    "clearEarCheck": false,
    "shavingHairCheck": false,
    " oralCareCheck": false,
    "dentifriceCheck": false,
    "gargleCheck": null,
    "oralWipeOffCheck": null,
    "oralWipeOffTrueCheck": false,
    "oralWipeOffNoCheck": false,
    "clothesAdjustmentCheck": false,
    "clothesChangeSelect": "選択",
    "clothesChangeCheck": false,
    "changeSheetCheck": false,
    "changeSheetSelect": "選択",
    "nailCuttingHandsCheck": false,
    "nailCuttingHandsSelect": "選択",
    "nailCuttingFootsCheck": false,
    "nailCuttingFootsSelect": "選択",
    "nursingGuidanceCheck": false,
    "eatingCheck": false,
    "drinkingCheck": false,
    "preventionOfBedsoresCheck": false,
    "bedSoreTreatmentCheck": false,
    "medicineSelect": "選択",
    "methodSelect": "選択",
    "creativeDisposalCheck": false,
    "locationSelect": "選択",
    "bodyLocationSelect": "選択",
    "treatmentSelect": "選択",
    "optionSelect": "選択",
    "topicalDrugCoatingCheck": false,
    "coatingSelect": "選択",
    "residualMedicineConfirmationCheck": false,
    "medicineAssistCheck": false,
    "oralSetCheck": false,
    "periodSelect": "選択",
    "eyeDropsCheck": false,
    "inhalationCheck": false,
    "inhalationSelect": "選択",
    "suppositoryCheck": false,
    "intravenousMedicineSelect": "選択",
    "intravenousAmountSelect": "選択",
    "intravenousSpeedSelect": "選択",
    "injectionMedicineSelect": "選択",
    "injectionLocationSelect": "選択",
    "injectionMethodSelect": "選択",
    "topicalMedicineAffixedCheck": false,
    "rangeOfMotionCheck": true,
    "rangeOfMotionSelect": "選択",
    "massageCheck": false,
    "massageSelect": "選択",
    "muscleStrengthCheck": false,
    "upperLimbsCheck": false,
    "lowerLimbsCheck": false,
    "trunkCheck": false,
    "sittingPositionCheck": false,
    "standingCheck": false,
    "walkingCheck": false,
    " breathingRehabilitationCheck": false,
    " breathingRehabilitationRadio": null,
    "oralRehabilitationCheck": false,
    "oralRehabilitationRadio": null,
    "sputumCareRadio": null,
    "oxygenTherapyCheck": false,
    "IvhCvPortCheck": false,
    "IvhCvPortRadio": null,
    "needleCheck": false,
    "needleRadio": null,
    "gastrostomyCheck": false,
    "peritonealDialysisCheck": false,
    "exitManagementCheck": false,
    "stomaProcessingCheck": false,
    "pouchExchangeCheck": false,
    "intravenousCheck": true,
    "intravenousCheck1": false,
    "otherCheck": false,
    "otherSelect": "選択",
    "massageEncourageFallingAsleepCheck": false,
    "lifeGuidanceCheck": false,
    "footBath": false,
    "intravenousSelect": "選択",
    "intravenousAmountSelect1": "選択",
    "intravenousSpeedSelect1": "選択",
    "injectionCheck": false,
    "injectionCheck1": false,
    "injectionMedicineSelect1": "選択",
    "injectionLocationSelect1": "選択",
    "injectionMethodSelect1": "選択",
    " bodyWeightText": null,
    "pointsToRememberText": null,
    "nextVisitDateRadio": null,
    "nextVisitDatePicker": null,
    "nextVisitDateSelect": null,
    "basicMedicalExpensesRadio": null,
    "basicMedicalExpensesRadio1": null,
    "basicMentalHealthExpensesRadio": null,
    "emergencyHomeVisitNursingAdditionRadio": null,
    "specialManagementAdditionRadio": null,
    "specialManagementAdditionRadio1": null,
    "specialManagementAdditionRadio2": null,
    "jointGuidanceManagementAdditionAtDischargeCheck": false,
    "dischargeSupportConduitAdditionCheck": false,
    "multipleNursingAdditionCheck": false,
    "longTermHomeVisitNursingAdditionCheck": false,
    "transportationExpensesCheck": false,
    "transportationExpensesRadio": null,
    "cancellationChargeCheck": false,
    "cancellationChargeSelect": "選択",
    "holidaysAfterHoursCheck": false,
    "holidaysAfterHoursSelect": "選択",
    "overtimeUsageFeeCheck ": false,
    "overtimeUsageFeeSelect": "選択",
    "bottomtextarea2": null,
    "bottomtextarea1": null,
    "progressRecordText": null
  }
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

export const bindingData = tableTemplate.bindingData;
export const template = tableTemplate.template;
