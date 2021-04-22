const tableTemplate = {
  name: "table demo",
  template: {
    "type": "box",
    "layout": "column",
    "id": 0,
    "contents": [
      {
        "type": "box",
        "id": 1,
        "contents": [
          {
            "type": "text",
            "id": 2,
            "text": "【医療】訪問看護記録Ⅱ",
            "fontSize": "1.5rem",
            "fontWeight": "normal"
          }
        ],
        "marginBottom": "5px"
      },
      {
        "type": "table",
        "id": 3,
        "contents": [
          {
            "type": "trow",
            "id": 4,
            "contents": [
              {
                "type": "tcol",
                "id": 5,
                "width": "16.6%",
                "contents": [
                  {
                    "type": "text",
                    "id": 6,
                    "text": "利用者氏名",
                    "fontStyle": "",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 7,
                "width": "16.6%",
                "contents": [
                  {
                    "type": "textField",
                    "id": 8,
                    "width": "auto",
                    "bindingKey": "patientName"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 9,
                "width": "16.6%",
                "contents": [
                  {
                    "type": "text",
                    "id": 10,
                    "text": "訪問者",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 11,
                "width": "16.6%",
                "contents": [
                  {
                    "type": "textField",
                    "id": 12,
                    "width": "auto",
                    "bindingKey": "visitorName"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 13,
                "width": "16.6%",
                "contents": [
                  {
                    "type": "text",
                    "id": 14,
                    "text": "同行者",
                    "width": "",
                    "textAlign": "center",
                    "fontWeight": "bold",
                    "color": "#02B1E7"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 15,
                "width": "16.6%",
                "contents": [
                  {
                    "type": "textField",
                    "id": 16,
                    "width": "auto",
                    "bindingKey": "partnerName"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 17,
            "contents": [
              {
                "type": "tcol",
                "id": 18,
                "contents": [
                  {
                    "type": "text",
                    "id": 19,
                    "text": "訪問日時",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "width": "16.6%",
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 20,
                "colspan": "3",
                "contents": [
                  {
                    "type": "box",
                    "id": 21,
                    "contents": [
                      {
                        "type": "radioGroup",
                        "id": 22,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 23,
                            "label": "定期"
                          },
                          {
                            "type": "radio",
                            "id": 24,
                            "label": "緊急"
                          }
                        ],
                        "dense": true,
                        "direction": "row",
                        "bindingKey": "visitDateRadio",
                        "shrink": 0,
                        "grow": 0
                      },
                      {
                        "type": "datePicker",
                        "id": 25,
                        "locale": "ja",
                        "style": "outlined",
                        "dense": true,
                        "bindingKey": "visitDatePicker",
                        "width": "",
                        "label": "日付の選択",
                        "marginRight": "20px",
                        "grow": 0,
                        "shrink": 1
                      },
                      {
                        "type": "timeIntervalSelect",
                        "id": 26,
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
                        "width": "",
                        "bindingKey": "visitTimeInterval",
                        "grow": 0,
                        "shrink": 1,
                        "style": "outlined"
                      }
                    ],
                    "flexShrink": 0,
                    "wrap": false,
                    "flexGrow": 0
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 27,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 28,
                    "layout": "",
                    "contents": [
                      {
                        "type": "box",
                        "id": 29,
                        "contents": [
                          {
                            "type": "text",
                            "id": 30,
                            "text": "室温",
                            "flexBasis": "auto",
                            "shrink": 0,
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "textField",
                            "id": 31,
                            "width": "",
                            "bindingKey": "roomTemperature",
                            "grow": 0,
                            "shrink": 1
                          },
                          {
                            "type": "text",
                            "id": 32,
                            "text": "℃",
                            "flexBasis": "auto",
                            "color": "rgba(0, 0, 0, 0.6)"
                          }
                        ],
                        "flexGrow": 0,
                        "flexShrink": 1,
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 33,
                        "contents": [
                          {
                            "type": "text",
                            "id": 34,
                            "text": "湿度",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "textField",
                            "id": 35,
                            "width": "",
                            "bindingKey": "roomHumidity",
                            "grow": 0,
                            "shrink": 1
                          },
                          {
                            "type": "text",
                            "id": 36,
                            "text": "%",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "color": "rgba(0, 0, 0, 0.6)"
                          }
                        ],
                        "flexGrow": 0,
                        "flexShrink": 1
                      }
                    ],
                    "wrap": false,
                    "fillHeight": false,
                    "alignItems": "align-center"
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
        "id": 37,
        "contents": [
          {
            "type": "trow",
            "id": 38,
            "contents": [
              {
                "type": "tcol",
                "id": 39,
                "contents": [
                  {
                    "type": "text",
                    "id": 40,
                    "text": "體溫",
                    "textAlign": "center",
                    "grow": 1,
                    "shrink": 1,
                    "fontWeight": "bold",
                    "color": "#02B1E7"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 41,
                "contents": [
                  {
                    "type": "text",
                    "id": 42,
                    "textAlign": "center",
                    "text": "脈拍",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 43,
                "contents": [
                  {
                    "type": "text",
                    "id": 44,
                    "text": "血圧",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 45,
                "contents": [
                  {
                    "type": "text",
                    "id": 46,
                    "text": "呼吸",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 47,
                "contents": [
                  {
                    "type": "text",
                    "id": 48,
                    "text": "SpO2",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              }
            ]
          },
          {
            "type": "trow",
            "id": 49,
            "contents": [
              {
                "type": "tcol",
                "id": 50,
                "contents": [
                  {
                    "type": "textField",
                    "id": 51,
                    "bindingKey": "bodyTemperature"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 52,
                "contents": [
                  {
                    "type": "textField",
                    "id": 53,
                    "bindingKey": "pulseInput",
                    "marginBottom": "20px"
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
                        "direction": "column",
                        "dense": true,
                        "bindingKey": "pulseRadio",
                        "grow": 0,
                        "shrink": 0,
                        "marginRight": "10px"
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
                        ],
                        "flexGrow": 0,
                        "flexShrink": 1,
                        "style": "outlined"
                      }
                    ],
                    "layout": "",
                    "flexGrow": 0,
                    "flexShrink": 0,
                    "fillHeight": true,
                    "alignItems": "align-end",
                    "wrap": true,
                    "justifyContent": "justify-start",
                    "marginTop": "10px",
                    "marginBottom": "10px"
                  },
                  {
                    "type": "box",
                    "id": 59,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 60,
                        "label": "脈圧",
                        "bindingKey": "bloodPressureCheckbox",
                        "shrink": 0,
                        "marginRight": "5px",
                        "grow": 0
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
                        "bindingKey": "bloodPressureRadio",
                        "shrink": 1,
                        "grow": 0
                      }
                    ],
                    "alignItems": "align-center",
                    "wrap": true
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
                        "type": "text",
                        "id": 66,
                        "text": "最高 / 最低",
                        "flexBasis": "auto",
                        "shrink": 0,
                        "grow": 0,
                        "color": "rgba(0, 0, 0, 0.6)"
                      },
                      {
                        "type": "textField",
                        "id": 67,
                        "shrink": 1,
                        "flex": "",
                        "flexBasis": "",
                        "width": "",
                        "bindingKey": "bloodPressure",
                        "grow": 0
                      }
                    ],
                    "wrap": false,
                    "alignItems": "align-start"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 68,
                "contents": [
                  {
                    "type": "textField",
                    "id": 69,
                    "bindingKey": "breatheInput",
                    "marginBottom": "20px"
                  },
                  {
                    "type": "box",
                    "id": 70,
                    "contents": [
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
                        "direction": "column",
                        "bindingKey": "breatheNoiseRadio",
                        "shrink": 0,
                        "grow": 0,
                        "marginRight": "10px",
                        "dense": true
                      },
                      {
                        "type": "select",
                        "id": 74,
                        "style": "outlined",
                        "dense": true,
                        "width": "",
                        "flexBasis": "",
                        "flexGrow": 0,
                        "options": [
                          "選択",
                          "連続性高調整副雑音",
                          "連続性低調性副雑音",
                          "断続性粗い副雑音",
                          "断続性細かい副雑音"
                        ],
                        "bindingKey": "breathNoiseSelectionValue",
                        "flexShrink": 1
                      }
                    ],
                    "layout": "",
                    "flexShrink": 0,
                    "alignItems": "align-start",
                    "marginTop": "10px",
                    "marginBottom": "10px",
                    "wrap": true
                  },
                  {
                    "type": "box",
                    "id": 75,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 76,
                        "label": "air入り",
                        "bindingKey": "breatheAir",
                        "shrink": 0,
                        "grow": 0,
                        "marginRight": "5px"
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
                        "bindingKey": "breatheAirRadio",
                        "shrink": 1,
                        "grow": 0
                      }
                    ],
                    "alignItems": "align-center",
                    "marginRight": "10px",
                    "wrap": true
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
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "rowspan": "4",
                "width": "12%",
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 86,
                "width": "88%",
                "contents": [
                  {
                    "type": "box",
                    "id": 87,
                    "contents": [
                      {
                        "type": "box",
                        "id": 88,
                        "layout": "",
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 89,
                            "label": "尿量",
                            "bindingKey": "urineVolume",
                            "grow": 0,
                            "marginRight": "8px",
                            "shrink": 0
                          },
                          {
                            "type": "select",
                            "id": 90,
                            "dense": true,
                            "style": "outlined",
                            "flexBasis": "",
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
                            "width": "",
                            "flexGrow": 0,
                            "flexShrink": 1,
                            "marginRight": "5px"
                          },
                          {
                            "type": "text",
                            "id": 91,
                            "text": "ml",
                            "margin": "0 8px 0 0",
                            "shrink": 0,
                            "grow": 0,
                            "color": "rgba(0, 0, 0, 0.6)"
                          }
                        ],
                        "wrap": false,
                        "justifyContent": "justify-start",
                        "alignItems": "align-center",
                        "flexGrow": 0,
                        "flexShrink": 1,
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 92,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 93,
                            "label": "性状",
                            "bindingKey": "urineSituation",
                            "grow": 0,
                            "marginRight": "8px",
                            "shrink": 0
                          },
                          {
                            "type": "select",
                            "id": 94,
                            "bindingKey": "urineSituationSelection",
                            "dense": true,
                            "options": [
                              "選択",
                              "クリア",
                              "混濁",
                              "浮遊物"
                            ],
                            "width": "",
                            "flexGrow": 0,
                            "flexShrink": 1,
                            "style": "outlined"
                          }
                        ],
                        "alignItems": "align-center",
                        "flexGrow": 0,
                        "flexShrink": 1
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
            "id": 95,
            "contents": [
              {
                "type": "tcol",
                "id": 96,
                "width": "",
                "contents": [
                  {
                    "type": "box",
                    "id": 97,
                    "contents": [
                      {
                        "type": "box",
                        "id": 98,
                        "layout": "",
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 99,
                            "label": "道量",
                            "grow": 0,
                            "marginRight": "8px",
                            "shrink": 0,
                            "bindingKey": "urinePathVolume"
                          },
                          {
                            "type": "select",
                            "id": 100,
                            "dense": true,
                            "style": "outlined",
                            "flexBasis": "",
                            "options": [
                              "選択",
                              "< 100",
                              "100",
                              "200",
                              "300",
                              "400",
                              "> 400"
                            ],
                            "width": "",
                            "flexGrow": 0,
                            "flexShrink": 1,
                            "marginRight": "5px",
                            "bindingKey": "pathSelection"
                          },
                          {
                            "type": "text",
                            "id": 101,
                            "text": "ml",
                            "margin": "0 8px 0 0",
                            "shrink": 0,
                            "grow": 0,
                            "color": "rgba(0, 0, 0, 0.6)"
                          }
                        ],
                        "wrap": false,
                        "justifyContent": "justify-start",
                        "alignItems": "align-center",
                        "flexGrow": 0,
                        "flexShrink": 1,
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 102,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 103,
                            "label": "性状",
                            "grow": 0,
                            "marginRight": "8px",
                            "shrink": 0,
                            "bindingKey": "urinePathSituation"
                          },
                          {
                            "type": "select",
                            "id": 104,
                            "dense": true,
                            "options": [
                              "選択",
                              "クリア",
                              "混濁",
                              "浮遊物"
                            ],
                            "bindingKey": "pathSituationSelection",
                            "flexGrow": 0,
                            "width": "",
                            "flexShrink": 1,
                            "style": "outlined"
                          }
                        ],
                        "alignItems": "align-center",
                        "flexGrow": 0,
                        "flexShrink": 1,
                        "wrap": false
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
            "id": 105,
            "contents": [
              {
                "type": "tcol",
                "id": 106,
                "contents": [
                  {
                    "type": "box",
                    "id": 107,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 108,
                        "bindingKey": "urineTubeCheckbox",
                        "label": "尿管交換",
                        "grow": 0,
                        "marginRight": "8px",
                        "shrink": 0
                      },
                      {
                        "type": "box",
                        "id": 109,
                        "contents": [
                          {
                            "type": "text",
                            "id": 110,
                            "text": "(",
                            "flexBasis": "auto",
                            "marginRight": "5px",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "checkbox",
                            "id": 111,
                            "grow": 0,
                            "label": "管のサイズ",
                            "bindingKey": "urineTubecheckbox1",
                            "marginLeft": "",
                            "marginRight": "10px",
                            "shrink": 0
                          },
                          {
                            "type": "select",
                            "id": 112,
                            "dense": true,
                            "width": "",
                            "options": [
                              "選択",
                              "12",
                              "14",
                              "16",
                              "18",
                              "20"
                            ],
                            "bindingKey": "tubeSelection",
                            "flexGrow": 0,
                            "flexShrink": 1,
                            "marginRight": "5px",
                            "style": "outlined"
                          },
                          {
                            "type": "text",
                            "id": 113,
                            "text": "Fr　",
                            "grow": 0,
                            "shrink": 0,
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "checkbox",
                            "id": 114,
                            "bindingKey": "urineTubeWaterCheckbox",
                            "label": "カフ水",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 115,
                            "dense": true,
                            "width": "",
                            "flexBasis": "",
                            "bindingKey": "waterSelection",
                            "options": [
                              "選択",
                              "5",
                              "10",
                              "15",
                              "20",
                              "30"
                            ],
                            "flexGrow": 0,
                            "marginRight": "5px",
                            "style": "outlined"
                          },
                          {
                            "type": "text",
                            "id": 116,
                            "flexBasis": "auto",
                            "text": "ml",
                            "marginRight": "5px",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "text",
                            "id": 117,
                            "text": ")",
                            "color": "rgba(0, 0, 0, 0.6)"
                          }
                        ],
                        "flexGrow": 0,
                        "flexShrink": 1,
                        "alignItems": "align-center"
                      }
                    ],
                    "wrap": false,
                    "alignItems": "align-center"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 118,
            "contents": [
              {
                "type": "tcol",
                "id": 119,
                "contents": [
                  {
                    "type": "box",
                    "id": 120,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 121,
                        "label": "尿管管理",
                        "bindingKey": "urineTubeExchange1",
                        "grow": 0,
                        "marginRight": "5px",
                        "shrink": 0
                      },
                      {
                        "type": "box",
                        "id": 122,
                        "contents": [
                          {
                            "type": "text",
                            "id": 123,
                            "text": "(",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "5px",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "checkbox",
                            "id": 124,
                            "grow": 0,
                            "bindingKey": "bladderClean",
                            "label": "膀胱洗浄",
                            "marginRight": "10px",
                            "shrink": 0
                          },
                          {
                            "type": "box",
                            "id": 125,
                            "contents": [
                              {
                                "type": "checkbox",
                                "id": 126,
                                "grow": 0,
                                "bindingKey": "bladderClean1",
                                "label": "ミルキング",
                                "marginRight": "10px",
                                "shrink": 0
                              },
                              {
                                "type": "select",
                                "id": 127,
                                "dense": true,
                                "width": "",
                                "flexBasis": "",
                                "options": [
                                  "選択",
                                  "実施",
                                  "指導"
                                ],
                                "bindingKey": "urinaryCleanSelection",
                                "flexGrow": 0,
                                "flexShrink": 1,
                                "style": "outlined"
                              }
                            ],
                            "alignItems": "align-center",
                            "flexShrink": 1,
                            "flexGrow": 0,
                            "marginRight": "10px"
                          },
                          {
                            "type": "checkbox",
                            "id": 128,
                            "bindingKey": "bladderClean2",
                            "label": "パープルシンドローム",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "5px"
                          },
                          {
                            "type": "text",
                            "id": 129,
                            "text": ")",
                            "grow": 0,
                            "shrink": 0,
                            "color": "rgba(0, 0, 0, 0.6)"
                          }
                        ],
                        "alignItems": "align-center"
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
        "id": 130,
        "contents": [
          {
            "type": "trow",
            "id": 131,
            "contents": [
              {
                "type": "tcol",
                "id": 132,
                "contents": [
                  {
                    "type": "text",
                    "id": 133,
                    "text": "排便",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "rowspan": "10",
                "width": "12%",
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 134,
                "colspan": "2",
                "width": "88%",
                "contents": [
                  {
                    "type": "box",
                    "id": 135,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 136,
                        "label": "腸蠕動音",
                        "grow": 0,
                        "bindingKey": "intestinalSoundsCheck"
                      },
                      {
                        "type": "select",
                        "id": 137,
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
                        "marginLeft": "10px",
                        "style": "outlined"
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
            "id": 138,
            "contents": [
              {
                "type": "tcol",
                "id": 139,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 140,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 141,
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
            "id": 142,
            "contents": [
              {
                "type": "tcol",
                "id": 143,
                "contents": [
                  {
                    "type": "box",
                    "id": 144,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 145,
                        "label": "日",
                        "grow": 0,
                        "marginRight": "10px",
                        "bindingKey": "defecationSundayCheck"
                      },
                      {
                        "type": "box",
                        "id": 146,
                        "contents": [
                          {
                            "type": "text",
                            "id": 147,
                            "text": "(",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "5px",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "checkbox",
                            "id": 148,
                            "label": "量",
                            "grow": 0,
                            "bindingKey": "defecationAmountSundayCheck",
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 149,
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
                            "marginLeft": "",
                            "flexShrink": 1,
                            "bindingKey": "defecationAmountSundaySelect",
                            "style": "outlined",
                            "marginRight": "10px"
                          },
                          {
                            "type": "checkbox",
                            "id": 150,
                            "label": "性状",
                            "marginLeft": "",
                            "grow": 0,
                            "shrink": 0,
                            "bindingKey": "defecationShapeSundayCheck",
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 151,
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
                            "marginLeft": "",
                            "flexShrink": 1,
                            "bindingKey": "defecationShapeSundaySelect",
                            "style": "outlined",
                            "marginRight": "5px"
                          },
                          {
                            "type": "text",
                            "id": 152,
                            "text": ")",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "",
                            "color": "rgba(0, 0, 0, 0.6)"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginLeft": "",
                        "flexShrink": 1,
                        "flexGrow": 0,
                        "wrap": false
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
                "id": 153,
                "contents": [
                  {
                    "type": "box",
                    "id": 154,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 155,
                        "label": "月",
                        "grow": 0,
                        "marginRight": "10px",
                        "bindingKey": "defecationMondayCheck"
                      },
                      {
                        "type": "box",
                        "id": 156,
                        "contents": [
                          {
                            "type": "text",
                            "id": 157,
                            "text": "(",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "5px",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "checkbox",
                            "id": 158,
                            "label": "量",
                            "grow": 0,
                            "bindingKey": "defecationAmountMondayCheck",
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 159,
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
                            "marginLeft": "",
                            "flexShrink": 1,
                            "bindingKey": "defecationAmountMondaySelect",
                            "style": "outlined",
                            "marginRight": "10px"
                          },
                          {
                            "type": "checkbox",
                            "id": 160,
                            "label": "性状",
                            "marginLeft": "",
                            "grow": 0,
                            "shrink": 0,
                            "bindingKey": "defecationShapeMondayCheck",
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 161,
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
                            "marginLeft": "",
                            "flexShrink": 1,
                            "bindingKey": "defecationShapeMondaySelect",
                            "style": "outlined",
                            "marginRight": "10px"
                          },
                          {
                            "type": "text",
                            "id": 162,
                            "text": ")",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "",
                            "color": "rgba(0, 0, 0, 0.6)"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginLeft": "",
                        "flexShrink": 1,
                        "flexGrow": 0,
                        "wrap": false
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
            "id": 163,
            "contents": [
              {
                "type": "tcol",
                "id": 164,
                "contents": [
                  {
                    "type": "box",
                    "id": 165,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 166,
                        "label": "火",
                        "grow": 0,
                        "marginRight": "10px",
                        "bindingKey": "defecationTuesdayCheck"
                      },
                      {
                        "type": "box",
                        "id": 167,
                        "contents": [
                          {
                            "type": "text",
                            "id": 168,
                            "text": "(",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "5px",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "checkbox",
                            "id": 169,
                            "label": "量",
                            "grow": 0,
                            "bindingKey": "defecationAmountTuesdayCheck",
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 170,
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
                            "marginLeft": "",
                            "flexShrink": 1,
                            "bindingKey": "defecationAmountTuesdaySelect",
                            "style": "outlined",
                            "marginRight": "10px"
                          },
                          {
                            "type": "checkbox",
                            "id": 171,
                            "label": "性状",
                            "marginLeft": "",
                            "grow": 0,
                            "shrink": 0,
                            "bindingKey": "defecationShapeTuesdayCheck",
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 172,
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
                            "marginLeft": "",
                            "flexShrink": 1,
                            "bindingKey": "defecationShapeTuesdaySelect",
                            "style": "outlined",
                            "marginRight": "5px"
                          },
                          {
                            "type": "text",
                            "id": 173,
                            "text": ")",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "",
                            "color": "rgba(0, 0, 0, 0.6)"
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
                "id": 174,
                "contents": [
                  {
                    "type": "box",
                    "id": 175,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 176,
                        "label": "水",
                        "grow": 0,
                        "marginRight": "10px",
                        "bindingKey": "defecationWednesdayCheck"
                      },
                      {
                        "type": "box",
                        "id": 177,
                        "contents": [
                          {
                            "type": "text",
                            "id": 178,
                            "text": "(",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "5px",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "checkbox",
                            "id": 179,
                            "label": "量",
                            "grow": 0,
                            "bindingKey": "defecationAmountWednesdayCheck",
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 180,
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
                            "marginLeft": "",
                            "flexShrink": 1,
                            "bindingKey": "defecationAmountWednesdaySelect",
                            "style": "outlined",
                            "marginRight": "10px"
                          },
                          {
                            "type": "checkbox",
                            "id": 181,
                            "label": "性状",
                            "marginLeft": "",
                            "grow": 0,
                            "shrink": 0,
                            "bindingKey": "defecationShapeWednesdayCheck",
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 182,
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
                            "marginLeft": "",
                            "flexShrink": 1,
                            "bindingKey": "defecationShapeWednesdaySelect",
                            "style": "outlined",
                            "marginRight": "5px"
                          },
                          {
                            "type": "text",
                            "id": 183,
                            "text": ")",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "",
                            "color": "rgba(0, 0, 0, 0.6)"
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
            "id": 184,
            "contents": [
              {
                "type": "tcol",
                "id": 185,
                "contents": [
                  {
                    "type": "box",
                    "id": 186,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 187,
                        "label": "木",
                        "grow": 0,
                        "marginRight": "10px",
                        "bindingKey": "defecationThursdayCheck"
                      },
                      {
                        "type": "box",
                        "id": 188,
                        "contents": [
                          {
                            "type": "text",
                            "id": 189,
                            "text": "(",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "5px",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "checkbox",
                            "id": 190,
                            "label": "量",
                            "grow": 0,
                            "bindingKey": "defecationAmountThursdayCheck",
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 191,
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
                            "marginLeft": "",
                            "flexShrink": 1,
                            "bindingKey": "defecationAmountThursdaySelect",
                            "style": "outlined",
                            "marginRight": "10px"
                          },
                          {
                            "type": "checkbox",
                            "id": 192,
                            "label": "性状",
                            "marginLeft": "",
                            "grow": 0,
                            "shrink": 0,
                            "bindingKey": "defecationShapeThursdayCheck",
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 193,
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
                            "marginLeft": "",
                            "flexShrink": 1,
                            "bindingKey": "defecationShapeThursdaySelect",
                            "style": "outlined",
                            "marginRight": "5px"
                          },
                          {
                            "type": "text",
                            "id": 194,
                            "text": ")",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "",
                            "color": "rgba(0, 0, 0, 0.6)"
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
                "id": 195,
                "contents": [
                  {
                    "type": "box",
                    "id": 196,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 197,
                        "label": "金",
                        "grow": 0,
                        "marginRight": "10px",
                        "bindingKey": "defecationFridayCheck"
                      },
                      {
                        "type": "box",
                        "id": 198,
                        "contents": [
                          {
                            "type": "text",
                            "id": 199,
                            "text": "(",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "5px",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "checkbox",
                            "id": 200,
                            "label": "量",
                            "grow": 0,
                            "bindingKey": "defecationAmountFridayCheck",
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 201,
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
                            "marginLeft": "",
                            "flexShrink": 1,
                            "bindingKey": "defecationAmountFridaySelect",
                            "style": "outlined",
                            "marginRight": "10px"
                          },
                          {
                            "type": "checkbox",
                            "id": 202,
                            "label": "性状",
                            "marginLeft": "",
                            "grow": 0,
                            "shrink": 0,
                            "bindingKey": "defecationShapeFridayCheck",
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 203,
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
                            "marginLeft": "",
                            "flexShrink": 1,
                            "bindingKey": "defecationShapeFridaySelect",
                            "style": "outlined",
                            "marginRight": "5px"
                          },
                          {
                            "type": "text",
                            "id": 204,
                            "text": ")",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "",
                            "color": "rgba(0, 0, 0, 0.6)"
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
            "id": 205,
            "contents": [
              {
                "type": "tcol",
                "id": 206,
                "contents": [
                  {
                    "type": "box",
                    "id": 207,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 208,
                        "label": "土",
                        "grow": 0,
                        "marginRight": "10px",
                        "bindingKey": "defecationSaturdayCheck"
                      },
                      {
                        "type": "box",
                        "id": 209,
                        "contents": [
                          {
                            "type": "text",
                            "id": 210,
                            "text": "(",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "5px",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "checkbox",
                            "id": 211,
                            "label": "量",
                            "grow": 0,
                            "bindingKey": "defecationAmountSaturdayCheck",
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 212,
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
                            "marginLeft": "",
                            "flexShrink": 1,
                            "bindingKey": "defecationAmountSaturdaySelect",
                            "style": "outlined",
                            "marginRight": "10px"
                          },
                          {
                            "type": "checkbox",
                            "id": 213,
                            "label": "性状",
                            "marginLeft": "",
                            "grow": 0,
                            "shrink": 0,
                            "bindingKey": "defecationShapeSaturdayCheck",
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 214,
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
                            "marginLeft": "",
                            "flexShrink": 1,
                            "bindingKey": "defecationShapeSaturdaySelect",
                            "style": "outlined",
                            "marginRight": "5px"
                          },
                          {
                            "type": "text",
                            "id": 215,
                            "text": ")",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "",
                            "color": "rgba(0, 0, 0, 0.6)"
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
                "id": 216,
                "contents": []
              }
            ]
          },
          {
            "type": "trow",
            "id": 217,
            "contents": [
              {
                "type": "tcol",
                "id": 218,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 219,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 220,
                        "label": "指診",
                        "grow": 0,
                        "shrink": 0,
                        "bindingKey": "touchExaminationCheck"
                      },
                      {
                        "type": "radioGroup",
                        "id": 221,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 222,
                            "label": "触れず"
                          },
                          {
                            "type": "radio",
                            "id": 223,
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
                        "id": 224,
                        "flexGrow": 0,
                        "dense": true,
                        "flexShrink": 1,
                        "bindingKey": "touchExaminationSelect",
                        "options": [
                          "選択",
                          "硬便",
                          "普通便",
                          "軟便"
                        ],
                        "style": "outlined"
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
            "id": 225,
            "contents": [
              {
                "type": "tcol",
                "id": 226,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 227,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 228,
                        "label": "浣腸",
                        "grow": 0,
                        "shrink": 0,
                        "bindingKey": "enemaCheck"
                      },
                      {
                        "type": "radioGroup",
                        "id": 229,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 230,
                            "label": "30ml"
                          },
                          {
                            "type": "radio",
                            "id": 231,
                            "label": "60ml"
                          },
                          {
                            "type": "radio",
                            "id": 232,
                            "label": "120ml"
                          },
                          {
                            "type": "radio",
                            "id": 233,
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
            "id": 234,
            "contents": [
              {
                "type": "tcol",
                "id": 235,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 236,
                    "contents": [
                      {
                        "type": "radioGroup",
                        "id": 237,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 238,
                            "label": "摘便実施"
                          },
                          {
                            "type": "radio",
                            "id": 239,
                            "label": "摘便未実施"
                          }
                        ],
                        "direction": "column",
                        "dense": true,
                        "grow": 0,
                        "shrink": 0,
                        "label": "",
                        "bindingKey": "poopRadio",
                        "marginRight": "10px"
                      },
                      {
                        "type": "box",
                        "id": 240,
                        "contents": [
                          {
                            "type": "text",
                            "id": 241,
                            "text": "(",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "5px",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "checkbox",
                            "id": 242,
                            "label": "量",
                            "grow": 0,
                            "marginLeft": "",
                            "bindingKey": "poopAmountCheck",
                            "marginRight": "10px"
                          },
                          {
                            "type": "multiSelect",
                            "id": 243,
                            "options": [
                              "選択",
                              "母指大",
                              "片手半分",
                              "片手",
                              "両手",
                              "両手山盛り"
                            ],
                            "dense": true,
                            "style": "outlined",
                            "margin": "",
                            "bindingKey": "poopAmountSelect",
                            "grow": 0,
                            "shirnk": 1,
                            "marginLeft": ""
                          }
                        ],
                        "flexGrow": 0,
                        "marginLeft": "",
                        "alignItems": "align-center",
                        "marginRight": "10px",
                        "flexShrink": 1
                      },
                      {
                        "type": "box",
                        "id": 244,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 245,
                            "label": "性状",
                            "grow": 0,
                            "marginLeft": "",
                            "shrink": 0,
                            "bindingKey": "poopShapeCheck",
                            "marginRight": "10px"
                          },
                          {
                            "type": "multiSelect",
                            "id": 246,
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
                            "style": "outlined",
                            "dense": true,
                            "marginRight": "10px",
                            "bindingKey": "poopShapeSelect",
                            "grow": 0,
                            "shirnk": 1
                          },
                          {
                            "type": "text",
                            "id": 247,
                            "text": ")",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "",
                            "color": "rgba(0, 0, 0, 0.6)"
                          }
                        ],
                        "flexGrow": 0,
                        "marginLeft": "",
                        "alignItems": "align-center",
                        "flexShrink": 1
                      }
                    ],
                    "alignItems": "align-start"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 248,
            "contents": [
              {
                "type": "tcol",
                "id": 249,
                "colspan": "2",
                "contents": [
                  {
                    "type": "checkbox",
                    "id": 250,
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
            "id": 251,
            "contents": [
              {
                "type": "tcol",
                "id": 252,
                "contents": [
                  {
                    "type": "text",
                    "id": 253,
                    "text": "オムツ交換",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "width": "",
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 254,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 255,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 256,
                        "label": "オムツ",
                        "grow": 0,
                        "bindingKey": "diaperCheck1"
                      },
                      {
                        "type": "checkbox",
                        "id": 257,
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
            "id": 258,
            "contents": [
              {
                "type": "tcol",
                "id": 259,
                "rowspan": "",
                "contents": [
                  {
                    "type": "text",
                    "id": 260,
                    "text": "清潔ケア・指導",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 261,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 262,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 263,
                        "label": "入浴",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "bathingCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 264,
                        "label": "シャワー浴",
                        "grow": 0,
                        "marginLeft": "",
                        "marginRight": "20px",
                        "bindingKey": "showerBathCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 265,
                        "label": "部分浴",
                        "grow": 0,
                        "marginLeft": "",
                        "marginRight": "20px",
                        "bindingKey": "partialBathCheck"
                      },
                      {
                        "type": "box",
                        "id": 266,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 267,
                            "label": "洗髪",
                            "grow": 0,
                            "marginLeft": "",
                            "marginRight": "10px",
                            "bindingKey": "shampooCheck"
                          },
                          {
                            "type": "select",
                            "id": 268,
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
                            ],
                            "style": "outlined"
                          }
                        ],
                        "flexGrow": 0,
                        "marginLeft": "",
                        "alignItems": "align-center",
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 269,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 270,
                            "label": "清拭",
                            "grow": 0,
                            "marginLeft": "",
                            "bindingKey": "bedBathCheck",
                            "shrink": 0,
                            "marginRight": "10px"
                          },
                          {
                            "type": "text",
                            "id": 271,
                            "text": "(",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "radioGroup",
                            "id": 272,
                            "contents": [
                              {
                                "type": "radio",
                                "id": 273,
                                "label": "全身"
                              },
                              {
                                "type": "radio",
                                "id": 274,
                                "label": "一部"
                              }
                            ],
                            "direction": "row",
                            "grow": 0,
                            "marginLeft": "5px",
                            "dense": true,
                            "bindingKey": "bedBathRadio",
                            "shrink": 0
                          },
                          {
                            "type": "select",
                            "id": 275,
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
                            ],
                            "style": "outlined",
                            "marginRight": "5px"
                          },
                          {
                            "type": "text",
                            "id": 276,
                            "text": ")",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "",
                            "color": "rgba(0, 0, 0, 0.6)"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginLeft": "",
                        "flexGrow": 0,
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 277,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 278,
                            "label": "爪切り",
                            "grow": 0,
                            "marginLeft": "",
                            "marginRight": "10px",
                            "bindingKey": "nailCuttingCheck",
                            "shrink": 0
                          },
                          {
                            "type": "text",
                            "id": 279,
                            "text": "(",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "5px",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "box",
                            "id": 280,
                            "contents": [
                              {
                                "type": "checkbox",
                                "id": 281,
                                "label": "手",
                                "bindingKey": "nailCuttingHandsCheck",
                                "shrink": 0,
                                "marginRight": "10px"
                              },
                              {
                                "type": "select",
                                "id": 282,
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
                                "marginRight": "",
                                "style": "outlined"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "10px"
                          },
                          {
                            "type": "box",
                            "id": 283,
                            "contents": [
                              {
                                "type": "checkbox",
                                "id": 284,
                                "label": "足",
                                "bindingKey": "nailCuttingFootsCheck",
                                "shrink": 0,
                                "marginRight": "10px"
                              },
                              {
                                "type": "select",
                                "id": 285,
                                "bindingKey": "nailCuttingFootsSelect",
                                "options": [
                                  "選択",
                                  "両足",
                                  "右足のみ",
                                  "左足のみ"
                                ],
                                "flexShrink": 1,
                                "flexGrow": 0,
                                "dense": true,
                                "style": "outlined"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "5px"
                          },
                          {
                            "type": "text",
                            "id": 286,
                            "text": ")",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "",
                            "color": "rgba(0, 0, 0, 0.6)"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginLeft": "",
                        "flexGrow": 0,
                        "marginRight": "20px"
                      },
                      {
                        "type": "checkbox",
                        "id": 287,
                        "label": "耳垢除去",
                        "grow": 0,
                        "marginLeft": "",
                        "marginRight": "20px",
                        "bindingKey": "clearEarCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 288,
                        "label": "髭剃り",
                        "grow": 0,
                        "marginLeft": "",
                        "marginRight": "20px",
                        "bindingKey": "shavingHairCheck"
                      },
                      {
                        "type": "box",
                        "id": 289,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 290,
                            "label": "口腔ケア",
                            "grow": 0,
                            "marginLeft": "",
                            "marginRight": "10px",
                            "shrink": 0,
                            "bindingKey": " oralCareCheck"
                          },
                          {
                            "type": "text",
                            "id": 291,
                            "text": "(",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "5px",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "box",
                            "id": 292,
                            "contents": [
                              {
                                "type": "checkbox",
                                "id": 293,
                                "label": "歯磨き",
                                "grow": 0,
                                "marginLeft": "",
                                "marginRight": "10px",
                                "shrink": 0,
                                "bindingKey": "dentifriceCheck"
                              },
                              {
                                "type": "checkbox",
                                "id": 294,
                                "label": "うがい",
                                "grow": 0,
                                "marginLeft": "",
                                "marginRight": "10px",
                                "shrink": 0,
                                "bindingKey": "gargleCheck"
                              },
                              {
                                "type": "box",
                                "id": 295,
                                "contents": [
                                  {
                                    "type": "checkbox",
                                    "id": 296,
                                    "label": "拭き取り",
                                    "grow": 0,
                                    "marginLeft": "",
                                    "marginRight": "10px",
                                    "shrink": 0,
                                    "bindingKey": "oralWipeOffCheck"
                                  },
                                  {
                                    "type": "box",
                                    "id": 297,
                                    "contents": [
                                      {
                                        "type": "text",
                                        "id": 298,
                                        "text": "(",
                                        "flexBasis": "auto",
                                        "grow": 0,
                                        "shrink": 0,
                                        "marginRight": "5px",
                                        "color": "rgba(0, 0, 0, 0.6)"
                                      },
                                      {
                                        "type": "checkbox",
                                        "id": 299,
                                        "label": "実施",
                                        "grow": 0,
                                        "marginLeft": "",
                                        "marginRight": "10px",
                                        "shrink": 0,
                                        "bindingKey": "oralWipeOffTrueCheck"
                                      },
                                      {
                                        "type": "checkbox",
                                        "id": 300,
                                        "label": "指導",
                                        "grow": 0,
                                        "marginLeft": "",
                                        "marginRight": "5px",
                                        "shrink": 0,
                                        "bindingKey": "oralWipeOffNoCheck"
                                      },
                                      {
                                        "type": "text",
                                        "id": 301,
                                        "text": ")",
                                        "flexBasis": "auto",
                                        "grow": 0,
                                        "shrink": 0,
                                        "marginRight": "",
                                        "color": "rgba(0, 0, 0, 0.6)"
                                      }
                                    ],
                                    "alignItems": "align-center",
                                    "marginRight": ""
                                  }
                                ],
                                "alignItems": "align-center"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginLeft": "",
                            "flexGrow": 0,
                            "marginRight": "5px"
                          },
                          {
                            "type": "text",
                            "id": 302,
                            "text": ")",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "",
                            "color": "rgba(0, 0, 0, 0.6)"
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
            "id": 303,
            "contents": [
              {
                "type": "tcol",
                "id": 304,
                "contents": [
                  {
                    "type": "text",
                    "id": 305,
                    "text": "衣生活のケア・指導",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 306,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 307,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 308,
                        "label": "衣服調整",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "clothesAdjustmentCheck",
                        "shrink": 0
                      },
                      {
                        "type": "box",
                        "id": 309,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 310,
                            "label": "更衣",
                            "grow": 0,
                            "marginRight": "10px",
                            "bindingKey": "clothesChangeCheck",
                            "shrink": 0
                          },
                          {
                            "type": "select",
                            "id": 311,
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
                            ],
                            "style": "outlined"
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center",
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 312,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 313,
                            "grow": 0,
                            "label": "シーツ交換",
                            "marginRight": "10px",
                            "bindingKey": "changeSheetCheck",
                            "shrink": 0
                          },
                          {
                            "type": "select",
                            "id": 314,
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
                            ],
                            "style": "outlined"
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
            "id": 315,
            "contents": [
              {
                "type": "tcol",
                "id": 316,
                "contents": [
                  {
                    "type": "text",
                    "id": 317,
                    "text": "食事栄養のケア・指導",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 318,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 319,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 320,
                        "label": "栄養指導",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "nursingGuidanceCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 321,
                        "label": "食事",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "eatingCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 322,
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
            "id": 323,
            "contents": [
              {
                "type": "tcol",
                "id": 324,
                "rowspan": "4",
                "contents": [
                  {
                    "type": "text",
                    "id": 325,
                    "text": "皮膚処置",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "colspan": "1",
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 326,
                "rowspan": "",
                "contents": [
                  {
                    "type": "box",
                    "id": 327,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 328,
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
            "id": 329,
            "contents": [
              {
                "type": "tcol",
                "id": 330,
                "rowspan": "",
                "contents": [
                  {
                    "type": "box",
                    "id": 331,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 332,
                        "label": "褥瘡処置",
                        "grow": 0,
                        "marginRight": "10px",
                        "shrink": 0,
                        "bindingKey": "bedSoreTreatmentCheck"
                      },
                      {
                        "type": "box",
                        "id": 333,
                        "contents": [
                          {
                            "type": "text",
                            "id": 334,
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
                            "id": 335,
                            "flexGrow": 0,
                            "dense": true,
                            "bindingKey": "locationSelect",
                            "options": [
                              "選択",
                              "選択 2",
                              "選択 3",
                              "選択 4"
                            ],
                            "style": "outlined"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginRight": "10px",
                        "flexGrow": 0
                      },
                      {
                        "type": "box",
                        "id": 336,
                        "contents": [
                          {
                            "type": "text",
                            "id": 337,
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
                            "id": 338,
                            "flexGrow": 0,
                            "dense": true,
                            "options": [
                              "選択",
                              "選択 2",
                              "選択 3",
                              "選択 4"
                            ],
                            "bindingKey": "medicineSelect",
                            "style": "outlined"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginRight": "10px",
                        "flexGrow": 0
                      },
                      {
                        "type": "box",
                        "id": 339,
                        "contents": [
                          {
                            "type": "text",
                            "id": 340,
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
                            "id": 341,
                            "flexGrow": 0,
                            "dense": true,
                            "options": [
                              "選択",
                              "選択 2",
                              "選択 3",
                              "選択 4"
                            ],
                            "bindingKey": "methodSelect",
                            "style": "outlined"
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
            "id": 342,
            "contents": [
              {
                "type": "tcol",
                "id": 343,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 344,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 345,
                        "label": "創処置",
                        "grow": 0,
                        "marginRight": "10px",
                        "shrink": 0,
                        "bindingKey": "creativeDisposalCheck"
                      },
                      {
                        "type": "box",
                        "id": 346,
                        "contents": [
                          {
                            "type": "text",
                            "id": 347,
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
                            "id": 348,
                            "flexGrow": 0,
                            "dense": true,
                            "bindingKey": "bodyLocationSelect",
                            "options": [
                              "選択",
                              "選択 2",
                              "選択 3",
                              "選択 4"
                            ],
                            "style": "outlined"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginRight": "10px",
                        "flexGrow": 0
                      },
                      {
                        "type": "box",
                        "id": 349,
                        "contents": [
                          {
                            "type": "text",
                            "id": 350,
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
                            "id": 351,
                            "flexGrow": 0,
                            "dense": true,
                            "options": [
                              "選択",
                              "選択 2",
                              "選択 3",
                              "選択 4"
                            ],
                            "bindingKey": "treatmentSelect",
                            "style": "outlined"
                          }
                        ],
                        "alignItems": "align-center",
                        "marginRight": "10px",
                        "flexGrow": 0
                      },
                      {
                        "type": "box",
                        "id": 352,
                        "contents": [
                          {
                            "type": "text",
                            "id": 353,
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
                            "id": 354,
                            "flexGrow": 0,
                            "dense": true,
                            "options": [
                              "選択",
                              "選択 2",
                              "選択 3",
                              "選択 4"
                            ],
                            "bindingKey": "optionSelect",
                            "style": "outlined"
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
            "id": 355,
            "contents": [
              {
                "type": "tcol",
                "id": 356,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 357,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 358,
                        "label": "外用薬塗布",
                        "grow": 0,
                        "marginRight": "20px",
                        "shrink": 0,
                        "bindingKey": "topicalDrugCoatingCheck"
                      },
                      {
                        "type": "box",
                        "id": 359,
                        "contents": [
                          {
                            "type": "text",
                            "id": 360,
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
                            "id": 361,
                            "flexGrow": 0,
                            "dense": true,
                            "bindingKey": "coatingSelect",
                            "options": [
                              "選択",
                              "選択 2",
                              "選択 3",
                              "選択 4"
                            ],
                            "style": "outlined"
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
            "id": 362,
            "contents": [
              {
                "type": "tcol",
                "id": 363,
                "contents": [
                  {
                    "type": "text",
                    "id": 364,
                    "text": "薬の管理・指導",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 365,
                "rowspan": "",
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 366,
                    "layout": "column",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 367,
                        "label": "残薬確認",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "residualMedicineConfirmationCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 368,
                        "label": "服薬介助",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "medicineAssistCheck"
                      },
                      {
                        "type": "box",
                        "id": 369,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 370,
                            "label": "内服セット",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "oralSetCheck"
                          },
                          {
                            "type": "text",
                            "id": 371,
                            "flexBasis": "auto",
                            "text": "期間",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px"
                          },
                          {
                            "type": "select",
                            "id": 372,
                            "dense": true,
                            "width": "",
                            "flexBasis": "",
                            "flexGrow": 0,
                            "flexShrink": 1,
                            "bindingKey": "periodSelect",
                            "options": [
                              "選択",
                              "選択 2",
                              "選択 3",
                              "選択 4"
                            ],
                            "style": "outlined"
                          }
                        ],
                        "alignItems": "align-center",
                        "flexGrow": 0,
                        "marginRight": "20px"
                      },
                      {
                        "type": "checkbox",
                        "id": 373,
                        "label": "点眼",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "eyeDropsCheck"
                      },
                      {
                        "type": "box",
                        "id": 374,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 375,
                            "label": "吸入",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "inhalationCheck"
                          },
                          {
                            "type": "select",
                            "id": 376,
                            "dense": true,
                            "width": "",
                            "flexBasis": "",
                            "flexGrow": 0,
                            "flexShrink": 1,
                            "bindingKey": "inhalationSelect",
                            "options": [
                              "選択",
                              "選択 2",
                              "選択 3",
                              "選択 4"
                            ],
                            "style": "outlined"
                          }
                        ],
                        "alignItems": "align-center",
                        "flexGrow": 0,
                        "marginRight": "20px"
                      },
                      {
                        "type": "checkbox",
                        "id": 377,
                        "label": "座薬",
                        "grow": 0,
                        "marginRight": "20px",
                        "bindingKey": "suppositoryCheck"
                      },
                      {
                        "type": "box",
                        "id": 378,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 379,
                            "label": "点滴",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "intravenousCheck"
                          },
                          {
                            "type": "box",
                            "id": 380,
                            "contents": [
                              {
                                "type": "text",
                                "id": 381,
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
                                "id": 382,
                                "flexGrow": 0,
                                "dense": true,
                                "flexShrink": 1,
                                "bindingKey": "intravenousMedicineSelect",
                                "options": [
                                  "選択",
                                  "選択 2",
                                  "選択 3",
                                  "選択 4"
                                ],
                                "style": "outlined"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "10px",
                            "flexGrow": 0,
                            "flexShrink": 1
                          },
                          {
                            "type": "box",
                            "id": 383,
                            "contents": [
                              {
                                "type": "text",
                                "id": 384,
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
                                "id": 385,
                                "flexGrow": 0,
                                "dense": true,
                                "options": [
                                  "選択",
                                  "選択 2",
                                  "選択 3",
                                  "選択 4"
                                ],
                                "bindingKey": "intravenousAmountSelect",
                                "style": "outlined"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "10px",
                            "flexGrow": 0,
                            "flexShrink": 1
                          },
                          {
                            "type": "box",
                            "id": 386,
                            "contents": [
                              {
                                "type": "text",
                                "id": 387,
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
                                "id": 388,
                                "flexGrow": 0,
                                "dense": true,
                                "bindingKey": "intravenousSpeedSelect",
                                "options": [
                                  "選択",
                                  "選択 2",
                                  "選択 3",
                                  "選択 4"
                                ],
                                "style": "outlined"
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
                        "id": 389,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 390,
                            "label": "注射",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "injectionCheck"
                          },
                          {
                            "type": "box",
                            "id": 391,
                            "contents": [
                              {
                                "type": "text",
                                "id": 392,
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
                                "id": 393,
                                "flexGrow": 0,
                                "dense": true,
                                "flexShrink": 1,
                                "bindingKey": "injectionMedicineSelect",
                                "options": [
                                  "選択",
                                  "選択 2",
                                  "選択 3",
                                  "選択 4"
                                ],
                                "style": "outlined"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "10px",
                            "flexGrow": 0,
                            "flexShrink": 1
                          },
                          {
                            "type": "box",
                            "id": 394,
                            "contents": [
                              {
                                "type": "text",
                                "id": 395,
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
                                "id": 396,
                                "flexGrow": 0,
                                "dense": true,
                                "options": [
                                  "選択",
                                  "選択 2",
                                  "選択 3",
                                  "選択 4"
                                ],
                                "bindingKey": "injectionLocationSelect",
                                "style": "outlined"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "10px",
                            "flexGrow": 0,
                            "flexShrink": 1
                          },
                          {
                            "type": "box",
                            "id": 397,
                            "contents": [
                              {
                                "type": "text",
                                "id": 398,
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
                                "id": 399,
                                "flexGrow": 0,
                                "dense": true,
                                "options": [
                                  "選択",
                                  "選択 2",
                                  "選択 3",
                                  "選択 4"
                                ],
                                "bindingKey": "injectionMethodSelect",
                                "style": "outlined"
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
                        "id": 400,
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
            "id": 401,
            "contents": [
              {
                "type": "tcol",
                "id": 402,
                "contents": [
                  {
                    "type": "text",
                    "id": 403,
                    "text": "リハビリテーション",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 404,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 405,
                    "contents": [
                      {
                        "type": "box",
                        "id": 406,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 407,
                            "label": "関節可動域",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "rangeOfMotionCheck"
                          },
                          {
                            "type": "select",
                            "id": 408,
                            "dense": true,
                            "width": "",
                            "flexBasis": "",
                            "flexGrow": 0,
                            "flexShrink": 1,
                            "bindingKey": "rangeOfMotionSelect",
                            "options": [
                              "選択",
                              "選択 2",
                              "選択 3",
                              "選択 4"
                            ],
                            "style": "outlined"
                          }
                        ],
                        "alignItems": "align-center",
                        "flexGrow": 0,
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 409,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 410,
                            "label": "マッサージ",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "massageCheck"
                          },
                          {
                            "type": "select",
                            "id": 411,
                            "dense": true,
                            "width": "",
                            "flexBasis": "",
                            "flexGrow": 0,
                            "flexShrink": 1,
                            "bindingKey": "massageSelect",
                            "options": [
                              "選択",
                              "選択 2",
                              "選択 3",
                              "選択 4"
                            ],
                            "style": "outlined"
                          }
                        ],
                        "alignItems": "align-center",
                        "flexGrow": 0,
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 412,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 413,
                            "label": "筋力",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "muscleStrengthCheck"
                          },
                          {
                            "type": "box",
                            "id": 414,
                            "contents": [
                              {
                                "type": "text",
                                "id": 415,
                                "text": "(",
                                "flexBasis": "auto",
                                "grow": 0,
                                "shrink": 0,
                                "marginRight": "5px",
                                "color": "rgba(0, 0, 0, 0.6)"
                              },
                              {
                                "type": "checkbox",
                                "id": 416,
                                "label": "上肢",
                                "grow": 0,
                                "shrink": 0,
                                "marginRight": "10px",
                                "bindingKey": "upperLimbsCheck"
                              },
                              {
                                "type": "checkbox",
                                "id": 417,
                                "label": "下肢",
                                "grow": 0,
                                "shrink": 0,
                                "marginRight": "10px",
                                "bindingKey": "lowerLimbsCheck"
                              },
                              {
                                "type": "checkbox",
                                "id": 418,
                                "label": "体幹",
                                "grow": 0,
                                "shrink": 0,
                                "marginRight": "5px",
                                "bindingKey": "trunkCheck"
                              },
                              {
                                "type": "text",
                                "id": 419,
                                "text": ")",
                                "flexBasis": "auto",
                                "grow": 0,
                                "shrink": 0,
                                "marginRight": "",
                                "color": "rgba(0, 0, 0, 0.6)"
                              }
                            ],
                            "alignItems": "align-center",
                            "flexGrow": 0,
                            "marginRight": ""
                          }
                        ],
                        "alignItems": "align-center",
                        "flexGrow": 0,
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 420,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 421,
                            "label": "座位",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "sittingPositionCheck"
                          },
                          {
                            "type": "checkbox",
                            "id": 422,
                            "label": "立位",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "10px",
                            "bindingKey": "standingCheck"
                          },
                          {
                            "type": "checkbox",
                            "id": 423,
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
                        "id": 424,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 425,
                            "label": "呼吸リハ",
                            "marginRight": "10px",
                            "grow": 0,
                            "shrink": 0,
                            "bindingKey": " breathingRehabilitationCheck"
                          },
                          {
                            "type": "box",
                            "id": 426,
                            "contents": [
                              {
                                "type": "text",
                                "id": 427,
                                "text": "(",
                                "flexBasis": "auto",
                                "grow": 0,
                                "shrink": 0,
                                "marginRight": "5px",
                                "color": "rgba(0, 0, 0, 0.6)"
                              },
                              {
                                "type": "radioGroup",
                                "id": 428,
                                "contents": [
                                  {
                                    "type": "radio",
                                    "id": 429,
                                    "label": "補助筋マッサージ"
                                  },
                                  {
                                    "type": "radio",
                                    "id": 430,
                                    "label": "ストレッチ"
                                  },
                                  {
                                    "type": "radio",
                                    "id": 431,
                                    "label": "呼吸法"
                                  },
                                  {
                                    "type": "radio",
                                    "id": 432,
                                    "label": "呼気介助"
                                  }
                                ],
                                "direction": "row",
                                "dense": true,
                                "bindingKey": " breathingRehabilitationRadio"
                              },
                              {
                                "type": "text",
                                "id": 433,
                                "text": ")",
                                "flexBasis": "auto",
                                "grow": 0,
                                "shrink": 0,
                                "marginRight": "",
                                "color": "rgba(0, 0, 0, 0.6)"
                              }
                            ],
                            "flexGrow": 0,
                            "alignItems": "align-center",
                            "flexShrink": 0
                          }
                        ],
                        "alignItems": "align-center",
                        "marginRight": "20px"
                      },
                      {
                        "type": "box",
                        "id": 434,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 435,
                            "label": "口腔リハ",
                            "marginRight": "10px",
                            "grow": 0,
                            "bindingKey": "oralRehabilitationCheck"
                          },
                          {
                            "type": "box",
                            "id": 436,
                            "contents": [
                              {
                                "type": "text",
                                "id": 437,
                                "text": "(",
                                "flexBasis": "auto",
                                "grow": 0,
                                "shrink": 0,
                                "marginRight": "5px",
                                "color": "rgba(0, 0, 0, 0.6)"
                              },
                              {
                                "type": "radioGroup",
                                "id": 438,
                                "contents": [
                                  {
                                    "type": "radio",
                                    "id": 439,
                                    "label": "嚥下"
                                  },
                                  {
                                    "type": "radio",
                                    "id": 440,
                                    "label": "言語"
                                  }
                                ],
                                "direction": "row",
                                "dense": true,
                                "bindingKey": "oralRehabilitationRadio"
                              },
                              {
                                "type": "text",
                                "id": 441,
                                "text": ")",
                                "flexBasis": "auto",
                                "grow": 0,
                                "shrink": 0,
                                "marginRight": "",
                                "color": "rgba(0, 0, 0, 0.6)"
                              }
                            ],
                            "flexGrow": 0,
                            "alignItems": "align-center"
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
            "id": 442,
            "contents": [
              {
                "type": "tcol",
                "id": 443,
                "contents": [
                  {
                    "type": "text",
                    "id": 444,
                    "text": "排痰ケア",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 445,
                "colspan": "2",
                "contents": [
                  {
                    "type": "radioGroup",
                    "id": 446,
                    "contents": [
                      {
                        "type": "radio",
                        "id": 447,
                        "label": "体位ドレナージ"
                      },
                      {
                        "type": "radio",
                        "id": 448,
                        "label": "スクイージング"
                      },
                      {
                        "type": "radio",
                        "id": 449,
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
            "id": 450,
            "contents": [
              {
                "type": "tcol",
                "id": 451,
                "contents": [
                  {
                    "type": "text",
                    "id": 452,
                    "text": "医療処置",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 453,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 454,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 455,
                        "label": "酸素療法",
                        "grow": 0,
                        "marginRight": "20px",
                        "shrink": 0,
                        "bindingKey": "oxygenTherapyCheck"
                      },
                      {
                        "type": "box",
                        "id": 456,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 457,
                            "label": "IVH・CVポート",
                            "grow": 0,
                            "marginRight": "10px",
                            "bindingKey": "IvhCvPortCheck"
                          },
                          {
                            "type": "text",
                            "id": 458,
                            "text": "(",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "5px",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "radioGroup",
                            "id": 459,
                            "direction": "row",
                            "contents": [
                              {
                                "type": "radio",
                                "id": 460,
                                "label": "ポンプ有"
                              },
                              {
                                "type": "radio",
                                "id": 461,
                                "label": "無"
                              }
                            ],
                            "dense": true,
                            "bindingKey": "IvhCvPortRadio"
                          },
                          {
                            "type": "text",
                            "id": 462,
                            "text": ")",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "",
                            "color": "rgba(0, 0, 0, 0.6)"
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center",
                        "marginRight": "20px",
                        "flexShrink": 0
                      },
                      {
                        "type": "box",
                        "id": 463,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 464,
                            "label": "針",
                            "grow": 0,
                            "marginRight": "10px",
                            "bindingKey": "needleCheck"
                          },
                          {
                            "type": "text",
                            "id": 465,
                            "text": "(",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "5px",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "radioGroup",
                            "id": 466,
                            "direction": "row",
                            "contents": [
                              {
                                "type": "radio",
                                "id": 467,
                                "label": "抜去"
                              },
                              {
                                "type": "radio",
                                "id": 468,
                                "label": "挿入"
                              },
                              {
                                "type": "radio",
                                "id": 469,
                                "label": "ルート交換"
                              }
                            ],
                            "dense": true,
                            "bindingKey": "needleRadio"
                          },
                          {
                            "type": "text",
                            "id": 470,
                            "text": ")",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "",
                            "color": "rgba(0, 0, 0, 0.6)"
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center",
                        "marginRight": "20px",
                        "flexShrink": 0
                      },
                      {
                        "type": "checkbox",
                        "id": 471,
                        "label": "胃瘻",
                        "grow": 0,
                        "marginRight": "20px",
                        "shrink": 0,
                        "bindingKey": "gastrostomyCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 472,
                        "label": "腹膜透析",
                        "grow": 0,
                        "marginRight": "20px",
                        "shrink": 0,
                        "bindingKey": "peritonealDialysisCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 473,
                        "label": "出口部管理",
                        "grow": 0,
                        "marginRight": "20px",
                        "shrink": 0,
                        "bindingKey": "exitManagementCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 474,
                        "label": "ストマ処理",
                        "grow": 0,
                        "marginRight": "20px",
                        "shrink": 0,
                        "bindingKey": "stomaProcessingCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 475,
                        "label": "パウチ交換",
                        "grow": 0,
                        "marginRight": "20px",
                        "shrink": 0,
                        "bindingKey": "pouchExchangeCheck"
                      },
                      {
                        "type": "box",
                        "id": 476,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 477,
                            "label": "点滴",
                            "grow": 0,
                            "marginRight": "20px",
                            "shrink": 0,
                            "bindingKey": "intravenousCheck1"
                          },
                          {
                            "type": "box",
                            "id": 478,
                            "contents": [
                              {
                                "type": "text",
                                "id": 479,
                                "text": "薬剤",
                                "shrink": 0,
                                "marginRight": "10px",
                                "color": "rgba(0, 0, 0, 0.6)"
                              },
                              {
                                "type": "select",
                                "id": 480,
                                "dense": true,
                                "marginRight": "10px",
                                "flexGrow": 0,
                                "flexShrink": 1,
                                "bindingKey": "intravenousSelect",
                                "options": [
                                  "選択",
                                  "選択 2",
                                  "選択 3",
                                  "選択 4"
                                ],
                                "style": "outlined"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "20px"
                          },
                          {
                            "type": "box",
                            "id": 481,
                            "contents": [
                              {
                                "type": "text",
                                "id": 482,
                                "text": "量",
                                "shrink": 0,
                                "marginRight": "10px",
                                "color": "rgba(0, 0, 0, 0.6)"
                              },
                              {
                                "type": "select",
                                "id": 483,
                                "dense": true,
                                "marginRight": "10px",
                                "flexGrow": 0,
                                "flexShrink": 1,
                                "options": [
                                  "選択",
                                  "選択 2",
                                  "選択 3",
                                  "選択 4"
                                ],
                                "bindingKey": "intravenousAmountSelect1",
                                "style": "outlined"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "20px"
                          },
                          {
                            "type": "box",
                            "id": 484,
                            "contents": [
                              {
                                "type": "text",
                                "id": 485,
                                "text": "速度",
                                "shrink": 0,
                                "marginRight": "10px",
                                "color": "rgba(0, 0, 0, 0.6)"
                              },
                              {
                                "type": "select",
                                "id": 486,
                                "dense": true,
                                "marginRight": "10px",
                                "flexGrow": 0,
                                "flexShrink": 1,
                                "options": [
                                  "選択",
                                  "選択 2",
                                  "選択 3",
                                  "選択 4"
                                ],
                                "bindingKey": "intravenousSpeedSelect1",
                                "style": "outlined"
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
                        "id": 487,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 488,
                            "label": "注射",
                            "grow": 0,
                            "marginRight": "20px",
                            "shrink": 0,
                            "bindingKey": "injectionCheck1"
                          },
                          {
                            "type": "box",
                            "id": 489,
                            "contents": [
                              {
                                "type": "text",
                                "id": 490,
                                "text": "薬剤",
                                "shrink": 0,
                                "marginRight": "10px",
                                "color": "rgba(0, 0, 0, 0.6)"
                              },
                              {
                                "type": "select",
                                "id": 491,
                                "dense": true,
                                "marginRight": "10px",
                                "flexGrow": 0,
                                "flexShrink": 1,
                                "options": [
                                  "選択",
                                  "選択 2",
                                  "選択 3",
                                  "選択 4"
                                ],
                                "bindingKey": "injectionMedicineSelect1",
                                "style": "outlined"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "20px"
                          },
                          {
                            "type": "box",
                            "id": 492,
                            "contents": [
                              {
                                "type": "text",
                                "id": 493,
                                "text": "部位",
                                "shrink": 0,
                                "marginRight": "10px",
                                "color": "rgba(0, 0, 0, 0.6)"
                              },
                              {
                                "type": "select",
                                "id": 494,
                                "dense": true,
                                "marginRight": "10px",
                                "flexGrow": 0,
                                "flexShrink": 1,
                                "options": [
                                  "選択",
                                  "選択 2",
                                  "選択 3",
                                  "選択 4"
                                ],
                                "bindingKey": "injectionLocationSelect1",
                                "style": "outlined"
                              }
                            ],
                            "alignItems": "align-center",
                            "marginRight": "20px"
                          },
                          {
                            "type": "box",
                            "id": 495,
                            "contents": [
                              {
                                "type": "text",
                                "id": 496,
                                "text": "方法",
                                "shrink": 0,
                                "marginRight": "10px",
                                "color": "rgba(0, 0, 0, 0.6)"
                              },
                              {
                                "type": "select",
                                "id": 497,
                                "dense": true,
                                "marginRight": "10px",
                                "flexGrow": 0,
                                "flexShrink": 1,
                                "options": [
                                  "選択",
                                  "選択 2",
                                  "選択 3",
                                  "選択 4"
                                ],
                                "bindingKey": "injectionMethodSelect1",
                                "style": "outlined"
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
                        "id": 498,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 499,
                            "label": "その他",
                            "grow": 0,
                            "marginRight": "20px",
                            "shrink": 0,
                            "bindingKey": "otherCheck"
                          },
                          {
                            "type": "select",
                            "id": 500,
                            "dense": true,
                            "marginRight": "10px",
                            "flexGrow": 0,
                            "flexShrink": 1,
                            "bindingKey": "otherSelect",
                            "options": [
                              "選択",
                              "選択 2",
                              "選択 3",
                              "選択 4"
                            ],
                            "style": "outlined"
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
            "id": 501,
            "contents": [
              {
                "type": "tcol",
                "id": 502,
                "contents": [
                  {
                    "type": "text",
                    "id": 503,
                    "text": "睡眠のケア・指導",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 504,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 505,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 506,
                        "shrink": 0,
                        "grow": 0,
                        "label": "入眠を促すマッサージ",
                        "marginRight": "20px",
                        "bindingKey": "massageEncourageFallingAsleepCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 507,
                        "label": "生活指導",
                        "grow": 0,
                        "shrink": 0,
                        "marginRight": "20px",
                        "bindingKey": "lifeGuidanceCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 508,
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
            "id": 509,
            "contents": [
              {
                "type": "tcol",
                "id": 510,
                "contents": [
                  {
                    "type": "text",
                    "id": 511,
                    "text": "体重",
                    "textAlign": "center",
                    "fontSize": "",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 512,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 513,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "textField",
                        "id": 514,
                        "shrink": 1,
                        "grow": 0,
                        "bindingKey": " bodyWeightText"
                      },
                      {
                        "type": "text",
                        "id": 515,
                        "text": "kg",
                        "grow": 0,
                        "shrink": 0,
                        "color": "rgba(0, 0, 0, 0.6)"
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
            "id": 516,
            "contents": [
              {
                "type": "tcol",
                "id": 517,
                "contents": [
                  {
                    "type": "text",
                    "id": 518,
                    "text": "留意点",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "backgroundColor": "#F0FBFF"
              },
              {
                "type": "tcol",
                "id": 519,
                "colspan": "2",
                "contents": [
                  {
                    "type": "textarea",
                    "id": 520,
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
            "id": 521,
            "contents": [
              {
                "type": "tcol",
                "id": 522,
                "contents": [
                  {
                    "type": "text",
                    "id": 523,
                    "text": "次回訪問予定日",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 524,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 525,
                    "contents": [
                      {
                        "type": "radioGroup",
                        "id": 526,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 527,
                            "label": "未定"
                          },
                          {
                            "type": "radio",
                            "id": 528,
                            "label": "定期"
                          },
                          {
                            "type": "radio",
                            "id": 529,
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
                        "id": 530,
                        "dense": true,
                        "locale": "ja",
                        "marginRight": "20px",
                        "grow": 0,
                        "shrink": 1,
                        "bindingKey": "nextVisitDatePicker",
                        "style": "outlined",
                        "label": "日付の選択"
                      },
                      {
                        "type": "timeIntervalSelect",
                        "id": 531,
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
                        "bindingKey": "nextVisitDateSelect",
                        "style": "outlined"
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
        "id": 532,
        "contents": [
          {
            "type": "trow",
            "id": 533,
            "contents": [
              {
                "type": "tcol",
                "id": 534,
                "contents": [
                  {
                    "type": "text",
                    "id": 535,
                    "text": "実績",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ],
                "width": "12%"
              },
              {
                "type": "tcol",
                "id": 536,
                "width": "18%",
                "contents": [
                  {
                    "type": "text",
                    "id": 537,
                    "text": "基本療養費",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 538,
                "width": "70%",
                "contents": [
                  {
                    "type": "box",
                    "id": 539,
                    "contents": [
                      {
                        "type": "radioGroup",
                        "id": 540,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 541,
                            "label": "Ⅰ"
                          },
                          {
                            "type": "radio",
                            "id": 542,
                            "label": "Ⅱ"
                          },
                          {
                            "type": "radio",
                            "id": 543,
                            "label": "Ⅲ"
                          }
                        ],
                        "direction": "row",
                        "dense": true,
                        "grow": 0,
                        "shrink": 0,
                        "marginRight": "",
                        "bindingKey": "basicMedicalExpensesRadio"
                      },
                      {
                        "type": "text",
                        "id": 544,
                        "text": "(",
                        "flexBasis": "auto",
                        "grow": 0,
                        "shrink": 0,
                        "marginRight": "5px",
                        "color": "rgba(0, 0, 0, 0.6)"
                      },
                      {
                        "type": "radioGroup",
                        "id": 545,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 546,
                            "label": "定期"
                          },
                          {
                            "type": "radio",
                            "id": 547,
                            "label": "緊急"
                          },
                          {
                            "type": "radio",
                            "id": 548,
                            "label": "緊急訪問看護加算"
                          }
                        ],
                        "direction": "row",
                        "dense": true,
                        "grow": 0,
                        "shrink": 0,
                        "bindingKey": "basicMedicalExpensesRadio1"
                      },
                      {
                        "type": "text",
                        "id": 549,
                        "text": ")",
                        "flexBasis": "auto",
                        "grow": 0,
                        "shrink": 0,
                        "marginRight": "",
                        "color": "rgba(0, 0, 0, 0.6)"
                      }
                    ],
                    "wrap": true,
                    "alignItems": "align-center"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 550,
            "contents": [
              {
                "type": "tcol",
                "id": 551,
                "contents": []
              },
              {
                "type": "tcol",
                "id": 552,
                "contents": [
                  {
                    "type": "text",
                    "id": 553,
                    "text": "精神基本療養費",
                    "textAlign": "left",
                    "fontWeight": "bold",
                    "color": "#02B1E7"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 554,
                "width": "60%",
                "contents": [
                  {
                    "type": "box",
                    "id": 555,
                    "contents": [
                      {
                        "type": "radioGroup",
                        "id": 556,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 557,
                            "label": "Ⅰ  ( 30分未満 )"
                          },
                          {
                            "type": "radio",
                            "id": 558,
                            "label": "Ⅱ  ( 30分以上 )"
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
            "id": 559,
            "contents": [
              {
                "type": "tcol",
                "id": 560,
                "contents": [
                  {
                    "type": "text",
                    "id": 561,
                    "text": "加算",
                    "textAlign": "center",
                    "fontWeight": "bold",
                    "color": "#02B1E7"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 562,
                "contents": [
                  {
                    "type": "text",
                    "id": 563,
                    "text": "緊急時訪問看護加算",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 564,
                "contents": [
                  {
                    "type": "radioGroup",
                    "id": 565,
                    "contents": [
                      {
                        "type": "radio",
                        "id": 566,
                        "label": "有"
                      },
                      {
                        "type": "radio",
                        "id": 567,
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
            "id": 568,
            "contents": [
              {
                "type": "tcol",
                "id": 569
              },
              {
                "type": "tcol",
                "id": 570,
                "contents": [
                  {
                    "type": "text",
                    "id": 571,
                    "text": "特別管理加算",
                    "textAlign": "left",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 572,
                "contents": [
                  {
                    "type": "box",
                    "id": 573,
                    "contents": [
                      {
                        "type": "radioGroup",
                        "id": 574,
                        "contents": [
                          {
                            "type": "radio",
                            "id": 575,
                            "label": "Ⅰ"
                          },
                          {
                            "type": "radio",
                            "id": 576,
                            "label": "Ⅱ"
                          }
                        ],
                        "dense": true,
                        "grow": 0,
                        "marginRight": "10px",
                        "bindingKey": "specialManagementAdditionRadio"
                      },
                      {
                        "type": "box",
                        "id": 577,
                        "contents": [
                          {
                            "type": "box",
                            "id": 578,
                            "contents": [
                              {
                                "type": "text",
                                "id": 579,
                                "text": "(",
                                "flexBasis": "auto",
                                "grow": 0,
                                "shrink": 0,
                                "marginRight": "5px",
                                "color": "rgba(0, 0, 0, 0.6)"
                              },
                              {
                                "type": "radioGroup",
                                "id": 580,
                                "contents": [
                                  {
                                    "type": "radio",
                                    "id": 581,
                                    "label": "悪性腫瘍指導管理"
                                  },
                                  {
                                    "type": "radio",
                                    "id": 582,
                                    "label": "気管切開指導管理"
                                  },
                                  {
                                    "type": "radio",
                                    "id": 583,
                                    "label": "気管ｶﾆｭｰﾚ"
                                  },
                                  {
                                    "type": "radio",
                                    "id": 584,
                                    "label": "留置ｶﾃｰﾃﾙ"
                                  }
                                ],
                                "direction": "row",
                                "dense": true,
                                "shrink": 0,
                                "bindingKey": "specialManagementAdditionRadio1",
                                "grow": 0
                              },
                              {
                                "type": "text",
                                "id": 585,
                                "text": ")",
                                "flexBasis": "auto",
                                "grow": 0,
                                "shrink": 0,
                                "marginRight": "",
                                "color": "rgba(0, 0, 0, 0.6)"
                              }
                            ],
                            "alignItems": "align-center",
                            "flexGrow": 0,
                            "flexShrink": 0
                          },
                          {
                            "type": "box",
                            "id": 586,
                            "contents": [
                              {
                                "type": "text",
                                "id": 587,
                                "text": "(",
                                "flexBasis": "auto",
                                "grow": 0,
                                "shrink": 0,
                                "marginRight": "5px",
                                "color": "rgba(0, 0, 0, 0.6)"
                              },
                              {
                                "type": "radioGroup",
                                "id": 588,
                                "contents": [
                                  {
                                    "type": "radio",
                                    "id": 589,
                                    "label": "人工肛門・膀胱"
                                  },
                                  {
                                    "type": "radio",
                                    "id": 590,
                                    "label": "真皮超褥瘡"
                                  },
                                  {
                                    "type": "radio",
                                    "id": 591,
                                    "label": "週3日以上の点滴"
                                  },
                                  {
                                    "type": "radio",
                                    "id": 592,
                                    "label": "各種在宅指導管理"
                                  }
                                ],
                                "direction": "row",
                                "dense": true,
                                "shrink": 0,
                                "bindingKey": "specialManagementAdditionRadio2",
                                "grow": 0
                              },
                              {
                                "type": "text",
                                "id": 593,
                                "text": ")",
                                "flexBasis": "auto",
                                "grow": 0,
                                "shrink": 0,
                                "marginRight": "",
                                "color": "rgba(0, 0, 0, 0.6)"
                              }
                            ],
                            "alignItems": "align-center",
                            "flexGrow": 0,
                            "flexShrink": 0,
                            "marginTop": "5px",
                            "wrap": false
                          }
                        ],
                        "layout": "column",
                        "justifyContent": "justify-space-between",
                        "flexGrow": 0,
                        "flexShrink": 1
                      }
                    ],
                    "layout": ""
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 594,
            "contents": [
              {
                "type": "tcol",
                "id": 595
              },
              {
                "type": "tcol",
                "id": 596
              },
              {
                "type": "tcol",
                "id": 597,
                "contents": [
                  {
                    "type": "box",
                    "id": 598,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 599,
                        "label": "退院時共同指導管理加算",
                        "shrink": 0,
                        "marginRight": "20px",
                        "grow": 0,
                        "bindingKey": "jointGuidanceManagementAdditionAtDischargeCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 600,
                        "label": "退院支援導管加算 (退院日)",
                        "shrink": 0,
                        "marginRight": "20px",
                        "grow": 0,
                        "bindingKey": "dischargeSupportConduitAdditionCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 601,
                        "label": "複数名看護加算",
                        "shrink": 0,
                        "marginRight": "20px",
                        "grow": 0,
                        "bindingKey": "multipleNursingAdditionCheck"
                      },
                      {
                        "type": "checkbox",
                        "id": 602,
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
            "id": 603,
            "contents": [
              {
                "type": "tcol",
                "id": 604,
                "contents": [
                  {
                    "type": "text",
                    "id": 605,
                    "text": "保険外",
                    "textAlign": "center",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 606,
                "colspan": "2",
                "contents": [
                  {
                    "type": "box",
                    "id": 607,
                    "contents": [
                      {
                        "type": "box",
                        "id": 608,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 609,
                            "label": "交通費",
                            "grow": 0,
                            "marginRight": "10px",
                            "bindingKey": "transportationExpensesCheck"
                          },
                          {
                            "type": "text",
                            "id": 610,
                            "text": "(",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "5px",
                            "color": "rgba(0, 0, 0, 0.6)"
                          },
                          {
                            "type": "radioGroup",
                            "id": 611,
                            "contents": [
                              {
                                "type": "radio",
                                "id": 612,
                                "label": "250円"
                              },
                              {
                                "type": "radio",
                                "id": 613,
                                "label": "500円"
                              }
                            ],
                            "direction": "row",
                            "dense": true,
                            "grow": 0,
                            "bindingKey": "transportationExpensesRadio"
                          },
                          {
                            "type": "text",
                            "id": 614,
                            "text": ")",
                            "flexBasis": "auto",
                            "grow": 0,
                            "shrink": 0,
                            "marginRight": "",
                            "color": "rgba(0, 0, 0, 0.6)"
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center"
                      },
                      {
                        "type": "box",
                        "id": 615,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 616,
                            "label": "キャンセル料",
                            "grow": 0,
                            "marginRight": "10px",
                            "bindingKey": "cancellationChargeCheck"
                          },
                          {
                            "type": "select",
                            "id": 617,
                            "dense": true,
                            "flexGrow": 0,
                            "marginRight": "10px",
                            "bindingKey": "cancellationChargeSelect",
                            "options": [
                              "選択",
                              "選択 2",
                              "選択 3",
                              "選択 4"
                            ],
                            "style": "outlined"
                          },
                          {
                            "type": "text",
                            "id": 618,
                            "text": "円",
                            "grow": 0
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center"
                      },
                      {
                        "type": "box",
                        "id": 619,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 620,
                            "label": "休日・時間外",
                            "grow": 0,
                            "marginRight": "10px",
                            "bindingKey": "holidaysAfterHoursCheck"
                          },
                          {
                            "type": "select",
                            "id": 621,
                            "dense": true,
                            "flexGrow": 0,
                            "marginRight": "10px",
                            "bindingKey": "holidaysAfterHoursSelect",
                            "options": [
                              "選択",
                              "選択 2",
                              "選択 3",
                              "選択 4"
                            ],
                            "style": "outlined"
                          },
                          {
                            "type": "text",
                            "id": 622,
                            "text": "円",
                            "grow": 0
                          }
                        ],
                        "flexGrow": 0,
                        "alignItems": "align-center"
                      },
                      {
                        "type": "box",
                        "id": 623,
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 624,
                            "label": "超過時間利用料 ( 30 分 3,000 円 ×",
                            "grow": 0,
                            "marginRight": "10px",
                            "shrink": 0,
                            "bindingKey": "overtimeUsageFeeCheck "
                          },
                          {
                            "type": "select",
                            "id": 625,
                            "flexGrow": 0,
                            "dense": true,
                            "flexShrink": 1,
                            "bindingKey": "overtimeUsageFeeSelect",
                            "options": [
                              "選択",
                              "選択 2",
                              "選択 3",
                              "選択 4"
                            ],
                            "style": "outlined",
                            "marginRight": "5px"
                          },
                          {
                            "type": "text",
                            "id": 626,
                            "text": ")",
                            "grow": 0,
                            "marginLeft": "",
                            "color": "rgba(0, 0, 0, 0.6)"
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
        "id": 627,
        "contents": [
          {
            "type": "trow",
            "id": 628,
            "contents": [
              {
                "type": "tcol",
                "id": 629,
                "contents": [
                  {
                    "type": "textarea",
                    "id": 630,
                    "rows": "4",
                    "dense": true,
                    "bindingKey": "bottomtextarea1"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 631,
                "contents": [
                  {
                    "type": "textarea",
                    "id": 632,
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
            "id": 633,
            "contents": [
              {
                "type": "tcol",
                "id": 634,
                "colspan": "2",
                "contents": [
                  {
                    "type": "text",
                    "id": 635,
                    "text": "経過記録",
                    "color": "#02B1E7",
                    "fontWeight": "bold"
                  }
                ]
              }
            ]
          },
          {
            "type": "trow",
            "id": 636,
            "contents": [
              {
                "type": "tcol",
                "id": 637,
                "colspan": "2",
                "contents": [
                  {
                    "type": "textarea",
                    "id": 638,
                    "rows": "4",
                    "dense": true,
                    "bindingKey": "progressRecordText"
                  },
                  {
                    "type": "box",
                    "id": 639,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 640,
                        "grow": 0,
                        "shrink": 0,
                        "bindingKey": "progressRecordCheck"
                      },
                      {
                        "type": "select",
                        "id": 641,
                        "flexShrink": 1,
                        "flexGrow": 0,
                        "dense": true,
                        "options": [
                          "選択"
                        ],
                        "style": "outlined",
                        "bindingKey": "progressRecordSelect"
                      }
                    ],
                    "layout": "",
                    "alignItems": "align-center",
                    "marginTop": "10px",
                    "marginBottom": "5px"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "box",
        "id": 642,
        "contents": [
          {
            "type": "text",
            "id": 643,
            "text": "画像",
            "fontSize": "1.5rem",
            "fontWeight": "normal"
          }
        ],
        "marginBottom": "5px",
        "marginTop": "5px"
      }
    ]
  },
  bindingData: {
    "undefined": null,
    "patientName": null,
    "visitorName": null,
    "partnerName": null,
    "visitDateRadio": null,
    "visitDatePicker": null,
    "visitTimeInterval": "時間選択",
    "roomTemperature": null,
    "roomHumidity": null,
    "bodyTemperature": null,
    "pulseInput": null,
    "pulseRadio": null,
    "pulseSelect": "選択",
    "bloodPressureCheckbox": null,
    "bloodPressureRadio": null,
    "bloodPressure": null,
    "breatheInput": null,
    "breatheNoiseRadio": null,
    "breathNoiseSelectionValue": "選択",
    "breatheAir": null,
    "breatheAirRadio": null,
    "spO2Input": null,
    "urineVolume": null,
    "urineAmount": "選択",
    "urineSituation": null,
    "urineSituationSelection": "選択",
    "urinePathVolume": null,
    "pathSelection": "選択",
    "urinePathSituation": null,
    "pathSituationSelection": "選択",
    "urineTubeCheckbox": null,
    "urineTubecheckbox1": null,
    "tubeSelection": "選択",
    "urineTubeWaterCheckbox": null,
    "waterSelection": "選択",
    "urineTubeExchange1": null,
    "bladderClean": null,
    "bladderClean1": null,
    "urinaryCleanSelection": "選択",
    "bladderClean2": null,
    "intestinalSoundsCheck": null,
    "intestinalSoundsSelect": "選択",
    "defecationCheck": null,
    "defecationSundayCheck": null,
    "defecationAmountSundayCheck": null,
    "defecationAmountSundaySelect": "選択",
    "defecationShapeSundayCheck": null,
    "defecationShapeSundaySelect": "選択",
    "defecationMondayCheck": null,
    "defecationAmountMondayCheck": null,
    "defecationAmountMondaySelect": "選択",
    "defecationShapeMondayCheck": null,
    "defecationShapeMondaySelect": "選択",
    "defecationTuesdayCheck": null,
    "defecationAmountTuesdayCheck": null,
    "defecationAmountTuesdaySelect": "選択",
    "defecationShapeTuesdayCheck": null,
    "defecationShapeTuesdaySelect": "選択",
    "defecationWednesdayCheck": null,
    "defecationAmountWednesdayCheck": null,
    "defecationAmountWednesdaySelect": "選択",
    "defecationShapeWednesdayCheck": null,
    "defecationShapeWednesdaySelect": "選択",
    "defecationThursdayCheck": null,
    "defecationAmountThursdayCheck": null,
    "defecationAmountThursdaySelect": "選択",
    "defecationShapeThursdayCheck": null,
    "defecationShapeThursdaySelect": "選択",
    "defecationFridayCheck": null,
    "defecationAmountFridayCheck": null,
    "defecationAmountFridaySelect": "選択",
    "defecationShapeFridayCheck": null,
    "defecationShapeFridaySelect": "選択",
    "defecationSaturdayCheck": null,
    "defecationAmountSaturdayCheck": null,
    "defecationAmountSaturdaySelect": "選択",
    "defecationShapeSaturdayCheck": null,
    "defecationShapeSaturdaySelect": "選択",
    "touchExaminationCheck": null,
    "touchExaminationRadios": null,
    "touchExaminationSelect": "選択",
    "enemaCheck": null,
    "enemaRadio": null,
    "poopRadio": null,
    "poopAmountCheck": null,
    "poopAmountSelect": [
      "選択"
    ],
    "poopShapeCheck": null,
    "poopShapeSelect": [
      "選択"
    ],
    "abdomenMassageCheck": null,
    "diaperCheck1": null,
    "diaperCheck2": null,
    "bathingCheck": null,
    "showerBathCheck": null,
    "partialBathCheck": null,
    "shampooCheck": null,
    "ShampooSelect": "選択",
    "bedBathCheck": null,
    "bedBathRadio": null,
    "bedBathPartSelect": "選択",
    "nailCuttingCheck": null,
    "nailCuttingHandsCheck": null,
    "nailCuttingHandsSelect": "選択",
    "nailCuttingFootsCheck": null,
    "nailCuttingFootsSelect": "選択",
    "clearEarCheck": null,
    "shavingHairCheck": null,
    " oralCareCheck": null,
    "dentifriceCheck": null,
    "gargleCheck": null,
    "oralWipeOffCheck": null,
    "oralWipeOffTrueCheck": null,
    "oralWipeOffNoCheck": null,
    "clothesAdjustmentCheck": null,
    "clothesChangeCheck": null,
    "clothesChangeSelect": "選択",
    "changeSheetCheck": null,
    "changeSheetSelect": "選択",
    "nursingGuidanceCheck": null,
    "eatingCheck": null,
    "drinkingCheck": null,
    "preventionOfBedsoresCheck": null,
    "bedSoreTreatmentCheck": null,
    "locationSelect": "選択",
    "medicineSelect": "選択",
    "methodSelect": "選択",
    "creativeDisposalCheck": null,
    "bodyLocationSelect": "選択",
    "treatmentSelect": "選択",
    "optionSelect": "選択",
    "topicalDrugCoatingCheck": null,
    "coatingSelect": "選択",
    "residualMedicineConfirmationCheck": null,
    "medicineAssistCheck": null,
    "oralSetCheck": null,
    "periodSelect": "選択",
    "eyeDropsCheck": null,
    "inhalationCheck": null,
    "inhalationSelect": "選択",
    "suppositoryCheck": null,
    "intravenousCheck": null,
    "intravenousMedicineSelect": "選択",
    "intravenousAmountSelect": "選択",
    "intravenousSpeedSelect": "選択",
    "injectionCheck": null,
    "injectionMedicineSelect": "選択",
    "injectionLocationSelect": "選択",
    "injectionMethodSelect": "選択",
    "topicalMedicineAffixedCheck": null,
    "rangeOfMotionCheck": null,
    "rangeOfMotionSelect": "選択",
    "massageCheck": null,
    "massageSelect": "選択",
    "muscleStrengthCheck": null,
    "upperLimbsCheck": null,
    "lowerLimbsCheck": null,
    "trunkCheck": false,
    "sittingPositionCheck": null,
    "standingCheck": null,
    "walkingCheck": null,
    " breathingRehabilitationCheck": null,
    " breathingRehabilitationRadio": null,
    "oralRehabilitationCheck": null,
    "oralRehabilitationRadio": null,
    "sputumCareRadio": null,
    "oxygenTherapyCheck": null,
    "IvhCvPortCheck": null,
    "IvhCvPortRadio": null,
    "needleCheck": null,
    "needleRadio": null,
    "gastrostomyCheck": null,
    "peritonealDialysisCheck": null,
    "exitManagementCheck": null,
    "stomaProcessingCheck": null,
    "pouchExchangeCheck": null,
    "intravenousCheck1": null,
    "intravenousSelect": "選択",
    "intravenousAmountSelect1": "選択",
    "intravenousSpeedSelect1": "選択",
    "injectionCheck1": null,
    "injectionMedicineSelect1": "選択",
    "injectionLocationSelect1": "選択",
    "injectionMethodSelect1": "選択",
    "otherCheck": null,
    "otherSelect": "選択",
    "massageEncourageFallingAsleepCheck": null,
    "lifeGuidanceCheck": null,
    "footBath": null,
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
    "jointGuidanceManagementAdditionAtDischargeCheck": null,
    "dischargeSupportConduitAdditionCheck": null,
    "multipleNursingAdditionCheck": null,
    "longTermHomeVisitNursingAdditionCheck": null,
    "transportationExpensesCheck": null,
    "transportationExpensesRadio": null,
    "cancellationChargeCheck": null,
    "cancellationChargeSelect": "選択",
    "holidaysAfterHoursCheck": null,
    "holidaysAfterHoursSelect": "選択",
    "overtimeUsageFeeCheck ": null,
    "overtimeUsageFeeSelect": "選択",
    "bottomtextarea1": null,
    "bottomtextarea2": null,
    "progressRecordText": null,
    "progressRecordCheck": null,
    "progressRecordSelect": "選択"
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
