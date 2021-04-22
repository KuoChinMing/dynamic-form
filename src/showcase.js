const tableTemplate = {
  name: "table demo",
  template: {
    type: "box",
    layout: "column",
    id: 1,
    contents: [
      {
        type: "table",
        id: 2,
        contents: [
          {
            type: "trow",
            id: 5,
            contents: [
              {
                type: "tcol",
                id: 6,
                width: "16.6%",
                contents: [
                  {
                    type: "text",
                    id: 16,
                    text: "利用者氏名",
                    fontStyle: "",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 9,
                width: "16.6%",
                contents: [
                  {
                    type: "textField",
                    id: 356,
                    width: "auto",
                    bindingKey: "patient",
                  },
                ],
              },
              {
                type: "tcol",
                id: 10,
                width: "16.6%",
                contents: [
                  {
                    type: "text",
                    id: 178,
                    text: "訪問者",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 11,
                width: "16.6%",
                contents: [
                  {
                    type: "textField",
                    id: 357,
                    width: "auto",
                    bindingKey: "visitorName",
                  },
                ],
              },
              {
                type: "tcol",
                id: 12,
                width: "16.6%",
                contents: [
                  {
                    type: "text",
                    id: 179,
                    text: "同行者",
                    width: "",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 13,
                width: "16.6%",
                contents: [
                  {
                    type: "textField",
                    id: 358,
                    width: "auto",
                    bindingKey: "partnerName",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 7,
            contents: [
              {
                type: "tcol",
                id: 8,
                contents: [
                  {
                    type: "text",
                    id: 17,
                    text: "訪問日時",
                    textAlign: "center",
                  },
                ],
                width: "16.6%",
              },
              {
                type: "tcol",
                id: 659,
                colspan: "3",
                contents: [
                  {
                    type: "box",
                    id: 660,
                    contents: [
                      {
                        type: "radioGroup",
                        id: 661,
                        contents: [
                          {
                            type: "radio",
                            id: 662,
                            label: "定期",
                          },
                          {
                            type: "radio",
                            id: 663,
                            label: "緊急",
                          },
                        ],
                        dense: true,
                        direction: "row",
                        bindingKey: "visitDateRadio",
                      },
                      {
                        type: "datePicker",
                        id: 664,
                        locale: "ja",
                        style: "standard",
                        dense: true,
                        bindingKey: "visitDatePicker",
                        width: "",
                        label: "日付の選択",
                      },
                      {
                        type: "text",
                        id: 692,
                        text: "　",
                      },
                      {
                        type: "timeIntervalSelect",
                        id: 665,
                        time: [
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
                          "23:30",
                        ],
                        dense: true,
                        width: "12%",
                        bindingKey: "visitTimeInterval",
                      },
                    ],
                  },
                ],
              },
              {
                type: "tcol",
                id: 15,
                colspan: "2",
                contents: [
                  {
                    type: "box",
                    id: 180,
                    layout: "column",
                    contents: [
                      {
                        type: "box",
                        id: 666,
                        contents: [
                          {
                            type: "text",
                            id: 336,
                            text: "室温",
                            flexBasis: "auto",
                          },
                          {
                            type: "textField",
                            id: 337,
                            width: "",
                            bindingKey: "roomTemperature",
                          },
                          {
                            type: "text",
                            id: 341,
                            text: "℃",
                            flexBasis: "auto",
                          },
                        ],
                      },
                      {
                        type: "box",
                        id: 667,
                        contents: [
                          {
                            type: "text",
                            id: 339,
                            text: "湿度",
                            flexBasis: "auto",
                          },
                          {
                            type: "textField",
                            id: 340,
                            width: "",
                            bindingKey: "roomHumidity",
                          },
                          {
                            type: "text",
                            id: 342,
                            text: "%",
                            flexBasis: "auto",
                          },
                        ],
                      },
                    ],
                    wrap: "wrap",
                    fillHeight: false,
                    alignItems: "align-start",
                  },
                ],
                width: "16.6%",
              },
            ],
          },
        ],
      },
      {
        type: "table",
        id: 3,
        contents: [
          {
            type: "trow",
            id: 18,
            contents: [
              {
                type: "tcol",
                id: 19,
                contents: [
                  {
                    type: "text",
                    id: 26,
                    text: "體溫",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 22,
                contents: [
                  {
                    type: "text",
                    id: 185,
                    textAlign: "center",
                    text: "脈拍",
                  },
                ],
              },
              {
                type: "tcol",
                id: 23,
                contents: [
                  {
                    type: "text",
                    id: 186,
                    text: "血圧",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 24,
                contents: [
                  {
                    type: "text",
                    id: 187,
                    text: "呼吸",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 25,
                contents: [
                  {
                    type: "text",
                    id: 188,
                    text: "SpO2",
                    textAlign: "center",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 20,
            contents: [
              {
                type: "tcol",
                id: 21,
                contents: [
                  {
                    type: "textField",
                    id: 668,
                    bindingKey: "bodyTemperature",
                  },
                ],
              },
              {
                type: "tcol",
                id: 27,
                contents: [
                  {
                    type: "box",
                    id: 367,
                    layout: "column",
                    contents: [
                      {
                        type: "textField",
                        id: 368,
                        bindingKey: "pulseInput",
                        width: "",
                      },
                      {
                        type: "box",
                        id: 669,
                        contents: [
                          {
                            type: "radioGroup",
                            id: 670,
                            contents: [
                              {
                                type: "radio",
                                id: 671,
                                label: "整脈",
                              },
                              {
                                type: "radio",
                                id: 672,
                                label: "不整脈",
                              },
                            ],
                            direction: "row",
                            dense: true,
                            bindingKey: "pulseRadio",
                          },
                          {
                            type: "select",
                            id: 689,
                            dense: true,
                            bindingKey: "pulseSelect",
                            options: ["選択", "リズム不整", "結滞"],
                          },
                        ],
                        layout: "column",
                        flexGrow: 0,
                        flexShrink: 0,
                        fillHeight: true,
                        alignItems: "",
                        wrap: true,
                        justifyContent: "justify-start",
                      },
                      {
                        type: "box",
                        id: 649,
                        contents: [
                          {
                            type: "checkbox",
                            id: 682,
                            label: "脈圧",
                            bindingKey: "bloodPressureCheckbox",
                          },
                          {
                            type: "radioGroup",
                            id: 656,
                            contents: [
                              {
                                type: "radio",
                                id: 657,
                                label: "良好",
                              },
                              {
                                type: "radio",
                                id: 658,
                                label: "不良",
                              },
                            ],
                            dense: true,
                            direction: "row",
                            bindingKey: "bloodPressureRadio",
                          },
                        ],
                        alignItems: "align-end",
                      },
                    ],
                    justifyContent: "center",
                    flexGrow: 1,
                  },
                ],
              },
              {
                type: "tcol",
                id: 28,
                contents: [
                  {
                    type: "box",
                    id: 192,
                    layout: "column",
                    contents: [
                      {
                        type: "box",
                        id: 193,
                        layout: "horizontal",
                        contents: [
                          {
                            type: "text",
                            id: 194,
                            text: "最高/最低",
                            flexBasis: "auto",
                          },
                          {
                            type: "textField",
                            id: 195,
                            shrink: "",
                            flex: "",
                            flexBasis: "",
                            width: "15%",
                            bindingKey: "bloodPressure",
                          },
                        ],
                        wrap: "",
                      },
                    ],
                  },
                ],
              },
              {
                type: "tcol",
                id: 29,
                contents: [
                  {
                    type: "textField",
                    id: 688,
                    bindingKey: "breatheInput",
                  },
                  {
                    type: "radioGroup",
                    id: 675,
                    contents: [
                      {
                        type: "radio",
                        id: 676,
                        label: "副雑音あり",
                      },
                      {
                        type: "radio",
                        id: 677,
                        label: "なし",
                      },
                    ],
                    direction: "row",
                    bindingKey: "breatheNoiseRadio",
                  },
                  {
                    type: "select",
                    id: 384,
                    style: "",
                    dense: true,
                    width: "",
                    flexBasis: "",
                    flexGrow: 1,
                    options: [
                      "選択",
                      "連続性高調整副雑音",
                      "連続性低調性副雑音",
                      "断続性粗い副雑音",
                      "断続性細かい副雑音",
                    ],
                    bindingKey: "breathNoiseSelectionValue",
                  },
                  {
                    type: "box",
                    id: 683,
                    contents: [
                      {
                        type: "checkbox",
                        id: 684,
                        label: "air入り",
                        bindingKey: "breatheAir",
                      },
                      {
                        type: "radioGroup",
                        id: 685,
                        contents: [
                          {
                            type: "radio",
                            id: 686,
                            label: "良好",
                          },
                          {
                            type: "radio",
                            id: 687,
                            label: "不良",
                          },
                        ],
                        direction: "row",
                        dense: true,
                        bindingKey: "breatheAirRadio",
                      },
                    ],
                    alignItems: "align-end",
                  },
                ],
              },
              {
                type: "tcol",
                id: 30,
                contents: [
                  {
                    type: "textField",
                    id: 674,
                    bindingKey: "spO2Input",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "table",
        id: 4,
        contents: [
          {
            type: "trow",
            id: 31,
            contents: [
              {
                type: "tcol",
                id: 32,
                contents: [
                  {
                    type: "text",
                    id: 35,
                    text: "排尿",
                    textAlign: "center",
                  },
                ],
                rowspan: "4",
                width: "20%",
              },
              {
                type: "tcol",
                id: 191,
                width: "80%",
                contents: [
                  {
                    type: "box",
                    id: 199,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 200,
                        label: "尿量",
                        bindingKey: "urineVolume",
                        grow: 0,
                        marginRight: "8px",
                      },
                      {
                        type: "select",
                        id: 392,
                        dense: true,
                        style: "",
                        flexBasis: "auto",
                        bindingKey: "urineAmount",
                        options: [
                          "選択",
                          "<100",
                          "100",
                          "200",
                          "300",
                          "400",
                          "> 400",
                        ],
                        width: "100px",
                        flexGrow: 0,
                      },
                      {
                        type: "text",
                        id: 393,
                        text: "ml",
                        margin: "0 8px 0 0",
                      },
                      {
                        type: "checkbox",
                        id: 394,
                        label: "性状",
                        bindingKey: "urineSituation",
                        grow: 0,
                        marginRight: "8px",
                      },
                      {
                        type: "select",
                        id: 691,
                        bindingKey: "urineSituationSelection",
                        dense: true,
                        options: ["選択", "クリア", "混濁", "浮遊物"],
                        width: "100px",
                        flexGrow: 0,
                      },
                    ],
                    wrap: "nowrap",
                    justifyContent: "justify-start",
                    alignItems: "align-center",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 37,
            contents: [
              {
                type: "tcol",
                id: 38,
                width: "",
                contents: [
                  {
                    type: "box",
                    id: 398,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 399,
                        label: "道量",
                        bindingKey: "urinePathVolume",
                        grow: 0,
                        marginRight: "8px",
                      },
                      {
                        type: "text",
                        id: 693,
                        text: "(",
                      },
                      {
                        type: "select",
                        id: 401,
                        dense: true,
                        style: "",
                        flexBasis: "auto",
                        options: [
                          "選択",
                          "<100",
                          "100",
                          "200",
                          "300",
                          "400",
                          ">400",
                        ],
                        bindingKey: "pathSelection",
                        flexGrow: 0,
                        width: "100px",
                        flexShrink: 0,
                      },
                      {
                        type: "text",
                        id: 402,
                        text: "ml）　",
                      },
                      {
                        type: "checkbox",
                        id: 403,
                        grow: 0,
                        marginRight: "8px",
                        label: "性状",
                        bindingKey: "urinePathSituation",
                      },
                      {
                        type: "text",
                        id: 404,
                        text: "(",
                        flexBasis: "auto",
                      },
                      {
                        type: "select",
                        id: 405,
                        dense: true,
                        options: ["選択", "クリア", "混濁", "浮遊物"],
                        bindingKey: "pathSituationSelection",
                        flexGrow: 0,
                        width: "100px",
                      },
                      {
                        type: "text",
                        id: 406,
                        text: "）",
                      },
                    ],
                    wrap: "nowrap",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 39,
            contents: [
              {
                type: "tcol",
                id: 40,
                contents: [
                  {
                    type: "box",
                    id: 407,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 408,
                        bindingKey: "urineTubeCheckbox",
                        label: "尿管交換",
                        grow: 0,
                        marginRight: "8px",
                      },
                      {
                        type: "text",
                        id: 409,
                        text: "(",
                        flexBasis: "auto",
                      },
                      {
                        type: "checkbox",
                        id: 410,
                        grow: 0,
                        label: "管のサイズ",
                        bindingKey: "urineTubecheckbox1",
                      },
                      {
                        type: "select",
                        id: 412,
                        dense: true,
                        width: "100px",
                        options: [
                          "選択",
                          "12Fr",
                          "14Fr",
                          "16Fr",
                          "18Fr",
                          "20Fr",
                        ],
                        bindingKey: "tubeSelection",
                        flexGrow: 0,
                      },
                      {
                        type: "text",
                        id: 413,
                        text: "Fr　",
                      },
                      {
                        type: "checkbox",
                        id: 414,
                        bindingKey: "urineTubeWaterCheckbox",
                        label: "カフ水",
                        grow: 0,
                      },
                      {
                        type: "select",
                        id: 416,
                        dense: true,
                        width: "100px",
                        flexBasis: "",
                        bindingKey: "waterSelection",
                        options: [
                          "選択",
                          "5ml",
                          "10ml",
                          "15ml",
                          "20ml",
                          "30ml",
                        ],
                        flexGrow: 0,
                      },
                      {
                        type: "text",
                        id: 417,
                        flexBasis: "auto",
                        text: "ml）",
                      },
                    ],
                    wrap: "wrap",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 41,
            contents: [
              {
                type: "tcol",
                id: 42,
                contents: [
                  {
                    type: "box",
                    id: 418,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 419,
                        label: "尿管管理",
                        bindingKey: "urineTubeExchange1",
                        grow: 0,
                      },
                      {
                        type: "text",
                        id: 420,
                        text: "(",
                        flexBasis: "auto",
                      },
                      {
                        type: "checkbox",
                        id: 421,
                        grow: 0,
                        bindingKey: "bladderClean",
                      },
                      {
                        type: "text",
                        id: 422,
                        flexBasis: "auto",
                        text: "膀胱洗浄　",
                      },
                      {
                        type: "checkbox",
                        id: 425,
                        grow: 0,
                        bindingKey: "bladderClean1",
                        label: "ミルキング",
                      },
                      {
                        type: "select",
                        id: 427,
                        dense: true,
                        width: "100px",
                        flexBasis: "",
                        options: ["選択", "実施", "指導"],
                        bindingKey: "urinaryCleanSelection",
                        flexGrow: 0,
                      },
                      {
                        type: "checkbox",
                        id: 428,
                        bindingKey: "bladderClean2",
                        label: "パープルシンドローム)",
                        grow: 0,
                      },
                    ],
                    wrap: "wrap",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "table",
        id: 43,
        contents: [
          {
            type: "trow",
            id: 44,
            contents: [
              {
                type: "tcol",
                id: 45,
                contents: [
                  {
                    type: "text",
                    id: 46,
                    text: "排便",
                    textAlign: "center",
                  },
                ],
                rowspan: "10",
                width: "20%",
              },
              {
                type: "tcol",
                id: 47,
                colspan: "2",
                width: "80%",
                contents: [
                  {
                    type: "box",
                    id: 211,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 213,
                        label: "腸蠕動音",
                        grow: 0,
                      },
                      {
                        type: "select",
                        id: 430,
                        dense: true,
                        width: "",
                        bindingKey: "intestinalSound",
                        flexGrow: 0,
                        options: ["選択", "聞かれず", "弱め", "良好", "更新"],
                        marginLeft: "10px",
                      },
                    ],
                    alignItems: "align-center",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 48,
            contents: [
              {
                type: "tcol",
                id: 49,
                colspan: "2",
                contents: [
                  {
                    type: "box",
                    id: 214,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 215,
                        label: "排便状況",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 50,
            contents: [
              {
                type: "tcol",
                id: 693,
                contents: [
                  {
                    type: "box",
                    id: 694,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 695,
                        label: "日",
                        grow: 0,
                      },
                      {
                        type: "box",
                        id: 696,
                        contents: [
                          {
                            type: "checkbox",
                            id: 697,
                            label: "量",
                            grow: 0,
                          },
                          {
                            type: "select",
                            id: 698,
                            dense: true,
                            width: "",
                            options: [
                              "選択",
                              "無し",
                              "付着",
                              "母指大",
                              "片手半分",
                              "片手",
                              "両手",
                              "両手山盛り",
                            ],
                            flexGrow: 0,
                            marginLeft: "10px",
                          },
                          {
                            type: "checkbox",
                            id: 699,
                            label: "性状",
                            marginLeft: "10px",
                            grow: 0,
                          },
                          {
                            type: "select",
                            id: 700,
                            dense: true,
                            width: "",
                            flexBasis: "",
                            options: [
                              "選択",
                              "ブリストルスケール①",
                              "ブリストルスケール②",
                              "ブリストルスケール③",
                              "ブリストルスケール④",
                              "ブリストルスケール⑤",
                              "ブリストルスケール⑥",
                              "ブリストルスケール⑦",
                            ],
                            flexGrow: 0,
                            marginLeft: "10px",
                          },
                        ],
                        alignItems: "align-center",
                        marginLeft: "20px",
                      },
                    ],
                    wrap: "wrap",
                    alignItems: "align-center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 701,
                contents: [
                  {
                    type: "box",
                    id: 702,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 703,
                        label: "月",
                        grow: 0,
                      },
                      {
                        type: "box",
                        id: 704,
                        contents: [
                          {
                            type: "checkbox",
                            id: 705,
                            label: "量",
                            grow: 0,
                          },
                          {
                            type: "select",
                            id: 706,
                            dense: true,
                            width: "",
                            options: [
                              "選択",
                              "無し",
                              "付着",
                              "母指大",
                              "片手半分",
                              "片手",
                              "両手",
                              "両手山盛り",
                            ],
                            flexGrow: 0,
                            marginLeft: "10px",
                          },
                          {
                            type: "checkbox",
                            id: 707,
                            label: "性状",
                            marginLeft: "10px",
                            grow: 0,
                          },
                          {
                            type: "select",
                            id: 708,
                            dense: true,
                            width: "",
                            flexBasis: "",
                            options: [
                              "選択",
                              "ブリストルスケール①",
                              "ブリストルスケール②",
                              "ブリストルスケール③",
                              "ブリストルスケール④",
                              "ブリストルスケール⑤",
                              "ブリストルスケール⑥",
                              "ブリストルスケール⑦",
                            ],
                            flexGrow: 0,
                            marginLeft: "10px",
                          },
                        ],
                        alignItems: "align-center",
                        marginLeft: "20px",
                      },
                    ],
                    wrap: "wrap",
                    alignItems: "align-center",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 709,
            contents: [
              {
                type: "tcol",
                id: 710,
                contents: [
                  {
                    type: "box",
                    id: 711,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 712,
                        label: "火",
                        grow: 0,
                      },
                      {
                        type: "box",
                        id: 713,
                        contents: [
                          {
                            type: "checkbox",
                            id: 714,
                            label: "量",
                            grow: 0,
                          },
                          {
                            type: "select",
                            id: 715,
                            dense: true,
                            width: "",
                            options: [
                              "選択",
                              "無し",
                              "付着",
                              "母指大",
                              "片手半分",
                              "片手",
                              "両手",
                              "両手山盛り",
                            ],
                            flexGrow: 0,
                            marginLeft: "10px",
                          },
                          {
                            type: "checkbox",
                            id: 716,
                            label: "性状",
                            marginLeft: "10px",
                            grow: 0,
                          },
                          {
                            type: "select",
                            id: 717,
                            dense: true,
                            width: "",
                            flexBasis: "",
                            options: [
                              "選択",
                              "ブリストルスケール①",
                              "ブリストルスケール②",
                              "ブリストルスケール③",
                              "ブリストルスケール④",
                              "ブリストルスケール⑤",
                              "ブリストルスケール⑥",
                              "ブリストルスケール⑦",
                            ],
                            flexGrow: 0,
                            marginLeft: "10px",
                          },
                        ],
                        alignItems: "align-center",
                        marginLeft: "20px",
                      },
                    ],
                    wrap: "wrap",
                    alignItems: "align-center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 718,
                contents: [
                  {
                    type: "box",
                    id: 719,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 720,
                        label: "水",
                        grow: 0,
                      },
                      {
                        type: "box",
                        id: 721,
                        contents: [
                          {
                            type: "checkbox",
                            id: 722,
                            label: "量",
                            grow: 0,
                          },
                          {
                            type: "select",
                            id: 723,
                            dense: true,
                            width: "",
                            options: [
                              "選択",
                              "無し",
                              "付着",
                              "母指大",
                              "片手半分",
                              "片手",
                              "両手",
                              "両手山盛り",
                            ],
                            flexGrow: 0,
                            marginLeft: "10px",
                          },
                          {
                            type: "checkbox",
                            id: 724,
                            label: "性状",
                            marginLeft: "10px",
                            grow: 0,
                          },
                          {
                            type: "select",
                            id: 725,
                            dense: true,
                            width: "",
                            flexBasis: "",
                            options: [
                              "選択",
                              "ブリストルスケール①",
                              "ブリストルスケール②",
                              "ブリストルスケール③",
                              "ブリストルスケール④",
                              "ブリストルスケール⑤",
                              "ブリストルスケール⑥",
                              "ブリストルスケール⑦",
                            ],
                            flexGrow: 0,
                            marginLeft: "10px",
                          },
                        ],
                        alignItems: "align-center",
                        marginLeft: "20px",
                      },
                    ],
                    wrap: "wrap",
                    alignItems: "align-center",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 726,
            contents: [
              {
                type: "tcol",
                id: 727,
                contents: [
                  {
                    type: "box",
                    id: 728,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 729,
                        label: "木",
                        grow: 0,
                      },
                      {
                        type: "box",
                        id: 730,
                        contents: [
                          {
                            type: "checkbox",
                            id: 731,
                            label: "量",
                            grow: 0,
                          },
                          {
                            type: "select",
                            id: 732,
                            dense: true,
                            width: "",
                            options: [
                              "選択",
                              "無し",
                              "付着",
                              "母指大",
                              "片手半分",
                              "片手",
                              "両手",
                              "両手山盛り",
                            ],
                            flexGrow: 0,
                            marginLeft: "10px",
                          },
                          {
                            type: "checkbox",
                            id: 733,
                            label: "性状",
                            marginLeft: "10px",
                            grow: 0,
                          },
                          {
                            type: "select",
                            id: 734,
                            dense: true,
                            width: "",
                            flexBasis: "",
                            options: [
                              "選択",
                              "ブリストルスケール①",
                              "ブリストルスケール②",
                              "ブリストルスケール③",
                              "ブリストルスケール④",
                              "ブリストルスケール⑤",
                              "ブリストルスケール⑥",
                              "ブリストルスケール⑦",
                            ],
                            flexGrow: 0,
                            marginLeft: "10px",
                          },
                        ],
                        alignItems: "align-center",
                        marginLeft: "20px",
                      },
                    ],
                    wrap: "wrap",
                    alignItems: "align-center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 735,
                contents: [
                  {
                    type: "box",
                    id: 736,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 737,
                        label: "金",
                        grow: 0,
                      },
                      {
                        type: "box",
                        id: 738,
                        contents: [
                          {
                            type: "checkbox",
                            id: 739,
                            label: "量",
                            grow: 0,
                          },
                          {
                            type: "select",
                            id: 740,
                            dense: true,
                            width: "",
                            options: [
                              "選択",
                              "無し",
                              "付着",
                              "母指大",
                              "片手半分",
                              "片手",
                              "両手",
                              "両手山盛り",
                            ],
                            flexGrow: 0,
                            marginLeft: "10px",
                          },
                          {
                            type: "checkbox",
                            id: 741,
                            label: "性状",
                            marginLeft: "10px",
                            grow: 0,
                          },
                          {
                            type: "select",
                            id: 742,
                            dense: true,
                            width: "",
                            flexBasis: "",
                            options: [
                              "選択",
                              "ブリストルスケール①",
                              "ブリストルスケール②",
                              "ブリストルスケール③",
                              "ブリストルスケール④",
                              "ブリストルスケール⑤",
                              "ブリストルスケール⑥",
                              "ブリストルスケール⑦",
                            ],
                            flexGrow: 0,
                            marginLeft: "10px",
                          },
                        ],
                        alignItems: "align-center",
                        marginLeft: "20px",
                      },
                    ],
                    wrap: "wrap",
                    alignItems: "align-center",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 743,
            contents: [
              {
                type: "tcol",
                id: 744,
                contents: [
                  {
                    type: "box",
                    id: 745,
                    layout: "",
                    contents: [
                      {
                        type: "checkbox",
                        id: 746,
                        label: "土",
                        grow: 0,
                      },
                      {
                        type: "box",
                        id: 747,
                        contents: [
                          {
                            type: "checkbox",
                            id: 748,
                            label: "量",
                            grow: 0,
                          },
                          {
                            type: "select",
                            id: 749,
                            dense: true,
                            width: "",
                            options: [
                              "選択",
                              "無し",
                              "付着",
                              "母指大",
                              "片手半分",
                              "片手",
                              "両手",
                              "両手山盛り",
                            ],
                            flexGrow: 0,
                            marginLeft: "10px",
                          },
                          {
                            type: "checkbox",
                            id: 750,
                            label: "性状",
                            marginLeft: "10px",
                            grow: 0,
                          },
                          {
                            type: "select",
                            id: 751,
                            dense: true,
                            width: "",
                            flexBasis: "",
                            options: [
                              "選択",
                              "ブリストルスケール①",
                              "ブリストルスケール②",
                              "ブリストルスケール③",
                              "ブリストルスケール④",
                              "ブリストルスケール⑤",
                              "ブリストルスケール⑥",
                              "ブリストルスケール⑦",
                            ],
                            flexGrow: 0,
                            marginLeft: "10px",
                          },
                        ],
                        alignItems: "align-center",
                        marginLeft: "20px",
                      },
                    ],
                    wrap: "wrap",
                    alignItems: "align-center",
                    flexShrink: 1,
                  },
                ],
              },
              {
                type: "tcol",
                id: 752,
                contents: [],
              },
            ],
          },
          {
            type: "trow",
            id: 58,
            contents: [
              {
                type: "tcol",
                id: 59,
                colspan: "2",
                contents: [
                  {
                    type: "box",
                    id: 756,
                    contents: [
                      {
                        type: "checkbox",
                        id: 510,
                        label: "指診",
                        grow: 0,
                        shrink: 0,
                      },
                      {
                        type: "radioGroup",
                        id: 753,
                        contents: [
                          {
                            type: "radio",
                            id: 754,
                            label: "触れず",
                          },
                          {
                            type: "radio",
                            id: 755,
                            label: "触れる",
                          },
                        ],
                        direction: "row",
                        dense: true,
                        marginLeft: "10px",
                        grow: 0,
                        shrink: 0,
                      },
                      {
                        type: "select",
                        id: 757,
                        flexGrow: 0,
                        dense: true,
                        flexShrink: 1,
                      },
                    ],
                    alignItems: "align-center",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 758,
            contents: [
              {
                type: "tcol",
                id: 759,
                colspan: "2",
                contents: [
                  {
                    type: "box",
                    id: 760,
                    contents: [
                      {
                        type: "checkbox",
                        id: 761,
                        label: "浣腸",
                        grow: 0,
                        shrink: 0,
                      },
                      {
                        type: "radioGroup",
                        id: 762,
                        contents: [
                          {
                            type: "radio",
                            id: 763,
                            label: "30ml",
                          },
                          {
                            type: "radio",
                            id: 764,
                            label: "60ml",
                          },
                          {
                            type: "radio",
                            id: 765,
                            label: "120ml",
                          },
                          {
                            type: "radio",
                            id: 766,
                            label: "その他",
                          },
                        ],
                        direction: "row",
                        dense: true,
                        marginLeft: "10px",
                        grow: 0,
                      },
                    ],
                    alignItems: "align-center",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 767,
            contents: [
              {
                type: "tcol",
                id: 768,
                colspan: "2",
                contents: [
                  {
                    type: "box",
                    id: 769,
                    contents: [
                      {
                        type: "checkbox",
                        id: 770,
                        label: "摘便実施",
                        grow: 0,
                        shrink: 0,
                      },
                      {
                        type: "box",
                        id: 773,
                        contents: [
                          {
                            type: "checkbox",
                            id: 771,
                            label: "量",
                            grow: 0,
                            marginLeft: "10px",
                          },
                          {
                            type: "select",
                            id: 772,
                            dense: true,
                            flexGrow: 0,
                            marginLeft: "10px",
                          },
                        ],
                        flexGrow: 0,
                        marginLeft: "10px",
                        alignItems: "align-center",
                      },
                      {
                        type: "box",
                        id: 774,
                        contents: [
                          {
                            type: "checkbox",
                            id: 775,
                            label: "性状",
                            grow: 0,
                            marginLeft: "10px",
                            shrink: 0,
                          },
                          {
                            type: "select",
                            id: 776,
                            dense: true,
                            flexGrow: 0,
                            marginLeft: "10px",
                          },
                        ],
                        flexGrow: 0,
                        marginLeft: "10px",
                        alignItems: "align-center",
                      },
                    ],
                    alignItems: "align-center",
                  },
                  {
                    type: "box",
                    id: 787,
                    contents: [
                      {
                        type: "checkbox",
                        id: 788,
                        label: "摘便未実施",
                        grow: 0,
                      },
                    ],
                    marginTop: "",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 777,
            contents: [
              {
                type: "tcol",
                id: 778,
                colspan: "2",
                contents: [
                  {
                    type: "checkbox",
                    id: 780,
                    label: "腹部マッサージ",
                    grow: 0,
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 72,
            contents: [
              {
                type: "tcol",
                id: 73,
                contents: [
                  {
                    type: "text",
                    id: 75,
                    text: "オムツ交換",
                    textAlign: "center",
                  },
                ],
                width: "",
              },
              {
                type: "tcol",
                id: 789,
                colspan: "2",
                contents: [
                  {
                    type: "box",
                    id: 792,
                    contents: [
                      {
                        type: "checkbox",
                        id: 791,
                        label: "オムツ",
                        grow: 0,
                      },
                      {
                        type: "checkbox",
                        id: 790,
                        label: "パット",
                        grow: 0,
                        marginLeft: "10px",
                      },
                    ],
                    justifyContent: "justify-start",
                    alignItems: "align-center",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 76,
            contents: [
              {
                type: "tcol",
                id: 80,
                rowspan: "",
                contents: [
                  {
                    type: "text",
                    id: 89,
                    text: "清潔ケア・指導",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 81,
                colspan: "2",
                contents: [
                  {
                    type: "box",
                    id: 259,
                    contents: [
                      {
                        type: "checkbox",
                        id: 260,
                        label: "入浴",
                        grow: 0,
                        marginRight: "20px",
                      },
                      {
                        type: "checkbox",
                        id: 262,
                        label: "シャワー浴",
                        grow: 0,
                        marginLeft: "",
                        marginRight: "20px",
                      },
                      {
                        type: "checkbox",
                        id: 264,
                        label: "部分浴",
                        grow: 0,
                        marginLeft: "",
                        marginRight: "20px",
                      },
                      {
                        type: "box",
                        id: 799,
                        contents: [
                          {
                            type: "checkbox",
                            id: 537,
                            label: "洗髪",
                            grow: 0,
                            marginLeft: "",
                            marginRight: "10px",
                          },
                          {
                            type: "select",
                            id: 539,
                            dense: true,
                            width: "",
                            flexBasis: "",
                            flexGrow: 0,
                            marginLeft: "",
                            marginRight: "10px",
                          },
                        ],
                        flexGrow: 0,
                        marginLeft: "",
                        alignItems: "align-center",
                        marginRight: "20px",
                      },
                      {
                        type: "box",
                        id: 800,
                        contents: [
                          {
                            type: "checkbox",
                            id: 554,
                            label: "清拭",
                            grow: 0,
                            marginLeft: "",
                          },
                          {
                            type: "radioGroup",
                            id: 796,
                            contents: [
                              {
                                type: "radio",
                                id: 797,
                                label: "全身",
                              },
                              {
                                type: "radio",
                                id: 798,
                                label: "一部",
                              },
                            ],
                            direction: "row",
                            grow: 0,
                            marginLeft: "10px",
                            dense: true,
                          },
                          {
                            type: "select",
                            id: 557,
                            dense: true,
                            width: "",
                            flexBasis: "",
                            flexGrow: 0,
                            flexShrink: 0,
                          },
                        ],
                        alignItems: "align-center",
                        marginLeft: "",
                        flexGrow: 0,
                        marginRight: "20px",
                      },
                      {
                        type: "box",
                        id: 802,
                        contents: [
                          {
                            type: "checkbox",
                            id: 801,
                            label: "爪切り",
                            grow: 0,
                            marginLeft: "",
                            marginRight: "",
                          },
                          {
                            type: "radioGroup",
                            id: 804,
                            contents: [
                              {
                                type: "radio",
                                id: 805,
                                label: "手",
                              },
                              {
                                type: "radio",
                                id: 806,
                                label: "足",
                              },
                            ],
                            direction: "row",
                            grow: 0,
                            marginLeft: "10px",
                            dense: true,
                          },
                        ],
                        alignItems: "align-center",
                        marginLeft: "",
                        flexGrow: 0,
                        marginRight: "20px",
                      },
                      {
                        type: "checkbox",
                        id: 807,
                        label: "耳垢除去",
                        grow: 0,
                        marginLeft: "",
                        marginRight: "20px",
                      },
                      {
                        type: "checkbox",
                        id: 808,
                        label: "髭剃り",
                        grow: 0,
                        marginLeft: "",
                        marginRight: "20px",
                      },
                      {
                        type: "box",
                        id: 809,
                        contents: [
                          {
                            type: "checkbox",
                            id: 810,
                            label: "口腔ケア",
                            grow: 0,
                            marginLeft: "",
                            marginRight: "10px",
                            shrink: 0,
                          },
                          {
                            type: "box",
                            id: 811,
                            contents: [
                              {
                                type: "checkbox",
                                id: 812,
                                label: "歯磨き",
                                grow: 0,
                                marginLeft: "",
                                marginRight: "10px",
                                shrink: 0,
                              },
                              {
                                type: "checkbox",
                                id: 816,
                                label: "うがい",
                                grow: 0,
                                marginLeft: "",
                                marginRight: "10px",
                                shrink: 0,
                              },
                              {
                                type: "box",
                                id: 818,
                                contents: [
                                  {
                                    type: "checkbox",
                                    id: 817,
                                    label: "拭き取り",
                                    grow: 0,
                                    marginLeft: "",
                                    marginRight: "10px",
                                    shrink: 0,
                                  },
                                  {
                                    type: "box",
                                    id: 819,
                                    contents: [
                                      {
                                        type: "checkbox",
                                        id: 820,
                                        label: "実施",
                                        grow: 0,
                                        marginLeft: "",
                                        marginRight: "10px",
                                        shrink: 0,
                                      },
                                      {
                                        type: "checkbox",
                                        id: 821,
                                        label: "指導",
                                        grow: 0,
                                        marginLeft: "",
                                        marginRight: "",
                                        shrink: 0,
                                      },
                                    ],
                                    alignItems: "align-center",
                                    marginRight: "20px",
                                  },
                                ],
                                alignItems: "align-center",
                              },
                            ],
                            alignItems: "align-center",
                            marginLeft: "",
                            flexGrow: 0,
                            marginRight: "20px",
                          },
                        ],
                        alignItems: "align-center",
                        marginLeft: "",
                        flexGrow: 0,
                        marginRight: "20px",
                        wrap: false,
                      },
                    ],
                    layout: "column",
                    wrap: "wrap",
                    alignItems: "align-start",
                    justifyContent: "justify-start",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 85,
            contents: [
              {
                type: "tcol",
                id: 90,
                contents: [
                  {
                    type: "text",
                    id: 92,
                    text: "衣生活のケア・指導",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 91,
                colspan: "2",
                contents: [
                  {
                    type: "box",
                    id: 266,
                    contents: [
                      {
                        type: "checkbox",
                        id: 267,
                        label: "衣服調整",
                        grow: 0,
                        marginRight: "20px",
                      },
                      {
                        type: "box",
                        id: 822,
                        contents: [
                          {
                            type: "checkbox",
                            id: 269,
                            label: "更衣",
                            grow: 0,
                            marginRight: "10px",
                          },
                          {
                            type: "select",
                            id: 593,
                            dense: true,
                            width: "",
                            flexBasis: "",
                            flexGrow: 0,
                          },
                        ],
                        flexGrow: 0,
                        alignItems: "align-center",
                        marginRight: "20px",
                      },
                      {
                        type: "box",
                        id: 823,
                        contents: [
                          {
                            type: "checkbox",
                            id: 591,
                            grow: 0,
                            label: "シーツ交換",
                            marginRight: "10px",
                          },
                          {
                            type: "select",
                            id: 589,
                            dense: true,
                            width: "",
                            flexBasis: "",
                            flexGrow: 0,
                          },
                        ],
                        alignItems: "align-center",
                        flexGrow: 0,
                        marginRight: "20px",
                      },
                    ],
                    layout: "horizontal",
                    wrap: "wrap",
                    alignItems: "align-center",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 86,
            contents: [
              {
                type: "tcol",
                id: 93,
                contents: [
                  {
                    type: "text",
                    id: 95,
                    text: "食事栄養のケア・指導",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 824,
                colspan: "2",
                contents: [
                  {
                    type: "box",
                    id: 825,
                    contents: [
                      {
                        type: "checkbox",
                        id: 826,
                        label: "栄養指導",
                        grow: 0,
                        marginRight: "20px",
                      },
                      {
                        type: "checkbox",
                        id: 827,
                        label: "食事",
                        grow: 0,
                        marginRight: "20px",
                      },
                      {
                        type: "checkbox",
                        id: 828,
                        label: "飲水",
                        grow: 0,
                        marginRight: "20px",
                      },
                    ],
                    layout: "horizontal",
                    wrap: "wrap",
                    alignItems: "align-center",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 829,
            contents: [
              {
                type: "tcol",
                id: 830,
                rowspan: "4",
                contents: [
                  {
                    type: "text",
                    id: 831,
                    text: "皮膚処置",
                    textAlign: "center",
                  },
                ],
                colspan: "1",
              },
              {
                type: "tcol",
                id: 832,
                rowspan: "",
                contents: [
                  {
                    type: "box",
                    id: 834,
                    contents: [
                      {
                        type: "checkbox",
                        id: 835,
                        label: "褥瘡予防",
                        grow: 0,
                        marginRight: "20px",
                      },
                    ],
                    layout: "horizontal",
                    wrap: "wrap",
                    alignItems: "align-center",
                  },
                ],
                colspan: "2",
              },
            ],
          },
          {
            type: "trow",
            id: 88,
            contents: [
              {
                type: "tcol",
                id: 836,
                rowspan: "",
                contents: [
                  {
                    type: "box",
                    id: 839,
                    contents: [
                      {
                        type: "checkbox",
                        id: 838,
                        label: "褥瘡処置",
                        grow: 0,
                        marginRight: "20px",
                        shrink: 0,
                      },
                      {
                        type: "box",
                        id: 840,
                        contents: [
                          {
                            type: "text",
                            id: 841,
                            text: "部位",
                            flex: "",
                            grow: 0,
                            marginRight: "10px",
                            marginLeft: "",
                            marginBottom: "",
                            color: "",
                            shrink: 0,
                          },
                          {
                            type: "select",
                            id: 842,
                            flexGrow: 0,
                            dense: true,
                          },
                        ],
                        alignItems: "align-center",
                        marginRight: "20px",
                        flexGrow: 0,
                      },
                      {
                        type: "box",
                        id: 843,
                        contents: [
                          {
                            type: "text",
                            id: 844,
                            text: "薬剤",
                            flex: "",
                            grow: 0,
                            marginRight: "10px",
                            marginLeft: "",
                            marginBottom: "",
                            color: "",
                            shrink: 0,
                          },
                          {
                            type: "select",
                            id: 845,
                            flexGrow: 0,
                            dense: true,
                          },
                        ],
                        alignItems: "align-center",
                        marginRight: "20px",
                        flexGrow: 0,
                      },
                      {
                        type: "box",
                        id: 846,
                        contents: [
                          {
                            type: "text",
                            id: 847,
                            text: "方法",
                            flex: "",
                            grow: 0,
                            marginRight: "10px",
                            marginLeft: "",
                            marginBottom: "",
                            color: "",
                            shrink: 0,
                          },
                          {
                            type: "select",
                            id: 848,
                            flexGrow: 0,
                            dense: true,
                          },
                        ],
                        alignItems: "align-center",
                        marginRight: "20px",
                        flexGrow: 0,
                      },
                    ],
                    flexGrow: 0,
                    alignItems: "align-center",
                  },
                ],
                colspan: "2",
              },
            ],
          },
          {
            type: "trow",
            id: 96,
            contents: [
              {
                type: "tcol",
                id: 101,
                colspan: "2",
                contents: [
                  {
                    type: "box",
                    id: 849,
                    contents: [
                      {
                        type: "checkbox",
                        id: 850,
                        label: "創処置",
                        grow: 0,
                        marginRight: "20px",
                        shrink: 0,
                      },
                      {
                        type: "box",
                        id: 851,
                        contents: [
                          {
                            type: "text",
                            id: 852,
                            text: "部位",
                            flex: "",
                            grow: 0,
                            marginRight: "10px",
                            marginLeft: "",
                            marginBottom: "",
                            color: "",
                            shrink: 0,
                          },
                          {
                            type: "select",
                            id: 853,
                            flexGrow: 0,
                            dense: true,
                          },
                        ],
                        alignItems: "align-center",
                        marginRight: "20px",
                        flexGrow: 0,
                      },
                      {
                        type: "box",
                        id: 854,
                        contents: [
                          {
                            type: "text",
                            id: 855,
                            text: "薬剤",
                            flex: "",
                            grow: 0,
                            marginRight: "10px",
                            marginLeft: "",
                            marginBottom: "",
                            color: "",
                            shrink: 0,
                          },
                          {
                            type: "select",
                            id: 856,
                            flexGrow: 0,
                            dense: true,
                          },
                        ],
                        alignItems: "align-center",
                        marginRight: "20px",
                        flexGrow: 0,
                      },
                      {
                        type: "box",
                        id: 857,
                        contents: [
                          {
                            type: "text",
                            id: 858,
                            text: "方法",
                            flex: "",
                            grow: 0,
                            marginRight: "10px",
                            marginLeft: "",
                            marginBottom: "",
                            color: "",
                            shrink: 0,
                          },
                          {
                            type: "select",
                            id: 859,
                            flexGrow: 0,
                            dense: true,
                          },
                        ],
                        alignItems: "align-center",
                        marginRight: "20px",
                        flexGrow: 0,
                      },
                    ],
                    flexGrow: 0,
                    alignItems: "align-center",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 97,
            contents: [
              {
                type: "tcol",
                id: 102,
                colspan: "2",
                contents: [
                  {
                    type: "box",
                    id: 860,
                    contents: [
                      {
                        type: "checkbox",
                        id: 861,
                        label: "外用薬塗布",
                        grow: 0,
                        marginRight: "20px",
                        shrink: 0,
                      },
                      {
                        type: "box",
                        id: 865,
                        contents: [
                          {
                            type: "text",
                            id: 866,
                            text: "薬剤",
                            flex: "",
                            grow: 0,
                            marginRight: "10px",
                            marginLeft: "",
                            marginBottom: "",
                            color: "",
                            shrink: 0,
                          },
                          {
                            type: "select",
                            id: 867,
                            flexGrow: 0,
                            dense: true,
                          },
                        ],
                        alignItems: "align-center",
                        marginRight: "20px",
                        flexGrow: 0,
                      },
                    ],
                    flexGrow: 0,
                    alignItems: "align-center",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 104,
            contents: [
              {
                type: "tcol",
                id: 108,
                contents: [
                  {
                    type: "text",
                    id: 110,
                    text: "薬の管理・指導",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 109,
                rowspan: "",
                colspan: "2",
                contents: [
                  {
                    type: "box",
                    id: 290,
                    layout: "vertical",
                    contents: [
                      {
                        type: "box",
                        id: 291,
                        layout: "horizontal",
                        contents: [
                          {
                            type: "checkbox",
                            id: 294,
                          },
                          {
                            type: "text",
                            id: 295,
                            flexBasis: "auto",
                            text: "残薬確認 ",
                          },
                          {
                            type: "checkbox",
                            id: 619,
                          },
                          {
                            type: "text",
                            id: 620,
                            flexBasis: "auto",
                            text: "服薬介助",
                          },
                          {
                            type: "checkbox",
                            id: 621,
                          },
                          {
                            type: "text",
                            id: 622,
                            flexBasis: "auto",
                            text: "内服セット(",
                          },
                          {
                            type: "text",
                            id: 623,
                            flexBasis: "auto",
                            text: "期間",
                          },
                          {
                            type: "select",
                            id: 624,
                            dense: true,
                            width: "50px",
                            flexBasis: "",
                          },
                          {
                            type: "text",
                            id: 625,
                            flexBasis: "auto",
                            text: ")　",
                          },
                          {
                            type: "checkbox",
                            id: 626,
                          },
                          {
                            type: "text",
                            id: 627,
                            flexBasis: "auto",
                            text: "点眼",
                          },
                          {
                            type: "checkbox",
                            id: 628,
                          },
                          {
                            type: "text",
                            id: 629,
                            flexBasis: "auto",
                            text: "吸入(",
                          },
                          {
                            type: "select",
                            id: 630,
                            dense: true,
                            width: "50px",
                            flexBasis: "",
                          },
                          {
                            type: "text",
                            id: 631,
                            flexBasis: "auto",
                            text: ")　",
                          },
                          {
                            type: "checkbox",
                            id: 632,
                          },
                          {
                            type: "text",
                            id: 633,
                            flexBasis: "auto",
                            text: "座薬 ",
                          },
                        ],
                        wrap: "wrap",
                      },
                      {
                        type: "box",
                        id: 292,
                        layout: "horizontal",
                        contents: [
                          {
                            type: "checkbox",
                            id: 296,
                          },
                          {
                            type: "text",
                            id: 297,
                            flexBasis: "auto",
                            text: "点滴",
                          },
                        ],
                      },
                      {
                        type: "box",
                        id: 293,
                        layout: "horizontal",
                        contents: [
                          {
                            type: "checkbox",
                            id: 298,
                          },
                          {
                            type: "text",
                            id: 299,
                            flexBasis: "auto",
                            text: "注射",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 105,
            contents: [
              {
                type: "tcol",
                id: 111,
                contents: [
                  {
                    type: "text",
                    id: 113,
                    text: "リハビリテーション",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 112,
                colspan: "2",
                contents: [
                  {
                    type: "box",
                    id: 301,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 305,
                      },
                      {
                        type: "text",
                        id: 306,
                        flexBasis: "auto",
                        text: "関節可動域",
                      },
                      {
                        type: "checkbox",
                        id: 351,
                      },
                      {
                        type: "text",
                        id: 345,
                        flexBasis: "auto",
                        text: "関節可動域",
                      },
                      {
                        type: "checkbox",
                        id: 352,
                      },
                      {
                        type: "text",
                        id: 346,
                        flexBasis: "auto",
                        text: "関節可動域",
                      },
                      {
                        type: "checkbox",
                        id: 353,
                      },
                      {
                        type: "text",
                        id: 347,
                        flexBasis: "auto",
                        text: "関節可動域",
                      },
                      {
                        type: "checkbox",
                        id: 354,
                      },
                      {
                        type: "text",
                        id: 348,
                        flexBasis: "auto",
                        text: "関節可動域",
                      },
                      {
                        type: "checkbox",
                        id: 355,
                      },
                      {
                        type: "text",
                        id: 349,
                        flexBasis: "auto",
                        text: "関節可動域",
                      },
                    ],
                    wrap: "wrap",
                  },
                  {
                    type: "box",
                    id: 302,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 307,
                      },
                      {
                        type: "text",
                        id: 308,
                        flexBasis: "auto",
                        text: "座位",
                      },
                    ],
                  },
                  {
                    type: "box",
                    id: 303,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 309,
                      },
                      {
                        type: "text",
                        id: 310,
                        flexBasis: "auto",
                        text: "呼吸リハ",
                      },
                    ],
                  },
                  {
                    type: "box",
                    id: 304,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 311,
                      },
                      {
                        type: "text",
                        id: 312,
                        flexBasis: "auto",
                        text: "口腔リハ",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 106,
            contents: [
              {
                type: "tcol",
                id: 114,
                contents: [
                  {
                    type: "text",
                    id: 116,
                    text: "排痰ケア",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 115,
                colspan: "2",
              },
            ],
          },
          {
            type: "trow",
            id: 107,
            contents: [
              {
                type: "tcol",
                id: 117,
                contents: [
                  {
                    type: "text",
                    id: 119,
                    text: "医療処置",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 118,
                colspan: "2",
                contents: [
                  {
                    type: "box",
                    id: 313,
                    contents: [
                      {
                        type: "checkbox",
                        id: 317,
                      },
                      {
                        type: "text",
                        id: 318,
                        flexBasis: "auto",
                        text: "酸素療法",
                      },
                    ],
                  },
                  {
                    type: "box",
                    id: 314,
                    contents: [
                      {
                        type: "checkbox",
                        id: 319,
                      },
                      {
                        type: "text",
                        id: 320,
                        flexBasis: "auto",
                        text: "胃瘻",
                      },
                    ],
                  },
                  {
                    type: "box",
                    id: 315,
                    contents: [
                      {
                        type: "checkbox",
                        id: 321,
                      },
                      {
                        type: "text",
                        id: 322,
                        flexBasis: "auto",
                        text: "点滴",
                      },
                    ],
                  },
                  {
                    type: "box",
                    id: 316,
                    contents: [
                      {
                        type: "checkbox",
                        id: 323,
                      },
                      {
                        type: "text",
                        id: 324,
                        flexBasis: "auto",
                        text: "その他",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 120,
            contents: [
              {
                type: "tcol",
                id: 122,
                contents: [
                  {
                    type: "text",
                    id: 129,
                    text: "睡眠のケア・指導",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 123,
                colspan: "2",
                contents: [
                  {
                    type: "box",
                    id: 325,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "checkbox",
                        id: 326,
                      },
                      {
                        type: "text",
                        id: 327,
                        flexBasis: "auto",
                        text: "入眠を促すマッサージ",
                      },
                      {
                        type: "checkbox",
                        id: 328,
                      },
                      {
                        type: "text",
                        id: 329,
                        flexBasis: "auto",
                        text: "生活指導",
                      },
                      {
                        type: "checkbox",
                        id: 330,
                      },
                      {
                        type: "text",
                        id: 331,
                        flexBasis: "auto",
                        text: "足浴",
                      },
                    ],
                    wrap: "wrap",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 121,
            contents: [
              {
                type: "tcol",
                id: 124,
                contents: [
                  {
                    type: "text",
                    id: 130,
                    text: "体重",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 125,
                colspan: "2",
                contents: [
                  {
                    type: "box",
                    id: 332,
                    layout: "horizontal",
                    contents: [
                      {
                        type: "textField",
                        id: 333,
                      },
                      {
                        type: "text",
                        id: 334,
                        flexBasis: "auto",
                        text: "kg",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 126,
            contents: [
              {
                type: "tcol",
                id: 127,
                contents: [
                  {
                    type: "text",
                    id: 131,
                    text: "留意点",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 128,
                colspan: "2",
                contents: [
                  {
                    type: "textarea",
                    id: 300,
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 132,
            contents: [
              {
                type: "tcol",
                id: 133,
                contents: [
                  {
                    type: "text",
                    id: 135,
                    text: "次回訪問予定日",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 134,
                colspan: "2",
              },
            ],
          },
        ],
      },
      {
        type: "table",
        id: 136,
        contents: [
          {
            type: "trow",
            id: 137,
            contents: [
              {
                type: "tcol",
                id: 141,
                contents: [
                  {
                    type: "text",
                    id: 144,
                    text: "実績",
                    textAlign: "center",
                  },
                ],
                width: "15%",
              },
              {
                type: "tcol",
                id: 142,
                width: "25%",
              },
              {
                type: "tcol",
                id: 143,
                width: "60%",
              },
            ],
          },
          {
            type: "trow",
            id: 138,
            contents: [
              {
                type: "tcol",
                id: 145,
                contents: [],
              },
              {
                type: "tcol",
                id: 146,
                contents: [
                  {
                    type: "text",
                    id: 148,
                    text: "精神基本療養費",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 147,
              },
            ],
          },
          {
            type: "trow",
            id: 139,
            contents: [
              {
                type: "tcol",
                id: 149,
                contents: [
                  {
                    type: "text",
                    id: 152,
                    text: "加算",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 150,
              },
              {
                type: "tcol",
                id: 151,
              },
            ],
          },
          {
            type: "trow",
            id: 140,
            contents: [
              {
                type: "tcol",
                id: 158,
              },
              {
                type: "tcol",
                id: 159,
                contents: [
                  {
                    type: "text",
                    id: 161,
                    text: "特別管理加算",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 160,
              },
            ],
          },
          {
            type: "trow",
            id: 153,
            contents: [
              {
                type: "tcol",
                id: 162,
              },
              {
                type: "tcol",
                id: 163,
              },
              {
                type: "tcol",
                id: 164,
              },
            ],
          },
          {
            type: "trow",
            id: 154,
            contents: [
              {
                type: "tcol",
                id: 165,
                contents: [
                  {
                    type: "text",
                    id: 168,
                    text: "保険外",
                    textAlign: "center",
                  },
                ],
              },
              {
                type: "tcol",
                id: 166,
                colspan: "2",
              },
            ],
          },
        ],
      },
      {
        type: "table",
        id: 169,
        contents: [
          {
            type: "trow",
            id: 170,
            contents: [
              {
                type: "tcol",
                id: 173,
              },
              {
                type: "tcol",
                id: 174,
              },
            ],
          },
          {
            type: "trow",
            id: 171,
            contents: [
              {
                type: "tcol",
                id: 175,
                colspan: "2",
                contents: [
                  {
                    type: "text",
                    id: 176,
                    text: "経過記録",
                  },
                ],
              },
            ],
          },
          {
            type: "trow",
            id: 172,
            contents: [
              {
                type: "tcol",
                id: 177,
                colspan: "2",
              },
            ],
          },
        ],
      },
      {
        type: "imageUploader",
        id: 361,
      },
    ],
  },
  bindingData: {
    pulseInput: null,
    pulsePressure: null,
    pulsePressureRadio: "良好",
    pulseSelection: "選択",
    bloodPressureLowValue: null,
    breatheInputValue: null,
    breathNoiseRadioValue: null,
    breathNoiseSelectionValue: "選択",
    airCheckbox: null,
    airRadio: "良好",
    spO2Value: null,
    urineAmount: "選択",
    pathSelection: "選択",
    pathSituationSelection: "選択",
    water1234: null,
    waterSelection: "選択",
    tubeSelection: "選択",
    urinaryCleanSelection: "選択",
    intestinalSound: "選択",
    daySelection: "選択",
    daySituation: "選択",
    moonSelection: "選択",
    moonSituation: "選択",
    fireSelection: "選択",
    fireSituation: "選択",
    waterPSelection: "選択",
    waterPSituation: "選択",
    woodSelection: "選択",
    woodSituation: "選択",
    goldSelection: "選択",
    goldSituation: "選択",
    terraSelection: "選択",
    terraSituation: "選択",
    visitorName: null,
    partnerName: null,
    visitDateRadio: "定期",
    visitDatePicker: null,
    visitTimeInterval: "時間選択",
    roomTemperature: null,
    roomHumidity: null,
    bodyTemperature: null,
    pulseSelect: "選択",
    bloodPressureRadio: "良好",
    pulseRadio: "整脈",
    breatheInput: null,
    breatheNoiseRadio: "副雑音あり",
    breatheAir: null,
    breatheAirRadio: "良好",
    spO2Input: null,
    urineVolume: null,
    urinePathVolume: null,
    urinePathSituation: null,
    urineTubeCheckbox: null,
    urineTubecheckbox1: null,
    urineTubeWaterCheckbox: null,
    urineTubeExchange1: null,
    bladderClean: null,
    bladderClean1: null,
    bladderClean2: null,
    urineSituation: null,
    urineSituationSelection: "選択",
    patient: null,
    bloodPressureCheckbox: null,
    bloodPressure: null,
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

export const bindingData = tableTemplate.bindingData;
export const template = tableTemplate.template;
