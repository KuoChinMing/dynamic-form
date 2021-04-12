const tableTemplate = {
  name: "table demo",
  template: {
    "type": "box",
    "layout": "vertical",
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
                    "width": "auto"
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
                    "width": "auto"
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
                    "width": "auto"
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
                "id": 14,
                "colspan": "3",
                "width": "49.8%",
                "contents": [
                  {
                    "type": "box",
                    "id": 359,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "radioGroup",
                        "id": 360
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
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "box",
                        "id": 335,
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
                            "width": "100px"
                          },
                          {
                            "type": "text",
                            "id": 341,
                            "text": "℃",
                            "flexBasis": "auto"
                          }
                        ],
                        "flex": "1",
                        "wrap": "wrap"
                      },
                      {
                        "type": "box",
                        "id": 338,
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
                            "width": "100px"
                          },
                          {
                            "type": "text",
                            "id": 342,
                            "text": "%",
                            "flexBasis": "auto"
                          }
                        ],
                        "flex": "1",
                        "wrap": "wrap"
                      }
                    ],
                    "wrap": "wrap"
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
                    "id": 189,
                    "width": "auto"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 27,
                "contents": []
              },
              {
                "type": "tcol",
                "id": 28,
                "contents": [
                  {
                    "type": "box",
                    "id": 192,
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "box",
                        "id": 193,
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "text",
                            "id": 194,
                            "text": "最高",
                            "flexBasis": "auto"
                          },
                          {
                            "type": "textField",
                            "id": 195,
                            "shrink": "1",
                            "flex": "1",
                            "flexBasis": "",
                            "width": "auto"
                          }
                        ],
                        "wrap": ""
                      },
                      {
                        "type": "box",
                        "id": 196,
                        "contents": [
                          {
                            "type": "text",
                            "id": 197,
                            "flexBasis": "auto",
                            "text": "最低",
                            "flex": ""
                          },
                          {
                            "type": "textField",
                            "id": 198,
                            "flex": "1",
                            "shrink": "1",
                            "width": "auto",
                            "flexBasis": ""
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 29
              },
              {
                "type": "tcol",
                "id": 30,
                "contents": [
                  {
                    "type": "box",
                    "id": 343,
                    "contents": [
                      {
                        "type": "textField",
                        "id": 344,
                        "width": "100%"
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
                        "id": 200
                      },
                      {
                        "type": "text",
                        "id": 201,
                        "text": "尿量",
                        "flexBasis": "auto"
                      }
                    ]
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
                    "id": 202,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 203
                      },
                      {
                        "type": "text",
                        "id": 204,
                        "text": "道量",
                        "flexBasis": "auto"
                      }
                    ]
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
                    "id": 205,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 206
                      },
                      {
                        "type": "text",
                        "id": 207,
                        "flexBasis": "auto",
                        "text": "尿管交換"
                      }
                    ]
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
                    "id": 208,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 209
                      },
                      {
                        "type": "text",
                        "id": 210,
                        "flexBasis": "auto",
                        "text": "尿管管理"
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
                        "text": "腸蠕動音"
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
                    "id": 217,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 218
                      },
                      {
                        "type": "text",
                        "id": 219,
                        "flexBasis": "auto",
                        "text": "日"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 68,
                "contents": [
                  {
                    "type": "box",
                    "id": 220,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 221
                      },
                      {
                        "type": "text",
                        "id": 222,
                        "flexBasis": "auto",
                        "text": "月"
                      }
                    ]
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
                    "id": 223,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 228
                      },
                      {
                        "type": "text",
                        "id": 238,
                        "flexBasis": "auto",
                        "text": "火"
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
                    "type": "box",
                    "id": 224,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 230
                      },
                      {
                        "type": "text",
                        "id": 231,
                        "flexBasis": "auto",
                        "text": "水"
                      }
                    ]
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
                    "id": 225,
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 232
                      },
                      {
                        "type": "text",
                        "id": 233,
                        "flexBasis": "auto",
                        "text": "木"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 70,
                "contents": [
                  {
                    "type": "box",
                    "id": 226,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 234
                      },
                      {
                        "type": "text",
                        "id": 235,
                        "flexBasis": "auto",
                        "text": "金"
                      }
                    ]
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
                    "id": 227,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 236
                      },
                      {
                        "type": "text",
                        "id": 237,
                        "flexBasis": "auto",
                        "text": "土"
                      }
                    ]
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
                    "id": 239,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 244
                      },
                      {
                        "type": "text",
                        "id": 245,
                        "flexBasis": "auto",
                        "text": "指診"
                      }
                    ]
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
                    "id": 240,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 246
                      },
                      {
                        "type": "text",
                        "id": 247,
                        "flexBasis": "auto",
                        "text": "浣腸"
                      }
                    ]
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
                    "id": 241,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 248
                      },
                      {
                        "type": "text",
                        "id": 249,
                        "flexBasis": "auto",
                        "flex": "",
                        "text": "摘便"
                      }
                    ]
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
                        "text": "オムツ"
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
                        "type": "checkbox",
                        "id": 269
                      },
                      {
                        "type": "text",
                        "id": 270,
                        "flexBasis": "auto",
                        "text": "更衣"
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
                        "text": "衣服調整"
                      },
                      {
                        "type": "checkbox",
                        "id": 274
                      },
                      {
                        "type": "text",
                        "id": 275,
                        "flexBasis": "auto",
                        "text": "更衣"
                      },
                      {
                        "type": "checkbox",
                        "id": 276
                      },
                      {
                        "type": "text",
                        "id": 277,
                        "flexBasis": "auto",
                        "text": "部分浴"
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
                        "text": "褥瘡処置"
                      }
                    ]
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
                    "id": 280,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 286
                      },
                      {
                        "type": "text",
                        "id": 287,
                        "flexBasis": "auto",
                        "text": "創処置"
                      }
                    ]
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
                    "id": 281,
                    "layout": "horizontal",
                    "contents": [
                      {
                        "type": "checkbox",
                        "id": 288
                      },
                      {
                        "type": "text",
                        "id": 289,
                        "flexBasis": "auto",
                        "text": "外用薬塗布"
                      }
                    ]
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
                          }
                        ]
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
  }
};

const diagnosisTypeBindingData = {
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
                    bindingData: "jointsSgCheckbox",
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
                    bindingData: "jointsDCheckbox",
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
                    bindingData: "jointsD",
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
                    bindingData: "jointsMtRibCheckbox",
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
                    bindingData: "jointsMtRib",
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
                    bindingData: "jointsLsjCheckbox",
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
                    bindingData: "jointsPdCheckbox",
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
                    bindingData: "jointsPd",
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
                    bindingData: "softTissueOpenUpLigCheckbox",
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
                    bindingData: "softTissueEoCheckbox",
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
};

const textFIeldTemplate = {
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
};

export const templates = {
  tableTemplate,
  diagnosisTemplate,
  textFIeldTemplate
};

export const bindingData = { diagnosisTypeBindingData };
export const defaultTemplate = tableTemplate.template;
