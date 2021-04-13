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
                "contents": []
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
                    "width": "auto",
                    "bindingKey": "qwer"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 27,
                "contents": [
                  {
                    "type": "box",
                    "id": 362,
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "box",
                        "id": 367,
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "textField",
                            "id": 368,
                            "bindingKey": "1234"
                          }
                        ],
                        "justifyContent": "center"
                      },
                      {
                        "type": "box",
                        "id": 363,
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "radioGroup",
                            "id": 365,
                            "radioItems": [
                              "整脈",
                              "不整脈"
                            ],
                            "bindingKey": "pulseRadio"
                          }
                        ],
                        "wrap": "wrap",
                        "justifyContent": "center"
                      },
                      {
                        "type": "box",
                        "id": 364,
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "select",
                            "id": 366,
                            "style": "",
                            "dense": true,
                            "width": "100px",
                            "flexBasis": "auto",
                            "flexGrow": 0,
                            "bindingKey": "pulseSelection",
                            "options": [
                              "選択",
                              "リズム不整",
                              "結滞 "
                            ]
                          }
                        ],
                        "justifyContent": "flex-end"
                      },
                      {
                        "type": "box",
                        "id": 369,
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 370
                          },
                          {
                            "type": "text",
                            "id": 371,
                            "text": "脈圧",
                            "flexBasis": "auto"
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "id": 374,
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "text",
                            "id": 375,
                            "text": "("
                          },
                          {
                            "type": "radioGroup",
                            "id": 634,
                            "radioItems": [
                              "良好",
                              "不良"
                            ],
                            "bindingKey": "pulseRadio"
                          },
                          {
                            "type": "text",
                            "id": 377,
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
                            "width": "auto",
                            "bindingKey": "1234"
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
                            "flexBasis": "",
                            "bindingKey": "qwer"
                          }
                        ]
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
                    "type": "box",
                    "id": 378,
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "box",
                        "id": 379,
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "textField",
                            "id": 380
                          }
                        ],
                        "justifyContent": "center"
                      },
                      {
                        "type": "box",
                        "id": 381,
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "radioGroup",
                            "id": 382,
                            "bindingKey": "breathNoise"
                          }
                        ],
                        "wrap": "wrap",
                        "justifyContent": "center"
                      },
                      {
                        "type": "box",
                        "id": 383,
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "select",
                            "id": 384,
                            "style": "",
                            "dense": true,
                            "width": "100px",
                            "flexBasis": "auto",
                            "flexGrow": 0
                          }
                        ],
                        "justifyContent": "flex-start"
                      },
                      {
                        "type": "box",
                        "id": 385,
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "checkbox",
                            "id": 386
                          },
                          {
                            "type": "text",
                            "id": 387,
                            "text": "air入り",
                            "flexBasis": "auto"
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "id": 388,
                        "layout": "horizontal",
                        "contents": [
                          {
                            "type": "text",
                            "id": 389,
                            "text": "("
                          },
                          {
                            "type": "radioGroup",
                            "id": 390
                          },
                          {
                            "type": "text",
                            "id": 391,
                            "text": ")"
                          }
                        ]
                      }
                    ]
                  }
                ]
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
                        "width": "100%",
                        "flexBasis": "auto"
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
                        "text": "尿量(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "select",
                        "id": 392,
                        "dense": true,
                        "style": "",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "text",
                        "id": 393,
                        "text": "ml）　"
                      },
                      {
                        "type": "checkbox",
                        "id": 394
                      },
                      {
                        "type": "text",
                        "id": 395,
                        "text": "性状(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "select",
                        "id": 396,
                        "dense": true
                      },
                      {
                        "type": "text",
                        "id": 397,
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
                        "id": 399
                      },
                      {
                        "type": "text",
                        "id": 400,
                        "text": "道量(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "select",
                        "id": 401,
                        "dense": true,
                        "style": "",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "text",
                        "id": 402,
                        "text": "ml）　"
                      },
                      {
                        "type": "checkbox",
                        "id": 403
                      },
                      {
                        "type": "text",
                        "id": 404,
                        "text": "性状(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "select",
                        "id": 405,
                        "dense": true
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
                        "id": 408
                      },
                      {
                        "type": "text",
                        "id": 409,
                        "text": "尿管交換(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "checkbox",
                        "id": 410
                      },
                      {
                        "type": "text",
                        "id": 411,
                        "flexBasis": "auto",
                        "text": "管のサイズ"
                      },
                      {
                        "type": "select",
                        "id": 412,
                        "dense": true,
                        "width": "50px"
                      },
                      {
                        "type": "text",
                        "id": 413,
                        "text": "Fr　"
                      },
                      {
                        "type": "checkbox",
                        "id": 414
                      },
                      {
                        "type": "text",
                        "id": 415,
                        "flexBasis": "auto",
                        "text": "カフ水"
                      },
                      {
                        "type": "select",
                        "id": 416,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
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
                        "id": 419
                      },
                      {
                        "type": "text",
                        "id": 420,
                        "text": "尿管管理(",
                        "flexBasis": "auto"
                      },
                      {
                        "type": "checkbox",
                        "id": 421
                      },
                      {
                        "type": "text",
                        "id": 422,
                        "flexBasis": "auto",
                        "text": "膀胱洗浄　"
                      },
                      {
                        "type": "select",
                        "id": 423,
                        "dense": true,
                        "width": "50px"
                      },
                      {
                        "type": "checkbox",
                        "id": 425
                      },
                      {
                        "type": "text",
                        "id": 426,
                        "flexBasis": "auto",
                        "text": "ミルキング"
                      },
                      {
                        "type": "select",
                        "id": 427,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
                      },
                      {
                        "type": "checkbox",
                        "id": 428
                      },
                      {
                        "type": "text",
                        "id": 429,
                        "flexBasis": "auto",
                        "text": "パープルシンドローム)"
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
                        "width": "50px"
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
                        "width": "50px"
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
                        "width": "50px",
                        "flexBasis": ""
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
                        "id": 448,
                        "dense": true,
                        "width": "50px"
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
                        "id": 452,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
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
                        "id": 459,
                        "dense": true,
                        "width": "50px"
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
                        "id": 463,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
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
                        "id": 470,
                        "dense": true,
                        "width": "50px"
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
                        "id": 474,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
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
                        "id": 481,
                        "dense": true,
                        "width": "50px"
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
                        "id": 485,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
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
                        "id": 492,
                        "dense": true,
                        "width": "50px"
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
                        "id": 496,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
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
                        "id": 503,
                        "dense": true,
                        "width": "50px"
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
                        "id": 507,
                        "dense": true,
                        "width": "50px",
                        "flexBasis": ""
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
                        "width": "50px"
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
                        "width": "50px",
                        "flexBasis": ""
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
  bindingData: {a:1, b:2}
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
};

const newElementTemplate = {
  name: "new element template",
  template: {
    type: "box",
    id: 0,
    contents: [
      {
        type: "icon",
        id: 1,
        url:
          "https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube_icon_full-color.svg?cache=f2ec7a5",
        size: "50px",
      },
      {
        type: "select",
        id: 2,
        style: "outlined",
        width: "200px",
        dense: true,
        options: ["option5", "option4", "option3", "option2", "option1"],
        bindingKey: "select",
      },
      {
        type: "checkbox",
        id: 3,
        bindingKey: "checkbox",
      },
      {
        type: "select",
        id: 4,
        options: ["2", "1"],
      },
    ],
    layout: "vertical",
  },
  bindingData: {
    select: "option3",
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
